let rates = { USD: 0.012, EUR: 0.011, GBP: 0.010 };

function changeCurrency() {
  let currency = document.getElementById("currency").value;
  document.querySelectorAll(".price").forEach(p => {
    let inr = p.dataset.inr;
    if(currency=="INR") p.innerHTML="₹"+inr;
    else p.innerHTML = (inr * rates[currency]).toFixed(2)+" "+currency;
  });
}

function chat() {
  let q = document.getElementById("chatInput").value.toLowerCase();
  let res = "Please contact support";
  if(q.includes("price")) res="All prices are listed above.";
  if(q.includes("contact")) res="Email: abc@gmail.com | WhatsApp: 9876543210";
  document.getElementById("chatOutput").innerText = res;
}

function sendMessage() {
  let name = document.getElementById("name").value;
  let msg = document.getElementById("message").value;
  alert("Message Sent! Admin will be notified.");
  window.open("https://wa.me/919876543210?text=New%20Contact:%20"+name+"%20-"+msg);
}
