
const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 】
│⌬.self 🅞
│⌬.public 🅞
│⌬.join 🅞
│⌬.bctext 🅞
│⌬.bcimage 🅞
│⌬.bcvideo 🅞
│⌬.creategc 🅞
│⌬.setexif 🅞
│⌬.shutdown 🅞
│⌬.autostickergc 🅞
│⌬.setppbot 🅞
│⌬.addprem 🅞
│⌬.delprem 🅞
│⌬.addowner 🅞
│⌬.delowner 🅞
│⌬.addvn 🅞
│⌬.delvn 🅞
│⌬.addsticker 🅞
│⌬.delsticker 🅞
│⌬.addimage 🅞
│⌬.delimage 🅞
│⌬.addvideo 🅞
│⌬.delvideo 🅞
│⌬.block add 🅞
│⌬.unblock del 🅞
│⌬.leavegc 🅞
└───────────────►

┌►【 𝗖𝗵𝗮𝘁 𝗚𝗽𝘁 】
│
│⌬ .chatgpt 🅕 
│⌬ .gpt 🅕 
└───────────────►

┌►【 𝗥𝗲𝗺𝗶𝗻𝗶 】
│
│⌬ .remini  🅕 
│⌬ .hd  🅕 
└───────────────►

┌►【 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 】
│⌬.tiktokvideo 🅕
│⌬.tiktokaudio 🅕
│⌬.ytsearch 🅕
│⌬.mediafire 🅕
│⌬.play 🅕
│⌬.ytmp3 🅕
│⌬.ytmp4 🅕
│⌬.google 🅕
│⌬.spotify 🅕
│⌬.gitclone 🅕
│⌬.happymod 🅕
└───────────────►

┌►【 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 】
│⌬.antilink 🅖
│⌬.antiwame 🅖
│⌬.grouplink 🅖
│⌬.ephemeral 🅖
│⌬.delete 🅖
│⌬.setppgroup 🅖
│⌬.setname 🅖
│⌬.setdesc 🅖
│⌬.add 🅖
│⌬.kick 🅖
│⌬.promote 🅖
│⌬.demote 🅖
│⌬.hidetag 🅖
│⌬.tagall 🅖
│⌬.editinfo 🅖
│⌬.opentime 🅖
│⌬.closetime 🅖
│⌬.resetlink 🅖
│⌬.autostickerpc 🅖
│⌬.antilinkgc 🅖
│⌬.antiwame 🅖
│⌬.antilinkall 🅖
│⌬.antilinktiktok 🅖
│⌬.antilinkfb 🅖
│⌬.antilinktwitter 🅖
│⌬.antilinkig 🅖
│⌬.antlinktg 🅖
│⌬.antilinkytvid 🅖
│⌬.antilinkytch 🅖
│⌬.antivirus 🅖
│⌬.antitoxic 🅖
│⌬.nsfw 🅖
│⌬.react 🅖
└───────────────►

┌►【 𝗥𝗮𝗻𝗱𝗼𝗺 𝗩𝗶𝗱𝗲𝗼 】
│⌬.tiktokgirl 🅟
│⌬.tiktoknukthy 🅟
│⌬.tiktokkayes 🅟
│⌬.tiktokpanrika 🅟
│⌬.tiktoknotnot 🅟
│⌬.tiktokghea 🅟
│⌬.tiktoksantuy 🅟
│⌬.tiktokbocil 🅟
└───────────────►

┌►【 𝗦𝘁𝗮𝗹𝗸𝗲𝗿 】
│⌬.igstalk 🅟
│⌬.ffstalk 🅟
│⌬.mlstalk 🅟
│⌬.npmstalk 🅟
│⌬.ghstalk 🅟
└───────────────►

┌►【 𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂 】
│⌬.ping 🅕
│⌬.menu 🅕
│⌬.listpem 🅕
│⌬.liststicker 🅕
│⌬.listimage 🅕
│⌬.listvideo 🅕
│⌬.listvn 🅕
│⌬.listbadword 🅕
│⌬.listpc 🅕
│⌬.listgc 🅕
│⌬.owner 🅕
│⌬.rentbot 🅟
│⌬.listrentbot 🅟
│⌬.donate 🅕
│⌬.friend 🅕
│⌬.obfuscate 🅕
│⌬.styletext 🅕
│⌬.fliptext 🅕
│⌬.tts 🅕
│⌬.say 🅕
│⌬.togif 🅕
│⌬.toqr 🅕
│⌬.bass 🅕
│⌬.blown 🅕
│⌬.deep 🅕
│⌬.earrape 🅕
│⌬.fast 🅕
│⌬.fat 🅕
│⌬.nightcore 🅕
│⌬.reverse 🅕
│⌬.robot 🅕
│⌬.slow 🅕
│⌬.smooth 🅕
│⌬.squirrel 🅕
│⌬.tinyurl 🅕
│⌬.tinyurl 🅕
│⌬.tovn 🅕
│⌬.toaudio 🅕
│⌬.tomp3 🅕
│⌬.tomp4🅕
│⌬.toimg 🅕
│⌬.toonce 🅕
│⌬.sticker 🅕
│⌬.take 🅕
│⌬.emoji 🅕
│⌬.volume 🅕
│⌬.ebinary 🅕
│⌬.dbinary 🅕
│⌬.ssweb 🅕
│⌬.quoted 🅕
│⌬.runtime 🅕
│⌬.sound1 - sound161 🅕
└───────────────►

