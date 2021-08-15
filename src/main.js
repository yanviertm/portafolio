import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueAnimate from 'vue-animate-scroll'

Vue.use(VueAnimate)

Vue.use(Antd);
Vue.use(VueTyperPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
