/*
 * Portfolio Project Filter
 *
 * This script allows visitors to filter portfolio projects by category.
 * Each project has a data-category attribute, and each filter button has
 * a data-filter attribute.
 *
 * Citations:
 * MDN Web Docs - Using data attributes:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
 *
 * MDN Web Docs - addEventListener():
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  
  //find all filter buttons and project cards
  //Citation: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll(".project-card");

  //if this page does not contain the portfolio filter, stop the script without causing an error.
  if (filterButtons.length === 0 || projects.length === 0) {
    return;
  }

  //add a click event
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedCategory = button.dataset.filter;
      projects.forEach(function (project) {
        const projectCategory = project.dataset.category;
        if (selectedCategory === "all" || projectCategory === selectedCategory) {
          project.style.display = "";
        } else {
          project.style.display = "none";
        }
      });
      
      //update which filter button is visually selected.
      filterButtons.forEach(function (filterButton) {
        filterButton.classList.remove("active");
      });
      button.classList.add("active");
      });
  });
});
