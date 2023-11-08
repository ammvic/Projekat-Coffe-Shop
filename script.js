let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
}

let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
	cartItem.classList.remove('active');
}

let cartItem=document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
	cartItem.classList.toggle('active');
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
}

window.onscroll= () =>{
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
}

function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
         }
      }
   }
}

function provera() {
  var imeiprezime = document.getElementById("ime_i_prezime").value;
  var email = document.getElementById("email").value;
  var broj = document.getElementById("number").value;

  var uzorakImeiPrezime = /^([A-Z][a-z]+){1}\s([A-Z][a-z]+){1}(-[A-Z][a-z]+){1}$/;
  var uzorakEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var uzorakBroj = /^\d{3}\/\d{3}-\d{2}-\d{2}$|^\d{3}\/\d{3}-\d{3}$/;

  var imeiprezimeObavestenje = document.getElementById("ime_i_prezime_obavestenje");
  var emailObavestenje = document.getElementById("email_obavestenje");
  var brojObavestenje = document.getElementById("number_obavestenje");

  imeiprezimeObavestenje.textContent = "";
  emailObavestenje.textContent = "";
  brojObavestenje.textContent = "";

  var validno = true;

  if (!uzorakImeiPrezime.test(imeiprezime)) {
    imeiprezimeObavestenje.textContent = "Ime i prezime treba da budu u formatu 'Ime Prezime'!";
    validno = false;
  }

  if (!uzorakEmail.test(email)) {
    emailObavestenje.textContent = "Proverite unos email adrese!";
    validno = false;
  }

  if (!uzorakBroj.test(broj)) {
    brojObavestenje.textContent = "Broj telefona treba da bude u formatu 'xxx/xxx-xx-xx' ili 'xxx/xxx-xxx'!";
    validno = false;
  }

  return validno;
}







const cartItemsContainer = document.getElementById("korpa-container");

function dodajProizvodUKorpu(naziv, cena) {
  const proizvod = document.createElement("box");
  proizvod.classList.add("cart-item");
  proizvod.innerHTML = `
    <div class="item-info">
      <span class="naziv">${naziv}</span>
      <span class="cena">${cena}</span>
    </div>
    <button class="btn-obrisi" onclick="obrisiProizvod(this)">Obriši</button>
  `;
  cartItemsContainer.appendChild(proizvod);
}


function obrisiProizvod(btn) {
  const proizvod = btn.closest(".cart-item");
  proizvod.remove();
}


dodajProizvodUKorpu("Sveža kafa", "$15.99");
const btnObrisi = document.querySelector(".btn-obrisi");
obrisiProizvod(btnObrisi);
