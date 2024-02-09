const bothInputs=document.querySelectorAll('input');
const formElement=document.querySelector('form');
const calculatedBMI=document.querySelector('#bmi-output');

formElement.addEventListener('submit',submitHandler);

function submitHandler(event){
    event.preventDefault();
    const height=parseInt(bothInputs[0].value);
    const weight=parseInt(bothInputs[1].value);

    if(height==='' || isNaN(height) || height===' ' || height==true || height==false || height<0){
        calculatedBMI.style.color='red';
        calculatedBMI.textContent='Enter Proper Height';
    }
    else if(weight==='' || isNaN(weight) || weight===' ' || weight===true || weight===false || weight<0){
        calculatedBMI.style.color='red';
        calculatedBMI.textContent=`Enter Proper Weight`;
    }
    else{
        calculatedBMI.style.color='black';
        const bmi = weight / ((height / 100) * (height / 100));
        calculatedBMI.textContent=`Your BMI : ${bmi.toFixed(2)} kg/m²`;
    }
    
}