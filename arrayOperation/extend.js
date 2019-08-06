String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

//数组移除指定对象或下标i
Array.prototype.remove = function (obj) {
    var index = this.indexOf(obj);
    if (index > -1) {
        this.splice(index, 1);
    }
}

// 通过一个key的数组来获取对象里的值
function getValueByKeyArray(obj, arr) {
    return arr.reduce((prev, next) => {
      return prev === undefined ? undefined : prev[next]
    }, obj)
}
// 数组去重
Array.prototype.removeRepetition = (list, query, separator = '.') => {
// 判断是否是对象的去重
    if (query) {
        // 将计算式拆分
        const keyArr = query.split(separator)
        // 如果是嵌套两层或更多,采用计算
        if (keyArr.length > 1) {
        return list.reduce((prev, current) => {
            return prev.some(e => getValueByKeyArray(e, keyArr) === getValueByKeyArray(current, keyArr)) ? prev : [...prev, current]
        }, [])
        } else {
        return list.reduce((prev, current) => {
            return prev.some(e => e[query] === current[query]) ? prev : [...prev, current]
        }, [])
        }
    } else {
        return [...new Set(list)]
    }
}
//去二边空格
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
//去左边空格 
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
}
//去右边空格   
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
}
//日期格式化
Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
}     

String.prototype.numberFormat=function(decimals)
{
  var cellValue = (this + '').replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+cellValue) ? 0 : +cellValue,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    dec = '.',
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.ceil(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
} 