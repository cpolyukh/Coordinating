/**
 * Created by Amelia on 11/14/15.
 */

/* Test script for the birthdate field */
describe('birthdate field', function() {
    var birthdateInp = element(by.model('userInfo.birthdate'));
    var requiredBirthdate = $('.birthdate-required-error');
    var validDate = $('.valid-date-error');
    var oldEnough = $('.in-the-past-error');
    var signupBtn = element(by.id('submit-button'));

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show required validation error when blank', function() {
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
        birthdateInp.sendKeys('abc');
        birthdateInp.clear();
        expect(requiredBirthdate.isPresent()).toEqual(true);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
    });

    it('must show required validation error when invalid birthdate is entered', function() {
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
        birthdateInp.sendKeys('abc');
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(true);
        expect(oldEnough.isPresent()).toEqual(false);
        birthdateInp.clear();
        expect(requiredBirthdate.isPresent()).toEqual(true);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
    });

    it('must show required validation error when birthdate less than 13 years in' +
        'the past is entered', function() {
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
        birthdateInp.sendKeys('1/1/2004');
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(true);
        birthdateInp.clear();
        expect(requiredBirthdate.isPresent()).toEqual(true);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
    });

    it('must not show any validation error when a valid birthdate is entered', function() {
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
        birthdateInp.sendKeys('11/14/2002');
        expect(requiredBirthdate.isPresent()).toEqual(false);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
        birthdateInp.clear();
        expect(requiredBirthdate.isPresent()).toEqual(true);
        expect(validDate.isPresent()).toEqual(false);
        expect(oldEnough.isPresent()).toEqual(false);
    });

    it('must disable the submit button when invalid', function() {
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        birthdateInp.sendKeys('abc');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        birthdateInp.clear();
        birthdateInp.sendKeys('     ');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        birthdateInp.clear();
        birthdateInp.sendKeys('1/1/2005');
        expect(signupBtn.getAttribute('disabled')).toEqual('true');
        birthdateInp.clear();
    });
});