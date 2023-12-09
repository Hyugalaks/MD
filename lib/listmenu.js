
const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User
   
┌►【*Owner Menu*】
│
│⌬ .self   *ᴏᴡɴᴇʀ*
│⌬ .public   *ᴏᴡɴᴇʀ*
│⌬ .join   *ᴏᴡɴᴇʀ*
│⌬ .bctext  *ᴏᴡɴᴇʀ*
│⌬ .bcimage  *ᴏᴡɴᴇʀ*
│⌬ .bcvideo  *ᴏᴡɴᴇʀ*
│⌬ .creategc  *ᴏᴡɴᴇʀ*
│⌬ .setexif  *ᴏᴡɴᴇʀ*
│⌬ .shutdown  *ᴏᴡɴᴇʀ*
│⌬ .autostickergc  *ᴏᴡɴᴇʀ*
│⌬ .setppbot  *ᴏᴡɴᴇʀ*
│⌬ .addprem  *ᴏᴡɴᴇʀ*
│⌬ .delprem  *ᴏᴡɴᴇʀ*
│⌬ .addowner  *ᴏᴡɴᴇʀ*
│⌬ .delowner  *ᴏᴡɴᴇʀ*
│⌬ .addvn  *ᴏᴡɴᴇʀ*
│⌬ .delvn  *ᴏᴡɴᴇʀ*
│⌬ .addsticker  *ᴏᴡɴᴇʀ*
│⌬ .delsticker  *ᴏᴡɴᴇʀ*
│⌬ .addimage  *ᴏᴡɴᴇʀ*
│⌬ .delimage  *ᴏᴡɴᴇʀ*
│⌬ .addvideo  *ᴏᴡɴᴇʀ*
│⌬ .delvideo  *ᴏᴡɴᴇʀ*
│⌬ .block add  *ᴏᴡɴᴇʀ*
│⌬ .unblock del  *ᴏᴡɴᴇʀ*
│⌬ .leavegc  *ᴏᴡɴᴇʀ*
└───────────────►

┌►【*Chat gpt*】
│
│⌬ .chatgpt  *ғʀᴇᴇ*
│⌬ .gpt  *ғʀᴇᴇ*
└───────────────►

┌►【*Remini*】
│
│⌬ .remini  *ғʀᴇᴇ*
│⌬ .hd  *ғʀᴇᴇ*
└───────────────►

┌►【*Download Menu*】
│
│⌬ .tiktok  *ғʀᴇᴇ*
│⌬ .tiktokaudio  *ғʀᴇᴇ*
│⌬ .ytsearch  *ғʀᴇᴇ*
│⌬ .mediafire  *ғʀᴇᴇ*
│⌬ .play  *ғʀᴇᴇ*
│⌬ .ytmp3  *ғʀᴇᴇ*
│⌬ .ytmp4  *ғʀᴇᴇ*
│⌬ .google  *ғʀᴇᴇ*
│⌬ .spotify  *ғʀᴇᴇ*
│⌬ .gitclone  *ғʀᴇᴇ*
│⌬ .happymod  *ғʀᴇᴇ*
└───────────────►

┌►【*Group Menu*】
│
│⌬ .antilink  *ɢʀᴏᴜᴘ*
│⌬ .antiwame  *ɢʀᴏᴜᴘ*
│⌬ .grouplink  *ɢʀᴏᴜᴘ*
│⌬ .ephemeral  *ɢʀᴏᴜᴘ*
│⌬ .delete  *ɢʀᴏᴜᴘ*
│⌬ .setppgroup  *ɢʀᴏᴜᴘ*
│⌬ .setname  *ɢʀᴏᴜᴘ*
│⌬ .setdesc  *ɢʀᴏᴜᴘ*
│⌬ .add  *ɢʀᴏᴜᴘ*
│⌬ .kick  *ɢʀᴏᴜᴘ*
│⌬ .promote  *ɢʀᴏᴜᴘ*
│⌬ .demote  *ɢʀᴏᴜᴘ*
│⌬ .hidetag  *ɢʀᴏᴜᴘ*
│⌬ .tagall  *ɢʀᴏᴜᴘ*
│⌬ .editinfo  *ɢʀᴏᴜᴘ*
│⌬ .opentime  *ɢʀᴏᴜᴘ*
│⌬ .closetime  *ɢʀᴏᴜᴘ*
│⌬ .resetlink  *ɢʀᴏᴜᴘ*
│⌬ .autostickerpc  *ɢʀᴏᴜᴘ*
│⌬ .antilinkgc  *ɢʀᴏᴜᴘ*
│⌬ .antiwame  *ɢʀᴏᴜᴘ*
│⌬ .antilinkall  *ɢʀᴏᴜᴘ*
│⌬ .antilinktiktok  *ɢʀᴏᴜᴘ*
│⌬ .antilinkfb  *ɢʀᴏᴜᴘ*
│⌬ .antilinktwitter  *ɢʀᴏᴜᴘ*
│⌬ .antilinkig  *ɢʀᴏᴜᴘ*
│⌬ .antlinktg  *ɢʀᴏᴜᴘ*
│⌬ .antilinkytvid  *ɢʀᴏᴜᴘ*
│⌬ .antilinkytch  *ɢʀᴏᴜᴘ*
│⌬ .antivirus  *ɢʀᴏᴜᴘ*
│⌬ .antitoxic  *ɢʀᴏᴜᴘ*
│⌬ .nsfw  *ɢʀᴏᴜᴘ*
│⌬ .react  *ɢʀᴏᴜᴘ*
└───────────────►

