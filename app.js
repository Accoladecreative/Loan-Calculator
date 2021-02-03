// document.getElementById("myBtn").addEventListener("Click", giveUP);
// function giveUP(){
//     console.log("Grab!!!")
// }

// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }

const loan = document.getElementById('loan');
const interest = document.querySelector('#interest');
const year = document.querySelector('#year');
const loanCal = document.querySelector('#loanCal');
const errmsg = document.querySelector('#errmsg');
const myBtn = document.querySelector('#myBtn');
const result = document.querySelector('.result')
const monthlyRepay = document.querySelector('#monthlyRepay');
const totalRepay = document.querySelector('#totalRepay');
const totalInterest = document.querySelector('#totalInterest');
const spinner = document.getElementById("spinner")//document.querySelector('#spinner');
// const checkName = document.getElementById("checkName")
//         checkName.addEventListener('click',makeAlert)
//         function makeAlert(){
//             alert("Check Successful");
//         }


loadEvents();

function loadEvents(){
    
    //validate function
      myBtn.addEventListener('click', validateInput);
      
   //Do caalculation
//    myBtn.addEventListener("click",calculateLoan


}

//validate function
function validateInput(e){
    e.preventDefault();
    if((loan.value ==='') || (interest.value==='') || (year.value == '')){
        alert('Input Values Incomplete');
        errmsg.style.display ="block";
        errmsg.innerHTML= "Input Values Incomplete";
        console.log('yes');
        setTimeout(errOff,3000)
        
    }
    // else if((typeof loan.value != 'number') || (typeof interest.value != 'number') || (typeof year.value != 'number')){
    //     alert('Invalid numbers')
    //     errormsg.style.display ="block"
    //     errmsg.innerHTML= "Only Number Input is Allowed"
    else calculateLoan();
    

function errOff(){
        errmsg.style.display ="none";
}

  
}

//do calculation and insert value
function calculateLoan(e){result.style.display = "block";
    //Make spinner on
    spinner.style.diplay='block'
    //Make spinner off in 3 secs
    setTimeout(stopSpin,3000)
    function stopSpin(){
        spinner.style.display ="none";
        
    }

    

    totalInterest.value = loan.value * interest.value * year.value  / 100;

    
    totalRepay.value = Number(totalInterest.value) + Number(loan.value);

    monthlyRepay.value = totalRepay.value / (12*year.value)


    
}
