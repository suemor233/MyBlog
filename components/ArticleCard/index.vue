<template>
  <div class="bg-white mt-5">
    <header class="header flex justify-between px-20 pt-10">
      <h1 class="text-2xl text-gray-500 mb-3">{{article.title}}</h1>
      <div class="text-gray-500">
        <i class="fa-solid fa-calendar-days mr-2"/>
        <span>2022-05-19</span>
      </div>
    </header>
    <div class="main px-20 pt-2 leading-8">
      <span class="font-bold card-subtitle block pb-3">系统</span>
      <div class="mt-5 ">
        <p>{{article.content}}</p>
      </div>
      <div class="text-blue-500 mt-1 mb-6">
        <a  class="" href="">more >></a>
      </div>
      <div class="footer flex">

        <i class="fa-solid fa-tag text-gray-400 mt-1"></i>
        <ul class="footer-tags ml-3">
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
        <div class="flex-1 text-right">
          <a href="" class="footer-more">展开全文 >></a>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {IArticleContent} from "~/store/types/articleType";

defineProps<{
  article:IArticleContent
}>()


</script>

<style lang="scss" scoped>
.header {
  border-left: 5px solid #4d4d4d;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1em;
    padding-right: 1em;
    border-left: 0 solid #4d4d4d;

  }
  &-subtitle {
    border-bottom: 1px solid #ddd;
  }
}

.main {
  @media (max-width: 768px) {
    padding-left: 1em;
    padding-right: 1em;
  }
}

.footer {
  border-top: 1px solid #ddd;
  padding: 1.5em 0;
  &-tags li{
    background: #ba8f6c;
    display: inline-block;
    text-decoration: none;
    font-weight: 400;
    font-size: 10px;
    color: #fff;
    height: 18px;
    line-height: 18px;
    float: left;
    padding: 0 5px 0 10px;
    position: relative;
    border-radius: 0 5px 5px 0;
    margin: 5px 9px 5px 8px;
    &:before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      left: -18px;
      border: 9px solid transparent;
      border-right-color: #ba8f6c;
    }

    &:after {
      content: ' ';
      position: absolute;
      width: 4px;
      height: 4px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgb(0 0 0 / 30%);
      top: 7px;
      left: 2px;
    }
  }

  &-more {
    background: #4d4d4d;
    color: #fff;
    font-size: 12px;
    padding: 5px 8px;
    line-height: 16px;
    border-radius: 2px;
    transition: background .3s;
  }
}
</style>
