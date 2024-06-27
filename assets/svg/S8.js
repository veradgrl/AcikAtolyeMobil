import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={295}
    height={281}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        width={214}
        height={200.562}
        x={26.612}
        y={56.354}
        fill="#EEE5FF"
        stroke="#B18AFF"
        rx={23.5}
        transform="rotate(-15 26.612 56.354)"
      />
      <Path
        stroke="#B18AFF"
        strokeWidth={3}
        d="M33.66 78.794c-3.216-12.003 3.908-24.34 15.91-27.557l22.568-6.047 51.392 191.797-22.568 6.047c-12.003 3.216-24.34-3.907-27.557-15.91L33.66 78.794Z"
      />
      <Path
        fill="#D3BDFF"
        d="m37.906 100.433 47.33-12.683 40.376 150.685-24.148 6.47c-12.804 3.431-25.964-4.167-29.394-16.97L37.906 100.433Z"
      />
      <Path
        fill="#D3BDFF"
        d="M32.212 79.182c-3.43-12.803 4.167-25.963 16.97-29.394l161.31-43.222c12.803-3.431 25.963 4.167 29.394 16.97l5.694 21.25-207.674 55.647-5.694-21.25Z"
      />
      <Path
        stroke="#B18AFF"
        strokeWidth={3}
        d="m72.27 45.155 82.104-22 51.391 191.796-82.103 22z"
      />
      <Path
        stroke="#B18AFF"
        strokeWidth={3}
        d="M33.66 78.794c-3.216-12.003 3.908-24.34 15.91-27.557L210.88 8.014c12.003-3.216 24.341 3.907 27.557 15.91l5.414 20.208-204.776 54.87-5.415-20.208ZM51.648 145.926l204.776-54.87 15.012 56.024L66.66 201.95z"
      />
      <Rect
        width={212}
        height={198.562}
        x={27.837}
        y={57.061}
        stroke="#B18AFF"
        strokeWidth={3}
        rx={22.5}
        transform="rotate(-15 27.837 57.06)"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
