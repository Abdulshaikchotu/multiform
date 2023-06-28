document.getElementById("socialForm").addEventListener("submit", (e) => {
  e.preventDefault();
  var form = document.getElementById("socialForm");
  var formData = new FormData(form);

  for (let pairs of formData.entries()) {
    sessionStorage.setItem(pairs[0], pairs[1]);
  }

  window.location.href = "eduction.html";
});
