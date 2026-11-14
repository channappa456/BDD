
import { After, Before, DataTable, Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";

import { Browser, firefox, Page } from "@playwright/test";


//global variable

let page: Page;
let browser: Browser;
setDefaultTimeout(40000);

// Before(async() =>{

//       browser = await firefox.launch({headless: false});
//      //open the new Tab/new Page in firefox browse
//        page=await browser.newPage();

// })

Given('open the firefox browser', async ()=> {

      browser = await firefox.launch({headless: false});
     //open the new Tab/new Page in firefox browser
      page=await browser.newPage();
 
  
});

Given('navigate app url', async ()=> {

await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
  
});

When('enter the username {string}', async (username:string) => {
   
  await page.locator("[name='txtUserName']").fill(username);
});

When('enter the password {string}', async (password:string) => {

  await page.locator("[name='txtPassword']").fill(password);
  
});

// When('enter the password  {string}', async (password:string) =>{
//   // Write code here that turns the phrase above into concrete actions
//   await page.locator('input[name="password"]').fill(password);
// });

 When('click on login', async ()=> {

  await page.locator("[name='Submit']").click();   
  
 });

// When('enter the username', async ()=> {
   
// await page.locator("[name='txtUserName']").fill("Haran");
  
// });

// When('enter the password', async ()=> {

// await page.locator("[name='txtPassword']").fill("Charvika@143");  
 
// });

// When('click on login', async ()=> {

//  await page.locator("[name='Submit']").click();   
  
// });

  Then('verify welcomePage',async ()=> {

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

 await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

 await browser.close();

 console.log("Logout successfully:");
});
  



   
//    After(async() =>{ 

//     await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

//     await browser.close();

//    });
  

// When('close the browser', async ()=> {

//  await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

//  await browser.close();

//  console.log("Logout successfully:");
// });
  



// When('enter the username', async (dataTable:DataTable) =>{

//   //read the data from dataTable
// let data=dataTable.hashes();

// //get the username from first row and first column

//       let username: string=data[0].username;

//       console.log("username:"+username);

//       await page.locator("[name='txtUserName']").fill(username);

  
// });

// When('enter the password', async (dataTable) => {
//   //read the data from dataTable
//   let data=dataTable.hashes();

//   //get the password from first row and first column
//   let password:string=data[0].password;

//   console.log("password:"+password);

//    await page.locator("[name='txtPassword']").fill(password);
  
// });


// When('enter the username', async (dataTable:DataTable) =>{

//   //read the data from dataTable
// let data: string[][]=dataTable.raw();

// //get the username from first row and first column

//       let username:string=data[0][0];

//       console.log("username:"+username);

//       await page.locator("[name='txtUserName']").fill(username);

  
// });

// When('enter the password', async (dataTable) => {
//   //read the data from dataTable
//   let data: string[][]=dataTable.raw();

//   //get the password from first row and first column
//   let password:string=data[0][0];

//   console.log("password:"+password);

//    await page.locator("[name='txtPassword']").fill(password);
  
// });


// When('enter the username {string}', async (username:string) => {
   
//   await page.locator("[name='txtUserName']").fill(username);
// });

// When('enter the password {string}', async (password:string) => {
  
//   await page.locator("[name='txtPassword']").fill(password);
// });

// When('enter the username', async ()=> {
   
// await page.locator("[name='txtUserName']").fill("Haran");
  
// });

// When('enter the password', async ()=> {

// await page.locator("[name='txtPassword']").fill("Charvika@143");  
 
// });

// When('click on login', async ()=> {

//  await page.locator("[name='Submit']").click();   
  
// });

//  Then('verify welcomePage',async ()=> {

//   let text:null | string=await page.locator("xpath=/html/body/div[3]/ul/li[1]").textContent();
   
//    console.log("text:"+text);

// //   //verify welcome selenium text

//     if(text=="Welcome Haran")
//    {
//      console.log("Welcome verified successfully:Test Passed");
//      }
//      else
//      {
//       console.log("Welcome not verified successfully:Test Failed");
//      }

//     });
   
//    After(async() =>{ 

//     await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

//     await browser.close();

//    });
  

// When('close the browser', async ()=> {

//  await page.locator("xpath=/html/body/div[3]/ul/li[3]/a").click();

//  await browser.close();

//  console.log("Logout successfully:");
// });
  
 
     
  

