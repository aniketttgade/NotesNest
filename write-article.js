// write-article.js
document.getElementById('articleForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('articleTitle').value;
  const content = document.getElementById('articleContent').value;

  // Save the article locally (for demonstration purposes)
  const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
  savedArticles.push({ title, content });
  localStorage.setItem('articles', JSON.stringify(savedArticles));

  // Redirect to the "View Articles" page
  window.location.href = 'view-notes.html';
  // Check if there's an article being edited
document.addEventListener('DOMContentLoaded', function () {
  const editIndex = localStorage.getItem('editIndex');
  if (editIndex !== null) {
    const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
    const article = savedArticles[editIndex];
    if (article) {
      document.getElementById('articleTitle').value = article.title;
      document.getElementById('articleContent').value = article.content;
    }
  }
});

// Remove editIndex from localStorage after populating form
localStorage.removeItem('editIndex');

});