┌►【*Random Video*】
│
│⌬ .tiktokgirl  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktoknukthy  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokkayes  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokpanrika  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktoknotnot  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokghea  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktoksantuy  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokbocil  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►

┌►【*Stalker*】
│
│⌬ .igstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ffstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .mlstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .npmstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ghstalk  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►

┌►【*Other Menu*】
│
│⌬ .ping  *ғʀᴇᴇ*
│⌬ .menu  *ғʀᴇᴇ*
│⌬ .listpem  *ғʀᴇᴇ*
│⌬ .liststicker  *ғʀᴇᴇ*
│⌬ .listimage  *ғʀᴇᴇ*
│⌬ .listvideo  *ғʀᴇᴇ*
│⌬ .listvn  *ғʀᴇᴇ*
│⌬ .listbadword  *ғʀᴇᴇ*
│⌬ .listpc  *ғʀᴇᴇ*
│⌬ .listgc  *ғʀᴇᴇ*
│⌬ .owner  *ғʀᴇᴇ*
│⌬ .rentbot  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .listrentbot  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .donate  *ғʀᴇᴇ*
│⌬ .friend  *ғʀᴇᴇ*
│⌬ .obfuscate  *ғʀᴇᴇ*
│⌬ .styletext  *ғʀᴇᴇ*
│⌬ .fliptext  *ғʀᴇᴇ*
│⌬ .tts  *ғʀᴇᴇ*
│⌬ .say  *ғʀᴇᴇ*
│⌬ .togif  *ғʀᴇᴇ*
│⌬ .toqr  *ғʀᴇᴇ*
│⌬ .bass  *ғʀᴇᴇ*
│⌬ .blown  *ғʀᴇᴇ*
│⌬ .deep  *ғʀᴇᴇ*
│⌬ .earrape  *ғʀᴇᴇ*
│⌬ .fast  *ғʀᴇᴇ*
│⌬ .fat  *ғʀᴇᴇ*
│⌬ .nightcore  *ғʀᴇᴇ*
│⌬ .reverse  *ғʀᴇᴇ*
│⌬ .robot  *ғʀᴇᴇ*
│⌬ .slow  *ғʀᴇᴇ*
│⌬ .smooth  *ғʀᴇᴇ*
│⌬ .squirrel  *ғʀᴇᴇ*
│⌬ .tinyurl  *ғʀᴇᴇ*
│⌬ .tinyurl  *ғʀᴇᴇ*
│⌬ .tovn  *ғʀᴇᴇ*
│⌬ .toaudio  *ғʀᴇᴇ*
│⌬ .tomp3  *ғʀᴇᴇ*
│⌬ .tomp4 *ғʀᴇᴇ*
│⌬ .toimg  *ғʀᴇᴇ*
│⌬ .toonce  *ғʀᴇᴇ*
│⌬ .sticker  *ғʀᴇᴇ*
│⌬ .take  *ғʀᴇᴇ*
│⌬ .emoji  *ғʀᴇᴇ*
│⌬ .volume  *ғʀᴇᴇ*
│⌬ .ebinary  *ғʀᴇᴇ*
│⌬ .dbinary  *ғʀᴇᴇ*
│⌬ .ssweb  *ғʀᴇᴇ*
│⌬ .quoted  *ғʀᴇᴇ*
│⌬ .runtime  *ғʀᴇᴇ*
│⌬ .sound1 - sound161  *ғʀᴇᴇ*
└───────────────►

