# showTimer

A jQuery plugin to generate a countdown timer in 2 different formats.

## Simple textual timer

Example: EXPIRES IN 2d 3h 20m 9s

```html
<div id="wrapper">EXPIRES IN <span id="selector" data-start="2018-06-21T00:00:00" data-end="2018-06-29T00:00:00"></span></div>
```

```javascript
$(function () {
  $('#selector').showTimer({returnType: "text", wrapper_id: "wrapper"});
});
```

## Boxed timer

```html
<div id="wrapper_2">EXPIRES IN <span id="selector2" data-start="2018-06-21T00:00:00" data-end="2018-06-29T00:00:00"></span></div>
```

```javascript
$(function () {
  $('#selector2').showTimer({returnType: "box", wrapper_id: "wrapper_2"});
});
```

## TimeZone Concerned

All time entered in the attributes (data-start and data-end) must be in UTC+00:00. Unless otherwise specified, e.g.

```javascript
$(function () {
  $('#selector3').showTimer({timeZone: "+08:00"});
});
```

## Parameters

### In $().showTimer()
returnType: text|box, default: "text"
timeZone: "+HH:MM" format (e.g. "+08:00", "-05:00"), default: "+00:00"
wrapper_id: The ID of the wrapper element to be hidden along with the countdown clock reaches 0, default: ""

### In data- attribute
data-start: timestamp of the starting point of the countdown
data-end: timestamp of the ending point of the countdown
