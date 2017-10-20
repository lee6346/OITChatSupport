export const enum ErrorLevel {
    WARNING = 1,
    ERROR = 2,
    CRITICAL = 3
}

export interface ErrorMessage {

    errorMessage: string;
    errorStackTrack: string;
    errorLevel: ErrorLevel;

}