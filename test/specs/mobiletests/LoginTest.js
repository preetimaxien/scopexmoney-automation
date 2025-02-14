describe( 'Login Page Test', () =>
{

  it( 'should login with email and password', async () =>
  {


    await driver.switchContext( 'NATIVE_APP' ); // Switch to native context

    // Locate the Email input field and enter the email
    const emailInput = await $( '(//android.view.ViewGroup[@resource-id="RNE__Input__view-wrapper"])[1]/android.view.ViewGroup' );

    await emailInput.waitForExist( { timeout: 20000 } );
    //await emailInput.waitforDisplayed({ timeout: 5000 });
    await emailInput.click();
    await emailInput.setValue( 'preetimaxien@gmail.com' );


    // Locate the Password input field and enter the password
    const passwordInput = await $( 'login-password-input' );
    await passwordInput.waitForExist();
    await passwordInput.setValue( 'Qwerty@2020' );

    // Locate the Login button and click it
    const loginButton = await $( 'login-button' );
    await loginButton.waitForExist();
    await loginButton.click();

    // Assert that the login was successful by checking if the dashboard or homepage is displayed
    const verificationpageTitle = await $( '//android.widget.TextView[@text="Verification"]' );
    await verificationpageTitle.waitForExist();
    const titleText = await verificationpageTitle.getText();

    // Verify the text of the dashboard page after login
    expect( titleText ).toBe( 'Verification' );


  } );
  /*
    it( 'should allow login with Google', async () =>
    {
      // Locate the 'Continue with Google' button and click it
      const googleLoginButton = await $('//android.widget.TextView[@text="Continue with Google"]');  
      await googleLoginButton.waitForExist();
      await googleLoginButton.click();
  
      //After clicking, assert successful login with Google
    
      const googlePageTitle = await $('~google_page_title');  
      await googlePageTitle.waitForExist();
     const googleTitleText = await googlePageTitle.getText();
  
      // Verify that the user is redirected to the Google login screen
      // expect(googleTitleText).toBe('Sign in with Google');  
    } );
  */

} );
