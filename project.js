
const prompt = require ("prompt-sync")();

 const deposit = () =>{


    while(true){

        const depositAmount = prompt("Enter the Deposit amount : ");
   
        const numberDepositAmount = parseFloat(depositAmount);
   
        if(isNaN(numberDepositAmount) || numberDepositAmount<0)
        {
           console.log("Please Enter Valid value :) ");
        }

        else{

            return numberDepositAmount;
        }
   
        // else{
        //    console.log(`Your Deposit Amount is : ${depositAmount}`);
        //  }
   }
    
};



const xx = deposit();
console.log(xx);