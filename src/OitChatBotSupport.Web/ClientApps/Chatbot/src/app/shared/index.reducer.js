import { environment } from '../../environment/environment';
export var reducers = {};
export function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
export var metaReducers = !environment.production ? [logger] : [];
//# sourceMappingURL=index.reducer.js.map