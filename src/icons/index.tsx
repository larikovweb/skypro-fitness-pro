import { FC } from 'react';

export interface SvgIconConstituentValues {
  strokeColor?: string;
  strokeWidth?: string;
  strokeWidth2?: string;
  strokeWidth3?: string;
  strokeFill?: string;
  fillColor?: string;
  fillColor2?: string;
  fillColor3?: string;
  fillColor4?: string;
  fillColor5?: string;
  fillColor6?: string;
  fillColor7?: string;
  imageWidth?: string;
  imageHeight?: string;
  width?: string;
  height?: string;
  rotateCenter?: number;
  className?: string;
  className2?: string;
  className3?: string;
  className4?: string;
  className5?: string;
}
export interface SvgIcon extends FC<SvgIconConstituentValues> {
  svg?: string;
}

export const ArrowIco: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.87494 2.89961L17.2999 11.2996C17.3999 11.3996 17.4709 11.5079 17.5129 11.6246C17.5549 11.7413 17.5756 11.8663 17.5749 11.9996C17.5749 12.1329 17.5543 12.2579 17.5129 12.3746C17.4716 12.4913 17.4006 12.5996 17.2999 12.6996L8.87494 21.1246C8.6416 21.3579 8.34994 21.4746 7.99994 21.4746C7.64994 21.4746 7.34994 21.3496 7.09994 21.0996C6.84994 20.8496 6.72494 20.5579 6.72494 20.2246C6.72494 19.8913 6.84994 19.5996 7.09994 19.3496L14.4499 11.9996L7.09994 4.64961C6.8666 4.41627 6.74994 4.12861 6.74994 3.78661C6.74994 3.44461 6.87494 3.14894 7.12494 2.89961C7.37494 2.64961 7.6666 2.52461 7.99994 2.52461C8.33327 2.52461 8.62494 2.64961 8.87494 2.89961Z" />
  </svg>
);

export const StrelaIco: FC<{ stroke: string }> = ({ stroke }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none">
    <path stroke={stroke} strokeWidth="2" d="M12.355 1.033 6.678 6.711 1 1.033" />
  </svg>
);

export const ProfileIco: FC = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="25" fill="#D9D9D9" />
  </svg>
);

