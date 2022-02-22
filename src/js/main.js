// adaptive navber onsroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10|| document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "rgb(0, 0, 0, 0.8)";
    document.getElementById("navbar").style.height = "8vh";
    document.getElementById("wave__one").classList.add("wave__one__new");

  } else {
    document.getElementById("navbar").style.background = "";
    document.getElementById("navbar").style.height = "12vh";
    document.getElementById("wave__one").classList.remove("wave__one__new");
    document.getElementById("wave__one").classList.add(".wave__one");
  }
}