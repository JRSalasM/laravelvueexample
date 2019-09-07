<template>
    <div>
        <section class="jumbotron text-center">
            <div class="container">
            <h1 class="jumbotron-heading" v-text="post.title"></h1>            
            </div>
        </section>
        <div class="container">
            <div class="row justify-content-center">
                <div class="cold-md-8">
                    <div v-if="post">
                        <p v-text="post.excerpt"></p>
                        <div v-html="post.body"></div>
                    </div>
                    <div class="text-center m-5" v-else>
                        <h2>POST NO ENCONTRADO</h2>
                    </div>
                    <hr>
                    <h1>Otros acticulos</h1>
                    <posts></posts>
                </div>                                
            </div>  
        </div>        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['slug'],
    data() {
        return {
            post: {}
        };
    },
    created(){                
        let url = `http://127.0.0.1:8000/api/post/${this.slug}`;
        axios.get(url)
        .then(res=>{
            this.post = res.data
        })
    }
}
</script>