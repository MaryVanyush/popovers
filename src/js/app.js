import Popover from "../components/Popover";

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

btnPopover.forEach((el) => el.addEventListener("click", getPopover));
