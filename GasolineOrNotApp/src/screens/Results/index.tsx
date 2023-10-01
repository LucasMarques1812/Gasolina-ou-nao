import React, { useState } from "react";
import styles from "./style"
import {TouchableWithoutFeedback, TouchableOpacity, TextInput, Keyboard, Alert, Text, View, SafeAreaView} from 'react-native';

interface Props {
    name: string
}

const Results: React.FC<Props> = (name) => {
    const [value, setValue] = useState()

    return(
    <SafeAreaView>
        <View style={styles.container}>
            <TextInput>

            </TextInput>
            
            <TextInput>
                
            </TextInput>
        </View>
    </SafeAreaView>
    )
}