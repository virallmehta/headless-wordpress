<template>
    <div>
        <h3>List Post</h3>
        <table class="table is-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="post in posts" v-bind:key="post.id">
                      <th scope="row">{{ post.id }}</th>
                      <td>{{ post.title.rendered }}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios';

    axios.interceptors.request.use(config => {
        console.log('Request was send');
  //      console.log(config);
        return config;
    },
    error => {
        return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
        console.log('Response was received');
//        console.log(response);

        return response;
    }, 
    error => {
        return Promise.reject(error);
    });
    
    //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    const postURL = 'https://wpheadlessvue.lndo.site/wp-json/wp/v2/posts';
    //const apiHost = 'https://wpheadlessvue/lndo.site/wp-json';

    // const conf = 
    //     {
    //         method: 'GET',
    //         // withCredentials: true,
            // auth: {
            //     'username': 'admin',
            //     'password': 'admin#123'
            // },
            // headers: {
            //     //'Access-Control-Allow-Origin': '*',
            //     //'Access-Control-Allow-Credentials': 'true',
            //     //'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            //     //'Accept': 'application/json',
            //     //'Content-Type': 'application/json;charset=UTF-8',
            //     //"Access-Control-Allow-Headers": "Origin,Accept, X-Requested-With, Content-Type, Authorization, Accept, X-Auth-Token",
            //     //'Access-Control-Allow-Headers': 'Origin, X-Request-With, Content-Type, Authorization, Accept',
            //     // "Access-Control-Max-Age": "-1",
            //     // 'Cache-Control': 'public, max-age=-1',
            // }
        // };

    // const conf = 
    //     {
    //         method: 'GET',
    //         withCredentials: true,
    //         auth: {
    //             'username': 'admin',
    //             'password': 'AjII WauQ Js4B XiOq MTcV 0ML9'
    //         },
    //         // headers: {
    //         //     "Authorization": "Basic YWRtaW46YWRtaW4jMTIz"    
    //         // }
    //     };
    
    const confGet = {
        method: 'GET',
        withCredentials: false,
    }

    export default {
        name: 'ListPost',
        data() {
            return {
                posts: null,
            };
        },
        created: function() {
            axios.get(postURL, confGet)
                .then(res => {
                    this.posts = res.data;
                })
                .catch( function(error) {
                    if (error.res) {
                        //console.log("first")
                        console.log(error.res.data);
                        console.log(error.res.status);
                        console.log(error.res.headers);
                    } else if (error.request) {
                        //console.log("second");
                        console.log(error.request);
                        //console.log(error.reject);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }
    }
</script>