//To provide actual automation scripts for the test case TC001
import { test } from '@playwright/test';
import { General } from '../lib/General';

test('@Smoke_TC001_Login_Logout', async ({ page }) => {
   let obj = new General(page);
   await obj.openApplication();
   await obj.login();
   await obj.logout();
});