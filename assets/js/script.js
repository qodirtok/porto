$(".nav-ico").click(function (event) {
  // console.log('masuk');
  $(".main-nav").toggleClass("active");
  $(this).toggleClass("active");
});

window.addEventListener("scroll", function (params) {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 0);
});
