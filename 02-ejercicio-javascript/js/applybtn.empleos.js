const jobsListing = document.querySelector(".jobs-listings");

jobsListing?.addEventListener("click", (event) => {
  if (event.target.classList.contains("button-apply-job")) {
    const button = event.target;
    button.textContent = "¡Aplicación enviada!";
    button.classList.add("is-applied");
    button.disabled = true;
  } else if (event.target.classList.contains("button-view-details")) {
    window.location.href = "detalles.html";
  }
});
