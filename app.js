/* Created by Tivotal */

let navList = document.querySelectorAll(".link-item");
let indicator = document.querySelector(".indicator");

//looping throught all items
navList.forEach((navItem, index) => {
  //click event listener for each item
  navItem.addEventListener("click", () => {
    //getting item which has active class and removing class from it
    document.querySelector(".active").classList.remove("active");

    //adding active class to clicked item
    navItem.classList.add("active");

    //moving indicator towards active item
    indicator.style.left = `${index * 95 + 48}px`;
  });
});
