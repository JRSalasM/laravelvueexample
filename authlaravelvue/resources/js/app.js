require('./bootstrap');

window.Vue = require('vue');

Vue.component('exampleComponent',require('./components/ExampleComponent.vue').default);
Vue.component('tareas',require('./components/TareasComponent.vue').default);

const app = new Vue({
    el:'#app'
})