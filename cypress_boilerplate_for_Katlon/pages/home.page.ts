import HomeScreen from '../screen/home.screen';

const homeScreen = new HomeScreen();

export default class homePage {
    launchApp() {
        cy.visit('/');
    }

    addItmstocart() {
        cy.get(homeScreen.addToCartButton).each(($el, index) => {
            if (index < 4) {
                cy.get(homeScreen.addItemtoCart(index)).click().wait(500);
            }
        });
    }
}
