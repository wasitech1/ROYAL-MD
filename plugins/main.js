/*
ZeroTwo-MD V1.0 
 Coded By VihangaYT

Modified File : main.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/
const config = require("../config");
const os = require("os");
const _0x11bcd3 = {
  pattern: "alive",
  react: "🍬",
  alias: ["online", "test", "bot"],
  desc: "Check bot online or no.",
  category: "main",
  use: ".alive",
  filename: __filename
};
cmd(_0x11bcd3, async (_0x4b2b47, _0x42b4d0, _0x309974, {
  from: _0x2db549,
  prefix: _0x5cf9e5,
  l: _0x1a93f5,
  quoted: _0x332ba2,
  body: _0x1e1312,
  isCmd: _0x3f380a,
  command: _0x2d8027,
  args: _0x514480,
  q: _0xd532d4,
  isGroup: _0x13920d,
  sender: _0x280a0f,
  senderNumber: _0xd5726a,
  botNumber2: _0x5e19f9,
  botNumber: _0x47fa0b,
  pushname: _0x2d298c,
  isMe: _0x7565b3,
  isOwner: _0x2225f2,
  groupMetadata: _0x36b03b,
  groupName: _0xb7759f,
  participants: _0x9f6516,
  groupAdmins: _0x488204,
  isBotAdmins: _0x2c3180,
  isAdmins: _0x532199,
  reply: _0x1817d3
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    if (config.ALIVE === "default") {
      const _0x3ba7f1 = {
        displayText: "COMMANDS MENU"
      };
      const _0x6b037f = {
        buttonId: _0x5cf9e5 + "menu",
        buttonText: _0x3ba7f1,
        type: 0x1
      };
      const _0x72f7fe = {
        displayText: "BOT'S SPEED"
      };
      const _0x57e7de = [_0x6b037f, {
        "buttonId": _0x5cf9e5 + "ping",
        "buttonText": _0x72f7fe,
        "type": 0x1
      }];
      const _0x18326e = {
        url: config.LOGO
      };
      const _0xb7068d = {
        "image": _0x18326e,
        "caption": "```👋 Hello " + _0x2d298c + " I'm alive now" + "```" + "\n\n*👾 Im Royal MD whatsapp bot*\n    \n*📲 Version:* " + require("../package.json").version + "\n*📟 Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require("os").totalmem / 1024 / 1024) + "MB\n*⏰ Runtime:* " + runtime(process.uptime()) + "\n*🚉 Platform:* " + hostname + "\n    \n*🍭 Have A Nice Day 🍭*",
        "footer": config.FOOTER,
        "buttons": _0x57e7de,
        "headerType": 0x4
      };
      return await _0x4b2b47.buttonMessage2(_0x2db549, _0xb7068d);
    } else {
      const _0x5ed972 = {
        displayText: "COMMANDS MENU"
      };
      const _0x2515e1 = {
        buttonId: _0x5cf9e5 + "menu",
        buttonText: _0x5ed972,
        type: 0x1
      };
      const _0x579b63 = [_0x2515e1, {
        "buttonId": _0x5cf9e5 + "ping",
        "buttonText": {
          "displayText": "BOT'S SPEED"
        },
        "type": 0x1
      }];
      const _0x109c9f = {
        url: config.LOGO
      };
      const _0x36a3f2 = {
        image: _0x109c9f,
        caption: config.ALIVE,
        footer: config.FOOTER,
        buttons: _0x579b63,
        headerType: 0x4
      };
      return await _0x4b2b47.buttonMessage2(_0x2db549, _0x36a3f2, _0x42b4d0);
    }
  } catch (_0x5e0fb1) {
    _0x1817d3("*Error !!*");
    _0x1a93f5(_0x5e0fb1);
  }
});
const _0x26e360 = {
  pattern: "ping",
  react: "📟",
  alias: ["speed"],
  desc: "Check bot's ping",
  category: "main",
  use: ".ping",
  filename: __filename
};
cmd(_0x26e360, async (_0x297b27, _0x535571, _0x1f632c, {
  from: _0x4e1c14,
  l: _0x39370c,
  quoted: _0x29b396,
  body: _0x5698c5,
  isCmd: _0xe91f63,
  command: _0x559af3,
  args: _0x293371,
  q: _0xeb89ed,
  isGroup: _0x4bae6b,
  sender: _0x2bd226,
  senderNumber: _0x289c02,
  botNumber2: _0xa1df4f,
  botNumber: _0x2b8412,
  pushname: _0x4cfb72,
  isMe: _0x3dc011,
  isOwner: _0x228870,
  groupMetadata: _0x4c9669,
  groupName: _0xe2b38c,
  participants: _0x157ea5,
  groupAdmins: _0x4447dd,
  isBotAdmins: _0x278e52,
  isAdmins: _0x4505cc,
  reply: _0x237444
}) => {
  try {
    var _0x4319f3 = new Date().getTime();
    const _0x59a2be = {
      text: "```Pinging To index.js!!!```"
    };
    const _0x114ee8 = {
      quoted: _0x535571
    };
    let _0x3b5774 = await _0x297b27.sendMessage(_0x4e1c14, _0x59a2be, _0x114ee8);
    var _0xaaf329 = new Date().getTime();
    return await _0x297b27.edite(_0x3b5774, "*Pong*\n *" + (_0xaaf329 - _0x4319f3) + " ms* ");
  } catch (_0x5ed2a7) {
    _0x237444("*Error !!*");
    _0x39370c(_0x5ed2a7);
  }
});
const _0x2e233d = {
  pattern: "menu",
  react: "🗃️",
  "alias": ["panel", "list", "commands"],
  "desc": "Get bot's command list.",
  "category": "main",
  "use": ".menu",
  "filename": __filename
};
cmd(_0x2e233d, async (_0x4589d1, _0x4b13c8, _0x5a8d17, {
  from: _0x5a02d5,
  prefix: _0x145331,
  l: _0x5540e0,
  quoted: _0x13bf25,
  body: _0xf70933,
  isCmd: _0x377d0c,
  command: _0x1f0bcd,
  args: _0x5671cd,
  q: _0x55d071,
  isGroup: _0x15b30e,
  sender: _0x297d96,
  senderNumber: _0x2e5b2b,
  botNumber2: _0x4559c7,
  botNumber: _0x43eaae,
  pushname: _0x2a3060,
  isMe: _0x3abf74,
  isOwner: _0x4ceca6,
  groupMetadata: _0x463d39,
  groupName: _0x599447,
  participants: _0x11a8e6,
  groupAdmins: _0x28acd1,
  isBotAdmins: _0x9b1c0c,
  isAdmins: _0x2a58cd,
  reply: _0x9e2c00
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x10b1c8 = {
      displayText: "DOWNLOAD COMMANDS MENU"
    };
    const _0x1ccd28 = {
      buttonId: _0x145331 + "downmenu",
      buttonText: _0x10b1c8,
      type: 0x1
    };
    const _0x2b9276 = {
      displayText: "SEARCH COMMANDS MENU"
    };
    const _0x31cd96 = {
      displayText: "CONVERT COMMANDS MENU"
    };
    const _0x5207f1 = {
      displayText: "LOGO COMMANDS MENU"
    };
    const _0xef4c39 = [_0x1ccd28, {
      "buttonId": _0x145331 + "searchmenu",
      "buttonText": _0x2b9276,
      "type": 0x1
    }, {
      "buttonId": _0x145331 + "convertmenu",
      "buttonText": _0x31cd96,
      "type": 0x1
    }, {
      "buttonId": _0x145331 + "logomenu",
      "buttonText": _0x5207f1,
      "type": 0x1
    }, {
      "buttonId": _0x145331 + "othermenu",
      "buttonText": {
        "displayText": "OTHER COMMANDS MENU"
      },
      "type": 0x1
    }, {
      "buttonId": _0x145331 + "ownermenu",
      "buttonText": {
        "displayText": "OWNER COMMANDS MENU"
      },
      "type": 0x1
    }, {
      "buttonId": _0x145331 + "adminmenu",
      "buttonText": {
        "displayText": "ADMIN COMMANDS MENU"
      },
      "type": 0x1
    }];
    const _0x5c275a = {
      "url": config.LOGO
    };
    const _0x569c4e = {
      "image": _0x5c275a,
      "caption": "```👋 Hello " + _0x2a3060 + "```" + "\n\n*👾 Royal MD commands menu...*\n  \n*📲 Version:* " + require("../package.json").version + "\n*📟 Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require("os").totalmem / 1024 / 1024) + "MB\n*⏰ Runtime:* " + runtime(process.uptime()) + "\n*🚉 Platform:* " + hostname,
      "footer": config.FOOTER,
      "buttons": _0xef4c39,
      "headerType": 0x4
    };
    return await _0x4589d1.buttonMessage2(_0x5a02d5, _0x569c4e, _0x4b13c8);
  } catch (_0x555e31) {
    _0x9e2c00("*Error !!*");
    _0x5540e0(_0x555e31);
  }
});

// Our Website: https://vihangayt.me
