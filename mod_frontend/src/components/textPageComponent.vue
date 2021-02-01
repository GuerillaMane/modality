<template>
    <div id="text-page" class="app-component-column">
        <div class="card-table">
            <div class="bottom-margin">
                <mu-row class="bottom-margin" justify-content="center">
                    <mu-text-field v-model="searchText" type="text"
                                   help-text="текст" @input="getPageTexts"></mu-text-field>

                    <mu-text-field v-model="searchUrl" type="text"
                                   help-text="url" @input="getPageTexts"></mu-text-field>

                    <a class="create" title="Сброс" @click="resetFilters">
                        <span style="font-size: 17px;"><font-awesome-icon icon="times-circle"/></span>
                    </a>
                </mu-row>
            </div>

            <table class="text-table" v-if="listTexts">
                <thead>
                    <tr>
                        <th>Язык</th>
                        <th>Текст</th>
                        <th>URL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(obj, index) in listTexts" :key="index">
                        <td>{{ obj.lang.name }}</td>
                        <td>{{ obj.text }}</td>
                        <td>
                            <a v-if="obj.url" :href="obj.url" target="_blank">{{ obj.url }}</a>
                            <span v-else>-</span>
                        </td>
                        <td>
                            <a class="create" @click.prevent="">
                                <font-awesome-icon icon="pencil-alt" title="Редактировать"/>
                            </a>
                            <a class="create" @click.prevent="">
                                <font-awesome-icon icon="trash-alt" title="Удалить"/>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div v-if="listTexts">
                <pagination v-if="countResult > limit"
                    :quantity="countResult" :limit="limit" :currentPage="page"
                    @update="getPageTexts" @setPage="setPage">
                </pagination>
            </div>

            <mu-row v-if="errSearch" class="error-response" justify-content="center">
                {{errSearch}}</mu-row>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-unused-vars */

    import axios from 'axios';

    export default {
        name: "textPageComponent",
        components: {
            pagination: () => import('./pagination.vue'),
        },
        data: function () {
            return {
                listTexts: null,
                countResult: null,
                page: 1,
                limit: 1,
                searchText: '',
                searchUrl: '',
                errSearch: '',
            }
        },
        methods: {
            getPageTexts: function () {
                this.setInitPage();
                this.errSearch = '';
                let requestData = {
                    "page": this.page,
                    "limit": this.limit,
                    "sort_by": [
                        {
                            "name":"it.id",
                            "ascending": true
                        },
                        {
                            "name":"it.object_text",
                            "ascending": true
                        }
                    ],
                    "filter": {
                        "text_like": this.searchText,
                        "url_like": this.searchUrl
                    }
                };
                axios.post('/texts', requestData)
                    .then(response => {
                        if (response.data.obect_texts) {
                            this.listTexts = response.data.obect_texts;
                            this.countResult = response.data.count;
                        } else {
                            this.listTexts = null;
                            this.countResult = null;
                            this.errSearch = 'Ничего не найдено';
                        }
                    })
                    .catch(error => {
                        console.log(error.response.data.error);
                    });
            },

            resetFilters: function () {
                this.searchText = '';
                this.searchUrl = '';
                this.getPageTexts();
            },

            setInitPage: function () {
                this.page = 1;
            },

            setPage: function (page) {
                this.page = page;
            }
        },
        mounted() {
            this.getPageTexts();
        }
    }
</script>

<style scoped>
    a {
        color: #6F6F6F;
        text-decoration: underline;
    }
</style>