import { ParsedResultItem } from "../interface/ParsedResultItem";
export default class CodeParser {
    private _instanceID;
    private _checkIsDisposed;
    /**
     * Core and license modules are required even when DCP is used stand-alone.
     * Keep createInstance() without CVR
     */
    static createInstance(): Promise<CodeParser>;
    dispose(): Promise<void>;
    /**
     * Returns whether the instance has been disposed.
     */
    protected bDestroyed: boolean;
    get disposed(): boolean;
    /**
     * @param settings A JSON string that represents the content of the settings.
     *
     * We can have some built-in templates to use
     */
    initSettings(settings: string): Promise<void>;
    /** InitSettingsFromFile is not supported by JS DCP yet */
    resetSettings(): Promise<void>;
    /**
     * Uint8Array means the array of bytes or the string to parse.
     */
    parse(source: Uint8Array | string, taskSettingName?: string): Promise<ParsedResultItem>;
    /**
     * In order to support incoming string format data, the string needs to be converted to binary
     */
    private _stringToUint8Array;
}
