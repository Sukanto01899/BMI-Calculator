//All Variable
const submitBtn = document.getElementById('submit-btn');
let inputKG = document.getElementById('input-kg');
let inputCM = document.getElementById('input-height');
const output = document.getElementById('output');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    let weight  = inputKG.value;
    let measure;
    let cmToMeter = inputCM.value / 100;
    let height = Math.pow(cmToMeter, 2);
    let bmi = weight / height;
    let fixBmi = bmi.toFixed(2);
    console.log(fixBmi)

    if(fixBmi <= 18.4){
         measure = `Your BMI is <b>${fixBmi}</b> thats means you are <b>Underweight</b>`;
    }else if(fixBmi > 18.5 && fixBmi < 24.9){
        measure = `Your BMI is <b>${fixBmi}</b> thats means you are <b>Normal</b>`;
    }else if(fixBmi >25.0 && fixBmi < 39.9){
        measure = `Your BMI is <b>${fixBmi}</b> thats means you are <b>Overweight</b>`;
    }else if(fixBmi > 40){
        measure = `Your BMI is <b>${fixBmi}</b> thats means you are <b>Obese</b>`;
    }


    if(weight === ''){
        alert(`Please Enter Vaild Information`);
    }else if(inputCM.value === ''){
        alert(`Please Enter Vaild Information`)
    }else{
        output.innerHTML = measure;
    }
})


