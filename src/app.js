import { ArticlePage, EditorPage, LoginPage, MainPage, NavigationBar, RegisterPage, UserMenu } from "./pages";

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
}

