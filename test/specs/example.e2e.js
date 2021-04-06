import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('kojidos915@whyflkj.com');
        LoginPage.setPassword('Vamasha1');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


