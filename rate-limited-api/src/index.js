/* Fetch data
 * @param {number} [page] - Page of data to return, optional
 * @returns {Promise} Promise Object - Payload of the request
 */

const { getData } = require('./api');

/*
 * Working with legacy and unreliable APIs is a common problem we have to
 * solve for at Point. For this challenge you must successfully fetch all pages from
 * an external API and sum all of the pages of data to a single integer value.
 * An example successful response from the API is:
 *
    {
      "data": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
      "page": 0,
      "pageCount": 15
    }
 *
 * Things to watch out for:
 *  1. The API is rated limited and only allows 5 requests per 3 seconds
 *  2. The API is unreliable and has been known to fail randomly
 *  3. You can only use core NodeJS modules
 *
 *  Good luck!
 */

async function main() {
  let pageCount = 1
  let sum = 0;
  let nextPage = 0

  while (nextPage < pageCount) {
    try {
      const { data, page, pageCount: pc } = await getData(nextPage)

      pageCount = pc
      sum = data.reduce((accum, curr) => {
        return accum + curr
      }, sum)

      nextPage = page + 1
      console.log(`The total sum is: ${sum}`);
    } catch (error) {
      // retry
      if (error.statusCode === 429) {
        await sleep(3000)
      }

      console.log(error)


      continue
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


main();
