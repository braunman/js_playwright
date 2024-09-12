import { expect } from '@playwright/test';

import { test } from '../fixtures';
import { createUser } from '../src/utilits';

test.describe('Register user', () => {
  let newUser;
  test.beforeEach(async () => {
    newUser = createUser();
  });

  test('Регистрация нового пользователя', async ({ page, app }) => {
    await app.open('/');
    await app.goToRigister();
    await app.registerPage.registerUser(newUser);
    await expect(page.getByText(newUser.username)).toBeVisible()

  });

});
