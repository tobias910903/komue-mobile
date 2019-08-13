let timeFun = {
  getTime: function () { // 获取当前时间戳
    return Date.parse(new Date());
  },
  format : function ($thisTime,fmt) { // 时间格式化
    var o = {
      "M+": $thisTime.getMonth() + 1, //月份
      "d+": $thisTime.getDate(), //日
      "H+": $thisTime.getHours(), //小时
      "m+": $thisTime.getMinutes(), //分
      "s+": $thisTime.getSeconds(), //秒
      "q+": Math.floor(($thisTime.getMonth() + 3) / 3), //季度
      "S": $thisTime.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, ($thisTime.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
}

export {timeFun}

// 使用
// import {timeFun} from '@/utils/time'
// Vue.prototype.$time = timeFun

// 调用
// this.$time.getTime();
// this.$time.format(new Date(timestamp), "yyyy-MM-dd HH:mm:ss");
