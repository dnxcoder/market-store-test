import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Body } from './Body'
import { Content, Screen } from './styles'

export function Home() {



    return (
        <Screen>
            <Content>
                <Header />
                <Body />
            </Content>
        </Screen>
    )
}