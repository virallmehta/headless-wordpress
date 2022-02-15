<template>
    <div class="container">
        Token Validation
    </div>
</template>
<script>
import axios from 'axios'
import { API_URL } from "./config";

export default {
    name: 'TestToken',

    created: function() {
        axios.post( API_URL + '/jwt-auth/v1/token', {
            username: 'admin',
            password: 'W69I BRH0 GwR2 4lOw UgJu fP6y'
        })
        .then ( function( res ){
            console.log( res )
        })
    }
}
</script>