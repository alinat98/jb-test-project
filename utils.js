/**
 * Returns a filtered collection of pages
 *
 * @param {string} str The search string.
 * @param {object} collection The object to be filtered.
 * @return {object} The filtered object.
 */
const filterBy = (str, collection) => {
  if (str) {
    const result = Object.keys(collection).reduce((res, pageKey) => {
      if (
        collection[pageKey].title.toLowerCase().indexOf(str.toLowerCase()) !==
        -1
      ) {
        res[pageKey] = { ...collection[pageKey], level: 0, pages: [] };
      }
      return res;
    }, {});
    return result;
  }
  return collection;
}

module.exports = { filterBy }