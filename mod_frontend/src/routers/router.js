import VueRouter from 'vue-router'
import modalityMain from "../components/modalityMain";

/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const router =  new VueRouter({
  routes: [
    {
      path: '/',
      name: 'modalityMain',
      component: modalityMain
    },
  ],
});

export default router;
