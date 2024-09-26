export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/' && to.path !== '/error') {
    return navigateTo('/');
    //   // redirect('/');
  }
});
