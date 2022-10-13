var Telegram=require('node-telegram-bot-api')
var bot=new Telegram('5491321695:AAGFSk-Vh7lsshmwarLzEhEwroV3YYwOAQc',{polling:true})


// group id = ...
var start = "/start";
var memmber = "/memmber";
var Admin_group=('-1001877369930')
var AHO_Founder_id=('905259902')
var AHO_Founder=('Amiro_im')
var Mobina_Admin=('')
var Elnaz_Admin=('@Elnaz_uu')
var worst_Admin=('@')
var bahar_Admin=('@Raidennnnnnn')
var gorbah=('@tinypsycho')
var chiki=('@Chiki_ehe_ehe')
var shinigami=('@TheUnstablePsycho')
var emma=('@')
var Mobina=('@inymbi')
var kana=('@Immeowka')
var power=('@SnowyDandelion')
var royac=('@night_meraas')
var pg=('@The_PG')
var wheretofindme=('@tra_petrichor')
var Rayla=('@bbyrylaw')
var Rolitafora=('@fora_cherry')
var eli=('@')
var xt=('@simlilx')
var deniz=('@thatsdeniz')
var daring=('@Lazypinkkitten')
var mob=('@Mobinatheory')
var roya=('@Royaf777')
var ati=('@D_uckling')
var cat=('@im_n3gin')
var azyn=('@Helpmeelmao')
var poldar=('@sheisbutterfly')
var gatto=('@gattohastam')
var yasi=('@Yume6791')
var reyhaneh=('@Pinbluke')
var kitty=('@pinky_satan')
var anya=('@xidontknowx')
var honey=('@TheyCallMeHoney')
var viana=('@Areyoulostbabygorila')
var titiw=('@StrawberryMeowlk')
var reyhana=('@thepinkkiitty')
var qzl=('@lambieqzl')


// bot.onText(memmber , msg=>{
//     bot.sendMessage(
//             {
//                 reply_markup : {
//                     'keyboard' : [
//                         ['Mobina'],
//                         ['Elnaz','Wrost','bahar'],
//                         ['AHO','Gorbah'],
//                         ['Chiki','Shinigami'],
//                         ['Emma','Mobina^'],
//                         ['kana','power'],
//                         ['royac','pg'],
//                         ['wheretofindme','Rayla'],
//                         ['Rolitafora','eli'],
//                         ['xt','deniz'],
//                         ['daring','mob'],
//                         ['roya','ati'],
//                         ['cat','azyn'],
//                         ['poldar','gatto'],
//                         ['yasi','reyhaneh'],
//                         ['kitty','anya'],
//                         ['honey','viana'],
//                         ['titiw','reyhana'],
//                         ['qzl']
//                     ]
//                 }
//             }
//         )
//     }
// )
// bot.on('message',async (msg) =>
//     {
//         console.log(msg.text);
        

//     }
// )



bot.on('message',async (msg) =>
    {
        console.log(msg);

        // if (msg.text.toString().toLowerCase().indexOf(start) === 0) {
        //     bot.sendMessage(msg.chat.id,
        //         " سلام این ربات صرفا " +
        //         "<b>جهت خندیدن و شوخی</b>" +
        //         " ساخته شده است  در صورت ناراحتی لفت بدهید و وقت مارا نگیرید " +
        //         "با تشکر."+
        //         "\n \n <i>سازنده بات: @Amiro_im</i>" + 
        //         " \n\n <b><a href=\"http://aho-amiro.ir/\">سایت ما ( کلیک کنید )</a></b>" +
        //         " \n <b>ᴄʀᴇᴀᴛᴇ ʙʏ ᴀʜᴏ ᴍᴀᴋᴇ ᴡɪᴛʜ ♡</b>" + 
        //         "\n <pre>ᴘʀᴏɢʀᴀᴍᴇᴅ ᴡɪᴛʜ ɴᴏᴅᴇ.ᴊꜱ</pre>" ,{parse_mode : "HTML"}
        //     );
        // }

        if (msg.chat.id == AHO_Founder_id ){
            bot.sendMessage(msg.chat.id=AHO_Founder_id , 
            " Welcome  Admin 🫡 " + 
            "\n What Can I Do For You?") ;
            bot.sendMessage(msg.chat.id=Admin_group ,
                 ' Admin ' +
                (msg.chat.first_name) +
                ' Send This Message : ' +
                msg.text)
                ;
        }
        else{
            bot.sendMessage(msg.chat.id , ' این پیامو 😁 : ' + msg.text + ' به ادمینم گفتم ') ;
            bot.sendMessage(msg.chat.id=Admin_group , ' Member ' + (msg.chat.first_name) + ' Send This Message : ' + msg.text) ;
        }

        if(msg.left_chat_member == true ){
            bot.sendMessage(msg.chat.id , "left_chat_member"
                );
        }

    }
);