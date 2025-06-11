//BELOW IS FOR THE PHONE NUMBER LINK ON CONTACT PAGE

// This waits until the HTML is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  const phoneLink = document.getElementById("phone-link");

  if (phoneLink) {
    phoneLink.addEventListener("click", function (event) {
      const confirmCall = confirm("Would you like to call The Cotton Corner?");
      if (!confirmCall) {
        event.preventDefault();
      }
    });
  }
});
