import express from "express";
import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import cors from "cors"


dotenv.config();

const app = express();

app.use(cors())

const PORT = 3000;

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences],
});

const HARDCODED_USER_ID = "1171750562639913012";
const STATUS_CACHE = new Map();
const CACHE_DURATION = 30 * 1000;


const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: { error: "Too many requests. Please try again later." }
});

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.login(process.env.TOKEN);

app.get("/status", limiter, async (req, res) => {
    try {
        const cachedData = STATUS_CACHE.get(HARDCODED_USER_ID);
        if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
            return res.json(cachedData.data);
        }

        const guild = client.guilds.cache.first();
        if (!guild) return res.status(404).json({ error: "Bot is not in any servers." });

        const member = await guild.members.fetch(HARDCODED_USER_ID);
        if (!member) return res.status(404).json({ error: "User not found." });

        const responseData = {
            userId: HARDCODED_USER_ID,
            username: member.user.tag,
            status: member.presence?.status || "unknown",
        };

        // Cache the response
        STATUS_CACHE.set(HARDCODED_USER_ID, {
            data: responseData,
            timestamp: Date.now(),
        });

        res.json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong." });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
