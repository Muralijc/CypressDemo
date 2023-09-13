export default class HomeScreen {
    addToCartButton: string;
    addItemtoCart: (index:number) => string;
 
    constructor() {
        this.addToCartButton = '.type-product >> .add_to_cart_button'; 
        this.addItemtoCart = (index) => `.type-product >> .add_to_cart_button:nth(${index})`; 

     
    }
}


