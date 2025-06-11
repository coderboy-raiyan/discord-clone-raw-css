const serverComponent = document.querySelectorAll(".server");

serverComponent.forEach((node) => {
  node.addEventListener("click", (e) => {
    e.stopPropagation();
    const activeComp = [...serverComponent];
    for (let i = 0; i < activeComp.length; i++) {
      const element = activeComp[i];
      if ([...element.classList].includes("active")) {
        element.classList.remove("active");
        break;
      }
    }

    if (e.target.tagName === "IMG") {
      e.target.parentNode.classList.add("active");
    } else {
      e.target.classList.add("active");
    }
  });
});
