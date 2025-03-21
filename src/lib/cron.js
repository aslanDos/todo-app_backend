import cron, { CronJob } from "cron";
import https from "https";

const job = new CronJob("*/14 * * * *", function() {
    https.
        get(process.env.API_URL, (res)=>{
            if(res.statusCode === 200) console.log("Get request sent successfuly");
            else console.log("Cron job failed", res.statusCode);
        })
        .on("error", (e) => console.error("Eror while sending request", e));
})

export default job;