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
        result.innerHTML=`<span>${bmi}</sapn>`
    }
})