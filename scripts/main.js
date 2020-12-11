var dropdown = document.querySelector("#dropdown");
  var burger = document.querySelector("#burger");
  var box = document.querySelector("#box");
  var body = document.querySelector("body")

    burger.addEventListener("click", function (e) {
      this.classList.toggle("crossed")
    dropdown.classList.toggle("opened");
    box.classList.toggle("opened")
    body.classList.toggle("no-scroll")
  } )