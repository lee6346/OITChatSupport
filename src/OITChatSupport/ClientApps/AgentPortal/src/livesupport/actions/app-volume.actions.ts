import { Action } from '@ngrx/store';

export const ENABLE_SOUND = '[Sound] ENABLE_SOUND';
export const CHANGE_SOUND_VOLUME = '[Sound] CHANGE_SOUND_VOLUME';

export class EnableSoundAction implements Action {
    readonly type = ENABLE_SOUND;
    constructor(public enable: boolean) { }
}

export class IncreaseSoundAction implements Action {
    readonly type = CHANGE_SOUND_VOLUME;
    constructor(public volume: number) { }
}

export type Actions
    = EnableSoundAction
    | IncreaseSoundAction;