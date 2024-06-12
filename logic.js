
let items_in_cart = 0;

function item_clicked(item_display) {
    items_in_cart += 1;
    item_display.innerText = items_in_cart;
}

window.addEventListener('load', function () {

    const purchase_button = document.getElementById("purchase"); // getElementById outdated 
    const item = document.querySelector(".item-button");
    const item_display = document.querySelector(".items");
    const div_element = this.document.querySelector(".div-element");

    function virus() {
        const new_element = document.createElement("h1");
        new_element.innerText = "Virus!!!";
        div_element.appendChild(new_element);
    }

    function purchase_button_clicked() {
        const new_element = document.createElement("h1");
        div_element.innerHTML = "";
        if (items_in_cart == 0) {
            new_element.innerText = "No items in cart!!!";
            div_element.appendChild(new_element);
        } else {

            if (items_in_cart == 10) {
                setInterval(virus, 500);
            }

            new_element.innerText = "You purchased " + items_in_cart + " items!";
            div_element.appendChild(new_element);
            items_in_cart = 0;
            item_display.innerText = "No Items";
        }
    }

    item.addEventListener(
        "click",
        function () {
            item_clicked(item_display);
        }
    );

    purchase_button.addEventListener(
        "click",
        purchase_button_clicked
    )



    // purchase_button.innerText = "CHANGED BUTTON TEXT";
})




let variable_name_whatever = "blah";
