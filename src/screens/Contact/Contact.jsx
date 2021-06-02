import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarProvider, useSnackbar } from "notistack";
import Design from "./assets/design-contact.png";
import Design2 from "./assets/design-contact2.png";
import "./Contact.css";

import Footer from "../../components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60ch",
      "@media screen and (max-width: 650px)": { width: "40ch" },
      "@media screen and (max-width: 415px)": { width: "30ch" },
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    width: "12ch",
    height: 44,
    marginTop: "15px",
    padding: "0 30px",

    background:
      "linear-gradient(to right top, #114aa3, #1b52ac, #235bb5, #2b63bf, #326cc8)",
    borderRadius: 7,
    border: 0,
    color: "white",
    fontSize: "15px",
  },
}));

function Contact() {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const failMessage = () => {
    //ajout modal d'erreur
    enqueueSnackbar("Tous les champs doivent être renseignés.", {
      variant: "error",
    });
  };

  const isEmail = () => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-A0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname && lastname && isEmail() && message) {
      axios
        .post("http://localhost:4000/users", {
          firstname,
          lastname,
          email,
          message,
        })
        .then(function (response) {
          console.log(response.status);
          setFirstname("");
          setLastname("");
          setEmail("");
          setMessage("");
          //ajout modal de validation
          if (response.status === 201) {
            enqueueSnackbar("Votre message a bien été envoyé.", {
              variant: "success",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          enqueueSnackbar("Une erreur est survenue.", { variant: "error" });
        });
    } else {
      failMessage();
    }
  };

  return (
    <>
      <div className="container-design">
        <img id="design" src={Design} alt="design" />
        <img id="design" src={Design2} alt="design" />
      </div>
      <h2 className="title-contact">Écrivez-nous</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Prénom"
          variant="outlined"
          value={firstname}
          type="text"
          autoComplete="off"
          onChange={(e) => setFirstname(e.target.value)}
          inputProps={{
            style: {
              fontSize: "18px",
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: "18px",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Nom"
          variant="outlined"
          value={lastname}
          type="text"
          autoComplete="off"
          onChange={(e) => setLastname(e.target.value)}
          inputProps={{
            style: {
              fontSize: "18px",
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: "18px",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{
            style: {
              fontSize: "18px",
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: "18px",
            },
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={7}
          variant="outlined"
          type="text"
          value={message}
          autoComplete="off"
          onChange={(e) => setMessage(e.target.value)}
          inputProps={{
            style: {
              fontSize: "18px",
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: "18px",
            },
          }}
        />
      </form>
      <div className={classes.root}>
        <React.Fragment>
          <Button
            id="button-submit"
            className={classes.button}
            variant="contained"
            onClick={handleSubmit}
          >
            Envoyer
          </Button>
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <Contact />
    </SnackbarProvider>
  );
}
