window.onload = function () {

  alert("Welcome To Gaming Platform");

  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

      alert("Game launching soon...");

    });

  });

};
