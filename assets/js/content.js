document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const jobListing = document.getElementById('job-listing');
  const jobItems = jobListing.getElementsByClassName('job-item');
  const tags = document.querySelectorAll('.tag');

  function filterJobs() {
    const searchQuery = searchInput.value.toLowerCase();
    Array.from(jobItems).forEach(function (jobItem) {
      const title = jobItem.querySelector('h3').textContent.toLowerCase();
      const tags = jobItem.getAttribute('data-tags').toLowerCase();
      if (title.includes(searchQuery) || tags.includes(searchQuery)) {
        jobItem.style.display = 'block';
      } else {
        jobItem.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterJobs);

  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      const tagText = tag.textContent.toLowerCase();
      searchInput.value = tagText;
      filterJobs();
    });
  });
});
