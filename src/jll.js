const obj = {
    a(){
        console.log(123)
    },
    b(){
        console.log(321)
    }
}
function c(parma){
    obj[parma]()
}
c('a')