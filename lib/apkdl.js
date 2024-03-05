/* 
Royal-MD V1.0
Coded BY CH HASEEB 

Modified File : apkdl.js
Modified Date : 02/23/2024
Modified Time : 8:58:56 PM
*/

const fetch = (..._0x3256c9) => import("node-fetch").then(({
  default: _0x3e7218
}) => _0x3e7218(..._0x3256c9));
const file_size_url = (..._0x5e9c96) => import("file_size_url").then(({
  default: _0x494ae1
}) => _0x494ae1(..._0x5e9c96));
const tools = require("./config.js");
async function search(_0x4f4cb3) {
  const _0x2b3de0 = {
    query: _0x4f4cb3,
    limit: 0x3e8
  };
  let _0xd17bdd = await fetch(tools.api(5, "/apps/search", _0x2b3de0));
  let _0x4bdc80 = {};
  _0xd17bdd = await _0xd17bdd.json();
  _0x4bdc80 = _0xd17bdd.datalist.list.map(_0x47c62b => {
    const _0x3c5fa6 = {
      name: _0x47c62b.name,
      id: _0x47c62b["package"]
    };
    return _0x3c5fa6;
  });
  return _0x4bdc80;
}
async function download(_0x47588e) {
  const _0x427f63 = {
    query: _0x47588e,
    limit: 0x1
  };
  let _0x2c7aae = await fetch(tools.api(5, "/apps/search", _0x427f63));
  _0x2c7aae = await _0x2c7aae.json();
  let _0x3b01bc = _0x2c7aae.datalist.list[0].name;
  let _0x1852cf = _0x2c7aae.datalist.list[0]["package"];
  let _0x24a810 = _0x2c7aae.datalist.list[0].icon;
  let _0x36d489 = _0x2c7aae.datalist.list[0].file.path;
  let _0x20fc5c = _0x2c7aae.datalist.list[0].updated;
  let _0x29109f = await file_size_url(_0x36d489);
  const _0x4cf7d2 = {
    name: _0x3b01bc,
    lastup: _0x20fc5c,
    "package": _0x1852cf,
    size: _0x29109f,
    icon: _0x24a810,
    dllink: _0x36d489
  };
  return _0x4cf7d2;
}
const _0x223e9d = {
  search: search,
  download: download
};
module.exports = _0x223e9d;



// My YouTube : https://www.youtube.com/@mhmodsofc