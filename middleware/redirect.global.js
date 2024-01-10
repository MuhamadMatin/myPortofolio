export default defineNuxtRouteMiddleware((route, redirect) => {
  if (route.path != '/') {
    return navigateTo('/');
    // redirect('/');
  }
});
