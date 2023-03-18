



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

// Enter the no. of lines you bet on (1-3)

 const asking_bet=()=>{

   while(true){
      const bet = prompt("Which Line you want ot bet on (1-3) ");
      const numbet = parseInt(bet);
    
      if( isNaN(numbet) || numbet<=0 || numbet >3 )
      {
       console.log("Try Again , Enter a Valid Number ")
      }
    
      else{
       return numbet
      }
    }
 }

 // How much you want to bet on your line 

const amountonline =(balance)=>{


    while(true)
    {
      const userinputamountofline =  prompt("How much you want to bet on your line " + " : ");

      const filtuserinputamountofline = parseFloat(userinputamountofline)
 
      if(isNaN(filtuserinputamountofline)|| filtuserinputamountofline  > balance || filtuserinputamountofline<0)
      {
 
       console.log("Try Again , Enter a Valid Amount ")
 
      }
 
      else{
       return filtuserinputamountofline;
      }
 
    }






}
const balance = deposit();
const yy = asking_bet();
const zz = amountonline();