┌►【 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 】
│⌬.define 🅕
│⌬.truth 🅕
│⌬.dare 🅕
│⌬.couple 🅕
│⌬.soulmate 🅕
│⌬.stupidcheck 🅕
│⌬.handsomecheck 🅕
│⌬.uncleancheck 🅕
│⌬.hotcheck 🅕
│⌬.smartcheck 🅕
│⌬.greatcheck 🅕
│⌬.evilcheck 🅕
│⌬.dogcheck 🅕
│⌬.coolcheck 🅕
│⌬.waifucheck 🅕
│⌬.awesomecheck 🅕
│⌬.gaycheck 🅕
│⌬.cutecheck 🅕
│⌬.lesbiancheck 🅕
│⌬.hornycheck 🅕
│⌬.prettycheck 🅕
│⌬.lovelycheck 🅕
│⌬.uglycheck 🅕
│⌬.hot 🅕
│⌬.sexy 🅕
│⌬.kind 🅕
│⌬.idiot 🅕
│⌬.handsome 🅕
│⌬.beautiful 🅕
│⌬.cute 🅕
│⌬.pretty 🅕
│⌬.lesbian 🅕
│⌬.noob 🅕
│⌬.bastard 🅕
│⌬.foolish 🅕
│⌬.nerd 🅕
│⌬.asshole 🅕
│⌬.gay 🅕
│⌬.smart 🅕
│⌬.stubble 🅕
│⌬.doggo 🅕
│⌬.horny 🅕
│⌬.cunt 🅕
│⌬.wibu 🅕
│⌬.noobra 🅕
│⌬.nibba 🅕
│⌬.nibbi 🅕
│⌬.comrade 🅕
│⌬.mumu 🅕
│⌬.rascal 🅕
│⌬.scumbag 🅕 
│⌬.nuts 🅕
│⌬.fagot 🅕
│⌬.scoundrel 🅕
│⌬.ditch 🅕
│⌬.dope 🅕
│⌬.gucci 🅕
│⌬.lit 🅕
│⌬.dumbass 🅕
│⌬.crackhead 🅕
│⌬.mf 🅕
│⌬.motherfucker 🅕
│⌬.sucker 🅕
│⌬.fuckboy 🅕
│⌬.playboy 🅕
│⌬.fuckgirl 🅕
│⌬.playgirl 🅕
│⌬.quotes 🅕
│⌬.can 🅕
│⌬.is 🅕
│⌬.when 🅕
│⌬.where 🅕
│⌬.what 🅕
│⌬.how 🅕
│⌬.rate 🅕
│⌬.cry 🅟
│⌬.kill 🅟
│⌬.hug 🅟
│⌬.pat 🅟
│⌬.lick 🅟 
│⌬.kiss 🅟
│⌬.bite 🅟
│⌬.yeet 🅟
│⌬.bully 🅟
│⌬.bonk 🅟
│⌬.wink 🅟
│⌬.poke 🅟
│⌬.nom 🅟
│⌬.slap 🅟
│⌬.smile 🅟 
│⌬.wave 🅟
│⌬.awoo 🅟
│⌬.blush 🅟
│⌬.smug 🅟
│⌬.glomp 🅟 
│⌬.happy 🅟
│⌬.dance 🅟
│⌬.cringe 🅟
│⌬.cuddle 🅟
│⌬.highfive 🅟 
│⌬.shinobu 🅟
│⌬.handhold 🅟
│⌬.horny 🅕
│⌬.checkme 🅕
│⌬.confess 🅕
│⌬.leave 🅕
└───────────────►

