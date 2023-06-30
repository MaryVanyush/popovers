import "./Popover.css";

export default class Popover {
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
      activeBtn: element,
    });
    document.body.appendChild(popoverElement);
    const { top, left, width } = element.getBoundingClientRect();

    popoverElement.style.left = left + "px";
    popoverElement.style.width = width + "px";
    popoverElement.style.top = top - 10 - popoverElement.offsetHeight + "px";
    return id;
  }

  removePopover(id) {
    const popover = this.popovers.find((t) => t.id === id);
    popover.element.remove();
    this.popovers = this.popovers.filter((t) => t.id !== id);
  }
}
