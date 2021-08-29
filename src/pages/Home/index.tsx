import React from 'react';
import { Header } from '../../components/Header';
import { Body } from './Body';
import { Content, Screen } from './styles';

//Redux 
import store from '../../store';
import { Provider } from 'react-redux';
import { Footer } from '../../components/Footer';


export function Home() {



    return (
        <Screen>
            <Provider store={store}>
                <Content>
                    <Header />
                    <Body />
                    <Footer />
                </Content>
            </Provider>
        </Screen>
    )
}