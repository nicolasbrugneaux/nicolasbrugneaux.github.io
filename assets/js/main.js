/**
 * Dynamically set the date in the footer
 */
var footerSpan = document.getElementsByClassName("js--full-year")[0];
if (footerSpan) {
  footerSpan.innerHTML = String(new Date().getFullYear());
}

/**
 * Setup offline access
 */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", {
      scope: "/"
    })
    .catch(function(err) {
      console.warn("Service workers are not supported.");
    });
}
