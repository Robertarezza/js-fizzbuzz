//test
//alert("ciao")

const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

let boxListElem = "";

 for (let i = 1; i <= 100; i++) {
    console.log(i);
    
       let text;
   let bgClass;
     
       
   if ( i % 3 === 0 && i % 5 === 0) {
            bgClass = "red";
            text = "Fizz";
            
       } else if ( i % 5 === 0){
         
                bgClass = "blu";
                text = "Buzz";
       

      } else if ( i % 3 === 0) {
        bgClass = "orange";        
        text = "Fizz Buzz";
                

            } else  {
                text = i;
           }
            
           
            const boxElem = document.createElement("div"); // object
            boxElem.innerHTML = text;
            boxElem.classList.add( "box" );
            boxElem.classList.add(bgClass);
            console.log(boxElem);
            rowElem.append(boxElem);
        
        }
       




    //    for (let i = 0; i <= 100; i++) {
    //         console.log(i);
          
    //         let text
    //        let bgClass; 
             
    //        if( i % 3 === 0 && i % 5 === 0) {
           
    //         bgClass = "red";
    //         text= "Fizz Buzz"
            
    //       } else if( i % 3 === 0) {
            
    //        bgClass = "blu";
    //        text = "Fizz"
    //      } else if( i % 5 === 0) {
          
    //        bgClass = "orange";
    //        text = "Buzz"
    //      } else {
    //         text=i
    //      }



    //     const boxElem = document.createElement("div"); // object
    //     boxElem.innerHTML = text;
    //     boxElem.classList.add("box");
    //     boxElem.classList.add(bgClass);
    //     console.log(boxElem);
          
    
    //   //per inserire l'elemento nell'elemento genitore in pagina 
    //         rowElem.append(boxElem);
    //     }