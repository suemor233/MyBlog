<template>
  <div class="main">
      <SideBar/>
      <NuxtPage/>
  </div>
</template>


<script setup lang="ts">

</script>

<style lang="scss" scoped>
.main {
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
