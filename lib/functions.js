/* 
Royal-MD V1.0
Coded BY CH HASEEB 


Modified File : functions.js
Modified Date : 8/23/2023
Modified Time : 8:58:56 PM
*/

const axios = require("axios");
const fs = require("fs");
const mimes = require("mime-types");
const {
  fileTypeFromBuffer
} = require("file-type");
const getBuffer = async (_0x542143, _0x5bf118) => {
  try {
    if (_0x5bf118) {
      _0x5bf118;
    } else {
      ({});
    }
    const _0x47b391 = {
      DNT: 0x1,
      "Upgrade-Insecure-Request": 0x1
    };
    var _0x4bae2e = await axios({
      "method": "get",
      "url": _0x542143,
      "headers": _0x47b391,
      ..._0x5bf118,
      "responseType": "arraybuffer"
    });
    return _0x4bae2e.data;
  } catch (_0x5e7948) {
    console.log(_0x5e7948);
  }
};
const getGroupAdmins = _0x2fa4b4 => {
  var _0x2c68fe = [];
  for (let _0x5e6995 of _0x2fa4b4) {
    if (_0x5e6995.admin !== null) {
      _0x2c68fe.push(_0x5e6995.id);
    } else {
      '';
    }
  }
  return _0x2c68fe;
};
const getRandom = _0xc85c5d => {
  return '' + Math.floor(Math.random() * 10000) + _0xc85c5d;
};
const h2k = _0x42c2e2 => {
  var _0x25347d = ['', "K", "M", "B", "T", "P", "E"];
  var _0x4cb918 = Math.log10(Math.abs(_0x42c2e2)) / 3 | 0;
  if (_0x4cb918 == 0) {
    return _0x42c2e2;
  }
  var _0x389d9b = _0x25347d[_0x4cb918];
  var _0x17af3d = Math.pow(10, _0x4cb918 * 3);
  var _0x346354 = _0x42c2e2 / _0x17af3d;
  var _0x53c5a1 = _0x346354.toFixed(1);
  if (/\.0$/.test(_0x53c5a1)) {
    _0x53c5a1 = _0x53c5a1.substr(0, _0x53c5a1.length - 2);
  }
  return _0x53c5a1 + _0x389d9b;
};
const isUrl = _0x1e5ce2 => {
  return _0x1e5ce2.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, "gi"));
};
const Json = _0x2dc4b7 => {
  return JSON.stringify(_0x2dc4b7, null, 2);
};
const runtime = _0x5ce30d => {
  _0x5ce30d = Number(_0x5ce30d);
  var _0x2c2c98 = Math.floor(_0x5ce30d / 86400);
  var _0x2b2ec5 = Math.floor(_0x5ce30d % 86400 / 3600);
  var _0x1a9e1a = Math.floor(_0x5ce30d % 3600 / 60);
  var _0x3468ff = Math.floor(_0x5ce30d % 60);
  var _0x263400 = _0x2c2c98 > 0 ? _0x2c2c98 + (_0x2c2c98 == 1 ? " day, " : " days, ") : '';
  var _0x5a7d84 = _0x2b2ec5 > 0 ? _0x2b2ec5 + (_0x2b2ec5 == 1 ? " hour, " : " hours, ") : '';
  var _0xed1a20 = _0x1a9e1a > 0 ? _0x1a9e1a + (_0x1a9e1a == 1 ? " minute, " : " minutes, ") : '';
  var _0x41bcf5 = _0x3468ff > 0 ? _0x3468ff + (_0x3468ff == 1 ? " second" : " seconds") : '';
  return _0x263400 + _0x5a7d84 + _0xed1a20 + _0x41bcf5;
};
const sleep = async _0x53034d => {
  return new Promise(_0x3e64b0 => setTimeout(_0x3e64b0, _0x53034d));
};
const fetchJson = async (_0x7c54b8, _0x8eb50d) => {
  try {
    if (_0x8eb50d) {
      _0x8eb50d;
    } else {
      ({});
    }
    const _0x13bae9 = {
      "method": "GET",
      "url": _0x7c54b8,
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
      },
      ..._0x8eb50d
    };
    const _0x13f34b = await axios(_0x13bae9);
    return _0x13f34b.data;
  } catch (_0x4dfe4b) {
    return _0x4dfe4b;
  }
};
async function getsize(_0x40a5b2) {
  function _0x172f2a(_0x5ce4eb) {
    let _0x50a2a4 = ["B", "KB", "MB", "GB", "TB"];
    let _0x18fa26 = _0x5ce4eb;
    let _0x401ec2;
    for (_0x401ec2 = 0; _0x18fa26 >= 1024 && _0x401ec2 < 4; _0x401ec2++) {
      _0x18fa26 /= 1024;
    }
    return _0x18fa26.toFixed(2) + " " + _0x50a2a4[_0x401ec2];
  }
  return _0x172f2a((await axios.head(_0x40a5b2)).headers["content-length"]);
}
function formatBytes(_0x53b8de) {
  let _0x2b2190 = ["B", "KB", "MB", "GB", "TB"];
  let _0x2a04d1 = _0x53b8de;
  let _0x3ef254;
  for (_0x3ef254 = 0; _0x2a04d1 >= 1024 && _0x3ef254 < 4; _0x3ef254++) {
    _0x2a04d1 /= 1024;
  }
  return _0x2a04d1.toFixed(2) + " " + _0x2b2190[_0x3ef254];
}
async function formatSize(_0x9fadf1, _0x4338ca = true, _0x2538e4 = 2) {
  const _0x40a033 = _0x4338ca ? 1000 : 1024;
  if (Math.abs(_0x9fadf1) < _0x40a033) {
    return _0x9fadf1 + " B";
  }
  const _0x4587f7 = _0x4338ca ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let _0x4a0cfc = -1;
  const _0xebac1a = 10 ** _0x2538e4;
  do {
    _0x9fadf1 /= _0x40a033;
    ++_0x4a0cfc;
  } while (Math.round(Math.abs(_0x9fadf1) * _0xebac1a) / _0xebac1a >= _0x40a033 && _0x4a0cfc < _0x4587f7.length - 1);
  return _0x9fadf1.toFixed(_0x2538e4) + " " + _0x4587f7[_0x4a0cfc];
}
async function getFile(_0x574a5f) {
  try {
    const _0x5c82bc = require("file-type");
    const _0x2afd8d = await getBuffer(_0x574a5f);
    let _0x51ca39 = await _0x5c82bc.fromBuffer(_0x2afd8d);
    let _0x26102d = "./" + ('' + Math.floor(Math.random() * 10000) + ("." + _0x51ca39.ext));
    await fs.promises.writeFile(_0x26102d, _0x2afd8d);
    return _0x26102d;
  } catch (_0x1a043d) {
    console.error("An error occurred:", _0x1a043d.message);
  }
}
async function fetchBuffer(_0x2895a6, _0x19f0f0 = {}) {
  return new Promise(async (_0x1ef1a4, _0x4c768c) => {
    try {
      if (/^https?:\/\//i.test(_0x2895a6)) {
        const _0x35a252 = {
          ...(!!_0x19f0f0.headers ? _0x19f0f0.headers : {})
        };
        const _0x2c1742 = {
          "headers": _0x35a252,
          "responseType": "arraybuffer",
          ..._0x19f0f0
        };
        let _0x4486e2 = await axios.get(_0x2895a6, _0x2c1742);
        let _0x35af34 = await _0x4486e2?.["data"];
        let _0x250c8c = /filename/i.test(_0x4486e2.headers?.["get"]("content-disposition")) ? _0x4486e2.headers?.["get"]("content-disposition")?.["match"](/filename=(.*)/)?.[1]?.["replace"](/["';]/g, '') : '';
        let _0x4a93d3 = mimes.lookup(_0x250c8c) || _0x4486e2.headers.get("content-type") || (await fileTypeFromBuffer(_0x35af34))?.["mime"];
        _0x1ef1a4({
          "data": _0x35af34,
          "size": Buffer.byteLength(_0x35af34),
          "sizeH": formatSize(Buffer.byteLength(_0x35af34)),
          "name": _0x250c8c,
          "mime": _0x4a93d3,
          "ext": mimes.extension(_0x4a93d3)
        });
      } else {
        if (/^data:.*?\/.*?;base64,/i.test(_0x2895a6)) {
          let _0x2b8a59 = Buffer.from(_0x2895a6.split`,`[1], "base64");
          let _0x1b78fa = Buffer.byteLength(_0x2b8a59);
          _0x1ef1a4({
            "data": _0x2b8a59,
            "size": _0x1b78fa,
            "sizeH": formatSize(_0x1b78fa),
            ...((await fileTypeFromBuffer(_0x2b8a59)) || {
              "mime": "application/octet-stream",
              "ext": ".bin"
            })
          });
        } else {
          if (fs.existsSync(_0x2895a6) && fs.statSync(_0x2895a6).isFile()) {
            let _0x27f76e = fs.readFileSync(_0x2895a6);
            let _0x28b31a = Buffer.byteLength(_0x27f76e);
            _0x1ef1a4({
              "data": _0x27f76e,
              "size": _0x28b31a,
              "sizeH": formatSize(_0x28b31a),
              ...((await fileTypeFromBuffer(_0x27f76e)) || {
                "mime": "application/octet-stream",
                "ext": ".bin"
              })
            });
          } else {
            if (Buffer.isBuffer(_0x2895a6)) {
              let _0x57eb5a = Buffer?.["byteLength"](_0x2895a6) || 0;
              _0x1ef1a4({
                "data": _0x2895a6,
                "size": _0x57eb5a,
                "sizeH": formatSize(_0x57eb5a),
                ...((await fileTypeFromBuffer(_0x2895a6)) || {
                  "mime": "application/octet-stream",
                  "ext": ".bin"
                })
              });
            } else {
              if (/^[a-zA-Z0-9+/]={0,2}$/i.test(_0x2895a6)) {
                let _0x552dca = Buffer.from(_0x2895a6, "base64");
                let _0x54792f = Buffer.byteLength(_0x552dca);
                _0x1ef1a4({
                  "data": _0x552dca,
                  "size": _0x54792f,
                  "sizeH": formatSize(_0x54792f),
                  ...((await fileTypeFromBuffer(_0x552dca)) || {
                    "mime": "application/octet-stream",
                    "ext": ".bin"
                  })
                });
              } else {
                let _0x26f2e0 = Buffer.alloc(20);
                let _0x24ed04 = Buffer.byteLength(_0x26f2e0);
                _0x1ef1a4({
                  "data": _0x26f2e0,
                  "size": _0x24ed04,
                  "sizeH": formatSize(_0x24ed04),
                  ...((await fileTypeFromBuffer(_0x26f2e0)) || {
                    "mime": "application/octet-stream",
                    "ext": ".bin"
                  })
                });
              }
            }
          }
        }
      }
    } catch (_0x5e9255) {
      _0x4c768c(new Error(_0x5e9255?.["message"] || _0x5e9255));
    }
  });
}
const _0x19c567 = {
  getBuffer: getBuffer,
  getGroupAdmins: getGroupAdmins,
  getRandom: getRandom,
  h2k: h2k,
  isUrl: isUrl,
  Json: Json,
  runtime: runtime,
  sleep: sleep,
  fetchJson: fetchJson,
  getsize: getsize,
  formatBytes: formatBytes,
  fetchBuffer: fetchBuffer,
  formatSize: formatSize,
  getFile: getFile
};
module.exports = _0x19c567;


// My YouTube : https://www.youtube.com/@mhmodsofc