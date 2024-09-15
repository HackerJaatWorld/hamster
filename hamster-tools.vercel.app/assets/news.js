// Function to fetch the news data from an external file (news.json)


function show_new(){
    document.getElementById('news-box').classList.toggle('show-active');
    document.getElementById('show-new').classList.toggle('new-close');
}


async function fetchNewsData() {
    try {
        const response = await fetch('assets/news.json'); // Adjust the path as needed
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newsData = await response.json();
        return newsData.reverse();
    } catch (error) {
        console.error('Error fetching news data:', error);
        return [];
    }

}

// Function to calculate days left from the listing date
function calculateDaysLeft(listingDate) {
    const currentDate = new Date();
    const targetDate = new Date(listingDate);
    const differenceInTime = targetDate - currentDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays > 0 ? differenceInDays : 0;
}

// Function to create the news item
function createNewsItem(news) {
    const newsBox = document.querySelector('.news-box');

    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    // News Image
    const img = document.createElement('img');
    img.src = news.img;
    img.alt = news.name;

    // Name
    const name = document.createElement('h3');
    name.textContent = news.name;

    

    // Listing Date
    const listingDate = document.createElement('p');
    const date = new Date(news.listingDate);
    const time = news.listingTime;
    listingDate.textContent = `Listing: ${date.toLocaleDateString()} ` + time;

    // Time Left (Auto-updated)
    const timeLeft = document.createElement('p');
    timeLeft.textContent = `Left: ${calculateDaysLeft(news.listingDate)} D`;

    // Update the days left every minute
    setInterval(() => {
        timeLeft.textContent = `Left: ${calculateDaysLeft(news.listingDate)} days`;
    }, 60000);

    // Open Button
    const openButton = document.createElement('a');
    openButton.classList.add('open-btn');
    openButton.textContent = 'Open';
    openButton.href = news.link;

    // Append all elements to the news item
    newsItem.appendChild(img);
    newsItem.appendChild(name);
    name.appendChild(listingDate);
    listingDate.appendChild(timeLeft);
    newsItem.appendChild(openButton);

    // Append news item to the news box
    newsBox.appendChild(newsItem);
}

// function filterNewsItems(searchQuery, newsData) {
//     const newsBox = document.getElementById('show-news');
//     newsBox.innerHTML = ''; 

//     // Filter the news based on the search query (case-insensitive)
//     const filteredNews = newsData.filter(news => 
//         news.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );


//     // Display filtered news
//   if (filteredNews.length > 0) {
//         filteredNews.forEach(news => createNewsItem(news)); // Use the existing createNewsItem function to display filtered results
//     } else {
//         newsBox.innerHTML = '<p>No news found</p>'; // Show message if no news matches the search query
//     }}

// let searchData = [];



fetchNewsData().then(newsData => {
    searchData = newsData; // Store news data globally for search
    searchData.forEach(news => createNewsItem(news)); // Initially display all news
});


// // Search event listener for live search
// document.getElementById('new-search').addEventListener('input', function (e) {
//     const searchQuery = e.target.value;
//     filterNewsItems(searchQuery, searchData); // Use searchData to filter news
// });
