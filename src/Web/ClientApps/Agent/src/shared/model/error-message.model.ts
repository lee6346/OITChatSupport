
/**
 * Indicate the level of severity in the error
 */
export const enum ErrorLevel {
    WARNING = 1,
    ERROR = 2,
    CRITICAL = 3
}
/**
 * Error message to send to server to log
 */
export class ErrorMessage {

    public message: string;
    public stackTrace: string;
    public level: ErrorLevel;

    constructor() { }

}