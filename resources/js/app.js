/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

import Index from './components/Index.vue';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';
import IndexBarang from './components/barang/IndexBarang.vue';
import CreateBarang from './components/barang/CreateBarang.vue';
import ReadBarang from './components/barang/ReadBarang.vue';
import UpdateBarang from './components/barang/UpdateBarang.vue';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar }
  { path: '/', component: Index },
  { path: '/create', component: Create},
  { path: '/read/:id', component: Read, name: 'readPost' },
  { path: '/:id/edit', component: Update, name: 'editPost' },
  { path: '/barang', component: IndexBarang},
  { path: '/createbarang', component: CreateBarang},
  { path: '/readbarang/:id', component: ReadBarang, name: 'readBarang'},
  { path: '/:id/editbarang', component: UpdateBarang, name: 'editBarang'},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  router
}).$mount('#app')
