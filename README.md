## How to add angular material to existing project?
Just run below command and choose default themes and say yes to browser animations and hammer.js (for hand gestures)
ng add @angular/material

### How to use angular components inside angular project?
Just need two steps.
1.	Import the module of that particular angular material component.
2.	Then add that module to the imports array of App component.

### Angular Typography:
It provides styles to normal text in the page like
```
<h1> ,<h2>, <h3>, <h4> etc.
```
Example:
```
<div class=”mat-display-4”> This is display 4</div>
```
If you don’t want to use the `<div>` tag and use `<h1>` but still like to use typography, use class=”mat-typography” on parent element.

### Material Icons:
 To use icons, use <mat-icon> component with a text which describes the type of icon to be included.
Ex: <mat-icon>graph<mat-icon>
You can get the text to be used from https://fonts.google.com/icons?selected=Material+Icons

### Material Colors:
Primary, accent or warning are the colors available via material library.
Ex: <mat-icon color=”primary”>graph<mat-icon>

### Note:
@ViewChild - to get the markup (HTML) element reference inside typescipt

### Navigation List inside SideNav:
Inside sidenav add below content to create navigation list:
<mat-nav-list>
<a mat-list-item href="#">Home</a>
	<a mat-list-item href="#">About</a>
	<a mat-list-item href="#">Services</a>
</mat-nav-list>
  
### Layout Component in Angular Material:
 
Flex container will have flex-items. There are two axis, main-axis (horizontal axis) and cross-axis (vertical axis). Flex items start growing in the direction of main-axis from main-start to main-end. Main-size defines the height/width of the flex item in the direction of main-axis. Similarly, cross-size defines the height/width of the flex-item in the direction of cross-axis. Flex items grow from cross-start to cross-end in the direction of cross-axis.
Angular flex layout provides layout API using Flexbox CSS and mediaQuery.
Install flex-layout using below npm command:
```
“npm i -s @angular/flex-layout”
```
If you want to install specific version of angular-layout then use below command:
```
“npm i -s @angular/flex-layout@12.0.0-beta.34”
```
Use https://tburleson-layouts-demos.firebaseapp.com/#/docs to play with flex layout.

Use below command to generate component without template, spec and css files
```
  $ng g c contactmanager\contactmanager-app --flat --inline-style --inline-template --skip-tests
```
Use --dry-run to just see what will be generated with a command. Example:
```
  $ng g c contactmanager\contactmanager-app --dry-run --flat --inline-style --inline-template --skip-tests
```
Use below command to generate a module along with it’s routing module:
```
  $ng g m demo\demo --flat --routing
```
### Note:
Using sidenav component with mode=side on small screen devices is not recommended by angular. It has performance issues.
We should be using “over” on small screen devices and “side” on large screen devices.
Let all the flexible items be the same length, regardless of its content:
```
#main div {
  -ms-flex: 1; /* IE 10 */
  flex: 1;
}
```
flex:1 means all flex -items will be of same length.

 ```
.extend_full_space {
  flex: 1 1 auto;
}
```
flex: 1 1 auto means , no shrinking, no growing and that flex item expands to all the available space in the row.
  
### Adding responsiveness to page:
Breakpoint Observer is a utility for evaluating media queries and reacting to their changes.

### MatIconRegistry:
MatIconRegistry is an injectable service that allows you to map icon names to SVG URLs. Also to define aliases for CSS font classes. We usually want to register and load up icons once. Excellent place for it is app.component.ts. In order to prevent cross site scripting vulnerabilities, any SVG URLs passed to MatIconRegistry must be marked as trusted using Angular’s DomSanitizer service. 
