<template>
    <div id="app-modality" @contextmenu="openMenu">
        <mu-row class="bottom-margin">
            <mu-select v-model="currentLangId" style="width: 100px; margin-right: 30px">
                <mu-option v-for="lang in allLanguages" :key="lang"
                           :label="lang.name" :value="lang.id">
                </mu-option>
            </mu-select>

            <div v-if="typeChoice">
                <mu-text-field v-model="typeChoice.name" type="text" readonly help-text="Выбранная модальность" style="width: 300px;">
                </mu-text-field>

                <a class="create" @click.prevent="approveAdd" title="подтвердить"><font-awesome-icon icon="check-circle" /></a>
                <a class="create" @click.prevent="cancelAdd" title="отмена"><font-awesome-icon icon="times-circle" /></a>
            </div>
        </mu-row>

        <mu-row class="bottom-margin">
<!--            <textarea v-model="textString" id="txt" class="mod-text"></textarea>-->
            <textarea v-model="currentText" id="txt" class="mod-text"></textarea>
        </mu-row>

        <mu-row class="bottom-margin">
            <button v-if="editMode" class="def-button" @click.prevent="fixText">Сохранить</button>
            <button v-if="fixMode" class="def-button" @click.prevent="nextText">След.</button>
        </mu-row>

        <ul id="right-click-menu" tabindex="-1" ref="right" v-if="viewMenu"
            @blur="closeMenu" :style="{top:top, left:left}">
            <li v-for="type in allTypes" :key="type" @click="chooseType(type); selectHighlightedText()">
                {{ type.name }}
            </li>
        </ul>
<!--        <div v-if="result"><h5>{{result}}</h5></div>-->
<!--        <div v-if="errResult"><h5 class="orange-text">{{errResult}}</h5></div>-->
    </div>
</template>

