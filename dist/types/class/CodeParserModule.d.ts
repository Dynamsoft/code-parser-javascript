export default class CodeParserModule {
    static getVersion(): string;
    static loadSpec(specificationName: string, specificationPath?: string): Promise<void>;
}
