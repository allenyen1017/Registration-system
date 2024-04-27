//元素取得
var meal_name = document.getElementById("meal_name")
var flavor = document.getElementById("flavor")
var spicy = document.getElementById("spicy")
var addition = document.getElementById("addition")
var temperature = document.getElementById("temperature")
var price

//主程式
function selected_main_dish(i){
    meal_name.innerHTML = `
    <span id="detail_meal_name">${main_dish[i][0]}</span>
    <span class="detail_price">$${main_dish[i][1]}</span>
    `
    price = main_dish[i][1]
    flavor.innerHTML = ``
    temperature.innerHTML = ``

    if(main_dish[i][2]=="adjust"){
        spicy.innerHTML = `
        <hr>
        <p>辣度</p>
        <input type="radio" name="spicy" id="notspicy" value="不辣">
        <label for="notspicy"><span>不辣</span></label>
        <br>
        <input type="radio" name="spicy" id="mildspicy" value="小辣" checked>
        <label for="mildspicy"><span>小辣</span></label>
        <br>
        <input type="radio" name="spicy" id="mediumspicy" value="中辣">
        <label for="mediumspicy"><span>中辣</span></label>
        <br>
        <input type="radio" name="spicy" id="hotspicy" value="大辣">
        <label for="hotspicy"><span>大辣</span></label>
        `
    }
    else if(main_dish[i][2]=="fixed"){
        spicy.innerHTML = `
        <hr>
        <p>辣度(固定)</p>
        <input type="radio" name="spicy" id="mildspicy" value="fixed" checked>
        <label for="mildspicy"><span>小辣</span></label>
        `
    }

    if(main_dish[i][3]=="rice"){
        addition.innerHTML = `
        <hr>
        <p>加量</p>
        <input type="checkbox" name="addition" id="addrice" value="加飯">
        <label for="addrice"><span>加飯</span></label>
        <span class="detail_price">+$10</span>
        `
    }
    else if(main_dish[i][3]=="noodle"){
        addition.innerHTML = `
        <hr>
        <p>加量</p>
        <input type="checkbox" name="addition" id="addnoodle" value="加麵">
        <label for="addnoodle"><span>加麵</span></label>
        <span class="detail_price">+$20</span>
        `
    }
    else if(main_dish[i][3]=="pho"){
        addition.innerHTML = `
        <hr>
        <p>加量</p>
        <input type="checkbox" name="addition" id="addpho" value="加河粉">
        <label for="addpho"><span>加河粉</span></label>
        <span class="detail_price">+$20</span>
        `
    }

    if(main_dish[i][4]){
        addition.innerHTML = addition.innerHTML + `
        <br>
        <input type="checkbox" name="addition" id="addmeat" value="加肉">
        <label for="addmeat"><span>加肉</span></label>
        <span class="detail_price">+$20</span>
        `
    }
}

function selected_side_dish(i){
    meal_name.innerHTML = `
    <span id="detail_meal_name">${side_dish[i][0]}</span>
    <span class="detail_price">$${side_dish[i][1]}</span>
    `
    price = side_dish[i][1]
    addition.innerHTML = ``
    temperature.innerHTML = ``

    if(side_dish[i][2]){
        flavor.innerHTML = `
        <hr>
        <p>口味</p>
        <input type="radio" name="flavor" id="shrimp_paste" value="蝦醬" checked>
        <label for="shrimp_paste"><span>蝦醬</span></label>
        <br>
        <input type="radio" name="flavor" id="fried" value="清炒">
        <label for="fried"><span>清炒</span></label>
        `
    }
    else{
        flavor.innerHTML = ``
    }

    if(side_dish[i][3]=="adjust"){
        spicy.innerHTML = `
        <hr>
        <p>辣度</p>
        <input type="radio" name="spicy" id="notspicy" value="不辣">
        <label for="notspicy"><span>不辣</span></label>
        <br>
        <input type="radio" name="spicy" id="mildspicy" value="小辣" checked>
        <label for="mildspicy"><span>小辣</span></label>
        <br>
        <input type="radio" name="spicy" id="mediumspicy" value="中辣">
        <label for="mediumspicy"><span>中辣</span></label>
        <br>
        <input type="radio" name="spicy" id="hotspicy" value="大辣">
        <label for="hotspicy"><span>大辣</span></label>
        `
    }
    else if(side_dish[i][3]=="fixed"){
        spicy.innerHTML = `
        <hr>
        <p>辣度(固定)</p>
        <input type="radio" name="spicy" id="mildspicy" value="fixed" checked>
        <label for="mildspicy"><span>小辣</span></label>
        `
    }
    else{
        spicy.innerHTML = ``
    }
}

function selected_drink(i){
    meal_name.innerHTML = `
    <span id="detail_meal_name">${drink[i][0]}</span>
    <span class="detail_price">$${drink[i][1]}</span>
    `
    price = drink[i][1]
    flavor.innerHTML = ``
    spicy.innerHTML = ``
    addition.innerHTML = ``

    if(drink[i][2]){
        temperature.innerHTML = `
        <hr>
        <p>冷熱</p>
        <input type="radio" name="temperature" id="ice" value="冰" checked>
        <label for="ice"><span>冰</span></label>
        <br>
        <input type="radio" name="temperature" id="warm" value="溫熱">
        <label for="warm"><span>溫熱</span></label>
        `
    }
    else{
        temperature.innerHTML = ``
    }
}