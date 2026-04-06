import NProgress from 'nprogress'

export default defineNuxtPlugin((nuxtApp) => {
  // Configure NProgress behaviour
  NProgress.configure({
    showSpinner: false,
    speed: 400,
    minimum: 0.1,
    easing: 'ease',
  })

  // Start progress bar on route navigation begin
  nuxtApp.hook('page:loading:start', () => {
    NProgress.start()
  })

  // Finish progress bar when page has finished loading
  nuxtApp.hook('page:loading:end', () => {
    NProgress.done()
  })
})
