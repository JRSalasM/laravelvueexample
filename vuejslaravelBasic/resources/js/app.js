import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './routes';

window.Vue = require('vue');

Vue.component('app',require('./components/AppComponent.vue').default);
Vue.component('posts',require('./components/PostsComponent.vue').default);
Vue.component('InfiniteLoading',require('vue-infinite-loading').default);



const app = new Vue({
    el:'#app',
    router
})