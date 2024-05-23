
import * as React from "react"

import Svg, { Path } from "react-native-svg"

const Logo = (props) => (

  <Svg

    xmlns="http://www.w3.org/2000/svg"

    width={248}

    height={116}

    fill="none"

    {...props}

  >

    <Path

      fill="#FFAECB"

      fillRule="evenodd"

      d="M0 57.92v57.919l1.282-1.187c.704-.653 5.451-5.09 10.548-9.861 15.32-14.34 55.504-51.858 59.124-55.201a786.814 786.814 0 0 0 6.137-5.736c2.7-2.558 6.172-5.8 31.941-29.826 6.94-6.471 13.147-12.274 13.794-12.896L124.002 0H0v57.92Zm124.214.12v57.644H185.5c33.707 0 61.566.108 61.909.24.343.132.609.087.59-.099-.019-.186-5.475-5.391-12.126-11.568-12.436-11.55-51.025-47.58-67.484-63.007C145.778 20.056 124.621.395 124.426.395c-.117 0-.212 25.94-.212 57.645Z"

      clipRule="evenodd"

    />

  </Svg>

)

export default Logo

// svg playground