const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://https://github.com/MikeGordillo";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
