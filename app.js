document.addEventListener("DOMContentLoaded", () => {
 
    let buttons = document.querySelectorAll("button");


  // this block of code prevents the user from being able to access the screendisplay by focusing the mouse
  const screenDisplay = document.getElementById("screenDisplay");
  screenDisplay.addEventListener("click",  function removeFocus() {
       this.blur();
  });


  // add event listeners to the numbers and the basic operators

  // number 1
  buttons[43].addEventListener("click", () => {
    screenDisplay.value += "1";

  }); 
  
  // number 2
  buttons[44].addEventListener("click", () => {
    screenDisplay.value += "2";

 }); 


 // number 3
 buttons[45].addEventListener("click", () => {
  screenDisplay.value += "3";
}); 



// number 4

buttons[37].addEventListener("click", () => {
  screenDisplay.value += "4";

}); 

// number 5
buttons[38].addEventListener("click", () => {
  screenDisplay.value += "5";

}); 

// number 6 
buttons[39].addEventListener("click", () => {
  screenDisplay.value += "6";
  

}); 

// number 7

buttons[31].addEventListener("click", () => {
  screenDisplay.value += "7";

}); 

// number 8 
buttons[32].addEventListener("click", () => {
  screenDisplay.value += "8";

}); 

// number 9 
buttons[33].addEventListener("click", () => {
  screenDisplay.value += "9";

});


// number 0

buttons[49].addEventListener("click", () => {
   screenDisplay.value += "0";
});


// addition 

buttons[52].addEventListener("click", () => {
  screenDisplay.value += "+";

}); 


// subtraction 

buttons[46].addEventListener("click", () => {
  screenDisplay.value += "-";

}); 

// multiplication 


buttons[40].addEventListener("click", () => {
  screenDisplay.value += "x";

});


// division

buttons[41].addEventListener("click", () => {
  screenDisplay.value += "/";

});


// left parenthesis 

buttons[34].addEventListener("click", () => {
    screenDisplay.value += "(";
});



//  right parenthesis

buttons[35].addEventListener("click", () => {
   screenDisplay.value += ")";
});


// square root symbol 

buttons[9].addEventListener("click", () => {
   screenDisplay.value += "\u221A";

});

// factorial symbol 

buttons[17].addEventListener("click", () => {
   screenDisplay.value += "!";
});


// delete previous input
buttons[42].addEventListener("click", () => {
  let removeLast = screenDisplay.value;
  removeLast = removeLast.slice(0,removeLast.length - 1);
  screenDisplay.value = removeLast;
});









// the solve button
var signRecords = [];
var signRecords1; 
var factorialNumber;
var factorialNumber2 = 1;
var tempRecords1;
var tempRecords2;
var tempRecords3;
var tempRecords4;
var tempRecords5;
var finalResult;
var records = [];
var previousInput;

buttons[47].addEventListener("click", () => {
    tempRecords1 = screenDisplay.value;
    previousInput = screenDisplay.value;
  

    //  computing factorials 

    for (var i =0; i<tempRecords1.length; i++) {
      if (tempRecords1[i] === "!") {
        records.push(tempRecords1.slice(0,i));
        factorialNumber = Number(records[0]);
        for (var j= 0; j < Number(records[0]); j++ ) {
             factorialNumber2 = factorialNumber2 * factorialNumber;
             factorialNumber--;   
        }
        finalResult = factorialNumber2;
        
      }
    }
    factorialNumber = 0;
    factorialNumber2 = 0;
    records = [];


    // computing one arithmetic operator
    for (var i=0; i<tempRecords1.length; i++) {
        if (tempRecords1[i]==="\u221A") {
          records.push(tempRecords1.slice(i+1,tempRecords1.length));
          finalResult = Math.sqrt(Number(records[0]));
          finalResult = finalResult.toString();
        }
      //     for (var j=0; j < tempRecords1.length; j++) {
      //        if (tempRecords1[j] === "+" && j > i) {
      //           j = j;
      //        }
      //     }
      //      screenDisplay.value = tempRecords1.slice(0,i) + finalResult + tempRecords1.slice(j+1, tempRecords1.length);
      //   } 
      // } 


      if (tempRecords1[i] === "+") {
        signRecords1 = "+";
        signRecords.push(signRecords1);
          records.push(tempRecords1.slice(0,i));
          records.push(tempRecords1.slice(i+1, tempRecords1.length));
      }

      else if (tempRecords1[i] === "-" ) {
        signRecords1 = "-";
        signRecords.push(signRecords1);
          records.push(tempRecords1.slice(0,i));
          records.push(tempRecords1.slice(i+1, tempRecords1.length));
      }

      else if (tempRecords1[i] === "x" ) {
        signRecords1 = "x";
        signRecords.push(signRecords1);
          records.push(tempRecords1.slice(0,i));
          records.push(tempRecords1.slice(i+1, tempRecords1.length));
      }

      else if (tempRecords1[i] === "/" ) {
        signRecords1 = "/";
        signRecords.push(signRecords1);
          records.push(tempRecords1.slice(0,i));
          records.push(tempRecords1.slice(i+1, tempRecords1.length));
      }

      else if (tempRecords1[i] === "(" ) {
        signRecords1 = "(";
        signRecords.push(signRecords1);
          records.push(tempRecords1.slice(i+1,tempRecords1.length));
      }

      else if (signRecords.length !== 0) {
        if (records[0][i] === ")") {
            records = records[0].slice(0,i);
            records.push(records[0].slice(i+1, records[0].length - 1));
        }
      }

      if (signRecords.length === 1) {
        if (tempRecords1[i] === "+" ) {
      
            finalResult = Number(records[0]) + Number(records[1]);
  
        }
  
  
        //  
          
  
          else if (tempRecords1[i] === "-" ) {
            
            finalResult = Number(records[0]) - Number(records[1]);
        }
  
  
        else if (tempRecords1[i] === "x" ) {
         
          finalResult = Number(records[0]) * Number(records[1]);
      }
  
  
        else if (tempRecords1[i] === "/" ) {
          
          finalResult = Number(records[0]) / Number(records[1]);
      }
    }
      

  }
  
    


    // computing two arithmetic operators
    if (records.length >= 2) {
      for ( var i=0; i < records[1].length; i++) {
        if (records[1][i] === "+" || records[1][i] === "-" || records[1][i] === "x" || records[1][i] === "/") {
            tempRecords2 = records.slice(1,2);
            records = records.slice(0,1);
            records.push(tempRecords2[0].slice(0,i));
            records.push(tempRecords2[0].slice(i+1, tempRecords2[0].length));
          }
          if (signRecords.length === 2) {
              if (signRecords[1]==="+") {
                if (signRecords[0] === "+") {
                  finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]);
                }
                else if (signRecords[0]=== "-"){
                  finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]);
                }
                else if (signRecords[0] === "/"){
                  finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]);
                }
                else if (signRecords[0] === "x") {
                  finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]);
                }
                
              }
              

              else if (signRecords[1] === "-") {
              if (signRecords[0] === "+") {
                finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]);
              }
              else if (signRecords[0]=== "-"){
                finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]);
              }
              else if (signRecords[0] === "/"){
                finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]);
              }
              else if (signRecords[0] === "x") {
                finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]);
              }
              
            }
            
            else if (signRecords[1] === "x") {
              if (signRecords[0] === "+") {
                finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]);
              }
              else if (signRecords[0]=== "-"){
                finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]);
              }
              else if (signRecords[0] === "/"){
                finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]);
              }
              else if (signRecords[0] === "x") {
                finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]);
              }
              
            }


            else if (signRecords[1] === "/") {
              if (signRecords[0] === "+") {
                finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]);
              }
              else if (signRecords[0]=== "-"){
                finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]);
              }
              else if (signRecords[0] === "/"){
                finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]);
              }
              else if (signRecords[0] === "x") {
                finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]);
              }
              
            }

          }

        }     
    }
        
      
          
            

            

 

           
          
        
      
      





    // computing three arithmetic operators

    if (records.length >= 3) {
      for (var i=0; i<records[2].length; i++) {  
        if (records[2][i]==="+"|| records[2][i] === "-" || records[2][i] === "x" || records[2][i]=== "/") {          //this is for + in the expression as the third sign
          tempRecords3 = records.slice(2,3);
          records = records.slice(0,2);
          records.push(tempRecords3[0].slice(0,i))
          records.push(tempRecords3[0].slice(i+1,tempRecords3[0].length));
        }


        if (signRecords.length === 3) {
          if (signRecords[2]==="+") {
            if (signRecords[0]==="+") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) + Number(records[3])
              }
            }
            else if (signRecords[0] ==="-") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) + Number(records[3])
              } 
            }

            else if (signRecords[0] ==="x") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) + Number(records[3])
              } 
            }

            else if (signRecords[0] ==="/") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) + Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) + Number(records[3])
              } 
            }
          }
         
         
          else if (signRecords[2]==="-") {                    //this is for - in the expression as the third sign
            if (signRecords[0]==="+") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) - Number(records[3])
              }
            }
            else if (signRecords[0] ==="-") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) - Number(records[3])
              } 
            }

            else if (signRecords[0] ==="x") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) - Number(records[3])
              } 
            }

            else if (signRecords[0] ==="/") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) - Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) - Number(records[3])
              } 
            }
         }

         

         else if (signRecords[2]==="x") {                    //this is for * in the expression as the third sign
          if (signRecords[0]==="+") {
            if(signRecords[1]==="+"){
              finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="-") {
              finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="x") {
              finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="/") {
              finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) * Number(records[3])
            }
          }
          else if (signRecords[0] ==="-") {
            if(signRecords[1]==="+"){
              finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="-") {
              finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="x") {
              finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="/") {
              finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) * Number(records[3])
            } 
          }

          else if (signRecords[0] ==="x") {
            if(signRecords[1]==="+"){
              finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="-") {
              finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="x") {
              finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="/") {
              finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) * Number(records[3])
            } 
          }

          else if (signRecords[0] ==="/") {
            if(signRecords[1]==="+"){
              finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="-") {
              finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="x") {
              finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) * Number(records[3])
            }
            else if (signRecords[1]==="/") {
              finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) * Number(records[3])
            } 
          }
        }

        
        else if (signRecords[2]==="/") {                    //this is for / in the expression as the third sign
            if (signRecords[0]==="+") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) / Number(records[3])
              }
            }
            else if (signRecords[0] ==="-") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) / Number(records[3])
              } 
            }

            else if (signRecords[0] ==="x") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) / Number(records[3])
              } 
            }

            else if (signRecords[0] ==="/") {
              if(signRecords[1]==="+"){
                finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="-") {
                finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="x") {
                finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) / Number(records[3])
              }
              else if (signRecords[1]==="/") {
                finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) / Number(records[3])
              } 
            }
        }

      }  
      }

    }
      
            
        



        









