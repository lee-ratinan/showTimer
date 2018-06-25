# showTimer

A jQuery plugin to generate a countdown timer in 2 different formats.

## Simple textual timer

Example 2d 3h 20m 9s

```html
<div id="selector" data-start="2018-06-21T00:00:00" data-end="2018-06-29T00:00:00"></div>
```

```javascript
$(function () {
  $('#selector').showTimer({returnType: "text"});
});
```

## Boxed timer

```html
<div id="selector2" data-start="2018-06-21T00:00:00" data-end="2018-06-29T00:00:00"></div>
```

```javascript
$(function () {
  $('#selector2').showTimer({returnType: "box"});
});
```

## TimeZone Concerned

All time entered in the attributes (data-start and data-end) must be in UTC+00:00. Unless otherwise specified, e.g.

```javascript
$(function () {
  $('#selector3').showTimer({timeZone: "+08:00"});
});
```
