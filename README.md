# III Floats and Flexbox

## Homework

1. See how far you can get on [Flexbox Froggy](http://flexboxfroggy.com/)
1. Complete last week's assignment - add a popover to a web page

<!-- 1. Midterm time! Files are located [here](http://daniel.deverell.com/css-files/_midterm-files.zip). http://daniel.deverell.com/css-files/_midterm-files.zip. You need select one layout from the samples, write HTML for the content (.txt files are provided for convenience), and create CSS to match the layout. Be sure to use `white-space: pre;` for the poetry where appropriate. -->

## Reading

* HTML5 and CSS3: Building Responsive Websites, Module 2 - chapters 1 to 4
* [What is Flexbox]?(https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* Read (and Practice) [Learning the Command Line](https://hellowebbooks.com/learn-command-line/). (Mac only, WIndows users can use Git Bash.)


## Terminal

[Real developers know how to use command line. – Assholes](https://gomakethings.com/you-dont-need-to-know-command-line-to-be-a-good-developer/)

There are many good reasons to aquire a basic understanding of the command line terminal. In this class we will use the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app for GIT and GITHUB as well as for Node Package Manager (NPM).

The Windows equivalent to Mac's Terminal app is [Powershell](https://docs.microsoft.com/en-us/powershell/) but there are important differences and you WILL NOT be able to run Python as shown below.

Windows alternates to Powershell include [cmder](http://cmder.net/) or the shell that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." 

Some basic shell commands (note the use of '$' to indicate a prompt):

```sh
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

On a mac you can `cd` to a folder via drag and drop or by copying and pasting a folder into the terminal.

Windows examples for cd / ls

```sh
$ dir C:\windows
$ chdir C:\windows
```

Note: on Windows: if you have Git installed you probably have `git-bash` on your computer. You can use that to run unix style commands e.g. `ls` instead of `dir`.

If you have node installed you should be able to run JavaScript on the command line.

```sh
$ node --version
$ npm --version
$ git --version
$ node
$ 12+12
$ .exit // or control-c
```

Mac only: `cd` into today's folder and enter the following command into Terminal:

```sh
$ python -m SimpleHTTPServer 9000
```

Access `localhost:8000` in Chrome. Note the directory listing and the default index.html.

## I - Sushi Homework

### Review

Recall `document.querySelector()` returns the first selected item.

Navigate to [Wikipedia](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris). Inspect the list to find `.mw-category` and paste the following in the console:

```js
var test = document.querySelector('a'); // returns the first anchor on the page
var category = document.querySelector('.mw-category');
```

While `document.querySelectorAll()` returns a collection (`nodeList`) of the items on the page:

```js
var test = document.querySelectorAll('a');
```

We can use our `category` variable as the basis for a more targeted query:

```js
var links = category.querySelectorAll('a');
```

Examine the methods on the resulting nodeList. Try `links.length` in the console.

Let's convert the nodeList into an Array:

```js
var linksArray = Array.from(links);
```

Examine the methods on the resulting Array.

Note: we could have created this in another manner:

```js
var linksArray = Array.from(category.querySelectorAll('a'));
```

Examine one of the anchor tags from the resulting array in the console. Note the `textContent` property.

Here's an example that uses the `map` method to isolate just the text content:

```js
var linkText = linksArray.map(function (link){
  return link.textContent;
});
```

Here's an alternative form of the same thing:

```js
var linkText = linksArray.map(link => link.textContent);
```

Let's use another Array method, `filter`, to isolate only those boulevards that contain a specific string:

```js
var de = linkText.filter(function (streetName) {
  return streetName.includes('de')
});
```

Here's an alternate form of the same thing:

```js
var de = linkText.filter(streetName => streetName.includes('de'));
```

### Adding a Close ✖︎ Button

<!-- 1. We will use [Font Awesome](https://fontawesome.com/cheatsheet) for icons
1. Examine some usage samples from [Font Awesome](http://fontawesome.io/examples/)
1. Load Font Awesome with:

```html
<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
```

Use it once to add an icon to the web site link:

```html
<li><a href="#"><i class="fa fa-external-link-square-alt"></i>Web site</a></li>
```

Use the inspector to examine it.

1. [Examine](http://fontawesome.io/icons/) looks like `fa-times` will work.

Add a link to the popover:

```html
<div class="popover">
	<a class="closer"><i class="fa fa-times" aria-hidden="true"></i></a>
	<iframe>...</iframe>
</div>
```

```css
.popover .closer {
	float: right;
}
``` -->

In the `popover` div:

```html
<li><a class="closer" href="#">✖︎</a></li>
```

Create a new script at the bottom of `scripts.js` to include a reference to the new close button:

```js
var closeButton = document.querySelector('.closer');
closeButton.addEventListener('click', close);

function close(){
  var body = document.querySelector('body');
  body.classList.toggle('showme');
  event.preventDefault();
}
```

Note that the close function is identical to the show function we currently have.

Let's refactor the script by using an 'or' operator `||` in JavaScript:

```js
if (event.target.classList.contains('map') || event.target.classList.contains('closer')) {
	...
}
```


<!-- Try a [recipe](http://fontawesome.io/examples/) from font-awesome:

```html
<a class="closer">
	<span class="fa-stack fa-md">
		<i class="fa fa-square fa-stack-2x"></i>
		<i class="fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
	</span>
</a>
``` -->

Format the close button:

```css
.popover .closer {
	position: absolute;
	top: -11px;
	right: -14px;
  color: #600;
  cursor: pointer;
}
```

Note the `cursor` property. Here is a [list of available cursors](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_cursor) in CSS.

```css
.popover .closer {
	...
	text-decoration: none;
	background-color: #fff;
  padding: 0.25rem;
  border: 2px solid #600;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
```

Edit the 3 identical values using multiple cursors. Note the issue with `blockquote`.

See `http://oit2.scps.nyu.edu/~ishizuky/session2/Sushi/session2_hw.html`



<!-- Add a shadow to the popover:

```css
box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
``` -->

<!-- Add an overlay for effect:

```html
<body>
<div class="overlay"></div>
<div id="wrapper">
``` -->

<!-- ```css
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

Note that it blocks all the clicks.

...and turn it on:

```js
...
var overlay = document.querySelector('.overlay')
...

function show(){
	popOver.classList.toggle('showme')
	overlay.classList.toggle('showme')
	event.preventDefault()
}
```

We used the z-index css property to control stacking order for the menu (review).

We need to control z-index in this case by giving the popover a hight number than the overlay.

Note that there is no possibility of animating this because we are using `display: block` and `display: none`. These are binary states and cannot be used for effects like fading on etc. More on this in a later class. -->

### Flexbox for the Nav

[What is Flexbox]?(https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

* flex is a _display_ attribute like `block, inline, block-inline`
* do not confuse it with _positioning_ which we have looked at for absolute, relative and fixed positioning
* Get familiar with [Can I Use](https://caniuse.com/#feat=flexbox) and [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

Set the anchor tags to use display flex:

```css
.nav {
	display: flex;
	...;
}
```

```css
.nav li {
	/*display: inline-block;*/
	margin-right: 1em;
}
```

## II - Using floats to create a nav bar

## Styling a List with Floats

<img src="tabs-image.jpg">

In this exercise we will focus on list styling and navigation but instead of using `display: inline-block` to create horizontal navigation we will use floats and the flexbox.

## Sublime Text - Aside

To create the html for this exercise I would normally use Emmet.

You would need to install Package Control and then Emmet.

* Install [package control](https://packagecontrol.io)
* Install [emmet](https://packagecontrol.io/packages/Emmet)
* Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

After saving a blank document as `cuisines.html` you would use the following Emmet commands (press Tab after each command):

```sh
!

ul>li*4>a[href="#"]{link}
```

or:

```sh
nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}
```

And then edit the file.

## Create the HTML

Create an HTML file and save it as `cuisines.html` into the `float-nav` folder.

* duplicate lines `cmd-d` and
* use multiple cursors (`cmd`) to complete the classes and links so you end up with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Cuisines</title>
	<style>

	</style>
</head>

<body>

<nav>
	<ul id="nav">
		<li class="t-cuisines"><a href="cuisines.html">Cuisines</a></li>
		<li class="t-chefs"><a href="chefs.html">Chefs</a></li>
		<li class="t-reviews"><a href="reviews.html">Reviews</a></li>
		<li class="t-delivery"><a href="delivery.html">Delivery</a></li>
	</ul>
</nav>

</body>
</html>
```

Take a moment to examine the default user agent styles using the inspector.

Add and review some basic formatting (in the `<style>` block):

```css
body {
	margin: 0;
	font-family: 'Lucida Grande', sans-serif;
}
#nav {
	margin: 0;
	padding: 10px 0 0 46px;
	background-color: #ffcb2d;
}
```

Firstly, remove the bullets from the `<ul>`:

```css
#nav {
	list-style: none;
	...;
}
```

Then float the list items to the left (after removing the possibility that any margins or padding might be applied).

```css
li {
	float: left;
}
```

Notice what happened to the `<ul>`'s height. The `<li>` items no longer force the parent `<ul>` element to expand to contain them. This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>` has collapsed. This behavior is important as collapsing is a common design issue.

There are a number of methods in use to prevent this:

* Apply CSS overflow: auto; to the collapsed element
* float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element
* the clearfix hack - this entails creating a utility class and will be covered later
* adding a clearing div - this entails adding an HTML element to the page and is discouraged

For our current example let's use the second FNE method.

Try adding a float to the 'collapsed' element:

```css
#nav {
	float: left;
	...;
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width.

```css
#nav {
	width: 100%;
	...;
}
```

_When you float an element you almost always have to specify a width._

Review the [background image CSS property](https://www.w3schools.com/cssref/pr_background-image.asp). Try adding and fun background color from [here](https://www.impressivewebs.com/weird-css-color-names/) and then `background-repeat: repeat-y;` and `background-position: center center;`.

Extend the background property to add a background graphic to the `<ul>`.

```css
#nav {
	background-image: url(i/nav_bg.gif);
	...;
}
```

Aside: demo the background property using `pattern.gif`.

Add positioning to the background.

```css
#nav {
	background-repeat: repeat-x;
	background-position: bottom left;
	...;
}
```

Note: using the `background` shortcut we would write:

```css
#nav {
	background: #ffcb2d url(i/nav_bg.gif) repeat-x bottom left;
	...;
}
```

Next we'll tackle the anchor tags: `<a>`. Add the following to our CSS block.

```css
a {
	text-decoration: none;
	color: #333;
}
```

Adding padding, margins to separate, and a border to make them more tab-like:

```css
a {
	...
	padding: 4px 8px;
	border: 1px solid #9b8748;
	margin: 0 6px 0 0;
}
```

Although it may be a little difficult to discern, the same issue we had with collapsing earlier has occurred here as well. We will use the same method as before to make the container expand to fit its floated children. Let's remove the redundant border while we're at it.

```css
a {
	...
	border-bottom: none;
	float: left;
}
```

By floating the anchors we cause the list items to expand to contain their floated children.
Now we add a background image to the <a>. Note that the image has a gradient and transparency.

```css
a {
	background: #f9eaa9 url(i/off_bg.gif) repeat-x top left;
	...;
}
```

Note what happened to the background graphic we placed in the `<ul>`. It is hidden behind the (now not transparent) anchors.

Now we create hover states for our tabs by swapping out the background image:

```css
a:hover {
	background: #fff url(i/on_bg.gif) repeat-x top left;
}
```

### Finishing touches

This part is a but tricky since it uses padding to show or hide the background graphic running along the bottom of the `<ul>`. We will be increasing the height by one pixel on hover to hide the image.

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css
a:hover {
	padding-bottom: 5px;
	...;
}
```

If you roll over the tabs now the height of the anchor increases by one pixel causing the `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs.

Due to the fact that there is no selected tab (only hovered) the height of the element appears to jump slightly. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors.

```css
a:hover,
.t-cuisines a {
	background: #fff url(i/on_bg.gif) repeat-x top left;
	padding-bottom: 5px;
}
```

Note that when you use two selectors they must be separated by a comma.

Now, if we add an id to the body tag we can edit the selector to make it page specific.

Add `id="cuisines"` to the body tag.

```html
<body id="p-cuisines">
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover,
#p-cuisines .t-cuisines a {
	...;
}
```

We are going to create a second HTML page shortly so let's copy our CSS into an external file, save it as styles.css, and link to it from a newly created css directory:

```html
<link href="css/styles.css" rel="stylesheet" type="text/css">
```

Note that because we used a new directory, the paths to the images are no longer correct. Correct them now.

## Multiple HTML Pages

Let's create a new HTML page so we can carry our navigation forward using CSS.

Save a new copy of the HTML page as chefs.html and edit the ID:

```html
<body id="p-chefs">
```

Add a new selector to the CSS.

```css
a:hover,
#p-cuisines .t-cuisines a,
#p-chefs .t-chefs a {
	...;
}
```

Now when you navigate between the two pages you should see a friendly reminder of what page you are on courtesy of the CSS file.

* There is a demo of this in the `Tabs > demo` directory.

### Removing the on- off- images

Images and any other externally linked asset increases the time it takes to download and render your page. It is considered a best practice to minimize the number of images whereever possible so let's remove as many as we can.

Aside: [Hex color vs. RGB vs. RGBA](https://www.w3schools.com/colors/colors_converter.asp)

* [Intro to gradients in css](https://css-tricks.com/css3-gradients/) has more information than you'll ever need
* [Gradient editor](http://www.colorzilla.com/gradient-editor/) - the tool I used to create the gradients below

Edit the background properties for the tabs:

Normal (eg. non-hovered) state:

```css
a {
	text-decoration: none;
	color: #333;
	padding: 4px 8px;
	border: 1px solid #9b8748;
	margin: 0 6px 0 0;
	border-bottom: none;
	float: left;
	/*background: #f9eaa9 url(i/off_bg.gif) repeat-x top left;*/
	background-image: linear-gradient(
		to bottom,
		rgba(255, 236, 165, 1) 0%,
		rgba(232, 213, 149, 1) 6%,
		rgba(253, 233, 162, 1) 94%,
		rgba(253, 233, 162, 1) 100%
	);
}
```

Highlighted (eg. hovered) state:

```css
a:hover,
#p-cuisines .t-cuisines a {
	/*background: #fff url(i/on_bg.gif) repeat-x top left;*/
	background-image: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 0%,
		rgba(224, 226, 240, 1) 6%,
		rgba(254, 254, 254, 1) 53%
	);
	padding-bottom: 5px;
}
```

Underline:

```css
#nav {
	margin: 0;
	padding: 10px 0 0 46px;
	list-style: none;
	float: left;
	width: 100%;
	/*background: #ffcb2d url(i/nav_bg.gif) repeat-x bottom left;*/
	background-image: linear-gradient(to bottom, #ffcb2d 0%, #ffcb2d 96%, #9b8748 100%);
}
```

### Using Flexbox

A good [reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) cheat sheet

```css
#nav {
	display: flex;
	margin: 0;
	padding: 10px 0 0 46px;
	list-style: none;
	background-image: linear-gradient(to bottom, #ffcb2d 0%, #ffcb2d 96%, #9b8748 100%);
}