export const LogoIco: SvgIcon = ({ fillColor }): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="36" fill="none">
      <path
        fill={fillColor}
        d="M39.4 12.012c0 2.772 1.428 4.424 3.276 5.74l2.38 1.708c1.26.896 2.184 1.932 2.184 3.5 0 1.4-.924 2.24-2.38 2.24-1.428 0-2.38-1.036-2.38-2.716V21h-3.36v1.68c0 3.612 2.576 5.6 5.74 5.6s5.74-1.904 5.74-5.74c0-2.688-1.484-4.34-3.304-5.656l-2.464-1.764c-1.176-.84-2.072-1.708-2.072-3.108 0-1.428.84-2.212 2.072-2.212 1.316 0 2.128.812 2.128 2.604v1.316h3.36v-1.4c0-3.78-2.436-5.6-5.488-5.6-2.996 0-5.432 1.512-5.432 5.292ZM57.47 7h-3.36v21h3.36v-7.364L63.49 28h4.2l-6.524-7.644L67.326 14h-4.424l-5.432 6.104V7ZM77.138 29.456 82.43 14h-3.36l-3.528 10.78-3.5-10.78h-3.36l5.264 15.428c-.812 1.96-1.792 2.884-3.36 2.884-.672 0-1.316-.14-1.848-.308v2.968c.532.168 1.344.308 2.156.308 3.556 0 5.068-2.38 6.244-5.824ZM89.45 28v-8.68h5.431v-3.08H89.45v-6.16h6.272V7H86.09v21h3.36ZM100.47 11.2c1.232 0 2.1-.924 2.1-2.1 0-1.204-.868-2.1-2.1-2.1-1.204 0-2.1.896-2.1 2.1 0 1.176.896 2.1 2.1 2.1Zm1.68 16.8V14h-3.36v14h3.36ZM110.823 23.212V16.94h3.64V14h-3.64V9.8h-3.36V14h-2.24v2.94h2.24v6.496c0 3.752 2.016 4.844 4.788 4.844.812 0 1.708-.168 2.212-.336v-2.996a4.926 4.926 0 0 1-1.54.252c-1.456 0-2.1-.616-2.1-1.988ZM127.334 20.3V28h3.36v-8.372c0-3.948-2.24-5.908-5.208-5.908-1.736 0-3.164.812-4.032 2.296V14h-3.36v14h3.36v-7.7c0-2.352 1.12-3.64 2.94-3.64 1.82 0 2.94 1.288 2.94 3.64ZM147.884 22.12c.028-.364.056-.728.056-1.12 0-4.284-2.94-7.28-6.944-7.28s-6.944 2.996-6.944 7.28c0 4.284 2.94 7.28 6.944 7.28 3.304 0 5.74-1.568 6.58-4.48h-3.64c-.448.98-1.316 1.54-2.8 1.54-2.072 0-3.416-1.176-3.78-3.22h10.528Zm-6.888-5.46c1.96 0 3.248 1.12 3.612 3.08h-7.224c.364-1.96 1.652-3.08 3.612-3.08ZM162.484 23.968c0-5.768-8.232-3.472-8.232-6.16 0-.896.84-1.428 2.1-1.428 1.372 0 2.38.896 2.38 2.072h3.5c0-2.66-2.52-4.732-5.88-4.732-3.108 0-5.488 1.624-5.488 4.228 0 5.712 8.148 3.192 8.148 6.16 0 1.036-.84 1.54-2.24 1.54-1.512 0-2.66-.756-2.66-2.268h-3.5c0 3.108 2.66 4.9 6.16 4.9 3.276 0 5.712-1.652 5.712-4.312ZM177.153 23.968c0-5.768-8.232-3.472-8.232-6.16 0-.896.84-1.428 2.1-1.428 1.372 0 2.38.896 2.38 2.072h3.5c0-2.66-2.52-4.732-5.88-4.732-3.108 0-5.488 1.624-5.488 4.228 0 5.712 8.148 3.192 8.148 6.16 0 1.036-.84 1.54-2.24 1.54-1.512 0-2.66-.756-2.66-2.268h-3.5c0 3.108 2.66 4.9 6.16 4.9 3.276 0 5.712-1.652 5.712-4.312ZM185.151 28v-7.84h2.772c3.444 0 5.908-2.128 5.908-6.02v-1.4c0-3.752-2.464-5.74-5.908-5.74h-6.132v21h3.36Zm2.492-17.92c1.736 0 2.828.812 2.828 2.94v.84c0 2.296-1.092 3.22-2.828 3.22h-2.492v-7h2.492ZM200.558 14h-3.36v14h3.36v-7.14c0-2.352 1.456-3.64 3.948-3.64.56 0 1.064.084 1.456.224v-3.668c-.168-.056-.448-.056-.7-.056-2.044 0-3.696.896-4.704 2.548V14ZM214.938 28.28c4.088 0 7.14-2.996 7.14-7.28 0-4.284-3.052-7.28-7.14-7.28-4.088 0-7.14 2.996-7.14 7.28 0 4.284 3.052 7.28 7.14 7.28Zm0-3.08c-2.156 0-3.78-1.68-3.78-4.2 0-2.52 1.624-4.2 3.78-4.2 2.156 0 3.78 1.68 3.78 4.2 0 2.52-1.624 4.2-3.78 4.2Z"
      />

      <path
        fill="#00C1FF"
        d="M3.688 28.458C1.542 29.698 0 28.665 0 26.827V11.174c0-1.838 1.541-2.871 3.688-1.631 3.344 1.93 13.372 7.724 13.372 7.724 1.333.77 1.333 2.696 0 3.466L3.688 28.458Z"
      />
      <path
        fill="#BCEC30"
        d="M14.726 28.457c-2.146 1.24-3.688.207-3.688-1.63V11.172c0-1.838 1.541-2.871 3.688-1.631l13.078 7.555c1.465.845 1.465 2.96 0 3.805l-13.077 7.555Z"
      />
      <mask
        id="a"
        width="18"
        height="20"
        x="11"
        y="9"
        maskUnits="userSpaceOnUse"
        // style="mask-type:alpha"
      >
        <path
          fill="#6FE4FF"
          d="M14.726 28.457c-2.146 1.24-3.688.207-3.688-1.63V11.172c0-1.838 1.541-2.871 3.688-1.631l13.078 7.555c1.465.845 1.465 2.96 0 3.805l-13.077 7.555Z"
        />
      </mask>
      <g filter="url(#b)" mask="url(#a)">
        <path
          fill="#99D100"
          d="M3.689 28.459C1.542 29.698 0 28.665 0 26.826V11.174c0-1.838 1.541-2.87 3.689-1.631l13.372 7.724c1.333.77 1.333 2.696 0 3.466L3.689 28.46Z"
        />
      </g>
      <defs>
        <filter
          id="b"
          width="20.983"
          height="22.922"
          x="-1.461"
          y="7.54"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_26_1313" stdDeviation=".731" />
        </filter>
      </defs>
    </svg>
  );
};

