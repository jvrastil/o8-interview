import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BackForwardBtn from '@/components/BackForwardBtn.vue';
import TaskItem from '@/components/TaskItem.vue';
import AllTodoDone from '@/components/All-Todo-Done.vue';

library.add(faAngleLeft, faAngleRight);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('BackForwardBtn', BackForwardBtn);
Vue.component('TaskItem', TaskItem);
Vue.component('AllTodoDone', AllTodoDone);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
