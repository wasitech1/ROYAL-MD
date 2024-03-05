/* 
Royal-MD V1.0
Coded BY CH HASEEB 

Modified File : tiktok.js
Modified Date : 8/23/2023
Modified Time : 8:58:56 PM
*/

const axios = require("axios");
const clean = _0x29ad6b => {
  _0x29ad6b = _0x29ad6b.replace(/(<br?\s?\/>)/gi, " \n");
  return _0x29ad6b.replace(/(<([^>]+)>)/gi, '');
};
async function shortener(_0x52c76e) {
  return _0x52c76e;
}
exports.Tiktok = async _0x455e52 => {
  const _0x1efd32 = {
    query: _0x455e52
  };
  let _0x2f62fb = await axios("https://lovetik.com/api/ajax/search", {
    "method": "POST",
    "data": new URLSearchParams(Object.entries(_0x1efd32))
  });
  result = {};
  result.creator = "YNTKTS";
  result.title = clean(_0x2f62fb.data.desc);
  result.author = clean(_0x2f62fb.data.author);
  result.nowm = await _0x52c76e;
  result.watermark = await _0x52c76e;
  result.audio = await _0x52c76e;
  result.thumbnail = await _0x52c76e;
  return result;
};


// My YouTube : https://www.youtube.com/@mhmodsofc