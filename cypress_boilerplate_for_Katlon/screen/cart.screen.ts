export default class CartScreen {
    cart: string;
    cartItem: string;
    cartAmount: string;
    delItem: (index:number) => string;

    constructor() {
        this.cart = 'Cart'; 
        this.cartItem = '.woocommerce-cart-form__contents >> .cart_item'; 
        this.cartAmount = '.woocommerce-cart-form__contents >> .cart_item > .product-subtotal > .amount'; 
        this.delItem  = (minIndex) => `.woocommerce-cart-form__contents >> .cart_item > .product-remove > .remove:nth(${minIndex})`;

    }
}
