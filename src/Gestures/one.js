// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// describe victory gesture ✌️
export const One = new GestureDescription("One");

// thumb:
One.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
One.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
One.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
One.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
One.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
One.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
One.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
// Start.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// Start.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
// Start.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

One.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
One.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.2);
One.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
One.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.2);
// ring:
One.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
One.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
One.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
One.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
One.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
One.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
One.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
One.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
// Start.setWeight(Finger.Index, 2);
// Start.setWeight(Finger.Middle, 2);

export default One;
