import {test} from  "@playwright/test"

test('title', async ({page}) => {

await page.goto('https://www.telerik.com/contact')

await page.waitForTimeout(1000)

let ddvalue=page.getByTitle('Country dropdown')

await ddvalue.scrollIntoViewIfNeeded()

await ddvalue.selectOption({label:"Australia"})

await page.waitForTimeout(1000)

})




test('title1', async ({page}) => {


await page.goto('https://www.abhibus.com/')

await page.locator('[placeholder="Leaving From"]').pressSequentially("kerala",{delay:500})

await page.waitForTimeout(2000)


})


//multiple dropdown elements

test.only('title2', async ({page}) => {


await page.goto('https://testautomationpractice.blogspot.com/')

await page.keyboard.press("PageDown")

await page.locator('#colors').selectOption([{value:"red"},{label:"Blue"},{index:2}])


// let multiselectdd=page.locator('#colors')

// await page.keyboard.press("PageDown")

// await multiselectdd.selectOption([{value:"red"},{label:"Blue"},{index:2}])

await page.waitForTimeout(2000)


})