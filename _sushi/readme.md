# II Sushi

## Homework

1. Continue the homework from last week ("Examine the provided homework samples for inspiration and try your hand at redesigning the page using the CSS techniques described in class).
1. Add a JavaScript/CSS powered popover window to your page. Be sure to review (and try it yourself) the simple documentation for [addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp), [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp), and [classList](https://www.w3schools.com/jsref/prop_element_classlist.asp).

## Reading

* [Responsive Web Design](https://abookapart.com/products/responsive-web-design) - carefully read the section on Media Queries
* Video: [HTML Crash Course for Absolute Beginners](https://youtu.be/UB1O30fR-EE)
* Video: [CSS Crash Course for Absolute Beginners](https://youtu.be/yfoY53QXEnI)

## Server Accounts

[See session one](https://github.com/front-end-foundations/session1)

## Terminal

There are many good reasons to aquire a basic understanding of the command line terminal. In the class we will use the terminal for GIT and GITHUB as well as for Node Package Manager.

The Windows equivalent to Mac's Terminal app is PowerShell but there are important differences and you WILL NOT be able to run Python as shown below.

Some Windows users use alternates such as [cmder](http://cmder.net/) or the shell that comes with [Git for Windows](https://gitforwindows.org/) aka Git Bash. (Check to see if Git Bash is installed on the class computers.)

Some basic shell commands (note the use of '$' to indicate a prompt):

```sh
$ node --version
$ npm --version
$ git --version
$ pwd
$ ls
$ ls -l
```

```sh
$ cd
$ cd <path-to-folder>
$ cd ..
$ cd ~
```

Windows examples for cd / ls

```sh
$ dir C:\windows
$ chdir C:\windows
```

On a mac you can `cd` to a folder via drag and drop or by copying and pasting a folder into the terminal.

cd into today's folder and enter the following command into Terminal:

```sh
$ python -m SimpleHTTPServer 9000
```

Access `localhost:8000` in Chrome. Note the directory listing and the default index.html.

## Sushi - Converting to Standards

Open before.html in an editor and examine the HTML. Then examine index.html. The latter is an html5 document that uses HTML tags semantically. The former is often referred to as tag soup as it makes little sense to humans looking at the code.

Examine index.html in the browser inspector to display the default (user agent) styling. Note the defaults for margins and padding used to display the body and the unordered list (`<ul>`).

### Google fonts

Add a CSS block within the `<head>`of index.html as follows:

```html
<style>
    body {
        margin: 0;
        color: #333;
        font-family: Verdana, Arial, sans-serif;
    }
</style>
```

Google has a CDN offering (free fonts)[https://fonts.google.com] for use in HTML documents. We'll use this as an example of using external stylesheets via @import and the `<link>` tag.

We will use [Lato](https://fonts.google.com/specimen/Lato) for our main text and [Lobster](https://fonts.google.com/specimen/Lobster) for our branding.

### Linking to a css file from css

```
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
```

Add this to the top of our css (@import statements should always come first) to use the font within our stylesheet. Add to the body css rule:

```
font-family: 'Lato', sans-serif;
```

### Linking to CSS from html

The html link tag:

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
```

in use:

```css
header {
	font-family: 'Lobster', cursive;
	font-weight: normal;
}
```

### Formatting the Navigation

Add a _class_ to the `<ul>` that will form the navigation for our page.

```html
<ul class="nav">
    <li><a href="#">Cuisines</a></li>
    ...
</ul>
```

By doing so we have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply two different styles.

Add the following to our style block:

```css
.nav {
	list-style: none;
	padding: 0;
}
.nav li {
	display: inline-block;
	margin-right: 10px;
}
.nav a {
	color: #fff;
	text-decoration: none;
	padding: 4px;
	display: block;
	background-color: #600;
}
.nav a:hover {
	color: #222;
	background-color: #bada55;
}
```

Examine display options for making the buttons horizontal using block, float, inline-block, and flexbox.

Examine the inspector's color picker. Note the ability to force element hover state.

Add css to `nav a`:

```
transition: all 0.5s linear;
```

Edit the animation using the inspector's animation settings.

To animate only one difference specify it instead of `all`:

```
transition: background-color 0.5s linear;
```

### Absolutely Positioning the Navigation

_Edit_ the nav CSS rule to position it:

```css
.nav {
	list-style: none;
	padding: 0;
	position: absolute;
	right: 0;
	top: 60px;
}
```

Add an `<aside>` tag around the table and list then add the following CSS:

```css
aside {
	position: absolute;
	top: 200px;
	left: 10px;
	width: 180px;
	background-color: #f0dfb4;
	padding: 6px;
	border: 2px solid #600;
	border-radius: 3px;
}
```

Note how the text flows under the aside.

Add margin to move the article over to the right:

```css
article {
	margin: 0 20px 0 206px;
}
```

The four values for margin run clockwise from the top. Note the last value. How was this derived?

Change the last value to `240px`.

(Note that although the article visually _looks_ like it has two columns, it really has only one.)

### Floating

Format the pull quote and image:

```css
blockquote {
	float: right;
	width: 40%;
	padding: 16px;
	font-size: 24px;
}
article img {
	float: right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content.

### Converting the document to fixed width

Currently our document flexes as we make the browser wider to makes use of all the available horizontal space. While flexibility is generally a good practice, most sites use fixed widths to improve readability. cf [Wikipedia](https://en.wikipedia.org/wiki/Line_length) vs [The Guardian](https://www.theguardian.com)

Add wrapper `<div id="wrapper">` to entire content area (after the `<body>` tag and close it before the closing `</body>` tag) and add the following to our CSS style block.

```css
#wrapper {
	width: 840px;
}
```

Note the horizontal scoll bar when the page is viewed on smaller screens. Horizontal scroll bars are almost always a bad thing - especially if you want your content to work on small screens.

Let's use this instead:

```css
#wrapper {
	max-width: 840px;
}
```

Center the wrapper content in the browser.

```css
#wrapper {
	max-width: 840px;
	margin: 0 auto 0 auto;
	border: 1px solid #999;
}
```

Add a relative positioning instruction.

```css
#wrapper {
	position: relative;
	...;
}
```

Note the impact the relative positioning has on the layout (toggle it on and off using the inspector).

The two absolutely positioned elements (aside and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box. The rule here is that absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree.

This is an important design pattern and well will see it again.

### Adding color to our layout

Edit the CSS body rule.

```css
body {
	...
	background-color: #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper.

```css
#wrapper {
	...
    background-color: #fff;
}
```

Note the body background color is grayed out in the inspector. Neither it nor the margin are inherited by other elements.

### Formatting the content

Note the h1's margin outside the containing elements (not part of the box model).

```css
h1,
h2 {
	color: #600;
	margin-top: 20px;
	margin-left: 20px;
	font-size: 3rem;
	margin-bottom: 0;
}
h2 {
	font-size: 32px;
	margin-top: 0;
}
```

Note - selector strength here. Note that the lack of namespacing allows this to effect the Matsu text as well.

Namespace the header items:

```css
header h1,
header h2 {
	color: #600;
	margin-top: 20px;
	margin-left: 20px;
	font-size: 3rem;
	margin-bottom: 0;
}
header h2 {
	font-size: 32px;
	margin-top: 0;
}
```

Format elements in the list and table

```css
aside th {
	text-align: right;
}

aside ul {
	list-style: none;
	margin: 1em;
	padding: 0;
}
```

### Inline, In Page & External CSS

We've already seen the link tag and @import methods of adding css. Let's examine all the ways to add CSS to an HTML document:

* Inline via the HTML `style=` attribute
* In page via the HTML `<style>` tag
* As an external .CSS file via linking (HTML `<link>` tag)
* As an external .CSS file via importing (CSS `@import` statements)

Inline styles are inefficient:

```html
<p style="margin-top: 12px;">
```

However, this method is frequently used when dynamically changing the page after it has been loaded in the browser.

Demonstrate: using the inspector on a dynamic page (e.g. http://www.w3schools.com/jquery/jquery_animate.asp) or this page on [apple.com](https://www.apple.com/homepod/). Note how it displays animation by applying purple highlighting in the inspector.

Remove the CSS from the head of the document and paste it into a new text document. Save it in a new `css` directory calling it styles.css. We have two options here: link to our CSS file using an HTML tag, or to use a CSS @import statement.

```html
<link href="css/styles.css" rel="stylesheet" media="all" />
```

Note: the css-based alternative is:

```html
<style>
  @import url("css/styles.css");
</style>
```

We are not using this method.

Add a drop shadow to the CSS for the info div using the inspector (...).

```css
aside {
	 box-shadow: 3px 3px 3px #ddd;
	...;
}
```

Add a box shadow to the wrapper CSS:

```css
#wrapper {
	box-shadow: 10px 10px 20px #666;
	...;
}
```

Make it a glow:

```css
#wrapper {
	box-shadow: 0px 0px 20px #999;
	...;
}
```

### Highlight one of the tabs

This is a simple way to create color coded navigation on a web site.
Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
```

Add a list item to the nav list with a class of review-link.

```html
<li class="t-review"><a href="#">Reviews</a></li>
```

Add the following to our CSS block:

```css
.p-review .t-review a {
    color: #600;
    background: #f0dfb4;
 }
```

The Reviews tab is now highlighted.

### Adding Simple Responsiveness

At the bottom of the stylesheet

```css
@media print {
	* {
		display: none !important;
	}
}

@media all and (max-width: 800px) {
	.nav {
		top: 0;
		left: 0;
		margin: 0;
		position: fixed;
		background-color: #600;
	}
	.nav li a {
		border-radius: 0;
	}
	header h1 {
		padding-top: 2rem;
	}
	article {
		margin-left: 20px;
	}
	aside {
		position: static;
		float: left;
		margin-right: 20px;
	}
	blockquote {
		width: 100%;
		float: none;
		margin: 0;
	}
}
```

### CSS Variables

(These)[https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables] allow us to store commonly used information as a variable for use throughout our css.

See also [Can I Use](https://caniuse.com/#search=css%20variables)

```css
html {
	--bg-color: #f0dfb4;
	--badass: #bada55;
	--rust: #600;
	--radii: 3px;
}
```

```css
.nav a {
	...
  background-color: var(--bg-color);
}

aside {
	...
  background-color: var(--bg-color);
}
```

## Responsive Design

```css
@media print {
	* {
		display: none !important;
	}
}
```

```css
@media screen and (max-width: 800px) {
	.nav {
		top: 0;
		left: 0;
		margin: 0;
		background: var(--rust);
		/*position: fixed;*/
	}
	header {
		padding-top: 30px;
	}
	aside {
		position: static;
		float: left;
		margin-right: 20px;
	}
	article {
		margin-left: 20px;
	}
	blockquote {
		width: 100%;
		float: none;
		margin: 0;
	}
}
```

Examine using the Toggle Device Toolbar in Chrome's developer tools.

### The Device meta tag

Test in the browser

[The responsive meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)

```html
<meta name="viewport" content="width=device-width">
```

## DOM Scripting I

### Variable assignment and types.

In the browser console (copy paste one line at a time):

```js
var width = 100;
width;
typeof width;

width + 300;
width;
width = width + 300;
width;

let wide = true;
wide;
typeof wide;
let wide = false;
wide = false;

const testString = '123456';
testString;
typeof testString;
const testString = 'abcde';
testString = 'abcde';
```

Link scripts.js to index.html:

```html
<script src="js/scripts.js"></script>
```

Use the code therein to examine code before proceeding.

* Selecting items with [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), see also [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/querySelectorAll) (we'll work with this later)
* Attaching events with [addEventListener('event', function)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), see also [event types](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Functions](https://developer.mozilla.org/en-US/docs/Glossary/Function)
* Manipulating HTML with [classList](https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/)

Add a link to a [Google map](https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734) to the map link in the aside:

```html
<li><a class="map" target="_blank" href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734">Map</a> | <a href="#">Directions</a></li>
```

Note the target attribute for the anchor tag. We have also used the class `map` to name this link.

Add a class of `.map` to the map link

```html
<script>
	var mapClicker = document.querySelector('.map')

	mapClicker.addEventListener('click', show)
	// document.addEventListener('click', show)

	function show(){
		event.preventDefault()
	};
</script>
```

Add to the bottom of the html (but before `<script>`):

```html
<div class="popover">
	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.821674756671!2d-73.97492268461596!3d40.67789794763805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b%3A0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1490213487125" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
</div>
```

```css
.popover {
	padding: 1rem;
	width: 300px;
	height: 225px;
	background: #fff;
	border: 1px solid var(--rust);
	border-radius: var(--radius);
	position: fixed;
	top: calc(50% - 100px);
	left: calc(50% - 150px);
	/*display: none;*/
}
```

Uncomment `display: none` so the map stays hidden.

Add a new rule to the css:

```css
.showme {
	display: block;
}
```

```html
<script>
	var mapClicker = document.querySelector('.map')
	var popOver = document.querySelector('.popover')
	mapClicker.addEventListener('click', show)

	function show(e){
		popOver.classList.toggle('showme')
		e.preventDefault()
	};
</script>
```

### DOM Scripting - Adding a close button

Before starting, review the HTML, CSS and JavaScript that enables the popover from last week.

1. Getting started with [Font Awesome](http://fontawesome.io/get-started/)
1. Examine some usage samples from [Font Awesome](http://fontawesome.io/examples/)
1. Make Font Awesome accessible to the page e.g.: `@import url(font-awesome-4.6.3/css/font-awesome.min.css);` or

```
<script src="https://use.fontawesome.com/a68f41e4bd.js"></script>
```

1. [Examine](http://fontawesome.io/icons/) looks like `fa-times` will work.

Add a span tag to the popover:

```
<div class="popover">
	<a class="closer"><i class="fa fa-times" aria-hidden="true"></i></a>
	<iframe>...</iframe>
</div>
```

```
.popover .closer {
	float:right;
}
```

Edit the script to include a reference to the new close button:

```
<script type="text/javascript">
	...
	var closeButton = document.querySelector('.closer')
	...
	closeButton.addEventListener('click', show)

	function show(){
		popOver.classList.toggle('showme')
		event.preventDefault()
	}
</script>
```

Try a [recipe](http://fontawesome.io/examples/) from font-awesome:

```
<span class="closer fa-stack fa-md">
	<i class="fa fa-square fa-stack-2x"></i>
	<i class="fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
</span>
```

Here's an alternate method of formatting the close button:

```
.popover .closer {
  /* float: right; */
	position: absolute;
	top: -11px;
	right: -14px;
	color: var(--rust);
}
```

Add a shadow to the popover:

```
box-shadow: 4px 4px 6px rgba(0,0,0,0.3)
```

..and because we are not using an anchor tag, add this to the close button:

```
cursor: pointer;
```

...and an overlay for effect:

```
<body>
<div class="overlay"></div>
<div id="wrapper">
```

```
.overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
}
```

...and turn it on:

```
...
var overlay = document.querySelector('.overlay')
...

function show(){
	popOver.classList.toggle('showme')
	overlay.classList.toggle('showme')
	event.preventDefault()
}
```

Review: using the z-index css property to control stacking order.

We need to control z-index in this case by giving the popover a hight number than the overlay.

Note that there is no possibility of animating this because we are using `display: block` and `display: none`. These are binary states and cannot be used for effects like fading on etc. More on this in a later class.

But we can animate the link:

```
a {
	...
	text-decoration: none;
	transition: color .5s;
}
a:hover {
	text-decoration: underline;
	color: red;
}
```

## Flexbox for the Nav

Read first - [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

* flex is a _display_ attribute like `block, inline, block-inline`
* do not confuse it with _positioning_ which we have looked at for absolute positioning

In Sushi set the anchor tags to use display flex

```
.nav {
	display: flex;
	...
}
```

NB. The below is not really visible until we get onto a small screen.

```
.nav li {
	flex: 1;
	...
}
```

