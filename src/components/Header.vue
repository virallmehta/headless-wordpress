<template>
    <header class="site-header">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand">
                    <router-link to="/home" class="navbar-brand">
                        Headless WordPress
                    </router-link>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
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
                            <li class="nav-item">                                
                                <router-link to="/sample" class="nav-link">Sample</router-link>
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