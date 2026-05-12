function whatIsInAName(arr, source) {
  const sourceKeys = Object.keys(source);

  return arr.filter(obj => {
    return sourceKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
