import postcss from "postcss";
export const ecPostcss = postcss.plugin('postcss-selector-add', function (opts) {
    return function (root, result) {
        root.walkRules(function (rule) {
            rule.selector =  `${selectorValue} ${rule.selector}`
        });
    };
});
let selectorValue =''
export function setAttr(attr,value){
    if(attr && value){
        selectorValue = `[${attr}="${value}"]`
    }
}


