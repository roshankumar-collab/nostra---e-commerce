// hide HeadOffer

var hideBtn = document.getElementById("hidebtn")
var hideHeading = document.getElementById("hideheading")
hideBtn.addEventListener("click", function () {
    hideHeading.style.display = "none"
})

//Side navbar
var sideNav = document.getElementById("sideNav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("close-nav")

menuicon.addEventListener("click", function () {
    sideNav.style.left = 0
})

closeNav.addEventListener("click", function () {
    sideNav.style.left = "-50%";
})

//Search Input
var search = document.getElementById("search")
var productContainer = document.getElementById("product-container")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enterValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count++) {
        if (productList[count].textContent.toUpperCase().indexOf(enterValue) < 0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }
    }
})

//CheckBox
var check = document.getElementsByName("check");
var productSection = document.getElementById("product-container");
var products = productSection.querySelectorAll(".p-2");

let types = [];

for (let count = 0; count < check.length; count++) {
    check[count].addEventListener("click", function (event) {
        const value = event.target.value;
        console.log(value)

        if (event.target.checked) {
            if (!types.includes(value)) {
                types.push(value);
            }
        } else {
            types = types.filter(type => type !== value);
        }

        products.forEach(function (product) {
            const tags = product.getAttribute("data-tags");

            if (types.length === 0) {
                product.style.display = "block";
            } else {
                const match = types.some(type => tags.includes(type));
                product.style.display = match ? "block" : "none";
            }
        });
    });
}