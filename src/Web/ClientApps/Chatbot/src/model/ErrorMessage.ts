export const enum ErrorLevel {
    WARNING = 1,
    ERROR = 2,
    CRITICAL = 3
}

export class ErrorMessage {

    public errorMessage: string;
    public errorStackTrack: string;
    public errorLevel: ErrorLevel;

}