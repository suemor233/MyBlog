<template>
  <ContentLayout>
    <ArticleCard v-if="!$route.params.id" v-for="article in articles.articleInfo.article" :key="article.id"
      :article="article" />
    <NuxtChild />
    <NSpace justify="center">
      <NPagination v-model:page="page" :page-count="articles.articleInfo.total" :on-update:page="updatePage" />
    </NSpace>
  </ContentLayout>
</template>

<script setup lang="ts">
import { NPagination, NSpace } from "naive-ui";
import { useArticle } from "~/store/article";

const articles = useArticle()
const route = useRoute()
const router = useRouter()
const page = ref(Number(route.params.id) || 1)
articles.getArticleInfo(page.value, 5)

const updatePage = (_page: number) => {
  articles.getArticleInfo(_page, 5)
  page.value = _page
  router.push(`/page/${_page}`)
}
</script>

<style lang="scss" scoped>
</style>
