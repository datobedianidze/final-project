function openMenu(event, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
     tablinks[i].classList.remove("active-tab");
  }
  
  document.getElementById(menuName).style.display = "block";
  event.currentTarget.classList.add("active-tab");
}

document.getElementById("mainLink").click();

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    form.addEventListener("submit", function (e) {
      let valid = true;

      const name = document.getElementById("name");
      if (!name.value.trim()) {
        name.classList.add("is-invalid");
        valid = false;
      } else {
        name.classList.remove("is-invalid");
      }

      const email = document.getElementById("email");
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add("is-invalid");
        valid = false;
      } else {
        email.classList.remove("is-invalid");
      }

      const password = document.getElementById("password");
      if (!password.value.trim()) {
        password.classList.add("is-invalid");
        valid = false;
      } else {
        password.classList.remove("is-invalid");
      }

      const people = document.getElementById("people");
      if (!people.value.trim()) {
        people.classList.add("is-invalid");
        valid = false;
      } else {
        people.classList.remove("is-invalid");
      }

      const datetime = document.getElementById("date");
      if (!datetime.value.trim()) {
        datetime.classList.add("is-invalid");
        valid = false;
      } else {
        datetime.classList.remove("is-invalid");
      }

      if (!valid) {
        e.preventDefault();
      }
    });

    const showPasswordCheckbox = document.getElementById("showPassword");
    const passwordInput = document.getElementById("password");
    showPasswordCheckbox.addEventListener("change", function () {
      passwordInput.type = this.checked ? "text" : "password";
    });
  });

  function toggleNavbar() {
  const nav = document.getElementById("navbarMenu");
  nav.classList.toggle("show");
}

async function fetchCocktails() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    if (!response.ok) throw new Error('Network error');

    const data = await response.json();
    const cocktails = data.drinks.slice(0, 6);
    const cocktailList = document.getElementById('cocktail-list');

    cocktailList.innerHTML = cocktails.map(cocktail => `
      <div class="col-md-4 col-sm-6 mb-4">
        <div class="card h-100">
          <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="${cocktail.strDrink}" style="height: 200px; object-fit: cover;">
          <div class="card-body text-center">
            <h5 class="card-title">${cocktail.strDrink}</h5>
          </div>
        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error('Error fetching cocktails:', error);
    document.getElementById('cocktail-list').innerHTML = `<p class="text-danger">Error loading cocktails. Please try again later.</p>`;
  }
}

// Cookie 
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

function acceptCookies() {
  setCookie("cookiesAccepted", "true", 30);
  document.getElementById("cookieBanner").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function() {
  const cookiesAccepted = getCookie("cookiesAccepted");
  if (cookiesAccepted === "true") {
    document.getElementById("cookieBanner").style.display = "none";
  } else {
    document.getElementById("cookieBanner").style.display = "block";
  }
});