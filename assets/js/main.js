var fullYearSpan = document.getElementsByClassName("js--full-year")[0];
if (fullYearSpan) {
  fullYearSpan.innerHTML = String(new Date().getFullYear());
}