┌►【 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼 】
│⌬.aesthetic 🅟
│⌬.coffee 🅟
│⌬.wikimedia 🅟
│⌬.wallpaper 🅟
│⌬.art 🅟
│⌬.bts 🅟
│⌬.woof 🅕
│⌬.meow 🅕
│⌬.lizard 🅕
│⌬.cosplay 🅟
│⌬.hacker 🅟
│⌬.cyber 🅟
│⌬.gamewallpaper 🅟
│⌬.islamic 🅟
│⌬.jennie 🅟
│⌬.jiso 🅟
│⌬.satanic 🅟
│⌬.justina 🅟
│⌬.cartoon 🅟
│⌬.pentol 🅟
│⌬.cat 🅕
│⌬.kpop 🅕
│⌬.exo 🅟
│⌬.lisa 🅟
│⌬.space 🅟
│⌬.car 🅟
│⌬.technology 🅟
│⌬.bike 🅟
│⌬.shortquote 🅟
│⌬.antiwork 🅕
│⌬.hacking 🅕
│⌬.boneka 🅕
│⌬.rose 🅕
│⌬.ryujin 🅕
│⌬.ulzzangboy 🅕
│⌬.ulzzanggirl 🅕
│⌬.wallml 🅕
│⌬.wallphone 🅕
│⌬.mountain 🅟
│⌬.goose 🅕
│⌬.profilepic 🅕
│⌬.couplepic 🅕
│⌬.programming 🅟
│⌬.pubg 🅕
│⌬.blackpink 🅕
│⌬.randomboy 🅕  
│⌬.randomgirl 🅕
│⌬.hijab 🅕  
│⌬.chinese 🅕
│⌬.indo 🅕
│⌬.japanese 🅕
│⌬.korean 🅕
│⌬.malay 🅕
│⌬.thai 🅕
│⌬.vietnamese 🅕
└───────────────►

┌►【 𝗔𝗻𝗶𝗺𝗲 】
│⌬.akira 🅟
│⌬.akiyama 🅟
│⌬.ana 🅟
│⌬.asuna 🅟
│⌬.ayuzawa 🅟
│⌬.boruto 🅟
│⌬.chiho 🅟
│⌬.chitoge 🅟
│⌬.cosplayloli 🅟
│⌬.cosplaysagiri 🅟
│⌬.deidara 🅟
│⌬.doraemon 🅟
│⌬.elaina 🅟
│⌬.emilia 🅟
│⌬.erza 🅟
│⌬.gremory 🅟
│⌬.hestia 🅟
│⌬.hinata 🅟
│⌬.husbu 🅟
│⌬.inori 🅟
│⌬.isuzu 🅟
│⌬.itachi 🅟
│⌬.itori 🅟
│⌬.kaga 🅟
│⌬.kagura 🅟
│⌬.kakasih 🅟
│⌬.kaori 🅟
│⌬.keneki 🅟
│⌬.kotori 🅟
│⌬.kurumi 🅟
│⌬.loli 🅟
│⌬.madara 🅟
│⌬.megumin 🅟
│⌬.mikasa 🅟
│⌬.mikey 🅟
│⌬.miku 🅟
│⌬.minato 🅟
│⌬.naruto 🅟
│⌬.neko 🅟
│⌬.neko2 🅟
│⌬.nekonime 🅟
│⌬.nezuko 🅟
│⌬.onepiece 🅟
│⌬.pokemon 🅟
│⌬.randomnime 🅟
│⌬.randomnime2 🅟
│⌬.rize 🅟
│⌬.sagiri 🅟
│⌬.sakura 🅟
│⌬.sasuke 🅟
│⌬.shina 🅟
│⌬.shinka 🅟
│⌬.shinomiya 🅟
│⌬.shizuka 🅟
│⌬.shota 🅟
│⌬.tejina 🅟
│⌬.toukachan 🅟
│⌬.tsunade 🅟
│⌬.waifu 🅟
│⌬.animewall 🅟
│⌬.yotsuba 🅟
│⌬.yuki 🅟
│⌬.yulibocil 🅟
│⌬.yumeko 🅟
│⌬.8ball 🅕
│⌬.tickle 🅕
│⌬.gecg 🅕
│⌬.feed 🅕
└───────────────►

┌►【 𝗔𝗻𝗶𝗺𝗲 𝗡𝗦𝗙𝗪 】
│⌬.hentai 🅕
│⌬.gifhentai 🅕
│⌬.gifblowjob 🅕
│⌬.hentaivid 🅕
│⌬.hneko 🅕
│⌬.nwaifu 🅕
│⌬.animespank 🅕
│⌬.trap 🅕
│⌬.gasm 🅕
│⌬.ahegao 🅕
│⌬.ass 🅕
│⌬.bdsm 🅕
│⌬.blowjob 🅕
│⌬.cuckold 🅕
│⌬.cum 🅕
│⌬.milf 🅕
│⌬.eba 🅕
│⌬.ero 🅕
│⌬.femdom 🅕
│⌬.foot 🅕
│⌬.gangbang 🅕
│⌬.glasses 🅕
│⌬.jahy 🅕
│⌬.masturbation 🅕
│⌬.manga 🅕
│⌬.neko-hentai 🅕
│⌬.neko-hentai2 🅕
│⌬.nsfwloli 🅕
│⌬.orgy 🅕
│⌬.panties 🅕 
│⌬.pussy 🅕
│⌬.tentacles 🅕
│⌬.thights 🅕
│⌬.yuri 🅕
│⌬.zettai 🅕
└───────────────►

