import {readFile, writeFile} from "fs/promises";
import {join, dirname} from "path";
import { fileURLToPath } from "url";

 const __dirname = dirname(fileURLToPath(import.meta.url));
 const DB_PATH = join(__dirname, "accounts.json");

 