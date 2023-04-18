var num = []

for(var i = 0; i < 10; i++){
    num[i] = i
}

console.log(num); 

num.pop()
num.pop()

console.log(num);

num.unshift(-1)
num.unshift(-2)
num.unshift(-3)

console.log(num);

num.shift()

console.log(num);

var num2 = [0,1,2,3,4,5]

num2.splice(0,0,-1)

console.log(num2);

num2.splice(0,7, -6)    

console.log(num2);