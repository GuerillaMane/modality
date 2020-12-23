import VueRouter from 'vue-router'
import modalityComponent from "../components/modalityComponent";

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'modalityComponent',
      component: modalityComponent
    },
  ],
});

export default router;
