//主程式
for(var i=0;i<side_dish.length;i++){
    document.write(`
    <div class="button" onclick="selected_side_dish(${i})">
    <span>${side_dish[i][0]}</span>
    <span class="main_price">$${side_dish[i][1]}</span>
    </div>
    `)
}