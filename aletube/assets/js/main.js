// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK-dzBJ9sIwgQJ7iR0Kh_MvOLy7i-F3O0",
  authDomain: "blog-ad58e.firebaseapp.com",
  databaseURL: "https://blog-ad58e-default-rtdb.firebaseio.com",
  projectId: "blog-ad58e",
  storageBucket: "blog-ad58e.appspot.com",
  messagingSenderId: "921348005047",
  appId: "1:921348005047:web:2d9797dae380482aa40132",
  measurementId: "G-WRESM9JHSG"
};
firebase.initializeApp(firebaseConfig);

function getPosts() {
  const loadingSpinner = document.getElementById('loading');
  loadingSpinner.style.display = 'block';

  firebase.database().ref('blogs/').once('value').then(function(snapshot) {
      loadingSpinner.style.display = 'none';
      const posts_div = document.getElementById('posts');
      posts_div.innerHTML = "";
      const data = snapshot.val();
      for (let [key, value] of Object.entries(data)) {
          posts_div.innerHTML += `
              <div class='col-sm-4 mt-2 mb-1'>
                  <div class='card'>
                      <img src='${value.imageURLs[0]}' style='height:250px;'>
                      <div class='card-body'>
                          <div class='card-content'>
                              <h5 class='card-title'>${value.title}</h5>
                              <p class='card-text'><i class="ri-money-dollar-circle-line"></i> ${value.amount}ETB</p>
                              <a class='card-link' onclick='viewDetails("${key}")'>View Details <i class="ri-search-line"></i></a>
                          </div>
                      </div>
                  </div>
              </div>`;
      }
  });
}

function filterPosts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const posts_div = document.getElementById('posts');
  const posts = posts_div.getElementsByClassName('col-sm-4');

  Array.from(posts).forEach(function(post) {
      const title = post.querySelector('.card-title').innerText.toLowerCase();
      if (title.indexOf(searchInput) > -1) {
          post.style.display = "";
      } else {
          post.style.display = "none";
      }
  });
}

function viewDetails(key) {
  window.location.href = `details.html?key=${key}`;
}

window.onload = function() {
  getPosts();
}















    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }
 


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})

  
 




/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)
  

  


  








