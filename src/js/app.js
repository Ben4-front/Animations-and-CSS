import Collapse from './Collapse';
import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {

  const container = document.querySelector('.collapsible-container');
  
  if (container) {
    new Collapse(container);
  }
});