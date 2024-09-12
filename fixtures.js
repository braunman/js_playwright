import { test as base } from '@playwright/test';
import { WebApp } from './src/app';


export const test = base.extend({
    app: async ({ page }, use) => {
        const app = new WebApp(page);
        await use(app);
    },
});