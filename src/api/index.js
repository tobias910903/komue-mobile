console.log("当前环境:", process.env.ENV_CONFIG, " 接口域名:", process.env.BASE_URL);

import {get, post, upload} from '@/api/axios'

export default {
    testAjax1: data => get({url: "/getTest", data}),
    testAjax2: data => post({url: "/postTest", data}),
    testAjax3: data => upload({url: "/uploadTest", body: data})
}