li {
	/*float: left;*/
	display: flex;
}
```

```css
body {
	margin: 0;
	font-family: 'Lucida Grande', sans-serif;
}
#nav {
	/*float: left;*/
	display: flex;
	margin: 0;
	padding: 10px 0 0 46px;
	list-style: none;
	background-image: linear-gradient(to bottom, #ffcb2d 0%, #ffcb2d 96%, #9b8748 100%);
}
li {
	/*float: left;*/
	display: flex;
}
a {
	text-decoration: none;
	color: #333;
	padding: 4px 8px;
	border: 1px solid #9b8748;
	margin: 0 6px 0 0;
	/*border-bottom: none;*/
	/*float: left;*/
	background-image: linear-gradient(
		to bottom,
		rgba(255, 236, 165, 1) 0%,
		rgba(232, 213, 149, 1) 6%,
		rgba(253, 233, 162, 1) 94%,
		rgba(253, 233, 162, 1) 100%
	);
}
a:hover,
#p-cuisines .t-cuisines a,
#p-chefs .t-chefs a {
	border-bottom: none;
	background-image: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 0%,
		rgba(224, 226, 240, 1) 6%,
		rgba(254, 254, 254, 1) 53%
	);
	/*padding-bottom: 5px;*/
}
```

Expand the tabs on small screens:

```css
@media (max-width: 768px) {
	li {
		flex-grow: 1;
	}
	a {
		flex-grow: 1;
	}
}
```

Don't forget the meta tag:

```html
<meta name="viewport" content="width=device-width">
```

Change order (demo only - not good UX):

```css
#p-chefs .t-chefs {
	order: -1;
}
```

## Looking Forward

Examine the other demos in the `done` folder.

Change the CSS selector to reference an active class and add that class to the HTML for the cuisines link, e.g.:

```html
<li class="t-cuisines"><a class="active" href="cuisines.html">Cuisines</a></li>
```

and:

```css
a:hover,
a.active {
	border-bottom: none;
	background-image: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 0%,
		rgba(224, 226, 240, 1) 6%,
		rgba(254, 254, 254, 1) 53%
	);
}
```

Create a script tag at the bottom of the document and add:

```html
<script>
	var tabs = document.querySelector('#nav a');
	console.log(tabs);
