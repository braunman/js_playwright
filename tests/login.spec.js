import { expect } from '@playwright/test';

import { test } from '../fixtures';
import { createUser } from '../src/utilits';


test.describe('Страница Login', () => {
    let newUser;
    test.beforeEach(async ({ app }) => {
        newUser = createUser()
        await app.open('/');
        await app.goToRigister();
        await app.registerPage.registerUser(newUser);
        await app.doLogout();
    });

    test('Успешный Login нового пользователя', async ({ page, app }) => {
        await app.goToLogin();
        await app.loginPage.doLogin(newUser.email, newUser.password)
        await expect(page.getByText(newUser.username)).toBeVisible();
    });

    test('Login с неправильным email', async ({ page, app }) => {
        await app.goToLogin();
        await app.loginPage.doLogin(createUser().email, newUser.password)
        await expect(page.getByText('Email not found sign in first')).toBeVisible();
    });

    test('Login с неправильным password', async ({ page, app }) => {
        await app.goToLogin();
        await app.loginPage.doLogin(newUser.email, createUser().password)
        await expect(page.getByText('Wrong email/password')).toBeVisible();
    });

});
