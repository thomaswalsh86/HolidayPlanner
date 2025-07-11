import { APIProvider, Map, Marker, useMap } from "@vis.gl/react-google-maps"
import { useEffect, useState } from "react"
import { useAddress } from "../services/addressProvider"

interface MiniMapProps {
    address: string
    zoom: number
}

function GeocoderHandler({ address }: { address?: string }) {
    const map = useMap()
    const { setLat, setLong } = useAddress();
    const [position, setPosition] = useState({ lat: 53.34, lng: 10 })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!address || !map) return;
    
        setLoading(true);
        const geocoder = new google.maps.Geocoder();
    
        geocoder.geocode({ address }, (results, status) => {
            setLoading(false);
            if (status === 'OK' && results?.[0]) {
                const latVal = results[0].geometry.location.lat();
                const lngVal = results[0].geometry.location.lng();

                setLat(latVal);
                setLong(lngVal);

                const newPos = {
                  lat: latVal,
                  lng: lngVal,
                };

                console.log("Geocoded position:", newPos);
                setPosition(newPos);
                map.panTo(newPos);
            } else {
                console.warn("Geocoding failed:", status);
            }
        });
    }, [address, map]);

    return (
        <>
            {loading}
            <Marker position={position} />
        </>
    )
}

export default function MiniMap({ address, zoom }: MiniMapProps) {
    return (

            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
              <Map
                style={{width: '50vw', height: '50vh'}}
                defaultCenter={{lat: 53.0, lng: 7.0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                zoom={zoom} >
                <GeocoderHandler address={address} />
                </Map>
                
              </APIProvider>
              )
}

import.meta.env.VITE_GOOGLE_MAPS_API_KEY