</script>
```

We need to use `querySelectorAll` because we are gathering more than one item:

```js
var tabs = document.querySelectorAll('#nav a');
console.log(tabs);
```

Now we need to attach an eventListener to each of the tabs:

```js
var tabs = document.querySelectorAll('#nav a');
tabs.forEach(function(tab) {
	tab.addEventListener('click', makeActive);
});

function makeActive() {
	console.log(this);
	event.preventDefault();
}
```

Using an Arrow function shortcut (for anonymous functions):

```js
var tabs = document.querySelectorAll('#nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
	console.log(this);
	event.preventDefault();
}
```

Note the use of `this` to refer to the thing clicked on. `This` is very powerful. The value of `this` is usually determined by a functions execution context. Execution context simply means how a function is called. Our function is called by clicking on a link so `this` shows as a link in the console when we log it.

Let's use `classList` again to add a class to the link we click on:

```js
var tabs = document.querySelectorAll('#nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
	this.classList.add('active');
	event.preventDefault();
}
```

Lets remove the class from all tabs before we add it so that only one is active at a time:

```js
var tabs = document.querySelectorAll('#nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
	tabs.forEach(tab => tab.classList.remove('active'));
	this.classList.add('active');
	event.preventDefault();
}
```

We can separate the removal out into its own function and then call that function (`makeInactive();`):

```js
var tabs = document.querySelectorAll('#nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
	makeInactive();
	this.classList.add('active');
	event.preventDefault();
}

