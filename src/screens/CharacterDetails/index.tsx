import {StatusItem} from '@components/index';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {MainNavigationParam} from '@stacks/MainNavigation';
import React, {useCallback, useEffect} from 'react';
import {FlatList, Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';

const CharacterDetails = () => {
  const navigation = useNavigation<NavigationProp<MainNavigationParam>>();
  const router = useRoute<RouteProp<MainNavigationParam>>();
  const {character} = router.params!;

  useEffect(
    () => navigation.setOptions({headerTitle: character.name.toUpperCase()}),
    [],
  );

  interface ISTATUS_DATA {
    id: number;
    title: string;
    value: string;
  }

  const STATUS_DATA: ISTATUS_DATA[] = [
    {id: 0, title: 'Status', value: character.status},
    {id: 1, title: 'Gender', value: character.gender.toString()},
    {id: 2, title: 'Type', value: character.type},
    {id: 3, title: 'SPECIES', value: character.species},
    {id: 4, title: 'ORIGIN', value: character.origin.name},
    {id: 5, title: 'LOCATION', value: character.location.name},
    {id: 6, title: 'CREATED', value: character.created},
    {id: 7, title: 'EPISODE COUNT', value: character.episode.length.toString()},
  ];

  const HeaderImage = useCallback(
    () => <Image source={{uri: character.image}} style={styles.image} />,
    [],
  );

  const FooterComponent = useCallback(() => {
    return (
      <FlatList
        horizontal={true}
        style={styles.footerCompontentContainer}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        data={character.episode}
        contentContainerStyle={styles.g4}
        renderItem={() => <View style={styles.footerCompontentItem} />}
      />
    );
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <FlatList
      numColumns={2}
      bounces={false}
      data={STATUS_DATA}
      ListHeaderComponent={HeaderImage}
      ListHeaderComponentStyle={styles.listHeaderComponent}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({item}) => (
        <StatusItem title={item.title} value={item.value} color="white" />
      )}
      ListFooterComponentStyle={{paddingBottom: insets.bottom}}
      ListFooterComponent={FooterComponent}
    />
  );
};

export default CharacterDetails;
