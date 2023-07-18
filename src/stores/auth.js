import { defineStore } from "pinia";
import axios from "axios";
export const useAuthStore = defineStore('auth', {
    state: () => {

    },
    getters: {

    },
    actions: {
        async login() {
            try {
                let res = axios.post('auth/login')
                console.log(res)
            } catch (error) {
                throw error
            }
        }
    }
})