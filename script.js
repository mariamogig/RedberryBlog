document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.getElementById("openPopupButton");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("popup");

    openPopupButton.addEventListener("click", function() {
        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});



//filter by categories

/*const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.blog-details');

for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item) {
    toggleActivePosition(item);

    const selectedCategories = Array.from(document.querySelectorAll('.category-title.active')).map(activeItem => activeItem.getAttribute('id'));

    for (let i = 0; i < allCategoryPosts.length; i++) {
        const postCategories = Array.from(allCategoryPosts[i].querySelectorAll('.button')).map(categoryButton => categoryButton.innerText.toLowerCase());
        const isVisible = selectedCategories.every(category => postCategories.includes(category));

        allCategoryPosts[i].style.display = isVisible ? 'block' : 'none';
    }
}

function toggleActivePosition(activeItem) {
    activeItem.classList.toggle('active');
}
*/

const gameData = [
    {
        id: 1,
        title: "მარიამ გიგაური",
        category: "მარკეტი",
        category2: "აპლიკაცია",
        category3: "ხელოვნური ინტელექტი",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_newhL3aprGk.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
    {
        id: 2,
        title: "მარიამ გიგაური",
        category: "აპლიკაცია",
        category2: "",
        category3: "",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_newhL3aprGk.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
    {
        id: 3,
        title: "მარიამ გიგაური",
        category: "ხელოვნური ინტელექტი",
        category2: "",
        category3: "",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_01_igFr7hd4.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
    {
        id: 4,
        title: "მარიამ გიგაური",
        category: "აპლიკაცია",
        category2: "",
        category3: "ხელოვნური ინტელექტი",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_lmCajireIn8.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
    {
        id: 5,
        title: "მარიამ გიგაური",
        category: "მარკეტი",
        category2: "",
        category3: "",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_newhL3aprGk.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
    {
        id: 6,
        title: "მარიამ გიგაური",
        category: "მარკეტი",
        category2: "",
        category3: "",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_lmCajireIn8.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
    {
        id: 7,
        title: "მარიამ გიგაური",
        category: "სპორტი",
        category2: "",
        category3: "ხელოვნური ინტელექტი",
        releaseDate: "Dec 19, 2014",
        img: "images/unsplash_01_igFr7hd4.png",
        text: "6 თვის შემდეგ ყველის რა დეგუსტაცია მოეწყო და იმერულმა გაიმარჯვა",
    },
];


const productContainer = document.querySelector(".blogs-container");
const ulEl = document.querySelector("ul");


// display all dynamic data
window.addEventListener("DOMContentLoaded", () => {
  displayGameData(gameData);
  //getting unique category
  const categories = gameData.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"],
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<li><a href="#" data-id="${category}">${category}</a></li>`;
    })
    .join("");
  ulEl.innerHTML = categoryBtns;
  // links
  const linksEl = document.querySelectorAll("li a");
  linksEl.forEach((links) => {
    links.addEventListener("click", (e) => {
      const category = e.target.dataset.id;
      const gameCategory = gameData.filter(function (data) {
        if (data.category === category) {
          return data;
        }
      });
      if (category === "All") {
        displayGameData(gameData);
      } else {
        displayGameData(gameCategory);
      }
    });
  });
});
// function display all games
function displayGameData(gamez) {
  let displayData = gamez.map(function (cat_items) {
    return `<div class="blog-details">
            <div class="pr_img">
              <img src="${cat_items.img}" alt="" />
            </div>
            <div class="content">
              <h3 class="title">${cat_items.title}</h3>
              <p class="release_date">${cat_items.releaseDate}</p>
              <div class="blog-categories">
            <div class="market">${cat_items.category}</div>
            <div class="ui_ux">${cat_items.category2}</div>
            <div class="app">${cat_items.category3}</div>
        </div>
        <P class="paragraph">${cat_items.text}</P>
        <div class="see-full-page">სრულად ნახვა</div>
            </div>
          </div>`;
  });
  displayData = displayData.join("");
  productContainer.innerHTML = displayData;
}
