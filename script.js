/* ==================================================
   BOOK DATA
================================================== */

const books = [

    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        rating: 4.6,
        year: 1988,
        pages: 208,
        isbn: "9780062315007",
        mood: ["Relaxing", "Emotional"],
        description:
            "A young shepherd follows his dreams and travels across the world in search of treasure and purpose.",
        recommendation:
            "A good choice if you enjoy inspiring stories about dreams, courage and discovering yourself."
    },

    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        rating: 4.7,
        year: 2018,
        pages: 320,
        isbn: "9780735211292",
        mood: ["Learning"],
        description:
            "A practical guide to building good habits, breaking bad ones and making small changes that create remarkable results.",
        recommendation:
            "Recommended for readers interested in productivity and personal development."
    },

    {
        id: 3,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        rating: 4.8,
        year: 1997,
        pages: 320,
        isbn: "9780590353427",
        mood: ["Exciting", "Relaxing"],
        description:
            "Harry Potter discovers that he is a wizard and begins an unforgettable journey at Hogwarts.",
        recommendation:
            "Perfect for readers who love magic, friendship and adventure."
    },

    {
        id: 4,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Mystery",
        rating: 4.5,
        year: 2019,
        pages: 336,
        isbn: "9781250301697",
        mood: ["Exciting"],
        description:
            "A famous painter stops speaking after a shocking event, and a therapist becomes determined to discover the truth.",
        recommendation:
            "A strong pick if you enjoy psychological mysteries and unexpected twists."
    },

    {
        id: 5,
        title: "Dune",
        author: "Frank Herbert",
        genre: "Sci-Fi",
        rating: 4.7,
        year: 1965,
        pages: 688,
        isbn: "9780441172719",
        mood: ["Exciting", "Learning"],
        description:
            "A young nobleman becomes caught in a massive struggle involving politics, survival and the desert planet Arrakis.",
        recommendation:
            "Recommended for readers who enjoy science fiction, politics and adventure."
    },

    {
        id: 6,
        title: "Ikigai",
        author: "Hector Garcia",
        genre: "Self-Help",
        rating: 4.4,
        year: 2016,
        pages: 208,
        isbn: "9780143130727",
        mood: ["Relaxing", "Learning"],
        description:
            "An exploration of the Japanese concept of finding purpose and meaning in everyday life.",
        recommendation:
            "A good choice for readers interested in mindfulness and purpose."
    },

    {
        id: 7,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        rating: 4.3,
        year: 1813,
        pages: 432,
        isbn: "9780141439518",
        mood: ["Emotional", "Relaxing"],
        description:
            "Elizabeth Bennet navigates family, society and her complicated relationship with Mr. Darcy.",
        recommendation:
            "Great for readers who enjoy classic romance and witty dialogue."
    },

    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        rating: 4.6,
        year: 1937,
        pages: 310,
        isbn: "9780547928227",
        mood: ["Exciting", "Relaxing"],
        description:
            "Bilbo Baggins leaves his comfortable home and joins an adventure involving dragons, dwarves and treasure.",
        recommendation:
            "Recommended for readers looking for fantasy and adventure."
    },

    {
        id: 9,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        rating: 4.2,
        year: 1925,
        pages: 180,
        isbn: "9780743273565",
        mood: ["Emotional", "Relaxing"],
        description:
            "A mysterious millionaire throws extravagant parties while secretly pursuing a lost love.",
        recommendation:
            "A good choice for readers interested in classic literature and relationships."
    },

    {
        id: 10,
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Romance",
        rating: 4.5,
        year: 2012,
        pages: 336,
        isbn: "9780525478812",
        mood: ["Emotional"],
        description:
            "Two teenagers meet and form a meaningful relationship while dealing with difficult circumstances.",
        recommendation:
            "A touching choice for readers who enjoy emotional stories."
    },

    {
        id: 11,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Mystery",
        rating: 4.4,
        year: 2012,
        pages: 432,
        isbn: "9780553418361",
        mood: ["Exciting"],
        description:
            "A woman's disappearance turns into a complicated investigation where appearances can be misleading.",
        recommendation:
            "Ideal for readers who enjoy psychological suspense."
    },

    {
        id: 12,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Sci-Fi",
        rating: 4.6,
        year: 2008,
        pages: 374,
        isbn: "9780439023481",
        mood: ["Exciting"],
        description:
            "Katniss Everdeen is forced into a dangerous competition where survival becomes everything.",
        recommendation:
            "A great option for readers who enjoy dystopian worlds and action."
    },

    {
        id: 13,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "Self-Help",
        rating: 4.3,
        year: 1997,
        pages: 236,
        isbn: "9781577314806",
        mood: ["Relaxing", "Learning"],
        description:
            "A guide to living more consciously and focusing attention on the present moment.",
        recommendation:
            "Useful for readers interested in mindfulness."
    },

    {
        id: 14,
        title: "Little Women",
        author: "Louisa May Alcott",
        genre: "Fiction",
        rating: 4.4,
        year: 1868,
        pages: 449,
        isbn: "9780147514011",
        mood: ["Emotional", "Relaxing"],
        description:
            "Four sisters grow up together while navigating family, dreams and relationships.",
        recommendation:
            "A wonderful classic for readers who enjoy family stories."
    },

    {
        id: 15,
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "Romance",
        rating: 4.2,
        year: 1996,
        pages: 214,
        isbn: "9780446696717",
        mood: ["Emotional", "Relaxing"],
        description:
            "A story of love, memory and the lasting connection between two people.",
        recommendation:
            "A good pick for readers who enjoy emotional romance."
    },

    {
        id: 16,
        title: "And Then There Were None",
        author: "Agatha Christie",
        genre: "Mystery",
        rating: 4.5,
        year: 1939,
        pages: 272,
        isbn: "9780062073488",
        mood: ["Exciting"],
        description:
            "Ten strangers are brought to an isolated island where mysterious events begin to unfold.",
        recommendation:
            "Excellent for readers who enjoy classic detective mysteries."
    },

    {
        id: 17,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        rating: 4.8,
        year: 1954,
        pages: 1178,
        isbn: "9780544003415",
        mood: ["Exciting"],
        description:
            "A dangerous journey begins when a powerful ring must be destroyed before evil takes control.",
        recommendation:
            "A classic choice for readers who love epic fantasy."
    },

    {
        id: 18,
        title: "1984",
        author: "George Orwell",
        genre: "Sci-Fi",
        rating: 4.5,
        year: 1949,
        pages: 328,
        isbn: "9780451524935",
        mood: ["Learning"],
        description:
            "A dystopian society is controlled through surveillance, propaganda and manipulation.",
        recommendation:
            "Recommended for readers interested in dystopian fiction."
    },

    {
        id: 19,
        title: "Deep Work",
        author: "Cal Newport",
        genre: "Self-Help",
        rating: 4.4,
        year: 2016,
        pages: 304,
        isbn: "9781455586691",
        mood: ["Learning"],
        description:
            "A guide to improving concentration and producing valuable work without distraction.",
        recommendation:
            "Useful for students and anyone trying to improve focus."
    },

    {
        id: 20,
        title: "Me Before You",
        author: "Jojo Moyes",
        genre: "Romance",
        rating: 4.4,
        year: 2012,
        pages: 369,
        isbn: "9780143124542",
        mood: ["Emotional"],
        description:
            "An unexpected relationship changes the lives of two people in ways neither expected.",
        recommendation:
            "A good choice for emotional and character-driven romance."
    },

    {
        id: 21,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        rating: 4.3,
        year: 2003,
        pages: 489,
        isbn: "9780307474278",
        mood: ["Exciting", "Learning"],
        description:
            "A murder investigation leads to a mysterious trail of clues involving art and history.",
        recommendation:
            "Recommended for readers who enjoy fast-paced mysteries."
    },

    {
        id: 22,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "Fantasy",
        rating: 4.6,
        year: 2007,
        pages: 662,
        isbn: "9780756404741",
        mood: ["Exciting", "Relaxing"],
        description:
            "A legendary musician and magician tells the story of his extraordinary life.",
        recommendation:
            "Great for readers who enjoy detailed fantasy worlds."
    },

    {
        id: 23,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genre: "Sci-Fi",
        rating: 4.4,
        year: 1953,
        pages: 256,
        isbn: "9781451678187",
        mood: ["Learning"],
        description:
            "In a future society where books are forbidden, one firefighter begins questioning his world.",
        recommendation:
            "A thought-provoking choice for readers interested in dystopian science fiction."
    },

    {
        id: 24,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Self-Help",
        rating: 4.2,
        year: 1937,
        pages: 238,
        isbn: "9781585424337",
        mood: ["Learning"],
        description:
            "A classic personal-development book focused on mindset, goals and achievement.",
        recommendation:
            "Useful for readers interested in motivation and goal setting."
    },

    {
        id: 25,
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        genre: "Romance",
        rating: 4.4,
        year: 1847,
        pages: 532,
        isbn: "9780141441146",
        mood: ["Emotional", "Relaxing"],
        description:
            "Jane Eyre's journey through hardship, independence and love leads her toward a new life.",
        recommendation:
            "Recommended for readers who enjoy classic romance."
    },

    {
        id: 26,
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        genre: "Mystery",
        rating: 4.5,
        year: 1934,
        pages: 274,
        isbn: "9780062073501",
        mood: ["Exciting"],
        description:
            "Detective Hercule Poirot investigates a murder aboard a luxury train.",
        recommendation:
            "Perfect for readers who love detective stories and clever puzzles."
    },

    {
        id: 27,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        genre: "Fantasy",
        rating: 4.6,
        year: 1950,
        pages: 767,
        isbn: "9780064404990",
        mood: ["Exciting", "Relaxing"],
        description:
            "Children enter a magical world filled with talking animals and adventures.",
        recommendation:
            "A fun choice for fantasy readers of many ages."
    },

    {
        id: 28,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "Sci-Fi",
        rating: 4.7,
        year: 2021,
        pages: 496,
        isbn: "9780593135204",
        mood: ["Exciting", "Learning"],
        description:
            "A lone astronaut wakes up far from Earth with an impossible mission to save humanity.",
        recommendation:
            "Excellent for readers who enjoy science, space and problem-solving."
    },

    {
        id: 29,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        genre: "Self-Help",
        rating: 4.3,
        year: 1989,
        pages: 464,
        isbn: "9781982137274",
        mood: ["Learning"],
        description:
            "A framework for developing effective habits and improving personal and professional life.",
        recommendation:
            "Useful for students and professionals interested in self-improvement."
    },

    {
        id: 30,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "Fiction",
        rating: 4.4,
        year: 2020,
        pages: 304,
        isbn: "9780525559474",
        mood: ["Emotional", "Relaxing"],
        description:
            "A mysterious library gives a woman the chance to explore different versions of her life.",
        recommendation:
            "A thoughtful choice for readers who enjoy philosophical and emotional fiction."
    }

];



