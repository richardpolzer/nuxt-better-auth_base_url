<script setup lang="ts">
const { loggedIn, user, signIn, signOut, ready } = useUserSession()
</script>

<template>
  <div class="flex items-center gap-2">
    <UButton
      v-if="!ready"
      loading
    >
      Loading
    </UButton>
    <UButton
      v-if="ready && loggedIn"
      :avatar="{ src: user?.image ?? undefined }"
      icon="lucide:log-out"
      @click="signOut()"
    >
      {{ user?.name }}
    </UButton>
    <UButton
      v-if="ready && !loggedIn"
      icon="lucide:log-in"
      @click="signIn.social({ provider: 'github' })"
    >
      Login
    </UButton>
  </div>
</template>
