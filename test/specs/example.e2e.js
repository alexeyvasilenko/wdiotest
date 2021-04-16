import Page from  '../pageobjects/page';
import ProfilePage from '../pageobjects/profile.page';
import LoginPage from '../pageobjects/login.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.openLoginPageBtn();
    });

    afterEach( () => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {

        // LoginPage.openLoginPageBtn();
        LoginPage.setLogin('avbusi7@gmail.com');
        LoginPage.setPassword('Vamasha1');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {

        LoginPage.submitButtonIsDisabled();
    });

    it('fails of invalid data provided ', function () {
        LoginPage.setLogin('example@example.com');
        LoginPage.setPassword('123456');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();
    });

    it('login input is required', () => {
        LoginPage.setLogin('example');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();
    });


});