/* ==================================================
   VARIABLES
================================================== */

let selectedGenre = "";

let selectedMood = "";

let currentBooks = [...books];



/* ==================================================
   BOOK IMAGE
================================================== */

function getBookImage(isbn) {

    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

}



/* ==================================================
   FAVORITES
================================================== */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("bookFavorites")
    ) || [];

}



function toggleFavorite(id) {

    let favorites = getFavorites();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "bookFavorites",
        JSON.stringify(favorites)
    );


    displayBooks(
        currentBooks,
        "bookContainer"
    );


    displayFavorites();

}



/* ==================================================
   READING LIST
================================================== */

function getReadingList() {

    return JSON.parse(
        localStorage.getItem("bookReadingList")
    ) || [];

}



function toggleReadingList(id) {

    let readingList =
        getReadingList();


    if (readingList.includes(id)) {

        readingList =
            readingList.filter(
                item => item !== id
            );

    } else {

        readingList.push(id);

    }


    localStorage.setItem(
        "bookReadingList",
        JSON.stringify(readingList)
    );


    displayBooks(
        currentBooks,
        "bookContainer"
    );


    displayReadingList();

}



/* ==================================================
   CREATE BOOK CARD
================================================== */

function createBookCard(book) {

    const favorites =
        getFavorites();

    const readingList =
        getReadingList();


    const isFavorite =
        favorites.includes(book.id);

    const isReading =
        readingList.includes(book.id);


    return `

        <div class="book-card">

            <img
                class="book-image"
                src="${getBookImage(book.isbn)}"
                alt="${book.title}"

                onerror="
                    this.src='https://via.placeholder.com/300x450?text=Book+Cover'
                "
            >


            <div class="book-info">

                <h3 title="${book.title}">
                    ${book.title}
                </h3>


                <p class="author">
                    ${book.author}
                </p>


                <p class="rating">
                    ⭐ ${book.rating}/5
                </p>


                <span class="genre">
                    ${book.genre}
                </span>


                <div class="card-buttons">


                    <button
                        class="details-btn"
                        onclick="showBookDetails(${book.id})">

                        View Details

                    </button>


                    <button
                        class="favorite-btn"
                        title="Favorite"
                        onclick="toggleFavorite(${book.id})">

                        ${isFavorite ? "♥" : "♡"}

                    </button>


                    <button
                        class="reading-btn"
                        title="Reading List"
                        onclick="toggleReadingList(${book.id})">

                        ${isReading ? "✓" : "🔖"}

                    </button>


                </div>

            </div>

        </div>

    `;

}



