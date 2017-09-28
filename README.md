# Session Three

## Homework

1. Use flexbox to add a third css style sheet to make the layout look like this:
![Sample image](_contact-sheet/Contact-sheet/3-gallery.jpg)

Add it to the style sheet switcher (see the `_contact-sheet-done` folder). 


## Reading 

* [Responsive Web Design](https://abookapart.com/products/responsive-web-design) - finish it
* [JavaScript for Web Designers](https://abookapart.com/products/javascript-for-web-designers) Chapter 1 -Getting Set Up, Chapter 2 - Understanding Data Types, Chapter 3 - Conditional Statements


## Sushi Review

* the anchor tags use display flex

```
.nav {
	display: flex;
	padding: 0;
}
.nav li { 
	flex: 1;
	background-color: #d00;
	list-style: none;
	text-align: center;
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


### DOM Scripting - Adding a close button

Before starting, review the HTML, CSS and JavaScript that enables the popover from last week.

1. Getting started with [Font Awesome](http://fontawesome.io/get-started/)
1. Examine some usage samples from [Font Awesome](http://fontawesome.io/examples/)
1. Make Font Awesome accessible to the page e.g.: `@import url(font-awesome-4.6.3/css/font-awesome.min.css);` or

```
<script src="https://use.fontawesome.com/a68f41e4bd.js"></script>
```

1. http://fontawesome.io/icons/ looks like `fa-times` will work. 

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

Try a recipe from font-awesome:

```
<span class="closer fa-stack fa-md">
	<i class="fa fa-square fa-stack-2x"></i>
	<i class="fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
</span>
```

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

..and because we are not using an anchor tag:

```
cursor: pointer;
```

<!-- ...or better yet:

```
<span class="closer fa-stack fa-md">
	<a href="https://www.google.com/maps/place/Geido/@40.6778979,-73.9749227,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!8m2!3d40.6778939!4d-73.972734" target="_blank">
	<i class="fa fa-square fa-stack-2x"></i>
	<i class="fa fa-times fa-stack-1x fa-inverse" aria-hidden="true"></i>
	</a>
</span>
``` -->

...and a overlay for effect:

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

Note here that there is no possibility of animating this because we are using `display: block` and `display: none`. These are binary states and cannot be used for effects like fading on etc. More on this in a later class.

But we can animate the link:

```
a {
	color: #aa0000;
	text-decoration: none;
	transition: color .5s;
}
a:hover {
	text-decoration: underline;
	color: red;
}
```



Notes





