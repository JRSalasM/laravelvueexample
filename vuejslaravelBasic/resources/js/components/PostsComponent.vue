<template>
    <div class="container m-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card mb-3 mt-3" v-for="item in list">
                    <router-link class="card-header" :to="{name: 'post', params:{ slug: item.id }}" v-text="item.title"></router-link>
                    <div class="card-body">
                        <p>{{ item.id }}</p>
                        <p class="card-text" v-text="item.body"></p>
                    </div>
                </div>
                <infinite-loading @infinite="infiniteHandler">
                    <div slot="no-more">No hay mas datos</div>
                    <!-- <div slot="spinner">Cargando...</div> -->
                    <div slot="no-results">Sin resultados</div>
                </infinite-loading>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list: [],
            page: 0
        };
    },
    methods:{
        infiniteHandler($state) {
            this.page++;
            let url = `http://127.0.0.1:8000/api/posts?page=${this.page}`;
            axios.get(url)
            .then(res=>{
                let posts = res.data.data;
                if(posts.length){
                    this.list = this.list.concat(posts);
                    $state.loaded();
                }else{
                    $state.complete();
                }
            })
            

        }
    }
}
</script>