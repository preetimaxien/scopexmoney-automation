

describe( 'Add Recipient Functionality', () =>
{
    it( 'should redirect to add recipient form', async () =>
    {
        /* // Locate and click the "Add Recipient" button
         const addRecipientBtn = await $( '~Add recipient' ); 
         await addRecipientBtn.waitForDisplayed();
         await addRecipientBtn.click();
 
         //wait for add recipient form to appear
         const addRecipientForm = await $( '(//android.widget.TextView[@text="Add recipient"])[1]' );
         await addRecipientForm.waitForDisplayed();
         const addRecipientFormText = await addRecipientForm.getText();
         expect( addRecipientFormText ).toBe( "Add Recipient" );
 
         //nick name field
         const nickNameField = await $( '//android.widget.EditText[@resource-id="RNE__Input__text-input" and @text="Ex: john"]' ); 
         await nickNameField.waitForDisplayed();
 
         // Fill in recipient nick name
         await nickNameField.setValue( 'John Doe' );
 
         //ifsc code field
         const ifscField = await $( '//android.widget.EditText[@resource-id="RNE__Input__text-input" and @text="Ex: KKBKxxxxx"]' ); // Replace with actual ID
         await ifscField.waitForDisplayed();
 
         // Fill in ifsc code
         await ifscField.setValue( 'ICIC0001098' );
 
 
         //Bank account number field
         const bankAccountNumberField = await $( '//android.widget.EditText[@resource-id="RNE__Input__text-input" and @text="Ex: 754521xxxx"]' ); // Replace with actual ID
         await bankAccountNumberField.waitForDisplayed();
 
         // Fill in bank account number
         await bankAccountNumberField.setValue( '87767978779' );
 
         // Submit the recipient details
         const submitButton = await $( '//android.widget.Button[@content-desc="Add recipient"]' ); 
         await submitButton.click();
 
         // Validate success message or redirection
         const successMessage = await $( 'id=successMessage' ); 
         await successMessage.waitForDisplayed();
         expect( await successMessage.getText() ).to.include( 'Recipient added successfully' );
 */
    } );
} );
