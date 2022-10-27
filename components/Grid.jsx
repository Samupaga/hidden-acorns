import { React, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import leaves from '../assets/leaves.png';
import acorn from '../assets/acorn.png';
import seeds from '../assets/seeds.png';
import angry from '../assets/angry-squirrel.png';

export default function Grid() {
    const [items, setItems] = useState([
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png'),
        require('../assets/leaves.png')
    ]);
        
    const img = leaves;
    // const img = require("../assets/leaves.png")
    const [imageAsset, setImageAsset] = useState(img)
            
    const handleImageChange = () => {
        const newImg  = angry;
        // const newImg = require("../assets/angry-squirrel.png")
        setImageAsset(newImg)
    }
      
    return(  
        <View>
            <FlatGrid
                itemDimension={82}
                data={items}
                spacing={5}
                style={styles.grid}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <TouchableOpacity onPress={handleImageChange}>
                            <Image source={imageAsset} style={{width:'115%', height:'105%', resizeMode:'container', marginLeft: -4}} />
                            {/* {image} */}
                        </TouchableOpacity>
                    </View>
                
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    grid: {
        marginTop: 10,
        marginBottom: 2
    }, 
    itemContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 6,
        height: 75, 
        borderColor:'black', 
        borderWidth: 4
    }
})
