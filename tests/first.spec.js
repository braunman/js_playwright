import { expect, test } from '@playwright/test';

import { WebApp } from '../src/app';
import { createUser } from '../src/utilits';

test.describe('Register user', () => {
  let newUser;
  let app;
  test.beforeEach(async ({ page }) => {
    newUser = createUser();
    app = new WebApp(page);
  });

  test('Регистрация нового пользователя', async ({ page }) => {
    await app.mainPage.open('/');
    await app.navigationBar.goToRigister();
    await app.registerPage.registerUser(newUser);
    await expect(app.userMenu.menu).toContainText(newUser.username)

  });

});
