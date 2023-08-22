import { Page } from  '@playwright/test';

export class LoginEnvironments {
    page: Page;
    baseUrl: string;
    validEmail: string;
    validPassword: string;
    invalidEmail: string;
    invalidPassword: string;
    homeUrl: string;
    emailError: string;
    passwordError: string;
    password: string;
    registerButton: string;
    newOfferModal: string;
    

    constructor(page: Page){
        this.page = page; 
        this.baseUrl = 'https://cobe-accounting.herokuapp.com/';
        this.validEmail = 'hello@cobeisfresh.com';
        this.validPassword = 'cobeisfresh123';
        this.invalidEmail = 'cobeisfresh@helllo.com';
        this.invalidPassword = 'cobe123';
        this.homeUrl = 'https://cobe-accounting.herokuapp.com/home/Offers?page=1';
        this.emailError = 'Incorrect email or password';
        this.passwordError = 'Incorrect email or password';
        this.password = 'cobeisfresh123';
        this.registerButton = 'Register';
        
    }
}