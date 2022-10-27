import { StyleSheet, View, Text } from 'react-native';

export default function Header() { 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Find the Nuts & Seeds</Text>
        </View> 
    ); 
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24, 
        color: '#e09f3e', 
        fontWeight: 'bold', 
        textAlign:'center'
    }, 
    container: {
        backgroundColor: '#540b0e', 
        marginTop: 20,
        padding: 15
    }
})
