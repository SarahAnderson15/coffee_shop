document.addEventListener("DOMContentLoaded", () =>{
    function cart(){
        let cartCount = 0;
        let cartTotal = 0;
        
        const cartCount1 = document.getElementById("cart-count");
        const cartTotal1 = document.getElementById("cart-totals");
        const buttons = document.querySelectorAll(".add-to-cart");

        buttons.forEach((btn) =>{
            const product1 = btn.closest(".product");
            if (!product1(price)) return;

            const priceString = product1.getAttribute("data-price") || "0";
            const price = pareFloat(priceString);
            if (isNaN(price)) return;

            cartCount += 1;
            cartTotal += price;

            cartCount1.textContent = cartCount;
            cartTotal1.textContent = cartTotal;

        })
    }
})
cart();
