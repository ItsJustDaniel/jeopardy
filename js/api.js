/**
 *
 * @count {int} the number of categories you want at a time, limited to 100
 * @offset {int} offsets the starting id of categories returned
 * @returns the categories
 */
function getCategories() {
  const random = Math.floor(Math.random() * 1000);

  let url = `https://peaceful-sea-07744.herokuapp.com/https://jservice.io/api/categories?count=5`;
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
 * @categoryId {int} the id of the category you want results, see category ids by running getCategories or at https://jservice.io/
 * @returns the info of the particular category
 */
function getCategory(categoryId) {
  let url = `https://peaceful-sea-07744.herokuapp.com/https://jservice.io/api/category?id=${categoryId}`;
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
  let url = `https://peaceful-sea-07744.herokuapp.com/https://jservice.io/api/random?count=${count}`;
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
function getClue(value, category, offset) {
  url = `https://jservice.io/api/clues?category=politics`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

const question1 = [
  {
    id: 43837,
    answer: "Writing",
    question:
      "Historians generally agree that the development of this separates prehistory from history",
    value: 100,
    airdate: "2001-03-14T12:00:00.000Z",
    created_at: "2014-02-11T23:12:14.011Z",
    updated_at: "2014-02-11T23:12:14.011Z",
    category_id: 5412,
    game_id: null,
    invalid_count: null,
    category: {
      id: 5412,
      title: "prehistoric times",
      created_at: "2014-02-11T23:12:13.915Z",
      updated_at: "2014-02-11T23:12:13.915Z",
      clues_count: 10,
    },
  },
  {
    id: 43843,
    answer: "Horse",
    question:
      "Eohippus was not an early hippopotamus, but the first one of these animals",
    value: 200,
    airdate: "2001-03-14T12:00:00.000Z",
    created_at: "2014-02-11T23:12:14.164Z",
    updated_at: "2014-02-11T23:12:14.164Z",
    category_id: 5412,
    game_id: null,
    invalid_count: null,
    category: {
      id: 5412,
      title: "prehistoric times",
      created_at: "2014-02-11T23:12:13.915Z",
      updated_at: "2014-02-11T23:12:13.915Z",
      clues_count: 10,
    },
  },
  {
    id: 43849,
    answer: "Glaciers",
    question:
      "In the Pleistocene epoch, these gouged at gorges in river valleys; when they melted, rocks & soil were left",
    value: 300,
    airdate: "2001-03-14T12:00:00.000Z",
    created_at: "2014-02-11T23:12:14.291Z",
    updated_at: "2014-02-11T23:12:14.291Z",
    category_id: 5412,
    game_id: null,
    invalid_count: null,
    category: {
      id: 5412,
      title: "prehistoric times",
      created_at: "2014-02-11T23:12:13.915Z",
      updated_at: "2014-02-11T23:12:13.915Z",
      clues_count: 10,
    },
  },
  {
    id: 43855,
    answer: "Neanderthal",
    question:
      'This "man" found in a German valley in 1856 was the first fossil recognized as a prehistoric human',
    value: 400,
    airdate: "2001-03-14T12:00:00.000Z",
    created_at: "2014-02-11T23:12:14.416Z",
    updated_at: "2014-02-11T23:12:14.416Z",
    category_id: 5412,
    game_id: null,
    invalid_count: null,
    category: {
      id: 5412,
      title: "prehistoric times",
      created_at: "2014-02-11T23:12:13.915Z",
      updated_at: "2014-02-11T23:12:13.915Z",
      clues_count: 10,
    },
  },
  {
    id: 43861,
    answer: "Carboniferous",
    question:
      "This coal-forming period consisted of 2 portions:  Pennsylvanian & Mississippian",
    value: 500,
    airdate: "2001-03-14T12:00:00.000Z",
    created_at: "2014-02-11T23:12:14.544Z",
    updated_at: "2014-02-11T23:12:14.544Z",
    category_id: 5412,
    game_id: null,
    invalid_count: null,
    category: {
      id: 5412,
      title: "prehistoric times",
      created_at: "2014-02-11T23:12:13.915Z",
      updated_at: "2014-02-11T23:12:13.915Z",
      clues_count: 10,
    },
  },
];

const question2 = [
  {
    id: 87635,
    answer: "O\\'Neal",
    question: "Ryan &Tatum",
    value: 200,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:18.417Z",
    updated_at: "2014-02-14T01:53:18.417Z",
    category_id: 11496,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11496,
      title: "acting families",
      created_at: "2014-02-14T01:53:18.198Z",
      updated_at: "2014-02-14T01:53:18.198Z",
      clues_count: 5,
    },
  },
  {
    id: 87641,
    answer: "Affleck",
    question: "BrothersBen & Casey",
    value: 400,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:18.650Z",
    updated_at: "2014-02-14T01:53:18.650Z",
    category_id: 11496,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11496,
      title: "acting families",
      created_at: "2014-02-14T01:53:18.198Z",
      updated_at: "2014-02-14T01:53:18.198Z",
      clues_count: 5,
    },
  },
  {
    id: 87647,
    answer: "Prinze",
    question: "Dad & sonFreddie",
    value: 600,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:18.945Z",
    updated_at: "2014-02-14T01:53:18.945Z",
    category_id: 11496,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11496,
      title: "acting families",
      created_at: "2014-02-14T01:53:18.198Z",
      updated_at: "2014-02-14T01:53:18.198Z",
      clues_count: 5,
    },
  },
  {
    id: 87653,
    answer: "Zimbalist",
    question: "Efrem &Stephanie",
    value: 800,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:19.179Z",
    updated_at: "2014-02-14T01:53:19.179Z",
    category_id: 11496,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11496,
      title: "acting families",
      created_at: "2014-02-14T01:53:18.198Z",
      updated_at: "2014-02-14T01:53:18.198Z",
      clues_count: 5,
    },
  },
  {
    id: 87659,
    answer: "Booth",
    question: "Junius & his boys Edwin & John",
    value: 1000,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:19.410Z",
    updated_at: "2014-02-14T01:53:19.410Z",
    category_id: 11496,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11496,
      title: "acting families",
      created_at: "2014-02-14T01:53:18.198Z",
      updated_at: "2014-02-14T01:53:18.198Z",
      clues_count: 5,
    },
  },
];

