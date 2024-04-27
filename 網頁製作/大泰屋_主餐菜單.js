//主程式
for(var i=0;i<main_dish.length;i++){
    document.write(`
    <div class="button" onclick="selected_main_dish(${i})">
    <span>${main_dish[i][0]}</span>
    <span class="main_price">$${main_dish[i][1]}</span>
    </div>
    `)
}