┌►【*Fun Menu*】
│
│⌬ .define  *ғʀᴇᴇ*
│⌬ .couple  *ғʀᴇᴇ*
│⌬ .soulmate  *ғʀᴇᴇ*
│⌬ .stupidcheck  *ғʀᴇᴇ*
│⌬ .handsomecheck  *ғʀᴇᴇ*
│⌬ .uncleancheck  *ғʀᴇᴇ*
│⌬ .hotcheck  *ғʀᴇᴇ*
│⌬ .smartcheck  *ғʀᴇᴇ*
│⌬ .greatcheck  *ғʀᴇᴇ*
│⌬ .evilcheck  *ғʀᴇᴇ*
│⌬ .dogcheck  *ғʀᴇᴇ*
│⌬ .coolcheck  *ғʀᴇᴇ*
│⌬ .waifucheck  *ғʀᴇᴇ*
│⌬ .awesomecheck  *ғʀᴇᴇ*
│⌬ .cutecheck  *ғʀᴇᴇ*
│⌬ .hornycheck  *ғʀᴇᴇ*
│⌬ .prettycheck  *ғʀᴇᴇ*
│⌬ .lovelycheck  *ғʀᴇᴇ*
│⌬ .uglycheck  *ғʀᴇᴇ*
│⌬ .hot  *ғʀᴇᴇ*
│⌬ .sexy  *ғʀᴇᴇ*
│⌬ .kind  *ғʀᴇᴇ*
│⌬ .idiot  *ғʀᴇᴇ*
│⌬ .handsome  *ғʀᴇᴇ*
│⌬ .beautiful  *ғʀᴇᴇ*
│⌬ .cute  *ғʀᴇᴇ*
│⌬ .pretty  *ғʀᴇᴇ*
│⌬ .noob  *ғʀᴇᴇ*
│⌬ .bastard  *ғʀᴇᴇ*
│⌬ .foolish  *ғʀᴇᴇ*
│⌬ .nerd  *ғʀᴇᴇ*
│⌬ .asshole  *ғʀᴇᴇ*
│⌬ .smart  *ғʀᴇᴇ*
│⌬ .stubble  *ғʀᴇᴇ*
│⌬ .doggo  *ғʀᴇᴇ*
│⌬ .horny  *ғʀᴇᴇ*
│⌬ .cunt  *ғʀᴇᴇ*
│⌬ .wibu  *ғʀᴇᴇ*
│⌬ .noobra  *ғʀᴇᴇ*
│⌬ .nibba  *ғʀᴇᴇ*
│⌬ .nibbi  *ғʀᴇᴇ*
│⌬ .comrade  *ғʀᴇᴇ*
│⌬ .mumu  *ғʀᴇᴇ*
│⌬ .rascal  *ғʀᴇᴇ*
│⌬ .scumbag  *ғʀᴇᴇ* 
│⌬ .nuts  *ғʀᴇᴇ*
│⌬ .fagot  *ғʀᴇᴇ*
│⌬ .scoundrel  *ғʀᴇᴇ*
│⌬ .ditch  *ғʀᴇᴇ*
│⌬ .dope  *ғʀᴇᴇ*
│⌬ .gucci  *ғʀᴇᴇ*
│⌬ .lit  *ғʀᴇᴇ*
│⌬ .dumbass  *ғʀᴇᴇ*
│⌬ .crackhead  *ғʀᴇᴇ*
│⌬ .mf  *ғʀᴇᴇ*
│⌬ .motherfucker  *ғʀᴇᴇ*
│⌬ .sucker  *ғʀᴇᴇ*
│⌬ .fuckboy  *ғʀᴇᴇ*
│⌬ .playboy  *ғʀᴇᴇ*
│⌬ .fuckgirl  *ғʀᴇᴇ*
│⌬ .playgirl  *ғʀᴇᴇ*
│⌬ .quotes  *ғʀᴇᴇ*
│⌬ .can  *ғʀᴇᴇ*
│⌬ .is  *ғʀᴇᴇ*
│⌬ .when  *ғʀᴇᴇ*
│⌬ .where  *ғʀᴇᴇ*
│⌬ .what  *ғʀᴇᴇ*
│⌬ .how  *ғʀᴇᴇ*
│⌬ .rate  *ғʀᴇᴇ*
│⌬ .cry  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kill  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hug  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pat  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .lick  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .kiss  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bite  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yeet  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bully  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bonk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wink  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .poke  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nom  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .slap  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smile  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .wave  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .awoo  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .blush  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smug  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .glomp  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .happy  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .dance  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cringe  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cuddle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .highfive  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .shinobu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .handhold  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .horny  *ғʀᴇᴇ*
│⌬ .checkme  *ғʀᴇᴇ*
│⌬ .confess  *ғʀᴇᴇ*
│⌬ .leave  *ғʀᴇᴇ*
└───────────────►

┌►【*Random Photo*】
│
│⌬ .aesthetic  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .coffee  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wikimedia  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wallpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .art  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bts  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .woof  *ғʀᴇᴇ*
│⌬ .meow  *ғʀᴇᴇ*
│⌬ .lizard  *ғʀᴇᴇ*
│⌬ .cosplay  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hacker  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cyber  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .gamewallpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .islamic  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .jennie  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .jiso  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .satanic  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .justina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cartoon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pentol  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cat  *ғʀᴇᴇ*
│⌬ .kpop  *ғʀᴇᴇ*
│⌬ .exo  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .lisa  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .space  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .car  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .technology  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bike  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shortquote  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .antiwork  *ғʀᴇᴇ*
│⌬ .hacking  *ғʀᴇᴇ*
│⌬ .boneka  *ғʀᴇᴇ*
│⌬ .rose  *ғʀᴇᴇ*
│⌬ .ryujin  *ғʀᴇᴇ*
│⌬ .ulzzangboy  *ғʀᴇᴇ*
│⌬ .ulzzanggirl  *ғʀᴇᴇ*
│⌬ .wallml  *ғʀᴇᴇ*
│⌬ .wallphone  *ғʀᴇᴇ*
│⌬ .mountain  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .goose  *ғʀᴇᴇ*
│⌬ .profilepic  *ғʀᴇᴇ*
│⌬ .couplepic  *ғʀᴇᴇ*
│⌬ .programming  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pubg  *ғʀᴇᴇ*
│⌬ .blackpink  *ғʀᴇᴇ*
│⌬ .randomboy  *ғʀᴇᴇ*  
│⌬ .randomgirl  *ғʀᴇᴇ*
│⌬ .hijab  *ғʀᴇᴇ*  
│⌬ .chinese  *ғʀᴇᴇ*
│⌬ .indo  *ғʀᴇᴇ*
│⌬ .japanese  *ғʀᴇᴇ*
│⌬ .korean  *ғʀᴇᴇ*
│⌬ .malay  *ғʀᴇᴇ*
│⌬ .thai  *ғʀᴇᴇ*
│⌬ .vietnamese  *ғʀᴇᴇ*
└───────────────►

