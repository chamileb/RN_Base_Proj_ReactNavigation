
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


export default class MainView extends Component {
    render() {
        return (
            <View>
                <Text>MAIN VIEW</Text>
                <Button
                    onPress={() => { goToInner(this.props) }}
                    title="Go To Inner Page"
                    color="#841522"
                />
            </View>
        );
    }

}

const goToInner = (props) => {
    props.navigation.navigate('InnerView')
    console.log(props.navigation)

}
