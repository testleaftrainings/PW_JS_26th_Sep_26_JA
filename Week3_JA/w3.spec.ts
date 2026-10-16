import {test, expect} from  "@playwright/test"

test('title', async ({page}) => {
 
    
    //await page.getByLabel("").click()


//select dropdown

/* Ex:<select id="country">
  <option value="IN">India</option>
  <option value="US">United States</option>
  <option value="UK">United Kingdom</option>
</select>*/


//3 ways to handle select dropdown

//1. by value

// await page.locator('#country').selectOption({value:"UK"})
// await page.selectOption('#country',"IN")

//2. by Label

// await page.locator('#country').selectOption({label:"United Kingdom"})

//3. by index 

// await page.locator('#country').selectOption({index:1})

//custom dropdown
// <div class="dropdown">
//   <div class="option">India</div>
//   <div class="option">USA</div>
//   <div class="option">UK</div>
// </div>

//select the dropdown first
// await page.locator('.dropdown').click()

// await page.locator('.option',{hasText:'India'}).click()

await page.goto('https://leaftaps.com/opentaps/control/main')

//await page.locator('#username').fill('demo')
let user=page.locator('#username')

await expect(user).toBeVisible()

//by default-> hard assertion
//await expect(user).toBeHidden({timeout:2000})


await expect.soft(user).toBeHidden({timeout:2000})


//await page.locator('#username').type('csr')

console.log("Assertion verified");

})