const pixButton = document.getElementById("pixKey")
const copied = document.getElementById("pixCopied")

pixButton.addEventListener("click", () => {
  navigator.clipboard.writeText("mercadopeggo@gmail.com").then(() => {
    copied.style.display = "block"
    setTimeout(() => {
      copied.style.display = "none"
    }, 2000)
  })
})
