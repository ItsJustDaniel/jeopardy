/**
 * 
 * @count {int} the number of categories you want at a time, limited to 100 
 * @offset {int} offsets the starting id of categories returned 
 * @returns the categories
 */
function getCategories(count, offset) {
  url = `https://jservice.io/api/categories?count=${count}?offset=${offset}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

/**
 * 
 * @categoryId {int} the id of the category you want results, see category ids by running getCategories or at https://jservice.io/
 * @returns the info of the particular category
 */
function getCategory(categoryId) {
  url = `https://jservice.io/api/category?id=${categoryId}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

/**
 * 
 * @count {int} the number of clues you want 
 * @returns x number of random clues
 */
function randomClue(count) {
  url = `https://jservice.io/api/random?count=${count}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
/**
 * 
 * @value {int} the value of the clue in dollars 
 * @category {int} the id of hte category you want to return
 * @offset {int} offsets the returned clues
 * @returns clues 
 */
function getClue(value, category, offset){
    url = `https://jservice.io/api/clues?value=${value}?category=${category}?offset=${offset}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}