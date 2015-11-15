/**
 * Created by christina3135 on 11/13/2015.
 */
/* Test script for the Signup app */
describe('signup app', function() {
    var emailInp = element(by.model('signupForm.emailInp'));
    var firstNameInp = element(by.model('signupForm.firstName'));
    var lastNameInp = element(by.model('signupForm.lastName'));
    var birthdateInp = element(by.model('signupForm.birthdateInp'));
    var passwordInp = element(by.model('signupForm.passwordInp'));
    var passwordConfirmInp = element(by.model('signupForm.passwordConfirmInp'));

    var submitBtn = element(by.id('submit-button'));

    var requiredMsgVal = $('.validation-error');

    it('must show required validation error', function() {
        testValidation(emailInp);
        testValidation(lastNameInp);
        testValidation(birthdateInp);
        testValidation(passwordInp);
        testValidation(passwordConfirmInp);
    });

    function testValidation(currentElement) {
        expect(requiredMsg.isPresent()).toEqual(false);
        currentElement.sendKeys('abc');
        currentElement.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        currentElement.sendKeys('abc');
        expect(requiredMsg.isPresent()).toEqual(false);
    }

    it('must disable submit button with blank required field', function() {
        emailInp.clear();
        expect(submitBtn.getAttribute('disabled')).toEqual('true');
        emailInp.sendKeys('abc');
        expect(addTaskBtn.getAttribute('disabled')).toBe(null);
        emailInp.clear();
        emailInp.sendKeys('        ');
        expect(addTaskBtn.getAttribute('disabled')).toEqual('true');
        emailInp.sendKeys('abc');
    });
});