export interface ResponseConfig {
    code: number,
    success: boolean,
    data: any
}
export interface ValueConfig {
    value: any,
    [x: string]: any,
}

const fetch = (url: string, options?: any): Promise<any> => {
    const { secret} = useRuntimeConfig()
    const reqUrl = secret + url
    return new Promise((resolve, reject) => {
        useFetch(reqUrl, { ...options }).then(({ data, error }: any) => {
            if (error.value) {
                reject(error.value)
                return
            }
            const value = data.value
            if (!value) {
                // 这里处理错误回调
                // reject(value)
                // $router.replace('/reject/' + value.status)
            } else {
                resolve(ref<any>(value))
            }
        }).catch((err: any) => {
            console.log(err)
            reject(err)
        })
    })
}

export default new class Http {

    get(url: string, params?: any): Promise<any> {
        return fetch(url, { method: 'get', params })
    }

    post(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'post', body })
    }

    put(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'put', body })
    }

    delete(url: string, body?: any): Promise<any> {
        return fetch(url, { method: 'delete', body })
    }
}
