<template>
    <header class="site-header">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand">
                    <router-link to="/home" class="navbar-brand">
                    WP +Vuejs
                    </router-link>
                    <div class="collapse navbar-collapse text-right" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/home" class="nav-link">Home</router-link>
                            </li>
                            <li class="nav-item" >
                                <router-link to="/about" class="nav-link">About Us</router-link>
                            </li>
                            <li class="nav-item">    
                                <router-link to="/blog" class="nav-link">Blog</router-link>
                            </li>
                            <li class="nav-item">                                
                                <router-link to="/contact" class="nav-link">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    };
</script>