import { EDITOR, PREVIEW } from "cc/env";


function getMatchServerUrl(): string {
    if (PREVIEW || EDITOR) {
        return 'http://127.0.0.1:3000';
    } else {
        return 'http://154.8.142.35:4000';
    }
}

export const FrontConfig = {
    // matchServer: 'https://k8w.cn/match-server/',
    matchServer: getMatchServerUrl(),
}