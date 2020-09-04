import axios from 'axios'
import store from '@/store/index'  //引入store
import qs from 'qs'

axios.defaults.timeout = 5000;                        //响应时间

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'http://villa.jisapp.cn'; //配置接口地址

//POST传参序列化(添加请求拦截器)

axios.interceptors.request.use((config) => {
    
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers["x-authorize-token"] =store.state.token
    }

    //在发送请求之前做某件事

    if (config.method === 'post') {

        config.data = qs.stringify(config.data);

    }

    return config;

}, (error) => {

    console.log('错误的传参')

    return Promise.reject(error);

});

//返回状态判断(添加响应拦截器)

axios.interceptors.response.use((res) => {

    if (!res.data.success) {

        return Promise.resolve(res.data);

    }

    return res.data;

}, (error) => {

    console.log(error)

    return Promise.reject(error);

});

//返回一个Promise(发送post请求)

export function fetchPost(url, params) {

    return new Promise((resolve, reject) => {

        axios.post(url, params)

            .then(response => {
                if(response.data.code==2){
                    this.$router.push({
                        path:'/login'
                    })
                }
                resolve(response);
                

            }, err => {

                reject(err);

            })

            .catch((error) => {

                reject(error)

            })

    })

}

////返回一个Promise(发送get请求)

export function fetchGet(url, param) {

    return new Promise((resolve, reject) => {

        axios.get(url, { params: param })

            .then(response => {
                if(response.data.code==2){
                    this.$router.push({
                        path:'/login'
                    })
                }
                resolve(response)

            }, err => {

                reject(err)

            })

            .catch((error) => {

                reject(error)

            })

    })

}

export default {

    fetchPost,

    fetchGet,

}
