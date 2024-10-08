import { expect, test } from '@playwright/test';

import { WebApp } from '../src/app';
import { createUser } from '../src/utilits';

test.describe('Страница Login', () => {
    let app;
    let newUser;
    test.beforeEach(async ({ page }) => {
        newUser = createUser()
        app = new WebApp(page);
        await app.mainPage.open('/');
        await app.navigationBar.goToRigister();
        await app.registerPage.registerUser(newUser);
        await app.userMenu.doLogout();
    });

    test('Успешный Login нового пользователя', async () => {
        await app.navigationBar.goToLogin();
        await app.loginPage.doLogin(newUser.email, newUser.password)
        expect(await app.userMenu.getUserName()).toContain(newUser.username);
    });

    test('Login с неправильным email', async () => {
        await app.navigationBar.goToLogin();
        await app.loginPage.doLogin(createUser().email, newUser.password);
        expect(await app.loginPage.getErrorText()).toContain('Email not found sign in first');

    });

    test('Login с неправильным password', async () => {
        await app.navigationBar.goToLogin();
        await app.loginPage.doLogin(newUser.email, createUser().password);
        expect(await app.loginPage.getErrorText()).toContain('Wrong email/password combination');
    });

});
