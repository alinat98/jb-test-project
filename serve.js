const http = require("http");
const json = require("./DATA.json");
const host = "localhost";
const port = 8000;

function filterBy(str) {
  if (str) {
    const collection = json.entities.pages;
    const result = Object.keys(collection).reduce((res, pageKey) => {
      if (collection[pageKey].title.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
        res[pageKey] = { ...collection[pageKey], level: 0, pages: [] };
      }
      return res;
    }, {});
    return {
      entities: { ...json.entities, pages: result },
      topLevelIds: Object.keys(result),
    };
  }
  return json;
}

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  const url = new URL(req.url, 'http://localhost:8000');
  res.writeHead(200);
  res.end(JSON.stringify(filterBy(url.searchParams.get('search'))));
};

const server = http.createServer(requestListener);
server.listen(port, host);
