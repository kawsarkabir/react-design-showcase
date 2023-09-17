// category data load
let videos;
let isSorting = false;
const handleCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  const categories = data.data;
  displayCategories(categories);
};

// display category
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((singleCategories) => {
    const div = document.createElement("div");
    div.innerHTML = ` 
        <button onclick="singleCategoryLoad('${singleCategories.category_id}')" class="py-2 px-6 bg-gray-100 rounded-lg focus:bg-red-500 focus:text-white">${singleCategories.category}</button>
        `;
    categoriesContainer.appendChild(div);
  });
};

// single category data load
const singleCategoryLoad = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const categoryItem = data.data;
  videos = categoryItem;
  displaySingleCategory();
};
let totalViews = (value) => {
  let num = value.split("K")[0];
  let thousand = parseInt(num.split(".")[0]) * 1000;
  let hundred = parseInt(num.split(".")[1]) * 100;
  if (!hundred) {
    hundred = 0;
  }
  let totalViews = thousand + hundred;
  return totalViews;
};
// display single category
const displaySingleCategory = () => {
  const singleCategoryContainer = document.getElementById(
    "single-category-container"
  );
  singleCategoryContainer.textContent = "";

  //   no data found
  const notDataFound = document.getElementById("no-data-found");
  if (videos.length === 0) {
    notDataFound.classList.remove("hidden");
  } else {
    notDataFound.classList.add("hidden");
  }

  // sorting
  if (isSorting) {
    let sortItem = videos.sort((a, b) => {
      let first = totalViews(a.others.views);
      let second = totalViews(b.others.views);
      if (first > second) {
        return 1;
      } else {
        return -1;
      }
    });
    videos = sortItem.reverse();
  }
  //   categoryItem looping
  videos.forEach((singleCategory) => {
    // convert second to hours munite
    const totalSeconds = singleCategory.others.posted_date;
    const hours = Math.floor(totalSeconds / 3600); // 3600 seconds in an hour
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card">
        <div>
        <figure><img src="${
          singleCategory.thumbnail
        }" alt="Shoes" class="rounded-xl w-[330px] h-52" />
        </figure>
        <span class ="relative text-white left-44 bottom-8 rounded-md bg-[#000]  ">${`${
          hours ? hours + "hrs" : ""
        } ${minutes ? minutes + "min ago" : ""}`}</span>
        </div>
        <div class="card-body flex-row gap-x-5">
        <div>
            <img class="w-10 h-10 rounded-full" src="${
              singleCategory.authors[0].profile_picture
            }">
        </div>
        <div>
            <h3 class ="text-xl font-semibold">${singleCategory.title}</h3>
            <div class="flex items-center gap-x-2">
                 <h4 class="text-gray-500 text-base">${
                   singleCategory.authors[0].profile_name
                 }</h4>
                 <h4>${
                   singleCategory.authors[0].verified
                     ? `<i class="text-blue-500 fa-solid fa-certificate"></i>`
                     : ``
                 }</h4>
            </div>
            <h4 class ="text-gray-400">${singleCategory.others.views} views</h4>
        </div>
        </div>
        </div>
        `;
    singleCategoryContainer.appendChild(div);
  });
};
// sort by card
const sortByView = () => {
  isSorting = true;
  displaySingleCategory();
};

handleCategories();
singleCategoryLoad("1000");

// handleBlog btn clic then redirect another page
const handleBlog = () => {
  location.href = "blog.html";
};
