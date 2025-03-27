import { Page } from "@playwright/test";
import { BaseModalComponenet } from "./BaseModalComponent";

export class ContactModalComponent extends BaseModalComponenet {
    protected titleSelector = "//h5[@id='exampleModalLabel']";
    protected closeButtonSelector = "//h5[@id='exampleModalLabel']/../button";
    protected expectedTitle = "New message";

    private emailInputSelector = "#recipient-email";
    private nameInputSelector = "#recipient-name"; 
    private messageInputSelector = "#message-text";
    private sendButtonSelector = "#exampleModal button.btn-primary"; 

    public constructor(page: Page) {
        super(page);
    }
    
    public async fillDetailsAndSendMessage(name: string, email: string, message: string) {
        await this.page.fill(this.emailInputSelector, email);
        await this.page.fill(this.nameInputSelector, name);
        await this.page.fill(this.messageInputSelector, message);
        await this.page.click(this.sendButtonSelector);
    } 
}