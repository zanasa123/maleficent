process.on('uncaughtException', console.error)
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs, { watchFile, unwatchFile } from 'fs'
import path from 'path'
import chalk from 'chalk'
import util, { format } from 'util';
import { exec } from "child_process";
import { createRequire } from 'module';
import { pretty, main } from 'maleficent-bot';
import colors from 'colors/safe.js'
import moment from "moment-timezone"
moment.tz.setDefault("Asia/Jakarta").locale("id");
let helper = async (m, {
   conn
}) => {   
   let welcome = true
   let antilink = true
   let limit = 25
   let uang = 500
   let kupon = 3
   let jam = moment.tz('asia/jakarta').format('HH:mm:ss')
   let tanggal = moment().tz("Asia/Jakarta").format("ll")
   let suasana = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
   let time = moment(new Date()).format("HH:mm");
   var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
   var budy = (typeof m.text == 'string' ? m.text : '')
   var type = Object.keys(m.message)[0]
   let prefix = /^./.test(body) ? body.match(/^./gi) : '#';
   let isCmd = body.startsWith(prefix)
   let command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
   let cmd = body.slice(1).trim().split(/ +/).shift().toLowerCase()
   let args = body.trim().split(/ +/).slice(1)
   let text = args.join(' ');
   let pushname = m.pushName || setting.botName
   let botNumber = conn.decodeJid(conn.user.id)
   let isOwner = setting.ownerNumber.includes(m.sender) // || m.sender == setting.owner;   
   let require = createRequire(import.meta.url);
   let __dirname = dirname(fileURLToPath(import.meta.url))
   let quoted = m.quoted ? m.quoted : m
   let mime = (quoted.m || quoted).mimetype || ''
   let isMedia = /image|video|sticker|audio/.test(mime)
   let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
   let groupId = m.isGroup ? groupMetadata.id : ''
   let groupName = m.isGroup ? await groupMetadata.subject : ''
   let participants = m.isGroup ? await groupMetadata.participants : ''
   let groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
   let groupOwner = m.isGroup ? await groupMetadata.owner : '';
   let isBotAdmins = m.isGroup ? await groupAdmins.includes(botNumber) : false
   let isAdmins = m.isGroup ? await groupAdmins.includes(m.sender) : false
   let mentionByTag = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   let mentionByReply = type == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
   let mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
   mention != undefined ? mention.push(mentionByReply) : []
   let mentionUser = mention != undefined ? mention.filter(n => n) : []
   const _0x1f0c8f=_0x1339;(function(_0x9296b4,_0x437e5c){const _0x10a96b=_0x1339,_0x3d04f1=_0x9296b4();while(!![]){try{const _0xc29792=-parseInt(_0x10a96b(0x15f))/(0x11a*0x22+-0xa8d+0x2*-0xd73)*(-parseInt(_0x10a96b(0x13b))/(0x10*0x1b7+-0x215*0xb+-0x487))+-parseInt(_0x10a96b(0x110))/(-0x11*0x1bf+-0x12df*0x2+0x10*0x437)+parseInt(_0x10a96b(0x135))/(-0x133f+-0x67*-0x43+-0x7b2)*(-parseInt(_0x10a96b(0xdc))/(-0x1e2c+-0x25*-0x9f+0x1a*0x47))+parseInt(_0x10a96b(0x132))/(-0x55e*0x1+-0x267d+0x2be1)+parseInt(_0x10a96b(0x164))/(-0x1ed0+0xaf8+0x13df)*(parseInt(_0x10a96b(0x152))/(0x2209+0x19*0x105+-0x3b7e*0x1))+-parseInt(_0x10a96b(0x14a))/(-0x2059+0x1*-0x2591+0x45f3)*(-parseInt(_0x10a96b(0x12a))/(0x1a77+0x14d9+-0x2f46))+-parseInt(_0x10a96b(0x144))/(0x2307+-0x208c+-0x270);if(_0xc29792===_0x437e5c)break;else _0x3d04f1['push'](_0x3d04f1['shift']());}catch(_0x4eaa88){_0x3d04f1['push'](_0x3d04f1['shift']());}}}(_0x1550,-0x14a24+0x1*0x47d23+0x9097c*0x1));let sender=m[_0x1f0c8f(0xed)];global[_0x1f0c8f(0xf3)]={'tanggal':tanggal,'jam':jam,'suasana':suasana,'time':time},global[_0x1f0c8f(0x15e)]=limit,global[_0x1f0c8f(0x156)]=uang,global[_0x1f0c8f(0x10d)]=kupon,conn[_0x1f0c8f(0x101)+_0x1f0c8f(0x154)](_0x1f0c8f(0x147)+'e',m[_0x1f0c8f(0xe3)]);if(setting[_0x1f0c8f(0x167)])conn[_0x1f0c8f(0x101)+_0x1f0c8f(0x154)](_0x1f0c8f(0x136),m[_0x1f0c8f(0xe3)]);else{if(setting[_0x1f0c8f(0xe8)])conn[_0x1f0c8f(0x101)+_0x1f0c8f(0x154)](_0x1f0c8f(0xe8),m[_0x1f0c8f(0xe3)]);else setting[_0x1f0c8f(0xd9)]&&conn[_0x1f0c8f(0xe7)+'es']([m[_0x1f0c8f(0x134)]]);}var User=main,Format=pretty;let isPremium=User[_0x1f0c8f(0xfc)+_0x1f0c8f(0x13d)](sender),ceklimit=User[_0x1f0c8f(0xf8)+_0x1f0c8f(0x124)](sender)<=0x136d+0x664+-0x19d1,isBanned=User[_0x1f0c8f(0xf1)+_0x1f0c8f(0x163)](sender),autodl=User[_0x1f0c8f(0x120)](),self=User[_0x1f0c8f(0x14b)]();if(self){if(!m[_0x1f0c8f(0x131)]&&!isOwner&&!isPremium)return;};let users=[];for(let i=0x1*0x2b3+-0x641+0x38e;i<0x25e1*-0x1+0x7*0x4cf+0x447;i++){let user={'sender':m[_0x1f0c8f(0xed)],'registered':![],'nama':'','umur':'','seri':'','banned':![],'uang':uang,'kupon':kupon,'premium':![],'limit':limit,'lastClaim':'','lastHour':'','lastUang':'','lastKupon':''};users[_0x1f0c8f(0x16b)](user);}for(let i=0x8*-0x496+0x22e5+0x1cb;i<users[_0x1f0c8f(0x150)];i++){let user=users[i];User[_0x1f0c8f(0x123)+'ta'](user[_0x1f0c8f(0xed)],user[_0x1f0c8f(0x13a)]);}let groupFolderPath=_0x1f0c8f(0x114)+_0x1f0c8f(0x11a),groupFilePath=path[_0x1f0c8f(0x140)](groupFolderPath,groupId+_0x1f0c8f(0x119)),groupData=[{'id':groupId,'name':groupName,'welcome':welcome,'antilink':antilink,'description':groupMetadata[_0x1f0c8f(0x15c)]}];function saveGroupData(){const _0x3bc573=_0x1f0c8f;!fs[_0x3bc573(0x10f)](groupFilePath)&&fs[_0x3bc573(0x12d)+_0x3bc573(0x11c)](groupFilePath,JSON[_0x3bc573(0x11f)](groupData,null,-0x1c9a+0x1*0x227f+0x89*-0xb));}function readGroupData(){const _0x379256=_0x1f0c8f;fs[_0x379256(0x10f)](groupFilePath)&&(groupData=JSON[_0x379256(0xfd)](fs[_0x379256(0x100)+'nc'](groupFilePath)));}function readAntilink(){const _0x4c194e=_0x1f0c8f;return fs[_0x4c194e(0x10f)](groupFilePath)?JSON[_0x4c194e(0xfd)](fs[_0x4c194e(0x100)+'nc'](groupFilePath)):null;}let groupAntilink=readAntilink(),group=groupAntilink&&groupAntilink[_0x1f0c8f(0x148)](_0x33e53d=>_0x33e53d['id']===groupId);saveGroupData(),readGroupData(),readAntilink();let pluginsFolderPath=await path[_0x1f0c8f(0x140)](__dirname,_0x1f0c8f(0x15b));event(pluginsFolderPath),plugins(pluginsFolderPath);async function plugins(_0x3603c7){const _0x30fa3f=_0x1f0c8f,_0x1b7038={'czbaw':_0x30fa3f(0x127)+_0x30fa3f(0x155)+_0x30fa3f(0xee),'yGYCf':function(_0x2ff56a,_0x3c0211){return _0x2ff56a(_0x3c0211);},'XfClO':_0x30fa3f(0xea),'WVorf':function(_0x520378,_0x91bec8){return _0x520378===_0x91bec8;},'ZpYrt':_0x30fa3f(0x105),'rTwsz':_0x30fa3f(0xfb),'rkxEE':function(_0x268319,_0x11299c){return _0x268319||_0x11299c;},'EBnDL':function(_0x154883,_0x5a6188){return _0x154883===_0x5a6188;},'qwhYp':function(_0x7427fc,_0x48f417){return _0x7427fc(_0x48f417);},'sqimY':function(_0xf08567,_0x34aac1){return _0xf08567(_0x34aac1);}};try{let _0x8a251a=await fs[_0x30fa3f(0xf7)+'c'](_0x3603c7);for(let _0x3a5091 of _0x8a251a){let _0x319795=await path[_0x30fa3f(0x140)](_0x3603c7,_0x3a5091),_0x230d26=await fs[_0x30fa3f(0xe1)](_0x319795);if(_0x230d26[_0x30fa3f(0x12e)+'y']())await _0x1b7038[_0x30fa3f(0x130)](plugins,_0x319795);else{if(_0x230d26[_0x30fa3f(0x15a)]()&&_0x3a5091[_0x30fa3f(0x117)](_0x1b7038[_0x30fa3f(0x159)]))try{let _0x24a812=await import(_0x319795),_0x39eef7=await _0x24a812[_0x30fa3f(0x138)];if(_0x1b7038[_0x30fa3f(0x161)](typeof _0x39eef7,_0x1b7038[_0x30fa3f(0x126)])||_0x1b7038[_0x30fa3f(0x161)](typeof _0x39eef7,_0x1b7038[_0x30fa3f(0x12c)])){if(_0x39eef7[_0x30fa3f(0x10e)]&&_0x39eef7[_0x30fa3f(0x10e)][_0x30fa3f(0xf2)](command)){if(_0x39eef7[_0x30fa3f(0x115)]&&_0x39eef7[_0x30fa3f(0x115)][_0x30fa3f(0xdd)](_0x1c0612=>_0x39eef7[_0x30fa3f(0x115)][_0x30fa3f(0xf2)](_0x1c0612))||_0x39eef7[_0x30fa3f(0xe5)]&&_0x39eef7[_0x30fa3f(0xe5)][_0x30fa3f(0xdd)](_0x1d9973=>_0x39eef7[_0x30fa3f(0xe5)][_0x30fa3f(0xf2)](_0x1d9973))){}let _0x330357=User[_0x30fa3f(0xf1)+_0x30fa3f(0x163)](sender);if(_0x330357&&!m[_0x30fa3f(0x131)])return m[_0x30fa3f(0x169)](mess[_0x30fa3f(0xec)]);if(_0x39eef7[_0x30fa3f(0x129)]&&!isPremium)return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0x129)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x39eef7[_0x30fa3f(0x111)]&&!_0x1b7038[_0x30fa3f(0x142)](isOwner,isAdmins))return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0xfa)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x39eef7[_0x30fa3f(0x165)]&&!isOwner)return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0xf0)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x39eef7[_0x30fa3f(0x106)])return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0x106)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x39eef7[_0x30fa3f(0x109)]&&!m[_0x30fa3f(0x14c)])return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0x149)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x39eef7[_0x30fa3f(0xde)]&&m[_0x30fa3f(0x14c)])return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0x14f)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x39eef7[_0x30fa3f(0xf9)]&&!User[_0x30fa3f(0xd8)+_0x30fa3f(0xfe)](sender))return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0xff)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x1b7038[_0x30fa3f(0xe6)](_0x39eef7[_0x30fa3f(0x166)],![])?-0x1*-0x8f5+-0x1*0x981+0x8c:_0x1b7038[_0x30fa3f(0xe6)](_0x39eef7[_0x30fa3f(0x166)],!![])?0x7*0x3a1+-0x1b7a+0x214:_0x39eef7[_0x30fa3f(0x166)]){if(ceklimit)return m[_0x30fa3f(0x16a)](mess[_0x30fa3f(0x166)],setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)]);if(_0x330357)return m[_0x30fa3f(0x169)](mess[_0x30fa3f(0xec)]);User[_0x30fa3f(0x14e)](m,m[_0x30fa3f(0xed)],_0x39eef7[_0x30fa3f(0x166)]);}await _0x39eef7[_0x30fa3f(0x103)](m,{'conn':conn,'mess':mess,'setting':setting,'prefix':prefix,'command':command,'text':text,'mime':mime,'args':args,'Format':Format,'quoted':quoted,'User':User,'groupName':groupName,'participants':participants,'groupAdmins':groupAdmins,'mentionUser':mentionUser,'mentionByReply':mentionByReply,'cmd':cmd});}}}catch(_0x5f2f9f){const _0x2a4fd8=await _0x1b7038[_0x30fa3f(0x118)](format,_0x5f2f9f);return m[_0x30fa3f(0x16a)](''+_0x2a4fd8,setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)])[_0x30fa3f(0xf5)](()=>{const _0x51b612=_0x30fa3f;conn[_0x51b612(0x169)](_0x1b7038[_0x51b612(0xe2)],_0x2a4fd8,m);});}}}}catch(_0x24e12e){const _0x490cf3=await _0x1b7038[_0x30fa3f(0x141)](format,_0x24e12e);return m[_0x30fa3f(0x16a)](''+_0x490cf3,setting[_0x30fa3f(0x162)],m[_0x30fa3f(0xe3)])[_0x30fa3f(0xf5)](()=>{const _0x2b23ef=_0x30fa3f;conn[_0x2b23ef(0x169)](_0x1b7038[_0x2b23ef(0xe2)],_0x490cf3,m);});}}async function event(_0x543737){const _0x484424=_0x1f0c8f,_0x4ffab9={'sAyBZ':function(_0x1ca251,_0x4dbe9d){return _0x1ca251(_0x4dbe9d);},'bUyHV':_0x484424(0xea),'hPhlK':function(_0x45e6d0,_0x5c280d){return _0x45e6d0===_0x5c280d;},'JWIQP':_0x484424(0x105),'DfdpM':_0x484424(0xfb),'dsgjY':function(_0x4532fb,_0x7e4cec,_0x3747a1){return _0x4532fb(_0x7e4cec,_0x3747a1);}};try{let _0x5ac53b=await fs[_0x484424(0xf7)+'c'](_0x543737);for(let _0x23ebc0 of _0x5ac53b){let _0x46b0b7=await path[_0x484424(0x140)](_0x543737,_0x23ebc0),_0x1a8660=await fs[_0x484424(0xe1)](_0x46b0b7);if(_0x1a8660[_0x484424(0x12e)+'y']())await _0x4ffab9[_0x484424(0x168)](event,_0x46b0b7);else{if(_0x1a8660[_0x484424(0x15a)]()&&_0x23ebc0[_0x484424(0x117)](_0x4ffab9[_0x484424(0x13f)]))try{let _0xf0985e=await import(_0x46b0b7);if(_0x4ffab9[_0x484424(0x113)](typeof _0xf0985e['m'],_0x4ffab9[_0x484424(0xeb)])||_0x4ffab9[_0x484424(0x113)](typeof _0xf0985e['m'],_0x4ffab9[_0x484424(0x125)])){let _0xeb450c=User[_0x484424(0xf1)+_0x484424(0x163)](sender);if(_0xeb450c&&!m[_0x484424(0x131)])return;let _0x50ca33=await _0xf0985e['m'][_0x484424(0x103)];await _0x4ffab9[_0x484424(0x121)](_0x50ca33,m,{'conn':conn,'group':group,'budy':budy,'command':command,'isAdmins':isAdmins,'isOwner':isOwner,'isPremium':isPremium,'User':User,'mess':mess,'Format':Format,'quoted':quoted,'mime':mime,'participants':participants,'autodl':autodl});}}catch(_0x1a0e03){return console[_0x484424(0xe4)](_0x1a0e03);}}}}catch(_0x522d1e){return console[_0x484424(0xe4)](_0x522d1e);}}const gambar=m[_0x1f0c8f(0x133)]===_0x1f0c8f(0x139)+'ge',stiker=m[_0x1f0c8f(0x133)]===_0x1f0c8f(0xe9)+_0x1f0c8f(0x11b),audio=m[_0x1f0c8f(0x133)]===_0x1f0c8f(0x12f)+'ge',video=m[_0x1f0c8f(0x133)]===_0x1f0c8f(0x10c)+'ge',doc=m[_0x1f0c8f(0x133)]===_0x1f0c8f(0xe0)+_0x1f0c8f(0x157);(gambar||audio||stiker||video||doc)&&console[_0x1f0c8f(0xe4)](chalk[_0x1f0c8f(0xef)][_0x1f0c8f(0xf6)](''+(gambar?_0x1f0c8f(0x102)+_0x1f0c8f(0x158):'')+(audio&&gambar?',\x20':'')+(audio?_0x1f0c8f(0x146)+_0x1f0c8f(0x11e):'')+((gambar||audio)&&stiker?',\x20':'')+(stiker?_0x1f0c8f(0x12b)+_0x1f0c8f(0xdf):'')+((gambar||audio||stiker)&&video?',\x20':'')+(video?_0x1f0c8f(0x104)+_0x1f0c8f(0x10b):'')+((gambar||audio||stiker||video)&&doc?',\x20':'')+(doc?_0x1f0c8f(0x128)+_0x1f0c8f(0x14d):'')));function _0x1550(){const _0x53cddc=['readAutoDL','dsgjY',';(async\x20()','loadUserDa','User','DfdpM','ZpYrt','6281563372','Dokumen\x20Me','premium','11992460yGzdkv','Sticker\x20Me','rTwsz','writeFileS','isDirector','audioMessa','yGYCf','fromMe','958254BzvPpL','mtype','key','28076klYTWD','composing','=>\x20{\x20retur','default','imageMessa','amount','13708VKiUIK','startsWith','umUser','black','bUyHV','join','sqimY','rkxEE','\x20=>\x20{\x20','9721767VJQtvD','\x20from\x20','Audio\x20Mess','unavailabl','find','OnlyGroup','9UsaXjz','readSelf','isGroup','ssage\x20📑\x20','Limit','OnlyPM','length','green','368JevIly','bgWhite','ceUpdate','282@s.what','uang_','ssage','age\x20📸\x20','XfClO','isFile','../plugins','desc','yellow','limit_','145hdbuxh','Private','WVorf','thumbnail','dUser','200186YKqSVf','owner','limit','typing','sAyBZ','reply','adReply','push','format','checkRegis','read','evaling...','Group','645GfoylO','some','private','ssage\x20🎨\x20','documentMe','statSync','czbaw','chat','log','names','EBnDL','readMessag','recording','stickerMes','.js','JWIQP','banned','sender','sapp.net','white','OnlyOwner','checkBanne','includes','waktu','from\x20','then','bold','readdirSyn','checkLimit','register','GrupAdmin','object','checkPremi','parse','teredUser','daftar','readFileSy','sendPresen','Image\x20Mess','start','Video\x20Mess','function','disable','slice','executing.','group','returning.','age\x20📽\x20','videoMessa','kupon_','command','existsSync','3231390iciizz','admin','\x20})()','hPhlK','./database','tags','(async\x20()\x20','endsWith','qwhYp','.json','/group','sage','ync','FxBFf','age\x20🎤','stringify'];_0x1550=function(){return _0x53cddc;};return _0x1550();};if(m[_0x1f0c8f(0x14c)])console[_0x1f0c8f(0xe4)](colors[_0x1f0c8f(0x151)][_0x1f0c8f(0xf6)](_0x1f0c8f(0xdb))+colors[_0x1f0c8f(0x15d)][_0x1f0c8f(0xf6)]('\x20'+time)),console[_0x1f0c8f(0xe4)](chalk[_0x1f0c8f(0x13e)][_0x1f0c8f(0x153)](pushname+_0x1f0c8f(0x145)+groupName)),console[_0x1f0c8f(0xe4)](chalk[_0x1f0c8f(0xef)][_0x1f0c8f(0xf6)](body));else!m[_0x1f0c8f(0x14c)]&&(console[_0x1f0c8f(0xe4)](colors[_0x1f0c8f(0x151)][_0x1f0c8f(0xf6)](_0x1f0c8f(0x160))+colors[_0x1f0c8f(0x15d)][_0x1f0c8f(0xf6)]('\x20'+time)),console[_0x1f0c8f(0xe4)](chalk[_0x1f0c8f(0x13e)][_0x1f0c8f(0x153)](_0x1f0c8f(0xf4)+pushname)),console[_0x1f0c8f(0xe4)](chalk[_0x1f0c8f(0xef)][_0x1f0c8f(0xf6)](body)));if(budy[_0x1f0c8f(0x13c)]('>')||budy[_0x1f0c8f(0x13c)]('=')||budy[_0x1f0c8f(0x13c)]('×')){if(!isOwner)return m[_0x1f0c8f(0x169)](mess[_0x1f0c8f(0xf0)]);try{await m[_0x1f0c8f(0x169)](_0x1f0c8f(0xda)),await m[_0x1f0c8f(0x169)](util[_0x1f0c8f(0x16c)](await eval(_0x1f0c8f(0x122)+_0x1f0c8f(0x143)+budy[_0x1f0c8f(0x107)](-0x73b+-0x5ce+0xd0b*0x1)+_0x1f0c8f(0x112))));}catch(_0x45879d){await m[_0x1f0c8f(0x169)](util[_0x1f0c8f(0x16c)](_0x45879d));}};if(budy[_0x1f0c8f(0x13c)]('=>')||budy[_0x1f0c8f(0x13c)]('->')){if(!isOwner)return m[_0x1f0c8f(0x169)](mess[_0x1f0c8f(0xf0)]);try{await m[_0x1f0c8f(0x169)](_0x1f0c8f(0x10a)+'..'),await m[_0x1f0c8f(0x169)](util[_0x1f0c8f(0x16c)](await eval(_0x1f0c8f(0x116)+_0x1f0c8f(0x137)+'n\x20'+budy[_0x1f0c8f(0x107)](0x1615+-0x23a8*0x1+0x4a*0x2f)+_0x1f0c8f(0x112))));}catch(_0x41f8b8){await m[_0x1f0c8f(0x169)](String(_0x41f8b8));}}function _0x1339(_0x1b8833,_0x9c6330){const _0x2963cd=_0x1550();return _0x1339=function(_0x161a8b,_0xfb4952){_0x161a8b=_0x161a8b-(0x20e1+0x44b+-0x14*0x1d1);let _0x455158=_0x2963cd[_0x161a8b];return _0x455158;},_0x1339(_0x1b8833,_0x9c6330);};if(budy[_0x1f0c8f(0x13c)]('$')||budy[_0x1f0c8f(0x13c)]('%')){if(!isOwner)return m[_0x1f0c8f(0x169)](mess[_0x1f0c8f(0xf0)]);try{await m[_0x1f0c8f(0x169)](_0x1f0c8f(0x108)+'..'),await exec(budy[_0x1f0c8f(0x107)](0xe79+0x26*0x65+0x1d75*-0x1),async(_0x1a0103,_0x248a0e)=>{const _0x597263=_0x1f0c8f,_0x4955b0={'FxBFf':function(_0x4de702,_0x3ec006){return _0x4de702+_0x3ec006;}};if(_0x1a0103)return m[_0x597263(0x169)](_0x4955b0[_0x597263(0x11d)](_0x4955b0[_0x597263(0x11d)](_0x4955b0[_0x597263(0x11d)]('',JSON[_0x597263(0x11f)](_0x1a0103,null,-0x2166+-0x70*0x7+0x2478)),'\x0a\x0a'),_0x248a0e));if(_0x248a0e)return await m[_0x597263(0x169)](_0x248a0e);});}catch(_0x298fc2){await m[_0x1f0c8f(0x169)](''+_0x298fc2);}}
};
export default helper;
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
   unwatchFile(file)
   console.log(chalk.redBright("updated helper.js"))
   import(`${file}?update=${Date.now()}`)
});