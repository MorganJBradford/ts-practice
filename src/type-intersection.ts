type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type uiWidget = Draggable & Resizable;

let textBox: uiWidget = {
  drag: () => {},
  resize: () => {},
}