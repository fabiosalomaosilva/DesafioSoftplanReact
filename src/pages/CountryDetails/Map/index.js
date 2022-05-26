import React, { useEffect, useCallback, useState, useMemo } from 'react';
import {
	GoogleMap,
	useJsApiLoader,
	Marker,
	DirectionsService,
	DirectionsRenderer,
} from '@react-google-maps/api';
import { getAditionalInfoContries } from '../../../services/geoService';
import { getInfoRegions } from '../../../services/countriesService';
import MapDetails from '../MapDetails';

const containerStyle = {
	width: '100%',
	height: '500px',
};

function Map(props) {
	const [map, setMap] = useState(null);
	const [locations, setLocations] = useState(null);
	const [zoom, setZoom] = useState(4);
	const [fiveCountries, setFiveCountries] = useState([]);
	const [pointA, setPointA] = useState();
	const [pointB, setPointB] = useState();
	const [pointC, setPointC] = useState();
	const [pointD, setPointD] = useState();
	const [pointE, setPointE] = useState();
	const [pointF, setPointF] = useState();
	const [response, setResponse] = useState(null);
	const [originA, setOriginA] = useState(null);
	const [originB, setOriginB] = useState(null);
	const [originC, setOriginC] = useState(null);
	const [originD, setOriginD] = useState(null);
	const [originE, setOriginE] = useState(null);
	const [originF, setOriginF] = useState(null);
	const [destinationA, setDestinationA] = useState();
	const [destinationB, setDestinationB] = useState();
	const [destinationC, setDestinationC] = useState();
	const [destinationD, setDestinationD] = useState();
	const [destinationE, setDestinationE] = useState();
	const [destinationF, setDestinationF] = useState();

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBoiT-0BaiEmgGfpN2A-xz0UvlWFGhq55Q',
	});

	const getLocation = async () => {
		const fiveCountriesList = await getInfoRegions(props.code);
		onPlacesChangedB(
			fiveCountriesList[0].latitude,
			fiveCountriesList[0].longitude
		);
		onPlacesChangedB(
			fiveCountriesList[1].latitude,
			fiveCountriesList[1].longitude
		);
		onPlacesChangedC(
			fiveCountriesList[2].latitude,
			fiveCountriesList[2].longitude
		);
		onPlacesChangedD(
			fiveCountriesList[3].latitude,
			fiveCountriesList[3].longitude
		);
		onPlacesChangedE(
			fiveCountriesList[4].latitude,
			fiveCountriesList[4].longitude
		);
		onPlacesChangedF(
			fiveCountriesList[5].latitude,
			fiveCountriesList[5].longitude
		);
		setFiveCountries(fiveCountriesList);
		await getAditionalInfoContries(props.name);
		const latitude = parseFloat(props.lat);
		const longitude = parseFloat(props.lng);
		onPlacesChangedA(latitude, longitude);
		setLocations({
			lat: latitude,
			lng: longitude,
		});
		traceRoute1();
		traceRoute2();
		traceRoute3();
		traceRoute4();
		traceRoute5();
	};

	const onPlacesChangedA = (lat, lng) => {
		const location = {
			lat: lat,
			lng: lng,
		};
		setPointA(location);
		setOriginA(null);
		setDestinationA(null);
		setResponse(null);
		map?.panTo(location);
	};

	const onPlacesChangedB = (lat, lng) => {
		const location = {
			lat: lat,
			lng: lng,
		};
		setPointB(location);
		setOriginB(null);
		setDestinationB(null);
		setResponse(null);
		map?.panTo(location);
	};
	const onPlacesChangedC = (lat, lng) => {
		const location = {
			lat: lat,
			lng: lng,
		};
		setPointC(location);
		setOriginC(null);
		setDestinationC(null);
		setResponse(null);
		map?.panTo(location);
	};
	const onPlacesChangedD = (lat, lng) => {
		const location = {
			lat: lat,
			lng: lng,
		};
		setPointD(location);
		setOriginD(null);
		setDestinationD(null);
		setResponse(null);
		map?.panTo(location);
	};
	const onPlacesChangedE = (lat, lng) => {
		const location = {
			lat: lat,
			lng: lng,
		};
		setPointE(location);
		setOriginE(null);
		setDestinationE(null);
		setResponse(null);
		map?.panTo(location);
	};
	const onPlacesChangedF = (lat, lng) => {
		const location = {
			lat: lat,
			lng: lng,
		};
		setPointF(location);
		setOriginF(null);
		setDestinationF(null);
		setResponse(null);
		map?.panTo(location);
	};

	const traceRoute1 = () => {
		if (pointA && pointB) {
			setOriginA(pointA);
			setDestinationA(pointB);
		}
	};
	const traceRoute2 = () => {
		if (pointA && pointC) {
			setOriginB(pointA);
			setDestinationB(pointC);
		}
	};
	const traceRoute3 = () => {
		if (pointA && pointD) {
			setOriginB(pointA);
			setDestinationB(pointD);
		}
	};
	const traceRoute4 = () => {
		if (pointA && pointE) {
			setOriginB(pointA);
			setDestinationB(pointE);
		}
	};
	const traceRoute5 = () => {
		if (pointA && pointF) {
			setOriginB(pointA);
			setDestinationB(pointF);
		}
	};
	const directionsServiceOptionsA = useMemo(() => {
		return {
			originA,
			destinationA,
			travelMode: 'DRIVING',
		};
	}, [originA, destinationA]);
	const directionsServiceOptionsB = useMemo(() => {
		return {
			originB,
			destinationB,
			travelMode: 'DRIVING',
		};
	}, [originA, destinationA]);

	const directionsCallbackA = useCallback((res) => {
		if (res !== null && res.status === 'OK') {
			setResponse(res);
		} else {
			console.log(res);
		}
	}, []);
	const directionsCallbackB = useCallback((res) => {
		if (res !== null && res.status === 'OK') {
			setResponse(res);
		} else {
			console.log(res);
		}
	}, []);

	const directionsRendererOptions = useMemo(() => {
		return {
			directions: response,
		};
	}, [response]);

	useEffect(() => {
		getLocation();
		if (props.area > 10 && props.area < 3000) {
			setZoom(8);
		}
		if (props.area > 3001 && props.area < 10000) {
			setZoom(7);
		}
		if (props.area > 10001 && props.area < 40000) {
			setZoom(6);
		}
		if (props.area > 40001 && props.area < 100000) {
			setZoom(5);
		}
		if (props.area > 100001 && props.area < 1300000) {
			setZoom(4);
		}
		if (props.area > 1300001 && props.area < 3000000) {
			setZoom(3);
		}
		if (props.area > 3000001) {
			setZoom(2);
		}
	}, [props]);

	const onLoad = useCallback(
		function callback(map) {
			if (locations) {
				const bounds = new window.google.maps.LatLngBounds(locations);
				map.fitBounds(bounds);
				setMap(map);
			}
		},
		[locations]
	);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded && fiveCountries && (
		<>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={locations}
				zoom={zoom}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				( return (
				<>
					{!response && pointA && <Marker position={pointA} />}
					{!response && pointB && <Marker position={pointB} />}
					{!response && pointC && <Marker position={pointC} />}
					{!response && pointD && <Marker position={pointD} />}
					{!response && pointE && <Marker position={pointE} />}
					{!response && pointF && <Marker position={pointF} />}
					{originA && destinationA && (
						<DirectionsService
							options={directionsServiceOptionsA}
							callback={directionsCallbackA}
						/>
					)}
					{originB && destinationB && (
						<DirectionsService
							options={directionsServiceOptionsB}
							callback={directionsCallbackB}
						/>
					)}
					{originC && destinationC && (
						<DirectionsService
							options={directionsServiceOptionsB}
							callback={directionsCallbackB}
						/>
					)}
					{originD && destinationD && (
						<DirectionsService
							options={directionsServiceOptionsB}
							callback={directionsCallbackB}
						/>
					)}
					{originE && destinationE && (
						<DirectionsService
							options={directionsServiceOptionsB}
							callback={directionsCallbackB}
						/>
					)}
					{originF && destinationF && (
						<DirectionsService
							options={directionsServiceOptionsB}
							callback={directionsCallbackB}
						/>
					)}
					{response && directionsRendererOptions && (
						<DirectionsRenderer options={directionsRendererOptions} />
					)}{' '}
				</>
				); )
			</GoogleMap>
			<MapDetails mapDetails={fiveCountries} />
		</>
	)
}

export default React.memo(Map);
