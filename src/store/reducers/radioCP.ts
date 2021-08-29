const INITIAL_STATE = {

    radioValue: "Preço"
}

export default function radioCP(state = INITIAL_STATE, action: any) {

    if (action.type === 'CHANGE_RADIO_VALUE') {

        return {
            radioValue: action.value
        }
    }

    return state;
}