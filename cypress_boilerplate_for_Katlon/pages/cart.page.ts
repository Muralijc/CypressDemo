import CartScreen from '../screen/cart.screen';

const cartScreen = new CartScreen();
const price: number[] = [];
const elements: string[] = [];

export default class cartPage {
    clickOnCart() {
        cy.contains(cartScreen.cart).click();
    }

    checkCartListCount(itemCount: number) {
        cy.get(cartScreen.cartItem).should('have.length', itemCount);
    }

    checkForLowestAmountList() {
        cy.get(cartScreen.cartAmount).each(($el: string, index) => {
            elements.push($el);
            cy.get($el)
                .invoke('text')
                .then((amount) => price.push(parseInt(amount.slice(1))));
        });
    }

    removeLowestPriceItemInCart() {
        let lowestPrice = Math.min(...price);
        let minIndex = price.indexOf(lowestPrice);
        cy.get(cartScreen.delItem(minIndex)).click().wait(500);
    }
}
