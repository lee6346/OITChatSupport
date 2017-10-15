
export enum ErrorLevel {
    WARNING = 1,
    ERROR = 2,
    CRITICAL = 3
}
export interface ErrorMessage {

    message: string;
    stackTrace: string;
    level: ErrorLevel;



}