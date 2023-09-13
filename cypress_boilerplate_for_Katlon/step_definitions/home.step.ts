import { Given } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/home.page';

const homepage = new HomePage();

const price: number[] = [];
const elements: string[] = [];

Given('I add four random items to my cart', () => {
    homepage.launchApp();
    homepage.addItmstocart();
});