┌►【 𝗧𝗲𝘅𝘁𝗽𝗿𝗼 𝗠𝗮𝗸𝗲𝗿 】
│⌬.candy 🅟 
│⌬.christmas 🅟 
│⌬.3dchristmas 🅟 
│⌬.sparklechristmas 🅟
│⌬.deepsea 🅟 
│⌬.scifi 🅟 
│⌬.rainbow 🅟 
│⌬.waterpipe 🅟 
│⌬.spooky 🅟 
│⌬.pencil 🅟 
│⌬.circuit 🅟 
│⌬.discovery 🅟 
│⌬.metalic 🅟 
│⌬.fiction 🅟 
│⌬.demon 🅟 
│⌬.transformer 🅟 
│⌬.berry 🅟 
│⌬.thunder 🅟 
│⌬.magma 🅟 
│⌬.3dstone 🅟 
│⌬.neonlight 🅟 
│⌬.glitch 🅟 
│⌬.harrypotter 🅟 
│⌬.brokenglass 🅟 
│⌬.papercut 🅟 
│⌬.watercolor 🅟 
│⌬.multicolor 🅟 
│⌬.neondevil 🅟 
│⌬.underwater 🅟 
│⌬.graffitibike 🅟
│⌬.snow 🅟 
│⌬.cloud 🅟 
│⌬.honey 🅟 
│⌬.ice 🅟 
│⌬.fruitjuice 🅟 
│⌬.biscuit 🅟 
│⌬.wood 🅟 
│⌬.chocolate 🅟 
│⌬.strawberry 🅟 
│⌬.matrix 🅟 
│⌬.blood 🅟 
│⌬.dropwater 🅟 
│⌬.toxic 🅟 
│⌬.lava 🅟 
│⌬.rock 🅟 
│⌬.bloodglas 🅟 
│⌬.hallowen 🅟 
│⌬.darkgold 🅟 
│⌬.joker 🅟 
│⌬.wicker 🅟
│⌬.firework 🅟 
│⌬.skeleton 🅟 
│⌬.blackpink 🅟 
│⌬.sand 🅟 
│⌬.glue 🅟 
│⌬.1917 🅟 
│⌬.leaves 🅟
└───────────────►

┌►【 𝗣𝗵𝗼𝘁𝗼𝗢𝘅𝘆 𝗠𝗮𝗸𝗲𝗿 】
│⌬.shadow 🅟 
│⌬.write 🅟 
│⌬.romantic 🅟 
│⌬.burnpaper 🅟
│⌬.smoke 🅟 
│⌬.narutobanner 🅟 
│⌬.love 🅟 
│⌬.undergrass 🅟
│⌬.doublelove 🅟 
│⌬.coffecup 🅟
│⌬.underwaterocean 🅟
│⌬.smokyneon 🅟
│⌬.starstext 🅟
│⌬.rainboweffect 🅟
│⌬.balloontext 🅟
│⌬.metalliceffect 🅟
│⌬.embroiderytext 🅟
│⌬.flamingtext 🅟
│⌬.stonetext 🅟
│⌬.writeart 🅟
│⌬.summertext 🅟
│⌬.wolfmetaltext 🅟
│⌬.nature3dtext 🅟
│⌬.rosestext 🅟
│⌬.naturetypography 🅟
│⌬.quotesunder 🅟
│⌬.shinetext 🅟
└───────────────►

