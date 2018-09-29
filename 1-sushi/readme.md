# II Sushi

## Homework

## Reading

## Server Accounts

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

## Sushi - Homework

### Adding a close button

1. We will use [Font Awesome](https://fontawesome.com/cheatsheet) for icons
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
```

Edit the script to include a reference to the new close button:

```html
<script type="text/javascript">
	...
	var closeButton = document.querySelector('.closer')
	...
	closeButton.addEventListener('click', show)

	function show(){
		...
	}
</script>
```

Try a [recipe](http://fontawesome.io/examples/) from font-awesome:

```html
<span class="closer fa-stack fa-md">
	<i class="fa fa-square fa-stack-2x"></i>
	<i class="fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
</span>
```

Here's an alternate method of formatting the close button:

```css
.popover .closer {
	/* float: right; */
	position: absolute;
	top: -11px;
	right: -14px;
	color: var(--rust);
}
```

Add a shadow to the popover:

```css
box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
```

..and because we are not using an anchor tag, add this to the close button:

```css
.popover .closer {
	cursor: pointer;
	...;
}
```

Add an overlay for effect:

```html
<body>
<div class="overlay"></div>
<div id="wrapper">
```

```css
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

Note that there is no possibility of animating this because we are using `display: block` and `display: none`. These are binary states and cannot be used for effects like fading on etc. More on this in a later class.

## Flexbox for the Nav - Demo

Read first - [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

* flex is a _display_ attribute like `block, inline, block-inline`
* do not confuse it with _positioning_ which we have looked at for absolute positioning

In Sushi set the anchor tags to use display flex

```css
.nav {
	display: flex;
	...;
}
```

```css
.nav li {
	flex: 1;
	/*display: inline-block;*/
	margin-right: 1em;
}
```
