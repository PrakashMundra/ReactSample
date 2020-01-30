import {APIConfig, Environment, LoggerConfig, LogLevel} from "./def";
import {BaseAPIConfig, BaseLoggerConfig} from "./BaseConfig";

class Config implements Environment {
    loggerConfig(): LoggerConfig {
        return new BaseLoggerConfig({logLevel: LogLevel.ALL, logFetch: false, logFetchJson: false, logRedux: false});
    }

    campaignsAPI(): APIConfig {
        return new BaseAPIConfig("https", "static.westwing.de", "cms");
    }
}

const config = new Config();
export default config;