<script>
    import axios from 'axios';
    import $ from 'jquery';

    export default {
        name: "modalityComponent",
        data: function () {
            return {
                textString: '',
                textData: {
                    text: null,
                    // url: null,
                    lang: {
                        id: null
                    }
                },
                selectedText: '',

                currentText: null,
                currentModalities: null,
                modalitiesObjectArray: null,

                viewMenu: false,
                top: '0px',
                left: '0px',

                typeChoice: null,
                allTypes: null,

                // languagesList: null
                allLanguages: null,
                currentLangId: null,

                editMode: true,
                fixMode: false,

                modalitiesColors: ['green', 'blue', 'light-red', 'yellow', 'violet', 'gray', 'purple', 'mint', 'ginger',
                    'peach', 'brown', 'pink', 'light-blue', 'orange', 'red', 'acid-green', 'fluorescent-orange',
                    'prune']

                // currentUrl: '',

                // result: null,
                // errResult: null,
            }
        },
        methods: {
            fixText: function () {
                document.getElementById("txt").readOnly = "true";
                this.editMode = false;
                this.fixMode = true;
                // this.putText();
                this.getText(2);
            },

            nextText: function () {
                this.typeChoice = null;
                this.textString = '';
                document.getElementsByTagName("textarea")[0].readOnly = false;
                this.fixMode = false;
                this.editMode = true;
            },

            selectHighlightedText: function () {
                let txtArea = document.getElementById("txt");
                this.selectedText = txtArea.value.substring(txtArea.selectionStart, txtArea.selectionEnd);
                console.log(txtArea.selectionStart);
                console.log(this.selectedText);
            },

            chooseType: function (type) {
                this.typeChoice = type;
                this.closeMenu();
            },

            approveAdd: function () {
                if (this.typeChoice && this.selectedText) {
                    let requestData = {
                        text: this.selectedText,
                        type_id: this.typeChoice.id,
                        text_id: null,
                        start_symbol: null
                    };
                    console.log(requestData);
                    axios.put('/modality', requestData)
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.data);
                            this.cancelAdd();
                            // this.result = 'Добавлено успешно';
                            // const self = this;
                            // setTimeout(function () {
                            //     self.result = null;
                            // }, 2000);
                        }
                    })
                    .catch(response => {
                        console.log(response);
                        // this.errResult = 'Ошибка добавления';
                    })
                }
            },

            cancelAdd: function () {
                // this.errResult = null;
                this.typeChoice = null;
                this.selectedText = '';
            },

            getLanguages: function () {
            axios.get('/langs')
            .then(response => {
                if (response.status === 200) {
                    this.allLanguages = response.data.languages;
                }
            })
            .catch(response => {
                console.log(response);
            });
            },

            getTypes: function () {
                axios.get('/types')
                .then(response => {
                    if (response.status === 200) {
                        this.allTypes = response.data.types;
                    }
                })
                .catch(response => {
                    console.log(response);
                });
            },

            getText: function (textId) {
                axios.get(`text?id=${textId}`)
                .then(response => {
                    // console.log(response.data);
                    this.currentText = response.data.text;
                })
                .then(() => {
                    this.getCurrentTextModalities(textId);
                })
                .catch(error => {
                    console.log(error.response.data.error);
                })
            },

            getCurrentTextModalities: function (textId) {
                axios.get(`modalities?id=${textId}`)
                .then(response => {
                    // console.log(response.data.modalities);
                    this.modalitiesObjectArray = response.data.modalities;
                    this.currentModalities = response.data.modalities.map(o => o.text);
                })
                .then(() => {
                    let indexArray = this.splitModalitiesByType();
                    this.highlightText(indexArray);
                })
                .catch(error => {
                    console.log(error.response.data.error);
                })
            },

            putText: function () {
                let requestData = {
                    text: this.textString,
                    // url: this.currentUrl,
                    lang: {
                        id: this.currentLangId
                    }
                }
                axios.put('/text', requestData)
                    .then(response => {
                      if (response.status === 200) {
                        console.log(response.data);
                        console.log('Текст успешно добавлен');
                        // this.result = 'Текст успешно добавлен';
                      }
                    })
                    .catch(response => {
                      console.log(response);
                      // this.errResult = response.response.data.error;
                    });
            },

            highlightText: function (highlight) {
                $('.mod-text').highlightWithinTextarea({
                    highlight: highlight
                })
            },

            splitModalitiesByType: function () {
                let splittedModalitiesArray = [];
                let tmpIndexArray = [];
                for (let i = 1; i < 19; i++) {
                    for (let obj of this.modalitiesObjectArray) {
                        if (obj.type_id === i) {
                            let lastSymbol = obj.start_symbol + obj.text.length - 1;
                            tmpIndexArray.push([obj.start_symbol - 1, lastSymbol]);
                        }
                    }
                    splittedModalitiesArray.push(
                        {
                            'highlight': tmpIndexArray,
                            'className': this.modalitiesColors[i]
                        }
                    )
                    tmpIndexArray = [];
                }
                return splittedModalitiesArray;
            },

            setMenu: function(top, left) {

                let largestHeight = window.innerHeight - this.$refs.right.offsetHeight - 25;
                let largestWidth = window.innerWidth - this.$refs.right.offsetWidth - 25;

                if (top > largestHeight) top = largestHeight;

                if (left > largestWidth) left = largestWidth;

                this.top = top + 'px';
                this.left = left + 'px';
            },

            closeMenu: function() {
                this.viewMenu = false;
            },

            openMenu: function(e) {
                this.selectHighlightedText();
                this.viewMenu = true;

                this.$nextTick(function() {
                    this.$refs.right.focus();
                    this.setMenu(e.y, e.x);
                }.bind(this));
                e.preventDefault();
            }
        },
        mounted() {
            this.getLanguages();
            this.getTypes();
        }
    }
</script>

<style scoped>
    .bottom-margin {
        margin-bottom: 25px;
    }
</style>