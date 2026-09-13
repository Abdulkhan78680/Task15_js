function largest(){
    let a=[4,55,44,97,46]
    let max=a[0]

    for(let i = 1; i<a.length; i++){
        if(a[i]>max){
            max=a[i]
    }
        }console.log("Maximum num",max)   
}


function sum(){
    let a=[1,3,4,6]
    let sum=0;

    for (let i=0; i<a.length; i++){
    
            sum=sum+a[i]  
        
    }
        console.log("sum of all eliments",sum) 
}


// find the odd number 

function odd(){

let a=[1,2,3,4,5,8,7,16,9,8,17] 
let count=0;
for(let i=0; i<a.length; i++){
    if(a[i]%2!==0){
        count=count+1;
}

    }console.log("count of odd", count)
}