import * as React from "react"
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const OB9 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={312}
    height={312}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={312}
      height={312}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Rect width={312} height={312} fill="#C4C4C4" rx={40} />
    </Mask>
    <G mask="url(#a)">
      <Path
        stroke="#FCAC12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
        d="M81.338 133.762C59.733 138.092 22 155.563 6.64 175.567m95.177-14.711c-11.107 1.886-42.879 11.628-66.246 31.627m68.143 8.968c-19.465 4.451-53.308 16.513-77.24 37.482"
      />
      <Path
        stroke="url(#b)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.32}
        strokeWidth={6}
        d="M81.338 133.762C59.733 138.092 22 155.563 6.64 175.567m95.177-14.711c-11.107 1.886-42.879 11.628-66.246 31.627m68.143 8.968c-19.465 4.451-53.308 16.513-77.24 37.482"
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <Path
        fill="#EEE5FF"
        d="M118.647 216.495c.155-36.355-6.498-79.176-13.127-100.191-1.243-3.941.281-8.364 3.975-10.215 64.802-32.477 142.491-28.928 176.64-19.65 2.654.721 4.637 2.858 5.26 5.537 6.164 26.489 7.059 54.406 5.424 94.154-.164 3.986-3.268 7.234-7.239 7.616-70.134 6.758-93.989 13.099-160.609 30.843-5.227 1.392-10.347-2.684-10.324-8.094Z"
      />
      <Path
        fill="url(#c)"
        d="M118.647 216.495c.155-36.355-6.498-79.176-13.127-100.191-1.243-3.941.281-8.364 3.975-10.215 64.802-32.477 142.491-28.928 176.64-19.65 2.654.721 4.637 2.858 5.26 5.537 6.164 26.489 7.059 54.406 5.424 94.154-.164 3.986-3.268 7.234-7.239 7.616-70.134 6.758-93.989 13.099-160.609 30.843-5.227 1.392-10.347-2.684-10.324-8.094Z"
        style={{
          mixBlendMode: "soft-light",
        }}
      />
      <Path
        fill="#8F57FF"
        fillRule="evenodd"
        d="M166.593 141.912c13.507 5.348 26.406 10.456 39.295 14.304 10.676 3.188 55.035-28.655 84.417-63.219a3.764 3.764 0 0 0 .69-3.658 3.573 3.573 0 0 0-2.387-2.284C255.855 77.29 175.9 72.776 109.464 106.082c-3.693 1.851-5.198 6.281-3.782 10.161.14.384.282.776.423 1.174a8.335 8.335 0 0 0 5.645 5.252c20.023 5.457 37.911 12.539 54.843 19.243Z"
        clipRule="evenodd"
      />
      <Path
        fill="url(#d)"
        fillRule="evenodd"
        d="M166.593 141.912c13.507 5.348 26.406 10.456 39.295 14.304 10.676 3.188 55.035-28.655 84.417-63.219a3.764 3.764 0 0 0 .69-3.658 3.573 3.573 0 0 0-2.387-2.284C255.855 77.29 175.9 72.776 109.464 106.082c-3.693 1.851-5.198 6.281-3.782 10.161.14.384.282.776.423 1.174a8.335 8.335 0 0 0 5.645 5.252c20.023 5.457 37.911 12.539 54.843 19.243Z"
        clipRule="evenodd"
        opacity={0.24}
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={107.966}
        x2={-3.833}
        y1={138.656}
        y2={224.177}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopOpacity={0.106} />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={240.96}
        x2={115.82}
        y1={56.406}
        y2={316.885}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.17} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={228.989}
        x2={195.756}
        y1={56.849}
        y2={155.926}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default OB9
