// Active button dark mode
document.getElementById("check").onchange = () => {
  const checkBox = document.getElementById("checkbox");
  if (checkBox.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};
