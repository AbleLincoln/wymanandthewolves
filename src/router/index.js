import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/LoginPage.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/pages/AdminPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      // hacky way to redirect everything invalid to home
      // WARN: if we need dynamic routes this will stop working
      path: "/:invalid",
      redirect: "/",
    },
  ],
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser();

    if (!user) {
      return { name: "login" };
    } else {
      console.log(user);
    }
  }
});

export default router;
