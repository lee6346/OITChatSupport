

export abstract class CommandPayload{
    mimeType: string;
    protected _data: any;

    constructor(payload?: any) {
        this._data = payload;
    }    

    abstract concat(payload: CommandPayload): CommandPayload;


    // blob: file-like object of immutable raw data
    // arraybuffer: object representing a generic fixed-length raw binary data buffer
    abstract serialize(): string | Blob | ArrayBuffer;

    abstract appendPair(key: any, value: any): void;

    abstract setData(data: any): void;

    abstract parse(data: any): any;
}