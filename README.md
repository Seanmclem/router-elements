
# Native Web Component SPA Router

A collection of Web Components for providing SPA routing functionality to a plain old vanilla JS project. The syntax for how the Custom Elements are used was originally inspired by how React Router is used. 

## Getting Started

You should be using a component-based vanilla JS. I have a boiler-plate project [here](https://github.com/Seanmclem/Web-Component-Dev-Environment) which already uses the npm module and provides an example of its implementation. 

## Installing

From within your project folder in which you wish to use the router-elements run:

```
npm install routerelements
```


## Using the router

Much of this assumes you are using some text-based html to define certain areas of your project. Using only JS to create all HTML elements is not yet supported for router-elements.

First thing after installing with `npm install` is to import. At some high level part of your web app you should add:

```
import  'routerelements';
```
Then you can add `router-component` to your markup.
```
<router-component></router-component>
```
This element serves multiple purposes. Firstly, it is the `router-outlet`, meaning when a route is eventually rendered -it renders inside of the `<router-component>` element tags. 

Also, all of the routes are designated inside of this tag. It's contents should be written as a list of `route-define` tags. Each of which function primarily to designate a route and a component to render when hitting that route. All of these routes are registered with the router when the web app starts.

Example:

```
<route-define  route="/home"  component="home-page"></route-define>
```
The `route` attribute designates the path that triggers this route.
The `component` attribute specifies which component is rendered when it's corresponding route is hit. 
The route should be in *lower-hyphen-case* and match the name of the Custom Element registered for your component. Although, the router is able to accept CamelCase so long as the casing more or less matches the hyphens. hyphen-case would still be preferred.

### Using your routes

A `<route-link>` element would be used to create a link on your page that would navigate to your designated route and component. 
The `path` attribute is used to designate a url that clicking will navigate you to.
Example:

```
<route-link  path="home">
	Home
</route-link>
```
This generates an `<a>` anchor tag that will use an `href` attribute containing your path. The inside of your `route-link` will go inside the `<a></a>` tag. When you click -the default behavior will be prevented, and instead an event will be passed to your router component to handle the route.


## Contributing

Feel free to fork, make edits, submit pull requests, or create issues. 



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


