// problem-1 

// By using while loop 
let number = 50;
let i = 1;

while(i<=number){
    console.log(i);
    i++
}

// By using for loop 
let Number = 50;
for(i =1; i<= Number; i++){
    console.log(i);
}


// problem-2
 

// while loop
let num = 33;

let b=num;
while(b>=1){
    console.log(b);
    b--;
}

// // for loop 
for(i=num; i>=1; i--){
    console.log(i);
}

// problem-3 
 let x=45;
 let sum = 0;
for(i=1; i<=x ; i++){
    if(i%2 === 0){
        sum = sum + i;
       
        }
       
    }
    console.log(sum);

//  problem-4 
let y=10;
let sumSquare =0;
 for(i=1; i<=y; i++){
    if(i%2 !==0){
        sumSquare = sumSquare + i**2;
    }
 }
 console.log(sumSquare)

//  problem-5

for(i=1; i<=10; i++){
    multiplication_table=7*i;
    console.log('7'+'X'+i+'='+multiplication_table);
}


// problem-6 

let numbers = 139586883;
let c='' +numbers

console.log(c.length);

