// 0. Clone gestures repo DONE
// 0. Install packages DONE
// 1. Create new gesture definition DONE
// 2. Import gesture into handpose DONE

///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";

// import { loveYouGesture } from "./Gestures/LoveYou";

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
import two from "./Gestures/two";
import { Left } from "./Gestures/left";
import { LeftCompo } from "./LeftCompo";
import AppQuiz from "./AppQuiz";
import One from "./Gestures/one";
import Three from "./Gestures/three";
///////// NEW STUFF IMPORTS

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          // fp.Gestures.VictoryGesture,
          // fp.Gestures.ThumbsUpGesture,
          two,
          // Left,
          One,
          // Three,

          // loveYouGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 7);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );

          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // // console.log(confidence);
          setEmoji(gesture.gestures[maxConfidence].name);

          // console.log(emoji);
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="App">
      <div className="main_wrapper">
        <div className="left_content">
          {/* <LeftCompo emoji={emoji}></LeftCompo> */}
          <AppQuiz emoji={emoji}></AppQuiz>
        </div>
        <header>
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              marginLeft: "82.5%",
              // marginRight: "auto",
              top: "20%",
              left: 0,
              right: 0,
              textAlign: "right",
              zindex: 9,
              width: 240,
              height: 280,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "82.5%",
              top: "20%",
              // marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "right",
              zindex: 9,
              width: 240,
              height: 280,
            }}
          />
          {/* NEW STUFF */}
          {/* {emoji !== null ? (
            <img
              src={images[emoji]}
              style={{
                // position: "absolute",
                // marginright: "auto",
                // marginRight: "auto",
                left: 400,
                bottom: 500,
                right: 0,
                textAlign: "center",
                height: 100,
              }}
            />
          ) : (
            ""
          )} */}

          {/* NEW STUFF */}
        </header>
      </div>
    </div>
  );
}

export default App;
