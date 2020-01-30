import config from "../config";

export function loadCampaigns() {
    return httpGet(config.campaignsAPI().endPoint() + "test/data.json");
}

export function httpGet(url, headers = {}) {
    return doApi(fetch(url,
        {
            method: "get",
            headers: buildHeaders(url, headers),
        },
    ), url);
}

function doApi(promise: Promise<Response>, url: string) {
    return promise.then((response) => {
        return response.json();
    }).then(jsonResponse => {
        return jsonResponse;
    });
}

export function httpPost(url, data, headers = {}) {
    if (data && typeof data === "object") {
        data = JSON.stringify(data);
    }
    return httpPostRaw(url, data, headers);
}

export function httpPostRaw(url, data, headers = {}) {
    return doApi(fetch(url, {
        method: "post",
        headers: buildHeaders(url, headers),
        body: data,
    }), url);
}

export function buildHeaders(url: string, extra?: any) {
    let headers: { [key: string]: string } = getCommonHeaders(url, extra);
    return new Headers(headers);
}

export function getCommonHeaders(url: string, extra?: any): { [key: string]: string } {
    let headers: { [key: string]: string } = {
        "Content-Type": "application/json",
        "Accept": "application/json, */*",
    };
    if (extra)
        return {...headers, ...extra};
    return headers;
}
