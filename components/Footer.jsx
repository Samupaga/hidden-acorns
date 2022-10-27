import { StyleSheet, View, Text } from 'react-native';

export default function  Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Squirrel Games Inc.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18, 
        color: '#e09f3e', 
        textAlign:'center'
    }, 
    container: {
        backgroundColor: '#540b0e', 
        padding: 15
    }
})
