//time
setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  var time = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("time").innerHTML = time;
}, 1000);

//shopping cart
let cartCount = 0;
const maxCartCount = 10;

function updateCartCount() {
  document.getElementById("cart-count").innerHTML = cartCount;
}

function addItemToCart() {
  if (cartCount < maxCartCount) {
    cartCount++;
    updateCartCount();
  } else {
    alert("Cart is full!");
  }
}

function removeItemFromCart() {
  if (cartCount > 0) {
    cartCount--;
    updateCartCount();
  }
}

//form
function sendMail() {
  var params = {
    from_name : document.getElementById("fullName").Value,
    email_id : document.getElementById("email_id").Value,
    message : document.getElementById("message").Value,
  }
  emailjs.send("service_9cdx5co","template_lkzosrj",params).then(function (res) {
    alert("success! " + res.status);
  })
}
