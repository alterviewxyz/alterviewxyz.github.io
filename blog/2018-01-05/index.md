---
date: "2018-01-05"
title: "Coding Is Cool"
category: "کد"
podcast: "جیگسا"
---

لسی لسیل سیل یستسیدتل ثصغت البس ابک ج ا قا س. لسی لسین اقصخه اقالدبس ابساقاا. سباقع ساخل تاس البیا بی؟ اسبقا تاد تعداعقداس اه سا سهاهبت اهدا به.  تیسالتسیادسنبدابنتس ان اق انبدا تمسبدبتد خسدا.

یسلات ا دذابثخهتداخداخبدا.

```js
(function() {

var cache = {};
var form = $('form');
var minified = true;

var dependencies = {};

var treeURL = 'https://api.github.com/repos/PrismJS/prism/git/trees/gh-pages?recursive=1';
var treePromise = new Promise(function(resolve) {
	$u.xhr({
		url: treeURL,
		callback: function(xhr) {
			if (xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText).tree);
			}
		}
	});
});
```

Zwei flinke Boxer jagen die quir

```md
# asdfasdfads
- auesufuaus
```

```css
code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}
```