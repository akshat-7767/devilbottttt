const help = (prefix, copid, tanggal, jams, botname) => {
	return `「  *${botname}*  」

┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *⦿ Bot Prefix :* [all prefix]
│ *⦿ Owner :* {prefix}owner
│ *⦿ Today :* ${tanggal}
│ *⦿ Jam :* ${jams}
│ *⦿ Ig Devlop :* https://bit.ly/3hqqQzZ 
└┬────────────┈ ⳹
┌┤ 「  *Kasus Covid-19 Indonesia*  」
││➥ *Terinfeksi :* ${copid[0].kasus}
││➥ *Kematian :* ${copid[0].kematian}
││➥ *Sembuh :* ${copid[0].sembuh}
│└────────────┈ ⳹
│ 「 *Group Menu* 」
│◦➛ *${prefix}setname* [text]
│◦➛ *${prefix}setdesc* [text]
│◦➛ *${prefix}setpp* [img]
│◦➛ *${prefix}promote* [tag]
│◦➛ *${prefix}demote* [tag]
│◦➛ *${prefix}leave*
│◦➛ *${prefix}tagall* 
│◦➛ *${prefix}hidetag*
│◦➛ *${prefix}welcome* [1/0]
│◦➛ *${prefix}listadmin*
│◦➛ *${prefix}antilink* [1/0]
│◦➛ *${prefix}add* [62×××]
│◦➛ *${prefix}kick* [tag mem]
│◦➛ *${prefix}group* buka/tutup
├─────────────┈ ⳹
│ 「 *Maker* 」
│◦➛ *${prefix}tomp3*
│◦➛ *${prefix}tovn*
│◦➛ *${prefix}sticker*
│◦➛ *${prefix}swm* [author]|[pack]
│◦➛ *${prefix}tovideo*
│◦➛ *${prefix}toimg*
│◦➛ *${prefix}tts* [Text]
├─────────────┈ ⳹
│ 「 *Downloader* 」
│◦➛ *${prefix}ytmp3* [Url]
│◦➛ *${prefix}ytmp4* [Url]
│◦➛ *${prefix}dafontdown* [Url]
│◦➛ *${prefix}facebook* [Url]
│◦➛ *${prefix}instagram* [Url] [Options]
│◦➛ *${prefix}tiktok* [Url]
│◦➛ *${prefix}soundcloud* [Url]
│◦➛ *${prefix}pinterest* [Query]
│◦➛ *${prefix}play* [Query] [Options]
├─────────────┈ ⳹
│ 「 *Searching* 」
│◦➛ *${prefix}ytsearch* [Query]
│◦➛ *${prefix}brainly* [Query]
│◦➛ *${prefix}herolist*
│◦➛ *${prefix}herodetail* [Nama hero]
│◦➛ *${prefix}dafontsearch* [Query]
│◦➛ *${prefix}google* [Query]
│◦➛ *${prefix}wiki* [Query]
│◦➛ *${prefix}quotes* [Query]
│◦➛ *${prefix}preview* teks|ukuran 
│◦➛ *${prefix}ocr*
└┬────────────┈ ⳹
┌┤ 「 *Info Command* 」
││Tanda Kurung [ ] Hiraukan Contoh :
││ *${prefix}play fly away*
││
││Lapor Bug🐞: *${prefix}bugreport*
││Request? : *${prefix}request*
││owner? : *${prefix}owner*
│└────────────┈ ⳹
│ *©Copyright FebzGanz*
└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙`}

exports.help = help
