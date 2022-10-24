import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { AnimatedRegion, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Loader from "../../components/loader";
import * as expoLocation from "expo-location";
import { AppStyles } from "../../styles/colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useFocusEffect } from "@react-navigation/native";
import { googleApi } from "../../constant/index";
import { Title, styles, TabItems } from "./styles";
let remove: any = null;

interface Ilocatio {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export default function Location() {
  const screen = Dimensions.get("window");
  const ASPECT_RATIO = screen.width / screen.height;
  const LATITUDE_DELTA = 0.04;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const mapRef: any = useRef(null);
  const markerRef: any = useRef(null);
  const inputRef: any = useRef(null);
  const [origin, setOrigin] = useState<Ilocatio>();
  const [destination, setDestination] = useState<Ilocatio>();

  const [state, setState] = useState({
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 0,
      longitude: 0,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const { time, distance, isLoading, coordinate } = state;
  const updateState = (data: any) =>
    setState((state: any) => ({ ...state, ...data }));

  useFocusEffect(
    React.useCallback(() => {
      getLocation();
      onCenter();

      return () => stopWatchPosition();
    }, [])
  );
  const getLocation = async () => {
    let { status } = await expoLocation.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission to access location was denied");
      return;
    }

    const {
      coords: { latitude, longitude, heading },
    } = await expoLocation.getCurrentPositionAsync();

    animate(latitude, longitude);
    setOrigin({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    updateState({
      heading: heading,
      coordinate: new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }),
    });
  };

  const watchPosition = async () => {
    remove = await expoLocation.watchPositionAsync(
      {
        accuracy: expoLocation.Accuracy.BestForNavigation,
      },
      (location) => {
        updateState({
          coordinate: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
      }
    );
  };

  const stopWatchPosition = async () => {
    remove?.remove();
    setDestination(undefined);
    inputRef.current?.setAddressText("");
    updateState({
      distance: 0,
      time: 0,
    });
  };

  const searchPlaceGoogle = (data: any, details: any) => {
    setDestination({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
    watchPosition();
  };

  const animate = (latitude: any, longitude: any) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS == "android") {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: origin?.latitude,
      longitude: origin?.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const fetchTime = (d: any, t: any) => {
    updateState({
      distance: d,
      time: t,
    });
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {distance !== 0 && time !== 0 && (
          <View style={styles.viewMin}>
            <Text style={{ color: AppStyles.colour.primary, fontWeight: "700", fontSize: 12 }}>
              {time.toFixed(0)} min{" "}
            </Text>
          </View>
        )}

        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={origin}
        >
          <Marker.Animated ref={markerRef} coordinate={coordinate}>
            <Ionicons name="location-sharp" color={"red"} />
          </Marker.Animated>

          {destination && (
            <Marker coordinate={destination}>
              <Ionicons name="location-sharp" size={16} color={"red"} />
            </Marker>
          )}

          {destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              strokeWidth={6}
              apikey={googleApi}
              strokeColor={AppStyles.colour.primary}
              optimizeWaypoints={true}
              onStart={(params: any) => {}}
              onReady={(result: any) => {
                fetchTime(result.distance, result.duration),
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 30,
                      left: 30,
                      top: 30,
                    },
                  });
              }}
            />
          )}
        </MapView>
        <TabItems
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
          onPress={onCenter}
        >
          <Ionicons
            name="location-sharp"
            size={16}
            color={AppStyles.colour.primary}
          />
        </TabItems>
      </View>

      <View style={styles.bottomCard}>
        <Title>Destino</Title>
        <GooglePlacesAutocomplete
          placeholder="Para onde vamos?"
          onPress={(data, details: any = null) => {
            searchPlaceGoogle(data, details);
          }}
          query={{
            key: googleApi,
            language: "pt-br",
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          ref={inputRef}
          styles={{
            textInputContainer: styles.inputStyle,
            textInput: styles.input,
          }}
        />
      </View>

      <Loader isLoading={isLoading} />
    </View>
  );
}
