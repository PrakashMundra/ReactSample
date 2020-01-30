export interface APIConfig {
    protocol(): string;

    server(): string;

    application(): string;

    endPoint(): string;
}

export interface LoggerConfig {
    logLevel: number;
    logFetch: boolean;
    logFetchJson: boolean;
    logRedux: boolean;
}

export enum LogLevel {
    ALL = 0,
    DEBUG = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    OFF = 5,
}

export interface Environment {
    loggerConfig(): LoggerConfig;

    campaignsAPI(): APIConfig;
}