export const PhoneSvgImage: FC = () => (
  <svg
    width="300"
    height="300"
    viewBox="0 0 300 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M193.361 177.835C176.002 169.879 173.307 139.905 173.307 139.905C173.307 139.905 145.144 175.131 134.397 163.384C125.995 154.204 148.961 120.893 177.319 112.113C200.059 105.081 211.57 136.231 214.878 148.971C223.5 182.233 281.799 205.352 333.199 229.189"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M142.041 165.595C147.754 170.639 153.934 173.699 158.129 172.477C165.804 170.242 167.549 164.194 167.41 158.788"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M158.288 155.496C162.333 158.053 166.246 159.299 169.185 158.443C172.526 157.47 174.742 155.775 176.17 153.725"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M132.839 155.164C122.104 141.176 113.783 122.391 119.394 114.982C121.819 111.777 125.498 110.462 128.646 109.959"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M141.559 138.275C131.946 124.717 125.12 107.996 130.336 101.107C133.148 97.3923 137.643 96.2175 141.043 95.9011"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M120.51 134.057C120.51 134.057 109.813 131.329 105.762 140.725C99.1231 156.083 140.348 204.741 153.648 194.767C162.801 187.904 158.134 172.49 158.134 172.49"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M121.099 176.025C121.099 176.025 116.04 181.362 123.168 192.83C134.32 210.774 151.301 214.874 156.548 207.722C162.162 200.088 155.258 193.32 155.258 193.32"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M148.972 109.11L161.951 119.447"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M168.769 210.063C173.261 208.301 177.557 205.569 180.259 203.481C180.259 203.481 228.561 241.244 307.401 276.927L333.198 229.189"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M140.262 140.389C140.262 140.389 140.644 153.183 134.384 163.389"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M152.29 160.669C152.893 160.648 160.235 164.606 162.378 170.247"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M173.321 156.371C171.945 152.751 168.428 149.824 165.926 148.197"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M130.673 185.907C130.673 185.907 136.355 177.74 142.257 179.522C148.16 181.304 157.678 188.876 157.678 188.876"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M136.025 206.083C136.025 206.083 140.548 200.186 144.994 201.296C149.439 202.406 156.491 207.509 156.491 207.509"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <ellipse
      cx="90.4921"
      cy="224.784"
      rx="27.4047"
      ry="37.9638"
      transform="rotate(44.5136 90.4921 224.784)"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <ellipse
      cx="89.8969"
      cy="223.683"
      rx="15.4173"
      ry="21.3577"
      transform="rotate(44.5136 89.8969 223.683)"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <ellipse
      cx="89.897"
      cy="223.684"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 89.897 223.684)"
      fill="#271A58"
    />
    <ellipse
      cx="84.5859"
      cy="228.679"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 84.5859 228.679)"
      fill="#271A58"
    />
    <ellipse
      cx="95.4512"
      cy="218.642"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 95.4512 218.642)"
      fill="#271A58"
    />
    <ellipse
      cx="89.8655"
      cy="217.831"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 89.8655 217.831)"
      fill="#271A58"
    />
    <ellipse
      cx="95.9146"
      cy="224.912"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 95.9146 224.912)"
      fill="#271A58"
    />
    <ellipse
      cx="84.5471"
      cy="222.638"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 84.5471 222.638)"
      fill="#271A58"
    />
    <ellipse
      cx="90.5959"
      cy="229.718"
      rx="1.62117"
      ry="2.24581"
      transform="rotate(44.5136 90.5959 229.718)"
      fill="#271A58"
    />
    <path
      d="M100.891 234.492L101.248 234.843L101.248 234.843L100.891 234.492ZM75.8408 239.722L75.4113 239.978L75.4585 240.057L75.5308 240.115L75.8408 239.722ZM106.667 210.744L107.097 210.488L107.05 210.409L106.977 210.352L106.667 210.744ZM81.6171 215.974L81.2605 215.624L81.2605 215.624L81.6171 215.974ZM100.534 234.142C96.6619 238.08 92.0534 240.573 87.6646 241.477C83.2733 242.382 79.1405 241.693 76.1509 239.33L75.5308 240.115C78.8104 242.706 83.2674 243.404 87.8664 242.457C92.4677 241.509 97.2496 238.909 101.248 234.843L100.534 234.142ZM106.238 211C109.851 217.066 107.758 226.794 100.534 234.142L101.248 234.843C108.646 227.317 111.033 217.097 107.097 210.488L106.238 211ZM81.9736 216.325C85.8461 212.386 90.4547 209.894 94.8435 208.989C99.2347 208.085 103.368 208.774 106.357 211.137L106.977 210.352C103.698 207.76 99.2406 207.062 94.6417 208.01C90.0403 208.958 85.2584 211.558 81.2605 215.624L81.9736 216.325ZM76.2704 239.466C72.657 233.4 74.7499 223.672 81.9736 216.325L81.2605 215.624C73.8618 223.149 71.4748 233.37 75.4113 239.978L76.2704 239.466Z"
      fill="#271A58"
    />
    <path
      d="M116.543 197.178L127.176 207.5C137.969 218.111 134.802 238.833 120.103 253.784C105.403 268.735 84.7379 272.254 73.9452 261.643L63.1832 251.166"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <ellipse
      cx="155.018"
      cy="62.651"
      rx="27.4047"
      ry="37.9638"
      transform="rotate(2.14363 155.018 62.651)"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <ellipse
      cx="153.836"
      cy="62.239"
      rx="15.4173"
      ry="21.3577"
      transform="rotate(2.14363 153.836 62.239)"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <ellipse
      cx="153.836"
      cy="62.2391"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 153.836 62.2391)"
      fill="#271A58"
    />
    <ellipse
      cx="153.279"
      cy="69.5093"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 153.279 69.5093)"
      fill="#271A58"
    />
    <ellipse
      cx="154.542"
      cy="54.7716"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 154.542 54.7716)"
      fill="#271A58"
    />
    <ellipse
      cx="149.87"
      cy="57.9366"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 149.87 57.9366)"
      fill="#271A58"
    />
    <ellipse
      cx="159.11"
      cy="59.0916"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 159.11 59.0916)"
      fill="#271A58"
    />
    <ellipse
      cx="149.179"
      cy="65.0717"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 149.179 65.0717)"
      fill="#271A58"
    />
    <ellipse
      cx="158.42"
      cy="66.2267"
      rx="1.62116"
      ry="2.2458"
      transform="rotate(2.14363 158.42 66.2267)"
      fill="#271A58"
    />
    <path
      d="M169.243 62.8153L169.743 62.834L169.743 62.834L169.243 62.8153ZM154.26 83.5611L154.115 84.0396L154.203 84.0664L154.295 84.0599L154.26 83.5611ZM157.507 41.3777L157.652 40.8991L157.564 40.8724L157.472 40.8789L157.507 41.3777ZM142.524 62.1234L142.024 62.1047L142.024 62.1047L142.524 62.1234ZM168.743 62.7966C168.537 68.3165 166.812 73.2639 164.179 76.8897C161.544 80.5175 158.026 82.7933 154.225 83.0624L154.295 84.0599C158.465 83.7647 162.228 81.2768 164.988 77.4774C167.748 73.676 169.529 68.5326 169.743 62.834L168.743 62.7966ZM157.362 41.8562C164.12 43.903 169.129 52.5004 168.743 62.7966L169.743 62.834C170.137 52.2883 165.014 43.1289 157.652 40.8991L157.362 41.8562ZM143.024 62.1421C143.23 56.6222 144.955 51.6748 147.588 48.049C150.223 44.4212 153.741 42.1455 157.542 41.8764L157.472 40.8789C153.302 41.1741 149.539 43.662 146.779 47.4614C144.019 51.2628 142.238 56.4062 142.024 62.1047L143.024 62.1421ZM154.405 83.0826C147.647 81.0358 142.638 72.4384 143.024 62.1421L142.024 62.1047C141.63 72.6505 146.753 81.8099 154.115 84.0396L154.405 83.0826Z"
      fill="#271A58"
    />
    <path
      d="M155.66 24.6998L170.472 25.1596C185.597 25.7257 197.222 43.1697 196.438 64.1219C195.654 85.074 182.757 101.6 167.632 101.034L152.621 100.547"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M88.2425 267.765C103.386 273.71 124.755 277.673 146.18 245.941C165.945 216.667 173.152 205.568 185.015 171.399M185.142 31.7763C197.838 40.2386 203.662 51.3041 205.937 73.0525C207.32 86.2755 205.548 101.041 200.836 119.925M121.888 202.512C123.046 203.135 124.418 202.981 125.96 202.15C126.814 201.689 127.72 201.021 128.671 200.162M159.818 100.825C161.89 105.319 163.188 109.644 163.806 113.973C164 115.327 164.127 116.682 164.19 118.043"
      stroke="#271A58"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
);