┌►【*Anime*】
│
│⌬ .akira  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .akiyama  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ana  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .asuna  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ayuzawa  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .boruto  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .chiho  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .chitoge  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cosplayloli  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cosplaysagiri  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .deidara  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .doraemon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .elaina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .emilia  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .erza  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .gremory  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hestia  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hinata  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .husbu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .inori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .isuzu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .itachi  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .itori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kaga  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kagura  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kakasih  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kaori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .keneki  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kotori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kurumi  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .loli  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .madara  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .megumin  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .mikasa  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .mikey  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .miku  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .minato  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .naruto  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .neko  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .neko2  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nekonime  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nezuko  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .onepiece  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pokemon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .randomnime  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .randomnime2  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .rize  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sagiri  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sakura  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sasuke  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shinka  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shinomiya  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shizuka  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shota  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tejina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .toukachan  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tsunade  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .waifu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .animewall  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yotsuba  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yuki  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yulibocil  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yumeko  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .8ball  *ғʀᴇᴇ*
│⌬ .tickle  *ғʀᴇᴇ*
│⌬ .gecg  *ғʀᴇᴇ*
│⌬ .feed  *ғʀᴇᴇ*
└───────────────►

┌►【*Anime NSFW*】
│
│⌬ .hentai  *ғʀᴇᴇ*
│⌬ .gifhentai  *ғʀᴇᴇ*
│⌬ .gifblowjob  *ғʀᴇᴇ*
│⌬ .hentaivid  *ғʀᴇᴇ*
│⌬ .hneko  *ғʀᴇᴇ*
│⌬ .nwaifu  *ғʀᴇᴇ*
│⌬ .animespank  *ғʀᴇᴇ*
│⌬ .trap  *ғʀᴇᴇ*
│⌬ .gasm  *ғʀᴇᴇ*
│⌬ .ahegao  *ғʀᴇᴇ*
│⌬ .ass  *ғʀᴇᴇ*
│⌬ .bdsm  *ғʀᴇᴇ*
│⌬ .blowjob  *ғʀᴇᴇ*
│⌬ .cuckold  *ғʀᴇᴇ*
│⌬ .cum  *ғʀᴇᴇ*
│⌬ .milf  *ғʀᴇᴇ*
│⌬ .eba  *ғʀᴇᴇ*
│⌬ .ero  *ғʀᴇᴇ*
│⌬ .femdom  *ғʀᴇᴇ*
│⌬ .foot  *ғʀᴇᴇ*
│⌬ .gangbang  *ғʀᴇᴇ*
│⌬ .glasses  *ғʀᴇᴇ*
│⌬ .jahy  *ғʀᴇᴇ*
│⌬ .masturbation  *ғʀᴇᴇ*
│⌬ .manga  *ғʀᴇᴇ*
│⌬ .neko-hentai  *ғʀᴇᴇ*
│⌬ .neko-hentai2  *ғʀᴇᴇ*
│⌬ .nsfwloli  *ғʀᴇᴇ*
│⌬ .orgy  *ғʀᴇᴇ*
│⌬ .panties  *ғʀᴇᴇ* 
│⌬ .pussy  *ғʀᴇᴇ*
│⌬ .tentacles  *ғʀᴇᴇ*
│⌬ .thights  *ғʀᴇᴇ*
│⌬ .yuri  *ғʀᴇᴇ*
│⌬ .zettai  *ғʀᴇᴇ*
└───────────────►

┌►【*Textpro Maker*】
│
│⌬ .candy  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .christmas  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .3dchristmas  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .sparklechristmas  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .deepsea  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .scifi  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .rainbow  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .waterpipe  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .spooky  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .pencil  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .circuit  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .discovery  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .metalic  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .fiction  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .demon  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .transformer  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .berry  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .thunder  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .magma  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .3dstone  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .neonlight  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .glitch  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .harrypotter  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .brokenglass  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .papercut  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .watercolor  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .multicolor  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .neondevil  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .underwater  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .graffitibike  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .snow  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .cloud  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .honey  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .ice  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .fruitjuice  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .biscuit  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .wood  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .chocolate  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .strawberry  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .matrix  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .blood  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .dropwater  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .toxic  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .lava  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .rock  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .bloodglas  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .hallowen  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .darkgold  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .joker  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .wicker  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .firework  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .skeleton  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .blackpink  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .sand  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .glue  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .1917  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .leaves  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►

┌►【*PhotoOxy Maker*】
│
│⌬ .shadow  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .write  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .romantic  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .burnpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smoke  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .narutobanner  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .love  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .undergrass  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .doublelove  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .coffecup  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .underwaterocean  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smokyneon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .starstext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .rainboweffect  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .balloontext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .metalliceffect  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .embroiderytext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .flamingtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .stonetext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .writeart  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .summertext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wolfmetaltext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nature3dtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .rosestext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .naturetypography  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .quotesunder  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shinetext  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►

