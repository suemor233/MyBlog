<template>
  <div class="main">
    <SideBar />
    <NuxtPage />
  </div>
</template>


<script setup>
import { NButton } from "naive-ui";
</script>

<style lang="scss" >
@import url(@/assets/css/reset.css);
.main {
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
}


</style>
