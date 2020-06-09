import React from 'react';
import { useThemeUI } from 'theme-ui';

import { Icon } from '@types';

const NotFound: Icon = ({ fill, ...props }) => {
  const { theme } = useThemeUI();

  return (
    <svg className="prefix__animated" viewBox="0 0 500 500" {...props}>
      <style>
        {
          '@keyframes slideRight{0%{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes zoomIn{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}svg:not(.prefix__animated) .prefix__animable{opacity:0}'
        }
      </style>
      <g
        id="prefix__Floor--inject-26"
        className="prefix__animable"
        style={{
          transformOrigin: '247.958px 352.312px',
          animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideRight',
          animationDelay: '0s',
        }}
      >
        <path
          id="prefix__floor--inject-26"
          d="M410.25 259c-89.63-51.53-234.95-51.53-324.58 0s-89.62 135.09 0 186.62 234.94 51.54 324.57 0 89.63-135.12.01-186.62z"
          style={{
            transformOrigin: '247.958px 352.312px',
          }}
          className="prefix__animable"
          fill={theme.colors.card}
        />
      </g>
      <g
        id="prefix__Shadows--inject-26"
        className="prefix__animable"
        style={{
          transformOrigin: '238.628px 387.937px',
          animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) fadeIn',
          animationDelay: '0s',
        }}
      >
        <ellipse
          id="prefix__Shadow--inject-26"
          cx={351.59}
          cy={353.98}
          rx={40.97}
          ry={23.65}
          style={{
            transformOrigin: '351.59px 353.98px',
          }}
          className="prefix__animable"
          fill={theme.colors.border}
        />
        <path
          id="prefix__shadow--inject-26"
          d="M302.71 395.39c-16.36-1.51-30.28-.47-41.34 1.82-1.46-10.44-10-20.66-25.68-28.64-34.54-17.61-90.55-17.61-125.09 0s-34.54 46.16 0 63.77 90.55 17.6 125.09 0a74.66 74.66 0 0010.36-6.34 143.47 143.47 0 0034.5 3.53l1.19.39a98.94 98.94 0 0029.07 4.75c7.63 0 14-1.21 17.6-3.66a10.91 10.91 0 001.08-.83c4.72.14 9.85.33 15.25-.75 7.83-1.58 11.67-5 11.45-9.12-.55-10.31-30.59-22.82-53.48-24.92zM281 426.21c-6.72-2.47-10.3-5.84-9.9-9.38.53-4.66 7.41-8.86 15.67-9.55 1.14-.09 2.31-.14 3.47-.14 6.37 0 12.9 1.36 17 3.35a18.05 18.05 0 00-5.42.91c-2.47.85-3.61 2.83-3 5.17.48 1.76 2 3.69 4.32 5.54-5.73 2.55-13.55 3.83-22.14 4.1zm26.88-12.47a22.35 22.35 0 013.61.3 1.43 1.43 0 01.09.27c.49 1.74-1.34 3.92-5.08 6.11-2.57-1.72-4.11-3.45-4.45-4.71-.11-.39-.23-.84.88-1.22a15.24 15.24 0 014.93-.75zM290 428.81a50.6 50.6 0 0015.84-4.33l.51-.26a46.88 46.88 0 0017.36 5.5c-7.24 2.58-20.57 2.2-33.71-.91zm38.11-2a47.33 47.33 0 01-18.4-4.59c3.56-2.39 5.31-4.89 5.23-7.46a29.4 29.4 0 019.7 4.68c2.65 2 4.09 4.18 4 5.91a3 3 0 01-.55 1.5zm16-.63c-4.44.9-8.62.71-12.48.73a6.47 6.47 0 00.24-1.33c.2-2.88-1.66-6-5.24-8.73a33.53 33.53 0 00-13.14-5.81c-4.39-5.46-17.77-7.82-27-7.06-9.92.84-17.94 6.18-18.65 12.44-.27 2.37.36 6.22 5.69 9.74a147.72 147.72 0 01-24.14-2.85c8.14-7 12.21-15 12.22-22.88 10.79-2.28 24.52-3.33 40.81-1.83 23.95 2.2 50.14 14.7 50.52 21.84.06 2.17-3.11 4.63-8.85 5.78z"
          style={{
            transformOrigin: '220.447px 400.453px',
          }}
          className="prefix__animable"
          fill={theme.colors.border}
        />
      </g>
      <g
        id="prefix__Clouds--inject-26"
        className="prefix__animable"
        style={{
          transformOrigin: '128.46px 81.4342px',
          animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideRight',
          animationDelay: '0s',
        }}
      >
        <g
          id="prefix__clouds--inject-26"
          className="prefix__animable"
          style={{
            transformOrigin: '128.46px 81.4342px',
          }}
        >
          <path
            d="M137.17 59.22l-11.46 6.61a13 13 0 00.1-1.51V61c0-5.91-4.15-8.3-9.27-5.35A17.92 17.92 0 00111 61c-.83-7.43-6.66-10.2-13.74-6.11-7.65 4.42-13.86 15.16-13.86 24v5a13.07 13.07 0 001.18 5.75l-9.52 5.49a11.37 11.37 0 00-5.14 8.9c0 3.28 2.3 4.61 5.14 3l62.09-35.85a11.38 11.38 0 005.14-8.9c.02-3.37-2.29-4.7-5.12-3.06z"
            style={{
              transformOrigin: '106.105px 80.3557px',
            }}
            id="prefix__elmb3ctve4rpd"
            className="prefix__animable"
            fill="#ebebeb"
          />
          <path
            d="M183.72 79l-7.31 4.22a8 8 0 00.06-1v-2.09c0-3.76-2.64-5.29-5.9-3.4a11.39 11.39 0 00-3.52 3.38c-.54-4.74-4.25-6.5-8.76-3.89-4.88 2.81-8.84 9.66-8.84 15.3v3.17a8.27 8.27 0 00.75 3.66l-6.07 3.51a7.23 7.23 0 00-3.28 5.67c0 2.09 1.47 2.94 3.28 1.89l39.59-22.85a7.25 7.25 0 003.28-5.68c0-2.09-1.47-2.89-3.28-1.89z"
            style={{
              transformOrigin: '163.925px 92.4406px',
            }}
            id="prefix__elvzu59qat5hm"
            className="prefix__animable"
            fill="#ebebeb"
          />
        </g>
      </g>
      <g
        id="prefix__Plant--inject-26"
        className="prefix__animable"
        style={{
          transformOrigin: '364.757px 319.537px',
          animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomIn',
          animationDelay: '0s',
        }}
      >
        <g
          id="prefix__Plants--inject-26"
          className="prefix__animable"
          style={{
            transformOrigin: '364.757px 319.537px',
          }}
        >
          <path
            d="M345.19 350.33a126.12 126.12 0 012.06-35c2.66-13.82 10.59-25 20.08-30.26 3.29-1.81 10.17-3.75 14.67.31 4.29 3.87 2 10.1-3.25 16.51-10.34 12.62-20.53 23.18-23.32 39.74l-1.16 12.28z"
            style={{
              transformOrigin: '364.512px 318.447px',
            }}
            id="prefix__elw9p5t2bmz7"
            className="prefix__animable"
            fill={theme.colors.accent}
          />
          <path
            d="M345.19 350.33a126.12 126.12 0 012.06-35c2.66-13.82 10.59-25 20.08-30.26 3.29-1.81 10.17-3.75 14.67.31 4.29 3.87 2 10.1-3.25 16.51-10.34 12.62-20.53 23.18-23.32 39.74l-1.16 12.28z"
            style={{
              transformOrigin: '364.512px 318.447px',
            }}
            className="prefix__animable"
            opacity={0.2}
            id="prefix__elvjki2ofyt4n"
          />
          <path
            d="M348.39 348.78a.52.52 0 01-.52-.52c0-16 3.39-29.85 10.37-42.35 4.6-8.26 10.24-14.26 17.22-18.34a.52.52 0 01.71.19.51.51 0 01-.19.7c-6.82 4-12.33 9.85-16.85 18-6.88 12.35-10.23 26-10.23 41.85a.51.51 0 01-.51.47z"
            style={{
              transformOrigin: '362.054px 318.14px',
            }}
            id="prefix__eli4uakxkgb0s"
            className="prefix__animable"
            fill="#fff"
          />
          <path
            d="M359.61 356.09c0-3.93 2.62-11.21 8.32-18.25 6.3-7.8 15.57-13.26 16.62-18.19 1.27-5.92-4.17-8.8-12.22-6-9.67 3.42-19.21 16.73-18.06 40.23z"
            style={{
              transformOrigin: '369.455px 334.331px',
            }}
            id="prefix__elvql99a1tdrm"
            className="prefix__animable"
            fill={theme.colors.accent}
          />
          <path
            d="M357.29 352.59a.47.47 0 00.31-.43c1.19-20.82 13.23-31.51 19.63-34.34a.5.5 0 00.25-.65.49.49 0 00-.65-.25c-7.08 3.13-19 13.93-20.21 35.19a.51.51 0 00.47.52.45.45 0 00.2-.04z"
            style={{
              transformOrigin: '367.07px 334.754px',
            }}
            id="prefix__elh0t0z42dltq"
            className="prefix__animable"
            fill="#fff"
          />
        </g>
      </g>
      <g
        id="prefix__Character--inject-26"
        className="prefix__animable"
        style={{
          transformOrigin: '210.808px 319.314px',
          animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) slideRight',
          animationDelay: '0s',
        }}
      >
        <g
          id="prefix__Cat--inject-26"
          className="prefix__animable"
          style={{
            transformOrigin: '210.808px 319.314px',
          }}
        >
          <g
            id="prefix__Yarn--inject-26"
            className="prefix__animable"
            style={{
              transformOrigin: '292.664px 409.761px',
            }}
          >
            <path
              d="M309.71 429.76a98.94 98.94 0 01-29.07-4.76l-1.19-.39c-16.45.47-35.38-2.67-49.2-7.82l1.14-3.06c11.37 4.23 26.75 7.09 41 7.55-5.34-3.52-6-7.37-5.69-9.73.71-6.27 8.72-11.61 18.65-12.45 9.22-.76 22.6 1.6 27 7.07a33.38 33.38 0 0113.14 5.8c3.58 2.75 5.44 5.85 5.24 8.73a6.47 6.47 0 01-.24 1.33c3.86 0 8 .17 12.48-.73 5.74-1.15 8.95-3.61 8.84-5.74-.38-7.14-26.57-19.64-50.52-21.84-31.9-2.94-54 3.89-63.31 10.63l-1.92-2.64c9.72-7.07 32.73-14.26 65.53-11.24 22.88 2.1 52.93 14.56 53.48 24.92.22 4.09-3.63 7.54-11.45 9.12-5.41 1.08-10.54.89-15.26.75a9.69 9.69 0 01-1.07.83c-3.59 2.46-9.96 3.67-17.58 3.67zm-20.83-5.85c13.16 3.11 26.49 3.48 33.71.9a46.82 46.82 0 01-17.36-5.5l-.51.26a50.87 50.87 0 01-15.84 4.34zm19.71-6.55a47.42 47.42 0 0018.4 4.58 3.15 3.15 0 00.5-1.46c.12-1.72-1.33-3.88-4-5.91a29.6 29.6 0 00-9.7-4.68c.11 2.57-1.64 5.11-5.2 7.47zm-19.47-15.13c-1.17 0-2.33 0-3.47.14-8.26.69-15.15 4.89-15.67 9.55-.4 3.54 3.18 6.91 9.89 9.38 8.61-.27 16.43-1.55 22.21-4.1-2.34-1.85-3.83-3.78-4.31-5.54-.63-2.34.51-4.32 3-5.17a18 18 0 015.42-.91c-4.19-1.99-10.7-3.35-17.07-3.35zm17.64 6.6a15.16 15.16 0 00-4.95.75c-1.11.38-1 .83-.88 1.22.34 1.26 1.87 3 4.45 4.71 3.74-2.19 5.57-4.37 5.08-6.11a1.43 1.43 0 00-.09-.27 23.65 23.65 0 00-3.61-.3z"
              style={{
                transformOrigin: '292.664px 409.761px',
              }}
              id="prefix__elkblclhf7ikl"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M319.12 425.73a68.34 68.34 0 006.78 1.2 12.76 12.76 0 001.41-.83 9.69 9.69 0 001.07-.83s-3.2-.16-5.79-.46a24.55 24.55 0 01-3.47.92z"
              style={{
                transformOrigin: '323.75px 425.87px',
              }}
              id="prefix__el00akt89pjlnvb"
              className="prefix__animable"
              fill="#37474f"
            />
            <path
              d="M302.82 420.43c.65-.27 1.29-.56 1.9-.86l.51-.26a20.91 20.91 0 01-3.15-2.11c-.77.34-1.59.65-2.43.95a13.06 13.06 0 003.17 2.28z"
              style={{
                transformOrigin: '302.44px 418.815px',
              }}
              id="prefix__eldwnx83iig0g"
              className="prefix__animable"
              fill="#37474f"
            />
            <path
              d="M310.46 409.4a2.49 2.49 0 01-.24 1.8 13.53 13.53 0 013.22.82 5.45 5.45 0 00.38-2.13 16.47 16.47 0 00-3.45-.76 1.43 1.43 0 01.09.27z"
              style={{
                transformOrigin: '312.021px 410.575px',
              }}
              id="prefix__ely3gfir2igd"
              className="prefix__animable"
              fill="#37474f"
            />
            <path
              d="M268.46 421.09a24.29 24.29 0 005 3.54q3 .06 6 0a49.41 49.41 0 01-7-3.33c-1.35-.06-2.67-.12-4-.21z"
              style={{
                transformOrigin: '273.96px 422.875px',
              }}
              id="prefix__elqcytyte9no"
              className="prefix__animable"
              fill="#37474f"
            />
            <path
              d="M236.08 401.72l1.92 2.64c3.66-2.66 9.33-5.33 16.81-7.41a25.44 25.44 0 00.84-3.57c-8.78 2.26-15.4 5.31-19.57 8.34z"
              style={{
                transformOrigin: '245.865px 398.87px',
              }}
              id="prefix__el9gwuq9oe9s8"
              className="prefix__animable"
              fill="#37474f"
            />
            <path
              d="M241.25 416.81c-3.5-.92-6.83-1.94-9.86-3.07l-1.14 3.06c2.46.92 5.09 1.76 7.83 2.54 1.09-.79 2.15-1.64 3.17-2.53z"
              style={{
                transformOrigin: '235.75px 416.54px',
              }}
              id="prefix__elqer5lijkwcq"
              className="prefix__animable"
              fill="#37474f"
            />
          </g>
          <g
            id="prefix__cat--inject-26"
            className="prefix__animable"
            style={{
              transformOrigin: '179.121px 319.314px',
            }}
          >
            <path
              d="M178 278.37h-.07c-12.42-.47-24.18-9.7-35.55-18.62-9.72-7.63-18.91-14.84-26.76-14.84a1.63 1.63 0 010-3.26c9 0 18.6 7.54 28.78 15.53 11 8.6 22.29 17.49 33.66 17.92a1.64 1.64 0 01-.06 3.27z"
              style={{
                transformOrigin: '146.768px 260.01px',
              }}
              id="prefix__elg2kftfbk1v"
              className="prefix__animable"
              fill="#455a64"
            />
            <g
              id="prefix__Tail--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '103.634px 277.77px',
              }}
            >
              <path
                d="M97.27 350.05c-8.84-3.28-16.4-15.37-13.11-28.83 4-16.22 21.77-27.71 31.54-37.12 18.16-17.49 29.28-31.47 23.49-56.63-5.07-22-25.46-29.36-37.58-28.91-15 .57-24.48 6.83-23.65 11.7.37 2.16 4.46 3.12 7.69 4.31 10 3.66 13.12 5.9 16.32 10.21 4.87 6.56 5.69 15.13 4.64 15.72s-2.44-4.34-9.09-7.18-9.9-.79-9.84.69 6.18 2.88 8 11.68c1.54 7.32 1.17 16.75-9.84 31.82-6.78 9.28-22.19 26.65-18.83 48.82S87.25 356.6 94.2 357z"
                style={{
                  transformOrigin: '103.634px 277.77px',
                }}
                id="prefix__el4l9tysn7o1"
                className="prefix__animable"
                fill={theme.colors.accent}
              />
              <path
                d="M97.27 350.05c-8.84-3.28-16.4-15.37-13.11-28.83 4-16.22 21.77-27.71 31.54-37.12 18.16-17.49 29.28-31.47 23.49-56.63-5.07-22-25.46-29.36-37.58-28.91-15 .57-24.48 6.83-23.65 11.7.37 2.16 4.46 3.12 7.69 4.31 10 3.66 13.12 5.9 16.32 10.21 4.87 6.56 5.69 15.13 4.64 15.72s-2.44-4.34-9.09-7.18-9.9-.79-9.84.69 6.18 2.88 8 11.68c1.54 7.32 1.17 16.75-9.84 31.82-6.78 9.28-22.19 26.65-18.83 48.82S87.25 356.6 94.2 357z"
                style={{
                  transformOrigin: '103.634px 277.77px',
                }}
                className="prefix__animable"
                opacity={0.05}
                id="prefix__el4vo1gsg7smx"
              />
              <path
                d="M94.2 357l3.07-6.94a18.79 18.79 0 01-6.76-4.51 47.87 47.87 0 00-3.09 9.57A20.16 20.16 0 0094.2 357z"
                style={{
                  transformOrigin: '92.345px 351.275px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elpqjuia5lnwb"
              />
              <path
                d="M123 224.4c1.35-.89.87-3 .2-4.42a32.51 32.51 0 00-7.2-10.15 49.49 49.49 0 016.5 1.84c3.08 1 5.07 2.31 5.53 1.17a5.79 5.79 0 00-.12-2.61c-.54-2.12-1.06-2.89-1.79-3.46a39.49 39.49 0 00-24.55-8.21c-15 .57-24.48 6.83-23.65 11.7.37 2.16 4.46 3.12 7.69 4.31 10 3.66 13.12 5.9 16.32 10.21 0 .06 3.62 1.79 5.25 2.83a5.66 5.66 0 002.39 1 1.75 1.75 0 001.13-.27c1.12-.74.88-2.42.47-3.69a51 51 0 00-3-7.25 23.3 23.3 0 0110.44 5.45c1.25 1.15 2.96 2.45 4.39 1.55z"
                style={{
                  transformOrigin: '102.997px 213.588px',
                }}
                id="prefix__elqoyghmyu39"
                className="prefix__animable"
                fill="#455a64"
              />
            </g>
            <g
              id="prefix__Paw--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '222.145px 368.65px',
              }}
            >
              <path
                d="M171.67 344.22c1.27 17.38 7 28.2 18.82 38.24s28.69 16 36.14 19.28 13 7.2 18.36 2.64 4.92-14.43 14.47-22.27 12.9-10 13.15-15.72c.32-7.51-6.91-7.32-9.12-6.19 0 0-1.87-3.2-7.2-2a10.8 10.8 0 00-6.61 4.78s-3.32-.2-6.83 3.08c-3.11 2.9-9.16 10.69-9.16 10.69s6.46-10.15 3.64-21c-2.55-9.82-8.83-12.5-8.83-12.5s2.7-1.38 9.92-.09c0 0-3-8.38-16.18-11.63s-21.89 6.18-21.89 6.18z"
                style={{
                  transformOrigin: '222.145px 368.65px',
                }}
                id="prefix__elm4cik8w9kbm"
                className="prefix__animable"
                fill={theme.colors.accent}
              />
              <path
                d="M252 360.29a11 11 0 00-2.36 2.67c2 0 6.19.21 7.66 5.31.04 0 1.7-5.75-5.3-7.98z"
                style={{
                  transformOrigin: '253.57px 364.28px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elbcqmycv1gtw"
              />
              <path
                d="M264.74 366.18s2.71-1.53 1.14-6.55a6.59 6.59 0 00-2.39.57 6.72 6.72 0 011.25 5.98z"
                style={{
                  transformOrigin: '264.93px 362.905px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elizxpdyajubc"
              />
              <path
                d="M256.26 375.87a21.26 21.26 0 00-14.88 13c-3 7.13-1.93 11.9 1 12.63s4.3.32 6.83-3.53c2.1-4.79 4.08-10.73 10.29-15.83l4.84-3.95c-.34-2.1-3.08-3.55-8.08-2.32z"
                style={{
                  transformOrigin: '251.965px 388.608px',
                }}
                id="prefix__elgasogrjge8"
                className="prefix__animable"
                fill="#f28f8f"
              />
              <path
                d="M254.74 369.07c-2-.79-4 3.84-1.74 4.72 1.87.73 4.35-3.66 1.74-4.72z"
                style={{
                  transformOrigin: '253.934px 371.426px',
                }}
                id="prefix__elks9bmr4u7u"
                className="prefix__animable"
                fill="#ffa8a7"
              />
              <path
                d="M262.4 367.5c-1.95-.79-4 3.84-1.74 4.72 1.87.78 4.34-3.66 1.74-4.72z"
                style={{
                  transformOrigin: '261.597px 369.861px',
                }}
                id="prefix__elrarzdok47n"
                className="prefix__animable"
                fill="#f28f8f"
              />
              <path
                d="M268.69 367.34c-1.95-.8-4 3.83-1.74 4.71 1.88.73 4.36-3.65 1.74-4.71z"
                style={{
                  transformOrigin: '267.893px 369.69px',
                }}
                id="prefix__elhrgrynyroka"
                className="prefix__animable"
                fill="#f28f8f"
              />
            </g>
            <g
              id="prefix__Body--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '155.292px 355.079px',
              }}
            >
              <path
                d="M151.07 299.58c-1 5.55-21.89 10.83-36.23 21.64s-27 25.55-24.75 51.1c2.47 28 27.71 38.33 41 38.33s58.67-3.52 81.9-36.57-8.06-76.57-61.92-74.5z"
                style={{
                  transformOrigin: '155.292px 355.079px',
                }}
                id="prefix__elite0lr9g3u9"
                className="prefix__animable"
                fill={theme.colors.accent}
              />
              <path
                d="M118.39 364.31s7.23-12.75 27.08-9.23 18.07 34.27 18.07 34.27.22 17.19-12.47 15.39-32.68-40.43-32.68-40.43z"
                style={{
                  transformOrigin: '140.986px 379.669px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elzx3a5gwzimg"
              />
              <path
                d="M151.07 299.58a3.78 3.78 0 01-.92 1.72c-.85 10.24 2.31 23.44 14 27.07 12.71 4 27.06 1.68 36.69-1.71a70.17 70.17 0 009.23-4.06c-11.82-14.19-32.72-24.03-59-23.02z"
                style={{
                  transformOrigin: '180.045px 314.995px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__el7jhx48l8m9k"
              />
            </g>
            <path
              d="M159.08 372.19h-.35c-44-9.45-60.2-37.22-66-52.94-7.5-20.44-8.15-42.83-1.62-55.71a1.63 1.63 0 112.95 1.46c-6.14 12.12-5.43 33.46 1.78 53.11 5.53 15.08 21.15 41.74 63.58 50.86a1.63 1.63 0 01-.34 3.23z"
              style={{
                transformOrigin: '123.682px 317.411px',
              }}
              id="prefix__elpig8mizon6j"
              className="prefix__animable"
              fill="#455a64"
            />
            <g
              id="prefix__yarn--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '221.957px 372.563px',
              }}
            >
              <path
                d="M256.53 361.25c5.06 29.3-14 57.06-42.59 62s-55.87-14.8-60.94-44.1c-4.26-24.66 9.1-45.21 30.49-54a61.87 61.87 0 0119.73-4.49c25.85-1.59 48.65 13.66 53.31 40.59z"
                style={{
                  transformOrigin: '204.777px 372.277px',
                }}
                id="prefix__elsglmy30vcyk"
                className="prefix__animable"
                fill="#455a64"
              />
              <g
                style={{
                  transformOrigin: '222.181px 372.563px',
                }}
                id="prefix__elenhhuxtekqa"
                className="prefix__animable"
                clipPath="url(#prefix__clip-path--inject-26)"
              >
                <path
                  d="M290.38 369.62a113.15 113.15 0 01-38.3 6.05 68.11 68.11 0 007.64-3.62c5.61-3 12.62-6.36 14.15-13 .3-1.24-1.22-1-1.81-.51-4.38 3.61-9.65 8.2-15.37 11.7a29.17 29.17 0 01-21.42 3.42c-1.51-.33-3-.7-4.54-1.11a49.29 49.29 0 0014.79-5.48c10.65-6.07 16.12-14.59 18-26.46.22-1.34-1.15-1.78-2-.91-1.64 1.63-1.94 3.36-2.69 5.58-2.41 7-5.76 11.06-11.73 15.44a41.36 41.36 0 01-14 6.58c-2.56.64-5.21.75-7.8 1.15a14.53 14.53 0 01-7.92-.76 49.77 49.77 0 01-5.69-3.12c11.21-.66 23.73-10.57 30.93-17.28 7.62-7.11 13.13-16 11.9-26.56-.21-1.89-2.39-.75-2.65.53-1 4.93-1.45 8.17-3.75 12.87a36.61 36.61 0 01-9.54 11.79c-8.28 7.17-19.68 14.89-30.93 15.92-1.57-1.16-3.13-2.37-4.61-3.66 8.43-3.15 15.63-9.44 21.52-16.24a41.57 41.57 0 008.1-13.52c1.13-3.18 3.65-8.43 2.32-11.76-.63-1.56-2.56-.08-2.67 1-.79 8.11-5.44 16-10.61 22.21-2.46-6.84-4.17-12.85-3.7-20.41a87 87 0 011.49-10.64c.22-1.13.59-2.24 0-3.29-.81-1.51-2.71.84-2.43 1.94-.07-.28-1 1.17-1.09 1.27-.85 1.48-.77 3.7-1 5.36a58 58 0 00-.85 8.42c-.18 7.44 1.88 13.84 4.75 20.55a66.76 66.76 0 01-8.74 7c-1.89-1.4-3.21-5-4.27-6.93a65.3 65.3 0 01-4.52-8.71c-2.77-7.21-2.11-15.73-5.13-22.57-.35-.8-1.82.12-1.85.75-.26 9.38 1.29 19.06 5.4 27.6 1.6 3.34 3.92 9.14 6.92 12.37a11.32 11.32 0 01-2.46 1.4 9.3 9.3 0 01-2.92.83c-2.38.16-3.71-2-5.13-3.57a68.37 68.37 0 01-4.65-5.81 57.7 57.7 0 01-8.17-16.06c-1.46-4.79-1.12-10.31-3.42-14.83-1.11-2.18-3.79.07-3.18 1.95 1.61 5 .74 10.47 2.29 15.58a65.72 65.72 0 009.78 18.93 73.61 73.61 0 0025.79 21.7c14 6.86 31.93 10.83 48.62 9.2a96.32 96.32 0 01-54-5.31c-19.5-7.87-39-25.51-44.08-46.56-.21-.8-1.64-.36-1.7.34-1 10.41 7 21.43 13.83 28.54 7.82 8.1 16.12 15.75 26.61 20.34 11.41 5 22.85 8.33 35.4 8.56a149.08 149.08 0 0015.17-.32 69.64 69.64 0 01-19.42 3.58c-8.57.11-17.08-1.41-25.4-3.32-13.52-3.11-24.82-8.66-35.05-18.14a80.47 80.47 0 01-10.92-13.08c-3.1-4.43-7.66-9.52-8.82-14.87-.26-1.21-2.27.12-2.19 1 .32 4.41 2.41 8.6 4.68 12.32 1.27 2.1 2.73 4.05 4.16 6a11.45 11.45 0 012.58 6.16c.08 1.92-.62 3.52-.9 5.36s-.61 3.37-.9 5.06a65.86 65.86 0 00-.85 10.59c-.1 11.42 5.35 21.31 11.51 30.53.64 1 2.29-.57 2-1.45-3.38-10.63-9.88-19.05-9.27-30.75.31-5.82 2-11.19 3.33-16.74.11.12.23.26.34.36 1.94 2 4 4 6.1 5.81 1.7 1.46 3.62 3.11 3.37 5.58a29.48 29.48 0 01-1.41 4.87 38.5 38.5 0 00-1 5.54c-.4 3.21-.53 6.45-.77 9.67-.75 10.48 2 23.91 9.58 31.74a1.08 1.08 0 001.37 0 22.53 22.53 0 004.34 6.51.92.92 0 001.5-1 56.65 56.65 0 01-3.69-24.09c7.25 3.26 17.55 2.73 24.47.58a53 53 0 0015-7 45.55 45.55 0 0012.89-12.72c8.84-.73 16.2-3.47 23.94-8.09a2.38 2.38 0 00.91-2.12 38.51 38.51 0 005.6-2.14 2.46 2.46 0 00.85-2.94 53.78 53.78 0 0018.45-8.06c1.04-.64 1.42-3.24-.46-2.62zM193 397.53c.41-.91.85-1.83 1.32-2.72a49.41 49.41 0 013.14-5.29 2.06 2.06 0 00.17-.33q2.81 1 5.74 1.86c4 1.1 8.15 2.06 12.38 2.81-.35 0-1.58 1.15-1.87 1.36-.66.47-1.34.94-2 1.37a28.78 28.78 0 01-4.17 2.23 22 22 0 01-8.77 2 16.85 16.85 0 01-4.4-.82c-1.17-.34-2.09-1.18-1.54-2.47zM184.24 412a54.61 54.61 0 000 12.65c-2.72-7.39-4.6-14.86-4.1-22.95a88.83 88.83 0 013.44-19.58c0 .32 4.08 2.45 4.5 2.69 1.1.61 3.95 1.43 4.39 2.73a1.27 1.27 0 010 .77 5.41 5.41 0 01-.83 1.62c-4.48 6.69-6.55 14.07-7.4 22.07zm43.51-8.57a46.77 46.77 0 01-13.07 6.66c-7.23 2.43-17.94 3.54-25.38 0a50 50 0 011.44-6.45c3.67 1.76 9.23 1.58 12.54 1 6-1.11 14.09-4.48 17.42-9.95a98.29 98.29 0 0016.16.88 58.25 58.25 0 01-9.11 7.86z"
                  style={{
                    transformOrigin: '222.181px 372.563px',
                  }}
                  className="prefix__animable"
                  opacity={0.15}
                  id="prefix__el02h0jh6iqux3"
                />
              </g>
            </g>
            <g
              style={{
                transformOrigin: '174.982px 388.795px',
              }}
              className="prefix__animable"
              opacity={0.15}
              id="prefix__elaui18hayhm"
            >
              <path
                d="M163.33 381.82c-4.43-12.52-10.84-11.63-10.84-11.63s2.63-1.52 9.9-.61c0 0-2-5.46-9.3-8.71a50.7 50.7 0 00-.09 18.28 54.84 54.84 0 008.29 20.93c1.98-4.08 4.52-11.25 2.04-18.26z"
                id="prefix__el77c36dot1d8"
                className="prefix__animable"
                style={{
                  transformOrigin: '158.286px 380.475px',
                }}
              />
              <path
                d="M178.74 416.72a27.88 27.88 0 016.72-9.35c9.12-8.33 12.35-10.7 12.29-16.39-.07-7.52-7.28-7-9.43-5.71 0 0-2-3.1-7.29-1.63a10.79 10.79 0 00-6.35 5.12s-3.57-.37-7.28 3.61a77 77 0 00-6 7.94 53.83 53.83 0 0017.34 16.41z"
                id="prefix__elcprykng33wp"
                className="prefix__animable"
                style={{
                  transformOrigin: '179.575px 399.982px',
                }}
              />
            </g>
            <g
              id="prefix__paw--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '229.339px 327.766px',
              }}
            >
              <path
                d="M254.62 339.1c-.18-4.44-2.87-10.41-6.35-15.33-5.8-8.2-14.15-13.28-22.57-16l-21.7 13.5c23.14-.78 31.11 11.4 33.25 18.2 1.48 4.7 2.73 8.32 5.47 8.32a2.78 2.78 0 003-2.34c1.89 1.8 4.72.73 4.84-1.58a2.44 2.44 0 002.91-.52 5.54 5.54 0 001.15-4.25z"
                style={{
                  transformOrigin: '229.339px 327.786px',
                }}
                id="prefix__elwqrjqhklgz"
                className="prefix__animable"
                fill={theme.colors.accent}
              />
              <path
                d="M225.7 307.73L204 321.27a54.81 54.81 0 018.18.3 62.43 62.43 0 0016.63-12.7q-1.53-.63-3.11-1.14z"
                style={{
                  transformOrigin: '216.405px 314.65px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elnf2zrvlau6"
              />
              <path
                d="M253.48 343.35a.1.1 0 000-.05 1.7 1.7 0 01-2.21-1.2c-.74-1.77-1-2.6-1.36-3a14.75 14.75 0 01.62 4.77 2.44 2.44 0 002.95-.52z"
                style={{
                  transformOrigin: '251.697px 341.627px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elbkupcii01bo"
              />
              <path
                d="M248.91 346.16a2.63 2.63 0 01-2.35-2.17c-.56-1.86-.89-2.44-1.29-2.84a12.78 12.78 0 01.46 4.3 3 3 0 003.18.71z"
                style={{
                  transformOrigin: '247.09px 343.748px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__el59wo489y8wy"
              />
            </g>
            <g
              id="prefix__paw--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '140.945px 382.45px',
              }}
            >
              <path
                d="M90.09 372.32c2.18 17.29 8.44 27.79 20.81 37.2S140.4 424 148 426.87s13.35 6.5 18.48 1.67 4.15-14.67 13.28-23 12.35-10.7 12.3-16.39c-.08-7.52-7.28-6.95-9.44-5.71 0 0-2-3.1-7.29-1.63a10.83 10.83 0 00-6.35 5.12s-3.57-.37-7.28 3.61c-2.9 3.11-8 11-8 11s7.62-11 3.89-21.53c-4.43-12.52-10.84-11.63-10.84-11.63s2.63-1.52 9.91-.61c0 0-3.37-9-16.77-10.76a26 26 0 00-21.54 7.32z"
                style={{
                  transformOrigin: '141.075px 393.852px',
                }}
                id="prefix__elhaal1cajp7"
                className="prefix__animable"
                fill={theme.colors.accent}
              />
              <path
                d="M171.2 384.14a10.59 10.59 0 00-2.22 2.79c2.87-.05 6.35.2 8.13 5.37 0 0 2.24-5.83-5.91-8.16z"
                style={{
                  transformOrigin: '173.186px 388.22px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elzl89jbfbmi"
              />
              <path
                d="M184.18 389.35s2.63-1.67.8-6.6a6.63 6.63 0 00-2.36.69 6.69 6.69 0 011.56 5.91z"
                style={{
                  transformOrigin: '184.124px 386.05px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elw83yn5cv5od"
              />
              <path
                d="M176.23 399.47a21.28 21.28 0 00-14.17 13.73c-2.62 7.29-1.31 12 1.62 12.57s4.31.1 6.64-3.88c1.84-4.9 3.51-10.94 9.44-16.35 1.75-1.6 3.29-3 4.62-4.21-.38-2.05-3.22-3.33-8.15-1.86z"
                style={{
                  transformOrigin: '172.514px 412.402px',
                }}
                id="prefix__elli09hly8n6k"
                className="prefix__animable"
                fill="#f28f8f"
              />
              <path
                d="M173.86 393.26c-2-.69-3.79 4-1.49 4.8 1.91.63 4.16-3.88 1.49-4.8z"
                style={{
                  transformOrigin: '173.187px 395.656px',
                }}
                id="prefix__elootis02omiq"
                className="prefix__animable"
                fill="#f28f8f"
              />
              <path
                d="M181.92 390.79c-2-.69-3.79 4-1.49 4.81 1.91.63 4.16-3.89 1.49-4.81z"
                style={{
                  transformOrigin: '181.247px 393.19px',
                }}
                id="prefix__elewvv1wy157d"
                className="prefix__animable"
                fill="#f28f8f"
              />
              <path
                d="M188.2 390.3c-2-.69-3.8 4-1.49 4.8 1.91.63 4.15-3.88 1.49-4.8z"
                style={{
                  transformOrigin: '187.523px 392.696px',
                }}
                id="prefix__eljucb8awwal"
                className="prefix__animable"
                fill="#f28f8f"
              />
              <path
                d="M160.65 428.54c-11.87-2.56-10.28-9-15.59-12.78s-17.14-2.37-36.11-17.89-19.85-49.2-7.73-63.87c-7.65 9.41-12.61 21.54-11.13 38.33a45.2 45.2 0 001.41 7.91c3 12.76 9 21.41 19.4 29.29 12.38 9.4 29.5 14.51 37.1 17.35s13.35 6.5 18.48 1.67a9.69 9.69 0 001.12-1.28 8.88 8.88 0 01-6.95 1.27z"
                style={{
                  transformOrigin: '128.714px 382.45px',
                }}
                className="prefix__animable"
                opacity={0.05}
                id="prefix__elal1uq80oa0j"
              />
            </g>
            <path
              d="M205.4 345.41c-6.19-8.51-11.06-12.49-18.57-16.69v-4.87c-1.13.39-2.25.81-3.34 1.26a51.08 51.08 0 00-24.91 21.16c22.86-1.72 33.15 9.94 35.7 16.65 1.79 4.71 3.28 8.33 6.08 8.17a2.85 2.85 0 002.89-2.57c2 1.72 4.87.47 4.85-1.89a2.5 2.5 0 002.94-.71 5.67 5.67 0 00.91-4.41c-.45-4.51-2.95-11.12-6.55-16.1z"
              style={{
                transformOrigin: '185.324px 347.473px',
              }}
              className="prefix__animable"
              opacity={0.15}
              id="prefix__eldzfytrh7tjl"
            />
            <g
              id="prefix__paw--inject-26"
              className="prefix__animable"
              style={{
                transformOrigin: '186.578px 343.623px',
              }}
            >
              <path
                d="M212.9 358.16c-.44-4.52-2.92-11.13-6.54-16.1-6.2-8.51-11.06-12.49-18.58-16.69v-5.92S160.69 325 160.19 343c23.59-2.17 32.45 9.8 35 16.62 1.79 4.71 3.28 8.33 6.08 8.17a2.85 2.85 0 002.89-2.57c2 1.72 4.87.47 4.85-1.89a2.5 2.5 0 002.94-.71c1.05-1.27 1.11-2.86.95-4.46z"
                style={{
                  transformOrigin: '186.578px 343.623px',
                }}
                id="prefix__elxc3arfood9l"
                className="prefix__animable"
                fill={theme.colors.accent}
              />
              <path
                d="M212 362.57v-.05a1.74 1.74 0 01-2.33-1.1c-.86-1.76-1.14-2.6-1.57-3a14.86 14.86 0 01.92 4.84 2.5 2.5 0 002.98-.69z"
                style={{
                  transformOrigin: '210.05px 360.954px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__el25f6vclw4t8"
              />
              <path
                d="M207.49 365.71a2.7 2.7 0 01-2.53-2.08c-.68-1.87-1.06-2.44-1.49-2.82a13.15 13.15 0 01.73 4.36 3.08 3.08 0 003.29.54z"
                style={{
                  transformOrigin: '205.48px 363.387px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elnfv6ygvqil"
              />
              <path
                d="M167.22 329.19c8.86 2.05 18.23 1.38 26.11-.39-1.71-1.19-3.53-2.3-5.55-3.43v-5.92s-12.38 2.55-20.56 9.74z"
                style={{
                  transformOrigin: '180.275px 324.952px',
                }}
                className="prefix__animable"
                opacity={0.15}
                id="prefix__elw64sxq78lfi"
              />
            </g>
            <path
              d="M193.62 260.23c2.73-8.65 14.67-19.56 24.73-16.39 5.66 1.78 3.39 22.67 3.39 22.67s-18.39 1.41-28.12-6.28z"
              style={{
                transformOrigin: '207.905px 254.945px',
              }}
              id="prefix__elntj69henyd8"
              className="prefix__animable"
              fill={theme.colors.accent}
            />
            <path
              d="M193.62 260.23c2.73-8.65 14.67-19.56 24.73-16.39 5.66 1.78 3.39 22.67 3.39 22.67s-18.39 1.41-28.12-6.28z"
              style={{
                transformOrigin: '207.905px 254.945px',
              }}
              className="prefix__animable"
              opacity={0.15}
              id="prefix__elc93es4qc6s8"
            />
            <path
              d="M202.17 264.47c9.26 2.83 19.57 2 19.57 2s2.27-20.89-3.39-22.67c-3.67-.5-12.57 5.09-16.18 20.67z"
              style={{
                transformOrigin: '212.18px 255.176px',
              }}
              id="prefix__el0rqzcwmmyi3"
              className="prefix__animable"
              fill="#ffa8a7"
            />
            <path
              d="M214.06 256.78c-.86-2.32.8-5.31.8-5.31-3.39 0-7.81 3.48-8.22 9.09 0 0 6.91 8.32 14 3.91a9.26 9.26 0 011.48-3.31c.06-1.44.1-3.06.07-4.73a20.23 20.23 0 00-8.13.35z"
              style={{
                transformOrigin: '214.42px 258.615px',
              }}
              id="prefix__el6b56irxw1px"
              className="prefix__animable"
              fill="#f28f8f"
            />
            <path
              d="M170.17 268.47c-7.53-5-23.67-6.11-29.55 2.65-3.31 4.93 11.54 19.84 11.54 19.84s15.21-10.41 18.01-22.49z"
              style={{
                transformOrigin: '155.154px 277.789px',
              }}
              id="prefix__el21g3sgql0yv"
              className="prefix__animable"
              fill={theme.colors.accent}
            />
            <path
              d="M170.17 268.47c-7.53-5-23.67-6.11-29.55 2.65-3.31 4.93 11.54 19.84 11.54 19.84s15.21-10.41 18.01-22.49z"
              style={{
                transformOrigin: '155.154px 277.789px',
              }}
              className="prefix__animable"
              opacity={0.15}
              id="prefix__elowgbopsi6v"
            />
            <path
              d="M166.14 277.12c-5.47 8-14 13.84-14 13.84s-14.85-14.91-11.54-19.84c2.55-2.72 12.99-3.91 25.54 6z"
              style={{
                transformOrigin: '153.129px 280.081px',
              }}
              id="prefix__elpawhp9n4bj"
              className="prefix__animable"
              fill="#ffa8a7"
            />
            <path
              d="M148.52 274.62s3.17 1.3 3.95 3.65c0 0-4.6 2-6.87 5.2.85 1.1 1.72 2.14 2.53 3.09a8.94 8.94 0 014 1.84c8.29-1 8-11.22 8-11.22-2.92-4.18-8.96-4.68-11.61-2.56z"
              style={{
                transformOrigin: '152.866px 280.898px',
              }}
              id="prefix__elaj4l1cnpu7e"
              className="prefix__animable"
              fill="#f28f8f"
            />
            <path
              d="M201.89 322.07c-9.63 3.39-24 5.67-36.69 1.72-15.15-4.72-16-25.52-12.3-35.1s11.25-19.34 28.58-25.45 29.35-3.24 38.22 1.92 21.26 21.89 12.41 35.06c-7.43 11.04-20.59 18.46-30.22 21.85z"
              style={{
                transformOrigin: '193.108px 292.833px',
              }}
              id="prefix__elmbhpyv5xxgp"
              className="prefix__animable"
              fill={theme.colors.accent}
            />
            <path
              d="M201.81 319.9c19.19-6.77 18.19-18 13.34-22.52s-12.89-5.5-22.07-2.27-14.82 9.06-15.78 15.6 5.31 15.95 24.51 9.19z"
              style={{
                transformOrigin: '197.667px 307.724px',
              }}
              id="prefix__el16n1i0a2qjp"
              className="prefix__animable"
              fill="#f0f0f0"
            />
            <path
              d="M196.56 311.86s.78 3.25 3.2 2.44 1-3.88 1-3.88l-3-2.18z"
              style={{
                transformOrigin: '198.867px 311.335px',
              }}
              id="prefix__elgqowcivkz5"
              className="prefix__animable"
              fill="#f28f8f"
            />
            <path
              d="M196.44 304.69l-4.51-.5a.62.62 0 01.14-1.24l3.93.44 2.85-2.77a.62.62 0 01.88 0 .63.63 0 010 .88z"
              style={{
                transformOrigin: '195.643px 302.563px',
              }}
              id="prefix__elv8wa7wlbag"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M193.18 314a5.12 5.12 0 01-4.82-3.41.62.62 0 011.18-.41 3.86 3.86 0 007.29-2.57l-1.19-3.38a.62.62 0 111.17-.41l1.19 3.38a5.1 5.1 0 01-3.12 6.51 5 5 0 01-1.7.29z"
              style={{
                transformOrigin: '193.309px 308.697px',
              }}
              id="prefix__eljsendhoeyn"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M201.64 311a5.16 5.16 0 01-2.2-.5 5.06 5.06 0 01-2.61-2.91l-1.19-3.38a.62.62 0 111.17-.41l1.19 3.38a3.84 3.84 0 002 2.2 3.87 3.87 0 005.32-4.77.62.62 0 01.38-.79.61.61 0 01.79.38 5.11 5.11 0 01-3.12 6.51 5 5 0 01-1.73.29z"
              style={{
                transformOrigin: '201.19px 307.187px',
              }}
              id="prefix__el8jreqzlf1hv"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M215.06 285.08a4.48 4.48 0 11-5.71-2.74 4.48 4.48 0 015.71 2.74z"
              style={{
                transformOrigin: '210.834px 286.567px',
              }}
              id="prefix__el7elesjlv0us"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M169.66 301.07a4.47 4.47 0 102.73-5.71 4.48 4.48 0 00-2.73 5.71z"
              style={{
                transformOrigin: '173.875px 299.577px',
              }}
              id="prefix__elhorcgm4lzoo"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M156.61 301.83a.93.93 0 01-.66-.27c-3.42-3.49-9.19-7.07-17.24-4.26a.93.93 0 01-.62-1.76c9-3.12 15.39.84 19.19 4.71a.93.93 0 010 1.32.9.9 0 01-.67.26z"
              style={{
                transformOrigin: '147.511px 298.123px',
              }}
              id="prefix__elfqqzgpikfam"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M154.54 304.15a.87.87 0 01-.49-.14c-3.09-1.9-8.71-1.91-11.66-.64a.93.93 0 01-1.23-.48 1 1 0 01.49-1.23c3.38-1.45 9.71-1.5 13.38.77a.93.93 0 01.3 1.28.91.91 0 01-.79.44z"
              style={{
                transformOrigin: '148.285px 302.393px',
              }}
              id="prefix__elcona5e2rcqv"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M140.12 312a.94.94 0 01-.6-1.65c5.53-4.66 12.69-5.52 17-4.35a.93.93 0 01-.49 1.79c-3.86-1-10.29-.24-15.31 4a.91.91 0 01-.6.21z"
              style={{
                transformOrigin: '148.171px 308.765px',
              }}
              id="prefix__elwp0l1uhqex"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M224.46 277.93h-.09a.93.93 0 01-.84-1c.53-5.4 3-12.5 12-15.69a.93.93 0 01.63 1.75c-8 2.87-10.29 9.26-10.77 14.12a.92.92 0 01-.93.82z"
              style={{
                transformOrigin: '230.148px 269.559px',
              }}
              id="prefix__elr4hnnivfqc"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M227.52 278.44a1.18 1.18 0 01-.31-.05.92.92 0 01-.56-1.19c1.43-4.06 6.39-8 9.94-9a.93.93 0 011.15.65.92.92 0 01-.65 1.14c-3.1.87-7.48 4.39-8.69 7.81a.93.93 0 01-.88.64z"
              style={{
                transformOrigin: '232.183px 273.302px',
              }}
              id="prefix__el7qs9qdzw8lc"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M228.47 282.39a.9.9 0 01-.54-.18.93.93 0 01-.21-1.3c2.63-3.61 8.73-7.4 16-7.25a.93.93 0 010 1.86c-6.58-.15-12.07 3.26-14.42 6.49a.93.93 0 01-.83.38z"
              style={{
                transformOrigin: '236.094px 278.024px',
              }}
              id="prefix__el86sh9jt9ow5"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M208.32 260.69c.8-3.66 4.26-7.18 7.65-7.18 0 0-1.67 3-.81 5.31 0 0 8.65-2.27 11.77 1.74 0 0-3.92.72-5.19 5.95-7.09 4.41-13.42-5.82-13.42-5.82z"
              style={{
                transformOrigin: '217.625px 260.562px',
              }}
              id="prefix__els88feurp3jo"
              className="prefix__animable"
              fill={theme.colors.accent}
            />
            <path
              d="M159 278c-2.91-2.36-7.81-2.95-10.46-.83 0 0 3.17 1.3 3.95 3.65 0 0-8.17 3.62-8.11 8.71 0 0 3.54-1.87 7.8 1.42C160.45 290 159 278 159 278z"
              style={{
                transformOrigin: '151.739px 283.407px',
              }}
              id="prefix__elaxww56z2xj"
              className="prefix__animable"
              fill={theme.colors.accent}
            />
            <path
              d="M189.34 261c-1.18.27-1.27-1.92-.73-4.64.49-2.46 2.47-7.37-1-7.31s-7.2 3.18-8.66 9.12a12.91 12.91 0 01-2.14-4.25c-.55-2.24-3.35-2.44-4.58 2-.94 3.39.69 6.78 1.59 8.2.5.79.29 2.1-1.38 3 0 0 7.21 2.47 12.07 0s4.83-6.12 4.83-6.12z"
              style={{
                transformOrigin: '180.782px 258.634px',
              }}
              id="prefix__el6hnmoc4mw2w"
              className="prefix__animable"
              fill={theme.colors.accent}
            />
            <path
              d="M180.79 280a2.17 2.17 0 002-2.37 23.85 23.85 0 00-5.51-12.67c-1.43.61-2.8 1.25-4.08 1.91 3.12 3.66 4.9 7.4 5.25 11.17a2.18 2.18 0 002.17 2z"
              style={{
                transformOrigin: '178px 272.5px',
              }}
              id="prefix__elsv69q608sx"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M194 272.55a2.19 2.19 0 002.14 1.76 2 2 0 00.42 0 2.18 2.18 0 001.72-2.56 23.47 23.47 0 00-6-11.26c-1.64.27-3.32.62-5.08 1.07 3.71 3.44 6 7.11 6.8 10.99z"
              style={{
                transformOrigin: '192.76px 267.406px',
              }}
              id="prefix__elggdbsv79bte"
              className="prefix__animable"
              fill="#455a64"
            />
            <path
              d="M180.12 263.76c2.29 2.53 5.95 7.38 6.82 13.27a2.17 2.17 0 002.15 1.86h.33a2.18 2.18 0 001.83-2.48 29.84 29.84 0 00-6.69-14.15c-1 .3-2 .63-3.08 1z"
              style={{
                transformOrigin: '185.697px 270.575px',
              }}
              id="prefix__els1hqawy210d"
              className="prefix__animable"
              fill="#455a64"
            />
          </g>
          <path
            d="M101.31 404.62h-.16a1.63 1.63 0 01-1.47-1.78c.66-6.88 7.42-18.85 23.37-23.63 15.46-4.64 31.65.59 38.37 8.32a1.64 1.64 0 11-2.47 2.15c-4.95-5.7-19.49-12-35-7.34-14.4 4.32-20.48 14.81-21.06 20.81a1.64 1.64 0 01-1.58 1.47z"
            style={{
              transformOrigin: '130.779px 391.041px',
            }}
            id="prefix__el99wjv8d5dqw"
            className="prefix__animable"
            fill="#455a64"
          />
          <path
            d="M117.32 417.12a1.64 1.64 0 01-1.64-1.62c0-3.35 2.47-14.77 10.8-21.94a29.81 29.81 0 0132.5-4.27 1.64 1.64 0 01-1.58 2.87 26.38 26.38 0 00-28.79 3.84c-7.36 6.33-9.68 16.6-9.66 19.43a1.64 1.64 0 01-1.62 1.65z"
            style={{
              transformOrigin: '137.72px 401.711px',
            }}
            id="prefix__el6o35vjdocui"
            className="prefix__animable"
            fill="#455a64"
          />
          <path
            d="M96.38 251.94c-4.83 11.38-.41 35.57 9.5 50.48 10.7 16.1 32.4 36.37 56.74 45.37a1.64 1.64 0 01-.57 3.17 1.62 1.62 0 01-.56-.1c-25-9.26-47.34-30.09-58.33-46.63C92 287.5 87.7 260.59 94.24 248.87a16.12 16.12 0 011.63-2.41 28.89 28.89 0 01.51 5.48z"
            style={{
              transformOrigin: '127.416px 298.71px',
            }}
            id="prefix__el7lcy1rdsve9"
            className="prefix__animable"
            fill="#455a64"
          />
        </g>
      </g>
      <g
        id="prefix__Sign--inject-26"
        className="prefix__animable"
        style={{
          transformOrigin: '346.415px 200.98px',
          animation: '1s 1 forwards cubic-bezier(.36,-.01,.5,1.38) zoomIn',
          animationDelay: '0s',
        }}
      >
        <g
          id="prefix__sign--inject-26"
          className="prefix__animable"
          style={{
            transformOrigin: '346.415px 200.98px',
          }}
        >
          <path
            style={{
              transformOrigin: '355.02px 214.835px',
            }}
            id="prefix__elutwg4isbi4n"
            className="prefix__animable"
            fill="#37474f"
            d="M350.01 73.17l10.02-5.78V356.5l-10.01 5.78-.01-289.11z"
          />
          <path
            style={{
              transformOrigin: '342.505px 213.39px',
            }}
            id="prefix__elqlixpi7y3fl"
            className="prefix__animable"
            fill="#455a64"
            d="M334.99 353.6l15.03 8.68-.01-289.11-3.63-2.1-1.22 12.56-1.25-13.98-8.92-5.15v289.1z"
          />
          <path
            d="M350 269.13v-35.64c-.58-13.85-1.25-32-1.14-39.93l-3.47-2c0 12.09-1.36 34.37-2.1 49.39-1 21.29 2.77 48.8 2.93 59.9s0 59.24 0 59.24l1.71 1s-.51-60.54.93-76.62c.5-5.54.87-10.75 1.14-15.34zm-3.43 7.54c-2.29-1-1.73-54.81.64-54 1.88.71 1.67 55.01-.62 54z"
            style={{
              transformOrigin: '346.561px 276.325px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el769u6wpjxdv"
          />
          <path
            style={{
              transformOrigin: '345.145px 76.64px',
            }}
            id="prefix__elhtqf118sbzb"
            className="prefix__animable"
            fill="#263238"
            d="M346.38 71.07l-2.47-1.42 1.25 13.98 1.22-12.56z"
          />
          <path
            d="M339.85 67.3c-.21 15.48 2.83 25.86 2.77 47.38 0 0-.34-15.22-2.39-26.5a136.68 136.68 0 01-2.28-22z"
            style={{
              transformOrigin: '340.285px 90.43px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elcq57p9l2jkp"
          />
          <path
            d="M350 73.17c0 5.1-.22 16.73-.85 23.89a288.76 288.76 0 00-.23 29.9s-1.79-16.89-1.19-26.9.59-27.87.59-27.87z"
            style={{
              transformOrigin: '348.803px 99.575px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elbhu2t18paw"
          />
          <path
            d="M335 122v18.54c1.59-9.77 4.08-20.08 4.52-24.47.66-6.57-.44-18.64-1.56-25.46s-3-18.32-2.67-25.9l-.29-.21v18.43l.15 1.19c1.24 9.12 1.89 22.62 1.43 28.64A66 66 0 01335 122z"
            style={{
              transformOrigin: '337.36px 102.52px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elht1uj8whvhj"
          />
          <path
            d="M340.87 254c-.3 6.8 2.61 32.16 3.17 40.15 1.1 15.61.6 65 .6 65l-2-1.17s.24-55.84 0-62.33c-.35-8.96-2.64-33.78-1.77-41.65z"
            style={{
              transformOrigin: '342.714px 306.575px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elcwn19o2qohr"
          />
          <path
            d="M342.62 190.46c0 12.36-.39 35.8-2 45.69a177.48 177.48 0 00-1 44.17 195.86 195.86 0 01.58 33s-.61-19.06-2.34-34.66A235.12 235.12 0 01338 232c1.36-15.08 1.75-43.77 1.75-43.77z"
            style={{
              transformOrigin: '339.694px 250.775px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el69kcx8ki53h"
          />
          <path
            d="M337.37 187.43s-.23 19.63-.58 26.15-1.3 19.25-1.3 19.25-.31-20.9 0-27.61-.14-19.32-.14-19.32z"
            style={{
              transformOrigin: '336.36px 209.365px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__eljho9usqm2m"
          />
          <path
            d="M337.37 295.76c1.12 10.5 1.27 22.79 1.57 27.43s.76 33.13.76 33.13l-2.33-1.32s-.2-29.51-.27-36.14c-.1-8.53.68-17.46.27-23.1z"
            style={{
              transformOrigin: '338.396px 326.04px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elt1742r76uic"
          />
          <path
            d="M342.57 71.78c.51 8.15 2.41 16 3 21.74s1 23.41 1 23.41l-2-1.13s.43-16.17-.57-24.06-1.66-14.74-1.43-19.96z"
            style={{
              transformOrigin: '344.547px 94.355px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__eleo3cypbq2gh"
          />
          <path
            style={{
              transformOrigin: '347.51px 65.94px',
            }}
            id="prefix__elzpzf87nx6vs"
            className="prefix__animable"
            fill="#263238"
            d="M360.03 67.39l-15.02-8.68-10.02 5.79 15.02 8.67 10.02-5.78z"
          />
          <path
            style={{
              transformOrigin: '355.025px 242.095px',
            }}
            className="prefix__animable"
            opacity={0.15}
            d="M360.03 232.18l-10.01 5.78v14.05l10.01-5.79v-14.04z"
            id="prefix__elrdrjzk06kt"
          />
          <path
            style={{
              transformOrigin: '342.505px 240.65px',
            }}
            className="prefix__animable"
            opacity={0.15}
            d="M350.02 237.96l-15.03-8.67v14.04l15.03 8.68v-14.05z"
            id="prefix__elmq5s1ueoq7"
          />
          <path
            style={{
              transformOrigin: '350.78px 189.14px',
            }}
            id="prefix__elvff9s5j93ea"
            className="prefix__animable"
            fill="#263238"
            d="M252.78 138.79l185.26 106.92 10.74-6.18-185.24-106.96-10.76 6.22z"
          />
          <path
            style={{
              transformOrigin: '337.275px 163.785px',
            }}
            id="prefix__elp40nl734i6"
            className="prefix__animable"
            fill="#455a64"
            d="M244.06 131.53l186.43 107.59v-43.08l-16.5-9.52-1.8 12.56-1.08-14.23-167.05-96.4.01 27.86 5.36 5.34-5.37-1.56v11.44z"
          />
          <path
            d="M430.49 232c-9.7-5.62-50.5-28.64-55.2-30.88-13.66-6.54-25.44-11.68-43.72-22.09 0 0 8.48 6 26.76 15.48 8.58 4.42 16.44 8.2 20.57 10.25s51.59 29.38 51.59 29.38z"
            style={{
              transformOrigin: '381.03px 206.585px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el6ehydkft0rl"
          />
          <path
            d="M244.1 97.69l15.91 9.2c14.25 8.25 23.83 14.19 30 19.87s18.17 12.87 23.55 15.8c0 0-6.32-2.3-18.16-9.63s-14-11.16-30.84-20.89l-20.46-11.85z"
            style={{
              transformOrigin: '278.83px 120.125px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elmdn0mjfxilh"
          />
          <path
            d="M430.49 226.84l-49.65-28.65c-5.4-3.12-18.11-5.57-25.08-9.6a59.45 59.45 0 0012.24 6.49c7.09 2.72 55.84 30.24 62.48 34.07z"
            style={{
              transformOrigin: '393.125px 208.87px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elynfeb4yelc"
          />
          <path
            d="M249.43 121.65l47.48 27.46c10.77 6.23 28.67 18.74 43.75 26.91s26.2 12.86 26.2 12.86-14.43-4.11-26.36-11-33.65-20.48-46.75-28.06l-49.68-28.73v-1z"
            style={{
              transformOrigin: '305.465px 154.485px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el7d4hhd9h5z5"
          />
          <path
            d="M430.49 211.43c-10-5.79-43.12-24.88-51-29.46s-20-13-33.41-20.8a236.41 236.41 0 00-32.89-15.86 165.26 165.26 0 01-17.74-8.57A152.14 152.14 0 00317.58 149c13.31 6.05 29.25 14.38 43.4 24.44s69.51 40.82 69.51 40.82z"
            style={{
              transformOrigin: '362.97px 175.5px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el6tfg51f26pj"
          />
          <path
            d="M244.11 91.9s59.93 34 74.91 42.63 34.61 20.72 34.61 20.72-31.63-16.85-63.37-35.18l-46.15-26.7z"
            style={{
              transformOrigin: '298.87px 123.575px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el78oaog6p92c"
          />
          <path
            d="M430.49 203.34s-69.23-40-88.75-51.26-41.25-21.71-41.25-21.71 16.21 10.72 40.18 24.63c7.1 4.12 89.82 51.88 89.82 51.88v-3.53"
            style={{
              transformOrigin: '365.49px 168.625px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el2a3p0yogz6q"
          />
          <path
            d="M244.06 124.76l53.65 31c11 6.36 39.53 23.75 46.33 28.06 0 0-28.09-14.76-65.45-36.37l-34.53-20z"
            style={{
              transformOrigin: '294.05px 154.29px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elmt57sie6o4b"
          />
          <path
            d="M244.08 115l45.19 26.14c10.51 6.08 35 22.61 45.81 28.84s81.89 44.94 95.41 52.76v-3c-8.39-4.86-76.5-49.07-92.77-58.49s-32.93-14.14-43.07-20L244.08 112zm70.32 38.47c0-1.51 13.88 4.83 23.42 10.34 8.41 4.87 25.12 16.12 25.12 17.52s-16.33-7.36-25.12-12.45S314.4 155 314.4 153.46z"
            style={{
              transformOrigin: '337.285px 167.37px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el4ulsqlcs2t"
          />
          <path
            d="M244.11 103.41c6.57 3.8 27 15.38 32.74 19.75s11.6 11.42 22.6 17.78c0 0-11.35-4.74-17.88-10.93s-37.52-23.53-37.52-23.53z"
            style={{
              transformOrigin: '271.75px 122.175px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el6ikd09cbit6"
          />
          <path
            style={{
              transformOrigin: '347.055px 169.43px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.2}
            d="M263.62 99.74l147.62 86.92 1 4.03 1.51-2.54 14.87 9.29 1.87 41.68v-43.08l-16.5-9.52-1.44-.86-1.44-.81-147.49-85.11z"
            id="prefix__elqijxfp5hmz"
          />
          <path
            style={{
              transformOrigin: '435.86px 214.415px',
            }}
            id="prefix__ell7ib1mmue7"
            className="prefix__animable"
            fill="#37474f"
            d="M441.23 232.91l-10.74 6.21v-43.08l10.74-6.33v43.2z"
          />
          <path
            style={{
              transformOrigin: '412.55px 191.965px',
            }}
            id="prefix__el2g6g51omxqx"
            className="prefix__animable"
            fill="#263238"
            d="M413.99 186.52l-1.8 12.56-1.08-14.23 1.44.81 1.44.86z"
          />
          <path
            style={{
              transformOrigin: '411.83px 191.965px',
            }}
            id="prefix__eliba9p7kng"
            className="prefix__animable"
            fill="#37474f"
            d="M411.11 184.85l1.44.81-.36 13.42-1.08-14.23z"
          />
          <path
            style={{
              transformOrigin: '246.75px 118.98px',
            }}
            id="prefix__elucs6ekzchn"
            className="prefix__animable"
            fill="#37474f"
            d="M244.07 116.31l1.6 2.97-1.6.81 5.36 1.56-5.36-5.34z"
          />
          <path
            style={{
              transformOrigin: '246.75px 118.98px',
            }}
            id="prefix__elckzxrqasxvv"
            className="prefix__animable"
            fill="#263238"
            d="M244.07 116.31l1.6 2.97 3.76 2.37-5.36-5.34z"
          />
          <path
            style={{
              transformOrigin: '428.595px 233.48px',
            }}
            id="prefix__elyueiahkmxnr"
            className="prefix__animable"
            fill="#263238"
            d="M435.04 232.84l-4.55.16-8.34-3.54 8.34 8.04 4.55-4.66z"
          />
          <path
            style={{
              transformOrigin: '428.595px 232.3px',
            }}
            id="prefix__el9v0b3vpzf17"
            className="prefix__animable"
            fill="#37474f"
            d="M435.04 232.84l-4.55 2.3-8.34-5.68 8.34 3.54 4.55-.16z"
          />
          <path
            style={{
              transformOrigin: '342.645px 139.11px',
            }}
            id="prefix__eloswvzxu1qim"
            className="prefix__animable"
            fill="#263238"
            d="M244.06 88.45l186.43 107.59 10.74-6.33L254.92 82.18l-10.86 6.27z"
          />
          <path
            style={{
              transformOrigin: '341.69px 120.96px',
            }}
            id="prefix__eluotkdsvsbi"
            className="prefix__animable"
            fill="#455a64"
            d="M249.06 89.04l185.26 106.92v-43.08l-166.87-96.3-1.8 12.56-1.08-14.23-15.51-8.95v43.08z"
          />
          <path
            d="M434.32 188.79c-9.7-5.61-50.49-28.63-55.2-30.87-13.66-6.54-25.44-11.68-43.71-22.09 0 0 8.47 6 26.75 15.48 8.58 4.42 16.45 8.2 20.57 10.25s51.59 29.38 51.59 29.38z"
            style={{
              transformOrigin: '384.865px 163.385px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elx4z4wpcujtt"
          />
          <path
            d="M249.1 55.2l14.74 8.53c14.26 8.25 23.83 14.18 30 19.86s18.16 12.88 23.58 15.8c0 0-6.33-2.29-18.17-9.63s-14-11.15-30.84-20.89L249.09 57.7z"
            style={{
              transformOrigin: '283.255px 77.295px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elnzp7m6tzaqj"
          />
          <path
            d="M434.32 183.68c-10.19-5.9-44.26-25.53-49.65-28.65s-18.11-5.57-25.08-9.6a59.45 59.45 0 0012.25 6.49c7.09 2.72 55.85 30.24 62.48 34.07z"
            style={{
              transformOrigin: '396.955px 165.71px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elf22bs8dpa38"
          />
          <path
            d="M249.07 76.06L300.74 106c10.77 6.23 28.67 18.74 43.76 26.91s26.19 12.86 26.19 12.86-14.43-4.11-26.36-11-33.65-20.48-46.74-28.06l-48.53-28.14z"
            style={{
              transformOrigin: '309.875px 110.915px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__eli797gft5asd"
          />
          <path
            d="M434.32 168.27c-10-5.79-43.12-24.88-51-29.46s-20-13-33.41-20.8A235.26 235.26 0 00317 102.15a165.26 165.26 0 01-17.74-8.57 152.14 152.14 0 0022.17 12.26c13.31 6 29.25 14.38 43.4 24.44s69.51 40.82 69.51 40.82z"
            style={{
              transformOrigin: '366.8px 132.34px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el2kdd0k2s219"
          />
          <path
            d="M249.11 49.41C307 82.2 306.74 82 322.86 91.36c15 8.67 34.6 20.73 34.6 20.73s-31.68-16.85-63.36-35.18l-45-26z"
            style={{
              transformOrigin: '303.28px 80.75px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elvzfn674q86"
          />
          <path
            d="M434.32 160.18s-69.23-40-88.75-51.26-41.25-21.71-41.25-21.71 16.21 10.71 40.18 24.62c7.1 4.12 89.82 51.88 89.82 51.88v-3.53"
            style={{
              transformOrigin: '369.32px 125.46px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__eltyhuanlfpz"
          />
          <path
            d="M249.06 82.27l52.48 30.36c11 6.36 39.53 23.74 46.33 28.06 0 0-28.09-14.76-65.45-36.37L249.05 85z"
            style={{
              transformOrigin: '298.46px 111.48px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el074dupoxmvgm"
          />
          <path
            d="M249.07 72.5L293.1 98c10.51 6.08 35 22.61 45.81 28.84s81.89 44.94 95.41 52.76v-3c-8.39-4.85-76.49-49.07-92.77-58.48s-32.92-14.14-43.07-20l-49.4-28.58zm69.17 37.8c0-1.51 13.88 4.82 23.41 10.34 8.41 4.87 25.12 16.12 25.12 17.52s-16.33-7.36-25.12-12.45-23.42-13.9-23.41-15.41z"
            style={{
              transformOrigin: '341.695px 124.57px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el79bskkb1q15"
          />
          <path
            d="M249.1 60.92c6.58 3.8 25.88 14.7 31.58 19.08s11.6 11.42 22.6 17.78c0 0-11.35-4.74-17.88-10.94S249.05 64 249.05 64z"
            style={{
              transformOrigin: '276.165px 79.35px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el0uwx12ky0w2"
          />
          <path
            style={{
              transformOrigin: '266.01px 62.025px',
            }}
            id="prefix__elzyk31stsjui"
            className="prefix__animable"
            fill="#263238"
            d="M267.45 56.58l-1.44-.83-1.44-.84 1.08 14.23 1.8-12.56z"
          />
          <path
            style={{
              transformOrigin: '350.885px 126.27px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.2}
            d="M267.45 56.58l165.01 97.7 1.86 41.68v-43.08l-166.87-96.3z"
            id="prefix__elw9d3mcxqipm"
          />
          <path
            style={{
              transformOrigin: '429.26px 167.61px',
            }}
            id="prefix__elu3mk4lqb9uk"
            className="prefix__animable"
            fill="#37474f"
            d="M434.32 166.48l-10.12-3 10.12 8.26v-5.26z"
          />
          <path
            style={{
              transformOrigin: '439.69px 171.235px',
            }}
            id="prefix__ellsawkj2vfd"
            className="prefix__animable"
            fill="#37474f"
            d="M445.06 189.71l-10.74 6.25v-43.08l10.74-6.37v43.2z"
          />
          <path
            style={{
              transformOrigin: '347.06px 96.28px',
            }}
            id="prefix__elcz85yzdr8i"
            className="prefix__animable"
            fill="#263238"
            d="M434.32 152.88l10.74-6.37L259.97 39.68l-10.91 6.28 185.26 106.92z"
          />
          <path
            style={{
              transformOrigin: '435.755px 169.11px',
            }}
            id="prefix__el31kibqhbpyp"
            className="prefix__animable"
            fill="#37474f"
            d="M434.32 166.48l2.87 1.02-2.87 4.24v-5.26z"
          />
          <path
            style={{
              transformOrigin: '430.695px 167.61px',
            }}
            id="prefix__ellu0spra8qhq"
            className="prefix__animable"
            fill="#263238"
            d="M437.19 167.5l-2.87 1.66-10.12-5.68 10.12 8.26 2.87-4.24z"
          />
          <path
            style={{
              transformOrigin: '265.29px 62.025px',
            }}
            id="prefix__ell6hmrsnaor"
            className="prefix__animable"
            fill="#37474f"
            d="M264.57 54.91l1.44.84-.36 13.39-1.08-14.23z"
          />
          <path
            style={{
              transformOrigin: '345.41px 213.79px',
            }}
            id="prefix__elpefueosri2"
            className="prefix__animable"
            fill="#455a64"
            d="M252.78 138.79l185.26 106.92v43.08l-166.87-96.3-1.8-14.64-1.08 12.97-15.51-8.95v-43.08z"
          />
          <path
            d="M438 252.88c-9.7-5.59-50.5-29.6-55.2-32.78-13.66-9.24-25.44-17.7-43.72-28.39 0 0 8.48 3.73 26.76 15.41 8.58 5.49 35.68 21.85 39.8 24.56S438 250.74 438 250.74z"
            style={{
              transformOrigin: '388.54px 222.295px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__eli266i1kya9g"
          />
          <path
            d="M252.82 172.67l14.74 8.5c14.25 8.21 23.83 13.33 30 14.8s18.17 8.1 23.55 11.4A132.87 132.87 0 00303 196c-11.85-6.34-14-5-30.84-14.71l-19.32-11.14z"
            style={{
              transformOrigin: '286.965px 188.76px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__ell2g8kpmcrsd"
          />
          <path
            d="M438 258c-10.2-5.87-25-14.43-30.42-17.54s-37.34-26.4-44.31-30.42a63.19 63.19 0 0112.25 7.67c7.09 5.45 55.84 34.16 62.48 38z"
            style={{
              transformOrigin: '400.635px 234.02px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elnqmmkzafls"
          />
          <path
            d="M252.79 151.78l51.67 29.78c10.77 6.2 28.67 14.37 43.75 23.61s26.2 17.39 26.2 17.39S360 210 348 203.13s-33.64-18.36-46.74-25.91l-48.52-28z"
            style={{
              transformOrigin: '313.575px 185.89px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el86he25l4o65"
          />
          <path
            d="M438 273.4l-31.81-18.33c-7.92-4.57-39.21-21.1-52.64-28.84a304.68 304.68 0 01-32.89-22.12A204.3 204.3 0 00303 192.2s8.86 4 22.17 13.34 29.25 19.39 43.4 25.67S438 270.58 438 270.58z"
            style={{
              transformOrigin: '370.5px 232.8px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elmsfmw1yizt"
          />
          <path
            d="M252.83 178.48s58.76 34.57 73.74 43.2 34.61 19.24 34.61 19.24-31.68-19.74-63.37-38l-45-25.93z"
            style={{
              transformOrigin: '306.995px 208.955px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__el5g13hpx4lcj"
          />
          <path
            d="M438 281.49l-88.75-51.14C329.78 219.11 308 204.43 308 204.43s16.21 8 40.18 21.78C355.32 230.29 438 278 438 278v3.52"
            style={{
              transformOrigin: '373px 242.975px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elt47hnkfqp7q"
          />
          <path
            d="M252.78 145.56l52.48 30.25c11 6.34 39.53 21.89 46.33 25.43 0 0-28.09-17.68-65.45-39.2l-33.37-19.23z"
            style={{
              transformOrigin: '302.18px 172.025px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__elleudgbbjose"
          />
          <path
            d="M252.8 158.39l49.4 28.47c10.14 5.84 26.8 20.34 43.07 29.72s84.38 43.73 92.77 48.56v-3c-13.52-7.79-84.65-51.13-95.41-57.33s-35.3-18-45.82-24.06l-44-25.37zM345.37 209c8.79 5.07 25.12 15.16 25.12 16.56s-16.71-6.64-25.12-11.48c-9.54-5.5-23.41-15.19-23.42-16.7S336.57 204 345.37 209z"
            style={{
              transformOrigin: '345.42px 210.26px',
            }}
            className="prefix__animable"
            opacity={0.1}
            id="prefix__el5to4kuy4r7v"
          />
          <path
            d="M252.82 167c6.58 3.79 25.88 15.18 31.58 17.38s11.6 2 22.6 8.33c0 0-11.35-8.37-17.88-9.72s-36.35-19.12-36.35-19.12z"
            style={{
              transformOrigin: '279.885px 178.29px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.05}
            id="prefix__elwgzgluwetu"
          />
          <path
            style={{
              transformOrigin: '269.73px 185.17px',
            }}
            id="prefix__el2r5nb8tnfgj"
            className="prefix__animable"
            fill="#263238"
            d="M271.17 192.49l-1.94-4.46-.94 2.79 1.08-12.97 1.8 14.64z"
          />
          <path
            style={{
              transformOrigin: '354.605px 219.1px',
            }}
            className="prefix__animable"
            fill="#fff"
            opacity={0.2}
            d="M271.17 149.41l165 97.7 1.87 41.68v-43.08l-166.87-96.3z"
            id="prefix__elux1x7ussre9"
          />
          <path
            style={{
              transformOrigin: '432.98px 270.85px',
            }}
            id="prefix__elhk3kp5cicet"
            className="prefix__animable"
            fill="#37474f"
            d="M438.04 275.19l-10.12-8.68 10.12 3.42v5.26z"
          />
          <path
            style={{
              transformOrigin: '443.41px 264.16px',
            }}
            id="prefix__elom1ukm7zodj"
            className="prefix__animable"
            fill="#37474f"
            d="M448.78 239.53l-10.74 6.18v43.08l10.74-6.19v-43.07z"
          />
          <path
            style={{
              transformOrigin: '441.975px 271.28px',
            }}
            id="prefix__el1069ucypw0wl"
            className="prefix__animable"
            fill="#37474f"
            d="M438.04 275.19l7.87-7.82-7.87 2.56v5.26z"
          />
          <path
            style={{
              transformOrigin: '436.915px 269.51px',
            }}
            id="prefix__elq9ibox0qih8"
            className="prefix__animable"
            fill="#263238"
            d="M445.91 267.37l-7.87 5.14-10.12-6 10.12 3.42 7.87-2.56z"
          />
          <path
            style={{
              transformOrigin: '268.83px 184.335px',
            }}
            id="prefix__elm1reaegz8z"
            className="prefix__animable"
            fill="#37474f"
            d="M268.29 190.82l.94-2.79.14-10.18-1.08 12.97z"
          />
          <path
            d="M340 118.8a27.58 27.58 0 017.44 6.25 37.35 37.35 0 015.16 8.21 43.33 43.33 0 013 9.45 59.87 59.87 0 011.19 9.87q.11 3.88.11 8t-.11 7.75a38.63 38.63 0 01-1.19 8.5 13.15 13.15 0 01-3 5.92 7.51 7.51 0 01-5.16 2.26q-3.12.15-7.44-2.35a27.37 27.37 0 01-7.44-6.24 37.18 37.18 0 01-5.16-8.22 43.24 43.24 0 01-3-9.44 60.13 60.13 0 01-1.19-9.87q-.11-3.7-.11-7.88t.11-7.92a38.72 38.72 0 011.19-8.51 13.11 13.11 0 013-5.91 7.46 7.46 0 015.16-2.26q3.12-.1 7.44 2.39zm6.17 43q.22-7.41 0-14.92a43.47 43.47 0 00-.43-4.33 18.59 18.59 0 00-1-3.82 12.34 12.34 0 00-1.85-3.24A10 10 0 00340 133a5 5 0 00-2.88-.86 2.34 2.34 0 00-1.85.92 7.88 7.88 0 00-1.06 2.78 21.92 21.92 0 00-.38 3.9q-.29 7.2 0 14.91a32.44 32.44 0 00.38 4.3 17.19 17.19 0 001 3.84 13.14 13.14 0 001.88 3.26 10 10 0 002.88 2.46 4.9 4.9 0 002.88.87 2.66 2.66 0 001.88-1.1 6.45 6.45 0 001-2.64 24.92 24.92 0 00.44-3.86z"
            style={{
              transformOrigin: '340px 150.712px',
            }}
            id="prefix__elfsk1jjmm8po"
            className="prefix__animable"
            fill="#263238"
          />
          <path
            d="M352.6 182.79a7.46 7.46 0 01-5.17 2.27c-2.07.1-4.54-.68-7.43-2.34a27.38 27.38 0 01-7.43-6.25 36.77 36.77 0 01-2.7-3.7l3.52-2c.72 1.06 1.48 2.08 2.3 3.07a27.38 27.38 0 007.43 6.25q4.32 2.49 7.45 2.34a9 9 0 002.88-.61 9.61 9.61 0 01-.85.97z"
            style={{
              transformOrigin: '341.66px 177.919px',
            }}
            id="prefix__elcqmlbx80k3q"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M346.82 134l-3.53 2.07c-.13-.2-.26-.41-.4-.6A10.21 10.21 0 00340 133a5 5 0 00-2.88-.86 2.33 2.33 0 00-1.85.92c-.3.43-.32.47 0 0a2.64 2.64 0 01.64-.65L339 130a2.31 2.31 0 011.27-.5 4.88 4.88 0 012.88.86 9.74 9.74 0 012.85 2.44 10.61 10.61 0 01.82 1.2z"
            style={{
              transformOrigin: '340.929px 132.784px',
            }}
            id="prefix__elfdcki2plo0e"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M355.65 142.52a43.07 43.07 0 00-3-9.44 37.18 37.18 0 00-5.16-8.22 27.58 27.58 0 00-7.44-6.25q-4.32-2.49-7.44-2.34a8.14 8.14 0 00-2.71.6 14 14 0 00-2.38 5.1 38.65 38.65 0 00-1.18 8.5c-.08 2.5-.12 5.15-.12 7.93s0 5.4.12 7.87a59.84 59.84 0 001.18 9.87 43.33 43.33 0 003 9.45 36.79 36.79 0 005.17 8.21 27.21 27.21 0 007.43 6.25c2.89 1.67 5.36 2.44 7.44 2.34a9.23 9.23 0 002.89-.6 14.62 14.62 0 002.27-5.16 38.83 38.83 0 001.12-8.44q.11-3.57.11-7.74c0-2.79 0-5.47-.11-8.06a60.13 60.13 0 00-1.19-9.87zm-6.36 16.59a24.93 24.93 0 01-.37 3.87 6.31 6.31 0 01-1 2.64 2.94 2.94 0 01-.67.65s-2.88 2.31-3.13 2.49a2.7 2.7 0 01-1.2.43 4.9 4.9 0 01-2.88-.87 9.85 9.85 0 01-2.88-2.46 13.14 13.14 0 01-1.88-3.26 17.19 17.19 0 01-1-3.84 32.28 32.28 0 01-.38-4.29q-.29-7.72 0-14.92a22.24 22.24 0 01.4-3.85 7.2 7.2 0 011-2.64 2.83 2.83 0 01.64-.65c.35-.26 2.84-2.27 3.06-2.43a2.52 2.52 0 011.27-.51 5 5 0 012.88.87 10.06 10.06 0 012.85 2.46 12.94 12.94 0 011.84 3.24 18.23 18.23 0 011 3.83 43.47 43.47 0 01.43 4.33q.26 7.5.02 14.91z"
            style={{
              transformOrigin: '341.585px 149.33px',
            }}
            id="prefix__el6clr6fa0clc"
            className="prefix__animable"
            fill={theme.colors.accent}
          />
          <path
            d="M302.7 160.29a2.93 2.93 0 01-1.1-1.34 4.5 4.5 0 01-.46-2v-9.05L283 137.45a2.88 2.88 0 01-1.1-1.34 4.49 4.49 0 01-.46-2v-9.41a6 6 0 01.75-3.39l17.24-23.51a1.73 1.73 0 01.95-.74 2 2 0 011.18.38l8.71 5a3 3 0 011.1 1.34 4.71 4.71 0 01.46 2v34.08l4.95 2.87a2.88 2.88 0 011.1 1.34 4.49 4.49 0 01.46 2v9.41a1.88 1.88 0 01-.46 1.42.84.84 0 01-1.1.08l-4.95-2.86v9.05a1.92 1.92 0 01-.46 1.42.84.84 0 01-1.1.08zm-1.27-26.39v-16.33L293 129zm-.29 14"
            style={{
              transformOrigin: '299.886px 130.949px',
            }}
            id="prefix__elr5eczqryv2"
            className="prefix__animable"
            fill="#263238"
          />
          <path
            d="M317.86 156.88a1.88 1.88 0 00.46-1.42v-2.07l-3.39-2-3.12 2.67 4.95 2.86a.84.84 0 001.1-.04z"
            style={{
              transformOrigin: '315.069px 154.248px',
            }}
            id="prefix__elzyo9odn77"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M311.81 161.08v2.07a1.87 1.87 0 01-.47 1.42.84.84 0 01-1.1.08l-7.54-4.36a2.94 2.94 0 01-1.1-1.34l-.06-.16 3.12-2.66a1 1 0 00.06.16 3 3 0 001.1 1.34z"
            style={{
              transformOrigin: '306.679px 160.474px',
            }}
            id="prefix__ellti2x4nmxes"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M304.26 145.28l-3.12 2.66L283 137.45a2.9 2.9 0 01-1.08-1.34c-.05-.1-.07-.19-.11-.29l3.23-2.38a2.85 2.85 0 001.1 1.35z"
            style={{
              transformOrigin: '293.035px 140.69px',
            }}
            id="prefix__elsoklodpjmr7"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M316.76 142.57l-4.95-2.86v-34.09a4.63 4.63 0 00-.46-2 2.94 2.94 0 00-1.1-1.34l-8.71-5a2.44 2.44 0 00-.41-.19l-15.84 21.61a6 6 0 00-.75 3.38v9.41a4.51 4.51 0 00.47 2 2.86 2.86 0 001.09 1.34l18.16 10.49v9.05a4.49 4.49 0 00.46 1.95 3 3 0 001.1 1.35l6 3.45v-7l3.12-2.67 3.39 2v-7.52a4.56 4.56 0 00-.46-2 2.88 2.88 0 00-1.11-1.36zm-12.21-11.33l-3.12 2.48-8.43-4.86 8.42-11.48 3.12-2.47z"
            style={{
              transformOrigin: '301.427px 129.105px',
            }}
            id="prefix__elwx4528lll8"
            className="prefix__animable"
            fill={theme.colors.accent}
          />
          <path
            d="M382.9 206.59a2.88 2.88 0 01-1.1-1.34 4.49 4.49 0 01-.46-1.95v-9.06l-18.16-10.48a2.91 2.91 0 01-1.1-1.35 4.49 4.49 0 01-.46-1.95v-9.41a6 6 0 01.75-3.38l17.24-23.51a1.61 1.61 0 01.95-.74 2 2 0 011.18.37l8.71 5a2.92 2.92 0 011.09 1.34 4.49 4.49 0 01.46 2v34.07l5 2.86a2.88 2.88 0 011.1 1.34 4.56 4.56 0 01.46 2v9.41a1.9 1.9 0 01-.46 1.42.84.84 0 01-1.1.07l-5-2.86v9a1.87 1.87 0 01-.46 1.42.82.82 0 01-1.09.08zm-1.27-26.38v-16.34l-8.42 11.48zm-.29 14"
            style={{
              transformOrigin: '380.086px 177.265px',
            }}
            id="prefix__elbbml4ner4jw"
            className="prefix__animable"
            fill="#263238"
          />
          <path
            d="M398.06 203.19a1.9 1.9 0 00.46-1.42v-2.07l-3.39-2-3.13 2.7 5 2.86a.84.84 0 001.06-.07z"
            style={{
              transformOrigin: '395.264px 200.558px',
            }}
            id="prefix__elzabplzcirt"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M392 207.39v2.07a1.86 1.86 0 01-.47 1.41.83.83 0 01-1.1.08l-7.54-4.35a3 3 0 01-1.1-1.35l-.06-.16 3.12-2.66a.52.52 0 00.06.16 3 3 0 001.1 1.34z"
            style={{
              transformOrigin: '386.869px 206.776px',
            }}
            id="prefix__eltf5bj324gto"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M384.46 191.58l-3.12 2.67-18.17-10.5a2.79 2.79 0 01-1.08-1.34 1.62 1.62 0 01-.11-.28l3.23-2.38a2.91 2.91 0 001.09 1.34z"
            style={{
              transformOrigin: '373.22px 187px',
            }}
            id="prefix__elsth2opek52"
            className="prefix__animable"
            fill="#37474f"
          />
          <path
            d="M397 188.87l-5-2.87v-34.08a4.49 4.49 0 00-.46-1.95 2.92 2.92 0 00-1.09-1.34l-8.71-5a3.61 3.61 0 00-.41-.19L365.49 165a6 6 0 00-.75 3.39v9.41a4.5 4.5 0 00.47 1.95 2.86 2.86 0 001.09 1.34l18.16 10.49v9a4.5 4.5 0 00.46 2 2.93 2.93 0 001.1 1.34l6 3.45v-7l3.13-2.66 3.39 2v-7.53a4.49 4.49 0 00-.46-1.95 3 3 0 00-1.08-1.36zm-12.21-11.33l-3.16 2.46-8.42-4.86 8.42-11.48 3.12-2.47z"
            style={{
              transformOrigin: '381.631px 175.405px',
            }}
            id="prefix__el7hapgza25q7"
            className="prefix__animable"
            fill={theme.colors.accent}
          />
          <path
            d="M286.88 177.89a.57.57 0 01.21.26.84.84 0 01.09.37v1.81a.38.38 0 01-.09.28.16.16 0 01-.21 0l-5.26-3a.63.63 0 01-.21-.26.87.87 0 01-.08-.38v-11a.38.38 0 01.08-.28.16.16 0 01.21 0l5.18 3a.63.63 0 01.21.26 1 1 0 01.08.38v1.81a.41.41 0 01-.08.27.17.17 0 01-.21 0l-3.42-2v1.85l3.17 1.83a.57.57 0 01.21.26.84.84 0 01.09.37v1.82a.37.37 0 01-.09.27.15.15 0 01-.21 0l-3.17-1.81v1.92z"
            style={{
              transformOrigin: '284.254px 173.15px',
            }}
            id="prefix__el2f4wjuox605"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M292.35 174.9a.53.53 0 01.22.26 1 1 0 01.08.37v1.73a.41.41 0 01-.08.27.17.17 0 01-.22 0l-1-.58c-.68-.39-1-.06-1 1v4.21a.37.37 0 01-.09.27c-.05.06-.12.06-.21 0l-1.39-.8a.51.51 0 01-.21-.26.88.88 0 01-.09-.38v-8a.37.37 0 01.09-.27c.05-.06.12-.06.21 0l1.28.74a.57.57 0 01.21.26.84.84 0 01.09.37v.4a1 1 0 01.62-.26 1.53 1.53 0 01.86.25z"
            style={{
              transformOrigin: '290.505px 177.575px',
            }}
            id="prefix__elx639ecg8ro8"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M297.45 177.84a.52.52 0 01.21.26.84.84 0 01.09.37v1.73a.37.37 0 01-.09.27.15.15 0 01-.21 0l-1-.58c-.68-.39-1-.06-1 1v4.21a.37.37 0 01-.09.27.15.15 0 01-.21 0l-1.4-.8a.63.63 0 01-.21-.26.88.88 0 01-.09-.38v-8a.37.37 0 01.09-.27.15.15 0 01.21 0l1.29.74a.57.57 0 01.21.26.84.84 0 01.09.37v.4a.94.94 0 01.61-.26 1.53 1.53 0 01.86.25z"
            style={{
              transformOrigin: '295.6px 180.515px',
            }}
            id="prefix__el9e7g3z5pta"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M304.25 185.56v1.31a4.38 4.38 0 01-.25 1.4 2 2 0 01-.61.9 1.35 1.35 0 01-.93.3 2.5 2.5 0 01-1.23-.39 4.92 4.92 0 01-1.23-1 6.62 6.62 0 01-.93-1.39 7.55 7.55 0 01-.61-1.6 7.68 7.68 0 01-.25-1.68v-.67-.65a4.41 4.41 0 01.23-1.4 2.1 2.1 0 01.62-.9 1.46 1.46 0 01.94-.31 2.5 2.5 0 011.23.39 4.92 4.92 0 011.23 1 7.45 7.45 0 01.94 1.4 8.22 8.22 0 01.61 1.61 8.1 8.1 0 01.24 1.68zm-4-1.11a2.87 2.87 0 00.3 1.2 1.82 1.82 0 00.72.78.62.62 0 00.72 0 1.1 1.1 0 00.3-.84 4.79 4.79 0 000-.56 5.62 5.62 0 000-.6 2.86 2.86 0 00-.3-1.19 1.89 1.89 0 00-.72-.78c-.3-.17-.54-.19-.72-.05a1.1 1.1 0 00-.3.84 5 5 0 000 .57 5.43 5.43 0 00-.04.63z"
            style={{
              transformOrigin: '301.23px 184.476px',
            }}
            id="prefix__eltiim7ewyltq"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M309.32 184.69a.63.63 0 01.21.26.88.88 0 01.09.38v1.72a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1-.58c-.68-.4-1-.07-1 1v4.2a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.4-.81a.57.57 0 01-.21-.26.84.84 0 01-.09-.37v-8a.38.38 0 01.09-.28.16.16 0 01.21 0l1.29.74a.63.63 0 01.21.26.88.88 0 01.09.38v.39a1 1 0 01.61-.26 1.55 1.55 0 01.86.26z"
            style={{
              transformOrigin: '307.47px 187.352px',
            }}
            id="prefix__ellrybqge4bl9"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M309.76 191.34a.76.76 0 01.14-.38c.08-.09.19-.1.34 0l1.36.78a.48.48 0 01.18.21.92.92 0 01.07.31v.11l-.87 2.9a.85.85 0 01-.15.28c-.07.08-.18.08-.33 0l-.83-.48a.38.38 0 01-.17-.21.66.66 0 01-.07-.3z"
            style={{
              transformOrigin: '310.64px 193.249px',
            }}
            id="prefix__elp454t0hrn3n"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M318.76 199.2a3.15 3.15 0 01-.57-.43 3.84 3.84 0 01-.42-.5 3.39 3.39 0 01-.3-.51c-.08-.17-.15-.31-.2-.45V201a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.4-.81a.52.52 0 01-.21-.26.84.84 0 01-.09-.37v-11.24a.37.37 0 01.09-.27.17.17 0 01.21 0l1.35.78a.57.57 0 01.21.26.84.84 0 01.09.37v.4c.06-.08.14-.16.21-.24a.64.64 0 01.29-.16.85.85 0 01.42 0 2 2 0 01.62.26 3.75 3.75 0 01.94.78 4.71 4.71 0 01.78 1.16 7.94 7.94 0 01.54 1.54 8.88 8.88 0 01.22 1.87v1.38a5.67 5.67 0 01-.22 1.61 2.07 2.07 0 01-.54.91 1.06 1.06 0 01-.78.28 2.06 2.06 0 01-.94-.32zm.5-3.85a7.68 7.68 0 000-1 3.79 3.79 0 00-.26-1.19 1.62 1.62 0 00-.74-.87.75.75 0 00-.42-.12.47.47 0 00-.3.14 1.29 1.29 0 00-.18.33 3 3 0 00-.09.45v1.19a5.25 5.25 0 00.09.55 4.27 4.27 0 00.18.54 2.22 2.22 0 00.3.49 1.44 1.44 0 00.42.36c.35.2.6.2.74 0a1.72 1.72 0 00.26-.87z"
            style={{
              transformOrigin: '318.255px 194.798px',
            }}
            id="prefix__elal8j54g03nn"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M321.93 198.33a1.81 1.81 0 01.56-1.54 2.12 2.12 0 011.83 0l1.3.41a1.87 1.87 0 00-.15-.76 1.12 1.12 0 00-.5-.56.64.64 0 00-.39-.11.71.71 0 00-.21.08.24.24 0 01-.19.06.69.69 0 01-.21-.09l-1.41-.81a.54.54 0 01-.18-.21.56.56 0 01-.06-.31 1.52 1.52 0 01.22-.69 1.32 1.32 0 01.55-.47 1.68 1.68 0 01.83-.12 2.56 2.56 0 011.05.37 4.75 4.75 0 011.18.94 5 5 0 01.82 1.18 5.9 5.9 0 01.49 1.35 7.19 7.19 0 01.15 1.47v5.18a.37.37 0 01-.09.27.15.15 0 01-.21 0l-1.4-.8a.63.63 0 01-.21-.26.87.87 0 01-.08-.38V202a1 1 0 01-.66.43 1.61 1.61 0 01-1-.3 3.3 3.3 0 01-.85-.69 4 4 0 01-.62-.92 5 5 0 01-.39-1.08 5.55 5.55 0 01-.17-1.11zm2.53 1.85a.87.87 0 00.46.14.57.57 0 00.36-.14.87.87 0 00.25-.38 1.74 1.74 0 00.09-.59l-1-.35a.63.63 0 00-.49 0 .45.45 0 00-.18.42 1 1 0 00.14.54 1.11 1.11 0 00.37.36z"
            style={{
              transformOrigin: '324.764px 198.606px',
            }}
            id="prefix__elwwexpebk3eg"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M331.58 207.62a.9.9 0 00.75.14c.21-.08.32-.32.32-.72v-1.19a1.7 1.7 0 01-.22.24.55.55 0 01-.29.16.86.86 0 01-.42 0 2.08 2.08 0 01-.61-.26 4 4 0 01-.95-.77 5.2 5.2 0 01-.77-1.16 7.64 7.64 0 01-.54-1.51 8.46 8.46 0 01-.23-1.82v-.61-.6a5.49 5.49 0 01.23-1.57 2 2 0 01.54-.88 1.09 1.09 0 01.77-.27 2.25 2.25 0 01.95.31 3.45 3.45 0 01.63.47 3.65 3.65 0 01.46.52 4.63 4.63 0 01.31.51c.08.17.14.32.19.45v-.39a.38.38 0 01.09-.28.18.18 0 01.22 0l1.28.74a.57.57 0 01.21.26.84.84 0 01.09.37v8.32a4.19 4.19 0 01-.23 1.55 1.75 1.75 0 01-.62.86 1.39 1.39 0 01-1 .17 3.57 3.57 0 01-1.22-.46 5.48 5.48 0 01-1.41-1.15 6 6 0 01-.86-1.3 5.4 5.4 0 01-.43-1.24 5.14 5.14 0 01-.14-1 .31.31 0 01.09-.28.16.16 0 01.21 0l1.44.83a.86.86 0 01.35.54 1.93 1.93 0 00.24.53 1.32 1.32 0 00.57.49zm-1-6.79a3 3 0 000 .4 3.88 3.88 0 000 .44 3.08 3.08 0 00.27 1.14 1.65 1.65 0 00.73.81c.3.18.53.18.69 0a1.13 1.13 0 00.29-.71 4.87 4.87 0 000-1.08 3 3 0 00-.28-1 1.73 1.73 0 00-.7-.78c-.32-.19-.56-.2-.72 0a1.22 1.22 0 00-.25.78z"
            style={{
              transformOrigin: '331.607px 203.744px',
            }}
            id="prefix__el6xfrixtbsl"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M337.61 206.44a2.48 2.48 0 00.09.7 2.53 2.53 0 00.24.55 1.87 1.87 0 00.32.4 2.42 2.42 0 00.35.26 1.33 1.33 0 00.52.2.47.47 0 00.33-.1.36.36 0 01.18-.09.3.3 0 01.19.06l1.44.83a.56.56 0 01.24.52 1.23 1.23 0 01-.16.53 1.51 1.51 0 01-.52.55 1.54 1.54 0 01-.9.24 2.66 2.66 0 01-1.32-.43 5.21 5.21 0 01-1.28-1.06 6.12 6.12 0 01-.95-1.46 8.24 8.24 0 01-.57-1.78 10.41 10.41 0 01-.2-2.05 6.72 6.72 0 01.2-1.72 2.55 2.55 0 01.57-1.13 1.39 1.39 0 01.95-.42 2.36 2.36 0 011.28.39 4.6 4.6 0 011.38 1.22 7.24 7.24 0 01.93 1.62 8.63 8.63 0 01.52 1.8 9.79 9.79 0 01.16 1.74v.48a.37.37 0 01-.09.27.15.15 0 01-.21 0zm1-2.7c-.31-.18-.55-.18-.71 0a1.37 1.37 0 00-.29.79l2 1.16a3.7 3.7 0 00-.29-1.13 1.77 1.77 0 00-.71-.82z"
            style={{
              transformOrigin: '338.605px 206.066px',
            }}
            id="prefix__elg6jm98jadkf"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M350.88 217.11a.37.37 0 01-.09.27.17.17 0 01-.21 0l-1.4-.81a.57.57 0 01-.21-.26.84.84 0 01-.09-.37v-4.33a3.6 3.6 0 00-.23-1.31 1.71 1.71 0 00-.73-.87c-.34-.19-.58-.18-.73 0a1.82 1.82 0 00-.23 1v4.33a.37.37 0 01-.09.27.15.15 0 01-.21 0l-1.4-.8a.63.63 0 01-.21-.26.88.88 0 01-.09-.38v-8a.37.37 0 01.09-.27.15.15 0 01.21 0l1.35.77a.57.57 0 01.21.26.84.84 0 01.09.37v.4a1.19 1.19 0 01.22-.23.6.6 0 01.32-.15 1.1 1.1 0 01.44 0 2.24 2.24 0 01.58.25 4.05 4.05 0 011 .79 4.79 4.79 0 01.76 1.15 6.77 6.77 0 01.49 1.5 8.7 8.7 0 01.18 1.84z"
            style={{
              transformOrigin: '347.93px 211.347px',
            }}
            id="prefix__elg01y2p3egpe"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M357.9 216.53v1.32a4.33 4.33 0 01-.24 1.39 2.06 2.06 0 01-.61.91 1.4 1.4 0 01-.94.3 2.53 2.53 0 01-1.23-.4 4.87 4.87 0 01-1.22-1 6.66 6.66 0 01-.94-1.39 8 8 0 01-.61-1.61 7 7 0 01-.24-1.68v-.66-.65a3.91 3.91 0 01.23-1.4 2 2 0 01.61-.9 1.43 1.43 0 011-.31 2.5 2.5 0 011.22.39 4.92 4.92 0 011.23 1 7.14 7.14 0 01.94 1.4 7.63 7.63 0 01.61 1.61 6.94 6.94 0 01.19 1.68zm-4-1.1a3 3 0 00.31 1.19 1.87 1.87 0 00.71.78c.3.18.54.19.72 0a1.1 1.1 0 00.3-.84 4.67 4.67 0 000-.57 5.41 5.41 0 000-.59 2.83 2.83 0 00-.3-1.19 1.82 1.82 0 00-.72-.78.59.59 0 00-.71 0 1.14 1.14 0 00-.31.84v.57c0 .22-.05.41-.04.59z"
            style={{
              transformOrigin: '354.885px 215.449px',
            }}
            id="prefix__el1n63p3h5qwk"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M361.55 220.26a1.84 1.84 0 00.11.67.87.87 0 00.37.43l.89.51a.57.57 0 01.21.26.85.85 0 01.09.38v1.72a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.06-.61a3.87 3.87 0 01-.95-.78 5.08 5.08 0 01-.72-1.08 6.15 6.15 0 01-.47-1.33 6.72 6.72 0 01-.17-1.51v-2.87l-.82-.47a.57.57 0 01-.21-.26.84.84 0 01-.09-.37v-1.73a.34.34 0 01.09-.27.15.15 0 01.21 0l.82.48v-2.79a.35.35 0 01.09-.27.17.17 0 01.21 0l1.4.81a.57.57 0 01.21.26.84.84 0 01.09.37v2.79l1.25.72a.58.58 0 01.22.26.87.87 0 01.08.38v1.72a.38.38 0 01-.08.28.18.18 0 01-.22 0l-1.25-.72z"
            style={{
              transformOrigin: '360.825px 217.573px',
            }}
            id="prefix__elcg2m6rhxyr9"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M369 219.16l1.36.79a.6.6 0 01.21.25.92.92 0 01.09.38v1.73a.37.37 0 01-.09.27.17.17 0 01-.21 0l-1.36-.79v5.77a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.4-.81a.52.52 0 01-.21-.26.84.84 0 01-.09-.37v-5.78l-.76-.44a.49.49 0 01-.24-.17 1 1 0 01-.08-.37v-1.73a.41.41 0 01.08-.27.18.18 0 01.22 0l.76.45v-.46a4 4 0 01.18-1.3 1.5 1.5 0 01.51-.74 1.09 1.09 0 01.76-.2 2.28 2.28 0 011 .33l1.05.61a.51.51 0 01.21.26.88.88 0 01.09.38v1.72a.38.38 0 01-.09.28.16.16 0 01-.21 0l-1-.58c-.18-.1-.31-.1-.38 0a.84.84 0 00-.1.47z"
            style={{
              transformOrigin: '368.35px 221.623px',
            }}
            id="prefix__ellc5vll43in"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M377.22 227.69V229a4.43 4.43 0 01-.25 1.4 2.08 2.08 0 01-.61.9 1.37 1.37 0 01-.93.3 2.53 2.53 0 01-1.23-.4 4.87 4.87 0 01-1.23-1 6.62 6.62 0 01-.93-1.39 8 8 0 01-.86-3.28v-.67-.65a4.41 4.41 0 01.23-1.4 2 2 0 01.62-.9 1.46 1.46 0 01.94-.31 2.5 2.5 0 011.23.39 4.92 4.92 0 011.23 1 7.45 7.45 0 01.94 1.4A8.22 8.22 0 01377 226a8.1 8.1 0 01.22 1.69zm-4-1.11a2.87 2.87 0 00.3 1.2 1.82 1.82 0 00.72.78.62.62 0 00.72 0 1.1 1.1 0 00.3-.84v-.57-.59a2.86 2.86 0 00-.3-1.19 1.89 1.89 0 00-.72-.78c-.3-.17-.54-.19-.72 0a1.1 1.1 0 00-.3.84 4.88 4.88 0 000 .57 5.43 5.43 0 00-.04.58z"
            style={{
              transformOrigin: '374.2px 226.601px',
            }}
            id="prefix__elvsvnc5gkmq8"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M378.21 224.93a.38.38 0 01.08-.28.16.16 0 01.21 0l1.4.8a.63.63 0 01.21.26.88.88 0 01.09.38v4.32a3.73 3.73 0 00.21 1.3 1.6 1.6 0 00.7.85c.33.19.56.17.7-.05a2.13 2.13 0 00.2-1.06v-4.32a.37.37 0 01.09-.27.17.17 0 01.21 0l1.4.81a.57.57 0 01.21.26.85.85 0 01.09.38v8a.37.37 0 01-.09.27.15.15 0 01-.21 0l-1.29-.74a.57.57 0 01-.21-.26.84.84 0 01-.09-.37v-.4a1.27 1.27 0 01-.22.25.74.74 0 01-.31.14 1.12 1.12 0 01-.44 0 1.92 1.92 0 01-.59-.24 4.41 4.41 0 01-1.72-1.93 7.7 7.7 0 01-.63-3.33z"
            style={{
              transformOrigin: '381.108px 230.617px',
            }}
            id="prefix__el6ke90mzn6uu"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M391.21 240.39a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.4-.81a.52.52 0 01-.21-.26.84.84 0 01-.09-.37v-4.32a3.65 3.65 0 00-.23-1.32 1.73 1.73 0 00-.73-.86c-.34-.2-.58-.19-.73 0a1.85 1.85 0 00-.23 1.05v4.32a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.4-.81a.57.57 0 01-.21-.26.84.84 0 01-.09-.37v-8a.38.38 0 01.09-.28.16.16 0 01.21 0l1.35.77a.63.63 0 01.21.26.88.88 0 01.09.38v.39a1 1 0 01.22-.23.79.79 0 01.32-.15 1.12 1.12 0 01.44 0 1.88 1.88 0 01.58.24 4.05 4.05 0 011 .79 5 5 0 01.76 1.15 6.77 6.77 0 01.49 1.5 8.77 8.77 0 01.18 1.84z"
            style={{
              transformOrigin: '388.259px 234.652px',
            }}
            id="prefix__elbjj7pyskb6i"
            className="prefix__animable"
            fill="#fafafa"
          />
          <path
            d="M394.7 233.82a2.25 2.25 0 01.57.43 3.84 3.84 0 01.42.5 3.89 3.89 0 01.3.5c.08.17.15.32.2.45v-3.64a.37.37 0 01.09-.27.17.17 0 01.21 0l1.4.81a.57.57 0 01.21.26.85.85 0 01.09.38v11.2a.34.34 0 01-.09.27.15.15 0 01-.21 0l-1.35-.78a.54.54 0 01-.21-.25.92.92 0 01-.09-.38v-.39a2.25 2.25 0 01-.21.24.75.75 0 01-.29.16.86.86 0 01-.42 0 2.11 2.11 0 01-.62-.26 4.13 4.13 0 01-.94-.77 5 5 0 01-.78-1.17 7.61 7.61 0 01-.54-1.53 9 9 0 01-.22-1.87v-.7-.69a5.73 5.73 0 01.22-1.61 2.13 2.13 0 01.54-.91 1.06 1.06 0 01.78-.28 2 2 0 01.94.3zm-.5 3.84a7.69 7.69 0 000 1 4 4 0 00.26 1.19 1.67 1.67 0 00.74.87.72.72 0 00.42.13.48.48 0 00.3-.15.88.88 0 00.18-.33 2.63 2.63 0 00.09-.44v-.59-.61c0-.18-.05-.36-.09-.55a2.85 2.85 0 00-.18-.54 2.15 2.15 0 00-.3-.48 1.49 1.49 0 00-.42-.37c-.35-.2-.59-.19-.74 0a1.77 1.77 0 00-.26.87z"
            style={{
              transformOrigin: '395.206px 238.253px',
            }}
            id="prefix__elq7c726euahc"
            className="prefix__animable"
            fill="#fafafa"
          />
        </g>
      </g>
      <defs>
        <filter id="prefix__active" height="200%">
          <feMorphology
            in="SourceAlpha"
            result="DILATED"
            operator="dilate"
            radius={2}
          />
          <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />
          <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="prefix__hover" height="200%">
          <feMorphology
            in="SourceAlpha"
            result="DILATED"
            operator="dilate"
            radius={2}
          />
          <feFlood floodColor="red" floodOpacity={0.5} result="PINK" />
          <feComposite in="PINK" in2="DILATED" operator="in" result="OUTLINE" />
          <feMerge>
            <feMergeNode in="OUTLINE" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
          <feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        </filter>
      </defs>
      <defs>
        <clipPath id="prefix__clip-path--inject-26">
          <path
            d="M256.53 361.25c5.06 29.3-14 57.06-42.59 62s-55.87-14.8-60.94-44.1c-4.26-24.66 9.1-45.21 30.49-54a61.87 61.87 0 0119.73-4.49c25.85-1.59 48.65 13.66 53.31 40.59z"
            fill="none"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NotFound;
