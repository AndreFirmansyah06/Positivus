function showMenu() {
  const nav = document.getElementById("responsive-navbar");

  if (nav.classList.contains("w-0")) {
    nav.classList.remove("w-0");
    nav.classList.add("w-full", "md:w-[50%");
    nav.classList.remove("opacity-0");
    nav.classList.add("opacity-100");
  } else {
    nav.classList.add("w-0");
    nav.classList.remove("w-full", "md:w-[50%");
    nav.classList.add("opacity-0");
    nav.classList.remove("opacity-100");
  }

  const wrapper = document.getElementById("bg-blur");
  wrapper.classList.toggle("blur-sm");
}

function showDetail(click) {
  const detail = click.parentElement.nextElementSibling;

  if (detail.classList.contains("max-h-0")) {
    detail.classList.remove("max-h-0");
    detail.classList.add("max-h-50");
    detail.classList.add("border-t-2");
    detail.classList.add("py-10");
  } else {
    detail.classList.add("max-h-0");
    detail.classList.remove("max-h-50");
    detail.classList.remove("border-t-2");
    detail.classList.remove("py-10");
  }

  const wrapper = click.closest(".card-item");
  if (wrapper.classList.contains("bg-[#F3F3F3]")) {
    wrapper.classList.remove("bg-[#F3F3F3]");
    wrapper.classList.add("bg-[#B9FF66]");
  } else {
    wrapper.classList.add("bg-[#F3F3F3]");
    wrapper.classList.remove("bg-[#B9FF66]");
  }

  const button = click.querySelector("i");

  if (button.classList.contains("bx-plus")) {
    button.classList.remove("bx-plus");
    button.classList.add("bx-minus");
  } else {
    button.classList.add("bx-plus");
    button.classList.remove("bx-minus");
  }
}

function showNavbar() {
  const nav = document.getElementById("responsive-header");

  // if (nav.classList.contains("w-0")) {
  //   nav.classList.remove("w-0");
  //   nav.classList.add("w-full", "md:w-[50%");
  //   nav.classList.remove("opacity-0");
  //   nav.classList.add("opacity-100");
  // } else {
  //   nav.classList.add("w-0");
  //   nav.classList.remove("w-full", "md:w-[50%");
  //   nav.classList.add("opacity-0");
  //   nav.classList.remove("opacity-100");
  // }

  nav.classList.toggle("w-0");
  nav.classList.toggle("w-full");
  nav.classList.toggle("md:w-[50%]");

  const wrapper = document.getElementById("main-content");
  wrapper.classList.toggle("blur-xs");
}
