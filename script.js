
// Function to handle comment submission
document.querySelectorAll('.comment-form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const name = this.querySelector('input').value;
    const comment = this.querySelector('textarea').value;

    // Create new comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <strong>${name}</strong>
      <p>${comment}</p>
    `;

    // Append comment to the comment list
    this.previousElementSibling.appendChild(commentElement);

    // Clear the form
    this.reset();
  });
});

// Function to handle "Read More" button click
document.querySelectorAll('.read-more-button').forEach(button => {
  button.addEventListener('click', function () {
    const content = this.previousElementSibling;
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      content.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
});