/* ==================================================
   DISPLAY BOOKS
================================================== */

function displayBooks(bookList, containerId) {

    const container =
        document.getElementById(containerId);


    container.innerHTML = "";


    if (bookList.length === 0) {

        if (containerId === "bookContainer") {

            document.getElementById(
                "noResults"
            ).style.display = "block";

        }

        return;

    }


    if (containerId === "bookContainer") {

        document.getElementById(
            "noResults"
        ).style.display = "none";

    }


    bookList.forEach(book => {

        container.innerHTML +=
            createBookCard(book);

    });

}



/* ==================================================
   FEATURED BOOKS
================================================== */

function displayFeaturedBooks() {

    displayBooks(
        books.slice(0, 5),
        "featuredBooks"
    );

}



/* ==================================================
   SEARCH
================================================== */

function searchBooks() {

    const text =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    currentBooks =
        books.filter(book =>

            book.title
                .toLowerCase()
                .includes(text)

            ||

            book.author
                .toLowerCase()
                .includes(text)

            ||

            book.genre
                .toLowerCase()
                .includes(text)

        );


    displayBooks(
        currentBooks,
        "bookContainer"
    );


    document
        .getElementById("books")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ==================================================
   FILTER
================================================== */

function filterBooks(genre) {

    if (genre === "All") {

        currentBooks = [...books];

    } else {

        currentBooks =
            books.filter(
                book =>
                    book.genre === genre
            );

    }


    displayBooks(
        currentBooks,
        "bookContainer"
    );


    updateActiveFilter(genre);


    document
        .getElementById("books")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ==================================================
   ACTIVE FILTER
================================================== */

function updateActiveFilter(genre) {

    const buttons =
        document.querySelectorAll(
            ".filter-buttons button"
        );


    buttons.forEach(button => {

        button.classList.remove("active");


        if (
            button.innerText.trim() === genre
        ) {

            button.classList.add("active");

        }

    });

}



/* ==================================================
   SORT
================================================== */

function sortBooks() {

    const sort =
        document
            .getElementById("sortSelect")
            .value;


    let sorted =
        [...currentBooks];


    if (sort === "ratingHigh") {

        sorted.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    else if (sort === "ratingLow") {

        sorted.sort(
            (a, b) =>
                a.rating - b.rating
        );

    }


    else if (sort === "titleAZ") {

        sorted.sort(
            (a, b) =>
                a.title.localeCompare(b.title)
        );

    }


    else if (sort === "titleZA") {

        sorted.sort(
            (a, b) =>
                b.title.localeCompare(a.title)
        );

    }


    else if (sort === "newest") {

        sorted.sort(
            (a, b) =>
                b.year - a.year
        );

    }


    else if (sort === "oldest") {

        sorted.sort(
            (a, b) =>
                a.year - b.year
        );

    }


    currentBooks = sorted;


    displayBooks(
        currentBooks,
        "bookContainer"
    );

}



/* ==================================================
   BOOK DETAILS
================================================== */

function showBookDetails(id) {

    const book =
        books.find(
            item => item.id === id
        );


    const favorites =
        getFavorites();

    const readingList =
        getReadingList();


    const isFavorite =
        favorites.includes(id);

    const isReading =
        readingList.includes(id);


    const modal =
        document.getElementById(
            "bookModal"
        );


    const content =
        document.getElementById(
            "modalContent"
        );


    content.innerHTML = `

        <div class="modal-book">


            <img
                src="${getBookImage(book.isbn)}"
                alt="${book.title}"

                onerror="
                    this.src='https://via.placeholder.com/300x450?text=Book+Cover'
                "
            >


            <div>


                <p class="small-heading">
                    ${book.genre}
                </p>


                <h2>
                    ${book.title}
                </h2>


                <p>
                    By <strong>
                        ${book.author}
                    </strong>
                </p>


                <p class="rating">
                    ⭐ ${book.rating}/5
                </p>


                <p>
                    Published:
                    ${book.year}
                </p>


                <p>
                    Pages:
                    ${book.pages}
                </p>


                <p class="modal-description">
                    ${book.description}
                </p>


                <div class="recommend-box">

                    <strong>
                        💡 Why we recommend it
                    </strong>

                    <p>
                        ${book.recommendation}
                    </p>

                </div>


                <div class="modal-buttons">


                    <button
                        class="modal-action"
                        onclick="
                            toggleFavorite(${book.id});
                            showBookDetails(${book.id});
                        ">

                        ${isFavorite
                            ? "♥ Remove Favorite"
                            : "♡ Add Favorite"}

                    </button>


                    <button
                        class="modal-action"
                        onclick="
                            toggleReadingList(${book.id});
                            showBookDetails(${book.id});
                        ">

                        ${isReading
                            ? "✓ Remove Reading List"
                            : "🔖 Add to Reading List"}

                    </button>


                </div>


            </div>

        </div>

    `;


    modal.style.display = "flex";

}



/* ==================================================
   CLOSE MODAL
================================================== */

function closeModal() {

    document
        .getElementById("bookModal")
        .style.display = "none";

}



window.onclick = function(event) {

    const modal =
        document.getElementById(
            "bookModal"
        );


    if (event.target === modal) {

        closeModal();

    }

};



/* ==================================================
   DISPLAY FAVORITES
================================================== */

function displayFavorites() {

    const favoriteIds =
        getFavorites();


    const favoriteBooks =
        books.filter(
            book =>
                favoriteIds.includes(book.id)
        );


    const container =
        document.getElementById(
            "favoriteContainer"
        );


    const empty =
        document.getElementById(
            "emptyFavorites"
        );


    if (favoriteBooks.length === 0) {

        container.innerHTML = "";

        empty.style.display = "block";

    } else {

        empty.style.display = "none";

        displayBooks(
            favoriteBooks,
            "favoriteContainer"
        );

    }

}



/* ==================================================
   DISPLAY READING LIST
================================================== */

function displayReadingList() {

    const ids =
        getReadingList();


    const readingBooks =
        books.filter(
            book =>
                ids.includes(book.id)
        );


    const container =
        document.getElementById(
            "readingContainer"
        );


    const empty =
        document.getElementById(
            "emptyReading"
        );


    if (readingBooks.length === 0) {

        container.innerHTML = "";

        empty.style.display = "block";

    } else {

        empty.style.display = "none";

        displayBooks(
            readingBooks,
            "readingContainer"
        );

    }

}



/* ==================================================
   QUIZ - SELECT GENRE
================================================== */

function selectGenre(button) {

    document
        .querySelectorAll(".genre-option")
        .forEach(
            item =>
                item.classList.remove("selected")
        );


    button.classList.add("selected");


    selectedGenre =
        button.dataset.value;

}



/* ==================================================
   QUIZ - SELECT MOOD
================================================== */

function selectMood(button) {

    document
        .querySelectorAll(".mood-option")
        .forEach(
            item =>
                item.classList.remove("selected")
        );


    button.classList.add("selected");


    selectedMood =
        button.dataset.value;

}



/* ==================================================
   GET RECOMMENDATIONS
================================================== */

function getRecommendations() {

    const result =
        document.getElementById(
            "recommendationResults"
        );


    if (
        selectedGenre === "" ||
        selectedMood === ""
    ) {

        result.innerHTML = `

            <p style="text-align:center;color:#d9534f;">

                Please select both a genre
                and a mood.

            </p>

        `;

        return;

    }


    let recommended =
        books
            .filter(
                book =>
                    book.genre === selectedGenre
            )
            .map(book => {

                let score = book.rating;


                if (
                    book.mood.includes(
                        selectedMood
                    )
                ) {

                    score += 1;

                }


                return {
                    book: book,
                    score: score
                };

            })
            .sort(
                (a, b) =>
                    b.score - a.score
            )
            .slice(0, 3)
            .map(
                item =>
                    item.book
            );


    result.innerHTML = `

        <h3>
            🎯 Recommended for You
        </h3>

        <div class="book-grid">

            ${recommended
                .map(
                    book =>
                        createBookCard(book)
                )
                .join("")}

        </div>

    `;

}



/* ==================================================
   DARK MODE
================================================== */

function toggleDarkMode() {

    document
        .body
        .classList
        .toggle("dark");


    const dark =
        document
            .body
            .classList
            .contains("dark");


    localStorage.setItem(
        "darkMode",
        dark
    );

}



/* ==================================================
   LOAD DARK MODE
================================================== */

function loadDarkMode() {

    const dark =
        localStorage.getItem(
            "darkMode"
        );


    if (dark === "true") {

        document
            .body
            .classList
            .add("dark");

    }

}



/* ==================================================
   INITIALIZE WEBSITE
================================================== */

displayFeaturedBooks();

displayBooks(
    currentBooks,
    "bookContainer"
);

displayFavorites();

displayReadingList();

loadDarkMode();