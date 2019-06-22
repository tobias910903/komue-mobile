let validatorFun = {
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
}

export {validatorFun}

// 使用
// import {validatorFun} from '@/utils/validator'
// Vue.prototype.$validator = validatorFun

// mounted 中:
// this.$validator.isEmail("admin@lihuyong.com"); 