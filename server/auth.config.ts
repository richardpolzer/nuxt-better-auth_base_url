import { defineServerAuth } from '@onmax/nuxt-better-auth/config'

export default defineServerAuth({
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
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
  },
  trustedOrigins: ['http://localhost:3000']
})