┌►【*Ephoto360 Maker*】
│
│⌬ .glitchtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .writetext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .advancedglow  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .typographytext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pixelglitch  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .neonglitch  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .flagtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .flag3dtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .deletingtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .blackpinkstyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .glowingtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .underwatertext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .logomaker  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cartoonstyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .papercutstyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .watercolortext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .effectclouds  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .blackpinklogo  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .gradienttext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .summerbeach  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .luxurygold  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .multicoloredneon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sandsummer  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .galaxywallpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .1917style  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .makingneon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .royaltext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .freecreate  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .galaxystyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .lighteffects  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►
`}

global.reminimenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Remini*】
│
│⌬ .remini. *ғʀᴇᴇ*
│⌬ .hd  *ғʀᴇᴇ*
└───────────────►

global.gptmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Chat gpt*】
│
│⌬ .chatgpt  *ғʀᴇᴇ*
│⌬ .gpt  *ғʀᴇᴇ*
└───────────────►

global.animemenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Anime*】
│
│⌬ .akira  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .akiyama  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ana  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .asuna  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ayuzawa  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .boruto  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .chiho  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .chitoge  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cosplayloli  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cosplaysagiri  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .deidara  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .doraemon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .elaina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .emilia  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .erza  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .gremory  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hestia  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hinata  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .husbu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .inori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .isuzu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .itachi  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .itori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kaga  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kagura  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kakasih  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kaori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .keneki  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kotori  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kurumi  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .loli  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .madara  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .megumin  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .mikasa  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .mikey  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .miku  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .minato  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .naruto  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .neko  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .neko2  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nekonime  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nezuko  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .onepiece  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pokemon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .randomnime  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .randomnime2  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .rize  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sagiri  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sakura  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sasuke  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shinka  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shinomiya  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shizuka  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shota  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tejina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .toukachan  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tsunade  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .waifu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .animewall  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yotsuba  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yuki  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yulibocil  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yumeko  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .8ball  *ғʀᴇᴇ*
│⌬ .tickle  *ғʀᴇᴇ*
│⌬ .gecg  *ғʀᴇᴇ*
│⌬ .feed  *ғʀᴇᴇ*
└───────────────►
`}

global.ownermenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Owner Menu*】
│
│⌬ .self  *ᴏᴡɴᴇʀ*
│⌬ .public  *ᴏᴡɴᴇʀ*
│⌬ .join  *ᴏᴡɴᴇʀ*
│⌬ .bctext  *ᴏᴡɴᴇʀ*
│⌬ .bcimage  *ᴏᴡɴᴇʀ*
│⌬ .bcvideo  *ᴏᴡɴᴇʀ*
│⌬ .creategc  *ᴏᴡɴᴇʀ*
│⌬ .setexif  *ᴏᴡɴᴇʀ*
│⌬ .shutdown  *ᴏᴡɴᴇʀ*
│⌬ .autostickergc  *ᴏᴡɴᴇʀ*
│⌬ .setppbot  *ᴏᴡɴᴇʀ*
│⌬ .addprem  *ᴏᴡɴᴇʀ*
│⌬ .delprem  *ᴏᴡɴᴇʀ*
│⌬ .addowner  *ᴏᴡɴᴇʀ*
│⌬ .delowner  *ᴏᴡɴᴇʀ*
│⌬ .addvn  *ᴏᴡɴᴇʀ*
│⌬ .delvn  *ᴏᴡɴᴇʀ*
│⌬ .addsticker  *ᴏᴡɴᴇʀ*
│⌬ .delsticker  *ᴏᴡɴᴇʀ*
│⌬ .addimage  *ᴏᴡɴᴇʀ*
│⌬ .delimage  *ᴏᴡɴᴇʀ*
│⌬ .addvideo  *ᴏᴡɴᴇʀ*
│⌬ .delvideo  *ᴏᴡɴᴇʀ*
│⌬ .block add  *ᴏᴡɴᴇʀ*
│⌬ .unblock del  *ᴏᴡɴᴇʀ*
│⌬ .leavegc  *ᴏᴡɴᴇʀ*
└───────────────►
`}

global.othermenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Other Menu*】
│
│⌬ .ping  *ғʀᴇᴇ*
│⌬ .menu  *ғʀᴇᴇ*
│⌬ .listpem  *ғʀᴇᴇ*
│⌬ .liststicker  *ғʀᴇᴇ*
│⌬ .listimage  *ғʀᴇᴇ*
│⌬ .listvideo  *ғʀᴇᴇ*
│⌬ .listvn  *ғʀᴇᴇ*
│⌬ .listbadword  *ғʀᴇᴇ*
│⌬ .listpc  *ғʀᴇᴇ*
│⌬ .listgc  *ғʀᴇᴇ*
│⌬ .owner  *ғʀᴇᴇ*
│⌬ .rentbot  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .listrentbot  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .donate  *ғʀᴇᴇ*
│⌬ .friend  *ғʀᴇᴇ*
│⌬ .obfuscate  *ғʀᴇᴇ*
│⌬ .styletext  *ғʀᴇᴇ*
│⌬ .fliptext  *ғʀᴇᴇ*
│⌬ .tts  *ғʀᴇᴇ*
│⌬ .say  *ғʀᴇᴇ*
│⌬ .togif  *ғʀᴇᴇ*
│⌬ .toqr  *ғʀᴇᴇ*
│⌬ .bass  *ғʀᴇᴇ*
│⌬ .blown  *ғʀᴇᴇ*
│⌬ .deep  *ғʀᴇᴇ*
│⌬ .earrape  *ғʀᴇᴇ*
│⌬ .fast  *ғʀᴇᴇ*
│⌬ .fat  *ғʀᴇᴇ*
│⌬ .nightcore  *ғʀᴇᴇ*
│⌬ .reverse  *ғʀᴇᴇ*
│⌬ .robot  *ғʀᴇᴇ*
│⌬ .slow  *ғʀᴇᴇ*
│⌬ .smooth  *ғʀᴇᴇ*
│⌬ .squirrel  *ғʀᴇᴇ*
│⌬ .tinyurl  *ғʀᴇᴇ*
│⌬ .tinyurl  *ғʀᴇᴇ*
│⌬ .tovn  *ғʀᴇᴇ*
│⌬ .toaudio  *ғʀᴇᴇ*
│⌬ .tomp3  *ғʀᴇᴇ*
│⌬ .tomp4 *ғʀᴇᴇ*
│⌬ .toimg  *ғʀᴇᴇ*
│⌬ .toonce  *ғʀᴇᴇ*
│⌬ .sticker  *ғʀᴇᴇ*
│⌬ .take  *ғʀᴇᴇ*
│⌬ .emoji  *ғʀᴇᴇ*
│⌬ .volume  *ғʀᴇᴇ*
│⌬ .ebinary  *ғʀᴇᴇ*
│⌬ .dbinary  *ғʀᴇᴇ*
│⌬ .ssweb  *ғʀᴇᴇ*
│⌬ .quoted  *ғʀᴇᴇ*
│⌬ .runtime  *ғʀᴇᴇ*
│⌬ .sound1 - sound161  *ғʀᴇᴇ*
└───────────────►
`}

