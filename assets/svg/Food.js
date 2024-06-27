import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#FD3C4A"
      d="M13.5 0a3.75 3.75 0 0 0-3.75 3.75v1.5a3.75 3.75 0 0 0 3 3.675v1.71a2.25 2.25 0 0 0-1.5 2.115v3a2.25 2.25 0 0 0 4.5 0v-3a2.25 2.25 0 0 0-1.5-2.115v-1.71a3.75 3.75 0 0 0 3-3.675v-1.5A3.75 3.75 0 0 0 13.5 0ZM7.5 0a.75.75 0 0 0-.75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 0-1.5 0v4.5a3.75 3.75 0 0 0 3 3.675v1.71a2.25 2.25 0 0 0-1.5 2.115v3a2.25 2.25 0 0 0 4.5 0v-3a2.25 2.25 0 0 0-1.5-2.115v-1.71a3.75 3.75 0 0 0 3-3.675V.75A.75.75 0 0 0 7.5 0Z"
    />
  </Svg>
)
export default SvgComponent
