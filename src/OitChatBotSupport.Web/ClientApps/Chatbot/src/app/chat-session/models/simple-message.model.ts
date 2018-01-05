/**
 * The basic message information send from the chat window component: {@link ChatBotComponent}
 *
 * and normalized to the direct line message structure: {@link DirectLineService}
 */
export interface SimpleMessage {
    conversationId: string;
    text: string;
}

/**
 * Generate mock SimpleMessage object for testing
 */
export function MockSimpleMessage(): SimpleMessage {
    return {
        conversationId: 'js9ds0122',
        text: 'testing simple message'
    };
}