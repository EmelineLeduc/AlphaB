/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Container, Row } from "react-bootstrap";
import CardPro from "../../components/Map/CardPro/CardPro";
import FilterKm from "../../components/Map/FilterKm";
import FilterNote from "../../components/Map/FilterNote";
import Footer from "../../components/Footer/Footer";
import GeolocationModal from "../../components/Map/GeolocationModal/GeolocationModal";
import InputSearch from "../../components/Map/InputSearch/InputSearch";
import MarkerPro from "../../components/Map/Marker/MarkerPro.tsx";
import MarkerUser from "../../components/Map/Marker/MarkerUser.tsx";
import MapStyle from "../../components/Map/MapStyle";
import "./MapContact.css";

const key = "AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24"; // clef google map api

function CardMaps() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [error, setError] = useState("");
  const [dataPlace, setDataPlace] = useState([]);
  const [dataCard, setDataCard] = useState([]);
  const [dataRating, setDataRating] = useState([]);
  const [idDetail, setIdDetail] = useState("");
  const [resetBtn, setResetBtn] = useState(false);
  const [open, setOpen] = useState(false);
  const [radius, setRadius] = useState(5);
  const center = { lat: lat, lng: lng };
  const resultRadius = radius * 1000;
  const options = {
    styles: MapStyle,
  };

  useEffect(() => {
    // ne s'effectue qu'une seule fois si localisation est présente
    if (navigator.geolocation && lat === null && lng === null) {
      navigator.geolocation.getCurrentPosition(location, errorLocation);
    }
  }, []);

  useEffect(() => {
    const presentLocation = lat !== null && lng !== null;
    // si lat et lng sont différents de null, alors appel la fonction resquestApi
    if (presentLocation) {
      resquestApi();
    }
  }, [lat, lng]);

  useEffect(() => {
    const presentRadius = radius !== null;
    if (presentRadius) {
      resquestApi();
    }
  }, [radius]);

  const location = (position) => {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  };

  const errorLocation = (error) => {
    setLat(48.8534);
    setLng(2.3488);
    setOpen(!open);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return setError("Géolocalisation refusée");
      case error.POSITION_UNAVAILABLE:
        return setError("Position inconnue");
      case error.TIMEOUT:
        return setError("Chargement de la positon expiré");
      case error.UNKNOWN_ERROR:
        return setError("Erreur inconnue");
      default:
        return setError("Erreur inconnue");
    }
  };

  const resquestApi = async () => {
    const cors = "https://api.allorigins.win/get?url=";
    const endpoint = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=orthophoniste&location=${lat},${lng}&radius=${resultRadius}&keyword=cruise&key=${key}`;
    const encodedEndpoint = encodeURIComponent(endpoint);
    try {
      const resquest = await fetch(`${cors}${encodedEndpoint}`);
      const json = await resquest.json();
      const { results } = JSON.parse(json.contents);
      setDataPlace(results);
      setDataCard(results);
      setDataRating(results);
    } catch (e) {
      console.log(`Error : ${e}.`);
    }
  };

  const filterMarker = (id) => {
    {
      dataPlace
        .filter((el) => el.place_id.includes(id)) //filtre dataPlace au niveau de place_id qui contient (id)
        .map((filterName) => {
          setDataRating([filterName]); // assignation du nouveau tableau filtré à dataCard
          setIdDetail(filterName.place_id); // assignation de l'id de l'object filtré à idDetail
          setResetBtn(true); // assignation de l'id de l'object filtré à idDetail
        });
    }
  };

  const rating = (newValue) => {
    let arrayRating = [];
    {
      dataPlace
        .filter((el) => el.rating === newValue)
        .map((filterRating) => {
          arrayRating.push(filterRating);
          setDataCard(arrayRating);
          setDataRating(arrayRating);
          setResetBtn(true);
        });
    }
  };

  const ResetCardAndColor = () => {
    setIdDetail("");
    setDataCard(dataPlace);
    setDataRating(dataPlace);
    setResetBtn(false);
  };

  return (
    <>
      <Container>
        <h3>Les professionnels</h3>
        <div className="map-container-filter">
          <InputSearch
            newLat={(latInput) => setLat(latInput)}
            newLng={(lngInput) => setLng(lngInput)}
          />
          <div className="input" style={{ display: "flex" }}>
            <FilterKm
              className="filterKm"
              changeRadius={(radius) => setRadius(radius)}
            />
            <FilterNote
              changeRating={(newValue) => {
                rating(newValue);
              }}
            />
          </div>
        </div>
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAURsom7c-jmbNERN0wVqb4OzVten2Hy24",
            }}
            center={center}
            zoom={12}
            options={options}
          >
            <MarkerUser lat={lat} lng={lng} color="#D65EA6" text="my-marker" />
            {dataCard &&
              dataCard.map((data) => (
                <MarkerPro
                  key={data.place_id}
                  lat={data.geometry.location.lat}
                  lng={data.geometry.location.lng}
                  idSpecifique={idDetail}
                  id={data.place_id}
                  idRecup={(id) =>
                    filterMarker(id)
                  } /* récupération de l'id du marker pour filtre */
                />
              ))}
          </GoogleMapReact>
          {error && <GeolocationModal error={error} open={open} />}
        </div>

        {resetBtn && (
          <div className="btn-holder">
            <button
              className="btne btn-1 hover-filled-slide-left"
              onClick={ResetCardAndColor}
            >
              <span>Retour</span>
            </button>
          </div>
        )}

        <Row className="align-items-center">
          {dataRating &&
            dataRating.map((data) => (
              <CardPro
                key={data.place_id}
                placeId={data.place_id}
                name={data.name}
                adress={data.formatted_address}
                initiale={data.name.charAt(0)}
                starsRating={data.rating}
                cardLat={data.geometry.location.lat}
                cardLng={data.geometry.location.lng}
              />
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default CardMaps;
