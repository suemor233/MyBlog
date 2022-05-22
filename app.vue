<template>
  <div class="main">
    <SideBar />
    <NuxtPage />
  </div>
</template>


<script setup lang="ts">

onBeforeMount(() => {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
})
</script>

<style lang="scss" scoped>
.main {
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
