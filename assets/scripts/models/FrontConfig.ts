import { EDITOR, PREVIEW } from "cc/env";


function getMatchServerUrl(): string {
    if (PREVIEW || EDITOR) {
    // if(EDITOR) {
        return 'http://127.0.0.1:3000';
    } else {
        return 'http://thisewan.cn/lovelyus/match/';
    }
}

export const FrontConfig = {
    // matchServer: 'https://k8w.cn/match-server/',
    matchServer: getMatchServerUrl(),
}