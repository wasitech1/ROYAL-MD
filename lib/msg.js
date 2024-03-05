/* 
Royal-MD V1.0
Coded BY CH HASEEB 




Modified File : msg.js
Modified Date : 8/23/2023
Modified Time : 8:58:56 PM
*/

const {
  proto,
  downloadContentFromMessage,
  getContentType
} = require("@adiwajshing/baileys");
const fs = require("fs");
const downloadMediaMessage = async (_0xf303e5, _0x402019) => {
  if (_0xf303e5.type === "viewOnceMessage") {
    _0xf303e5.type = _0xf303e5.msg.type;
  }
  if (_0xf303e5.type === "imageMessage") {
    var _0xcf5bd8 = _0x402019 ? _0x402019 + ".jpg" : "undefined.jpg";
    const _0x597b0b = await downloadContentFromMessage(_0xf303e5.msg, "image");
    let _0x23cd8a = Buffer.from([]);
    for await (const _0x53f256 of _0x597b0b) {
      _0x23cd8a = Buffer.concat([_0x23cd8a, _0x53f256]);
    }
    fs.writeFileSync(_0xcf5bd8, _0x23cd8a);
    return fs.readFileSync(_0xcf5bd8);
  } else {
    if (_0xf303e5.type === "videoMessage") {
      var _0x42be1c = _0x402019 ? _0x402019 + ".mp4" : "undefined.mp4";
      const _0x3f7bcb = await downloadContentFromMessage(_0xf303e5.msg, "video");
      let _0x3c01dc = Buffer.from([]);
      for await (const _0xe9fe7b of _0x3f7bcb) {
        _0x3c01dc = Buffer.concat([_0x3c01dc, _0xe9fe7b]);
      }
      fs.writeFileSync(_0x42be1c, _0x3c01dc);
      return fs.readFileSync(_0x42be1c);
    } else {
      if (_0xf303e5.type === "audioMessage") {
        var _0x48b3a0 = _0x402019 ? _0x402019 + ".mp3" : "undefined.mp3";
        const _0x4f7e8c = await downloadContentFromMessage(_0xf303e5.msg, "audio");
        let _0x280447 = Buffer.from([]);
        for await (const _0x5d0290 of _0x4f7e8c) {
          _0x280447 = Buffer.concat([_0x280447, _0x5d0290]);
        }
        fs.writeFileSync(_0x48b3a0, _0x280447);
        return fs.readFileSync(_0x48b3a0);
      } else {
        if (_0xf303e5.type === "stickerMessage") {
          var _0x34327d = _0x402019 ? _0x402019 + ".webp" : "undefined.webp";
          const _0x11edd9 = await downloadContentFromMessage(_0xf303e5.msg, "sticker");
          let _0x453a07 = Buffer.from([]);
          for await (const _0x1240cd of _0x11edd9) {
            _0x453a07 = Buffer.concat([_0x453a07, _0x1240cd]);
          }
          fs.writeFileSync(_0x34327d, _0x453a07);
          return fs.readFileSync(_0x34327d);
        } else {
          if (_0xf303e5.type === "documentMessage") {
            var _0x3e6511 = _0xf303e5.msg.fileName.split(".")[1].toLowerCase().replace("jpeg", "jpg").replace("png", "jpg").replace("m4a", "mp3");
            var _0x5ae063 = _0x402019 ? _0x402019 + "." + _0x3e6511 : "undefined." + _0x3e6511;
            const _0x3d50d7 = await downloadContentFromMessage(_0xf303e5.msg, "document");
            let _0x22c601 = Buffer.from([]);
            for await (const _0x2d4c6f of _0x3d50d7) {
              _0x22c601 = Buffer.concat([_0x22c601, _0x2d4c6f]);
            }
            fs.writeFileSync(_0x5ae063, _0x22c601);
            return fs.readFileSync(_0x5ae063);
          }
        }
      }
    }
  }
};
const sms = (_0x9c8d45, _0x132c34) => {
  if (_0x132c34.key) {
    _0x132c34.id = _0x132c34.key.id;
    _0x132c34.chat = _0x132c34.key.remoteJid;
    _0x132c34.fromMe = _0x132c34.key.fromMe;
    _0x132c34.isGroup = _0x132c34.chat.endsWith("@g.us");
    _0x132c34.sender = _0x132c34.fromMe ? _0x9c8d45.user.id.split(":")[0] + "@s.whatsapp.net" : _0x132c34.isGroup ? _0x132c34.key.participant : _0x132c34.key.remoteJid;
  }
  if (_0x132c34.message) {
    _0x132c34.type = getContentType(_0x132c34.message);
    _0x132c34.msg = _0x132c34.type === "viewOnceMessage" ? _0x132c34.message[_0x132c34.type].message[getContentType(_0x132c34.message[_0x132c34.type].message)] : _0x132c34.message[_0x132c34.type];
    if (_0x132c34.msg) {
      if (_0x132c34.type === "viewOnceMessage") {
        _0x132c34.msg.type = getContentType(_0x132c34.message[_0x132c34.type].message);
      }
      var _0x5496d1 = _0x132c34.msg.contextInfo != null ? _0x132c34.msg.contextInfo.participant : '';
      var _0x2d2b8f = _0x132c34.msg.contextInfo != null ? _0x132c34.msg.contextInfo.mentionedJid : [];
      var _0x972207 = typeof _0x2d2b8f == "string" ? [_0x2d2b8f] : _0x2d2b8f;
      if (_0x972207 != undefined) {
        _0x972207.push(_0x5496d1);
      } else {
        [];
      }
      _0x132c34.mentionUser = _0x972207 != undefined ? _0x972207.filter(_0x8ea861 => _0x8ea861) : [];
      _0x132c34.body = _0x132c34.type === "conversation" ? _0x132c34.msg : _0x132c34.type === "extendedTextMessage" ? _0x132c34.msg.text : _0x132c34.type == "imageMessage" && _0x132c34.msg.caption ? _0x132c34.msg.caption : _0x132c34.type == "videoMessage" && _0x132c34.msg.caption ? _0x132c34.msg.caption : _0x132c34.type == "templateButtonReplyMessage" && _0x132c34.msg.selectedId ? _0x132c34.msg.selectedId : _0x132c34.type == "buttonsResponseMessage" && _0x132c34.msg.selectedButtonId ? _0x132c34.msg.selectedButtonId : '';
      _0x132c34.quoted = _0x132c34.msg.contextInfo != undefined ? _0x132c34.msg.contextInfo.quotedMessage : null;
      if (_0x132c34.quoted) {
        _0x132c34.quoted.type = getContentType(_0x132c34.quoted);
        _0x132c34.quoted.id = _0x132c34.msg.contextInfo.stanzaId;
        _0x132c34.quoted.sender = _0x132c34.msg.contextInfo.participant;
        _0x132c34.quoted.fromMe = _0x132c34.quoted.sender.split("@")[0].includes(_0x9c8d45.user.id.split(":")[0]);
        _0x132c34.quoted.msg = _0x132c34.quoted.type === "viewOnceMessage" ? _0x132c34.quoted[_0x132c34.quoted.type].message[getContentType(_0x132c34.quoted[_0x132c34.quoted.type].message)] : _0x132c34.quoted[_0x132c34.quoted.type];
        if (_0x132c34.quoted.type === "viewOnceMessage") {
          _0x132c34.quoted.msg.type = getContentType(_0x132c34.quoted[_0x132c34.quoted.type].message);
        }
        var _0x2e7a8b = _0x132c34.quoted.msg.contextInfo != null ? _0x132c34.quoted.msg.contextInfo.participant : '';
        var _0x54cd5f = _0x132c34.quoted.msg.contextInfo != null ? _0x132c34.quoted.msg.contextInfo.mentionedJid : [];
        var _0x22d2a3 = typeof _0x54cd5f == "string" ? [_0x54cd5f] : _0x54cd5f;
        if (_0x22d2a3 != undefined) {
          _0x22d2a3.push(_0x2e7a8b);
        } else {
          [];
        }
        _0x132c34.quoted.mentionUser = _0x22d2a3 != undefined ? _0x22d2a3.filter(_0x291ef8 => _0x291ef8) : [];
        _0x132c34.quoted.fakeObj = proto.WebMessageInfo.fromObject({
          "key": {
            "remoteJid": _0x132c34.chat,
            "fromMe": _0x132c34.quoted.fromMe,
            "id": _0x132c34.quoted.id,
            "participant": _0x132c34.quoted.sender
          },
          "message": _0x132c34.quoted
        });
        _0x132c34.quoted.download = _0x40aac9 => downloadMediaMessage(_0x132c34.quoted, _0x40aac9);
        _0x132c34.quoted["delete"] = () => _0x9c8d45.sendMessage(_0x132c34.chat, {
          "delete": _0x132c34.quoted.fakeObj.key
        });
        _0x132c34.quoted.react = _0x111213 => _0x9c8d45.sendMessage(_0x132c34.chat, {
          "react": {
            "text": _0x111213,
            "key": _0x132c34.quoted.fakeObj.key
          }
        });
      }
    }
    _0x132c34.download = _0x52df4d => downloadMediaMessage(_0x132c34, _0x52df4d);
  }
  _0x132c34.reply = (_0x286bd6, _0x30323e = _0x132c34.chat, _0x233d46 = {
    "mentions": [_0x132c34.sender]
  }) => _0x9c8d45.sendMessage(_0x30323e, {
    "text": _0x286bd6,
    "contextInfo": {
      "mentionedJid": _0x233d46.mentions
    }
  }, {
    "quoted": _0x132c34
  });
  _0x132c34.replyS = (_0x5dba79, _0x593f17 = _0x132c34.chat, _0x1c5e55 = {
    "mentions": [_0x132c34.sender]
  }) => _0x9c8d45.sendMessage(_0x593f17, {
    "sticker": _0x5dba79,
    "contextInfo": {
      "mentionedJid": _0x1c5e55.mentions
    }
  }, {
    "quoted": _0x132c34
  });
  _0x132c34.replyImg = (_0x3777df, _0xc2904, _0xc50e70 = _0x132c34.chat, _0x25d27c = {
    "mentions": [_0x132c34.sender]
  }) => _0x9c8d45.sendMessage(_0xc50e70, {
    "image": _0x3777df,
    "caption": _0xc2904,
    "contextInfo": {
      "mentionedJid": _0x25d27c.mentions
    }
  }, {
    "quoted": _0x132c34
  });
  _0x132c34.replyVid = (_0x4512ca, _0x6f5b6, _0x55676d = _0x132c34.chat, _0x55a0d8 = {
    "mentions": [_0x132c34.sender],
    "gif": false
  }) => _0x9c8d45.sendMessage(_0x55676d, {
    "video": _0x4512ca,
    "caption": _0x6f5b6,
    "gifPlayback": _0x55a0d8.gif,
    "contextInfo": {
      "mentionedJid": _0x55a0d8.mentions
    }
  }, {
    "quoted": _0x132c34
  });
  _0x132c34.replyAud = (_0x322bc6, _0x579411 = _0x132c34.chat, _0x468a54 = {
    "mentions": [_0x132c34.sender],
    "ptt": false
  }) => _0x9c8d45.sendMessage(_0x579411, {
    "audio": _0x322bc6,
    "ptt": _0x468a54.ptt,
    "mimetype": "audio/mpeg",
    "contextInfo": {
      "mentionedJid": _0x468a54.mentions
    }
  }, {
    "quoted": _0x132c34
  });
  _0x132c34.replyDoc = (_0x2d1874, _0x2714fe = _0x132c34.chat, _0x2cdccc = {
    "mentions": [_0x132c34.sender],
    "filename": "undefined.pdf",
    "mimetype": "application/pdf"
  }) => _0x9c8d45.sendMessage(_0x2714fe, {
    "document": _0x2d1874,
    "mimetype": _0x2cdccc.mimetype,
    "fileName": _0x2cdccc.filename,
    "contextInfo": {
      "mentionedJid": _0x2cdccc.mentions
    }
  }, {
    "quoted": _0x132c34
  });
  _0x132c34.replyContact = (_0x5a3bc3, _0x1650b3, _0x1438d5) => {
    var _0x3cc40a = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x5a3bc3 + "\n" + "ORG:" + _0x1650b3 + ";\n" + "TEL;type=CELL;type=VOICE;waid=" + _0x1438d5 + ":+" + _0x1438d5 + "\n" + "END:VCARD";
    const _0x3faa8a = {
      "vcard": _0x3cc40a
    };
    const _0x4a548a = {
      displayName: _0x5a3bc3,
      contacts: [_0x3faa8a]
    };
    const _0x5d8ae4 = {
      contacts: _0x4a548a
    };
    _0x9c8d45.sendMessage(_0x132c34.chat, _0x5d8ae4, {
      "quoted": _0x132c34
    });
  };
  _0x132c34.react = _0x37d863 => _0x9c8d45.sendMessage(_0x132c34.chat, {
    "react": {
      "text": _0x37d863,
      "key": _0x132c34.key
    }
  });
  return _0x132c34;
};
const _0x55b19a = {
  sms: sms,
  downloadMediaMessage: downloadMediaMessage
};
module.exports = _0x55b19a;


// My YouTube : https://www.youtube.com/@mhmodsofc