global.downloadmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Download Menu*】
│
│⌬ .tiktok  *ғʀᴇᴇ*
│⌬ .tiktokaudio  *ғʀᴇᴇ*
│⌬ .ytsearch  *ғʀᴇᴇ*
│⌬ .mediafire  *ғʀᴇᴇ*
│⌬ .play  *ғʀᴇᴇ*
│⌬ .ytmp3  *ғʀᴇᴇ*
│⌬ .ytmp4  *ғʀᴇᴇ*
│⌬ .google  *ғʀᴇᴇ*
│⌬ .spotify  *ғʀᴇᴇ*
│⌬ .gitclone  *ғʀᴇᴇ*
│⌬ .happymod  *ғʀᴇᴇ*
└───────────────►
`}

global.groupmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Group Menu*】
│
│⌬ .antilink  *ɢʀᴏᴜᴘ*
│⌬ .antiwame  *ɢʀᴏᴜᴘ*
│⌬ .grouplink  *ɢʀᴏᴜᴘ*
│⌬ .ephemeral  *ɢʀᴏᴜᴘ*
│⌬ .delete  *ɢʀᴏᴜᴘ*
│⌬ .setppgroup  *ɢʀᴏᴜᴘ*
│⌬ .setname  *ɢʀᴏᴜᴘ*
│⌬ .setdesc  *ɢʀᴏᴜᴘ*
│⌬ .add  *ɢʀᴏᴜᴘ*
│⌬ .kick  *ɢʀᴏᴜᴘ*
│⌬ .promote  *ɢʀᴏᴜᴘ*
│⌬ .demote  *ɢʀᴏᴜᴘ*
│⌬ .hidetag  *ɢʀᴏᴜᴘ*
│⌬ .tagall  *ɢʀᴏᴜᴘ*
│⌬ .editinfo  *ɢʀᴏᴜᴘ*
│⌬ .opentime  *ɢʀᴏᴜᴘ*
│⌬ .closetime  *ɢʀᴏᴜᴘ*
│⌬ .resetlink  *ɢʀᴏᴜᴘ*
│⌬ .autostickerpc  *ɢʀᴏᴜᴘ*
│⌬ .antilinkgc  *ɢʀᴏᴜᴘ*
│⌬ .antiwame  *ɢʀᴏᴜᴘ*
│⌬ .antilinkall  *ɢʀᴏᴜᴘ*
│⌬ .antilinktiktok  *ɢʀᴏᴜᴘ*
│⌬ .antilinkfb  *ɢʀᴏᴜᴘ*
│⌬ .antilinktwitter  *ɢʀᴏᴜᴘ*
│⌬ .antilinkig  *ɢʀᴏᴜᴘ*
│⌬ .antlinktg  *ɢʀᴏᴜᴘ*
│⌬ .antilinkytvid  *ɢʀᴏᴜᴘ*
│⌬ .antilinkytch  *ɢʀᴏᴜᴘ*
│⌬ .antivirus  *ɢʀᴏᴜᴘ*
│⌬ .antitoxic  *ɢʀᴏᴜᴘ*
│⌬ .nsfw  *ɢʀᴏᴜᴘ*
│⌬ .react  *ɢʀᴏᴜᴘ*
└───────────────►
`}

