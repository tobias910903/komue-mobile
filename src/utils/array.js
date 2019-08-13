let arrayFun = {
	getRandomArrayElements: function(arr, count) { // 从数组中随机取出N个
		var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		while (i-- > min) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(min);
	},
	isArray: function (value) { //判断一个对象是否为数组
		return Object.prototype.toString.apply(value) === '[object Array]';
	},
	indexOf: function (arr, value) { //返回一个数在一个数组中的位置
		for (var i = 0, il = arr.length; i < il; i++) {
			if (arr[i] == value) return i;
		}
		return -1;
	},
	unique: function (arr) { //元素去重
		var len = arr.length;
		for (var i = 0, il = len; i < il; i++) {
			var it = arr[i];
			for (var j = len - 1; j > i; j--) {
				if (arr[j] == it) arr.splice(j, 1);
			}
		}
		return arr;
	},
	minInt: function (arr) { //最小值
		var temp = arr[0];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] < temp) temp = arr[i];
		}
		return temp;
	},
	maxInt: function (arr) { //最大值
		var temp = arr[0];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > temp) temp = arr[i];
		}
		return temp;
	},
	removeAt: function (arr, index) { //删除数组中指定索引的值
		var items = [];
		if (index >= arr.length) return;
		else {
			items = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
			return items;
		}
	},
	makeArray: function (o) { //将任何对象转换为数组
		if (o == null) return [];
		if (!o.length || typeof o === 'string') return [o];
		var result = [];
		for (var i = 0; i < o.length; i++)
			result[i] = o[i];
		return result;
	},
	intersect : function(a, b) { //两个数组取交集
		var vals =[];
		for(var i=0;i<a.length;i++){
			for(var o=0;o<b.length;o++){
				if(a[i]==b[o]){
					vals.push(a[i]);
				}
			}
		}
		return this.unique(vals);
	}
};

export {arrayFun}

// 使用
// import {arrayFun} from '@/utils/array'
// Vue.prototype.$array = arrayFun

// 调用
// this.$array.isArray(arr);
