import { MouseEvent, useState } from 'react';
import { StyledSort } from './style';
import { useDispatch, useSelector} from "react-redux";

import * as RadioActions from '../../store/actions/radioCP';

export function Sort() {

    //Redux Hooks
    const dispatch = useDispatch();
    const radioCP = useSelector((state:any) => state.radioCP);


    const [radioState, setRadioState] = useState('Preço');
    

    function handleRadioButtonSelect(e: MouseEvent) {


        const element = e.target as HTMLInputElement;
        setRadioState(element.value);

        dispatch(RadioActions.changeRadioValue(element.value));


    }


    return (
        <StyledSort>
            <div>
                <input type="radio" id="html" name="sort" value="Preço"
                    checked={radioCP.radioValue === 'Preço' ? true : false}
                    onClick={handleRadioButtonSelect}
                />
                <label>Preço</label>
            </div>
            <div>
                <input type="radio" id="html" name="sort" value="Popularidade"
                    checked={radioCP.radioValue === 'Popularidade' ? true : false}
                    onClick={handleRadioButtonSelect}
                />
                <label>Popularidade</label>
            </div>
            <div>
                <input type="radio" id="html" name="sort" value="Ordem alfabética"
                    checked={radioCP.radioValue === 'Ordem alfabética' ? true : false}
                    onClick={handleRadioButtonSelect}
                />
                <label>Ordem alfabética</label>
            </div>
        </StyledSort>
    )
}