┌►【 𝗘𝗽𝗵𝗼𝘁𝗼360 𝗠𝗮𝗸𝗲𝗿 】
│⌬.glitchtext 🅟
│⌬.writetext 🅟
│⌬.advancedglow 🅟
│⌬.typographytext 🅟
│⌬.pixelglitch 🅟
│⌬.neonglitch 🅟
│⌬.flagtext 🅟
│⌬.flag3dtext 🅟
│⌬.deletingtext 🅟
│⌬.blackpinkstyle 🅟
│⌬.glowingtext 🅟
│⌬.underwatertext 🅟
│⌬.logomaker 🅟
│⌬.cartoonstyle 🅟
│⌬.papercutstyle 🅟
│⌬.watercolortext 🅟
│⌬.effectclouds 🅟
│⌬.blackpinklogo 🅟
│⌬.gradienttext 🅟
│⌬.summerbeach 🅟
│⌬.luxurygold 🅟
│⌬.multicoloredneon 🅟
│⌬.sandsummer 🅟
│⌬.galaxywallpaper 🅟
│⌬.1917style 🅟
│⌬.makingneon 🅟
│⌬.royaltext 🅟
│⌬.freecreate 🅟
│⌬.galaxystyle 🅟
│⌬.lighteffects 🅟
└───────────────►
`}

global.animemenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗔𝗻𝗶𝗺𝗲 】
│⌬.akira 🅟
│⌬.akiyama 🅟
│⌬.ana 🅟
│⌬.asuna 🅟
│⌬.ayuzawa 🅟
│⌬.boruto 🅟
│⌬.chiho 🅟
│⌬.chitoge 🅟
│⌬.cosplayloli 🅟
│⌬.cosplaysagiri 🅟
│⌬.deidara 🅟
│⌬.doraemon 🅟
│⌬.elaina 🅟
│⌬.emilia 🅟
│⌬.erza 🅟
│⌬.gremory 🅟
│⌬.hestia 🅟
│⌬.hinata 🅟
│⌬.husbu 🅟
│⌬.inori 🅟
│⌬.isuzu 🅟
│⌬.itachi 🅟
│⌬.itori 🅟
│⌬.kaga 🅟
│⌬.kagura 🅟
│⌬.kakasih 🅟
│⌬.kaori 🅟
│⌬.keneki 🅟
│⌬.kotori 🅟
│⌬.kurumi 🅟
│⌬.loli 🅟
│⌬.madara 🅟
│⌬.megumin 🅟
│⌬.mikasa 🅟
│⌬.mikey 🅟
│⌬.miku 🅟
│⌬.minato 🅟
│⌬.naruto 🅟
│⌬.neko 🅟
│⌬.neko2 🅟
│⌬.nekonime 🅟
│⌬.nezuko 🅟
│⌬.onepiece 🅟
│⌬.pokemon 🅟
│⌬.randomnime 🅟
│⌬.randomnime2 🅟
│⌬.rize 🅟
│⌬.sagiri 🅟
│⌬.sakura 🅟
│⌬.sasuke 🅟
│⌬.shina 🅟
│⌬.shinka 🅟
│⌬.shinomiya 🅟
│⌬.shizuka 🅟
│⌬.shota 🅟
│⌬.tejina 🅟
│⌬.toukachan 🅟
│⌬.tsunade 🅟
│⌬.waifu 🅟
│⌬.animewall 🅟
│⌬.yotsuba 🅟
│⌬.yuki 🅟
│⌬.yulibocil 🅟
│⌬.yumeko 🅟
│⌬.8ball 🅕
│⌬.tickle 🅕
│⌬.gecg 🅕
│⌬.feed 🅕
└───────────────►
`}

global.gptmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗖𝗵𝗮𝘁 𝗚𝗽𝘁 】
│
│⌬ .chatgpt 🅕 
│⌬ .gpt 🅕 
└───────────────►

global.reminimenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗥𝗲𝗺𝗶𝗻𝗶 】
│
│⌬ .remini  🅕 
│⌬ .hd  🅕 
└───────────────►

global.ownermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 】
│⌬.self 🅞
│⌬.public 🅞
│⌬.join 🅞
│⌬.bctext 🅞
│⌬.bcimage 🅞
│⌬.bcvideo 🅞
│⌬.creategc 🅞
│⌬.setexif 🅞
│⌬.shutdown 🅞
│⌬.autostickergc 🅞
│⌬.setppbot 🅞
│⌬.addprem 🅞
│⌬.delprem 🅞
│⌬.addowner 🅞
│⌬.delowner 🅞
│⌬.addvn 🅞
│⌬.delvn 🅞
│⌬.addsticker 🅞
│⌬.delsticker 🅞
│⌬.addimage 🅞
│⌬.delimage 🅞
│⌬.addvideo 🅞
│⌬.delvideo 🅞
│⌬.block add 🅞
│⌬.unblock del 🅞
│⌬.leavegc 🅞
└───────────────►
`}

global.othermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂 】
│⌬.ping 🅕
│⌬.menu 🅕
│⌬.listpem 🅕
│⌬.liststicker 🅕
│⌬.listimage 🅕
│⌬.listvideo 🅕
│⌬.listvn 🅕
│⌬.listbadword 🅕
│⌬.listpc 🅕
│⌬.listgc 🅕
│⌬.owner 🅕
│⌬.rentbot 🅟
│⌬.listrentbot 🅟
│⌬.donate 🅕
│⌬.friend 🅕
│⌬.obfuscate 🅕
│⌬.styletext 🅕
│⌬.fliptext 🅕
│⌬.tts 🅕
│⌬.say 🅕
│⌬.togif 🅕
│⌬.toqr 🅕
│⌬.bass 🅕
│⌬.blown 🅕
│⌬.deep 🅕
│⌬.earrape 🅕
│⌬.fast 🅕
│⌬.fat 🅕
│⌬.nightcore 🅕
│⌬.reverse 🅕
│⌬.robot 🅕
│⌬.slow 🅕
│⌬.smooth 🅕
│⌬.squirrel 🅕
│⌬.tinyurl 🅕
│⌬.tinyurl 🅕
│⌬.tovn 🅕
│⌬.toaudio 🅕
│⌬.tomp3 🅕
│⌬.tomp4🅕
│⌬.toimg 🅕
│⌬.toonce 🅕
│⌬.sticker 🅕
│⌬.take 🅕
│⌬.emoji 🅕
│⌬.volume 🅕
│⌬.ebinary 🅕
│⌬.dbinary 🅕
│⌬.ssweb 🅕
│⌬.quoted 🅕
│⌬.runtime 🅕
│⌬.sound1 - sound161 🅕
└───────────────►
`}

