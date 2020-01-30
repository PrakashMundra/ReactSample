import {APIConfig, Environment, LoggerConfig} from "./def";
import DevConfig from "./dev";
import QaConfig from "./qa";
import ProductionConfig from "./production";
import RNConfig from "react-native-config";

type environment = "dev" | "qa" | "production";

export interface BaseAppConfig extends Environment {
    setEnv(env: environment): void;
}

class AppConfig implements BaseAppConfig {
    // @ts-ignore
    private _env: environment;
    // @ts-ignore
    private _config: Environment;

    constructor(env: environment) {
        this.updateConfigEnv(env);
    }

    setEnv(env: environment): void {
        this._env = env;
    }

    loggerConfig(): LoggerConfig {
        return this._config.loggerConfig();
    }

    campaignsAPI(): APIConfig {
        return this._config.campaignsAPI();
    }

    private updateConfigEnv(env: environment) {
        this.setEnv(env);
        switch (this._env) {
            case "dev":
                this._config = DevConfig;
                break;

            case "qa":
                this._config = QaConfig;
                break;

            case "production":
                this._config = ProductionConfig;
                break;

            default:
                this._config = DevConfig;
        }
    }
}

const config: AppConfig = new AppConfig(RNConfig.APP_ENV);
export default config;
