var tab = document.querySelectorAll('.tab');

function changeTab(number) {
  for(i = 0; i < tab.length; i++){
    tab[i].classList.remove("active");
    if (number == 1) {
      tab[i].classList.add("close");
      tab[0].classList.remove("close");
      tab[0].classList.add("active");
    }
    if (number == 2) {
      tab[i].classList.add("close");
      tab[1].classList.remove("close");
      tab[1].classList.add("active");
    }
    if (number == 3) {
      tab[i].classList.add("close");
      tab[2].classList.remove("close");
      tab[2].classList.add("active");
    }
  }
}