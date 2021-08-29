export function changeRadioValue(value:string, reverse = false){

    return {
        type: "CHANGE_RADIO_VALUE",
        value,
        reverse
    }
}