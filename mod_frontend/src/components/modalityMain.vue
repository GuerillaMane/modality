<template>
    <div id="app-modality">
        <mu-row class="bottom-margin">
            <mu-select v-model="currentLangId">
                <mu-option v-for="lang in allLanguages" :key="lang"
                           :label="lang.name" :value="lang.id">
                </mu-option>
            </mu-select>
        </mu-row>

        <mu-row class="bottom-margin">
            <textarea v-model="textData" id="txt" class="mod-text"></textarea>
        </mu-row>

        <mu-row class="bottom-margin">
            <button class="def-button" @click.prevent="fixText">Зафиксировать</button>
            <button class="def-button" @click.prevent="nextText">След.</button>
        </mu-row>

        <mu-row>
            <label>{{ selectedText }}</label>
        </mu-row>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "modalityMain",
        data: function () {
            return {
                textData: '',
                selectedText: '',
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
                this.textData = '';
                document.getElementsByTagName("textarea")[0].readOnly = false;
            },

            selectHighlitedText: function () {
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
            }
        },
        mounted() {
            this.getLanguages();
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