<template>
  <ContentLayout>
    <div >
      <ArticleCard v-for="article in articles.articleInfo.article" :key="article.id" :article="article"/>
    </div>

  </ContentLayout>
</template>

<script setup lang="ts">
  import {useArticle} from "~/store/article";
  

  const articles = useArticle()

</script>

<style lang="scss" scoped>

</style>
