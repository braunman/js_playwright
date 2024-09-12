import { test, expect } from '@playwright/test';
import { createUser } from '../src/utilits';
import { App } from '../src/app';


test.describe('Register user', () => {
  let newUser;
  let app;
  test.beforeEach(async ({ page }) => {
    app = new App(page);
    newUser = createUser();
  });

  test('Регистрация нового пользователя', async ({ page }) => {
    await app.open('/');
    await app.goToRigister();
    await app.registerPage.registerUser(newUser);
    await expect(page.getByText(newUser.username)).toBeVisible()

  });

});
