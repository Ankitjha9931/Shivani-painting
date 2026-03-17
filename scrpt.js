function openImage(src){
document.getElementById("imagePopup").style.display="flex";
document.getElementById("popupImg").src=src;
}

function closeImage(){
document.getElementById("imagePopup").style.display="none";
}

function searchPainting(){

let input = document.getElementById("searchInput").value.toLowerCase();

let paintings = document.querySelectorAll(".painting");

paintings.forEach(function(painting){

let title = painting.querySelector("h3").textContent.toLowerCase();

if(title.includes(input)){
painting.style.display = "";
}
else{
painting.style.display = "none";
}

});

}



function openForm(name, price){
document.getElementById("orderForm").style.display="block";

document.getElementById("paintingName").value=name;
document.getElementById("paintingPrice").value=price;
}

function closeForm(){
document.getElementById("orderForm").style.display="none";
}

function sendOrder(){

let name=document.getElementById("custName").value;
let phone=document.getElementById("custPhone").value;
let address=document.getElementById("custAddress").value;

let painting=document.getElementById("paintingName").value;
let price=document.getElementById("paintingPrice").value;

let ownerNumber="919931987719"; // apna number daalo

let message = `🖼️ New Order

Customer Name: ${name}
Phone: ${phone}
Address: ${address}

Painting: ${painting}
Price: ${price}`;

let url = "https://wa.me/" + ownerNumber + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
}

