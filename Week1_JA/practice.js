// const name1= " playwright "
// const trimmedname=name1.trim()  //removes the white space at the beginning and at the end of the string
// console.log(trimmedname); //

// let str=" p l a y w r i g h t "
// console.log(str.replace(" ","")) //p l a y w r i g h t  //replaces the first occurance
// //how to replace all the occurance using replace by(regex)
// console.log(str.replace(/\s/,"")) //p l a y w r i g h t  //replaces the first occurance using regex
// console.log(str.replace(/\s/g,"")) //playwright //replaces all the occurance using regex

// console.log(str.replaceAll(" ",""))//playwright  //replaces the first occurance

// //replace 'a' with 'A'
// console.log(str.replaceAll("a","A"))//p l A y w r i g h t   //replaces the first occurance



//extract the id from the string 'Order ID: #12345-Confirmed'

// let product='Order ID: #12345-Confirmed'

//split=> convertes string into array

// let productdetails=product.split()
// console.log(productdetails);//[ 'Order ID: #12345-Confirmed' ]

// let productdetails=product.split('')
// console.log(productdetails);//[ 'O', 'r', 'd', 'e', 'r', ' ','I', 'D', ':', ' ', '#', '1','2', '3', '4', '5', '-', 'C','o', 'n', 'f', 'i', 'r', 'm','e', 'd']
// console.log(product.split(' '));//[ 'Order', 'ID:', '#12345-Confirmed' ]
// let splittedwords=(product.split('#'));//[ 'Order ID: ', '12345-Confirmed' ]//[0,1]
// let finalid=(splittedwords[1].split("-"));//[ '12345', 'Confirmed' ]//[0,1]
// console.log(finalid[0]);//12345

 
//replace T with Q in the string cname="Testleaf"

// let cname="Testleaf"
// console.log(cname.slice(0,4)) //Test
// console.log(cname.slice(-8,-4)) //Test
// console.log(cname.slice(4)) //leaf
// console.log(cname.slice(1));//estleaf
// let cname1='Q'+cname.slice(1) 
// console.log(cname1);  //Qestleaf


//longest word 'Automation testing is most important'.

// let word='Automation testing is most important'
// let longwordlength=""  //10

// let splitword=word.split(' ')//splits into word array
// console.log(splitword);//[ 'Automation', 'testing', 'is', 'most', 'important' ]
//                        //   10,             7,        2,      4,        9
// for(let i=0;i<splitword.length;i++){

//     if(splitword[i].length>longwordlength.length){
//       //10>0  =true
//      longwordlength=splitword[i]

//     }
// }
// console.log(longwordlength);//Automation


//ERROR: 404 [Time: 12:00] | INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]
//print the timestamp of error logs

let serverLog='ERROR: 404 [Time: 12:00] | INFO: Login Success [Time: 12:01] | ERROR: 500 [Time: 12:05]'

let entry=serverLog.split('|')
console.log(entry);
/* [
  'ERROR: 404 [Time: 12:00] ',
  ' INFO: Login Success [Time: 12:01] ',
  ' ERROR: 500 [Time: 12:05]'
] */


//   for (const element of entry) {
//     console.log(element);
    
//   }

//   ERROR: 404 [Time: 12:00] 
//  INFO: Login Success [Time: 12:01] 
//  ERROR: 500 [Time: 12:05]


for (const element of entry) {
    if(element.includes("ERROR")){
        let time=element.match(/\[Time:(.*?)\]/)
        //console.log(time); //'[Time: 12:05]',
                           //' 12:05',
     console.log(time[1])

    }
    
}




 