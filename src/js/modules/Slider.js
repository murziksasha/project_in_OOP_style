export default class Slider {
 

  constructor(page, btns) {
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this._slideIndex = 1;
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this._slideIndex = 1;
    }

    if (n < 1) {
      this._slideIndex = this.slides.length;
    }

    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });

    this.slides[this._slideIndex - 1].style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides((this._slideIndex += n));
  }

  render() {
    this.btns.forEach(item => {
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });

      item.parentNode.previousElementSibling.addEventListener('click', (e) =>{
        e.preventDefault();
        this._slideIndex = 1;
        this.showSlides(this._slideIndex);
      });
    });

    this.showSlides(this._slideIndex);  //first initial for slides 
  }
}
