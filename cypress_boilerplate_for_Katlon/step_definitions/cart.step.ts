import { Given } from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../pages/cart.page';

const cartpage = new CartPage();

const price: number[] = [];
const elements: string[] = [];

Given('I view my cart', () => {
    cartpage.clickOnCart();
});

Given('I find total four items listed in my cart', () => {
    cartpage.checkCartListCount(4);
});

Given('I search for lowest price items', () => {
    cartpage.checkForLowestAmountList();
});

Given('I am able to remove the lowest price items from my cart', () => {
    cartpage.removeLowestPriceItemInCart();
});

Given('I am able to verify three items in my cart', () => {
    cartpage.checkCartListCount(3);
});
