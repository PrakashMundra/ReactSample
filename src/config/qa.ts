import {APIConfig, Environment, LoggerConfig, LogLevel} from "./def";
import {BaseAPIConfig, BaseLoggerConfig} from "./BaseConfig";

class Config implements Environment {
    loggerConfig(): LoggerConfig {
        return new BaseLoggerConfig({logLevel: LogLevel.ALL, logFetch: true, logFetchJson: true, logRedux: true});
    }

    campaignsAPI(): APIConfig {
        return new BaseAPIConfig("https", "static.westwing.de", "cms");
    }
}

const config = new Config();
export default config;
