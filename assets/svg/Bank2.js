import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const Bank2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#27346A"
        d="M18.085 1.868C16.977.606 14.976.065 12.416.065h-7.43a1.064 1.064 0 0 0-1.051.897L.84 20.59a.638.638 0 0 0 .63.737h4.587l1.152-7.309-.035.23a1.06 1.06 0 0 1 1.047-.898h2.18c4.282 0 7.635-1.74 8.615-6.773.029-.149.054-.294.076-.435-.124-.066-.124-.066 0 0 .291-1.86-.002-3.127-1.008-4.273Z"
      />
      <Path
        fill="#27346A"
        d="M8.966 5.47a.932.932 0 0 1 .401-.09h5.825c.69 0 1.334.045 1.922.14a8.078 8.078 0 0 1 1.173.28c.29.097.558.21.806.34.291-1.86-.002-3.125-1.008-4.272C16.977.606 14.976.065 12.416.065H4.985c-.523 0-.968.38-1.05.897L.84 20.588a.638.638 0 0 0 .63.738h4.587l2.39-15.16a.931.931 0 0 1 .518-.695Z"
      />
      <Path
        fill="#2790C3"
        d="M19.017 6.576c-.98 5.032-4.333 6.773-8.615 6.773H8.22a1.06 1.06 0 0 0-1.046.897l-1.433 9.088a.558.558 0 0 0 .55.646h3.867a.93.93 0 0 0 .92-.785l.037-.198.729-4.62.047-.255a.93.93 0 0 1 .918-.785h.579c3.746 0 6.68-1.522 7.536-5.925.358-1.84.173-3.375-.774-4.454a3.695 3.695 0 0 0-1.058-.817c-.023.142-.047.286-.076.435Z"
      />
      <Path
        fill="#1F264F"
        d="M18.067 5.732a7.145 7.145 0 0 0-.462-.118 8.727 8.727 0 0 0-.49-.093 12.086 12.086 0 0 0-1.922-.14H9.367a.928.928 0 0 0-.919.786l-1.238 7.85-.036.23a1.06 1.06 0 0 1 1.047-.898h2.18c4.283 0 7.636-1.74 8.615-6.773.03-.149.054-.293.076-.435a5.287 5.287 0 0 0-1.025-.409"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.83 0h20.34v24H.83z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Bank2