global.downloadmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂 】
│⌬.tiktokvideo 🅕
│⌬.tiktokaudio 🅕
│⌬.ytsearch 🅕
│⌬.mediafire 🅕
│⌬.play 🅕
│⌬.ytmp3 🅕
│⌬.ytmp4 🅕
│⌬.google 🅕
│⌬.spotify 🅕
│⌬.gitclone 🅕
│⌬.happymod 🅕
└───────────────►
`}

global.groupmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂 】
│⌬.antilink 🅖
│⌬.antiwame 🅖
│⌬.grouplink 🅖
│⌬.ephemeral 🅖
│⌬.delete 🅖
│⌬.setppgroup 🅖
│⌬.setname 🅖
│⌬.setdesc 🅖
│⌬.add 🅖
│⌬.kick 🅖
│⌬.promote 🅖
│⌬.demote 🅖
│⌬.hidetag 🅖
│⌬.tagall 🅖
│⌬.editinfo 🅖
│⌬.opentime 🅖
│⌬.closetime 🅖
│⌬.resetlink 🅖
│⌬.autostickerpc 🅖
│⌬.antilinkgc 🅖
│⌬.antiwame 🅖
│⌬.antilinkall 🅖
│⌬.antilinktiktok 🅖
│⌬.antilinkfb 🅖
│⌬.antilinktwitter 🅖
│⌬.antilinkig 🅖
│⌬.antlinktg 🅖
│⌬.antilinkytvid 🅖
│⌬.antilinkytch 🅖
│⌬.antivirus 🅖
│⌬.antitoxic 🅖
│⌬.nsfw 🅖
│⌬.react 🅖
└───────────────►
`}

global.funmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 】
│⌬.define 🅕
│⌬.truth 🅕
│⌬.dare 🅕
│⌬.couple 🅕
│⌬.soulmate 🅕
│⌬.stupidcheck 🅕
│⌬.handsomecheck 🅕
│⌬.uncleancheck 🅕
│⌬.hotcheck 🅕
│⌬.smartcheck 🅕
│⌬.greatcheck 🅕
│⌬.evilcheck 🅕
│⌬.dogcheck 🅕
│⌬.coolcheck 🅕
│⌬.waifucheck 🅕
│⌬.awesomecheck 🅕
│⌬.gaycheck 🅕
│⌬.cutecheck 🅕
│⌬.lesbiancheck 🅕
│⌬.hornycheck 🅕
│⌬.prettycheck 🅕
│⌬.lovelycheck 🅕
│⌬.uglycheck 🅕
│⌬.hot 🅕
│⌬.sexy 🅕
│⌬.kind 🅕
│⌬.idiot 🅕
│⌬.handsome 🅕
│⌬.beautiful 🅕
│⌬.cute 🅕
│⌬.pretty 🅕
│⌬.lesbian 🅕
│⌬.noob 🅕
│⌬.bastard 🅕
│⌬.foolish 🅕
│⌬.nerd 🅕
│⌬.asshole 🅕
│⌬.gay 🅕
│⌬.smart 🅕
│⌬.stubble 🅕
│⌬.doggo 🅕
│⌬.horny 🅕
│⌬.cunt 🅕
│⌬.wibu 🅕
│⌬.noobra 🅕
│⌬.nibba 🅕
│⌬.nibbi 🅕
│⌬.comrade 🅕
│⌬.mumu 🅕
│⌬.rascal 🅕
│⌬.scumbag 🅕 
│⌬.nuts 🅕
│⌬.fagot 🅕
│⌬.scoundrel 🅕
│⌬.ditch 🅕
│⌬.dope 🅕
│⌬.gucci 🅕
│⌬.lit 🅕
│⌬.dumbass 🅕
│⌬.crackhead 🅕
│⌬.mf 🅕
│⌬.motherfucker 🅕
│⌬.sucker 🅕
│⌬.fuckboy 🅕
│⌬.playboy 🅕
│⌬.fuckgirl 🅕
│⌬.playgirl 🅕
│⌬.quotes 🅕
│⌬.can 🅕
│⌬.is 🅕
│⌬.when 🅕
│⌬.where 🅕
│⌬.what 🅕
│⌬.how 🅕
│⌬.rate 🅕
│⌬.cry 🅟
│⌬.kill 🅟
│⌬.hug 🅟
│⌬.pat 🅟
│⌬.lick 🅟 
│⌬.kiss 🅟
│⌬.bite 🅟
│⌬.yeet 🅟
│⌬.bully 🅟
│⌬.bonk 🅟
│⌬.wink 🅟
│⌬.poke 🅟
│⌬.nom 🅟
│⌬.slap 🅟
│⌬.smile 🅟 
│⌬.wave 🅟
│⌬.awoo 🅟
│⌬.blush 🅟
│⌬.smug 🅟
│⌬.glomp 🅟 
│⌬.happy 🅟
│⌬.dance 🅟
│⌬.cringe 🅟
│⌬.cuddle 🅟
│⌬.highfive 🅟 
│⌬.shinobu 🅟
│⌬.handhold 🅟
│⌬.horny 🅕
│⌬.checkme 🅕
│⌬.confess 🅕
│⌬.leave 🅕
└───────────────►
`}

global.Stalkermenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗦𝘁𝗮𝗹𝗸𝗲𝗿 】
│⌬.igstalk 🅟
│⌬.ffstalk 🅟
│⌬.mlstalk 🅟
│⌬.npmstalk 🅟
│⌬.ghstalk 🅟
└───────────────►
`}

