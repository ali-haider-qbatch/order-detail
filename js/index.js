function myFunction() {
  var element = document.body;
  element.classList.toggle("light-mode");
}

function handleSidemenu(wind) {
  var viewportWidth = $(wind).width();
  if (viewportWidth <= 991) {
    localStorage.ClassName = "hide-menu";
    $("#hide-menu").addClass(localStorage.className);
  } else if (viewportWidth > 991) {
    $("#hide-menu").removeClass("hide-menu");
  }
}

$(document).ready(function () {
  $("#toggle-button").click(function () {
    $("#hide-menu").toggleClass("hide-menu");
  });
  handleSidemenu(window);
});

$(window).resize(function () {
  handleSidemenu(window);
});
