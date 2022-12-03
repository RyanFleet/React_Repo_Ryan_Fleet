const pushFront = []

pushFront.unshift('1')
pushFront.unshift('2')
pushFront.unshift('3')
pushFront.unshift('4')
console.log(pushFront)

pushFront.shift()
console.log(pushFront)

pushFront.splice(2,0,'Index 2')
console.log(pushFront)

// bonus remove by index
pushFront.splice([0],1)
console.log(pushFront)