<template>
  <div class="bg-white mt-5 ">
    <header class="header flex justify-between px-20 pt-10">
      <h1 class="text-2xl text-gray-500 mb-3">初学 Nuxt3</h1>
      <div class="text-gray-500">
        <i class="fa-solid fa-calendar-days mr-2"/>
        <span>2022-05-19</span>
      </div>
    </header>
    <div class="main px-20 pt-2 leading-8">
      <span class="font-bold card-subtitle block pb-3">系统</span>
      <div class="mt-5 ">
        <p>早在去年 Vue3 的正式版就发布了，但其周边生态的跟进却较为缓慢，当我们有 SSR 的需求时，可能会去选择 react 的 nextjs 来完成。但最近 Nuxt3 进入了 rc.3 版本了，据官方所说在 6
          月份就要发布稳定版了，也是时候该去学习下了。其实早在 1 个月前的 beta版本我就接触过了，只不过启动报错直接劝退，看来现在已经修复了那个 bug。也是时候该去学习下了。其实早在 1 个月前的
          beta版本我就接触过了，只不过启动报错直接劝退，看来现在已经修复了那个 bug。也是时候该去学习下了。其实早在 1 个月前的 beta版本我就接触过了，只不过启动报错直接劝退，看来现在已经修复了那个 bug。</p>
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
