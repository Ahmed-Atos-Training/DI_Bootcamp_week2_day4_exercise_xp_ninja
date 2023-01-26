
//  exercice3
function isDivisible(){  

  let  sum = 0;  
  for (let i = 0; i < 501; i++){
      
  
      if(i % 23 == 0){ 
          
          console.log(`les nombres divisbles par 23 sont ${i}`) 
          sum = sum + i; 
  }
}
console.log( `la somme des nombres divisible par 23 est:${sum}`)
}
isDivisible()
