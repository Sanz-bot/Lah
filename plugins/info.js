let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Dibuat dengan bahasa javascript via Node.Js karya SANZ ID

➥ Github: https://github.com/Sanz-bot/Lah
➥ Instagram: instagram.com/iksanzz-nation
➥ YouTube: MF GAMING

〘 Thanks To 〙 
➥ Allah SWT

〘 DONASI 〙 
➥ pulsa : 0882-1578-8716
➥ gopay : 0857-7185-3430
➥ Dana : 0857-7185-3430


〘 Miray-chan 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

