(function () {
  function styleTables() {
    if (typeof document === "undefined") return
    document.querySelectorAll("table").forEach((table) => {
      const hasImg = table.querySelector("img") !== null
      if (hasImg || table.classList.contains("figure-table") || table.classList.contains("figure")) {
        table.style.border = "none"
        table.querySelectorAll("th, td").forEach((cell) => {
          cell.style.border = "none"
          cell.style.textAlign = "center"
        })
      }
    })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", styleTables)
  } else {
    styleTables()
  }
})()
