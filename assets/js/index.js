function showCarouselItem(index) {
  let items = document.getElementsByClassName("carousel-item");
  let dots = document.getElementsByClassName("carousel-dot");

  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  items[index].classList.add("active");
  dots[index].classList.add("active");
}

function slideCarousel() {
  let items = document.getElementsByClassName("carousel-item");
  let index = 1;  // the first one is already active

  setInterval(() => {
    showCarouselItem(index);
    index += 1;
    if (index >= items.length) {
      index = 0;
    }
  }, 3000);
}
