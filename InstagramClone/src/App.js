import React, { Component } from "react";
import { View, Text } from 'react-native'

import Header from "./components/Header";
import Post from "./components/Post";

export default class App extends Component {
    render() {
        const comments = [{
            nickname: 'Joana Elena Silva',
            comments: 'Excelente Foto!'
        },{
            nickname: 'Rafael Gustavo Pereira',
            comments: 'Muito ruim! Faço melhor...'
        }]

        return (
            <View style={{ flex: 1 }}>
                <Header/>
                <Post image={require('../assets_lambe/assets/imgs/fence.jpg')}
                    comments={comments}
                />
            </View>
        )
    }
}