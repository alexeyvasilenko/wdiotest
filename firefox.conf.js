import LoginPage from './test/pageobjects/login.page';
import ProfilePage from './test/pageobjects/portal/profile.portal.page';

exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true
        }
    ],
    services: ['geckodriver'],
}


