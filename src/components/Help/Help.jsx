/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "50%",
    padding: "24px",
    backgroundColor: "#f5f5f5",
    marginBottom: "100px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  question: {
    display: "flex",
    justifyContent: "center",
    height: "200px",
  },
  button: {
    "& > *": {
      margin: theme.spacing(4),
    },
  },
}));

export default function Help() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDisplay = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.button}>
        <Button variant="contained" onClick={handleDisplay}>
          {open ? "Compris" : "Besoin d'aide ?"}
        </Button>
      </div>
      {open && (
        <div className={classes.question}>
          <img src="https://svgshare.com/i/WDb.svg" alt="logo question" />
        </div>
      )}

      {open && (
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Entrer son texte
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                L'application AlphaB vous offre ici 2 manières simples et
                intuitives de pouvoir insérer votre texte. <br></br> -
                Vocalement, en appuyant sur le bouton "Parler" <br></br>-
                Manuellement, en tapant simplement votre texte dans le champ
                prévu à cet effet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Modifier son texte
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Une fois votre texte écrit dans la section de gauche, vous aurez
                le choix entre 7 options de modifications, toutes combinables
                entre elles, nous vous laissons le loisir de les manipuler. Vous
                trouverez ainsi celle qui correspondra au mieux à votre confort
                visuel.
              </Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Ecouter son texte
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Pour vous aider à travers les sons, choisissez dans notre menu
                déroulant la voix qui vous plaît, sa vitesse de lecture ainsi
                que sa tonalité. Une fois votre configuration effectuée, appuyez
                sur "Play".
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </>
  );
}
