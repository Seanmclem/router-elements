import { subtract } from '../math.js';
import lodash from 'lodash';

class DemoPage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        let template = document.createElement('template');

        //example of lodash functioning as imported npm module, alongside other plain js modules
        const array = [1];
        this.other = lodash.concat(array, 2, [3], [[4]]);

        this.render();

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);

    };

    connectedCallback() {
        //let paramValue = this.getAttribute("param"); ////alternative
        //NEED TODO add to router readme -params not available until connectedCallback. which is odd? Still, must be documented
        this.render();
    }
    // disconnectedCallback() {
    // }
    // attributeChangedCallback(attrName, oldVal, newVal) {
    // }
    test() {
        return 'test';
    }

    render() {
        //not using a template here/correctly?
        this.shadowRoot.innerHTML = /*html*/`
            <h3>Demo</h3>

            <p>
                lodash  output ${this.other} 
                ${this.param ? `<br>param value = ${this.param}` : ``}
            </p>

            <div> 
                five minus one equals = ${subtract(5, 1)}  
            </div>
            <a rel="noopener" target="_blank" href="http://www.google.com">
                Click me to go to google!
            </a>

            <style>
            :host {
              display: inline;
            }
            :host([hidden]) {
              display: none;
            }
            </style>
        `;
    }
}

const testo = "presto";

const test2 = () => {
    return 'prest2';
};

customElements.define('demo-page', DemoPage);