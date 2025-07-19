const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()
    const hieght=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results');

    if (hieght==='' || hieght === isNaN(hieght) || hieght < 0) {
        result.innerHTML=`please give a valid height ${hieght}`
        }
    else if(weight==='' || weight === isNaN(weight) || weight < 0){
        result.innerHTML=`please give a valid weight ${weight}`
        }
    else{
       const bmi = (weight/((hieght*hieght)/10000)).toFixed(2);
        

        let message = '';
        if (bmi < 18.6) {
            message = `Your BMI is ${bmi} (Underweight)`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            message = `Your BMI is ${bmi} (Normal)`;
        } else {
            message = `Your BMI is ${bmi} (Overweight)`;
        }
        result.innerHTML = `<span>${message}</span>`;
    }
    
})