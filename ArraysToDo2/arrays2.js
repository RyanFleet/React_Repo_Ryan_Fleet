// REVERSE ARRAY

let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,[]]

const arrReverse = (a)=>{
    let revArr = []
    while(a.length){ // loops through the array
        revArr.push(a.pop())// we are pushing to the new array the end value
                            // the a.pop() removes the last array value which is what is being pushed
                            // to the new array
    }
    console.log(revArr)
}

// arrReverse(arr)


// ROTATE
var shift = 2

const rotate = (array,shiftBy)=>{
    console.log(array.unshift(...array.splice(-shiftBy)))
}

rotate(arr,shift)
