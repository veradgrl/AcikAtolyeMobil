import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#FCAC12"
      d="M16.25 12H2.435l.6 3a3.75 3.75 0 0 0 3.675 3h5.58a3.75 3.75 0 0 0 3.675-3l.6-3h-.315Zm-7.5 3.75a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 1 1 1.5 0v1.5Zm3 0a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 1 1 1.5 0v1.5ZM16.25 4.5h-1.5v-.75A3.75 3.75 0 0 0 11 0H8a3.75 3.75 0 0 0-3.75 3.75v.75h-1.5A2.25 2.25 0 0 0 .5 6.75v1.5a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-1.5a2.25 2.25 0 0 0-2.25-2.25Zm-10.5-.75A2.25 2.25 0 0 1 8 1.5h3a2.25 2.25 0 0 1 2.25 2.25v.75h-7.5v-.75Z"
    />
  </Svg>
)
export default SvgComponent
