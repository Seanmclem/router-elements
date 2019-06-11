import RouteDefine from './routeDefine';
import RouteLink from './routeLink';

class RouterComponent extends HTMLElement {
    //Component is a router-outlet, a route registry, and route handler

    constructor() {
        super();
        this.routes = {};
        this.isFirstRoute = true;

        const shadow = this.attachShadow({ mode: 'open' });
        let template = document.createElement('template');

        this.setupRoutes();
        this.checkFirstRoute();
        window.addEventListener('popstate', e => this.onBack(e));
        document.querySelector('html').addEventListener('routed', e => this.routed(e));

        const templateContent = template.content.cloneNode(true);
        shadow.appendChild(templateContent);
    };


    render(path, paramValue, paramName) {
        const componentName = this.routes[`'${path}'`] ? this.routes[`'${path}'`].component : this.routes[`'/${path}'`].component; //refactor me away

        const ComponentRouted = customElements.get(componentName);
        let componentRouted = new ComponentRouted();
        if (paramName && paramValue) {
            componentRouted[paramName] = paramValue;
            //componentRouted.setAttribute(paramName, paramValue); ////alternative
        }
        //handle query params? at all?
        //URLSearchParams()
        // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

        return componentRouted;
    }

    routed(data) {
        //removing first /. migth be redundant by here. did it earlier?
        const paths = data.detail ? data.detail.path.replace(/^\//, '').split('/') : data.replace(/^\//, '').split('/');
        const path = paths && paths.length > 0 ? paths[0] : null;
        const paramValue = paths && paths.length > 1 ? paths[1] : null;
        let paramName = null;

        if (paramValue) {
            //getting 'name' of route param as fed to route-define component. To insert as atttribute name
            Object.keys(this.routes).forEach((route) => {
                const value = this.routes[route];
                if (value.param && path === value.path) {
                    const pathToUse = value.path.replace(/^\//, '');
                    paramName = pathToUse === path ? value.param : null;
                }
            });
        }
        this.shadowRoot.innerHTML = "";

        //need a better way to attach styles?
        let routerContainer = document.createElement('div');
        routerContainer.classList.add('router-container');
        routerContainer.style.margin = "10px";
        routerContainer.appendChild(this.render(path, paramValue, paramName));

        this.shadowRoot.appendChild(routerContainer);
    }

    setupRoutes() {
        Array.from(this.children)
            .forEach(childElement => {
                if (childElement.nodeName === "ROUTE-DEFINE") {
                    const route = childElement.getAttribute("route");
                    const component = this.handleNameStyle(childElement.getAttribute("component"));
                    const routeData = this.checkSetPaths(route, component);
                    this.routes[`'${route}'`] = routeData;
                }
            });
    }

    checkSetPaths(route, component) {
        const paramArr = route.toLowerCase().split('/:');
        let routeObj = {};
        routeObj.path = paramArr && paramArr.length > 0 ? paramArr[0].replace(/^\//, '') : null; //used for Param-parsing
        routeObj.param = paramArr && paramArr.length > 1 ? paramArr[1].replace(/^\//, '') : null;
        routeObj.component = component;
        return routeObj;
    }

    handleNameStyle(componentName) {
        if (componentName && componentName.indexOf('-') === -1) {
            for (let i = 0; i <= componentName.length; i++) {
                let character = componentName.charAt(i);
                if (isNaN(character * 1) && character == character.toUpperCase()) {
                    //Upper case true
                    const newChars = i == 0 ? character.toLowerCase() : `-${character.toLowerCase()}`
                    componentName = componentName.substr(0, i) + newChars + componentName.substr(i + 1);
                }
            }
        }
        return componentName;
    }

    checkFirstRoute() {
        if (this.isFirstRoute) {
            this.isFirstRoute = false;
            const currentRoute = window.location.pathname;
            this.routed(currentRoute);
        }
    }

    onBack(e) {
        const currentRoute = window.location.pathname;
        this.routed(currentRoute);
    }

    // toTitleCase(str) {
    //     str = str.toLowerCase().split('-');
    //     for (var i = 0; i < str.length; i++) {
    //         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     return str.join('');
    // };
}

customElements.define('router-component', RouterComponent);