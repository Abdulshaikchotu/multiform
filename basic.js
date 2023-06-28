document
  .getElementById("basicForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = document.getElementById("basicForm");
    var formData = new FormData(form);
    console.log(formData);
    // Store form data in sessionStorage
    for (var pair of formData.entries()) {
      //pair[0] means key which is name attribute value
      //pair[1] means value which is exact value enterd in input
      sessionStorage.setItem(pair[0], pair[1]);
    }

    // Redirect to social profile page
    window.location.href = "social.html";
  });
