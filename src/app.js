import { LoginPage, MainPage, RegisterPage, UserMenu, NavigationBar, EditorPage, ArticlePage } from "./pages";


export class WebApp {
    constructor(page) {
        this.page = page;
        this.mainPage = new MainPage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.registerPage = new RegisterPage(this.page);
        this.userMenu = new UserMenu(this.page)
        this.navigationBar = new NavigationBar(this.page);
        this.editorPage = new EditorPage(page);
        this.articlePage = new ArticlePage(page);
    }

    async open(url) {
        await this.page.goto(url);
    }

    async goToRigister() {
        await this.navigationBar.singUp.click()

    }
    async goToLogin() {
        await this.navigationBar.login.click()

    }
    async goToNewArticle() {
        await this.navigationBar.newArticle.click();
    }
    async goToHome() {
        await this.navigationBar.home.click();
    }

    async doLogout() {
        await this.userMenu.menu.click();
        await this.userMenu.logout.click();
    }

}