/**
 * Created by Amelia on 11/15/15.
 */

/* Test script for the submit button */
describe('confirmation message', function() {
    var emailInp = element(by.model('email'));
    var lastNameInp = element(by.model('lastName'));
    var birthdateInp = element(by.model('birthdate'));
    var passwordInp = element(by.model('password'));
    var passwordConfirmInp = element(by.model('passwordConfirm'));

    var signupBtn = element(by.id('submit-button'));
    var submitConfirmation = $('.signed-up');

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must not be visible if button is clicked while disabled', function() {
        expect(submitConfirmation.isPresent()).toEqual(false);
        passwordConfirmInp.sendKeys('123');
        passwordConfirmInp.clear();
        signupBtn.click();
        expect(submitConfirmation.isPresent()).toEqual(false);
    });

    it('must be visible if button is clicked and form is valid', function() {
        expect(submitConfirmation.isPresent()).toEqual(false);
        emailInp.sendKeys('hello@world.com');
        lastNameInp.sendKeys('Stearns');
        birthdateInp.sendKeys('1/1/60');
        passwordInp.sendKeys('password');
        passwordConfirmInp.sendKeys('password');
        expect(submitConfirmation.isPresent()).toEqual(false);
        signupBtn.click();
        expect(submitConfirmation.isPresent()).toEqual(true);
    });
});
