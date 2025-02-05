import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './styles';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch } from '@store/store';
import { clearData, request, RequestPayload } from '@store/slice/RequestSlice';
import { Response, Character } from '@models/index';
import { Endpoints } from '@constants/app_constants';
import { ListHeader, CharacterCell } from '@components/index';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainNavigationParam } from '@stacks/MainNavigation';

const Home = () => {
    const dispatch = useAppDispatch();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<MainNavigationParam>>();

    const [nextPageUrl, setNextPageUrl] = useState(Endpoints.character);
    const [characters, setCharacters] = useState<Character[] | undefined>();

    useEffect(() => {
        getCharacters();
        return () => {
            dispatch(clearData({ stateKey: 'character' }));
        };
    }, []);

    const getCharacters = async () => {
        const postBody: RequestPayload = {
            stateKey: 'character',
            url: nextPageUrl,
            method: 'GET',
        };

        const response = await dispatch(request(postBody)).unwrap();
        const res = response.data as Response<Character[]>;
        if (res.info.next) setNextPageUrl(Endpoints.character + '?' + res.info.next.split('?')[1]);
        if (res.results) {
            (characters?.length ?? 0) > 1
                ? setCharacters(prev => [...(prev ?? []), ...res.results])
                : setCharacters(res.results);
        }
    };

    const renderItem = useCallback(
        ({ item }: { item: Character }) => (
            <CharacterCell
                item={item}
                onPress={() =>

                    navigation.navigate('CharacterDetail', {
                        character: item,
                    })
                }
            />
        ),
        [],
    );

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <FlatList
                numColumns={2}
                data={characters}
                scrollEventThrottle={0.4}
                onEndReached={getCharacters}
                columnWrapperStyle={styles.g12}
                contentContainerStyle={styles.g12}
                showsVerticalScrollIndicator={false}
                style={styles.scrollList}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={<ListHeader title="Characters" />}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Home;
