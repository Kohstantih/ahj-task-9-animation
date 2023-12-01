export default class LikerWidget {
  constructor(container, animationBox) {
    this.container = container;
    this.animationBox = animationBox;

    this.btnGoLike = this.container.querySelector('.add_like');
    this.heart = this.container.querySelector('.heart');

    this.goLike = this.goLike.bind(this);
  }

  actiation() {
    this.btnGoLike.addEventListener('click', this.goLike);
  }

  goLike() {
    const flyingHeart = this.heart.cloneNode(true);

    flyingHeart.style.animationName = this.getRandomAnimation();

    const coordinatesBox = this.container.getBoundingClientRect();
    const { top, left, width } = this.btnGoLike.getBoundingClientRect();
    flyingHeart.style.top = `${top - coordinatesBox.top}px`;
    flyingHeart.style.left = `${left - coordinatesBox.left + width / 2 - 20}px`;
    this.container.append(flyingHeart);
    flyingHeart.addEventListener('animationend', () => {
      flyingHeart.remove();
    });
    flyingHeart.classList.add('move');
  }

  getRandomAnimation() {
    return this.animationBox[Math.floor(Math.random() * this.animationBox.length)];
  }
}
