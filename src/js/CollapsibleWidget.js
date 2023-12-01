export default class CollapsibleWidget {
  constructor(container) {
    this.container = container;

    this.btnCollapse = this.container.querySelector('.btn_collapse');
    this.collapsibleContainer = this.container.querySelector('.collapsible_container');

    this.collapseStatus = false;

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  activation() {
    this.btnCollapse.addEventListener('click', this.toggleCollapse);
  }

  toggleCollapse() {
    this.collapseStatus = this.collapseStatus === false;
    this.collapsibleContainer.classList.toggle('show');
    this.container.classList.toggle('rolled-up');
  }
}
