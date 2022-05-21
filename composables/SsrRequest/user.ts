import Http from '@/utils/http'

/**
 * 获取标签
 */
export const GetUserInfo =  () => {
    return Http.get('/user')
}
