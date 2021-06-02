import React, { useEffect, useState } from "react";
import firebase from "../../utils/firebaseConfig";
import { Box, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./CarouselOpinions.css";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const useStyles = makeStyles(() => ({
  rating: {
    marginBottom: 0,
    marginTop: 0,
    color: "white",
  },
  star: {
    color: "white",
  },
}));

function CarouselOpinions() {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const opinionFormDB = firebase.database().ref("opinionFormDB");
    opinionFormDB.on("value", (snapshot) => {
      console.log(snapshot.val());
      let previousOpinion = snapshot.val();
      let opinion = [];
      for (let id in previousOpinion) {
        opinion.push({ id, ...previousOpinion[id] });
      }
      setResults(opinion);
    });
  }, []);

  console.log(results);

  return (
    <div className="opinion-container">
      <Swiper
        effect={"coverflow"}
        slidesPerView={4}
        spaceBetween={60}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 60,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        className="mySwiper"
      >
        {results &&
          results.map((result) => {
            console.log(result.id);
            return (
              <SwiperSlide key={result.id} className="card-opinion">
                <div className="card-content">
                  <div className="layer"></div>

                  <p>{result.message}</p>

                  <div className="card-user">
                    <div className="card-user-name">{`${
                      result.firstname
                    } ${result.lastname.charAt(0)}.`}</div>
                    <div className="card-user-job">{result.job}</div>
                  </div>
                </div>
                <Box
                  className={classes.rating}
                  id="rating"
                  component="fieldset"
                  mb={3}
                  borderColor="transparent"
                >
                  <Typography component="legend"></Typography>
                  <Rating
                    className={classes.star}
                    name="read-only"
                    value={result.rating}
                    readOnly
                  />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default CarouselOpinions;
