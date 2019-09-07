<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
            <h1 class="jumbotron-heading">Profile</h1>            
            </div>
        </section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="cold-md-8" v-html="username">
                </div>
            </div>  
        </div>        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['username']
}
</script>