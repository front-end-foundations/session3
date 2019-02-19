# III Floats and Flexbox

## Homework

1. Complete last week's assignment - add a popover to a web page
1. Install [NodeJS](https://nodejs.org/en/) (the latest version) and [Git](https://git-scm.com/) on your personal computer. Create a free account on [Github](http://github.com). Perform the command line exercise (below).

## Midterm

You have two week to complete this. The first stage - due in a week - is to write semantic HTML. The next will be to add CSS.

Files are located [here](https://github.com/front-end-foundations/midterm). The instructions are in the readme. Be sure to use `white-space: pre;` for the poetry where appropriate.

## Reading

* [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
* See how far you can get on [Flexbox Froggy](http://flexboxfroggy.com/)
* Read (and Practice) [Learning the Command Line](https://hellowebbooks.com/learn-command-line/). (Mac only, Windows users should use the copy of Git Bash that is installed along with [Git](https://git-scm.com/).)

## Interesting

* https://codepen.io/ivorjetski/pen/xMJoYO
* https://codepen.io/jcoulterdesign/pen/KJBmEx

<!-- ## Terminal

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

Note: on Windows: if you have Git installed you probably have `git-bash` on your computer. You can use that to run unix style commands (e.g. `ls` instead of `dir`).

If you have node installed you should be able to run JavaScript on the command line.

```sh
$ node --version
$ npm --version
$ git --version
$ node
$ > 12+12
$ > .exit // or control-c
```

Mac only: `cd` into today's folder and enter the following command into Terminal:

```sh
$ python -m SimpleHTTPServer 9000
```

Access `localhost:8000` in Chrome. Note the directory listing. `ctrl-c` to quit the process. -->

## Lecture - querySelector

The following is adapted from the free [JavaScript30](https://javascript30.com) video series. Highly recommended.

* `document.querySelector('<css-selector>')` returns the first found item.

Navigate to this [Wikipedia](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) article. Inspect one of the listed boulevards and then find the div with the class `.mw-category` in the code view and click on it to select it.

`<div class="mw-category">`

Now switch to the Console and paste the following:

```js
var test = document.querySelector('a');
```

This returns only the first anchor on the page.

* `document.querySelectorAll()` returns a collection (`nodeList`) of the items on the page:

```js
var test = document.querySelectorAll('a');
```

We can use `mw-category` as a variable as the basis for a more targeted query:

```js
var category = document.querySelector('.mw-category');
var links = category.querySelectorAll('a');
```

Examine the methods on the resulting nodeList. Try `links.length` in the console.

`links.length`

An array is a list of values that might look like this:

```js
var fruits = ['Apple', 'Banana'];
```

Our nodeList looks like an array but isn't. Let's convert the nodeList into an Array:

```js
var linksArray = Array.from(links);
```

Try:

- Examine the methods on the resulting Array.
- Examine one of the anchor tags from the resulting array in the console. Note the `textContent` property.

Here's an example that uses the array's [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to isolate just the text content:

```js
var linkText = linksArray.map(function (link){
  return link.textContent;
});
```

Here's an alternative form of the same thing:

```js
var linkText = linksArray.map( (link) => link.textContent);
```

Note that we use `=>` instead of the word `function`. We could also remove the round braces:

```js
var linkText = linksArray.map( link => link.textContent);
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

## Continuation

We will be finishing the Sushi review exercise from session 2 beginning [here](https://github.com/front-end-foundations/session2#creating-the-popover).

## Styling a List: Floats vs Flexbox

<img src="other/tabs-image.jpg">

In this exercise we will focus on list styling but instead of using `display: inline` or `display: inline-block` to create horizontal navigation we will use techniques involving floats and flexbox.

## In VS Code

* An HTML plugin called [Emmet](https://emmet.io) is available in VS Code
* Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

I do not expect you to master (or even use Emmet) to create your HTML but it is helpful to understand what VS Code offers in terms of shortcuts and how to start using them.

Create a new `index.html` file in the `2-float-nav` folder.

Emmet samples to try in `index.html`:

`html:5`

`ul>li*4>a[href="#"]{link}`

`nav>ul.nav>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}`

Then use multiple selections (`command-d`) to edit it as shown:

```html
<nav>
  <ul class="nav">
    <li class="t-cuisines"><a href="index.html">cuisines</a></li>
    <li class="t-chefs"><a href="chefs.html">chefs</a></li>
    <li class="t-reviews"><a href="reviews.html">reviews</a></li>
    <li class="t-delivery"><a href="delivery.html">delivery</a></li>
  </ul>
</nav>
```

Add a link to `styles.css` in `index.html`:

`<link rel="stylesheet" href="css/styles.css">`

Open the file in Chrome and examine the default user agent styles using the inspector.

Add and review some basic formatting in `styles.css`:

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";
}
.nav {
  background: #ffcb2d;
  margin: 0;
  padding: 0 0 0 46px;
  list-style: none;
}
```

Note the complex looking `font-family` value. (In the future you will be able to write just `font-family: system-ui;`.)

It is quite common today to use a _system font stack_ that allows each operating system to use its native font. You can learn more about it at [this blog post](https://flaviocopes.com/css-system-fonts/).

Float the list items to the left:

```css
li {
  float: left;
}
```

Notice what happened to the `<ul>`'s height. 

The `<li>` items no longer force the parent `<ul>` element to expand to contain them. We can see this by virtue of the fact that the yellow background color has disappeared.

This behavior, known as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>` has collapsed. This behavior is important as "collapsing" is a common design issue when using floats.

There are a number of methods in use to prevent this:

- float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element
- the clearfix hack - this entails creating a utility class and will be covered later
- adding a clearing div - this entails adding an HTML element to the page solely for the purpose of visual formatting and so is discouraged

For our current example let's use the second FNE method.

Try adding a float to the 'collapsed' `ul` element:

```css
.nav {
  ... 
  float: left;
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width and add a touch of space above.

```css
.nav {
  ... 
  width: 100%;
  padding: 1rem 0 0 46px;
}
```

Note: when you float an element you usually have to specify a width.

Note the horizontal scrollbar.

```css
.nav {
  ...
  box-sizing: border-box;
}
```

We could also apply it to the entire project:

```css
* {
  box-sizing: border-box;
}
```

Note: it might be better to follow [this pattern](https://www.paulirish.com/2012/box-sizing-border-box-ftw/) for universal box sizing.

Extend the [background property](https://www.w3schools.com/css/css_background.asp) to add a background color and image to the `<ul>`.

```css
.nav {
  ... 
  background-color: #ffcb2d;
  background-image: url(../img/nav_bg.gif);
}
```

Demo only (do not add this code) - the background property using `img/pattern.gif`.

```css
  background-image: url(../img/pattern.gif);
  background-repeat: repeat-x;
  background-position: 0 300px;
  background-size: cover;
```

(See CSS Tricks for information on [`background-size: cover` and `contain`](https://css-tricks.com/almanac/properties/b/background-size/).)

Add positioning to the background.

```css
.nav {
  ... 
  background-color: #ffcb2d;
  background-image: url(../img/nav_bg.gif);
  background-repeat: repeat-x;
  background-position: bottom left;
}
```

Next we'll tackle the `<a>` tags. Add the following to our CSS block.

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
  border-radius: 3px 3px 0 0;
  margin: 0 6px 0 0;
}
```

The same issue we had with collapsing earlier has occurred here as well with the anchor tags. The padding and border is hanging below the yellow area. We will use the same float method as before to make the container expand to fit its floated children. Let's remove the redundant border while we're at it.

```css
a {
  ... 
  border-bottom: none;
  float: left;
}
```

By floating the anchors we cause the `<li>`s to expand to contain their floated children.
Now we add a background image to the `<a>`. Note the use of the background shortcut and that the image has a gradient and transparency.

```css

a {
  ...
  background: #f9eaa9 url(../img/off_bg.gif) repeat-x top left;
}
```

Note: 

- We are using the background shortcut
- the background graphic we placed in the `<ul>` is obscured by the tabs.

Now we create hover states for our tabs by swapping out the background image:

```css
a:hover {
  background: #fff url(i/on_bg.gif) repeat-x top left;
}
```

### Finishing touches

We will use padding to show or hide the background graphic running along the bottom of the `<ul>` - increasing the height by one pixel on hover to hide the image.

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css
a:hover {
  ... 
  padding-bottom: 5px;
}
```

If you roll over the tabs now the height of the anchor increases by one pixel causing the `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs.

Due to the fact that there is no selected tab (only hovered) the height of the ul jumps 1 pixel. Let's assume that one of the tabs will always be highlighted.

Create a second selector to highlight one of the anchors by adding `.t-cuisines a` as a second selector to the hover rule.

Multiple selectors must be separated by a comma. Most prefer to keep the multiple selectors on separate lines like so:

```css
a:hover,
.t-cuisines a {
  ...;
}
```

Now, if we add a class to the body tag, we can edit the selector to make it page specific.

Add `class="cuisines"` to the body tag.

```html
<body class="p-cuisines">
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover,
.p-cuisines .t-cuisines a {
  ...;
}
```

Save a copy of `index.html` as `chefs.html` and add a class to the body tag:

```html
<body class="p-chefs"></body>
```

Add a new selector to the CSS:

```css
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...;
}
```

Lighten the color of the text and the border-color in the inactive tabs:

```css
a {
  ...
  color: #777;
}
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...
  color: #333;
  border-color: #9b8748;
}

```

Now when you navigate between the two pages you should see a friendly reminder of what page you are on courtesy of the CSS file.

### Removing the Images

Images and externally linked assets are an important factor contributing to the time it takes to download and render your page. It is considered a best practice to minimize the number of images where ever possible.

Aside: [Hex color vs. RGB vs. RGBA](https://www.w3schools.com/colors/colors_converter.asp)

- [Intro to gradients in css](https://css-tricks.com/css3-gradients/) has more information than you'll ever need
- The [Gradient editor](http://www.colorzilla.com/gradient-editor/) is a useful tool

Edit the background properties for the tabs:

Normal anchor (eg. non-hovered) state:

```css
a {
  ...
  background-color: #f9eaa9;
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
background-image: linear-gradient(
  to bottom,
  rgba(255, 255, 255, 1) 0%,
  rgba(224, 226, 240, 1) 6%,
  rgba(254, 254, 254, 1) 53%
);
```

We cannot use `border` for the underline on the `<ul>` so let's use a very thin gradient:

```css
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...
  background: #fff;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
}
```

<!-- Underline:

```css
.nav {
  margin: 0;
  padding: 10px 0 0 46px;
  list-style: none;
  float: left;
  width: 100%;
  /*background: #ffcb2d url(i/nav_bg.gif) repeat-x bottom left;*/
  background-image: linear-gradient(to bottom, #ffcb2d 0%, #ffcb2d 96%, #9b8748 100%);
}
``` -->

### Flexbox for the Nav

[What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)?

* A good [reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) cheat sheet
* `flex` is a _display_ attribute like `block, inline, block-inline`
* Do not confuse it with _positioning_ which we have looked at for absolute, relative and fixed positioning
* Get familiar with [Can I Use](https://caniuse.com/#feat=flexbox) and [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

First - comment out the float properties in the CSS.

Add `display: flex` to the nav:

```css
.nav {
  /* float: left; */
  display: flex;
  ...
}

li {
  /*float: left;*/
  display: flex;
}
```

```css
a {
  /* border-bottom: none; */
  ...
}
a:hover,
#p-cuisines .t-cuisines a,
#p-chefs .t-chefs a {
  ...
  border-bottom: none;
}
```

See [this Pen](https://codepen.io/DannyBoyNYC/pen/dawPQz) for some basic info on how to control flexbox responsively.

We have a meta tag:

```html
<meta name="viewport" content="width=device-width">
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

Flex order property (demo only):

```css
...
.nav .t-cuisines {
  order: 3;
}
```

## Scripting the Navbar

Examine the other demos in the `done` folder.

Change the CSS selector to reference an active class and add that class to the HTML for the cuisines link, e.g.:

```html
<li class="t-cuisines"><a class="active" href="cuisines.html">Cuisines</a></li>
```

and:

```css
a:hover,
a.active {
  ...
}
```

Create a script tag at the bottom of the document and add:

```html
<script>
  var tabs = document.querySelector('.nav a');
  console.log(tabs);
</script>
```

We need to use `querySelectorAll` because we are gathering more than one item:

```js
var tabs = document.querySelectorAll('.nav a');
console.log(tabs);
```

Now we need to attach an eventListener to each of the tabs:

```js
var tabs = document.querySelectorAll('.nav a');
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
var tabs = document.querySelectorAll('.nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  console.log(this);
  event.preventDefault();
}
```

Note the use of `this` to refer to the thing clicked on. `This` is very powerful. The value of `this` is usually determined by a functions execution context. Execution context simply means how a function is called. Our function is called by clicking on a link so `this` shows as a link in the console when we log it.

Let's use `classList` again to add a class to the link we click on:

```js
var tabs = document.querySelectorAll('.nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  this.classList.add('active');
  event.preventDefault();
}
```

Lets remove the class from all tabs before we add it so that only one is active at a time:

```js
var tabs = document.querySelectorAll('.nav a');
tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  tabs.forEach(tab => tab.classList.remove('active'));
  this.classList.add('active');
  event.preventDefault();
}
```

We can separate the class removal out into its own function and then call that function (`makeInactive();`):

```js
var tabs = document.querySelectorAll('.nav a');
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

So let's make the content of the `.content` div depend on the link's href. We will use `includes` as a test for simple equality will fail:

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

## III - Using Flexbox to Create a Navbar

<img src="other/hero-1.png">

FlexBox:

* CSS Flexible Box Layout Module
* A simple guide to the various CSS properties on [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

We will use [Font Awesome](http://fontawesome.io/) for the icons in this exercise.

In `index.html`:

```
<link rel="stylesheet" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
```

For the logo:

```html
<a href="#0" class="logo"><i class="fa fa-bullseye fa-3x"></i></a>
```

Gear:

```html
<i class="fa fa-gear"></i>
```

A font stack that ensures the [device's default font](https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/) will be used (native font):

```css
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
```

Hide the account dropdown:

```css
.account-dropdown ul {
    display: none;
}
```

Format the logo:

```css
.logo {
  text-decoration: none;
  color: white;
  padding: 10px;
}
```

Format the unordered list and links:

```css
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
```

Set up an active state:

```css
.site-nav .active a {
  font-weight: bold;
  color: #62DEBE;
  background: #444;
}
```

Note the margin left auto setting for the actions section:

```css
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

Add [the responsive meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/):

```html
<meta name="viewport" content="width=device-width">
```

In a media query, turn wrapping on and set the order of the site nav to second place to improve the layout:

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

<!-- Refactor CSS for `text-decoration`, `text-transform` ... -->

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

Add an active class to the navigation.

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

## Notes

http://info.cern.ch/

