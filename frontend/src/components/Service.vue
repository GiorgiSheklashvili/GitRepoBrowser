<template>
    <div class="service">
        <b-button @click="callRestService()">CALL Spring Boot REST backend service</b-button>
        <h3>{{ response }}</h3>
    </div>
</template>

<script>
    import {AXIOS} from './http-common'

    export default {
        name: "service",
        props: {
            msg: String
        },
        data() {
            return {
                response: [],
                errors: []
            }
        },

        methods: {
            callRestService() {
                AXIOS.get(`hello`)
                    .then(response => {
                        // JSON responses are automatically parsed.
                        this.response = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
