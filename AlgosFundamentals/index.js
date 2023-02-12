
var myNumber = 42
var myName = 'ryan47475'

const swapping = (num, name) =>{
    var newNumber = name
    var newName = num
    console.log(newNumber + ' ####')
    console.log(newName)
}
// swapping(myNumber,myName)


const bigLoop = () =>{
    for(var i = 1066; i >= -52; i--){
        console.log(i)
    }
}
// bigLoop()


const beCheerful = () =>{
    for(var i = 0; i <= 98; i++){
        console.log('Good Morning!', i)
    }
}
// beCheerful()

const multiplesOf3 = () =>{
    for(var i = 0; i>= -300; i--){
        if(i % 3 == 0){
            if(i == -3 || i == -6){
                continue
            }
        console.log(i)
        }
    }
}
// multiplesOf3()

const printIntegers = () =>{
    var i = 2000
    while(i < 5280){
        i++
        console.log(i)
    }
}
// printIntegers()

const leapYear = () =>{
    var i = 0
    while(i < 2000){
        if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
            console.log(i)
        } else {
            console.log('not a leap year')
        }
        i++
    }
}
leapYear()
