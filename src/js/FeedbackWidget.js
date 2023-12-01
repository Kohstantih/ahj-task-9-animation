export default class FeedbackWidget {
  constructor(container) {
    this.container = container;

    this.btnOpen = this.container.querySelector('.open_popup');
    this.popupBox = this.container.querySelector('.popup_box');
    this.btnHide = this.container.querySelector('.btn_hide-popup');

    this.openPopup = this.openPopup.bind(this);
    this.hidepopup = this.hidepopup.bind(this);
  }

  activation() {
    this.btnOpen.addEventListener('click', this.openPopup);
  }

  openPopup() {
    this.btnOpen.classList.add('hidden_button');
    this.popupBox.classList.remove('hide_popup');

    this.btnHide.addEventListener('click', this.hidepopup);
  }

  hidepopup() {
    this.popupBox.classList.add('hide_popup');
    this.btnHide.removeEventListener('click', this.hidepopup);
    this.btnOpen.classList.remove('hidden_button');
  }
}