export const IconLoader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid">
    <g transform="translate(80,50)">
      <g transform="rotate(0)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="1">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.875s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.875s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(71.21320343559643,71.21320343559643)">
      <g transform="rotate(45)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.875">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.75s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.75s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(50,80)">
      <g transform="rotate(90)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.75">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.625s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.625s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(28.786796564403577,71.21320343559643)">
      <g transform="rotate(135)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.625">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.5s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.5s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(20,50.00000000000001)">
      <g transform="rotate(180)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.5">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.375s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.375s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(28.78679656440357,28.786796564403577)">
      <g transform="rotate(225)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.375">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.25s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.25s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(49.99999999999999,20)">
      <g transform="rotate(270)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.25">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.125s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="-0.125s"></animate>
        </circle>
      </g>
    </g>
    <g transform="translate(71.21320343559643,28.78679656440357)">
      <g transform="rotate(315)">
        <circle cx="0" cy="0" r="6" stroke="none" fillOpacity="0.125">
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="0s"
            values="1.5 1.5;1 1"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"></animateTransform>
          <animate
            attributeName="fill-opacity"
            keyTimes="0;1"
            dur="1s"
            repeatCount="indefinite"
            values="1;0"
            begin="0s"></animate>
        </circle>
      </g>
    </g>
  </svg>
);
