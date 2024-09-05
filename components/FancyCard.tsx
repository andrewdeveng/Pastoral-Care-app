import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style= {styles.headingText}>Trending Places</Text>
      <View style= {[styles.card, styles.cardElevated]}>
        <Image 

        source={{uri : 'data:image/jpeg;base64,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'}}
        style = {styles.cardImage}
        />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Rome</Text>
            <Text style={styles.cardLabel}>Rome Capital</Text>
            <Text style={styles.cardDescription}>The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ...</Text>
            <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 16,
        marginBottom: 4
    },
    cardDescription: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000000'
    },

})