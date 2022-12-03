
const removeBlanks = (str) =>{
    console.log(str.split(' ').join(''))
}
removeBlanks("I can not BELIEVE it's not BUTTER")

const getDigits = (str)=>{
    numbers = []
    for(i = 0; i < str.length; i++){
        if(isNaN(str[i])){
            console.log('Not a Number')
        } else{
            console.log(str[i])
        }
    }
}
getDigits("0s1a3y5w7h9a2t4?6!8?0")

const acronym = (str) => {
    const strArr = str.split(' ')
    let response = ''
    strArr.forEach(c =>{
        const [char] = c
        if(char === char.toUpperCase() && char !== char.toLowerCase()){
            response+=char
        }
    })
    console.log(response)
}
acronym("Live from New York, it's Saturday Night!") 


const countNonSpaces = (str) =>{
    let count = 0;
    for(i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            count++
            console.log(count)
        }
    }
}
countNonSpaces("Honey pie, you are driving me crazy")


const removeShorterStrings = (arr,charLimit) =>{
    let newStrings = []
    let newI = 0
    for(let value in arr){
        if( arr[value].length >= charLimit){
            newStrings[newI++] = arr[value]
        }
    }
    return newStrings
}

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))