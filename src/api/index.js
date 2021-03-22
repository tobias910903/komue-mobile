console.log("当前环境:", process.env.NODE_ENV, " 接口域名:", process.env.VUE_APP_API);

import {get, post, upload} from '@/api/axios'

export default {
    testAjax1: data => get({url: "/getTest", data}),
    testAjax2: data => post({url: "/postTest", data}),
    testAjax3: data => upload({url: "/uploadTest", body: data})
}
