const http = require("http");
const json = require("./DATA.json");
const { filterBy } = require("./utils");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  const url = new URL(req.url, "http://localhost:8000");
  const searchStr = url.searchParams.get("search");
  let data = {};
  if (searchStr) {
    const newPages = filterBy(
      url.searchParams.get("search"),
      json.entities.pages
    );
    data = {
      entities: {
        ...json.entities,
        pages: newPages,
      },
      topLevelIds: Object.keys(newPages),
    };
  } else {
    data = { ...json };
  }
  res.writeHead(200);
  res.end(JSON.stringify(data));
};

const server = http.createServer(requestListener);
server.listen(port, host);
