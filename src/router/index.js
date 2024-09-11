import { createRouter, createWebHistory } from 'vue-router'
import PagePreview from "@/pages/PagePreview.vue";
import PageForm from "@/pages/PageForm.vue";

const routes = [
  {
    path: '/preview',
    name: 'PagePreview',
    component: PagePreview
  },
  {
    path: '/',
    name: 'PageForm',
    component: PageForm
  },  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
