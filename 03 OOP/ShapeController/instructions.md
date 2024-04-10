2. OOP Shape controller

- create a web UI with buttons (UP, DOWN, LEFT, RIGHT)
- UI must contain a canvas of 500x500 pixels
- must be able to select between at least two shapes (Square, circle, triangle, etc)
- must be able to select between at least two coordinate display methods
- the UI must display the coordinate position somewhere and be updated as the changes occur
- when the buttons are pressed, actions will be queued that will move the shape in the specified direction
- the actions created will only take effect after a debounce time
  - all actions must be executed in order, one after the other with some delay per action
- create classes to represent the necessary entities to:
  - shapes
    - position
    - actions
    - time control
    - anything else that comes up
  - focus on OOP design, but incorporate async handling techniques as well (promises, async/await, generators, etc) if possible.
  - add a "compress" option for movements
    - any consecutive movements in the queue that are in the same direction should be done in a single move
    - the compress option should be optional through a checkbox

## March 20

1. In shape controller, replace array with a queue
2. Add a do/undo option to shape controller (performe the animations in reverse)
