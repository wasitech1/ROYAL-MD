/* 
Royal-MD V1.0
Coded BY CH HASEEB 

Modified File : stalker.js
Modified Date : 8/23/2023
Modified Time : 8:58:56 PM
*/


const axios = require("axios");
const cheerio = require("cheerio");
async function tikstalk(_0x10430e) {
  let _0x584245 = await axios.get("https://urlebird.com/user/" + _0x10430e + "/");
  let _0x2c1d72 = cheerio.load(_0x584245.data);
  const _0x493f42 = _0x2c1d72("div[class=\"col-md-auto justify-content-center text-center\"] > img").attr("src");
  const _0x3cd0bf = _0x2c1d72("h1.user").text().trim();
  const _0x3c7e10 = _0x2c1d72("div.content > h5").text().trim();
  const _0x5606e5 = _0x2c1d72("div[class=\"col-7 col-md-auto text-truncate\"]").text().trim().split(" ")[1];
  const _0x8ebce6 = _0x2c1d72("div[class=\"col-auto d-none d-sm-block text-truncate\"]").text().trim().split(" ")[1];
  const _0x2aa988 = _0x2c1d72("div.content > p").text().trim();
  return {
    "profile": _0x493f42,
    "name": _0x3c7e10,
    "username": _0x3cd0bf,
    "followers": _0x5606e5,
    "following": _0x8ebce6,
    "desc": _0x2aa988,
    "bio": _0x2c1d72("body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > p").text().trim(),
    "likes": _0x2c1d72("body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > div > div > div:nth-child(1)").text().trim().split("🧡 ")[1]
  };
}
function igstalker(_0x377750) {
  return new Promise((_0x190f42, _0xe5f6d8) => {
    axios.get("https://dumpor.com/v/" + encodeURIComponent(_0x377750), {
      "headers": {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(_0x50bdc1 => {
      const _0x47a897 = cheerio.load(_0x50bdc1.data);
      const _0x48891e = {
        "profile": _0x47a897("#user-page > div.user > div.row > div > div.user__img").attr("style").replace(/(background-image: url\(\'|\'\);)/gi, ''),
        "fullname": _0x47a897("#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1").text(),
        "username": _0x47a897("#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4").text(),
        "post": _0x47a897("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)").text().replace(" Posts", ''),
        "followers": _0x47a897("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)").text().replace(" Followers", ''),
        "following": _0x47a897("#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)").text().replace(" Following", ''),
        "bio": _0x47a897("#user-page > div.user > div > div.col-md-5.my-3 > div").text().trim()
      };
      _0x190f42(_0x48891e);
    });
  });
}
const _0x542c08 = {
  "igstalker": igstalker,
  "tikstalk": tikstalk
};
module.exports = _0x542c08;


// My YouTube : https://www.youtube.com/@mhmodsofc