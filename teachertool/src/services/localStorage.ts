import { ErrorCode } from "../types/errorCode";
import { logError } from "./loggingService";

const KEY_PREFIX = "teachertool";
const AUTORUN_KEY = [KEY_PREFIX, "autorun"].join("/");

function getValue(key: string, defaultValue?: string): string | undefined {
    return localStorage.getItem(key) || defaultValue;
}

function setValue(key: string, val: string) {
    localStorage.setItem(key, val);
}

function delValue(key: string) {
    localStorage.removeItem(key);
}

function getAutorun(): boolean {
    try {
        return getValue(AUTORUN_KEY, "false") === "true";
    } catch (e) {
        logError(ErrorCode.localStorageReadError, e);
        return false;
    }
}

function setAutorun(autorun: boolean) {
    try {
        setValue(AUTORUN_KEY, autorun.toString());
    } catch (e) {
        logError(ErrorCode.localStorageWriteError, e);
    }
}

export { getAutorun, setAutorun };