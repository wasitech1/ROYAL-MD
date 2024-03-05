/* 
Royal-MD V1.0
Coded BY CH HASEEB 


Modified File : dl.js
Modified Date : 02/23/2024
Modified Time : 8:58:56 PM
*/

function _0x3037b7(_0x484019, _0x5ae91b, _0xd9a5bd, _0x1fdf78, _0x4da6d3) {
  return _0x3a0c(_0xd9a5bd + 868, _0x1fdf78);
}
(function (_0x4b291a, _0x1ab347) {
  const _0x34f535 = _0x4b291a();
  while (true) {
    try {
      const _0x50bbc9 = parseInt(_0x3a0c(335, 794)) / 1 + -parseInt(_0x3a0c(350, 804)) / 2 * (parseInt(_0x3a0c(355, -316)) / 3) + -parseInt(_0x3a0c(354, -363)) / 4 + -parseInt(_0x3a0c(346, -15)) / 5 * (parseInt(_0x3a0c(357, 12)) / 6) + -parseInt(_0x3a0c(338, -516)) / 7 + -parseInt(_0x3a0c(376, -459)) / 8 * (-parseInt(_0x3a0c(366, 29)) / 9) + parseInt(_0x3a0c(337, -507)) / 10;
      if (_0x50bbc9 === _0x1ab347) {
        break;
      } else {
        _0x34f535.push(_0x34f535.shift());
      }
    } catch (_0x91c3fd) {
      _0x34f535.push(_0x34f535.shift());
    }
  }
})(_0x2e0e, 243050);
const {
  Innertube
} = require("youtubei.js");
function _0x15a61f(_0x55d34a, _0x1e66ad, _0x26d2c0, _0x419774, _0x56cba8) {
  return _0x3a0c(_0x56cba8 + 570, _0x26d2c0);
}
function _0x19027d(_0x4cc322, _0x4084be, _0x32c91f, _0x4c9463, _0x1be901) {
  return _0x3a0c(_0x4c9463 + 600, _0x32c91f);
}
async function ytdl(_0x416606) {
  const _0x5a3d5b = {
    Erezm: "?feature=share"
  };
  _0x5a3d5b.hXdLA = "watch?v=";
  _0x5a3d5b.VNBvm = "audio";
  _0x5a3d5b.PkuIM = "best";
  const _0x1198a8 = await Innertube.create();
  _0x416606 = _0x416606.split("/");
  _0x416606 = _0x416606.pop().replace("?feature=share", '').replace(_0x5a3d5b.hXdLA, '');
  const _0x43571d = await _0x1198a8.getBasicInfo(_0x416606);
  const {
    title: _0x2047cb,
    duration: _0x163c26,
    short_description: _0x55c522,
    channel: _0x34176b,
    thumbnail: _0x38749a
  } = _0x43571d.basic_info;
  const _0x12f4ff = _0x43571d.streaming_data?.["formats"][0]["decipher"](_0x1198a8.session.player);
  const _0x2e6db7 = _0x43571d.streaming_data?.["formats"][0]["mime_type"];
  const _0x1f02f = {
    type: _0x5a3d5b.VNBvm,
    quality: _0x5a3d5b.PkuIM
  };
  const _0x25be2b = _0x43571d.chooseFormat(_0x1f02f);
  const _0x821a1 = _0x25be2b?.["decipher"](_0x1198a8.session.player);
  const _0x2908d3 = _0x25be2b.mime_type;
  const _0x185792 = {
    url: _0x821a1,
    mime_type: _0x2908d3
  };
  const _0x3456a0 = {
    url: _0x12f4ff
  };
  _0x3456a0.mime_type = _0x2e6db7;
  const _0x354e93 = {
    thumbnail: _0x38749a[0].url
  };
  _0x354e93.channel = _0x34176b.name;
  _0x354e93.title = _0x2047cb;
  _0x354e93.duration = _0x163c26;
  _0x354e93.description = _0x55c522;
  _0x354e93.audio = _0x185792;
  _0x354e93.video = _0x3456a0;
  return _0x354e93;
}
function _0x139c68(_0x564a38, _0x59fc4b, _0x16562e, _0x4cd8fe, _0x5d346) {
  return _0x3a0c(_0x5d346 + 507, _0x16562e);
}
const _0x3f0885 = {};
function _0x3a0c(_0x545d58, _0x3ca353) {
  const _0x6f9112 = _0x2e0e();
  _0x3a0c = function (_0x3ad29d, _0xfc44e1) {
    _0x3ad29d = _0x3ad29d - 333;
    let _0x3ff65a = _0x6f9112[_0x3ad29d];
    return _0x3ff65a;
  };
  return _0x3a0c(_0x545d58, _0x3ca353);
}
_0x3f0885.ytdl = ytdl;
module.exports = _0x3f0885;
function _0x2e0e() {
  const _0x3fb3ce = ["6212400IjxmtH", "3002328Cutnri", "expor", "ming_", "forma", "ytdl", "ion", "basic", "quali", "19130fITvuw", "her", "split", "nail", "183898FVTGGn", "getBa", "eForm", "chann", "194856wPyRCv", "12nWCWni", "Erezm", "72rMMmlS", "PkuIM", "video", "pop", "?feat", "strea", "best", "watch", "?v=", "35307TyEuNJ", "hare", "thumb", "audio", "descr", "mime_", "creat", "_info", "hXdLA", "repla", "440CovbQY", "ure=s", "name", "choos", "decip", "durat", "data", "url", "sicIn", "youtu", "iptio", "playe", "VNBvm", "bei.j", "sessi", "type", "297371PWUKcI", "title"];
  _0x2e0e = function () {
    return _0x3fb3ce;
  };
  return _0x2e0e();
}




// My YouTube : https://www.youtube.com/@mhmodsofc