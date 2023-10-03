let showBtn = document.getElementById("newBookBtn");
let formContainer = document.getElementById("formContainer");
let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookImg = document.getElementById("imageURL");
let Publish_date = document.getElementById("publishDate");
let btnAdd = document.getElementById("submitBooks");
let inputs = document.querySelectorAll("input");
let epmtyDiv = document.getElementById("empty");
const bookData = [];
let shelfCount = 1;

// function show form
showBtn.addEventListener("click", () => {
	formContainer.classList.toggle("show");
	if (formContainer.className.includes("show")) {
		showBtn.innerHTML = "Cancel";
	} else {
		showBtn.innerHTML = "NEW BOOK";
	}
});

// function add new data

const addBook = (e) => {
	e.preventDefault();
	if (bookTitle.value === "" || bookAuthor.value === "" || bookImg.value === "" || Publish_date.value === "") {
		alert("Please fill all fields");
		epmtyDiv.style.display = "block";
	} else {
		epmtyDiv.style.display = "none";
		renderData();
		console.log("true");
		bookTitle.value = "";
		bookAuthor.value = "";
		bookImg.value = "";
		Publish_date.value = "";
	}
};

const renderData = () => {
	let shelfId = "shelf" + shelfCount;
	let shelfElement = document.getElementById(shelfId);

	if (!shelfElement) {
		shelfElement = document.createElement("div");
		shelfElement.setAttribute("class", "shelf");
		shelfElement.setAttribute("id", shelfId);
		container.appendChild(shelfElement);
	}
	let bookCard = document.createElement("div");
	bookCard.setAttribute("class", "book-card");
	//
	let cardImg = document.createElement("div");
	cardImg.setAttribute("class", "card-img");
	//
	let cardBody = document.createElement("div");
	cardBody.setAttribute("class", "card-body");
	//
	let divTitle = document.createElement("div");
	divTitle.setAttribute("class", "div-title");
	//
	let divAuthor = document.createElement("div");
	divAuthor.setAttribute("class", "div-author");
	//
	let divDate = document.createElement("div");
	divDate.setAttribute("class", "div-date");
	//
	let titleLabel = document.createElement("p");
	titleLabel.setAttribute("class", "book-title");
	titleLabel.innerHTML = "Book title:";
	//
	let Title = document.createElement("span");
	let titleText = bookTitle.value.trim();
	Title.innerHTML = titleText;
	//
	let authorlable = document.createElement("p");
	authorlable.setAttribute("class", "book-author");
	authorlable.innerHTML = "Author:";
	//
	let author = document.createElement("span");
	let authorText = bookAuthor.value.trim();
	author.innerHTML = authorText;
	//
	let dateLabel = document.createElement("p");
	dateLabel.setAttribute("class", "book-title");
	dateLabel.innerHTML = "Publish date:";
	//
	let date = document.createElement("span");
	let dateText = Publish_date.value.trim();
	date.innerHTML = dateText;
	//
	let image = document.createElement("img");
	let imageValue = bookImg.value;
	image.src = imageValue;
	// Append child
	shelfElement.appendChild(bookCard);
	bookCard.appendChild(cardImg);
	bookCard.appendChild(cardBody);
	cardImg.appendChild(image);
	cardBody.appendChild(divTitle);
	cardBody.appendChild(divAuthor);
	cardBody.appendChild(divDate);
	divTitle.appendChild(titleLabel);
	divAuthor.appendChild(authorlable);
	divDate.appendChild(dateLabel);
	divTitle.appendChild(Title);
	divAuthor.appendChild(author);
	divDate.appendChild(date);
	const newData = {
		title: titleText,
		author: authorText,
		date: dateText,
		bookImg: imageValue,
	};
	bookData.push(newData);
	if (shelfElement.children.length % 3 === 0) {
		shelfCount++;
	}
	console.log(bookData);
};
btnAdd.addEventListener("click", addBook);
