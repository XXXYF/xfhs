// 手机号验证
export function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    return reg.test(str)
}
//密码验证失败时执行的方法
//匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
export function passwInvalid(str){
    const reg = /^[0-9A-Za-z]{6,20}$/
    return reg.test(str)
}
//输入只能为中文验证
export function chinaInvalid(str){
    const reg = /^[\u4E00-\u9FA5]{2,20}$/
    return reg.test(str)
}
//输入身份证验证
export function isvalidCardNo(str){
    const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
    return reg.test(str)
}
//输入只能是数字验证
export function isNumber(str){
    const reg = /[^0-9-]+/
    return reg.test(str)
}