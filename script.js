
let cart=[];
let total=0;

function addToCart(name,price){
cart.push({name,price});
total+=price;
document.getElementById("cart-count").innerText=cart.length;
}

function openCart(){
document.getElementById("cart").classList.remove("hidden");
let list=document.getElementById("cart-items");
list.innerHTML="";
cart.forEach(i=>{
let li=document.createElement("li");
li.innerText=i.name+" - "+i.price+" JD";
list.appendChild(li);
});
document.getElementById("total").innerText=total;
}

function closeCart(){
document.getElementById("cart").classList.add("hidden");
}
