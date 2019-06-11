class RouteLink extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');

        template.innerHTML = /*html*/`

                <a href="#">
                    <slot></slot>
                </a>

            `;


        const templateContent = template.content.cloneNode(true);
        templateContent.firstElementChild.onclick = (e) => {
            e.preventDefault();
            const path = this.getAttribute("path");
            //const title = this.getAttribute("title"); //unused on history
            //title = https://www.w3schools.com/jsref/prop_doc_title.asp

            window.history.pushState("", "", `/${path}`);

            // create and dispatch the event
            let event = new CustomEvent("routed", {
                bubbles: true,
                composed: true, //https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
                detail: {
                    path: path
                }
            });
            this.dispatchEvent(event); //dispatch does what
        }
        shadow.appendChild(templateContent);
    };

    static get observedAttributes() {//..more
        return ['path', 'title'];
    }

}


customElements.define('route-link', RouteLink);