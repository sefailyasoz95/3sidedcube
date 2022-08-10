import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../Constants/AppStackParamList';
import {useAppDispatch, useAppSelector} from '../Redux/store';
import {getPokemons} from '../Redux/actions/action';
import Loading from '../Components/Loading';
import Pokemon from '../Components/Pokemon';
import {Pokemon as IPokemon} from '../Constants/types';
import Input from '../Components/Input';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'HomeScreen'>;
};
const HomeScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {loading, pokemons} = useAppSelector(state => state.global);
  const [pokemonState, setPokemonState] = useState<IPokemon[]>([]);
  useEffect(() => {
    if (pokemons) {
      setPokemonState(pokemons);
    } else {
      dispatch(getPokemons());
    }
  }, [pokemons]);
  const handlePress = (pokemon: IPokemon) =>
    navigation.navigate('DetailScreen', {
      pokemon,
    });
  const handleSearch = (value: string) => {
    console.log('value: ', value);

    if (value)
      setPokemonState(
        pokemonState.filter(item =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    else setPokemonState(pokemons!);
  };

  return (
    <SafeAreaView style={styles.container} onTouchStart={Keyboard.dismiss}>
      {loading ? (
        <Loading />
      ) : pokemons && pokemons.length > 0 ? (
        <>
          <Input
            placeholder="Search"
            onTextChanged={handleSearch}
            corner="rounded"
          />
          <FlatList
            data={pokemonState}
            contentContainerStyle={styles.flatList}
            renderItem={({item}) => (
              <Pokemon pokemon={item} onPress={handlePress} />
            )}
          />
        </>
      ) : (
        <View style={styles.noData}>
          <Text>There is nothing to show!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noData: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button: {
    marginVertical: 10,
  },
});
