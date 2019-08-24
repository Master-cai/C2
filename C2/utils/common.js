function sayHello(name){
    console.log('Hello ${name} !')
}
function sayGoodbye(name){
    // console.log(name)
    console.log(`Goodbye ${name} !`)
}
module.exports={
    sayHello:sayHello,
    sayGoodbye:sayGoodbye
}
