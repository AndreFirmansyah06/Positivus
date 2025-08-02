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
