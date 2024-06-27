import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M23.5 16a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-4a1 1 0 1 0-2 0v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1Z"
    />
    <Path
      fill="#fff"
      d="M10.38 17.12a3 3 0 0 0 4.24 0l5.66-5.66a1 1 0 1 0-1.42-1.41l-5.36 5.36V1a1 1 0 0 0-2 0v14.41l-5.36-5.36a1 1 0 1 0-1.42 1.41l5.66 5.66Z"
    />
  </Svg>
)
export default SvgComponent
