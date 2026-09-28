// https://nuxt.com/docs/api/configuration/nuxt-config

// The fleet serves this app at its own hostname and passes it in as FLEET_APP_HOST.
// `nuxt dev` (Vite) answers any other Host with "Blocked request. This host is not
// allowed", so trust exactly that one; with no fleet hostname there is no way to know
// it up front, so accept any. The built server (.output) does no host check.
const allowedHosts = process.env.FLEET_APP_HOST ? [process.env.FLEET_APP_HOST] : true

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: { server: { allowedHosts } },
})
