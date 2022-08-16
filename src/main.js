import Vue from 'vue'
import TodoPro from './TodoPro.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(TodoPro),
}).$mount('#app')
