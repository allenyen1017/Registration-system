//主程式
for(var i=0;i<drink.length;i++){
    document.write(`
    <div class="button" onclick="selected_drink(${i})">
    <span>${drink[i][0]}</span>
    <span class="main_price">$${drink[i][1]}</span>
    </div>
    `)
}