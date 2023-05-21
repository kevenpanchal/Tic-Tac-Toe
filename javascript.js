document.getElementById("start_btn").addEventListener("click", start);
document.getElementById("reset_btn").addEventListener("click", reset);



function start(){
   let counter = 0;
   let btn1;
   let btn2;
   let btn3;
   let btn4;
   let btn5;
   let btn6;
   let btn7;
   let btn8;
   let btn9;
  
   document.getElementById("1").addEventListener("click", btn1 = function(e){
      counter++;
      if( counter% 2 != 0){
         e.target.innerHTML = "X";
         document.getElementById("1").removeEventListener("click" ,btn1);
         checkwhowon();
      }
      else{
         e.target.innerHTML = "O";
         document.getElementById("1").removeEventListener("click" ,btn1);
         checkwhowon();
      }


   });

      document.getElementById("2").addEventListener("click", btn2 = function(e){
         counter++;
         if( counter% 2 != 0){
            e.target.innerHTML = "X";
            document.getElementById("2").removeEventListener("click" ,btn2);
            checkwhowon();
         }
         else{
            e.target.innerHTML = "O";
            document.getElementById("2").removeEventListener("click" ,btn2);
            checkwhowon();
         }
      });

         document.getElementById("3").addEventListener("click", btn3 = function(e) {
            counter++;
            if( counter% 2 != 0){
               e.target.innerHTML = "X";
               document.getElementById("3").removeEventListener("click" ,btn3);
               checkwhowon();
            }
            else{
               e.target.innerHTML = "O";
               document.getElementById("3").removeEventListener("click" ,btn3);
               checkwhowon();
            }
         });
            document.getElementById("4").addEventListener("click", btn4 = function(e) {
               counter++;
               if( counter% 2 != 0){
                  e.target.innerHTML = "X";
                  document.getElementById("4").removeEventListener("click" ,btn4);
                  checkwhowon();
               }
               else{
                  e.target.innerHTML = "O";
                  document.getElementById("4").removeEventListener("click" ,btn4);
                  checkwhowon();
               }
            });
               document.getElementById("5").addEventListener("click",btn5 = function(e) {
                  counter++;
                  if( counter% 2 != 0){
                     e.target.innerHTML = "X";
                     document.getElementById("5").removeEventListener("click" ,btn5);
                     checkwhowon();
                  }
                  else{
                     e.target.innerHTML = "O";
                     document.getElementById("5").removeEventListener("click" ,btn5);
                     checkwhowon();
                  }
               });
                  document.getElementById("6").addEventListener("click",btn6 = function(e) {
                     counter++;
                     if( counter% 2 != 0){
                        e.target.innerHTML = "X";
                        document.getElementById("6").removeEventListener("click" ,btn6);
                        checkwhowon();
                     }
                     else{
                        e.target.innerHTML = "O";
                        document.getElementById("6").removeEventListener("click" ,btn6);
                        checkwhowon();
                     }
                  });
                     document.getElementById("7").addEventListener("click", btn7 = function(e) {
                        counter++;
                        if( counter% 2 != 0){
                           e.target.innerHTML = "X";
                           document.getElementById("7").removeEventListener("click" ,btn7);
                           checkwhowon();
                        }
                        else{
                           e.target.innerHTML = "O";
                           document.getElementById("7").removeEventListener("click" ,btn7);
                           checkwhowon();
                        }
                     });
                        document.getElementById("8").addEventListener("click",btn8 = function(e) {
                           counter++;
                           if( counter% 2 != 0){
                              e.target.innerHTML = "X";
                              document.getElementById("8").removeEventListener("click" ,btn8);
                              checkwhowon();
                           }
                           else{
                              e.target.innerHTML = "O";
                              document.getElementById("8").removeEventListener("click" ,btn8);
                              checkwhowon();
                           }
                        });
                           document.getElementById("9").addEventListener("click", btn9 = function(e) {
                              counter++;
                              if( counter% 2 != 0){
                                 e.target.innerHTML = "X";
                                 document.getElementById("9").removeEventListener("click" ,btn9);
                                 checkwhowon();
                              }
                              else{
                                 e.target.innerHTML = "O";
                                 document.getElementById("9").removeEventListener("click" ,btn9);
                                 checkwhowon();
                              }
                        
                     
            
         


   
    
   
 });


 function checkwhowon(){
   const button_1 = document.getElementById("1");
   const button_2 = document.getElementById("2");
   const button_3 = document.getElementById("3");
   const button_4 = document.getElementById("4");
   const button_5 = document.getElementById("5");
   const button_6 = document.getElementById("6");
   const button_7 = document.getElementById("7");
   const button_8 = document.getElementById("8");
   const button_9 = document.getElementById("9");
      
   if(button_1.innerHTML=="X" && button_2.innerHTML=="X" && button_3.innerHTML=="X"){
         alert("Player 1 Wins");
         reset();
         counter=0;
      }
   else if(button_4.innerHTML=="X" && button_5.innerHTML=="X" && button_6.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   else if(button_7.innerHTML=="X" && button_8.innerHTML=="X" && button_9.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   else if(button_1.innerHTML=="X" && button_4.innerHTML=="X" && button_7.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   else if(button_2.innerHTML=="X" && button_5.innerHTML=="X" && button_8.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   else if(button_3.innerHTML=="X" && button_6.innerHTML=="X" && button_9.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   else if(button_1.innerHTML=="X" && button_5.innerHTML=="X" && button_9.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   else if(button_3.innerHTML=="X" && button_5.innerHTML=="X" && button_7.innerHTML=="X"){
      alert("Player 1 Wins");
      reset();
      counter=0;
   }
   
   
   ///// checking of O
   
   
   
   
   else if(button_1.innerHTML=="O" && button_2.innerHTML=="O" && button_3.innerHTML=="O"){
         alert("Player 2 Wins");
         reset();
         counter=0;
      }
   else if(button_4.innerHTML=="O" && button_5.innerHTML=="O" && button_6.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   else if(button_7.innerHTML=="O" && button_8.innerHTML=="O" && button_9.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   else if(button_1.innerHTML=="O" && button_4.innerHTML=="O" && button_7.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   else if(button_2.innerHTML=="O" && button_5.innerHTML=="O" && button_8.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   else if(button_3.innerHTML=="O" && button_6.innerHTML=="O" && button_9.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   else if(button_1.innerHTML=="O" && button_5.innerHTML=="O" && button_9.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   else if(button_3.innerHTML=="O" && button_5.innerHTML=="O" && button_7.innerHTML=="O"){
      alert("Player 2 Wins");
      reset();
      counter=0;
   }
   
   }





}

function reset(){


   document.getElementById("1").innerHTML=".";
   document.getElementById("2").innerHTML=".";
   document.getElementById("3").innerHTML=".";
   document.getElementById("4").innerHTML=".";
   document.getElementById("5").innerHTML=".";
   document.getElementById("6").innerHTML=".";
   document.getElementById("7").innerHTML=".";
   document.getElementById("8").innerHTML=".";
   document.getElementById("9").innerHTML=".";
   start();



}