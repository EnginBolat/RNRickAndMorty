import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from './style';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppDispatch } from '@store/store';
import { clearData, request, RequestPayload } from '@store/slice/RequestSlice';
import { Endpoints } from '@constants/app_constants';
import { ListHeader } from '@components/index';
import { Location, Response } from '@models/index';

const Locations = () => {
    const dispatch = useAppDispatch();
    const insets = useSafeAreaInsets();

    const [nextPageUrl, setNextPageUrl] = useState(Endpoints.location);
    const [locations, setLocations] = useState<Location[] | undefined>();

    useEffect(() => {
        getCharacters();
        return () => {
            dispatch(clearData({ stateKey: 'episode' }));
        };
    }, []);

    const getCharacters = async () => {
        const postBody: RequestPayload = {
            stateKey: 'location',
            url: nextPageUrl,
            method: 'GET',
        };

        const response = await dispatch(request(postBody)).unwrap();
        const res = response.data as Response<Location[]>;
        if (res.info.count === locations?.length) return;
        if (res.info.next) setNextPageUrl(Endpoints.character + '?' + res.info.next.split('?')[1]);
        if (res.results) {
            (locations?.length ?? 0) > 1
                ? setLocations(prev => [...(prev ?? []), ...res.results])
                : setLocations(res.results);
        }
    };

    const renderItem = useCallback(
        ({ item }: { item: Location }) => (
            <View style={styles.renderItem}>
                <Text>Episode: {item.name}</Text>
                <Text>Release: {item.type ?? 'unknown'}</Text>
                <Text>Dimension: {item.dimension}</Text>
                <Text>Residents Count: {item.residents?.length ?? 'unknown'}</Text>
            </View>
        ),
        [],
    );

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <FlatList
                numColumns={2}
                data={locations}
                scrollEventThrottle={0.4}
                onEndReached={getCharacters}
                columnWrapperStyle={styles.g12}
                contentContainerStyle={styles.g12}
                showsVerticalScrollIndicator={false}
                style={styles.scrollList}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponent={<ListHeader title="Locations" />}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Locations;
