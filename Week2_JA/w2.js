// let arr=[100,30,200, "apple"]
// console.log(arr.sort());


//sorting using arrow functions
// let num=[8,10,5,2]

//ascending order
// let ascnum=(num.sort((a,b)=>a-b)); //8-10=-2 (it retains and doesnot swap)
// console.log(ascnum);

//[ 2, 5, 8, 10 ]

//descending order
//console.log(num.sort((a,b)=>b-a)); //10-8= (does not swap)
//[ 10, 8, 5, 2 ]

//reverse method
// console.log(ascnum.reverse())//[ 10, 8, 5, 2 ]


//map-> modifies each elements in the array

// let a1=[1,2,3]
// let result=a1.map(num=>num*2)
// console.log(result)//[ 2, 4, 6 ]

// //filter-> select the required element from the array

// let res=result.filter(num=>num>4)
// console.log(res);//[ 6 ]

//2.Input: [1, 2, 4, 5, 6], find the missing number

const input=[1,2,4,5,6] //1+2+4+5+6=18, 21-18=3
const n=6

//(n*(n+1))/2  =(6*(6+1))/2=(6*7)/2=42/2=21

const exp=(n*(n+1))/2 
console.log(exp);//21

const act=input.reduce((sum,num)=>sum+num,0)
console.log(act);

console.log(exp-act);//3 is the missing number in the array


//sum+num=0+1=1
//1+2=3
//3+4=7
//7+5=12
//12+6=18