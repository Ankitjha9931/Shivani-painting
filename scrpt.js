function openImage(src){
document.getElementById("imagePopup").style.display="flex";
document.getElementById("popupImg").src=src;
}

function closeImage(){
document.getElementById("imagePopup").style.display="none";
}

/* SEARCH */
function searchPainting(){
let input=document.getElementById("searchInput").value.toLowerCase();
let items=document.querySelectorAll(".painting");

items.forEach(item=>{
let title=item.querySelector("h3").textContent.toLowerCase();
item.style.display = title.includes(input) ? "" : "none";
});
}

/* OPEN RIGHT PANEL */
function openForm(name,price){
let form=document.getElementById("orderForm");

form.style.transform="translateX(0)"; // slide in

document.getElementById("paintingName").value=name;
document.getElementById("paintingPrice").value=price;
}

/* CLOSE PANEL */
function closeForm(){
let form=document.getElementById("orderForm");
form.style.transform="translateX(100%)"; // slide out
}

/* SEND ORDER */
function sendOrder(){
let name=document.getElementById("custName").value;
let phone=document.getElementById("custPhone").value;
let address=document.getElementById("custAddress").value;

let painting=document.getElementById("paintingName").value;
let price=document.getElementById("paintingPrice").value;

let ownerNumber="916200056629";

let message=`🛒 Order Details

Name: ${name}
Phone: ${phone}
Address: ${address}

Painting: ${painting}
Price: ${price}`;

let url="https://wa.me/"+ownerNumber+"?text="+encodeURIComponent(message);

window.open(url,"_blank");
}
