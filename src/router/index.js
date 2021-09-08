import Vue from "vue";
import Router from "vue-router";
const cart = () => import("views/cart/cart").catch(err => err);
const home = () => import("views/home/home").catch(err => err);
const category = () => import("views/category/category").catch(err => err);
const profile = () => import("views/profile/profile").catch(err => err);

Vue.use(Router);
//解决多次触发push或者repalce，报错的问题
//NavigationDuplicated

const originPush = Router.prototype.push;
const originReplace = Router.prototype.replace;

Router.prototype.push = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    // originPush.call目的是让VueRouter实例化对象去调用
    //如果不加，那就是window在调用
    return originPush.call(this, location).catch(() => {});
  } else {
    return originPush.call(this, location, onResolved, onRejected);
  }
};

Router.prototype.replace = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    // originPush.call目的是让VueRouter实例化对象去调用
    //如果不加，那就是window在调用
    return originReplace.call(this, location).catch(() => {});
  } else {
    return originReplace.call(this, location, onResolved, onRejected);
  }
};
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: "/home",
      meta: { title: "首页" }
    },

    {
      path: "/cart",
      component: cart,
      meta: { title: "购物车" }
    },
    {
      path: "/home",
      component: home,
      meta: { title: "首页" }
    },
    {
      path: "/category",
      component: category,
      meta: { title: "分类" }
    },
    {
      path: "/profile",
      component: profile,
      meta: { title: "我的" }
    }
  ]
});
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  (document.title = to.matched[0].meta.title), next();
});

export default router;
