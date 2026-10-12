import{test,expect}from '@playwright/test'
import{faker}from '@faker-js/faker'
test('Register user', async ({ page }) => {
    const name = faker.person.fullName();
    const email = faker.internet.email();

    console.log(name)
    console.log(email)

})