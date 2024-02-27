

//let tarif_all = document.getElementById('int1').value;

let sum_hour = 60
let sum_week = 300
let sum_mouth = 1000
let sum_year = 10000


now_year = 2024

let year_input = document.getElementById('birth') //получаем айли кнопки
let year1 = year_input.value;
function schet(){
    
    
    let dat = now_year - year1;
    if(dat<=14 || dat>=50){
        result == `Проезд бесплатный`;
    }else if(dat>= 14 && dat <= 24 && cena.value == 'sum_hour'){
        result= hour_1/2;
    }else if(dat>= 14 && dat <= 24 && cena.value == 'sum_week'){
        result= week_2/2;
    }else if(dat>= 14 && dat <= 24 && cena.value == 'sum_mouth'){
        result= month_3/2;
    }else if(dat >= 14 && dat <= 24 && cena.value == 'sum_year'){
        result= year_4/2;
    }else if(dat >= 25 && cena.value == 'sum_hour'){
        result= hour_1;
    }else if(dat >= 25 && cena.value == 'sum_week'){
        result= week_2;
    }else if(dat >= 25 && cena.value == 'sum_month'){
        result= month_3;
    }else if(dat >= 25 && cena.value == 'sum_year'){
        result= year_4;
        return result
        itog.innerHTML = result
        
    }}
schet()


    function summ (){
        console.log()

    }