import { useLayoutEffect } from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/MealDetail/IconButton';

function MealDetailScreen({route, navigation}){
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtoPressHandler(){
        console.log('Pressed!')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color='white' onPress={headerButtoPressHandler} />
            }
        })                                                                                            
    }, [navigation, headerButtoPressHandler]);

    const mealDetailsProps= {
        duration : selectedMeal.duration,
        complexity : selectedMeal.complexity,
        affordability: selectedMeal.affordability
    }
return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails {...mealDetailsProps} textStyle={styles.textStyle} />
    <View style={styles.listOuterContainer}>
    <View style={styles.listContainer}>
    <Subtitle>Ingredients</Subtitle>
    <List data={selectedMeal.ingredients}/>
    
    <Subtitle>Steps</Subtitle>
    <List data={selectedMeal.steps}/>
    </View>
    </View>
    </ScrollView>
)
}


export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    textStyle: {
        color: 'white'
    },
   listContainer: {
    width: '80%'
   },
   listOuterContainer: {
    alignItems: 'center'
   }
})