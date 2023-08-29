import { Page } from '@playwright/test';


export class NewOfferEnvironments {
    page: Page;
    clientId0: string;
    clientId1: string;
    clientId2: string;
    projectId1: string;
    projectId2: string;
    croatianLanguage: string;
    englishLanguage: string;
    germanLanguage: string;



constructor(page: Page){
    this.page = page;
    this.clientId0 = 'Automation Test Company #0 [DO NOT DELETE]';
    this.clientId1 = 'Automation Test Company #1 [DO NOT DELETE]';
    this.clientId2 = 'Automation Test Company #2 [DO NOT DELETE]';
    this.projectId1 = 'Automation Test Project #1 [DO NOT DELETE]';
    this.projectId2 = 'Automation Test Project #2 [DO NOT DELETE]';
    this.croatianLanguage = 'Croatian';
    this.englishLanguage = 'English';
    this.germanLanguage = 'German';
}
}
