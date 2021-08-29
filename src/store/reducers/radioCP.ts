const INITIAL_STATE = {

    radioValue: "Preço",
    reverse:false
}

export default function radioCP(state = INITIAL_STATE, action: any) {

    if (action.type === 'CHANGE_RADIO_VALUE') {

        return {
            radioValue: action.value,
            reverse: action.reverse
        }
    }

    return state;
}