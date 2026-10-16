import {test, Locator} from  "@playwright/test"

async function verifylocator(locator:Locator):Promise<boolean>{

    return await locator.isVisible() && await locator.isEnabled()

}


test('login functionality',async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')

const usn=page.locator('#username')

if(await verifylocator(usn)){

    await usn.fill('democsr')

}

const pwd=page.locator('#password')

if(await verifylocator(pwd)){

    await pwd.fill('crmsfa')

}

const login=page.locator('.decorativeSubmit')

if(await verifylocator(login)){

    await login.click()

}
    
})