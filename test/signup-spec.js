/**
 * Created by christina3135 on 11/13/2015.
 */
/* Test script for the Signup app */
describe('signup app', function() {
    var emailInp = element(by.model('email'));
    var firstNameInp = element(by.model('firstName'));
    var lastNameInp = element(by.model('lastName'));
    var birthdateInp = element(by.model('birthdate'));
    var passwordInp = element(by.model('password'));
    var passwordConfirmInp = element(by.model('passwordConfirm'));

    var submitBtn = element(by.id('submit-button'));

    var emailError = $('.email-required-error');
    var lastNameError = $('.lastname-required-error');
    var birthdateError = $('.birthdate-required-error');
    var passwordError = $('.password-required-error');
    var passwordConfirmError = $('.confirmation-required-error');

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show email required validation error', function() {
        expect(emailError.isPresent()).toEqual(false);
        emailInp.sendKeys('hello@world.com');
        emailInp.clear();
        expect(emailError.isPresent()).toEqual(true);
        emailInp.sendKeys('hello@world.com');
        expect(emailError.isPresent()).toEqual(false);
    });

    it('must show last name required validation error', function() {
        expect(lastNameError.isPresent()).toEqual(false);
        lastNameInp.sendKeys('Smith');
        lastNameInp.clear();
        expect(lastNameError.isPresent()).toEqual(true);
        lastNameInp.sendKeys('Smith');
        expect(lastNameError.isPresent()).toEqual(false);
    });

    it('must show birthdate required validation error', function() {
        expect(birthdateError.isPresent()).toEqual(false);
        birthdateInp.sendKeys('1/1/1980');
        birthdateInp.clear();
        expect(birthdateError.isPresent()).toEqual(true);
        birthdateInp.sendKeys('1/1/1980');
        expect(birthdateError.isPresent()).toEqual(false);
    });

    it('must show password required validation error', function() {
        expect(passwordError.isPresent()).toEqual(false);
        passwordInp.sendKeys('2Cool4U');
        passwordInp.clear();
        expect(passwordError.isPresent()).toEqual(true);
        passwordInp.sendKeys('2Cool4U');
        expect(passwordError.isPresent()).toEqual(false);
    });

    it('must show password confirm required validation error', function() {
        expect(passwordConfirmError.isPresent()).toEqual(false);
        passwordConfirmInp.sendKeys('2Cool4U');
        passwordConfirmInp.clear();
        expect(passwordConfirmError.isPresent()).toEqual(true);
        passwordConfirmInp.sendKeys('2Cool4U');
        expect(passwordConfirmError.isPresent()).toEqual(false);
    });

    it('must disable submit button with blank required fields', function() {
        emailInp.clear();
        lastNameInp.clear();
        birthdateInp.clear();
        passwordInp.clear();
        passwordConfirmInp.clear();
        expect(submitBtn.getAttribute('disabled')).toEqual('true');
        emailInp.sendKeys('hello@world.com');
        lastNameInp.sendKeys('Smith');
        birthdateInp.sendKeys('1/15/1980');
        passwordInp.sendKeys('2Cool4U');
        passwordConfirmInp.sendKeys('2Cool4U');
        expect(submitBtn.getAttribute('disabled')).toBe(null);
        emailInp.clear();
        lastNameInp.clear();
        birthdateInp.clear();
        passwordInp.clear();
        passwordConfirmInp.clear();
        expect(submitBtn.getAttribute('disabled')).toEqual('true');
    });
});