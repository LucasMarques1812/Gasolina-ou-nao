import React, { useState } from "react";
import styles from "./style"
import {TouchableWithoutFeedback, TouchableOpacity, TextInput, Keyboard, Alert, Text, View} from 'react-native';

interface Props {
    name: string
}

const Results: React.FC<Props> = (name) => {
    const [value, setValue] = useState()

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                
            </View>
        </TouchableWithoutFeedback>
    )
}