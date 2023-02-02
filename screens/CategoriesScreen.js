import {FlatList} from 'react-native';
import CategoryGirdTile from '../components/CategoryGirdTile';
import {CATEGORIES} from '../data/dummy-data';


export default function CategoriesScreen({navigation}) {
  
  function renderCategoryItem(itemData) {

    function pressHandler(){
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      });
    }
      return <CategoryGirdTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }
  

  return (
    <FlatList data={CATEGORIES} 
    numColumns={2}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem} 
    />
  )
}
