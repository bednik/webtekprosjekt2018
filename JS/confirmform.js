const contact = document.getElementById("contact")
const newsletter = document.getElementById("newsletter")
const closebutton1 = document.getElementById("closebutton1")
const closebutton2 = document.getElementById("closebutton2")

const contactconfirmscreen = document.getElementById("contactconfirmscreen")
const newsletterconfirmscreen = document.getElementById("newsletterconfirmscreen")

var nameout = document.getElementById("nameout")
var emailout = document.getElementById("emailout")

contact.addEventListener("submit", function(event) {
  event.preventDefault()
  var contactname = document.getElementById("contactname").value
  nameout.innerText = contactname
  contactconfirmscreen.style.display = "block"
})

newsletter.addEventListener("submit", function(event) {
  event.preventDefault()
  newsletterconfirmscreen.style.display = "block"
  var newsletteremail = document.getElementById("newsletteremail").value
  emailout.innerText = newsletteremail
})

// Close contact confirm page
closebutton1.addEventListener("click", function() {
  contact.reset()
  contactconfirmscreen.style.animation = ""
  contactconfirmscreen.style.animation = "fadeout 0.3s"
  setTimeout(function() {
    contactconfirmscreen.style.display = "none"
    contactconfirmscreen.style.animation = ""
  }, 250)
})

// Close newsletter confirm page
closebutton2.addEventListener("click", function() {
  newsletter.reset()
  newsletterconfirmscreen.style.animation = ""
  newsletterconfirmscreen.style.animation = "fadeout 0.3s"
  setTimeout(function() {
    newsletterconfirmscreen.style.display = "none"
    newsletterconfirmscreen.style.animation = ""
  }, 250)
})
