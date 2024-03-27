//test
//alert("ciao")

const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);



for (let i = 1; i <= 100; i++) {
    console.log(i);
    
    let redClass= document.querySelector(".red");
    let text; 
        if ( i % 3 === 0 && i % 5 === 0) {
            text = redClass;
            text = "Fizz";
            
         } else if ( i % 5 === 0){
            text = "Buzz";
          
            } else if ( i % 3 === 0) {
                text = "Fizz Buzz";
            } else  {
                text = i;
            }
            
            
            const boxElem = document.createElement("div"); // object
            boxElem.innerHTML = text;
            boxElem.classList.add( "box" );
            
            console.log(boxElem);
            rowElem.append(boxElem);
        
             

        }