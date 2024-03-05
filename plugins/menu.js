/*
ZeroTwo-MD V1.0 
 Coded By VihangaYT

Modified File : menu.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/
const {
  cmd,
  commands
} = require("../command");
const config = require("../config");
const footer = config.FOOTER;
const _0x77e66a = {
  "pattern": "downmenu",
  react: "⬇️",
  dontAddCommandList: true,
  "filename": __filename
};
cmd(_0x77e66a, async (_0x550842, _0x361933, _0x2e0120, {
  from: _0xe7c416,
  prefix: _0x972391,
  l: _0x383d9c,
  quoted: _0x14902c,
  body: _0x4754e0,
  isCmd: _0x158be9,
  command: _0x296664,
  args: _0x31c98,
  q: _0x332e4f,
  isGroup: _0x79fdf8,
  sender: _0x494719,
  senderNumber: _0x21b2f7,
  botNumber2: _0x2b745a,
  botNumber: _0x1d4839,
  pushname: _0x14f655,
  isMe: _0x5ba063,
  isOwner: _0x48fcae,
  groupMetadata: _0x344a80,
  groupName: _0x3ea10e,
  participants: _0x5f4f7a,
  groupAdmins: _0x21580e,
  isBotAdmins: _0x3b8f23,
  isAdmins: _0xfa57a3,
  reply: _0x2550a6
}) => {
  try {
    let _0x18804e = "┌───[🍭Royal-MD🍭]\n\n   *DOWNLOAD COMMANDS MENU*\n\n";
    for (let _0x1cebff = 0; _0x1cebff < commands.length; _0x1cebff++) {
      if (commands[_0x1cebff].category === "download") {
        if (!commands[_0x1cebff].dontAddCommandList) {
          _0x18804e += "*👨🏼‍🚀Command :* " + commands[_0x1cebff].pattern + "\n*💭Desc :* " + commands[_0x1cebff].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x1cebff].use + "\n\n";
        }
      }
    }
    ;
    const _0x2044cf = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x244da7 = {
      buttonId: _0x972391 + "sc",
      buttonText: _0x2044cf,
      type: 0x1
    };
    const _0x18f589 = {
      displayText: "GET BOT'S PING"
    };
    const _0x136039 = {
      buttonId: _0x972391 + "ping",
      buttonText: _0x18f589,
      type: 0x1
    };
    let _0x16f287 = [_0x244da7, _0x136039];
    const _0x4c713f = {
      url: config.LOGO
    };
    const _0x2e3724 = {
      image: _0x4c713f,
      caption: _0x18804e,
      footer: footer,
      headerType: 0x4,
      buttons: _0x16f287
    };
    return await _0x550842.buttonMessage(_0xe7c416, _0x2e3724, _0x361933);
  } catch (_0x53c0ae) {
    _0x2550a6("*ERROR !!*");
    _0x383d9c(_0x53c0ae);
  }
});
const _0x484836 = {
  pattern: "searchmenu",
  react: "🕵🏻",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x484836, async (_0xcb3c32, _0x628292, _0xfddc4c, {
  from: _0x6847b1,
  prefix: _0xaa2846,
  l: _0x160e6e,
  quoted: _0x589cd3,
  body: _0x3135a9,
  isCmd: _0x3bcb5a,
  command: _0x11dfb5,
  args: _0x3deb0c,
  q: _0x7ea7a4,
  isGroup: _0x2e0a8d,
  sender: _0x16be5b,
  senderNumber: _0x1fb5b3,
  botNumber2: _0x5679cf,
  botNumber: _0x7b1683,
  pushname: _0x2fb63a,
  isMe: _0x470c82,
  isOwner: _0x2f42b9,
  groupMetadata: _0x3d100b,
  groupName: _0x501543,
  participants: _0x3f9c32,
  groupAdmins: _0x41fb8c,
  isBotAdmins: _0x27b831,
  isAdmins: _0x226849,
  reply: _0x12ff12
}) => {
  try {
    let _0x4659f5 = "┌───[🍭Royal-MD🍭]\n\n   *SEARCH COMMANDS MENU*\n\n";
    for (let _0x134db4 = 0; _0x134db4 < commands.length; _0x134db4++) {
      if (commands[_0x134db4].category === "search") {
        if (!commands[_0x134db4].dontAddCommandList) {
          _0x4659f5 += "*👨🏼‍🚀Command :* " + commands[_0x134db4].pattern + "\n*💭Desc :* " + commands[_0x134db4].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x134db4].use + "\n\n";
        }
      }
    }
    ;
    const _0x57a3d6 = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x3e8b92 = {
      buttonId: _0xaa2846 + "sc",
      buttonText: _0x57a3d6,
      type: 0x1
    };
    const _0x1562f0 = {
      displayText: "GET BOT'S PING"
    };
    const _0x5418a8 = {
      buttonId: _0xaa2846 + "ping",
      buttonText: _0x1562f0,
      type: 0x1
    };
    let _0xe8fe89 = [_0x3e8b92, _0x5418a8];
    const _0x2448e5 = {
      "url": config.LOGO
    };
    const _0x377740 = {
      image: _0x2448e5,
      caption: _0x4659f5,
      footer: footer,
      headerType: 0x4,
      buttons: _0xe8fe89
    };
    return await _0xcb3c32.buttonMessage(_0x6847b1, _0x377740, _0x628292);
  } catch (_0x28c62c) {
    _0x12ff12("*ERROR !!*");
    _0x160e6e(_0x28c62c);
  }
});
const _0x22979a = {
  pattern: "convertmenu",
  react: "🔄",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x22979a, async (_0x21130f, _0xad0c0, _0x5aad48, {
  from: _0x4eee47,
  prefix: _0x4851d6,
  l: _0x2d9557,
  quoted: _0x590d39,
  body: _0x3ea815,
  isCmd: _0x2cbc60,
  command: _0x399907,
  args: _0x70989b,
  q: _0x57d4f6,
  isGroup: _0x21201a,
  sender: _0x31820d,
  senderNumber: _0x5509e4,
  botNumber2: _0x508ed9,
  botNumber: _0x4d8989,
  pushname: _0x1e6797,
  isMe: _0xcb4844,
  isOwner: _0x2853e1,
  groupMetadata: _0x3fbe8d,
  groupName: _0x350733,
  participants: _0x426b17,
  groupAdmins: _0x4253a2,
  isBotAdmins: _0xc1265f,
  isAdmins: _0x272423,
  reply: _0x3c0c8f
}) => {
  try {
    let _0x2bd189 = "┌───[🍭Royal-MD🍭]\n\n   *CONVERT COMMANDS MENU*\n\n";
    for (let _0x3ce634 = 0; _0x3ce634 < commands.length; _0x3ce634++) {
      if (commands[_0x3ce634].category === "convert") {
        if (!commands[_0x3ce634].dontAddCommandList) {
          _0x2bd189 += "*👨🏼‍🚀Command :* " + commands[_0x3ce634].pattern + "\n*💭Desc :* " + commands[_0x3ce634].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x3ce634].use + "\n\n";
        }
      }
    }
    ;
    const _0x287ad9 = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x33079e = {
      buttonId: _0x4851d6 + "sc",
      buttonText: _0x287ad9,
      type: 0x1
    };
    const _0x2dadae = {
      displayText: "GET BOT'S PING"
    };
    const _0x33058f = {
      buttonId: _0x4851d6 + "ping",
      buttonText: _0x2dadae,
      type: 0x1
    };
    let _0xe4c9f3 = [_0x33079e, _0x33058f];
    const _0x5b6fd1 = {
      url: config.LOGO
    };
    const _0x4da6b2 = {
      image: _0x5b6fd1,
      caption: _0x2bd189,
      footer: footer,
      headerType: 0x4,
      buttons: _0xe4c9f3
    };
    return await _0x21130f.buttonMessage(_0x4eee47, _0x4da6b2, _0xad0c0);
  } catch (_0x4a16b0) {
    _0x3c0c8f("*ERROR !!*");
    _0x2d9557(_0x4a16b0);
  }
});
const _0x4a8b67 = {
  pattern: "othermenu",
  react: "👾",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4a8b67, async (_0x1a49d1, _0x3f5c68, _0x314660, {
  from: _0x1ee192,
  prefix: _0xdfd4bc,
  l: _0x28c783,
  quoted: _0x318641,
  body: _0x3e6e07,
  isCmd: _0x4f818a,
  command: _0x3c4aaf,
  args: _0x52bee5,
  q: _0x59c931,
  isGroup: _0x920b27,
  sender: _0x3ac4e2,
  senderNumber: _0x49b09c,
  botNumber2: _0xa6a22b,
  botNumber: _0x1332c0,
  pushname: _0x31b8d8,
  isMe: _0x336269,
  isOwner: _0x5d5c6a,
  groupMetadata: _0x39f198,
  groupName: _0x21eff9,
  participants: _0x2490d0,
  groupAdmins: _0x101551,
  isBotAdmins: _0x45fc20,
  isAdmins: _0x2c6e28,
  reply: _0x16d3c2
}) => {
  try {
    let _0x10bc10 = "┌───[🍭Royal-MD🍭]\n\n   *OTHER COMMANDS MENU*\n\n";
    for (let _0x21651c = 0; _0x21651c < commands.length; _0x21651c++) {
      if (commands[_0x21651c].category === "misc") {
        if (!commands[_0x21651c].dontAddCommandList) {
          _0x10bc10 += "*👨🏼‍🚀Command :* " + commands[_0x21651c].pattern + "\n*💭Desc :* " + commands[_0x21651c].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x21651c].use + "\n\n";
        }
      }
    }
    ;
    const _0x101950 = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x49c460 = {
      buttonId: _0xdfd4bc + "sc",
      buttonText: _0x101950,
      type: 0x1
    };
    const _0x1c111d = {
      displayText: "GET BOT'S PING"
    };
    const _0x3cbd89 = {
      buttonId: _0xdfd4bc + "ping",
      buttonText: _0x1c111d,
      type: 0x1
    };
    let _0xc3409d = [_0x49c460, _0x3cbd89];
    const _0x3a758e = {
      "url": config.LOGO
    };
    const _0x226ca6 = {
      image: _0x3a758e,
      caption: _0x10bc10,
      footer: footer,
      headerType: 0x4,
      buttons: _0xc3409d
    };
    return await _0x1a49d1.buttonMessage(_0x1ee192, _0x226ca6, _0x3f5c68);
  } catch (_0x66fcb0) {
    _0x16d3c2("*ERROR !!*");
    _0x28c783(_0x66fcb0);
  }
});
const _0x292755 = {
  pattern: "ownermenu",
  react: "💼",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x292755, async (_0x6ab06c, _0x1d1bb7, _0x32dea9, {
  from: _0x3240d2,
  prefix: _0x910e80,
  l: _0x1357bb,
  quoted: _0x669b2a,
  body: _0x12feeb,
  isCmd: _0x4e695d,
  command: _0x212b26,
  args: _0x427ceb,
  q: _0x153af4,
  isGroup: _0x2c6491,
  sender: _0x1b0340,
  senderNumber: _0x2e6188,
  botNumber2: _0x1e88d1,
  botNumber: _0x1f8fc2,
  pushname: _0x22bc6d,
  isMe: _0x3f764c,
  isOwner: _0x3f4d36,
  groupMetadata: _0x56bfe9,
  groupName: _0x33e932,
  participants: _0x1b3014,
  groupAdmins: _0x6747c1,
  isBotAdmins: _0x1e82d2,
  isAdmins: _0x1b63b0,
  reply: _0x270a4d
}) => {
  try {
    let _0x25654b = "┌───[🍭Royal-MD🍭]\n\n   *OWNER COMMANDS MENU*\n\n";
    for (let _0x495edb = 0; _0x495edb < commands.length; _0x495edb++) {
      if (commands[_0x495edb].category === "owner") {
        if (!commands[_0x495edb].dontAddCommandList) {
          _0x25654b += "*👨🏼‍🚀Command :* " + commands[_0x495edb].pattern + "\n*💭Desc :* " + commands[_0x495edb].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x495edb].use + "\n\n";
        }
      }
    }
    ;
    const _0x884b1f = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x22fbf0 = {
      buttonId: _0x910e80 + "sc",
      buttonText: _0x884b1f,
      type: 0x1
    };
    const _0x485368 = {
      displayText: "GET BOT'S PING"
    };
    const _0x2a319f = {
      buttonId: _0x910e80 + "ping",
      buttonText: _0x485368,
      type: 0x1
    };
    let _0x24bf4f = [_0x22fbf0, _0x2a319f];
    const _0x14f687 = {
      url: config.LOGO
    };
    const _0x10973a = {
      image: _0x14f687,
      caption: _0x25654b,
      footer: footer,
      headerType: 0x4,
      buttons: _0x24bf4f
    };
    return await _0x6ab06c.buttonMessage(_0x3240d2, _0x10973a, _0x1d1bb7);
  } catch (_0x52baab) {
    _0x270a4d("*ERROR !!*");
    _0x1357bb(_0x52baab);
  }
});
const _0x1ec459 = {
  pattern: "adminmenu",
  react: "🛡️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1ec459, async (_0x45c470, _0x53fa33, _0x415d18, {
  from: _0x3e7dd1,
  prefix: _0x3b0990,
  l: _0x57ea3e,
  quoted: _0x1ed22a,
  body: _0xb1755c,
  isCmd: _0x1800cd,
  command: _0x1c5cfd,
  args: _0xa596a2,
  q: _0x2e43dd,
  isGroup: _0x317525,
  sender: _0x2e5cb2,
  senderNumber: _0x122ef6,
  botNumber2: _0x291ade,
  botNumber: _0x4df5d3,
  pushname: _0x3571c3,
  isMe: _0x21337d,
  isOwner: _0x3b7039,
  groupMetadata: _0x2e3bf6,
  groupName: _0xdc8bd8,
  participants: _0x312a6e,
  groupAdmins: _0x42f78f,
  isBotAdmins: _0x21e5ae,
  isAdmins: _0x38445b,
  reply: _0x3166e6
}) => {
  try {
    let _0xbec383 = "*● ══════════════ ●*\n\n   *ADMIN COMMANDS MENU*\n\n";
    for (let _0x466f6f = 0; _0x466f6f < commands.length; _0x466f6f++) {
      if (commands[_0x466f6f].category === "admin") {
        if (!commands[_0x466f6f].dontAddCommandList) {
          _0xbec383 += "*👨🏼‍🚀Command :* " + commands[_0x466f6f].pattern + "\n*💭Desc :* " + commands[_0x466f6f].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x466f6f].use + "\n\n";
        }
      }
    }
    ;
    const _0x27212e = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x4f6966 = {
      buttonId: _0x3b0990 + "sc",
      buttonText: _0x27212e,
      type: 0x1
    };
    const _0x29d132 = {
      displayText: "GET BOT'S PING"
    };
    const _0x2bb7c6 = {
      buttonId: _0x3b0990 + "ping",
      buttonText: _0x29d132,
      type: 0x1
    };
    let _0x111d92 = [_0x4f6966, _0x2bb7c6];
    const _0x217da8 = {
      url: config.LOGO
    };
    const _0x4b2ea8 = {
      image: _0x217da8,
      caption: _0xbec383,
      footer: footer,
      headerType: 0x4,
      buttons: _0x111d92
    };
    return await _0x45c470.buttonMessage(_0x3e7dd1, _0x4b2ea8, _0x53fa33);
  } catch (_0x5da552) {
    _0x3166e6("*ERROR !!*");
    _0x57ea3e(_0x5da552);
  }
});
const _0x3b2776 = {
  pattern: "logomenu",
  react: "🎡",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x3b2776, async (_0x39a83b, _0xaa21d8, _0x4b650b, {
  from: _0x5e837e,
  prefix: _0xe4e17d,
  l: _0x3ab07e,
  quoted: _0x49bb63,
  body: _0xca2baf,
  isCmd: _0x4d4e8c,
  command: _0x18f909,
  args: _0x139017,
  q: _0x2850f3,
  isGroup: _0x92cfc,
  sender: _0x4943b3,
  senderNumber: _0xf0bbcf,
  botNumber2: _0x1c9957,
  botNumber: _0x41a0a4,
  pushname: _0x3e249b,
  isMe: _0x23ed83,
  isOwner: _0x340cf0,
  groupMetadata: _0x979e28,
  groupName: _0x5a408a,
  participants: _0x49ccdf,
  groupAdmins: _0x1d7c5f,
  isBotAdmins: _0x525d39,
  isAdmins: _0x43862a,
  reply: _0x5af0df
}) => {
  try {
    let _0x240234 = "*● ══════════════ ●*\n\n   *LOGO COMMANDS MENU*\n\n";
    for (let _0x346787 = 0; _0x346787 < commands.length; _0x346787++) {
      if (commands[_0x346787].category === "logo") {
        if (!commands[_0x346787].dontAddCommandList) {
          _0x240234 += "*👨🏼‍🚀Command :* " + commands[_0x346787].pattern + "\n*💭Desc :* " + commands[_0x346787].desc + "\n*🙇🏻‍♂️Use:* " + commands[_0x346787].use + "\n\n";
        }
      }
    }
    ;
    const _0x297105 = {
      displayText: "GET BOT'S SCRIPT"
    };
    const _0x476654 = {
      buttonId: _0xe4e17d + "sc",
      buttonText: _0x297105,
      type: 0x1
    };
    const _0x22bc5a = {
      displayText: "GET BOT'S PING"
    };
    const _0x2e17db = {
      buttonId: _0xe4e17d + "ping",
      buttonText: _0x22bc5a,
      type: 0x1
    };
    let _0x2b4e86 = [_0x476654, _0x2e17db];
    const _0x315939 = {
      url: config.LOGO
    };
    const _0x152be8 = {
      image: _0x315939,
      caption: _0x240234,
      footer: footer,
      headerType: 0x4,
      buttons: _0x2b4e86
    };
    return await _0x39a83b.buttonMessage(_0x5e837e, _0x152be8, _0xaa21d8);
  } catch (_0x95a371) {
    _0x5af0df("*ERROR !!*");
    _0x3ab07e(_0x95a371);
  }
});

// Our Website: https://vihangayt.me
