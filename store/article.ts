import { acceptHMRUpdate, defineStore } from "pinia";
import { reactive, Ref } from "@vue/reactivity";
import { ResponseConfig } from "~/utils/http";
import { GetArticle } from "~/composables/SsrRequest/article";
import { IArticle } from "~/store/types/articleType";


export const useArticle = defineStore('article', () => {
    const articleInfo = reactive<IArticle>({
        article: [],
        total: 0,
        pageNum: '1',
        pageSize: '5'
    })




    const getArticleInfo = async (pageNum = 1, pageSize = 5) => {
        const res: Ref<ResponseConfig> = await GetArticle({ pageNum, pageSize })
        res.value.data.article.sort((row1, row2) => row2.createAt.localeCompare(row1.createAt))
        res.value.code === 200 && Object.assign(articleInfo, res.value.data)
    }

    return {
        articleInfo,
        getArticleInfo
    }

})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useArticle, import.meta.hot))
}