global.funmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Fun Menu*】
│
│⌬ .define  *ғʀᴇᴇ*
│⌬ .couple  *ғʀᴇᴇ*
│⌬ .soulmate  *ғʀᴇᴇ*
│⌬ .stupidcheck  *ғʀᴇᴇ*
│⌬ .handsomecheck  *ғʀᴇᴇ*
│⌬ .uncleancheck  *ғʀᴇᴇ*
│⌬ .hotcheck  *ғʀᴇᴇ*
│⌬ .smartcheck  *ғʀᴇᴇ*
│⌬ .greatcheck  *ғʀᴇᴇ*
│⌬ .evilcheck  *ғʀᴇᴇ*
│⌬ .dogcheck  *ғʀᴇᴇ*
│⌬ .coolcheck  *ғʀᴇᴇ*
│⌬ .waifucheck  *ғʀᴇᴇ*
│⌬ .awesomecheck  *ғʀᴇᴇ*
│⌬ .cutecheck  *ғʀᴇᴇ*
│⌬ .hornycheck  *ғʀᴇᴇ*
│⌬ .prettycheck  *ғʀᴇᴇ*
│⌬ .lovelycheck  *ғʀᴇᴇ*
│⌬ .uglycheck  *ғʀᴇᴇ*
│⌬ .hot  *ғʀᴇᴇ*
│⌬ .sexy  *ғʀᴇᴇ*
│⌬ .kind  *ғʀᴇᴇ*
│⌬ .idiot  *ғʀᴇᴇ*
│⌬ .handsome  *ғʀᴇᴇ*
│⌬ .beautiful  *ғʀᴇᴇ*
│⌬ .cute  *ғʀᴇᴇ*
│⌬ .pretty  *ғʀᴇᴇ*
│⌬ .noob  *ғʀᴇᴇ*
│⌬ .bastard  *ғʀᴇᴇ*
│⌬ .foolish  *ғʀᴇᴇ*
│⌬ .nerd  *ғʀᴇᴇ*
│⌬ .asshole  *ғʀᴇᴇ*
│⌬ .smart  *ғʀᴇᴇ*
│⌬ .stubble  *ғʀᴇᴇ*
│⌬ .doggo  *ғʀᴇᴇ*
│⌬ .horny  *ғʀᴇᴇ*
│⌬ .cunt  *ғʀᴇᴇ*
│⌬ .wibu  *ғʀᴇᴇ*
│⌬ .noobra  *ғʀᴇᴇ*
│⌬ .nibba  *ғʀᴇᴇ*
│⌬ .nibbi  *ғʀᴇᴇ*
│⌬ .comrade  *ғʀᴇᴇ*
│⌬ .mumu  *ғʀᴇᴇ*
│⌬ .rascal  *ғʀᴇᴇ*
│⌬ .scumbag  *ғʀᴇᴇ* 
│⌬ .nuts  *ғʀᴇᴇ*
│⌬ .fagot  *ғʀᴇᴇ*
│⌬ .scoundrel  *ғʀᴇᴇ*
│⌬ .ditch  *ғʀᴇᴇ*
│⌬ .dope  *ғʀᴇᴇ*
│⌬ .gucci  *ғʀᴇᴇ*
│⌬ .lit  *ғʀᴇᴇ*
│⌬ .dumbass  *ғʀᴇᴇ*
│⌬ .crackhead  *ғʀᴇᴇ*
│⌬ .mf  *ғʀᴇᴇ*
│⌬ .motherfucker  *ғʀᴇᴇ*
│⌬ .sucker  *ғʀᴇᴇ*
│⌬ .fuckboy  *ғʀᴇᴇ*
│⌬ .playboy  *ғʀᴇᴇ*
│⌬ .fuckgirl  *ғʀᴇᴇ*
│⌬ .playgirl  *ғʀᴇᴇ*
│⌬ .quotes  *ғʀᴇᴇ*
│⌬ .can  *ғʀᴇᴇ*
│⌬ .is  *ғʀᴇᴇ*
│⌬ .when  *ғʀᴇᴇ*
│⌬ .where  *ғʀᴇᴇ*
│⌬ .what  *ғʀᴇᴇ*
│⌬ .how  *ғʀᴇᴇ*
│⌬ .rate  *ғʀᴇᴇ*
│⌬ .cry  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .kill  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hug  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pat  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .lick  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .kiss  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bite  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .yeet  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bully  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bonk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wink  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .poke  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nom  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .slap  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smile  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .wave  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .awoo  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .blush  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smug  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .glomp  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .happy  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .dance  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cringe  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cuddle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .highfive  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .shinobu  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .handhold  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .horny  *ғʀᴇᴇ*
│⌬ .checkme  *ғʀᴇᴇ*
│⌬ .confess  *ғʀᴇᴇ*
│⌬ .leave  *ғʀᴇᴇ*
└───────────────►
`}

global.stalkermenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Stalker*】
│
│⌬ .igstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ffstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .mlstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .npmstalk  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .ghstalk  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►
`}

global.randphotomenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Random Photo*】
│
│⌬ .aesthetic  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .coffee  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wikimedia  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wallpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .art  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bts  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .woof  *ғʀᴇᴇ*
│⌬ .meow  *ғʀᴇᴇ*
│⌬ .lizard  *ғʀᴇᴇ*
│⌬ .cosplay  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .hacker  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cyber  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .gamewallpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .islamic  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .jennie  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .jiso  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .satanic  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .justina  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cartoon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pentol  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cat  *ғʀᴇᴇ*
│⌬ .kpop  *ғʀᴇᴇ*
│⌬ .exo  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .lisa  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .space  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .car  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .technology  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .bike  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shortquote  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .antiwork  *ғʀᴇᴇ*
│⌬ .hacking  *ғʀᴇᴇ*
│⌬ .boneka  *ғʀᴇᴇ*
│⌬ .rose  *ғʀᴇᴇ*
│⌬ .ryujin  *ғʀᴇᴇ*
│⌬ .ulzzangboy  *ғʀᴇᴇ*
│⌬ .ulzzanggirl  *ғʀᴇᴇ*
│⌬ .wallml  *ғʀᴇᴇ*
│⌬ .wallphone  *ғʀᴇᴇ*
│⌬ .mountain  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .goose  *ғʀᴇᴇ*
│⌬ .profilepic  *ғʀᴇᴇ*
│⌬ .couplepic  *ғʀᴇᴇ*
│⌬ .programming  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pubg  *ғʀᴇᴇ*
│⌬ .blackpink  *ғʀᴇᴇ*
│⌬ .randomboy  *ғʀᴇᴇ*  
│⌬ .randomgirl  *ғʀᴇᴇ*
│⌬ .hijab  *ғʀᴇᴇ*  
│⌬ .chinese  *ғʀᴇᴇ*
│⌬ .indo  *ғʀᴇᴇ*
│⌬ .japanese  *ғʀᴇᴇ*
│⌬ .korean  *ғʀᴇᴇ*
│⌬ .malay  *ғʀᴇᴇ*
│⌬ .thai  *ғʀᴇᴇ*
│⌬ .vietnamese  *ғʀᴇᴇ*
└───────────────►
`}

global.randvideomenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Random Video*】
│
│⌬ .tiktokgirl  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktoknukthy  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokkayes  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokpanrika  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktoknotnot  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokghea  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktoksantuy  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .tiktokbocil  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►
`}

