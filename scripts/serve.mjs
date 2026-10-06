// Usage: node scripts/serve.mjs <composition-dir> [--port 5173]
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startServer } from "./static-server.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const comp = args.find((a) => !a.startsWith("--")) || "apporteur-affaires-auto";
const portIdx = args.indexOf("--port");
const port = portIdx >= 0 ? Number(args[portIdx + 1]) : 5173;

const server = await startServer(ROOT, port);
console.log(`Preview: http://127.0.0.1:${server.address().port}/${comp}/`);
console.log("Espace = lecture/pause · ←/→ = ±1 s · ?t=12.5 pour ouvrir à un instant précis");
