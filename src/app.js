import './components/navigation.js';
import './components/pages/home.js';
import './components/pages/about.js';
import './components/pages/demo.js';
import './components/router/router.js';


class AppComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');

        template.innerHTML = /*html*/`

            <div class="app-body">
                <navigation-component></navigation-component>
                <router-component>
                    <route-define route="/" component="home-page"></route-define>
                    <route-define route="/home" component="home-page"></route-define>
                    <route-define route="/demo" component="demo-page"></route-define>
                    <route-define route="/demo/:param" component="demo-page"></route-define>
                    <route-define route="/about" component="AboutPage"></route-define>
                </router-component>
            </div>

        `;

        const templateContent = template.content.cloneNode(true);

        shadow.appendChild(templateContent);
    };

}

customElements.define('app-component', AppComponent);