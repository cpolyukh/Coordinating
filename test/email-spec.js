/**
 * Created by Amelia on 11/14/15.
 */

/* Test script for the email field */
describe('email field', function() {
    var emailInp = element(by.model('email'));
    var requiredEmail = $('.email-required-error');
    var validEmail = $('.email-invalid-error');
    var signupBtn = element(by.id('submit-button'));

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show required validation error when blank', function() {
        expect(requiredEmail.isPresent()).toEqual(false);
        expect(validEmail.isPresent()).toEqual(false);
        emailInp.sendKeys('abc');
        expect(requiredEmail.isPresent()).toEqual(false);
        expect(validEmail.isPresent()).toEqual(true);
        emailInp.clear();
        expect(requiredEmail.isPresent()).toEqual(true);
        expect(validEmail.isPresent()).toEqual(false);
        emailInp.sendKeys('abc');
        expect(requiredEmail.isPresent()).toEqual(false);
        expect(validEmail.isPresent()).toEqual(true);
    });

    it('must not show any validation error when valid email is entered', function() {
        expect(requiredEmail.isPresent()).toEqual(false);
        expect(validEmail.isPresent()).toEqual(false);
        emailInp.sendKeys('hello@world.com');
        expect(requiredEmail.isPresent()).toEqual(false);
        expect(validEmail.isPresent()).toEqual(false);
    });

    it('must disable the submit button when invalid', function() {
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        emailInp.sendKeys('abc');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        emailInp.clear();
        emailInp.sendKeys('     ');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
    });
});