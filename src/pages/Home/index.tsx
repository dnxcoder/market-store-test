import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Body } from './Body';
import { Content, Screen } from './styles';

//Redux 
import store from '../../store';
import { Provider } from 'react-redux';


export function Home() {



    return (
        <Screen>
            <Provider store={store}>
                <Content>
                    <Header />
                    <Body />
                </Content>
            </Provider>
        </Screen>
    )
}