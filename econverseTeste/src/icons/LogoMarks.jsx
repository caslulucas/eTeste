import * as React from "react"

 export function LogoMarks(props) {
  return (
    <svg
      width={239}
      height={234}
      viewBox="0 0 239 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_1_1434)">
        <circle cx={113.5} cy={113.5} r={105.5} fill="#fff" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_1434"
          x={-12}
          y={-5}
          width={251}
          height={251}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={7} />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1434"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1434"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}



