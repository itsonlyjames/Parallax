Parallax
========

Simple parallax image scrolling effect.

I've written a short and simple code to give you a parallax scrolling effect with any image you desire, can be used with anything.

Looks best with a header image, 100% width. But reccomended if used on a smaller image, that the image has a defined edge.

Demo is included in the zip, just scroll down to see the effect!

Example Usage
========

###HTML

You just need to change YOUR IMAGE LINK, to the image that you would like it to be, in the demo i'm getting the image from my folder called images.

```html
<div id="parallaxContainer">
	<img id="parallaxImage" src="YOUR IMAGE LINK"/>
</div>

<div id="content"></div>

```

###CSS

Some css to make it look nice and work better.

Feel free to change the css to whatever you please, this is just basic to show you how it will work.

```css

#parallaxContainer {
		width:100%;
		height:500px;
		position: absolute;
		background-color: black;
		top:0;
		left:0;
	}

	#parallaxImage{
		width:100%;
		height:500px;
		background-size: cover;
		position: absolute;
	}

	#content {
		width:100%;
		height:1500px;
		position: absolute;
		top:500px;
		left:0;
		background-color: #ffffff;
	}

```

###jQuery

You will need to add jQuery to your code as well, add this code just under your opening head tag.

```js

<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>

```

This is the code the makes it work, add it just above your closing body tag.

```js

$(window).scroll(function() {
    var scroll = $(window).scrollTop(),
    slowScroll = scroll/1.5;
    				
    $('#parallaxImage').css({ transform: "translateY(" + slowScroll + "px)" });
});

```
