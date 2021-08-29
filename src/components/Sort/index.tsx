import { MouseEvent, useState } from 'react';
import { StyledSort } from './style';
import { useDispatch, useSelector } from "react-redux";
import { BiSort } from "react-icons/bi";

import * as RadioActions from '../../store/actions/radioCP';
import { colors } from '../../utils/colors';

export function Sort() {

    //Redux Hooks
    const dispatch = useDispatch();
    const radioCP = useSelector((state: any) => state.radioCP);


    const [radioState, setRadioState] = useState('price');


    function handleRadioButtonSelect(e: MouseEvent) {


        const element = e.target as HTMLInputElement;
        setRadioState(element.value);

        dispatch(RadioActions.changeRadioValue(element.value));


    }

    async function handleToggleReverse(e: MouseEvent) {

         dispatch(RadioActions.changeRadioValue(radioCP.radioValue, !radioCP.reverse));

        
    }


    return (
        <StyledSort>
            <div>
                <input type="radio" id="html" name="sort" value="price"
                    checked={radioState === 'price' ? true : false}
                    onClick={handleRadioButtonSelect}
                />
                <label>Preço</label>
            </div>
            <div>
                <input type="radio" id="html" name="sort" value="score"
                    checked={radioState === 'score' ? true : false}
                    onClick={handleRadioButtonSelect}
                />
                <label>Popularidade</label>
            </div>
            <div>
                <input type="radio" id="html" name="sort" value="name"
                    checked={radioState === 'name' ? true : false}
                    onClick={handleRadioButtonSelect}
                />
                <label>Ordem alfabética</label>
            </div>
            <div>
                <button className="sort-button"
                    onClick={handleToggleReverse}
                >
                    <BiSort size={24} color={colors.white} />
                </button>
            </div>
        </StyledSort>
    )
}