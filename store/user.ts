import {reactive, Ref} from "@vue/reactivity";
import {GetUserInfo} from "~/composables/SsrRequest/user";
import {acceptHMRUpdate, defineStore} from "pinia";
import {ResponseConfig} from "~/utils/http";

interface userInfoType {
    id: number;
    username: string;
    introduce: string;
    avatar: string;
    github: string;
    email: string;
    twitter: string;
    bilibili: string;
    qq: string;
    createAt: string;
    updateAt: string;
}

export const useUserInfo = defineStore('user', () => {
    const userInfo = reactive<userInfoType>({
            id: 0,
            username: '',
            introduce: '',
            avatar: '',
            github: '',
            email: '',
            twitter: '',
            bilibili: '',
            qq: '',
            createAt: '',
            updateAt: ''
        })

    ;(async () => {
        const res: Ref<ResponseConfig> = await GetUserInfo()
        res.value.code === 200 && Object.assign(userInfo, res.value.data)
    })()

    return {
        userInfo
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserInfo, import.meta.hot))
}
