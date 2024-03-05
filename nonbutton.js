/* 
Royal-MD V1.0
Coded BY CH HASEEB 


Modified File : nonbutton.js
Modified Date : 02/5/2024
Modified Time : 8:58:52 PM
*/

function btregex(_0x405d8a) {
  return h2k("/({11})/".test(_0x405d8a));
}
buttonMessage = async (_0x1f2fd1, _0x1aeff5) => {
  _0x1aeff5.forEach((_0x4b7ccc, _0x51bf05) => {
    let _0x18969b = 1;
    result += "\n*[" + mainNumber + "] " + _0x4b7ccc.title + "*\n";
    reply("*Select number" + _0x18969b++ + _0x51bf05 + result);
    _0x51bf05.push(Json(_0x1f2fd1));
  });
};
listMessage = async (_0x30a394, _0x130659) => {
  _0x130659.forEach((_0x31a554, _0x4be04b) => {
    let _0x676650 = 1;
    result += "\n*[" + mainNumber + "] " + _0x31a554.title + "*\n";
    reply("*Select number" + _0x676650++ + _0x4be04b + result);
    _0x4be04b.push(Json(_0x30a394));
  });
};
const _0x5ee505 = {
  listMessage: listMessage,
  buttonMessage: buttonMessage,
  btregex: btregex
};
module["export"] = _0x5ee505;


// My YouTube : https://www.youtube.com/@mhmodsofc