import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Chip } from 'react-native-paper';

const ChipGroup = (props) => {
    return (
        <View style={styles.itemGroup}>
            {
                props.genres.map((item) => 
                    <Chip key={item.id} mode={'outlined'} style={styles.chipItem} >{item.name}</Chip>
                )
            }
        </View>
    )
}

export default ChipGroup

const styles = StyleSheet.create({
    itemGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
    chipItem: { 
        marginRight: 10,
        marginTop: 5,
    }
})
