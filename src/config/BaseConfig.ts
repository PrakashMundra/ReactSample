import {APIConfig, LoggerConfig, LogLevel} from "./def";

export class BaseLoggerConfig implements LoggerConfig {
    static Defaults = {
        logLevel: LogLevel.OFF,
        logFetch: false,
        logFetchJson: false,
        logRedux: false,
    };
    logLevel: LogLevel;
    logFetch: boolean;
    logFetchJson: boolean;
    logRedux: boolean;

    constructor(opts?: { logLevel?: number, logFetch?: boolean, logFetchJson?: boolean, logRedux?: boolean }) {
        const opt = {...BaseLoggerConfig.Defaults, ...opts};
        this.logLevel = opt.logLevel;
        this.logFetch = opt.logFetch;
        this.logFetchJson = opt.logFetchJson;
        this.logRedux = opt.logRedux;
    }
}

export class BaseAPIConfig implements APIConfig {
    protected _protocol;
    protected _server;
    protected _application;
    protected _api;

    constructor(prot: string, server: string, app?: string, api?: string) {
        this._protocol = prot;
        this._server = server;
        this._application = app;
        this._api = api;
    }

    application(): string {
        return this._application;
    }

    endPoint(): string {
        if (this._api) {
            return `${this.protocol()}://${this.server()}/${this.application()}/${this._api}/`;
        } else if (this._application === "") {
            return `${this.protocol()}://${this.server()}/`;
        } else
            return `${this.protocol()}://${this.server()}/${this.application()}/`;
    }

    protocol(): string {
        return this._protocol;
    }

    server(): string {
        return this._server;
    }
}
