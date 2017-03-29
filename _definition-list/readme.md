#FOUNDATIONS session 3 

##Definition Lists

[Here is a summary](http://www.w3schools.com/html/html_lists.asp) of the different types of lists in HTML. And [an article](http://maxdesign.com.au/articles/definition/) specifically on definition lists.

Examine the html in the browser. Note the use of `class="image"` on the `<dd>` elements containing image. 

Review the default browser formatting for definition lists using the developer tools.

##The CSS
Create a new `css` folder, create a new empty file within it and add the following CSS code.

```
* {
	margin:0; 
	padding:0;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	margin: 1em;
}

.menu-list {
	width:300px; 
	border:2px solid #c8cdd2;
	padding:10px 0;
} 
```

And save it as styles.css into the new folder. Use `<link>` to add a reference to this file in the head of the html document and test in the browser.

Note the 300 pixel width and the 10px padding top and bottom.

```
.menu-list dl {
	margin:10px 20px; 
}
```

Note the margins above. We apply left and right margins to the dl. If we were to add 20px padding to the menu-list it would increase the width of the element to 344px which, let's let's pretent for a moment, is not desirable. 

Let's tackle the definition terms `<dt>`.

```css
.menu-list dt {
	font-size: 1.0em; 
	letter-spacing: 1px; 
	color: #627081; 
}
```

Now apply some basic formatting to the definitions.

```css
.menu-list dd {
	font-size: 0.875em;
	line-height: 1.6; 
    color: #666; 
}
```

###The Floats

Allow the text to position itself next to image.

```css
.menu-list img {
	float:left;
}
```

The layout appears to break. Let's tackle this one element at a time.
Float the title `<td>` to the opposite side.

```css
.menu-list dt {
	float: right;
	...
}
```

The descriptive text fills a gap between the `<dt>` and the image, assigning widths to each will fix this.

Let's add `width:180px` to the dt using the following calculations. 

Width of box (300px) minus margins around each dl (20px * 2) minus the width of image (80px)

```css
.menu-list dt {
  ...
	width: 180px;  
}
```

Now the images are sticking outside their parent `<dl>` container. We want the containing element to expand to encompass its contents.

We can use the same method we have already used - FNE float nearly everything (See Eric Meyer's old yet still [relevant article](http://bit.ly/GQD5MU) wherein it is written "a container will stretch to fit around floated elements within it if the container is also floated.")

```css`
.menu-list dl {
	...
	float:left;
    }
```

Note the entries are exactly the width of the `<dt>`s. 

Assign a width for floated elements. (260 + 20 + 20 = 300, the same width as the menu-list.)

```css
.menu-list dl {
	...
	width: 260px; 
}
```

Now the only thing that's collapsed is the menu-list container.￼

Float the menu-list container the prevent collapsing.

```css
.menu-list {
	float:left;
	...
}
```

After reviewing the final.png design we can see we need to add borders and space to the right of the image with a margin.

```css
.menu-list img {
	...
	margin: 0 8px 0 0;
	padding: 4px;
	border: 1px solid #d9e0e6;
	border-bottom-color: #c8cdd2;
	border-right-color: #c8cdd2;
	background: #fff;
	}
```

The layout breaks. The problem is with the `<dt>`'s widths. 

Change the spacing for the `<dt>`s by subtracting 18px. 

180px minus 18  (8px right margin + 4px padding * 2 + 1px border * 2)

```css
.menu-list dt {
	width:162px;
	...
}
```

Add additional text (in Sublime: `command-shift p / lorem` or `lorem + tab`) to the first dt to examine the behavior when text wraps.

To prevent text from wrapping under the images add a left margin of 98px to the second `<dd>` element.

Let's use a [sibling selector](https://css-tricks.com/child-and-sibling-selectors/).

```css
.menu-list dd + dd {
	margin: 0 0 0 98px; 
}
```

###The Alternating Design

In the final image the design intention was to alternate the image and text.

Changing the float direction 

Note `even` class on second dl element. 

Reverse the float on the definition term

```
.menu-list .even dt {
	float:left; 
}
```

Reverse the margin on the `even` versions.
```
.menu-list .even dd + dd {
	margin: 0 98px 0 0; 
}
```

Reverse the float and margin on the image.

```css
.menu-list .even img {
	float:right;
	margin: 0 0 0 8px; 
}
```

###Changing the float direction (alternate)

We can use the CSS nth-child selector. This method allows us to target the html without adding classes for the sole purpose of controlling the view so it would be regarded as superior by many.

The following selector would target the second `<dl>` element.

`dl:nth-child(2)`

After removing the `class=”even”` from the second dl tag

```
.menu-list dl:nth-child(even) dt {
	float:left; 
}

.menu-list dl:nth-child(even) img {
	float:right;
	margin: 0 0 0 8px; 
}

.menu-list dl:nth-child(even) dd + dd {
	margin: 0 98px 0 0; 
}
```

For more information on nth-child read [this article](https://css-tricks.com/how-nth-child-works/) on Chris Coyer's CSS Tricks.

###Finishing Touches

Set the background image (304px wide plus a 2px border on both sides) and remove the border.

```css
.menu-list {
	...
	/* border:2px solid #c8cdd2; */
	width:304px; 
	background: url(../img/bg.gif) no-repeat top left;
}
```

Add drop shadow to images

`box-shadow: 1px 1px 3px #1a1a1a;`

Or use rgb

`box-shadow: 1px 1px 3px rgb(26, 26, 26);`

Or use rgba.

`box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);`

##Alertnate Version

To be complete, I've added a sample which uses an unordered list `unorderedlist-version.html`

```
<body>
	<div class="menu-list">
		<ul>
			<li>Spicy Tuna Roll</li>
			<li><img src="img/1.jpg" width="80" height="80" alt="Tuna Roll"></li>
			<li>Our specialty - spicy tuna rolls.</li>
		</ul>
		<ul class="alt">
			<li>Sushi for Two</li>
			<li><img src="img/2.jpg" width="80" height="80" alt="Sushi for Two"></li>
			<li>Enjoy a special treat for two. Orders also available for three or more.</li>
		</ul>
		<ul>
			<li>Omikase</li>
			<li><img src="img/3.jpg" width="80" height="80" alt="Omikase"></li>
			<li>Allow our executive chef to prepare a special selection of the day's top choices.</li>
		</ul>
	</div>
</body>
```

the CSS to make this work requires some additional complex selectors due to the lack of semantic richness (originally afforded by the Definition List)

```css
	.menu-list {
		width:304px; 
		background: url(img/bg.gif) no-repeat top left; 
		padding:10px 0; 
		float: left;
	}
	.menu-list ul {
		list-style: none;
		margin:10px 20px;
		width: 260px;
		float:left;
		padding: 0;
	}
	.menu-list ul li:first-child {
		float:right;
		font-size:130%;
		width: 180px;
		width:162px;
		font-size:1.0em; 
		letter-spacing:1px; 
		color:#627081; 
	}
	.menu-list ul li+li+li {
		font-size:0.8em;
		line-height:160%; 
		color:#666; 
	}
	.menu-list li img {
		float:left;
		margin: 0 8px 0 0;
		padding:4px;
		border:1px solid #d9e0e6;
		border-bottom-color:#c8cdd2;
		border-right-color:#c8cdd2;
		background:#fff;
	}
```


##Box Model - Border Box

Working with the alternate box model in version-2-fluid.

This is a simplified version of the first exercise. Examine the html and css.

Initialize border-box on all elements:

```css
* {
	...
	box-sizing: border-box;
}
```
Remove the width rule from the menu-list and note its size. Add `width: 100%`.

```css
.menu-list {
	...
	/*width: 300px;*/
	width: 100%;
}
```

```css
.menu-list dl {
	...
	width: calc(100% - 20px);
}
```

```css
.menu-list dt {
	...
	width: calc(100% - 98px);
}
```


##Responsive Design - Just the Basics

###Media Query

* print

```css
@media print {
	img {
		display: none;
	}
}
```

* screen

Use the width of the browser to change the view.

```css
@media screen and (min-width: 304px){
	.menu-list {
		background: #eee;
		color: #000; 
	}
}
@media screen and (min-width: 620px){
	.menu-list {
		background: #333;
		color: #fff;
	}
}
```

###The meta tag

Use Chrome's toggle device toolbar feature and choose a device.

Note the absence of scaling.

Add the [viewport meta](http://www.w3schools.com/Css/css_rwd_viewport.asp) tag to the head region of the html page and refresh:

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

##Homework

1. Add a styled defiition list component to last week's homework.
2. Attempt the first of the two exercises [here](https://github.com/foundations-fall-2016/session3-image-gallery).
