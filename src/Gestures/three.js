// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// describe victory gesture ✌️
export const Three = new GestureDescription("three");

// thumb:
Three.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
Three.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
Three.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
Three.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
Three.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
Three.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
Three.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
Three.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
Three.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
Three.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
Three.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.75);
//   // ring:
//   Start.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
//   Start.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
//   Start.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
//   Start.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
Three.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Three.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
Three.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
Three.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
// Start.setWeight(Finger.Index, 2);
// Start.setWeight(Finger.Middle, 2);

export default Three;
