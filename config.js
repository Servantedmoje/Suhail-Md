const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169172727";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_58_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDE0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDg2LFxuICAgICAgICA0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1zNkVCS3d2cjRtOUd0dU1YQXFFd2ZJdm8rS040aERMVzRvVDE3cXlVNlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2OTE3MjcyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTA3OTMyRUEyQzMzMDc0NTJDMjU0RUVCNjcyNTU0RTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzI5MDg3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2OTE3MjcyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjY3MTgxM0Y1MEI5ODc5OEJENzNCNThFOUI3QzgzQkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzI5MDg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkgyTVVkTzBGVHhXOW54UHVqOEtGZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzdkN2EyNWUtYzlhMS00YTc2LWExYmEtMjk5ZjA0YjgwMGRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDIxOSxcbiAgICAgIDIxNSxcbiAgICAgIDIzMCxcbiAgICAgIDIyMixcbiAgICAgIDEzMixcbiAgICAgIDIxMCxcbiAgICAgIDEzNyxcbiAgICAgIDIyMCxcbiAgICAgIDcxLFxuICAgICAgMjIzLFxuICAgICAgMTY4LFxuICAgICAgMTQsXG4gICAgICAxMTEsXG4gICAgICAxNDksXG4gICAgICAyOSxcbiAgICAgIDU0LFxuICAgICAgMTk4LFxuICAgICAgNzEsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxOTQsXG4gICAgICA0MixcbiAgICAgIDkwLFxuICAgICAgNDAsXG4gICAgICAyMjcsXG4gICAgICAxMzEsXG4gICAgICA1MyxcbiAgICAgIDI0OSxcbiAgICAgIDY4LFxuICAgICAgMjE0LFxuICAgICAgODIsXG4gICAgICAxNzUsXG4gICAgICAxMjMsXG4gICAgICAyMyxcbiAgICAgIDIxMixcbiAgICAgIDE1MixcbiAgICAgIDE5NCxcbiAgICAgIDEwOSxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3TUVDU0RHUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2OTE3MjcyNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2hhcmlmc2hpdHR1MTAwMjJcIixcbiAgICBcImxpZFwiOiBcIjI1MzkxMDQxMzQ4ODMxMjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05INGlmMEJFTGZMNWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ0FuTzRtSE1ibnRBcGxkT1k3RTZHRXFITkZmdVlXN21iaGUwWjZMNk55UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtK1NXeGl0WTBSSW9iQnV5NlRIUkFHajJpUTV2WERMZld0bE85STdhUWF2djgxSlZVbEpQd3I3VDVUbmlkcFN3bnU1K1NKV2srWW5hK244Z1lzSGpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyNnlGNUFlSlJCM3kveXdGK3ZDRkMwRkM5bTMvMTFCVWFCemhnejllOTY1OGpNT0lxQW9VK1JvdUVqTG1CQlZ0UFRSYXp6TEwxNmo5bFgxb0FWNTVEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5MTcyNzI3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMjkwODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFdGlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV0aS5qc29uIjogIntcImtleURhdGFcIjpcIm5oNjVFRW55dVZNV3dCWmNDekhZeGZlc1BhdW41RUluNFBpZWdhbCs5TUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTMwNzQyMzUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzMjkwODcyNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
