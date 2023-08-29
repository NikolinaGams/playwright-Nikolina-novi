import { expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly showPassword: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly password: Locator;
    readonly registerButton: Locator;
    readonly homeUrl: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInputField = page.locator('label').filter({ hasText: 'Email' }).locator('div')
        this.passwordInputField = page.locator('label').filter({ hasText: 'Password' }).locator('div').first()
        this.loginButton = page.getByRole('button', { name: 'Log In' })
        this.showPassword= page.locator('form').getByRole('img')
        this.emailError = page.locator('div').filter({ hasText: 'Incorrect email or password'}).first()
        this.passwordError = page.locator('div').filter({ hasText: 'Incorrect email or password' }).first()
        this.password = page.getByLabel('Password');
        this.registerButton = page.locator('button', { hasText: 'Register' });
        this.homeUrl = page.getByRole('link',{ name: 'Home'});
    }

    async login(emailValue: string, passwordValue: string){
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.loginButton.click();
    }

    async succesfulLogin(){
        await expect(this.homeUrl).toBeVisible();
    }

    async noProjectsErrorMessage(){
        await expect(this.emailError).toBeVisible();
        await expect(this.passwordError).toBeVisible();
    }

    async validCredentials(emailValue: string, passwordValue: string){
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue); 
        await this.showPassword.click();
        await this.password.isVisible(); 
        
    }
}