# Ellipsity
A JavaScript library that will Ellipsis text that overflows its container. Simple, Fast, Powerful!

* Will dynamically ellipsis multiline text regardless of the amount of lines the text contains to the size of its parent container.

NPM Package

https://www.npmjs.com/package/ellipsity/v/1.0.0

## Code Example
```javascript
Ellipsity.ellipsify(document.getElementById("container"));
```

Is all that is required, view the example for a live example.

![Alt text](example.png?raw=true "Ellips Example")

## Motivation
HTML, CSS and Javascript do not support native crossbrowser functionality to truncate and ellips text. This library is a simple and easy way to provide that functionality for you and the code can easily be built on.

## Installation
Include the following script into the head or body of your html document:
```html
<script type="text/javascript" src="ellipsity.min.js"></script>
```

## API Reference
You are set with:
```javascript
Ellipsity.ellipsify(container);
```

## License
The current license is MIT as it is the simplest and less restrictive license I could find on here at the time. If you feel like it is restricting you in anyway I am open to alternate licenses that are less restricting.
