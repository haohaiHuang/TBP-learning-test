import { mkdir, copyFile } from "node:fs/promises";
import { dirname } from "node:path";

const from = new URL("../dist/index.html", import.meta.url);
const to = new URL("../dist/404.html", import.meta.url);

await mkdir(dirname(to.pathname), { recursive: true });
await copyFile(from, to);
