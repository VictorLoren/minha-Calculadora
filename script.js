const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;

const bmi = (weight/(height*height)).toFixed(2);

const value= document.getElementById('value');
let description ='';



document.getElementById('infos').classList.remove('hidden');

if(bmi < 18.5){
 description = 'cuidado! voce esta a baixo do peso!'
 value.classList.add('attention');
}else if (bmi >= 18.5 && bmi<=20){
    description = 'Você esta no peso Ideal!'
    value.classList.remove('attention');
value.classList.add('normal');
}else if (bmi>25 && bmi <=30){
    description = 'cuidado! voce esta com sobrepeso'
    value.classList.add('attention');
}else if(bmi >30 && bmi<=35){
    description = 'cuidado! voce esta com obesidade moderada!'
    value.classList.add('attention');
}else if (bmi>35 && bmi<= 40){
    description = 'cuidado! voce esta com obsidade severa!'
    value.classList.add('attention');
}else{
    description = 'cuidado! voce esta com  obsidade morbida!'
    value.classList.add('attention');
}
value.textContent = bmi.replace('.',',');
document.getElementById('description').textContent = description;
});