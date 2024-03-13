const categories = document.querySelectorAll('#categories .item');

  console.log(`Number of categories: ${categories.length}`);

  categories.forEach(function(category) {
    const categoryName = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('li');

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${items.length}`);
  });