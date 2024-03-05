/* 
Royal-MD V1.0
Coded BY CH HASEEB 

Modified File : command.js
Modified Date : 8/23/2023
Modified Time : 8:58:52 PM
*/

var commands = [];
function cmd(_0xca102b, _0x52be27) {
  _0xca102b["function"] = _0x52be27;
  if (!_0xca102b.dontAddCommandList) {
    _0xca102b.dontAddCommandList = false;
  }
  if (!_0xca102b.desc) {
    _0xca102b.desc = '';
  }
  if (!_0xca102b.fromMe) {
    _0xca102b.fromMe = false;
  }
  if (!_0xca102b.category) {
    _0xca102b.category = "misc";
  }
  if (!_0xca102b.filename) {
    _0xca102b.filename = "Not Provided";
  }
  commands.push(_0xca102b);
  return _0xca102b;
}
var _0x2f4906 = {
  cmd: cmd,
  AddCommand: cmd,
  Function: cmd,
  Module: cmd,
  commands: commands
};
module.exports = _0x2f4906

// My YouTube : https://www.youtube.com/@mhmodsofc