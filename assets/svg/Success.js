import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Success = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={96}
    fill="none"
    {...props}
  >
    <Path
      fill="#00A86B"
      d="M48 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96Zm22.64 38.36L48 60.96a12 12 0 0 1-16.96 0l-5.68-5.64a4.017 4.017 0 0 1 5.68-5.68l5.64 5.68a4.002 4.002 0 0 0 5.68 0l22.6-22.64a4.015 4.015 0 1 1 5.68 5.68Z"
    />
  </Svg>
)
export default Success
