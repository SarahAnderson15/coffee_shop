document.addEventListener("DOMContentLoaded", function (){
    let cartCount = 0;
    let cartTotal = 0;

    const cartCountE1 = document.getElementById("cart-count");
    const cartTotalE1 = document.getElementById("cart-totals");
    const button = doucument.querySelectorAll(".add-to-cart");

    button.forEach((button) => {
        button.addEventListener("click", () => {
         const product = button.closest(".product");
         const price = parseFloat(product.dataset.price);

         cartCount += 1;
         cartTotal += price;

         cartCountE1.textContent = cartCount;
         cartTotalE1,this.textContent = cartTotal;
         console.log(`Added to cart: ${product.dataset.name}(£${price})`)
        });
    });
});