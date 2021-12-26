// Import dependencies
import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

// describe victory gesture ✌️
export const Two = new GestureDescription("two");

// thumb:
Two.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
Two.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
Two.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
Two.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
Two.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
Two.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
Two.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
Two.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
Two.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
Two.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
Two.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
Two.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
Two.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
Two.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
Two.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
Two.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
Two.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
Two.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
// Start.setWeight(Finger.Index, 2);
// Start.setWeight(Finger.Middle, 2);

export default Two;