const question3 = [
  {
    id: 87637,
    answer: "Vatican City",
    question:
      "It's the city (also a country) that's home to St. Peter's Basilica",
    value: 200,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:18.494Z",
    updated_at: "2014-02-14T01:53:18.494Z",
    category_id: 11498,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11498,
      title: "world city walk",
      created_at: "2014-02-14T01:53:18.236Z",
      updated_at: "2014-02-14T01:53:18.236Z",
      clues_count: 5,
    },
  },
  {
    id: 87643,
    answer: "Rabat",
    question:
      "In the 17th century the Corsairs controlled this current capital of Morocco",
    value: 400,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:18.778Z",
    updated_at: "2014-02-14T01:53:18.778Z",
    category_id: 11498,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11498,
      title: "world city walk",
      created_at: "2014-02-14T01:53:18.236Z",
      updated_at: "2014-02-14T01:53:18.236Z",
      clues_count: 5,
    },
  },
  {
    id: 87649,
    answer: "Sapporo",
    question:
      "The first Japanese city to host the Winter Olympics, it's also famous for its beer & its Snow Festival",
    value: 600,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:19.023Z",
    updated_at: "2014-02-14T01:53:19.023Z",
    category_id: 11498,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11498,
      title: "world city walk",
      created_at: "2014-02-14T01:53:18.236Z",
      updated_at: "2014-02-14T01:53:18.236Z",
      clues_count: 5,
    },
  },
  {
    id: 87655,
    answer: "Stalingrad",
    question:
      "In 1942 Field Marshal Erich Von Manstein led a failed effort to assist surrounded German forces in this Soviet city",
    value: 800,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:19.251Z",
    updated_at: "2014-02-14T01:53:19.251Z",
    category_id: 11498,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11498,
      title: "world city walk",
      created_at: "2014-02-14T01:53:18.236Z",
      updated_at: "2014-02-14T01:53:18.236Z",
      clues_count: 5,
    },
  },
  {
    id: 87661,
    answer: "Beijing",
    question:
      "Found in the Dong Cheng district, this capital city's main railway station connects to Harbin & Qingdao",
    value: 1000,
    airdate: "2009-07-24T12:00:00.000Z",
    created_at: "2014-02-14T01:53:19.489Z",
    updated_at: "2014-02-14T01:53:19.489Z",
    category_id: 11498,
    game_id: null,
    invalid_count: null,
    category: {
      id: 11498,
      title: "world city walk",
      created_at: "2014-02-14T01:53:18.236Z",
      updated_at: "2014-02-14T01:53:18.236Z",
      clues_count: 5,
    },
  },
];

