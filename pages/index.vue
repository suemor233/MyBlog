<template>
  <ContentLayout>
    <div >
      <ArticleCard v-for="article in articles.articleInfo.article" :key="article.id" :article="article"/>
    </div>
    <NSpace justify="center">
      <NPagination :page-count="100"/>
    </NSpace>
  </ContentLayout>
</template>

<script setup lang="ts">
import {useArticle} from "~/store/article";
import { NPagination,NSpace } from "naive-ui";

  const articles = useArticle()

</script>

<style lang="scss" scoped>

</style>
