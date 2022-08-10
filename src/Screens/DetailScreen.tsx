import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../Constants/AppStackParamList';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../Redux/store';
import {getPokemonDetails} from '../Redux/actions/action';
import Loading from '../Components/Loading';
import StatItem from '../Components/StatItem';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'DetailScreen'>;
  route: RouteProp<AppStackParamList, 'DetailScreen'>;
};

const DetailScreen = ({navigation, route}: Props) => {
  const dispatch = useAppDispatch();
  const {pokemon, pokemonStats, loading} = useAppSelector(
    state => state.global,
  );
  useEffect(() => {
    navigation.setOptions({
      title: route.params.pokemon.name,
    });
    const id = route.params.pokemon.url.split('/pokemon/')[1].split('/')[0];
    dispatch(getPokemonDetails(Number(id)));
  }, []);

  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <Text style={styles.name}>
          Pokemon Name: {route.params.pokemon.name}
        </Text>
        {loading ? (
          <Loading />
        ) : pokemonStats && pokemonStats.length > 0 ? (
          // pokemonStats?.map((stat, index: number) => (
          //   <StatItem stat={stat} key={index} />
          // ))
          <FlatList
            data={pokemonStats}
            style={styles.contentContainer}
            renderItem={({item, index}) => <StatItem stat={item} key={index} />}
          />
        ) : (
          <Text>Nothing to show here!</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  img: {
    width: '60%',
    aspectRatio: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    marginVertical: 8,
    textTransform: 'capitalize',
    alignSelf: 'center',
    color: 'black',
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
