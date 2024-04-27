//元素變數定義
var select_meal_name
var select_flavor
var select_spicy
var select_addition
var select_temperature
var bill_inner = document.getElementById("bill_inner")

//主程式
function add_bill(){
    select_meal_name = document.getElementById("detail_meal_name")
    select_flavor = document.querySelector("input[type=radio][name=flavor]:checked")
    select_spicy = document.querySelector("input[type=radio][name=spicy]:checked")
    select_addition = document.querySelectorAll("input[type=checkbox][name=addition]:checked")
    select_temperature = document.querySelector("input[type=radio][name=temperature]:checked")

    
    bill_inner.innerHTML = bill_inner.innerHTML + `<h4>${select_meal_name.innerText}</h4>`

    if (select_flavor != null){
        bill_inner.innerHTML = bill_inner.innerHTML + `<p>&ensp;&ensp;${select_flavor.value}</p>`
    }

    if(select_spicy != null && select_spicy.value != "fixed"){
        bill_inner.innerHTML = bill_inner.innerHTML + `<p>&ensp;&ensp;${select_spicy.value}</p>`
    }

    for(i=0;i<select_addition.length;i++){
        bill_inner.innerHTML = bill_inner.innerHTML + `<p>&ensp;&ensp;${select_addition[i].value}</p>`
        if(select_addition[i].value == "加飯"){
            price +=10
        }
        else if(select_addition[i].value == "加麵"){
            price +=20
        }
        else if(select_addition[i].value == "加河粉"){
            price +=20
        }
        else if (select_addition[i].value == "加肉")
            price +=20
    }

    if(select_temperature != null){
        bill_inner.innerHTML = bill_inner.innerHTML + `<p>&ensp;&ensp;${select_temperature.value}</p>`
    }

    bill_inner.innerHTML = bill_inner.innerHTML + `<p class="bill_price">$${price}</p>`
    bill_inner.innerHTML = bill_inner.innerHTML + `<hr>`

    meal_name.innerHTML = `<span>已加入訂單</span>`
    flavor.innerHTML = ``
    spicy.innerHTML = ``
    addition.innerHTML = ``
    temperature.innerHTML = ``
}