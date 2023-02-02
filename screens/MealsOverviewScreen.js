import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import {MEALS , CATEGORIES} from '../data/dummy-data';

export default function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() =>{
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title; //pour afficher le titre de la catégorie dans le header
    navigation.setOptions({
        title: categoryTitle
    })
    }, [catId, navigation]);
    
    function renderMealItem(itemData){
        const item = itemData.item;

        // function pressHandler(){
        //     navigation.navigate('MealsDetails', {
        //         mealId : itemData.item.id
        //     })
        // }

        const mealItemProps = {
            id : item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return (
           <MealItem {...mealItemProps} />
        )
    }
  return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} 
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem} />
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16,

    }
})
