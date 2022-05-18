<template>
  <div class="side w-72 bg-white h-screen relative">
    <div class="side-overlay"/>
    <div class="side-header">
      <a href="/" class="side-header-avatar">
        <img src="https://suemor.oss-cn-beijing.aliyuncs.com/img/avatar.jpeg">
      </a>
      <div class="text-3xl font-serif mt-6 transition ">
        <a href="/" class="text-gray-700 hover:text-gray-500">suemor</a>
      </div>
        <ul class="text-md text-gray-500 p-7">
          <li v-for="item in pageTitle" :key="item" class="mt-2">
              {{item}}
          </li>
        </ul>

    </div>
  </div>
</template>

<script setup lang='ts'>

const pageTitle:string[] = ['主页','归档','标签','关于','友链']
const icon = [
  {
    name:'github',
    icon:'',
    url:''
  }
]
</script>

<style lang="scss" scoped>
.side {
  &-overlay {
    position: absolute;
    background-color: #4d4d4d;
    width: 100%;
    height: 11em;
  }

  &-header {
    text-align: center;
    margin: 112px auto;

    &-avatar {
      position: relative;
      display: flex;
      justify-content: center;
      img {
        opacity: 1;
        height: 8em;
        width: 8em;
        border-radius: 50%;
        border: 5px solid #fff;
      }
    }
  }

}

</style>
