// Utility functions similar to Codrops
const map = (value, in_min, in_max, out_min, out_max) => {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const getMousePos = (ev) => {
  return {
    x: ev.clientX,
    y: ev.clientY
  };
};

// Track mouse position
let mousepos = { x: 0, y: 0 };
let mousePosCache = mousepos;
let direction = { x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y };

// Update mouse position when moving the mouse
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

export default class CountryItem {
  constructor(el, imageUrl, inListPosition) {
    // el is the <li> with class "country-item"
    this.DOM = { el: el };
    this.imageUrl = imageUrl;
    this.inListPosition = inListPosition;
    
    // the item text
    this.DOM.textInner = this.DOM.el.querySelector('a');
    
    // create the image structure
    this.layout();
    
    // initialize some events
    this.initEvents();
  }

  // create the image structure
  // we want to add/append to the country item the following html:
  // <div class="hover-reveal">
  //   <div class="hover-reveal__inner">
  //     <div class="hover-reveal__img"></div>
  //   </div>
  // </div>
  layout() {
    // this is the element that gets its position animated
    this.DOM.reveal = document.createElement('div');
    this.DOM.reveal.className = 'hover-reveal';
    
    // the next two elements could actually be only one, the image element
    // adding an extra wrapper (revealInner) around the image element with overflow hidden, gives us the possibility to scale the image inside
    this.DOM.revealInner = document.createElement('div');
    this.DOM.revealInner.className = 'hover-reveal__inner';
    
    this.DOM.revealImage = document.createElement('div');
    this.DOM.revealImage.className = 'hover-reveal__img';
    this.DOM.revealImage.style.backgroundImage = `url(${this.imageUrl})`;
    
    this.DOM.revealInner.appendChild(this.DOM.revealImage);
    this.DOM.reveal.appendChild(this.DOM.revealInner);
    this.DOM.el.appendChild(this.DOM.reveal);
  }

  // calculate the position/size of both the country item and reveal element
  calcBounds() {
    this.bounds = {
      el: this.DOM.el.getBoundingClientRect(),
      reveal: this.DOM.reveal.getBoundingClientRect()
    };
  }

  // bind some events
  initEvents() {
    this.mouseenterFn = (ev) => {
      // show the image element
      this.showImage();
      this.firstRAFCycle = true;
      // start the render loop animation (rAF)
      this.loopRender();
    };
    
    this.mouseleaveFn = () => {
      // stop the render loop animation (rAF)
      this.stopRendering();
      // hide the image element
      this.hideImage();
    };
    
    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  }

  // show the image element
  showImage() {
    // set initial styles
    this.DOM.reveal.style.opacity = 1;
    this.DOM.el.style.zIndex = 1000;
    
    // animate the image wrap
    this.DOM.revealInner.style.transform = 'translateX(0%)';
    this.DOM.revealImage.style.transform = 'translateX(0%)';
  }

  // hide the image element
  hideImage() {
    this.DOM.el.style.zIndex = 10;
    this.DOM.reveal.style.opacity = 0;
  }

  // start the render loop animation (rAF)
  loopRender() {
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => this.render());
    }
  }

  // stop the render loop animation (rAF)
  stopRendering() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }

  // translate the item as the mouse moves
  render() {
    this.requestId = undefined;
    
    // calculate position/sizes the first time
    if (this.firstRAFCycle) {
      this.calcBounds();
    }
    
    // calculate the mouse distance (current vs previous cycle)
    const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
    
    // direction where the mouse is moving
    direction = { x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y };
    
    // updated cache values
    mousePosCache = { x: mousepos.x, y: mousepos.y };
    
    // new translation values
    // the center of the image element is positioned where the mouse is
    const tx = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width / 2;
    const ty = Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height / 2;
    
    // new rotation value
    // const rotation = this.firstRAFCycle ? 0 : map(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 60 : -60);
    const rotation = 0;
    
    // new filter value
    // const brightness = this.firstRAFCycle ? 1 : map(mouseDistanceX, 0, 100, 1, 4);
    const brightness = 1;
    
    // set styles
    this.DOM.reveal.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rotation}deg)`;
    this.DOM.reveal.style.filter = `brightness(${brightness})`;
    
    // loop
    this.firstRAFCycle = false;
    this.loopRender();
  }
} 