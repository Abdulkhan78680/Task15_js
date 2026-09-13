function largest(a) {
    let max = a[0];
    for(let i = 1; i < a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }

    console.log("Maximum num", max);
}

let numbers = [4, 55, 44, 97, 46];




function sum(b){
    // let b=[1,3,4,6]
    let sum=0;

    for (let i=0; i<b.length; i++){
    
            sum=sum+b[i]  
        
    }
        console.log("sum of all eliments",sum) 
}


// find the odd number 

function odd(c){
// let c=[1,2,3,4,5,8,7,16,9,8,17] 
let count=0;  
for(let i=0; i<c.length; i++){
    if(c[i]%2!==0){
        count=count+1;
}

    }console.log("count of odd", count)
}
