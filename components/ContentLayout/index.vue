<template>
  <div class="content-right absolute px-5 m-7">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.content-right {
  left: 18.5em;
  margin: 0;
  @media (max-width: 768px) {
    position: static;
  }
}
</style>
