/**
 * 解析表达式{{变量}}值
 * @param {*} expr vue模板表达式
 * @param {*} param 
 */
export function execVueExpr(expr, param) {
    var r = new RegExp(/\{\{((?:.|\n)+?)\}\}/g);
    var p = r.exec(expr);
    while (p) {
        var pr1 = new RegExp(p[0], "g");
        var va1 = eval("param." + p[1]);
        expr = expr.replace(pr1, va1);
        p = r.exec(expr);
        // 存在匹配优先级问题，可能后面表达式先匹配
        if ((p == null) && (expr.indexOf("{{") >= 0)) {
            p = r.exec(expr);
        }
    }
    return expr;
}