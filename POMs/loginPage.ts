import { expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly loginButton: Locator;
    readonly showPassword: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInputField = page.locator('label').filter({ hasText: 'Email' }).locator('div')
        this.passwordInputField = page.locator('label').filter({ hasText: 'Password' }).locator('div').first()
        this.loginButton = page.getByRole('button', { name: 'Log In' })
        this.showPassword= page.locator('form').getByRole('img')
    }

    async login(emailValue: string, passwordValue: string){
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.loginButton.click();
        
    }


    async show(emailValue: string, passwordValue: string){
        await this.emailInputField.fill(emailValue);
        await this.passwordInputField.fill(passwordValue);
        await this.showPassword.click();
        
        
}
}
