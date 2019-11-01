console.log("当前环境:", process.env.ENV_CONFIG, " 接口域名:", process.env.BASE_URL);

import {get, post, upload} from '@/api/axios'

export default {
    testAjax1: data => get({url: "https://www.lihuyong.com/wp-json/wp/v2/posts", data}),
    testAjax2: data => get({url: "https://www.lihuyong.com/wp-json/wp/v2/postss", data})
}
