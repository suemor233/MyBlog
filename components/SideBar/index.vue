<template>
  <div class="side w-72 bg-white h-full fixed z-50 transition-all">
    <div class="side-overlay"/>
    <div class="side-header">
      <a href="/" class="side-header-avatar">
        <img :src="user.userInfo.avatar">
      </a>
      <div class="text-3xl font-serif mt-6 transition-all">
        <a href="/" class="text-gray-700 transition hover:text-gray-500">{{ user.userInfo.username }}</a>
      </div>
      <ul class="side-header-tags text-md text-gray-500 p-7">
        <div class="mt-2 transition-all" v-for="item in pageTitle" :key="item">
          <li class="cursor-pointer transition-all hover:text-gray-400 inline">
            {{ item }}
          </li>
        </div>
      </ul>
      <div class="flex justify-around w-3/5 m-auto mt-3">
        <a v-for="icon in icons" target="_blank" :key="icon.name" :class="icon.icon" :href="icon.url"
           :style="{color:icon.color}"/>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useUser } from '../../store/user';



const user = useUser()
const pageTitle: string[] = ['主页', '归档', '标签', '关于', '友链']

//Todo 后端接口返回图标
const icons = reactive([
  {
    name: 'github',
    icon: 'fa-brands fa-github',
    url: user.userInfo.github,
    color: '#000'
  },
  {
    name: 'twitter',
    icon: 'fa-brands fa-twitter',
    url: user.userInfo.twitter,
    color: '#4AA1E7'
  },
  {
    name: 'qq',
    icon: 'fa-brands fa-qq',
    url: user.userInfo.qq,
    color: '#55B4EF'
  },
  {
    name: 'bilibili',
    icon: 'fa-brands fa-bilibili',
    url: user.userInfo.bilibili,
    color: '#479FD1'
  }
])
</script>
<style lang="scss" scoped>
.side {
  @media (max-width: 850px) {
    position: relative;
    width: 100%;
    background-color: #EAEAEA;

  }

  &-overlay {
    position: absolute;
    background-color: #4d4d4d;
    width: 100%;
    height: 11em;
    @media (max-width: 850px) {
      height: 6.5em;
    }
  }

  &-header {
    text-align: center;
    margin: 8em auto;
    @media (max-width: 850px) {
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
      @media (max-width: 850px) {
        display: flex;
        justify-content: space-around;
        padding: 1em 6em;
      }

    }
  }

}
</style>
