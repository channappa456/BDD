import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Browser, firefox, Page } from "@playwright/test";


let page: Page;
let browser: Browser;
setDefaultTimeout(40000);

Given('open the firefox browser', async ()=> {
  // Write code here that turns the phrase above into concrete actions
  browser = await firefox.launch({headless: false});
       //open the new Tab/new Page in firefox browser
        page=await browser.newPage();
});

Given('navigate app url', async ()=> {
  // Write code here that turns the phrase above into concrete actions
 await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});

When('enter the username {string}', async (username:string)=> {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("[name='txtUserName']").fill(username);
});

When('enter the password {string}', async (password:string)=> {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("[name='txtPassword']").fill(password);
});


When('click on login', async ()=> {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("[name='Submit']").click(); 
});

Then('verify welcomePage', async ()=> {
  // Write code here that turns the phrase above into concrete actions
   let text:null | string=await page.locator("xpath=/html/body/div[3]/ul/li[1]").textContent();
   
   console.log("text:"+text);

//   //verify welcome selenium text

    if(text=="Welcome Haran")
   {
     console.log("Welcome verified successfully:Test Passed");
     }
     else
     {
      console.log("Welcome not verified successfully:Test Failed");
     }

});

When('close the browser', async ()=> {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

 await browser.close();

 console.log("Logout successfully:");
});