/**
 * Created by Amelia on 11/14/15.
 */

/* Test script for the password and password confirmation fields */
describe('password confirmation field', function() {
    var passwordConfirmInp = element(by.model('passwordConfirm'));
    var passwordInp = element(by.model('password'));
    var requiredConfirmation = $('.confirmation-required-error');
    var passwordMatch = $('.match-error');
    var signupBtn = element(by.id('submit-button'));

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show required validation error when blank', function() {
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(false);
        passwordInp.sendKeys('abc');
        passwordConfirmInp.sendKeys('123');
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(true);
        passwordConfirmInp.clear();
        expect(requiredConfirmation.isPresent()).toEqual(true);
        expect(passwordMatch.isPresent()).toEqual(false);
    });

    it('must show match validation error when passwords dont match', function() {
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(false);
        passwordInp.sendKeys('abc');
        passwordConfirmInp.sendKeys('123');
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(true);
        passwordConfirmInp.clear();
        expect(requiredConfirmation.isPresent()).toEqual(true);
        expect(passwordMatch.isPresent()).toEqual(false);

        // test with blank password field
        passwordInp.clear();
        passwordConfirmInp.sendKeys('123');
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(true);
    });

    it('must not show any validation errors when passwords match', function() {
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(false);
        passwordInp.sendKeys('abc');
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(false);
        passwordConfirmInp.sendKeys('abc');
        expect(requiredConfirmation.isPresent()).toEqual(false);
        expect(passwordMatch.isPresent()).toEqual(false);
    });

    it('must disable the submit button when invalid', function() {
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        passwordInp.sendKeys('abc');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        passwordConfirmInp.sendKeys('123');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        passwordConfirmInp.clear();
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        passwordConfirmInp.sendKeys('     ');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
    });
});
