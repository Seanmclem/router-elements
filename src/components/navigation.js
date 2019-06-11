class NavigationComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');


        template.innerHTML = /*html*/`
            <nav class="navigation">
                <route-link path="home">
                    Home
                </route-link>
                <route-link path="demo">
                    Demo
                </route-link>
                <route-link path="demo/param-value">
                    Demo url param
                </route-link>
                <route-link path="about">
                    About
                </route-link>
            </nav>

            <style>
            route-link {
                margin: 0 10px;
            }
            .navigation {
                width: 100%;
            border-bottom: 1px solid black;
            height: 30px;
            display: flex;
            align-items: center;
            }
            </style>
        `;

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    };

}

customElements.define('navigation-component', NavigationComponent);