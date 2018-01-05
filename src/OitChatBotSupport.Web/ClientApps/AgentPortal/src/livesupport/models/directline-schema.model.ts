export interface IDirectLineActivity {
    channelData?: object,
    channelId?: string,
    conversation: ConversationAccount,
    from: ChannelAccount,
    id: string,
    timestamp: string,
    type: string,
}

export interface MessageActivity extends IDirectLineActivity {
    type: "message",
    text: string,
    textFormat: "plain" | "markdown" | "xml",
    attachments?: Attachment[],
    attachmentLayout?: "list" | "carousel",
    inputHint?: string,
}

export interface EndConversation extends IDirectLineActivity {
    type: 'endOfConversation'
}

export interface EventActivity extends IDirectLineActivity {
    type: 'event',
    name: string,
    value: any,
}

export type Activity = MessageActivity | EndConversation | EventActivity;

export interface Attachment {
    contentType: string,
    contentUrl: string,
    name?: string,
    thumbnailUrl?: string
}

export interface ChannelAccount {
    id: string;
    name?: string;
}

export interface ConversationAccount {
    id: string;
    name?: string;
}

export interface Conversation {
    conversationId: string,
    expires_in: number,
    streamUrl?: string,
    token: string,
}

export interface DirectLineError {
    code: string;
    message: string;
}

export interface DirectLineErrorResponse {
    error: DirectLineError;
}