//     // computing four arithmetic operators

     if (records.length >= 4) {
      for (var i=0; i<records[3].length; i++) {  
        if (records[3][i]==="+" || records[3][i] === "-" || records[3][i] === "x" || records[3][i] === "/") {       
          tempRecords4 = records.slice(3,4);
          records = records.slice(0,3);
          records.push(tempRecords4[0].slice(0,i))
          records.push(tempRecords4[0].slice(i+1,tempRecords4[0].length));
        }

          if (signRecords.length === 4) {
               if (signRecords[3] === "+") {
                if (signRecords[0]==="+") {                   // + as the first sign
                  if(signRecords[1]==="+"){
                    if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="-") {
                      if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                      if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                    else if (signRecords[1]==="/") {
                        if (signRecords[2]==="+") {
                          finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) + Number(records[3]) + Number(records[4]);
                        }
                        else if (signRecords[2]==="-") {
                          finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) - Number(records[3]) + Number(records[4]);
                        }
    
                        else if (signRecords[2]==="x") {
                        finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) * Number(records[3]) + Number(records[4]);
                      }
                      else if (signRecords[2]==="/") {
                        finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) / Number(records[3]) + Number(records[4]);
                      }
                    }
                }
                

                else if (signRecords[0] ==="-") {   // - as the first sign
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  } 
                }
                 
               
                else if (signRecords[0] ==="x") {
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  } 
                }

                 

                else if (signRecords[0] ==="/") {
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) + Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) - Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) * Number(records[3]) + Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) / Number(records[3]) + Number(records[4]);
                    }
                  } 
                }

              
              }



              else if (signRecords[3]==="-") {                    //this is for - sign as the fourth operator
                if (signRecords[0]==="+") {                   // + as the first sign
                  if(signRecords[1]==="+"){
                    if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="-") {
                      if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                      if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  } 
                }
                else if (signRecords[0] ==="-") {   // - as the first sign
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  } 
                }
    
                else if (signRecords[0] ==="x") {
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  } 
                }
    
                else if (signRecords[0] ==="/") {
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) + Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) - Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) * Number(records[3]) - Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) / Number(records[3]) - Number(records[4]);
                    }
                  } 
                }
              }
            
             

              else if (signRecords[3]==="x") {                    //this is for * in the expression as the third sign
                if (signRecords[0]==="+") {                   // + as the first sign
                  if(signRecords[1]==="+"){
                    if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="-") {
                      if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                      if (signRecords[2] === "+") {
                        finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
                    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  } 
                }
                else if (signRecords[0] ==="-") {   // - as the first sign
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  } 
                }
    
                else if (signRecords[0] ==="x") {
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  } 
                }
    
                else if (signRecords[0] ==="/") {
                  if(signRecords[1]==="+"){
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                    
                  }
                  else if (signRecords[1]==="-") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="x") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  }
                  else if (signRecords[1]==="/") {
                    if (signRecords[2]==="+") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) + Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="-") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) - Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="x") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) * Number(records[3]) * Number(records[4]);
                    }
    
                    else if (signRecords[2]==="/") {
                      finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) / Number(records[3]) * Number(records[4]);
                    }
                  } 
              }
            }
    
 



            else if (signRecords[3]==="/") {                    //this is for / in the expression as the third sign
              if (signRecords[0]==="+") {                   // + as the first sign
                if(signRecords[1]==="+"){
                  if (signRecords[2] === "+") {
                      finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
                  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) + Number(records[1]) + Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="-") {
                    if (signRecords[2] === "+") {
                      finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
                  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) + Number(records[1]) - Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="x") {
                    if (signRecords[2] === "+") {
                      finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
                  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) + Number(records[1]) * Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="/") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) + Number(records[1]) / Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                } 
              }
  
              else if (signRecords[0] ==="-") {   // - as the first sign
                if(signRecords[1]==="+"){
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) - Number(records[1]) + Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                  
                }
                else if (signRecords[1]==="-") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) - Number(records[1]) - Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="x") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) - Number(records[1]) * Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="/") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) - Number(records[1]) / Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                } 
              }
  
              else if (signRecords[0] ==="x") {
                if(signRecords[1]==="+"){
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) * Number(records[1]) + Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                  
                }
                else if (signRecords[1]==="-") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) * Number(records[1]) - Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="x") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) * Number(records[1]) * Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="/") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) * Number(records[1]) / Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                } 
              }
  
              else if (signRecords[0] ==="/") {
                if(signRecords[1]==="+"){
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) / Number(records[1]) + Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                  
                }
                else if (signRecords[1]==="-") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) / Number(records[1]) - Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="x") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) / Number(records[1]) * Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                }
                else if (signRecords[1]==="/") {
                  if (signRecords[2]==="+") {
                    finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) + Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="-") {
                    finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) - Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="x") {
                    finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) * Number(records[3]) / Number(records[4]);
                  }
  
                  else if (signRecords[2]==="/") {
                    finalResult = Number(records[0]) / Number(records[1]) / Number(records[2]) / Number(records[3]) / Number(records[4]);
                  }
                } 
              }
            } 


            }



        }
          
      }



 console.log(records);
 console.log(finalResult);
 console.log(signRecords);


  screenDisplay.value = finalResult;
  records = [];
  signRecords = [];
  factorialNumber2 = 1;
   
}); 

//  the previous input 

buttons[2].addEventListener("click", () => {
  screenDisplay.value = previousInput;
  records = [];
  signRecords = [];
});


// reset for the records character array
buttons[36].addEventListener("click", () => {
  records = [];
  signRecords = [];
  finalResult = "";
  factorialNumber2 = 1;
  screenDisplay.value = finalResult;

});


   
});