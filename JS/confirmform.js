// Får tak i alle innvolverte elementer
const contact = document.getElementById("contact")
const newsletter = document.getElementById("newsletter")
const closebutton1 = document.getElementById("closebutton1")
const closebutton2 = document.getElementById("closebutton2")

const contactconfirmscreen = document.getElementById("contactconfirmscreen")
const newsletterconfirmscreen = document.getElementById("newsletterconfirmscreen")

var nameout = document.getElementById("nameout")
var emailout = document.getElementById("emailout")

// Sjekker når kontakt oss-formen sendes, og viser contactconfirmscreen
contact.addEventListener("submit", function(event) {
  event.preventDefault()
  var contactname = document.getElementById("contactname").value
  nameout.innerText = contactname
  contactconfirmscreen.style.display = "block"
})

// Sjekker når nyhetsbrev-formen sendes, og viser newsletterconfirmscreen
newsletter.addEventListener("submit", function(event) {
  event.preventDefault()
  newsletterconfirmscreen.style.display = "block"
  var newsletteremail = document.getElementById("newsletteremail").value
  emailout.innerText = newsletteremail
})

// Lukker contactconfirmscreen
closebutton1.addEventListener("click", function() {
  contact.reset()
  contactconfirmscreen.style.animation = ""
  contactconfirmscreen.style.animation = "fadeout 0.3s"
  setTimeout(function() {
    contactconfirmscreen.style.display = "none"
    contactconfirmscreen.style.animation = ""
  }, 250)
})

// Lukker newsletterconfirmscreen
closebutton2.addEventListener("click", function() {
  newsletter.reset()
  newsletterconfirmscreen.style.animation = ""
  newsletterconfirmscreen.style.animation = "fadeout 0.3s"
  setTimeout(function() {
    newsletterconfirmscreen.style.display = "none"
    newsletterconfirmscreen.style.animation = ""
  }, 250)
})