question4 = [
  {
    id: 48159,
    answer: "wetsuit",
    question:
      "To keep warm, divers wear these close-fitting coveralls made from a foam rubber-like material",
    value: 200,
    airdate: "2002-06-14T12:00:00.000Z",
    created_at: "2014-02-11T23:15:02.791Z",
    updated_at: "2014-02-11T23:15:02.791Z",
    category_id: 6000,
    game_id: null,
    invalid_count: null,
    category: {
      id: 6000,
      title: "scuba dooby doo",
      created_at: "2014-02-11T23:15:02.650Z",
      updated_at: "2014-02-11T23:15:02.650Z",
      clues_count: 5,
    },
  },
  {
    id: 48165,
    answer: "underwater",
    question:
      'Appropriately, it\'s what the "u" stands for in the acronym SCUBA',
    value: 400,
    airdate: "2002-06-14T12:00:00.000Z",
    created_at: "2014-02-11T23:15:02.929Z",
    updated_at: "2014-02-11T23:15:02.929Z",
    category_id: 6000,
    game_id: null,
    invalid_count: null,
    category: {
      id: 6000,
      title: "scuba dooby doo",
      created_at: "2014-02-11T23:15:02.650Z",
      updated_at: "2014-02-11T23:15:02.650Z",
      clues_count: 5,
    },
  },
  {
    id: 48171,
    answer: "snorkels",
    question:
      "Around 100 A.D., hollow reeds may have been used as the first of these short breathing tubes",
    value: 600,
    airdate: "2002-06-14T12:00:00.000Z",
    created_at: "2014-02-11T23:15:03.068Z",
    updated_at: "2014-02-11T23:15:03.068Z",
    category_id: 6000,
    game_id: null,
    invalid_count: null,
    category: {
      id: 6000,
      title: "scuba dooby doo",
      created_at: "2014-02-11T23:15:02.650Z",
      updated_at: "2014-02-11T23:15:02.650Z",
      clues_count: 5,
    },
  },
  {
    id: 48177,
    answer: "regulator",
    question:
      "Operating on demand, this device controls the amount of air a diver receives from his tank",
    value: 800,
    airdate: "2002-06-14T12:00:00.000Z",
    created_at: "2014-02-11T23:15:03.203Z",
    updated_at: "2014-02-11T23:15:03.203Z",
    category_id: 6000,
    game_id: null,
    invalid_count: null,
    category: {
      id: 6000,
      title: "scuba dooby doo",
      created_at: "2014-02-11T23:15:02.650Z",
      updated_at: "2014-02-11T23:15:02.650Z",
      clues_count: 5,
    },
  },
  {
    id: 48183,
    answer: "buoyancy",
    question:
      'Known as a b.c., an important piece of scuba equipment is a "compensator" for this',
    value: 1000,
    airdate: "2002-06-14T12:00:00.000Z",
    created_at: "2014-02-11T23:15:03.333Z",
    updated_at: "2014-02-11T23:15:03.333Z",
    category_id: 6000,
    game_id: null,
    invalid_count: null,
    category: {
      id: 6000,
      title: "scuba dooby doo",
      created_at: "2014-02-11T23:15:02.650Z",
      updated_at: "2014-02-11T23:15:02.650Z",
      clues_count: 5,
    },
  },
];

