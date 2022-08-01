const Svg2 = require("oslllo-svg2")
const Svg2instance = function (s) {
    return resolve(s)
}
function resolve(s){
    if(/\.svg&/i.test(s)||/^<svg(?:.|\n)*<\/svg>$/.test(s)){
        return Svg2(s)
    }
    else {
        throw new Error('Source is not a svg')
    }

}
module.exports = Svg2instance;