global.textpromenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Textpro Maker*】
│
│⌬ .candy  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .christmas  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .3dchristmas  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .sparklechristmas  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .deepsea  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .scifi  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .rainbow  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .waterpipe  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .spooky  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .pencil  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .circuit  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .discovery  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .metalic  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .fiction  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .demon  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .transformer  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .berry  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .thunder  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .magma  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .3dstone  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .neonlight  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .glitch  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .harrypotter  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .brokenglass  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .papercut  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .watercolor  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .multicolor  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .neondevil  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .underwater  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .graffitibike  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .snow  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .cloud  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .honey  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .ice  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .fruitjuice  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .biscuit  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .wood  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .chocolate  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .strawberry  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .matrix  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .blood  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .dropwater  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .toxic  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .lava  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .rock  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .bloodglas  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .hallowen  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .darkgold  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .joker  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .wicker  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .firework  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .skeleton  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .blackpink  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .sand  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .glue  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .1917  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .leaves  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────⌬
`}

global.photooxymenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
 *ɢʀᴏᴜᴘ* = For Group
 *ғʀᴇᴇ* = For Free User
 *ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*PhotoOxy Maker*】
│
│⌬ .shadow  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .write  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .romantic  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .burnpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smoke  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .narutobanner  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .love  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .undergrass  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .doublelove  *ᴘʀᴇᴍɪᴜᴍ* 
│⌬ .coffecup  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .underwaterocean  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .smokyneon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .starstext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .rainboweffect  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .balloontext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .metalliceffect  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .embroiderytext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .flamingtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .stonetext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .writeart  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .summertext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .wolfmetaltext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .nature3dtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .rosestext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .naturetypography  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .quotesunder  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .shinetext  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►
`}

global.ephoto360menu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
 *ғʀᴇᴇ* = For Free User
 *ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【*Ephoto360 Maker*】
│
│⌬ .glitchtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .writetext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .advancedglow  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .typographytext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .pixelglitch  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .neonglitch  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .flagtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .flag3dtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .deletingtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .blackpinkstyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .glowingtext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .underwatertext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .logomaker  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .cartoonstyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .papercutstyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .watercolortext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .effectclouds  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .blackpinklogo  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .gradienttext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .summerbeach  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .luxurygold  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .multicoloredneon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .sandsummer  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .galaxywallpaper  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .1917style  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .makingneon  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .royaltext  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .freecreate  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .galaxystyle  *ᴘʀᴇᴍɪᴜᴍ*
│⌬ .lighteffects  *ᴘʀᴇᴍɪᴜᴍ*
└───────────────►
`}

global.nsfwmenu = (prefix) => {
return `*ᴏᴡɴᴇʀ* = For Owner
*ɢʀᴏᴜᴘ* = For Group
*ғʀᴇᴇ* = For Free User
*ᴘʀᴇᴍɪᴜᴍ* = For Premium User

┌►【  *Anime NSFW*  】
│
│⌬ .hentai  *ғʀᴇᴇ*
│⌬ .gifhentai  *ғʀᴇᴇ*
│⌬ .gifblowjob  *ғʀᴇᴇ*
│⌬ .hentaivid  *ғʀᴇᴇ*
│⌬ .hneko  *ғʀᴇᴇ*
│⌬ .nwaifu  *ғʀᴇᴇ*
│⌬ .animespank  *ғʀᴇᴇ*
│⌬ .trap  *ғʀᴇᴇ*
│⌬ .gasm  *ғʀᴇᴇ*
│⌬ .ahegao  *ғʀᴇᴇ*
│⌬ .ass  *ғʀᴇᴇ*
│⌬ .bdsm  *ғʀᴇᴇ*
│⌬ .blowjob  *ғʀᴇᴇ*
│⌬ .cuckold  *ғʀᴇᴇ*
│⌬ .cum  *ғʀᴇᴇ*
│⌬ .milf  *ғʀᴇᴇ*
│⌬ .eba  *ғʀᴇᴇ*
│⌬ .ero  *ғʀᴇᴇ*
│⌬ .femdom  *ғʀᴇᴇ*
│⌬ .foot  *ғʀᴇᴇ*
│⌬ .gangbang  *ғʀᴇᴇ*
│⌬ .glasses  *ғʀᴇᴇ*
│⌬ .jahy  *ғʀᴇᴇ*
│⌬ .masturbation  *ғʀᴇᴇ*
│⌬ .manga  *ғʀᴇᴇ*
│⌬ .neko-hentai  *ғʀᴇᴇ*
│⌬ .neko-hentai2  *ғʀᴇᴇ*
│⌬ .nsfwloli  *ғʀᴇᴇ*
│⌬ .orgy  *ғʀᴇᴇ*
│⌬ .panties  *ғʀᴇᴇ* 
│⌬ .pussy  *ғʀᴇᴇ*
│⌬ .tentacles  *ғʀᴇᴇ*
│⌬ .thights  *ғʀᴇᴇ*
│⌬ .yuri  *ғʀᴇᴇ*
│⌬ .zettai  *ғʀᴇᴇ*
└───────────────►
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
