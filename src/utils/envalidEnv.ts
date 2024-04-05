import { cleanEnv, port, str, url} from "envalid";

export default function envalidEnv() {
    cleanEnv(process.env, {
        PORT: port(),
        FOLDER_LOGS: str(),
        URL_DB: url(),
    })
}
