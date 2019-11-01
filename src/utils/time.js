let timeFun = {
    getTime: function () { // 获取当前时间戳
        return Date.parse(new Date());
    },
    format: function ($thisTime, fmt) { // 格式化：yyyy-MM-dd HH-mm-ss
        var o = {
            "M+": $thisTime.getMonth() + 1, //月份
            "d+": $thisTime.getDate(), //日
            "H+": $thisTime.getHours(), //小时
            "m+": $thisTime.getMinutes(), //分
            "s+": $thisTime.getSeconds(), //秒
            "q+": Math.floor(($thisTime.getMonth() + 3) / 3), //季度
            "S": $thisTime.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ($thisTime.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
        return fmt;
    },
    diffTime: function (dateTimeStamp) { // 人性化时间格式： 几天前、几小时前、几分钟前...
        var result;
        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var now = parseInt(new Date().getTime());
        var curTime = parseInt(dateTimeStamp); // 秒的话需要 parseInt(dateTimeStamp) * 1000

        var diffValue = now - curTime;
        if (diffValue < 0) {
            return;
        }
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if (monthC >= 1) {
            if (monthC <= 12)
                result = "" + parseInt(monthC) + "月前";
            else {
                result = "" + parseInt(monthC / 12) + "年前";
            }
        } else if (weekC >= 1) {
            result = "" + parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
            result = "" + parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
            result = "" + parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
            result = "" + parseInt(minC) + "分钟前";
        } else {
            result = "刚刚";
        }

        return result;
    }
}

export default timeFun;
