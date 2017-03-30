# Front End Foundations Session Three

## Homework

1. 


## Reading 

* [Responsive Web Design](https://abookapart.com/products/responsive-web-design) - finish it
* [JavaScript for Web Designers](https://abookapart.com/products/javascript-for-web-designers) Chapter 1 -Getting Set Up, Chapter 2 - Understanding Data Types, Chapter 3 - Conditional Statements


## Server Accounts

[See session one](https://github.com/front-end-foundations/session1#aside---server-accounts)


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


## DOM Scripting - review

* Selecting items with `document.querySelector`

* attaching events with `addEventListener()`

* Manipulating HTML with `classList`

```
<script>
	var mapClicker = document.querySelector('.map')
	var popOver = document.querySelector('.popover')
	mapClicker.addEventListener('click', show)

	function show(){
		popOver.classList.toggle('showme')
		event.preventDefault()
	};
</script>
```

We designed the popover and hid it:

```
.popover {
	padding: 1rem;
	width: 300px;
	height: 225px;
	background: #fff;
	border: 1px solid var(--hilite-color);
	border-radius: var(--radius);
	position: fixed;
	top: calc(50% - 100px);
	left: calc(50% - 150px);
	display: none;
}
```

And created the class that will be added by classList.add():

```
.showme {
	display: block;
}
```

### Adding a [X] to close the popover.

1. make the css external
2. review http://fontawesome.io/examples/
3. make font awesome accessible `@import url(font-awesome-4.6.3/css/font-awesome.min.css);`
4. http://fontawesome.io/icons/ looks like `fa-times` will work

```
<div class="popover">
	<span class="closer"><i class="fa fa-times" aria-hidden="true"></i></span>
	<iframe>...</iframe>
</div>
```

```
.popover .closer {
	/*float:right;*/
	position: absolute;
	top: 0;
	right: 6px;
}
```

```
<script type="text/javascript">
	var mapClicker = document.querySelector('.map')
	var popOver = document.querySelector('.popover')
	var closeButton = document.querySelector('.closer')
	mapClicker.addEventListener('click', show)
	closeButton.addEventListener('click', show)

	function show(){
		popOver.classList.toggle('showme')
		event.preventDefault()
	}
</script>
```

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