global.randphotomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼 】
│⌬.aesthetic 🅟
│⌬.coffee 🅟
│⌬.wikimedia 🅟
│⌬.wallpaper 🅟
│⌬.art 🅟
│⌬.bts 🅟
│⌬.woof 🅕
│⌬.meow 🅕
│⌬.lizard 🅕
│⌬.cosplay 🅟
│⌬.hacker 🅟
│⌬.cyber 🅟
│⌬.gamewallpaper 🅟
│⌬.islamic 🅟
│⌬.jennie 🅟
│⌬.jiso 🅟
│⌬.satanic 🅟
│⌬.justina 🅟
│⌬.cartoon 🅟
│⌬.pentol 🅟
│⌬.cat 🅕
│⌬.kpop 🅕
│⌬.exo 🅟
│⌬.lisa 🅟
│⌬.space 🅟
│⌬.car 🅟
│⌬.technology 🅟
│⌬.bike 🅟
│⌬.shortquote 🅟
│⌬.antiwork 🅕
│⌬.hacking 🅕
│⌬.boneka 🅕
│⌬.rose 🅕
│⌬.ryujin 🅕
│⌬.ulzzangboy 🅕
│⌬.ulzzanggirl 🅕
│⌬.wallml 🅕
│⌬.wallphone 🅕
│⌬.mountain 🅟
│⌬.goose 🅕
│⌬.profilepic 🅕
│⌬.couplepic 🅕
│⌬.programming 🅟
│⌬.pubg 🅕
│⌬.blackpink 🅕
│⌬.randomboy 🅕  
│⌬.randomgirl 🅕
│⌬.hijab 🅕  
│⌬.chinese 🅕
│⌬.indo 🅕
│⌬.japanese 🅕
│⌬.korean 🅕
│⌬.malay 🅕
│⌬.thai 🅕
│⌬.vietnamese 🅕
└───────────────►
`}

global.randvideomenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗥𝗮𝗻𝗱𝗼𝗺 𝗩𝗶𝗱𝗲𝗼 】
│⌬.tiktokgirl 🅟
│⌬.tiktoknukthy 🅟
│⌬.tiktokkayes 🅟
│⌬.tiktokpanrika 🅟
│⌬.tiktoknotnot 🅟
│⌬.tiktokghea 🅟
│⌬.tiktoksantuy 🅟
│⌬.tiktokbocil 🅟
└───────────────►
`}

