import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch } from '@store/store';
import { clearData, request, RequestPayload } from '@store/slice/RequestSlice';
import { Response, Episode } from '@models/index';
import { Endpoints } from '@constants/app_constants';
import { ListHeader } from '@components/index';
// import { NavigationProp, useNavigation } from '@react-navigation/native';
// import { MainNavigationParam } from '@stacks/MainNavigation';

const Episodes = () => {
    const dispatch = useAppDispatch();
    const insets = useSafeAreaInsets();
    // const navigation = useNavigation<NavigationProp<MainNavigationParam>>();

    const [nextPageUrl, setNextPageUrl] = useState(Endpoints.episode);
    const [episodes, setEpisodes] = useState<Episode[] | undefined>();

    useEffect(() => {
        getCharacters();
        return () => {
            dispatch(clearData({ stateKey: 'episode' }));
        };
    }, []);

    const getCharacters = async () => {
        const postBody: RequestPayload = {
            stateKey: 'character',
            url: nextPageUrl,
            method: 'GET',
        };

        const response = await dispatch(request(postBody)).unwrap();
        const res = response.data as Response<Episode[]>;
        if (res.info.count === episodes?.length) return;
        if (res.info.next) setNextPageUrl(Endpoints.character + '?' + res.info.next.split('?')[1]);
        if (res.results) {
            (episodes?.length ?? 0) > 1
                ? setEpisodes(prev => [...(prev ?? []), ...res.results])
                : setEpisodes(res.results);
        }
    };

    const renderItem = useCallback(
        ({ item }: { item: Episode }) => (
            <View style={styles.renderItem}>
                <Text>Episode: {item.name}</Text>
                <Text>Release: {item.air_date ?? 'unknown'}</Text>
                <Text>Character Count: {item.characters?.length ?? 'unknown'}</Text>
            </View>
        ),
        [],
    );

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <FlatList
                numColumns={2}
                data={episodes}
                scrollEventThrottle={0.4}
                onEndReached={getCharacters}
                columnWrapperStyle={styles.g12}
                contentContainerStyle={styles.g12}
                showsVerticalScrollIndicator={false}
                style={styles.scrollList}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={<ListHeader title="Episodes" />}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Episodes;