function makeInactive() {
	tabs.forEach(tab => tab.classList.remove('active'));
}
```

Add some variables with content. It is usually a good idea to declare your variables at the top of the script so that they are available to the code that comes after.

```js
var cuisines =
	'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.';

var chefs =
	'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';

var reviews =
	'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.';

var delivery =
	'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';
```

Create an empty `div` with a class of `content` in the html:

```html
<div class="content"></div>
```

Create a reference to it and initialize our page with some text using `innerHTML`:

```js
var contentPara = document.querySelector('.content');
contentPara.innerHTML = cuisines;
```

Style it using CSS:

```css
.content {
	padding: 1rem;
}
```

Note that we can access the value of the link's href by using `this.href`:

```js
function makeActive() {
	console.log(this.href)
	...
}
```

So let's make the content of the `.content` div depend on the link's href. We will use `includes` becasue a test for simple equality will fail:

```js
function makeActive() {
	console.log(this.href);
	makeInactive();
	this.classList.add('active');
	if (this.href.includes('cuisines')) {
		contentPara.innerHTML = cuisines;
	} else if (this.href.includes('chefs')) {
		contentPara.innerHTML = chefs;
	} else if (this.href.includes('reviews')) {
		contentPara.innerHTML = reviews;
	} else if (this.href.includes('delivery')) {
		contentPara.innerHTML = delivery;
	}
	event.preventDefault();
}
```

In JavaScript parlance this is something akin to what is known as `routing`, but its not quite there yet.

One of the big problems with what we've built might be termed _maintaining state_. If you refresh the browser while you are on the Reviews tab it reinitializes the page to show the Cuisines tab.

To correct this we need to change the URL shown in the address bar of the browser to something unique. We would then use that information to make sure the appropriate content is shown.

## III - Using flexbox to create a nav bar

## FlexBox
* CSS Flexible Box Layout Module
* A simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Try https://www.w3schools.com/css/css3_flexbox.asp

### A simple Flex Nav

<img src="hero-1.png">

[Font Awesome](http://fontawesome.io/)

Create the HTML:

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Display: flex nav</title>
</head>

<body>

  <header class="site-header">

    <a href="#0" class="logo">Logo</a>

    <nav class="site-nav">
      <ul>
        <li class="active"><a href="recipes.html">Recipes</a></li>
        <li><a href="reviews.html">Reviews</a></li>
        <li><a href="delivery.html">Delivery</a></li>
      </ul>
    </nav>

    <div class="account-actions">
      <div class="account-dropdown">
         Gear
        <ul>
          <li>Your Account</li>
        </ul>
      </div>
      <a href="#0" class="sign-out-link">Sign Out</a>
    </div>

  </header>

</body>
</html>

```

