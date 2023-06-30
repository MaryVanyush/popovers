/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Popover.js

class Popover {
  constructor() {
    this.popovers = [];
  }
  showPopover(header, message, element) {
    const popoverElement = document.createElement("div");
    popoverElement.classList.add("popover");
    const popoverHeader = document.createElement("h3");
    popoverHeader.classList.add("popover-header");
    popoverHeader.textContent = header;
    const popoverBody = document.createElement("div");
    popoverBody.classList.add("popover-body");
    popoverBody.textContent = message;
    popoverElement.appendChild(popoverHeader);
    popoverElement.appendChild(popoverBody);
    const id = performance.now();
    this.popovers.push({
      id,
      element: popoverElement,
      activeBtn: element
    });
    document.body.appendChild(popoverElement);
    const {
      top,
      left,
      width
    } = element.getBoundingClientRect();
    popoverElement.style.left = left + "px";
    popoverElement.style.width = width + "px";
    popoverElement.style.top = top - 10 - popoverElement.offsetHeight + "px";
    return id;
  }
  removePopover(id) {
    const popover = this.popovers.find(t => t.id === id);
    popover.element.remove();
    this.popovers = this.popovers.filter(t => t.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const popover = new Popover();
const btnPopover = document.querySelectorAll(".btn-popover");
const getPopover = () => {
  const element = event.target;
  for (const elem of popover.popovers) {
    if (elem.activeBtn === element) {
      popover.removePopover(elem.id);
      return;
    }
    popover.removePopover(elem.id);
  }
  const header = element.dataset.popoverTitle;
  const message = element.dataset.content;
  popover.showPopover(header, message, element);
};
btnPopover.forEach(el => el.addEventListener("click", getPopover));
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;
//# sourceMappingURL=main.js.map