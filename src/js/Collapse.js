export default class Collapse {
  constructor(element) {
    this.element = element;
    this.trigger = element.querySelector('.collapse-btn');
    this.content = element.querySelector('.collapse-content');
    
    this.init();
  }

  init() {
    this.trigger.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });
  }

  toggle() {
    if (this.content.classList.contains('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.content.classList.add('open');
    
    this.content.style.height = `${this.content.scrollHeight}px`;
  }

  close() {
    this.content.style.height = '0px';
    this.content.classList.remove('open');
  }
}