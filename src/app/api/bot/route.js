export const dynamic = 'force-dynamic'

export const fetchCache = 'force-no-store'

import { Bot, webhookCallback } from 'grammy'

const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token)





const chat_id = process.env.CHAT_ID_GROUP;
const EVENT_NAME = "Launched Token TetrisChain"
const EVENT_TIME = "2025-07-25 20:00:00"


function getCountdown(eventTimeStr) {
    const eventTime = new Date(eventTimeStr); // format: '2025-07-30 20:00:00'
    const now = new Date();

    const deltaMs = eventTime - now;

    if (deltaMs <= 0) {
        return null;
    }

    const totalSeconds = Math.floor(deltaMs / 1000);
    const jam = Math.floor(totalSeconds / 3600);
    const menit = Math.floor((totalSeconds % 3600) / 60);
    const detik = totalSeconds % 60;

    return { jam, menit, detik };
}

function main(){
    if(!getCountdown(EVENT_TIME)){
        bot.api.sendMessage(chat_id, `${EVENT_NAME} is Live now Checkout https://x.com/tetrischain`)
    }

    const {jam, menit, detik } = getCountdown(EVENT_TIME);
    const CUSTOM_MESSAGE = `🚨Launch in ${jam} Hours ${menit} Minutes ${detik} Seconds. 
                  ⚡To The ${EVENT_NAME}."
                  🔥Stay Ready!."
                  🌐https://tetrischain.fun/`;
    
    bot.api.sendMessage(chat_id, CUSTOM_MESSAGE);
}

bot.on('message:text', async (ctx) => {
    let interval = null
    let menit = 1;
    if(ctx.message.text == "/slebeweuy"){
        interval = setInterval(()=> {
            main();
        }, (60*1000)*menit)
    }

    if(ctx.message.text == "/guesah"){
        clearInterval(interval);
    }

    
})



export const POST = webhookCallback(bot, 'std/http')

