
export function logger({ getState }) {
    return next => action => {
        console.log("action", action);
        const returnVal = next(action);
        console.log('LOGGER : state when action is dispatched', getState());
        return returnVal;
    }
}
