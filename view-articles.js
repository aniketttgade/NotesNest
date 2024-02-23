// view-articles.js
document.addEventListener('DOMContentLoaded', function () {
  const articlesListContainer = document.querySelector('.articles-list');

  // Retrieve saved articles from local storage
  let savedArticles = JSON.parse(localStorage.getItem('articles')) || [];

  // Display the articles
  function displayArticles() {
    articlesListContainer.innerHTML = ''; // Clear previous content

    if (savedArticles.length > 0) {
      savedArticles.forEach((article, index) => {
        const articleSection = document.createElement('div');
        articleSection.classList.add('article');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = article.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = article.content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '🗑️';
        deleteButton.addEventListener('click', () => handleDelete(index));

        const downloadButton = document.createElement('button');
        downloadButton.classList.add('download-button');
        downloadButton.innerHTML = '💾';
        downloadButton.addEventListener('click', () => handleDownload(article));

        articleSection.appendChild(titleElement);
        articleSection.appendChild(contentElement);
        articleSection.appendChild(deleteButton);
        articleSection.appendChild(downloadButton);

        articlesListContainer.appendChild(articleSection);
        
        // Add a separator line between articles, except for the last one
        if (index < savedArticles.length - 1) {
          const separator = document.createElement('hr');
          articlesListContainer.appendChild(separator);
        }
      });
    } else {
      articlesListContainer.innerHTML = '<p>No Notes available</p>';
    }
  }

  // Handle delete button click
  function handleDelete(index) {
    savedArticles.splice(index, 1);
    localStorage.setItem('articles', JSON.stringify(savedArticles));
    displayArticles(); // Update UI
  }

  // Handle download button click
  function handleDownload(article) {
    const blob = new Blob([`Title: ${article.title}\n\n${article.content}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.title}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Function to handle search
    function handleSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const articles = document.querySelectorAll('.article');

      articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || content.includes(searchTerm)) {
          article.style.display = 'block'; // Show the article if it matches the search
        } else {
          article.style.display = 'none'; // Hide the article if it doesn't match the search
        }
      });
    }

    // Event listener for search button click
    searchButton.addEventListener('click', handleSearch);

    // Optional: You can also add an event listener for the input field to trigger search on keyup
    searchInput.addEventListener('keyup', handleSearch);
  });

  // Update the displayArticles function in view-articles.js

function displayArticles() {
  articlesListContainer.innerHTML = ''; // Clear previous content

  if (savedArticles.length > 0) {
    savedArticles.forEach((article, index) => {
      const articleSection = document.createElement('div');
      articleSection.classList.add('article');

      const titleElement = document.createElement('h2');
      titleElement.textContent = article.title;

      const contentElement = document.createElement('p');
      contentElement.textContent = article.content;

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerHTML = '🗑️';
      deleteButton.addEventListener('click', () => handleDelete(index));

      const downloadButton = document.createElement('button');
      downloadButton.classList.add('download-button');
      downloadButton.innerHTML = '💾';
      downloadButton.addEventListener('click', () => handleDownload(article));

      // Add styling to the article section
      articleSection.style.border = '2px solid #000';
      articleSection.style.borderRadius = '10px';
      articleSection.style.padding = '20px';
      articleSection.style.marginBottom = '20px';
      articleSection.style.backgroundColor = '#91c9d4';

      articleSection.appendChild(titleElement);
      articleSection.appendChild(contentElement);
      articleSection.appendChild(deleteButton);
      articleSection.appendChild(downloadButton);

      articlesListContainer.appendChild(articleSection);

      // Add a separator line between articles, except for the last one
      if (index < savedArticles.length - 1) {
        const separator = document.createElement('hr');
        articlesListContainer.appendChild(separator);
      }
    });
  } else {
    articlesListContainer.innerHTML = '<p>No Notes available</p>';
  }
}
// eedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddiiii
function displayArticles() {
  articlesListContainer.innerHTML = ''; // Clear previous content

  if (savedArticles.length > 0) {
    savedArticles.forEach((article, index) => {
      const articleSection = document.createElement('div');
      articleSection.classList.add('article');

      const titleElement = document.createElement('h2');
      titleElement.textContent = article.title;

      const contentElement = document.createElement('p');
      contentElement.textContent = article.content;

      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.innerHTML = '✎';
      editButton.addEventListener('click', () => handleEdit(index, article)); // Pass the article content to the handleEdit function

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.innerHTML = '🗑️';
      deleteButton.addEventListener('click', () => handleDelete(index));

      const downloadButton = document.createElement('button');
      downloadButton.classList.add('download-button');
      downloadButton.innerHTML = '💾';
      downloadButton.addEventListener('click', () => handleDownload(article));

      articleSection.style.border = '2px solid #ccc';
      articleSection.style.borderRadius = '10px';
      articleSection.style.padding = '20px';
      articleSection.style.marginBottom = '20px';
      articleSection.style.backgroundColor = '#91c9d4';

      articleSection.appendChild(titleElement);
      articleSection.appendChild(contentElement);
      articleSection.appendChild(editButton);
      articleSection.appendChild(deleteButton);
      articleSection.appendChild(downloadButton);

      articlesListContainer.appendChild(articleSection);

      if (index < savedArticles.length - 1) {
        const separator = document.createElement('hr');
        articlesListContainer.appendChild(separator);
      }
    });
  } else {
    articlesListContainer.innerHTML = '<p>No Notes available</p>';
  }
}
function handleEdit(index, article) {
  // Encode the content of the selected note
  const encodedTitle = encodeURIComponent(article.title);
  const encodedContent = encodeURIComponent(article.content);

  // Redirect to index.html with the encoded content of the selected note as query parameters
  window.location.href = `index.html?title=${encodedTitle}&content=${encodedContent}`;
}

function handleEdit(index) {
  // Redirect to index.html with the index of the selected note as a query parameter
  window.location.href = `index.html?index=${index}`;
}


  displayArticles(); // Initial display
});
