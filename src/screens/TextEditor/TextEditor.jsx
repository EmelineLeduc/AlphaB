/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, Fragment } from "react";
import {
  Box,
  Card,
  CardContent,
  InputBase,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Color from "../../components/Selectors/Color/Color";
import ColorVowel from "../../components/Selectors/ColorVowel/ColorVowel";
import FontFamily from "../../components/Selectors/FontFamily/FontFamily";
import FontSize from "../../components/Selectors/FontSize/FontSize";
import Footer from "../../components/Footer/Footer";
import LetterSpacing from "../../components/Selectors/LetterSpacing/LetterSpacing";
import LineSpacing from "../../components/Selectors/LineSpacing/LineSpacing";
import Help from "../../components/Help/Help";
import SpeechSynthesis from "../../components/Speech/SpeechSynthesis";
import SpeechRecognition from "../../components/Speech/SpeechRecognition";
import WordSpacing from "../../components/Selectors/WordSpacing/WordSpacing";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "27px 12px 10px",
    height: "100%",
  },
  root2: {
    boxShadow: "0 0px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    minHeight: "534px",
    maxHeight: "534px",
    overflow: "auto",
    margin: "8px",
    "@media screen and (max-width: 425px)": { margin: "0px" },
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  input: {
    height: "100%",
    width: "100%",
    marginTop: "0!important",
  },
  color: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "-10px",
    flexWrap: "wrap",
  },
  containerWrapper: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "10px",
    "@media screen and (max-width: 425px)": { display: "block" },
  },
  botom: {
    margin: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  cardAudio: {
    display: "flex",
    justifyContent: "center",
    margin: "50px",
    flexWrap: "wrap",
  },
}));

function TextToSpeech() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [modifiedValue, setModifiedValue] = useState([]); // création d'un state array pour contenir le texte tranformer de ColorVowel.jsx
  const [currentFontFamily, setCurrentFontFamily] = useState("");
  const [currentSize, setCurrentSize] = useState("");
  const [currentLineHeight, setCurrentLineHeight] = useState(""); //useState pour modifier interlignage
  const [currentWordSpace, setCurrentWordSpace] = useState(""); //useState pour modifier inter-mot
  const [letterSpacing, setLetterSpacing] = useState("");
  const [colorText, setColorText] = useState("");
  const [display, setDisplay] = useState(true);

  // Callback avec array vide permet de ne pas re rendre la déclaration d'une function
  const handleValueChange = useCallback((event) => {
    setValue(event.target.value);
    let test = event.target.value.length;
    setDisplay(true);
    console.log(test);
    // test > 0 ? setVoyelleVisible(false) : setVoyelleVisible(true);
  }, []);

  const handleDisplayVowels = useCallback((newText) => {
    setModifiedValue(newText);
    console.log(newText);
    setDisplay(false);
  });

  const handleChangeColor = useCallback((newColor) => {
    setColorText(newColor);
  });

  return (
    <>
      <Help />
      <div className={classes.cardAudio}>
        <SpeechSynthesis text={value} />
        <SpeechRecognition vocaleTexte={(mots) => setValue(mots)} />
      </div>
      <div className={classes.color}>
        <LineSpacing
          onChangeLine={(newLineSpace) => setCurrentLineHeight(newLineSpace)}
        />
        <WordSpacing
          onChangeWord={(newWordSpace) => setCurrentWordSpace(newWordSpace)}
        />
        <LetterSpacing
          letterSpacingModifier={(newLetterSpacing) =>
            setLetterSpacing(newLetterSpacing)
          }
        />
        <FontSize
          onChangeFontSize={(newFontSize) => setCurrentSize(newFontSize)}
        />
        <FontFamily
          onChangeFontFamily={(newFontFamily) =>
            setCurrentFontFamily(newFontFamily)
          }
        />
        <Color colorModifier={handleChangeColor} />
        <ColorVowel displayVowels={handleDisplayVowels} value={value} />
      </div>
      <div className={classes.root}>
        <Box className={classes.containerWrapper}>
          <InputBase
            id="filled-full-width"
            placeholder="Entrer votre texte..."
            multiline
            value={value}
            className={classes.input}
            onChange={handleValueChange}
            inputProps={{
              style: {
                fontFamily: currentFontFamily,
                fontSize: currentSize,
                lineHeight: currentLineHeight,
                wordSpacing: currentWordSpace,
                letterSpacing: letterSpacing,
                color: colorText,
                boxShadow:
                  "0 0 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
                minHeight: "497px",
                padding: 18,
              },
            }}
          />
          {/* wordBreak: 'break-all'  = retour à la ligne automatique du texte */}
          <div style={{ wordBreak: "break-all" }}>
            {/* utilisation d'une card car textarea ne supporte pas le html */}
            <Card className={classes.root2}>
              <CardContent>
                <Typography
                  style={{
                    fontFamily: currentFontFamily,
                    fontSize: currentSize,
                    lineHeight: currentLineHeight,
                    wordSpacing: currentWordSpace,
                    letterSpacing: letterSpacing,
                    color: colorText,
                  }}
                  component="h6"
                >
                  {display ? (
                    <Fragment>{value}</Fragment>
                  ) : (
                    modifiedValue.map((letter, index) => (
                      <Fragment key={index}>{letter}</Fragment>
                    ))
                  )}
                  {/* parcours le tableau et affiche les lettres avec les span coloriés */}
                  {/*fragment = <> utilisé pour englober letter et mettre une key  */}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default TextToSpeech;
