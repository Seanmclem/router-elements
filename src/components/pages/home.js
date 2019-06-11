class HomePage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');

        template.innerHTML = /*html*/`
            <div class="home-body">
                <h3>Home</h3>
                <div>
                    This is the home page. Home to all pages
                </div>
            </div>
        `;

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    };
}

customElements.define('home-page', HomePage);