global.textpromenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗧𝗲𝘅𝘁𝗽𝗿𝗼 𝗠𝗮𝗸𝗲𝗿 】
│⌬.candy 🅟 
│⌬.christmas 🅟 
│⌬.3dchristmas 🅟 
│⌬.sparklechristmas 🅟
│⌬.deepsea 🅟 
│⌬.scifi 🅟 
│⌬.rainbow 🅟 
│⌬.waterpipe 🅟 
│⌬.spooky 🅟 
│⌬.pencil 🅟 
│⌬.circuit 🅟 
│⌬.discovery 🅟 
│⌬.metalic 🅟 
│⌬.fiction 🅟 
│⌬.demon 🅟 
│⌬.transformer 🅟 
│⌬.berry 🅟 
│⌬.thunder 🅟 
│⌬.magma 🅟 
│⌬.3dstone 🅟 
│⌬.neonlight 🅟 
│⌬.glitch 🅟 
│⌬.harrypotter 🅟 
│⌬.brokenglass 🅟 
│⌬.papercut 🅟 
│⌬.watercolor 🅟 
│⌬.multicolor 🅟 
│⌬.neondevil 🅟 
│⌬.underwater 🅟 
│⌬.graffitibike 🅟
│⌬.snow 🅟 
│⌬.cloud 🅟 
│⌬.honey 🅟 
│⌬.ice 🅟 
│⌬.fruitjuice 🅟 
│⌬.biscuit 🅟 
│⌬.wood 🅟 
│⌬.chocolate 🅟 
│⌬.strawberry 🅟 
│⌬.matrix 🅟 
│⌬.blood 🅟 
│⌬.dropwater 🅟 
│⌬.toxic 🅟 
│⌬.lava 🅟 
│⌬.rock 🅟 
│⌬.bloodglas 🅟 
│⌬.hallowen 🅟 
│⌬.darkgold 🅟 
│⌬.joker 🅟 
│⌬.wicker 🅟
│⌬.firework 🅟 
│⌬.skeleton 🅟 
│⌬.blackpink 🅟 
│⌬.sand 🅟 
│⌬.glue 🅟 
│⌬.1917 🅟 
│⌬.leaves 🅟
└───────────────►
`}

global.photooxymenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗣𝗵𝗼𝘁𝗼𝗢𝘅𝘆 𝗠𝗮𝗸𝗲𝗿 】
│⌬.shadow 🅟 
│⌬.write 🅟 
│⌬.romantic 🅟 
│⌬.burnpaper 🅟
│⌬.smoke 🅟 
│⌬.narutobanner 🅟 
│⌬.love 🅟 
│⌬.undergrass 🅟
│⌬.doublelove 🅟 
│⌬.coffecup 🅟
│⌬.underwaterocean 🅟
│⌬.smokyneon 🅟
│⌬.starstext 🅟
│⌬.rainboweffect 🅟
│⌬.balloontext 🅟
│⌬.metalliceffect 🅟
│⌬.embroiderytext 🅟
│⌬.flamingtext 🅟
│⌬.stonetext 🅟
│⌬.writeart 🅟
│⌬.summertext 🅟
│⌬.wolfmetaltext 🅟
│⌬.nature3dtext 🅟
│⌬.rosestext 🅟
│⌬.naturetypography 🅟
│⌬.quotesunder 🅟
│⌬.shinetext 🅟
└───────────────►
`}

global.ephoto360menu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗘𝗽𝗵𝗼𝘁𝗼360 𝗠𝗮𝗸𝗲𝗿 】
│⌬.glitchtext 🅟
│⌬.writetext 🅟
│⌬.advancedglow 🅟
│⌬.typographytext 🅟
│⌬.pixelglitch 🅟
│⌬.neonglitch 🅟
│⌬.flagtext 🅟
│⌬.flag3dtext 🅟
│⌬.deletingtext 🅟
│⌬.blackpinkstyle 🅟
│⌬.glowingtext 🅟
│⌬.underwatertext 🅟
│⌬.logomaker 🅟
│⌬.cartoonstyle 🅟
│⌬.papercutstyle 🅟
│⌬.watercolortext 🅟
│⌬.effectclouds 🅟
│⌬.blackpinklogo 🅟
│⌬.gradienttext 🅟
│⌬.summerbeach 🅟
│⌬.luxurygold 🅟
│⌬.multicoloredneon 🅟
│⌬.sandsummer 🅟
│⌬.galaxywallpaper 🅟
│⌬.1917style 🅟
│⌬.makingneon 🅟
│⌬.royaltext 🅟
│⌬.freecreate 🅟
│⌬.galaxystyle 🅟
│⌬.lighteffects 🅟
└───────────────►
`}

global.nsfwmenu = (prefix) => {
return `🅞 = For Owner
🅖 = For Group
🅕 = For Free User
🅟 = For Premium User

┌►【 𝗔𝗻𝗶𝗺𝗲 𝗡𝗦𝗙𝗪 】
│⌬.hentai 🅕
│⌬.gifhentai 🅕
│⌬.gifblowjob 🅕
│⌬.hentaivid 🅕
│⌬.hneko 🅕
│⌬.nwaifu 🅕
│⌬.animespank 🅕
│⌬.trap 🅕
│⌬.gasm 🅕
│⌬.ahegao 🅕
│⌬.ass 🅕
│⌬.bdsm 🅕
│⌬.blowjob 🅕
│⌬.cuckold 🅕
│⌬.cum 🅕
│⌬.milf 🅕
│⌬.eba 🅕
│⌬.ero 🅕
│⌬.femdom 🅕
│⌬.foot 🅕
│⌬.gangbang 🅕
│⌬.glasses 🅕
│⌬.jahy 🅕
│⌬.masturbation 🅕
│⌬.manga 🅕
│⌬.neko-hentai 🅕
│⌬.neko-hentai2 🅕
│⌬.nsfwloli 🅕
│⌬.orgy 🅕
│⌬.panties 🅕 
│⌬.pussy 🅕
│⌬.tentacles 🅕
│⌬.thights 🅕
│⌬.yuri 🅕
│⌬.zettai 🅕
└───────────────►
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})