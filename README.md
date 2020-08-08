# Turtle Graphics JS
Interact with a canvas with turtle like methods

## Set up
Start by declaring a new Turtle!
Turtles accept one parameter, which describes the type of canvas you want the graphics to be displayed. This parameter can either be a string (defaults to `querySelector`) or an HTML element.

``` javascript
let turtle = new Turtle(document.getElementById('canvas'))
```
## Pen
You can change the pen of the turtle with `penDown` and `penUp`.
``` javascript
turtle.penDown()
turtle.penUp()
```

## Other Pen Options
You can also change the color and line width of the pen like so:
``` javascript
turtle.pen.color = '#000' // black is the default
turtle.pen.width = 2
```

## Direction
The turtle has `backwards`, `forwards`, `left`, and `right`. This are somewhat self explantory. Backwards and forwards move the turtle by a certain number of units. Left and right rotate the turtle by a certain number of degrees.