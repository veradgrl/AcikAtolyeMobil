import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowWhite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#FFFFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12M6 12l5-5m-5 5 5 5"
    />
  </Svg>
)
export default ArrowWhite