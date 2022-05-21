import Http from '@/utils/http'

export const GetArticle= (params?: { pageNum?: number, pageSize?: number }) => {
    return Http.get('/article',params)
}
