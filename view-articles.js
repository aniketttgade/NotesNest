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

  displayArticles(); // Initial display
});