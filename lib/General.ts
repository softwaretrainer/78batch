//To Provide General re-usable Functions / methods for the whole application
import { Global } from './Global';
export class General extends Global {
    // Add general reusable functions/methods-user defined  here
async openApplication() {
await this.page.goto(this.url);
console.log("Application Opened");
}
async login() {
  await this.page.locator(this.textbox_loginname).fill(this.username);
  await this.page.locator(this.textbox_password).fill(this.password);
  await this.page.locator(this.button_login).click();
  console.log("Login Completed");
}
async logout() {
    await this.page.locator(this.link_logout).click();
    console.log("Logout Completed");
}
async addEmployee() {
 const frame = this.page.frameLocator(this.frame_empinfo);
 await frame.locator(this.button_add).click();
 await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
 await frame.locator(this.textbox_emplastname).fill(this.emplastname);
 await frame.locator(this.button_save).click();
 console.log("Employee Added");
}
async waitStmt(){
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
    console.log("Waited for 3 seconds");
}
}