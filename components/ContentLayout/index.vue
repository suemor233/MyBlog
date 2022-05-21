<template>
  <div class="content-right px-5 m-7">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.content-right {
  margin-left: 19.5em;
  @media (max-width: 768px) {
    position: static;
    margin: 0;

  }
}
</style>
