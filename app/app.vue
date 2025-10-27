<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Splash from '../components/Splash.vue'
import InfoPage from '../components/InfoPage.vue'


const showSplash = ref(true)
const closeSplash = () => (showSplash.value = false)
onMounted(() => setTimeout(closeSplash, 5000))
</script>

<template>
  <div class="site" @click="showSplash && closeSplash()">
    <transition name="fade" mode="out-in">
      <Splash v-if="showSplash" />
      <InfoPage v-else />
    </transition>
  </div>
</template>
