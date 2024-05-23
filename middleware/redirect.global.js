export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/' && to.path !== '/404') {
    return navigateTo('/');
    // redirect('/');
  }
});