const question5 = [
  {
    id: 20069,
    answer: "rib",
    question: "",
    value: null,
    airdate: "1996-11-15T12:00:00.000Z",
    created_at: "2014-02-11T22:57:46.201Z",
    updated_at: "2014-02-11T22:57:46.201Z",
    category_id: 1600,
    game_id: null,
    invalid_count: null,
    category: {
      id: 1600,
      title: "historic americans",
      created_at: "2014-02-11T22:55:03.192Z",
      updated_at: "2014-02-11T22:55:03.192Z",
      clues_count: 60,
    },
  },
  {
    id: 15188,
    answer: "Robert E. Lee",
    question:
      "2 signers of the Declaration of Independence had the same last name as this Confederate general-in-chief",
    value: 100,
    airdate: "1997-07-10T12:00:00.000Z",
    created_at: "2014-02-11T22:55:03.260Z",
    updated_at: "2014-02-11T22:55:03.260Z",
    category_id: 1600,
    game_id: null,
    invalid_count: null,
    category: {
      id: 1600,
      title: "historic americans",
      created_at: "2014-02-11T22:55:03.192Z",
      updated_at: "2014-02-11T22:55:03.192Z",
      clues_count: 60,
    },
  },
  {
    id: 15194,
    answer: "Jonas Salk",
    question:
      "In 1960 this polio vaccine pioneer founded his Institute for Biological Studies in La Jolla, California",
    value: 200,
    airdate: "1997-07-10T12:00:00.000Z",
    created_at: "2014-02-11T22:55:03.362Z",
    updated_at: "2014-02-11T22:55:03.362Z",
    category_id: 1600,
    game_id: null,
    invalid_count: null,
    category: {
      id: 1600,
      title: "historic americans",
      created_at: "2014-02-11T22:55:03.192Z",
      updated_at: "2014-02-11T22:55:03.192Z",
      clues_count: 60,
    },
  },
  {
    id: 15200,
    answer: "Nathan Hale",
    question:
      "The notes taken by this spy during the Revolutionary War were written in Latin & hidden in his shoes",
    value: 300,
    airdate: "1997-07-10T12:00:00.000Z",
    created_at: "2014-02-11T22:55:03.476Z",
    updated_at: "2014-02-11T22:55:03.476Z",
    category_id: 1600,
    game_id: null,
    invalid_count: null,
    category: {
      id: 1600,
      title: "historic americans",
      created_at: "2014-02-11T22:55:03.192Z",
      updated_at: "2014-02-11T22:55:03.192Z",
      clues_count: 60,
    },
  },
  {
    id: 15206,
    answer: "George Marshall",
    question:
      "On June 5, 1947 this Secretary of State offered a European assistance plan in a speech at Harvard",
    value: 400,
    airdate: "1997-07-10T12:00:00.000Z",
    created_at: "2014-02-11T22:55:03.597Z",
    updated_at: "2014-02-11T22:55:03.597Z",
    category_id: 1600,
    game_id: null,
    invalid_count: null,
    category: {
      id: 1600,
      title: "historic americans",
      created_at: "2014-02-11T22:55:03.192Z",
      updated_at: "2014-02-11T22:55:03.192Z",
      clues_count: 60,
    },
  },
  {
    id: 15212,
    answer: "John Glenn",
    question:
      "Of the 7 original Mercury astronauts, he was the only member of the U.S. Marine Corps",
    value: null,
    airdate: "1997-07-10T12:00:00.000Z",
    created_at: "2014-02-11T22:55:03.683Z",
    updated_at: "2014-02-11T22:55:03.683Z",
    category_id: 1600,
    game_id: null,
    invalid_count: null,
    category: {
      id: 1600,
      title: "historic americans",
      created_at: "2014-02-11T22:55:03.192Z",
      updated_at: "2014-02-11T22:55:03.192Z",
      clues_count: 60,
    },
  },
];

const questions = [question1, question2, question3, question4, question5];
console.log(questions);