```
<link rel="stylesheet" href="font-awesome-4.6.3/css/font-awesome.min.css">
```

Logo:

```
<i class="fa fa-bullseye fa-3x"></i>
```

Gear:

```
<i class="fa fa-gear"></i>
```

A font stack that ensures the [device's default font](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/) will be used (native font):

```
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

```css
header {
  background: #0D1313;
  color: #fff;
  display: flex;
  align-items: center;
  padding:0.5rem;
}

.account-dropdown ul {
    display: none;
}

.logo {
  text-decoration: none;
  color: white;
  padding: 10px;
}

.site-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.site-nav  a {
  text-transform: uppercase;
  text-decoration: none;
  color: #CDD0D0;
  padding: 20px;
  display: inline-block;
}

.site-nav .active a {
  font-weight: bold;
  color: #62DEBE;
  background: #444;
}

.account-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.sign-out-link {
  color: #62DEBE;
  font-size: 0.8rem;
  margin-left: 10px;
  text-transform: uppercase;
  text-decoration: none;
}
```

[The responsive meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)

```css

@media (max-width: 600px) {
  header {
    flex-wrap: wrap;
  }
  .site-nav {
    order: 2;
    background: #333;
    width: 100%;
  }
}
```

Refactor CSS for `text-decoration`, `text-transform` ...

### Interactivity

See `index-done.html` for a demo.

Part ONE - get the gear icon to expose the options

```js

var gear = document.querySelector('.fa-gear')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions(){
  options.classList.toggle('active')
}
```

Note - requires corresponding CSS (see `index-done.html`)

```css

.active {
  display: flex !important;
}

.account-dropdown {
  position: relative;
  display: flex;
}

.account-dropdown ul {
  padding: 4px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: 20px; 
  left: 10px;
  color: #333;
  background: #fff;
  font-size: 0.875rem;
}
```

Part TWO - add active class to the navigation
Introduces for loops and 'this' 

```js

var mainNav = document.querySelectorAll('.site-nav li')

for ( var i = 0; i < mainNav.length; i++){
  mainNav[i].addEventListener('click', setActive)
}

function setActive(){
  for ( var i = 0; i < mainNav.length; i++){
    mainNav[i].classList.remove('active')
  }
  this.classList.add('active')
  event.preventDefault()
}
```



