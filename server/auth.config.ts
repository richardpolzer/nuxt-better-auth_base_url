import { defineServerAuth } from '@onmax/nuxt-better-auth/config'

export default defineServerAuth({
  socialProviders: {
    github: {
      clientId: useRuntimeConfig().githubClientId,
      clientSecret: useRuntimeConfig().githubClientSecret
    }
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 7 * 24 * 60 * 60, // 7 days
      strategy: 'jwe'
    }
  },
  account: {
    storeStateStrategy: 'cookie',
    storeAccountCookie: true
  }
})
