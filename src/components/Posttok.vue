<template>
    <div class="container">
        test token
    </div>
</template>
<script>
import axios from 'axios'
import { API_URL } from '../api/config'

export default {
    name: 'Posttok',
    created: function() {
        axios.post(API_URL + '/wp-json/jwt-auth/v1/token', {
            username: 'admin',
            password: 'W69I BRH0 GwR2 4lOw UgJu fP6y'
        }).then(function(res) {
            console.log(res);
        })
    }

}
</script>