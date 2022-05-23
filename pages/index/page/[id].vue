<template>
    <div>
        <ArticleCard v-for="article in articles.articleInfo.article" :key="article.id" :article="article" />
    </div>
</template>
  
<script setup lang='ts'>
import { useArticle } from "~/store/article";

const articles = useArticle()
</script>
  
<style>
</style>