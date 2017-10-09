import { LiveRequest } from '../../shared/model/live-request.model';

export interface LiveRequestState {
    liveRequests: LiveRequest[];
}

export interface LiveRequestSummaryState {
    currentCount: number;
    shortestWaitTime: number;
    longestWaitTime: number;
    meanAverageWaitTime: number;
}