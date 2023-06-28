document
  .getElementById("educationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = document.getElementById("educationForm");
    var formData = new FormData(form);

    // Store form data in sessionStorage
    for (var pair of formData.entries()) {
      sessionStorage.setItem(pair[0], pair[1]);
    }

    // Redirect to summary page
    window.location.href = "summarypage.html";
  });
