document.addEventListener("DOMContentLoaded", () => {
    const clic = document.querySelector("#clic");
    const hi = document.querySelector("#hi");
    const gif = document.querySelector("#gif");
    const text = document.querySelector("#text p");

    clic.addEventListener("click", () => {
        gif.src = "resources/im-lazy-cute.gif"; // second gif
        text.innerHTML = "hi billy (with one l) 😘 ";
        clic.style.display = "none";             // hide first button
        hi.style.display = "inline-block";       // show second
    });

    hi.addEventListener("click", () => {
        gif.src = "resources/peach-goma.gif";    // final gif
  text.innerHTML = "happy birthdayy~";
        hi.style.display = "none";               // hide second
    });
});

