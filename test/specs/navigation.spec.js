import MainPage from '../pageobjects/portal/main.portal.page'
import CoursesPage from '../pageobjects/portal/courses.portal.page'

describe('navigation', () => {
    before(() => {
        browser.login('avbusi7@gmail.com', 'Vamasha1');
    });

    beforeEach(() => {
        MainPage.open();
    });
    it('Courses page open', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });
});
