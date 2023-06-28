// Retrieve form data from sessionStorage and display it on the summary page
document.getElementById("fname").textContent = sessionStorage.getItem("fname");
console.log(sessionStorage.getItem("fname"));
document.getElementById("lname").textContent = sessionStorage.getItem("lname");
document.getElementById("email").textContent = sessionStorage.getItem("email");
document.getElementById("pass").textContent = sessionStorage.getItem("pass");
document.getElementById("dob").textContent = sessionStorage.getItem("dob");
document.getElementById("sex").textContent = sessionStorage.getItem("sex");
document.getElementById("phno").textContent = sessionStorage.getItem("phno");
console.log(document.getElementById("Address"));

document.getElementById("Add").textContent = sessionStorage.getItem("Address");
document.getElementById("edl").textContent = sessionStorage.getItem("e-d-l");

document.getElementById("emps").textContent = sessionStorage.getItem("emps");
document.getElementById("anu").textContent = sessionStorage.getItem("anulain");
document.getElementById("ms").textContent = sessionStorage.getItem("ms");
