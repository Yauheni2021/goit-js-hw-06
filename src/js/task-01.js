//1 часть Number of categories: 3

// const numberOfCategoriesEl = document.querySelectorAll(".item").length;
// console.log("Number of categories:", numberOfCategoriesEl);

//2 часть Category: Animals, Elements: 4 ; Category: Products , Elements: 3 ; Category: Technologies , Elements: 5

// console.log("Category:", document.querySelector("h2").textContent);

// console.log("Elements:", document.querySelector(".item").lastElementChild.children.length );

const numberOfCategories = document.querySelector("#categories").children;
console.log(`Number of categories: ${numberOfCategories.length}`);
 

const numberOfCategoriesEl = document.querySelectorAll(".item")
    .forEach((el) => console.log("Category: ", el.querySelector("h2").textContent),
console.log("Elements: ", document.querySelectorAll(".li").length)
)
// numberOfCategoriesEl.forEach((firstElementChild) => console.dir(firstElementChild.length) )


//    .forEach((el) => console.dir(el)


