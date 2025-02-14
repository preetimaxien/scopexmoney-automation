describe( 'Logout Test', () =>
{
    it( 'should log out successfully', async () =>
    {
        // Locate and click on the profile button
        const profileButton = await $( '//android.view.View[@content-desc="Profile"]/android.view.ViewGroup' );
        await profileButton.click();


        // Locate and click on the logout button
        const logoutButton = await $( '//android.widget.TextView[@text="Log out"]' ); // Replace with actual accessibility ID
        await logoutButton.click();

        // Confirm logout if a confirmation popup appears
        await driver.acceptAlert();

        const confirmButton = await $( '//android.widget.Button[@resource-id="android:id/button1"]' );
        if ( await confirmButton.isDisplayed() )
        {
            await confirmButton.click();
        }

        // Validate if the user is redirected to the login page
        const loginPage = await $( '//android.widget.TextView[@text="Log in to ScopeX "]' ); // Replace with actual accessibility ID
        await expect( loginPage ).toBeDisplayed();

        console.log( '✅ Logout successful' );

    } );
} );
