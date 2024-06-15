// Variable declaration for DOM elements
let menutoogle = document.querySelector(".mark-icon");
let sidebar = document.querySelector(".Sidebar");
let sidelist = document.querySelector(".Sidebar ul");
let menulist = document.querySelectorAll(".menubar li")
let sublist = document.querySelectorAll(".Sub-menulist")
let image = document.querySelector(".mark-icon img");

let menu = document.querySelector("#menu-image");
let cross = document.querySelector("#cross-image");

// Function to toggle the sidebar visibility
function showSidebar() {
    menutoogle.classList.toggle("active");
    sidebar.classList.toggle("active");
    sidelist.classList.toggle("active");
}

// Event listener for 'menu' icon click
menu.addEventListener("click", () => {
    // Hide the 'menu' icon and show the 'cross' icon
    menu.setAttribute("style", "visibility:hidden");
    cross.setAttribute("style", "visibility:visible");
})

// Event listener for 'cross' icon click
cross.addEventListener("click", () => {
    // Show the 'menu' icon and hide the 'cross' icon
    cross.setAttribute("style", "visibility:hidden");
    menu.removeAttribute("style", "visibility:hidden");
})

// Function to activate link and deactivate others
function activeLink() {
    menulist.forEach((item) => {
        // Remove 'active' class from all menu items
        item.classList.remove("active");
        // Add 'active' class to the clicked menu item
        this.classList.add("active");
        // Remove 'active' class from all sub-menu items
        sublist.forEach((sub_item) => {
            sub_item.classList.remove("active");
        })
    })
}

// Attach event listeners to each menu list item
    menulist.forEach((item) => {
    item.addEventListener("click", activeLink);
})


// Set element visibility
const setVisibility = (element, isVisible) => element.style.visibility = isVisible ? 'visible' : 'hidden';


// Toggle sub-menu display
const toggleSubMenu = (subMenu, arrows, isDisplaying) => {
    setVisibility(arrows.down, !isDisplaying);
    setVisibility(arrows.up, isDisplaying);
    subMenu.style.display = isDisplaying ? 'block' : 'none';
};


document.addEventListener('DOMContentLoaded', () => {
    [{ 
        down: '#down1', 
        up: '#up1', 
        subMenu: '#submenu1'
    }, { 
        down: '#down2', 
        up: '#up2', 
        subMenu: '#submenu2'
    }].forEach(({ down, up, subMenu }) => {
        const downArrow = document.querySelector(down);
        const upArrow = document.querySelector(up);
        const subMenuElement = document.querySelector(subMenu);

        console.log("okkk")

        downArrow.addEventListener('click', () => toggleSubMenu(subMenuElement, { down: downArrow, up: upArrow }, true));
        upArrow.addEventListener('click', () => toggleSubMenu(subMenuElement, { down: downArrow, up: upArrow }, false));
    });
});

   