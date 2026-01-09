import { createRouter, createWebHistory } from "vue-router";

// import เมนูบท 7
import MenuIndex from "../components/Menus/Index.vue";
import MenuCreate from "../components/Menus/CreateMenu.vue";
import MenuEdit from "../components/Menus/EditMenu.vue";
import MenuShow from "../components/Menus/ShowMenu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
        path: "/menus", 
        name: "menus", 
        component: MenuIndex 
    },

    { 
        path: "/menu/create", 
        name: "menu-create", 
        component: MenuCreate 
    },

    { 
        path: "/menu/edit/:menuId", 
        name: "menu-edit", 
        component: MenuEdit 
    },

    { 
        path: "/menu/:menuId", 
        name: "menu-show", 
        component: MenuShow 
    },
  ],
});

export default router;
