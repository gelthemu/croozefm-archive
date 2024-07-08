// mailing-list
document.addEventListener("DOMContentLoaded", function () {
  const mailingListForm = document.getElementById("mailing-list-form");
  const mailingListPopup = document.getElementById("mailing-list-popup");
  const mailingListCloseBtn = document.getElementById(
    "mailing-list-popup-close"
  );

  mailingListForm.addEventListener("submit", function (event) {
    event.preventDefault();
    mailingListPopup.style.display = "flex";
    mailingListForm.reset();
  });

  mailingListCloseBtn.addEventListener("click", function () {
    mailingListPopup.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (
      !mailingListPopup.contains(event.target) &&
      event.target !== mailingListForm
    ) {
      mailingListPopup.style.display = "none";
    }
  });
});
