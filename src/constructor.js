const Svg2instance = require('./svg2')
const Svg = require('./svg')

class SVGHelper {
    constructor(source,options = {}) {
        this.source = source
        this.options = options
        this.svg2 = new Svg2instance(source)
        this.svg = new Svg(this.svg2)
    }
    convertFormat(format,destination,settings){
        if (/\.(png|bmp|jpeg|jpg|tiff)$/i)
        this.svg2[format](settings).toFile(destination)
            .then(() =>{

            })
            .catch((err) =>{
                throw err
            })
    }
}
module.exports = SVGHelper