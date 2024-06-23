
function removeBook() {
    if (confirm("Are you sure you want to remove the last book?")) {
        let ul = document.getElementById("book-list");
        let liElements = ul.getElementsByTagName("li");
        if (liElements.length > 0) {
            ul.removeChild(liElements[liElements.length - 1]);
        }
    }
}
function clearHighlights() {
    let ul = document.getElementById("book-list");
    let liElements = ul.getElementsByTagName("li");

    for (let li of liElements) {
        li.style.backgroundColor = "";
    }
}
document.getElementById("book-list").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        event.target.classList.toggle("favorite");
    }
});

function addBook() {
    let bookTitle = prompt("Enter the book title:");
    if (bookTitle) {
        let ul = document.getElementById("book-list");
        let li = document.createElement("li");
        li.textContent = bookTitle;
        ul.appendChild(li);
    }  
}
function searchBook() {
    let searchTerm = document.getElementById("searchbar").value.toLowerCase();
    let ul = document.getElementById("book-list");
    let liElements = ul.getElementsByTagName("li");

    for (let li of liElements) {
        if (li.textContent.toLowerCase().includes(searchTerm)) {
            li.style.backgroundColor = "White";
        } else {
            li.style.backgroundColor = "";
        }
    }
}
