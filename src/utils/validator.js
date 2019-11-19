let regexp = {
    isEmail: function (str) { //邮箱
        var reg = /^[A-Za-z\d]+([-_.A-Za-z\d]+)*@([A-Za-z\d]+[-_.])+[A-Za-z\d_-]{2,5}$/;
        var flag = reg.test(str);
        return flag;
    },
    isMobileNum: function (str) { //手机号码
        var reg = /^1\d{10}$/;
        var flag = reg.test(str);
        return flag;
    },
    isIdCard: function (str) { //校验身份证号码，15位或者18位，最后一位可以输入X
        var reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        var flag = reg.test(str);
        return flag;
    },
    isNumeric: function (str) { //是否数值
        var reg = /^-?[0-9]+\.?[0-9]*$/;
        var flag = reg.test(str);
        return flag;
    },
    isDigital: function (str) { //是否数字
        var reg = /^[0-9]+$/;
        var flag = reg.test(str);
        return flag;
    },
    isChinese: function (str) { //是否中文
        var flag = true;
        var testStr = /^[\u4e00-\u9fa5]*$/;
        return testStr.test(str);
    },
    isEmpty: function (str) { //是否是空字符串
        return str.replace(/^\s+|\s+$/g, '') == "";
    },
    isImg: function (str) { //图片格式
        var reg = /.+(\.gif|\.jpg|\.jpeg|\.png)$/i;
        var flag = reg.test(str);
        return flag;
    },
    isUrl: function (str) { //是否为url路径
        return (/^(https:|http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/).test(str);
    }
};

/* 各类型验证方法 */
let validatorFun = function (obj) {
    if (!!obj.require) { // 必填
        if (obj.type) {
            if (obj.value) {
                return validatorRegexp(obj);
            }
        } else {
            if (obj.value) {
                return true;
            }
        }

        console.log(`请添加${obj.name}！`);
        return false;
    } else { // 非必填
        if (!!obj.value) {
            return validatorRegexp(obj);
        }

        return true;
    }
};

/* 带有类型的验证 */
function validatorRegexp(obj) {
    switch (obj.type) {
        case 'email':
            if (regexp.isEmail(obj.value)) {
                return true;
            } else {
                console.log('邮箱格式不正确');
                return false;
            }
            break;

        case 'mobile':
            if (regexp.isMobileNum(obj.value)) {
                return true;
            } else {
                console.log('手机号格式不正确');
                return false;
            }
            break;

        default:
            console.log('没找到指定验证类型');
            return false;
    }

    return false;
}

export {regexp, validatorFun};

/*
* this.$validator({require: false, value: "admin@lihuyong.com", type:"email", name: '邮箱'});
* this.$validator({require: true, value: "ddd", type:"mobile", name: '手机号'});
* */
