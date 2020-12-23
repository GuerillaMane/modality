<template>
    <div id="app-modality" @contextmenu="openMenu">
        <mu-row class="bottom-margin">
            <mu-select v-model="currentLangId">
                <mu-option v-for="lang in allLanguages" :key="lang"
                           :label="lang.name" :value="lang.id">
                </mu-option>
            </mu-select>
        </mu-row>

        <mu-row class="bottom-margin">
            <textarea v-model="textString" id="txt" class="mod-text"></textarea>
        </mu-row>

        <mu-row class="bottom-margin">
            <button class="def-button" @click.prevent="fixText">Зафиксировать</button>
            <button class="def-button" @click.prevent="nextText">След.</button>
        </mu-row>

        <ul id="right-click-menu" tabindex="-1" ref="right" v-if="viewMenu"
            @blur="closeMenu" :style="{top:top, left:left}">
            <li v-for="type in allTypes" :key="type">
                {{ type.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "modalityComponent",
        data: function () {
            return {
                textString: '',
                textData: {
                    text: null,
                    url: null,
                    lang: {
                        id: null
                    }
                },
                selectedText: '',

                viewMenu: false,
                top: '0px',
                left: '0px',

                typeChoice: null,
                allTypes: null,

                // languagesList: null
                allLanguages: null,
                currentLangId: null,
            }
        },
        methods: {
            fixText: function () {
                document.getElementById("txt").readOnly = "true";
            },

            nextText: function () {
                this.textString = '';
                document.getElementsByTagName("textarea")[0].readOnly = false;
            },

            selectHighlightedText: function () {
                let txtArea = document.getElementById("txt");
                this.selectedText = txtArea.value.substring(txtArea.selectionStart, txtArea.selectionEnd);
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
                        console.log(response.data)
                    }
                })
            .catch(response => {
                console.log(response);
            });
            },

            // putText: function () {
            //
            // }

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
                    this.setMenu(e.y, e.x)
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
    .wrapper {
        width: 100%;
    }
    .bottom-margin {
        margin-bottom: 25px;
    }
</style>