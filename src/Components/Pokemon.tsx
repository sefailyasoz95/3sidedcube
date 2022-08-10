import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../Redux/store';
import {Pokemon as IPokemon} from '../Constants/types';

type Props = {
  pokemon: IPokemon;
  onPress: (pokemon: IPokemon) => void;
};

const Pokemon: React.FC<Props> = React.memo(({pokemon, onPress}: Props) => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    onPress(pokemon);
  };
  const handleDelete = () => {
    // dispatch(deleteUser(pokemon.id));
  };
  return (
    <Pressable style={styles.pokemonContainer} onPress={handlePress}>
      {/* <Image source={{uri: pokemon.image}} style={styles.img} /> */}
      <View style={styles.info}>
        <Text style={styles.text}>{pokemon.name}</Text>
        {/* <Text style={styles.text}>{pokemon.age}</Text> */}
      </View>
      {/* <TouchableOpacity style={styles.times} onPress={handleDelete}>
        <Text>❌</Text>
      </TouchableOpacity> */}
    </Pressable>
  );
});

export default Pokemon;

const styles = StyleSheet.create({
  pokemonContainer: {
    width: 150,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
    shadowColor: 'black',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderRadius: 10,
    padding: 10,
  },
  img: {
    resizeMode: 'contain',
    width: 150,
    aspectRatio: 1,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    letterSpacing: 0.3,
    marginHorizontal: 5,
    marginVertical: 5,
    textTransform: 'capitalize',
  },
  times: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
