Parallax
========

Simple parallax image scrolling effect.

I've written a short and simple code to give you a parallax scrolling effect with any image you desire, can be used with anything.

Looks best with a header image, 100% width. But reccomended if used on a smaller image, that the image has a defined edge.

Example Usage
========

###HTML

```html

<img id="parallaxImage" src="YOUR IMAGE LINK"/>

```

###CSS

Some css to make it look nice and work better

```css



```

###jQuery

You will need to add jQuery to your code as well, add this code just under your opening head tag

```js

<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>

```

This is the code the makes it work, add it just above your closing body tag

```js

$(window).scroll(function() {
    var scroll = $(window).scrollTop(),
    slowScroll = scroll/1.5;
    				
    $('#parallaxImage').css({ transform: "translateY(" + slowScroll + "px)" });
});

```
