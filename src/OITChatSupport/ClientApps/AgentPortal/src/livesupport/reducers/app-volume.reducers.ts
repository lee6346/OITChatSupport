import * as appVolume from '../actions/app-volume.actions';

export interface State{
    enabled: boolean;
    volume: number;
}

export const initialState: State = {
    enabled: false,
    volume: 100
};

export function reducer(state = initialState, action: appVolume.Actions): State {

    switch (action.type) {
        case appVolume.ENABLE_SOUND:
            return Object.assign({}, state, {
                enabled: action.enable,
                volume: state.volume
            });
        case appVolume.CHANGE_SOUND_VOLUME:
            let newVolume = state.volume - action.volume;
            return Object.assign({}, state, {
                enabled: newVolume < 0 ? false : true,
                volume: newVolume < 0 ? 0 : newVolume
            });
        default:
            return state;
    }
}

export const getCurrentVolume = (state: State) => state.volume;
export const getVolumeEnabled = (state: State) => state.enabled;