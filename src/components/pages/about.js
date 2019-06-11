class AboutPage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');

        template.innerHTML = /*html*/`
            <div class="about-body">
                <h3>About</h3>
                <div>
                 this is a page all about all these pages. yep
                </div>
            </div>
        `;

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    };
}

customElements.define('about-page', AboutPage);