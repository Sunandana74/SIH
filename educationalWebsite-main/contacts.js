const button = document.getElementById("submit");

if (button) {
  button.addEventListener("click", function () {
    var name = prompt("Enter name:");
    let mails = prompt("Enter Mail:");
    let message=prompt("Enter Message:")

    var out = document.getElementById("submit");
    out.innerHTML = "You have entered<br>Name: " + name + "<br>Mail: " + mails+ "<br> Message: "+message+ "<br>Thank you, Your message has been sent";
  });
}