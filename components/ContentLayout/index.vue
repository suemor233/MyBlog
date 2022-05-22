<template>
  <div class="content-right p-7">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

.content-right {
  margin-left: 20.5em;
  @media (max-width: 768px) {
    position: static;
    margin: 0;
    padding: .5em;
  }
}
</style>
