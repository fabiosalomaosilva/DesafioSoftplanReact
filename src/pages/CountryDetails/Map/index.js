import React, { useEffect, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { getAditionalInfoContries } from '../../../services/geoService';

const containerStyle = {
	width: '100%',
	height: '600px',
};

function Map(props) {
	const [map, setMap] = useState(null);
	const [locations, setLocations] = useState(null);
	const [zoom, setZoom] = useState(4);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBoiT-0BaiEmgGfpN2A-xz0UvlWFGhq55Q',
	});

	const getLocation = async () => {
		await getAditionalInfoContries(props.name);
		const latitude = parseFloat(props.lat);
		const longitude = parseFloat(props.lng);
		setLocations({
			lat: latitude,
			lng: longitude,
		});
	};

	useEffect(() => {
		getLocation();
		if (props.area > 10 && props.area < 3000) {
			setZoom(9);
		}
		if (props.area > 3001 && props.area < 10000) {
			setZoom(8);
		}
		if (props.area > 10001 && props.area < 40000) {
			setZoom(7);
		}
		if (props.area > 40001 && props.area < 100000) {
			setZoom(6);
		}
		if (props.area > 100001 && props.area < 1300000) {
			setZoom(5);
		}
		if (props.area > 1300001 && props.area < 3000000) {
			setZoom(4);
		}
		if (props.area > 3000001) {
			setZoom(3);
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

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={locations}
			zoom={zoom}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(Map);
