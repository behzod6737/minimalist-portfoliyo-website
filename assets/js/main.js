// headerni elHeader nomli o'zgaruvchiga yaqlab qoyvomiz
const elHeader = document.querySelector(".site-header");
// header ichidagi botton ni elToggler nomli ozgaruvchiga saqlab ovomz
const elNavToggler = elHeader.querySelector(".js-nav-toggler");
// button nga quloq solyapmiz click bolsa -->
elNavToggler.addEventListener("click", function () {
    // header classiga yangi site-header--active klass qoshvomz (ayiryapmiz)
  elHeader.classList.toggle("site-header--active");
});
