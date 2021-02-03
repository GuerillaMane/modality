<template>
    <div id="app-modality" class="app-component">
        <div class="left-item">
            <ul class="legend-li" v-if="currentText">
                <li v-for="type in allTypes" :key="type">
                    {{ type.name }}
                </li>
            </ul>
        </div>
        <div>
            <mu-row class="bottom-margin">
                <mu-select v-model="currentLangId" style="width: 100px; margin-right: 30px">
                    <mu-option v-for="lang in allLanguages" :key="lang"
                               :label="lang.name" :value="lang.id">
                    </mu-option>
                </mu-select>

<!--                <div v-if="typeChoice">-->
<!--                    <mu-text-field v-model="typeChoice.name" type="text" readonly help-text="Выбранная модальность"-->
<!--                                   style="width: 300px;">-->
<!--                    </mu-text-field>-->

<!--                    <a class="create" @click.prevent="approveAdd" title="подтвердить">-->
<!--                        <font-awesome-icon icon="check-circle" />-->
<!--                    </a>-->
<!--                    <a class="create" @click.prevent="cancelAdd" title="отмена">-->
<!--                        <font-awesome-icon icon="times-circle" />-->
<!--                    </a>-->
<!--                </div>-->
            </mu-row>

<!--            <mu-row v-if="result" class="error-response" justify-content="center">-->
<!--                <span class="orange-text">{{result}}</span>-->
<!--            </mu-row>-->

            <mu-row v-if="errResult" class="error-response" justify-content="center">
                <span class="red-text">{{errResult}}</span>
            </mu-row>

            <mu-row v-if="result" class="error-response" justify-content="center">
                <span class="orange-text">{{result}}</span>
            </mu-row>

            <mu-row v-if="errResult" class="error-response" justify-content="center">
                <span class="red-text">{{errResult}}</span>
            </mu-row>

            <mu-row class="bottom-margin" @contextmenu="openMenu">
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
        </div>

        <div class="right-item">
            <mu-row>
                <button class="text-button" @click="openTexts=true">Список текстов</button>
            </mu-row>
        </div>

        <text-page-component v-if="openTexts" :open="openTexts"
                @getText="getText" @close="openTexts=false">
        </text-page-component>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars */

    import axios from 'axios';
    import $ from 'jquery';

    export default {
        name: "modalityComponent",
        components: {
            textPageComponent: () => import('./textPageComponent.vue')
        },
        data: function () {
            return {
                // textString: '',
                textData: {
                    text: null,
                    // url: null,
                    lang: {
                        id: null
                    }
                },
                selectedText: '',
                selectedModalityStart: null,

                currentText: null,
                currentTextId: null,
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

                openTexts: false,
                textHighlighted: false,

                editMode: true,
                fixMode: false,

                modalitiesColors: ['green', 'light-red', 'blue', 'yellow', 'violet', 'gray', 'mint', 'purple', 'ginger',
                    'peach', 'brown', 'pink', 'light-blue', 'orange', 'red', 'acid-green', 'fluorescent-orange',
                    'prune'],

                // currentUrl: '',

                // result: null,
                errResult: null,
            }
        },
        methods: {
            fixText: function () {
                if (this.currentLangId) {
                    document.getElementById("txt").readOnly = "true";
                    this.editMode = false;
                    this.fixMode = true;
                    this.putText();
                } else {
                    this.errResult = 'Выберите язык данного текста';
                    const self = this;
                    setTimeout(function () {
                        self.errResult = null;
                    }, 2000);
                }
            },

            nextText: function () {
                this.typeChoice = null;
                this.currentText = '';
                this.currentTextId = null;
                this.currentLangId = null;
                this.destroyTextHighlight(this.textHighlighted);
                document.getElementsByTagName("textarea")[0].readOnly = false;
                this.fixMode = false;
                this.editMode = true;
            },

            selectHighlightedText: function () {
                let txtArea = document.getElementById("txt");
                this.selectedText = txtArea.value.substring(txtArea.selectionStart, txtArea.selectionEnd);
                this.selectedModalityStart = txtArea.selectionStart;

            },

            chooseType: function (type) {
                this.typeChoice = type;
                this.approveAdd();
                this.closeMenu();
            },

            approveAdd: function () {
                if (this.typeChoice && this.selectedText) {
                    let requestData = {
                        text: this.selectedText,
                        type_id: this.typeChoice.id,
                        text_id: this.currentTextId,
                        start_symbol: this.selectedModalityStart
                    };
                    axios.put('/modality', requestData)
                    .then(response => {
                        if (response.status === 200) {
                            this.getText(this.currentTextId);
                            this.cancelAdd();
                        }
                    })
                    .catch(response => {
                        // console.log(response);
                        this.errResult = 'Ошибка добавления';
                    })
                }
            },

            cancelAdd: function () {
                this.errResult = null;
                this.typeChoice = null;
                this.selectedText = '';
                this.selectedModalityStart = null;
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
                    this.allTypes = response.data.types;
                })
                .catch(response => {
                    console.log(response);
                });
            },

            getText: function (textId) {
                this.currentLangId = null;
                axios.get(`text?id=${textId}`)
                .then(response => {
                    console.log(response);
                    this.currentText = response.data.text;
                    this.currentTextId = response.data.id;
                    this.currentLangId = response.data.lang.id;
                    this.editMode = false;
                    this.fixMode = true;
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
                    this.modalitiesObjectArray = response.data.modalities;
                    // this.currentModalities = response.data.modalities.map(o => o.text);
                })
                .then(() => {
                    this.destroyTextHighlight(this.textHighlighted);
                    let indexArray = this.splitModalitiesByType();
                    if (indexArray) {
                        this.highlightText(indexArray);
                    }
                })
                .catch(error => {
                    console.log(error.response.data.error);
                })
            },

            putText: function () {
                let requestData = {
                    text: this.currentText,
                    // url: this.currentUrl,
                    lang: {
                        id: this.currentLangId
                    }
                }
                axios.put('/text', requestData)
                    .then(response => {
                        if (response.status === 200) {
                            this.currentTextId = response.data.id;

                        }
                    })
                    .then(() => {

                    })
                    .catch(response => {
                        // console.log(response);
                        this.errResult = response.response.data.error;
                    });
            },

            highlightText: function (highlight) {
                this.textHighlighted = true;
                $('.mod-text').highlightWithinTextarea({
                    highlight: highlight
                })
            },

            destroyTextHighlight: function (isHighlighted) {
                if (isHighlighted) {
                    $('.mod-text').highlightWithinTextarea('destroy');
                    this.textHighlighted = false;
                }
            },

            splitModalitiesByType: function () {
                if (this.modalitiesObjectArray) {
                    let splittedModalitiesArray = [];
                    let tmpIndexArray = [];
                    for (let i = 1; i < 19; i++) {
                        for (let obj of this.modalitiesObjectArray) {
                            if (obj.type_id === i) {
                                let lastSymbol = obj.start_symbol + obj.text.length;
                                tmpIndexArray.push([obj.start_symbol, lastSymbol]);
                            }
                        }
                        splittedModalitiesArray.push(
                            {
                                'highlight': tmpIndexArray,
                                'className': this.modalitiesColors[i - 1]
                            }
                        );
                        tmpIndexArray = [];
                    }
                    console.log(splittedModalitiesArray)
                    return splittedModalitiesArray;
                } else return null
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

</style>