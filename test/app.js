import websiteDatabase from '../test/testclient/src/data/website';

const googleSearch = (searchInput) => {
  const matches = websiteDatabase.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 10 ? matches.slice(0, 10) : matches;
};

console.log(googleSearch('j'));
