<template>
  <div class="side w-72 bg-white h-full fixed z-50 transition-all">
    <div class="side-overlay" />
    <div class="side-header">
      <a href="/" class="side-header-avatar">
        <img src="https://suemor.oss-cn-beijing.aliyuncs.com/img/avatar.jpeg">
      </a>
      <div class="text-3xl font-serif mt-6 transition-all">
        <a href="/" class="text-gray-700 transition hover:text-gray-500">suemor</a>
      </div>
      <ul class="side-header-tags text-md text-gray-500 p-7">
        <li v-for="item in pageTitle" :key="item" class="mt-2 cursor-pointer transition-all hover:text-gray-400">
          {{ item }}
        </li>
      </ul>

      <div class="flex justify-around w-3/5 m-auto mt-3">
        <i v-for="icon in icons" :class="icon.icon" :style="{color:icon.color}"/>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

const pageTitle: string[] = ['主页', '归档', '标签', '关于', '友链']
const icons = [
  {
    name: 'github',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/suemor233',
    color:'#000'
  },
  {
    name: 'twitter',
    icon: 'fa-brands fa-twitter',
    url: 'https://twitter.com/Suemor233',
    color: '#4AA1E7'
  },
  {
    name: 'qq',
    icon: 'fa-brands fa-qq',
    url: 'https://wpa.qq.com/msgrd?v=3&uin=1502972236&site=qq&menu=yes',
    color: '#55B4EF'
  },
  {
    name: 'bilibili',
    icon: 'fa-brands fa-bilibili',
    url: 'https://github.com/suemor233',
    color: '#479FD1'
  }
]
</script>
<style lang="scss" scoped>
.side {
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    background-color: #EAEAEA;

  }
  &-overlay {
    position: absolute;
    background-color: #4d4d4d;
    width: 100%;
    height: 11em;
    @media (max-width: 768px) {
      height: 6.5em;
    }
  }

  &-header {
    text-align: center;
    margin: 8em auto;
    @media (max-width: 768px) {
      margin: .5em auto;
    }

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

    &-tags {
      @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        padding: 1em 6em;
      }

    }
  }

}
</style>
