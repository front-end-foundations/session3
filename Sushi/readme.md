## Sushi Review

Read first - [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

* flex is a *display* attribute like `block, inline, block-inline`
* do not confuse it with *positioning* which we have looked at for absolute positioning

In Sushi set the anchor tags to use display flex

```
.nav {
	display: flex;
	...
}
.nav li { 
	flex: 1;
	...
}
```

## Responsive Design

```
@media print {
	* {
		display: none !important;
	}
}
```


```
@media screen and (max-width: 800px){
	.nav {
		top: 0;
		left:0;
		margin: 0;
		background: var(--rust);
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

Test in the browser

[The responsive meta tag](https://css-tricks.com/snippets/html/responsive-meta-tag/)

```html
<meta name="viewport" content="width=device-width">
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