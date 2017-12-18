export type FilterType = "Sender" | "Keyword" | "Time" | "None";

export type MessageSender = "Bot" | "Agent" | "Student" | "All";

export interface MessageFilter {
    filterType: FilterType;
    filterValue: string;
}