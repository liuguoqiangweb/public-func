const install = function (Vue, options) {
     /**
      * 身份证号码校验
      */
     const  validIdCard=(rule, value, callback) =>{
        var city = { 
            11: "北京", 12: "天津", 13: "河北", 14: "山西", 
            15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 
            31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 
            35: "福建", 36: "江西", 37: "山东", 41: "河南", 
            42: "湖北 ", 43: "湖南", 44: "广东", 
            45: "广西", 46: "海南", 50: "重庆", 51: "四川", 
            52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 
            62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 
            71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
        var pass = true;
        if (!value || !/^\d{17}[\dxX]$/.test(value)) {
            pass = false;
        } else if (!city[value.substr(0, 2)]) {
            pass = false;
        } else {
            //18位身份证需要验证最后一位校验位
            if (value.length == 18) {
                value = value.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++) {
                    ai = value[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if (last != value[17]) {

                    pass = false;
                }
            }
        }
        if (!pass) {
            callback(new Error());
        } else {
            callback();
        }
    }

    /**
      * 手机号码校验
      */
    const validPhoneNumber=(rule, value, callback) =>{
        if (value && (!(/^[1][345678]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
            callback(new Error());
        } else {
            callback();
        }
    }
    /**
     * 电话号码校验
     */
   const validPhone=(rule, value, callback) =>{
        if (value && (!(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/).test(value))) {
            callback(new Error());
        } else {
            callback();
        }
    }
    /**
     * 邮编校验
     */
   const validZipCode=(rule, value, callback) =>{
        if (value && (!(/^[1-9]\d{5}(?!\d)$/).test(value))) {
            callback(new Error());
        } else {
            callback();
        }
    }
    /**
     * 传真校验
     */
   const validFax=(rule, value, callback) =>{
        if (value && (!(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/).test(value))) {
            callback(new Error());
        } else {
            callback();
        }
    }
    /**
     * 价格验证校验
     */
    const validPrice=(rule, value, callback) =>{
        if (value && (!(/^\d+(.\d{1,4})?$/).test(value))) {
            callback(new Error());
        } else {
            callback();
        }
    }

    /**
     * 正整数校验
     */
   const validIntegerP=(rule, value, callback) =>{
        if (value && !(/^[1-9]\d*$/).test(value)) {
            callback(new Error());
        } else {
            callback();
        }
    }
    /**
     * 判断是否是数字或字母
     */
   const validNumberOrLetter=(rule, value, callback) =>{
        var regu = "^[0-9a-zA-Z]+$";
        var re = new RegExp(regu);
        if (value == "" || re.test(value)) {
            callback();
        } else {
            callback(new Error());
        }
    }
    /**
     * 由数字、26个英文字母或者下划线组成的字符串
     */
   const validNumberOrLetterOrXh=(rule, value, callback) =>{
        var regu = "^[0-9a-zA-Z_]{1,}$";
        var re = new RegExp(regu);
        if (value == "" || re.test(value)) {
            callback();
        } else {
            callback(new Error());
        }
    }
    /**
     * 密码验证
     */
   const validPass=(rule, value, callback) =>{
        if ((!(/(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,15}/).test(value))) {
            callback(new Error());
        } else {
            callback();
        }
    } 
    /**
     * 不能包含特殊字符
     */
   const validSpecialCharacter=(rule, value, callback) =>{
        var regu = "^[A-Za-z0-9\u4e00-\u9fa5]+$";
        var re = new RegExp(regu);
        if (value == "" || re.test(value)) {
            callback();
        } else {
            callback(new Error());
        }
    }

    /**
     * 参数 item 
     * required true  必填项
     * maxLength  字符串的最大长度
     * min 和 max 必须同时给 min < max  type=number
     * type 手机号 mobile
     *      邮箱   email
     *      网址   url 
     *      各种自定义类型   定义在 src/utils/validate 中    持续添加中.......
     * */
    
    Vue.prototype.filterRules = function (item){
        let rules = [];
        if(item.required){
          rules.push({ required: true, message: this.$t('CommonRes.NotNull'), trigger: 'change' });
        }

        if(item.maxLength){
          rules.push({ min:1,max:item.maxLength, message: this.$t('CommonRes.ErrorMaxLength').format(item.maxLength), trigger: 'change' });
        } 
        if(item.min && item.max){       
           rules.push({ min:item.min,max:item.max, message: this.$t('CommonRes.ErrorMinOrMax').format(item.min,item.max), trigger: 'change' })
        }
        if(item.type){
            let type = item.type;
            switch(type) {
                case 'LoginUserName':
                    rules.push({ required: true, message: this.$t('UserRes.InputUserName'), trigger: 'blur,change'  });
                    break;
                case 'LoginPassWord':
                    rules.push({ required: true, message: this.$t('UserRes.InputPassWord'), trigger: 'blur,change'  });
                    break;
                case 'Email':
                    rules.push({ type: 'email', message: this.$t('CommonRes.ErrorEmail'), trigger: 'blur,change'  });
                    break;
                case 'IDCard'://身份证
                    rules.push( { validator: validIdCard,message: this.$t('CommonRes.ErrorIDCard'), trigger: 'blur,change' });
                    break; 
                case 'Phone'://手机号码
                    rules.push( { validator: validPhoneNumber,message: this.$t('CommonRes.ErrorPhone'), trigger: 'blur,change' });
                    break;  
                case 'Mobile'://电话号码
                    rules.push( { validator: validPhone,message: this.$t('CommonRes.ErrorMobile'), trigger: 'blur,change' });
                    break;      
                case 'Zip'://邮编
                    rules.push( { validator: validZipCode,message: this.$t('CommonRes.ErrorZip'), trigger: 'blur,change' });
                    break;       
                case 'Fax'://传真
                    rules.push( { validator: validFax,message: this.$t('CommonRes.ErrorFax'), trigger: 'blur,change' });
                    break; 
                case 'Price'://价格
                    rules.push( { validator: validPrice,message: this.$t('CommonRes.ErrorPrice'), trigger: 'blur,change' });
                    break;      
                case 'Int'://正整数
                    rules.push( { validator: validIntegerP,message: this.$t('CommonRes.ErrorInt'), trigger: 'blur,change' });
                    break;        
                case 'NumberOrLetter'://判断是否是数字或字母
                    rules.push( { validator: validNumberOrLetter,message: this.$t('CommonRes.ErrorNumberOrLetter'), trigger: 'blur,change' });
                    break;          
                case 'NumberOrLetterOrXh'://由数字、26个英文字母或者下划线组成的字符串
                    rules.push( { validator: validNumberOrLetterOrXh,message: this.$t('CommonRes.ErrorNumberOrLetterOrXh'), trigger: 'blur,change' });
                    break;            
                case 'Pass'://密码
                    rules.push( { validator: validPass,message: this.$t('CommonRes.ErrorPass'), trigger: 'blur,change' });
                    break;            
                case 'SpecialCharacter'://不能包含特殊字符
                    rules.push( { validator: validSpecialCharacter,message: this.$t('CommonRes.ErrorSpecialCharacter'), trigger: 'blur,change' });
                    break; 
            }
        } 
        return rules;
    };
}


export default install
