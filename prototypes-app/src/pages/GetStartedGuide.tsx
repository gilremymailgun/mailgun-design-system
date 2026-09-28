import { useEffect, useRef, useState } from 'react';
import { Page } from '@ds/patterns/Page/Page';
import { Tabs } from '@ds/components/Tabs/Tabs';
import { Icon } from '@ds/icons/Icon';

const tabs = [
  { id: 'send', label: 'Send' },
  { id: 'optimize', label: 'Optimize' },
];

const cards = [
  {
    id: 'delivered',
    title: 'Delivered',
    metric: '0 / 0',
    percent: '0%',
    accent: 'var(--ref-color-raspberry-500)',
    illustration: `
      <svg width="72" height="72" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4392_26367)">
          <path opacity="0.1" d="M56 0H0V56H56V0Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2 32.5629V54.7555C14.2 55.0992 14.4785 55.3778 14.8222 55.3778H43.6518C43.9954 55.3778 44.274 55.0992 44.274 54.7555V32.7704C44.274 32.4267 43.9954 32.1481 43.6518 32.1481H14.6148C14.3857 32.1481 14.2 32.3339 14.2 32.5629Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4902 31.0661L10.3559 36.4587C10.2165 36.6405 10.2509 36.9009 10.4327 37.0403C10.5051 37.0958 10.5938 37.1259 10.6851 37.1259H26.372C26.5374 37.1259 26.6869 37.0277 26.7527 36.876L29.3407 30.9037H14.8194C14.6904 30.9037 14.5687 30.9637 14.4902 31.0661Z" fill="#F06B66" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M43.7763 31.0661L47.9106 36.4587C48.05 36.6405 48.0156 36.9009 47.8338 37.0403C47.7613 37.0958 47.6726 37.1259 47.5814 37.1259H31.8944C31.7291 37.1259 31.5796 37.0277 31.5138 36.876L29.177 31.4834C29.0859 31.2732 29.1825 31.029 29.3927 30.9379C29.4448 30.9153 29.5009 30.9037 29.5576 30.9037H43.4471C43.5761 30.9037 43.6978 30.9637 43.7763 31.0661Z" fill="#F06B66" stroke="#0C1013" stroke-width="0.7"/>
          <path d="M29.1333 32.1481V55.3778" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4962 37.1259L14.2 41.2741V37.1259H22.4962Z" fill="#0C1013"/>
          <path d="M17.5184 49.9852H22.7036" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M17.5184 52.0593H20.0073" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.53002 11.4731L8.10329 10.3266C8.15452 10.2241 8.2791 10.1826 8.38156 10.2338C8.42169 10.2539 8.45424 10.2864 8.47431 10.3266L9.04758 11.4731C9.08941 11.5568 9.18206 11.6021 9.27377 11.5837L10.7995 11.2786C10.9119 11.2561 11.0211 11.3289 11.0436 11.4413C11.052 11.4833 11.0472 11.527 11.0297 11.5662L10.4161 12.9469C10.3836 13.02 10.3961 13.1054 10.4481 13.1661L11.3521 14.2207C11.4266 14.3077 11.4165 14.4386 11.3296 14.5131C11.2979 14.5402 11.2589 14.5572 11.2175 14.5618L9.92516 14.7054C9.82012 14.7171 9.74065 14.8059 9.74065 14.9115V16.349C9.74065 16.4636 9.64779 16.5564 9.53324 16.5564C9.48373 16.5564 9.43586 16.5387 9.39827 16.5065L8.41512 15.6638C8.34131 15.6005 8.23347 15.597 8.1557 15.6554L7.00736 16.5166C6.91572 16.5853 6.78571 16.5668 6.71699 16.4751C6.6858 16.4335 6.67136 16.3818 6.67653 16.33L6.81631 14.9323C6.82771 14.8183 6.74455 14.7167 6.63057 14.7053L5.19838 14.562C5.0844 14.5506 5.00124 14.449 5.01264 14.335C5.01741 14.2874 5.03851 14.2429 5.07236 14.209L6.114 13.1674C6.17468 13.1067 6.19173 13.0149 6.15687 12.9365L5.54786 11.5662C5.50133 11.4615 5.54848 11.3389 5.65315 11.2924C5.69235 11.275 5.736 11.2702 5.77806 11.2786L7.30383 11.5837C7.39554 11.6021 7.48819 11.5568 7.53002 11.4731Z" fill="#0C1013" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M47.7671 13.5472L48.3403 12.4006C48.3916 12.2982 48.5162 12.2567 48.6186 12.3079C48.6588 12.328 48.6913 12.3605 48.7114 12.4006L49.2846 13.5472C49.3265 13.6308 49.4191 13.6762 49.5108 13.6578L51.0366 13.3527C51.1489 13.3302 51.2582 13.403 51.2807 13.5154C51.2891 13.5574 51.2842 13.6011 51.2668 13.6403L50.6531 15.021C50.6206 15.0941 50.6331 15.1795 50.6852 15.2402L51.5891 16.2948C51.6637 16.3818 51.6536 16.5127 51.5666 16.5872C51.535 16.6143 51.4959 16.6313 51.4545 16.6359L50.1622 16.7795C50.0572 16.7912 49.9777 16.88 49.9777 16.9856V18.4231C49.9777 18.5377 49.8849 18.6305 49.7703 18.6305C49.7208 18.6305 49.6729 18.6128 49.6353 18.5806L48.6522 17.7379C48.5784 17.6746 48.4705 17.6711 48.3928 17.7295L47.2444 18.5907C47.1528 18.6594 47.0228 18.6409 46.954 18.5492C46.9229 18.5076 46.9084 18.4559 46.9136 18.4041L47.0534 17.0064C47.0648 16.8924 46.9816 16.7908 46.8676 16.7794L45.4354 16.6361C45.3215 16.6247 45.2383 16.5231 45.2497 16.4091C45.2545 16.3615 45.2756 16.317 45.3094 16.2831L46.3511 15.2415C46.4117 15.1808 46.4288 15.089 46.3939 15.0106L45.7849 13.6403C45.7384 13.5356 45.7855 13.413 45.8902 13.3665C45.9294 13.3491 45.9731 13.3442 46.0151 13.3527L47.5409 13.6578C47.6326 13.6762 47.7252 13.6308 47.7671 13.5472Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0621 20.6282L14.6371 15.9032C14.7094 15.6858 14.9443 15.5684 15.1617 15.6409C15.2082 15.6565 15.2516 15.6801 15.2891 15.7117C16.9316 17.0384 18.0895 18.5073 18.7629 20.1185C19.4522 21.7679 20.042 24.5437 20.5324 28.4456L20.5327 28.4456C20.5454 28.5595 20.4634 28.662 20.3496 28.6748C20.2743 28.6832 20.2003 28.6498 20.1568 28.5877C18.5498 26.3523 17.2549 24.705 16.274 23.6444C15.2883 22.5788 14.2763 21.7346 13.238 21.1118C13.0741 21.0109 13.0006 20.8106 13.0621 20.6282Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M44.3748 20.6282L42.7998 15.9032C42.7275 15.6858 42.4926 15.5684 42.2752 15.6409C42.2287 15.6565 42.1853 15.6801 42.1478 15.7117C40.5053 17.0384 39.3474 18.5073 38.674 20.1185C37.9847 21.7679 37.3949 24.5437 36.9045 28.4456L36.9042 28.4456C36.8915 28.5595 36.9734 28.662 37.0873 28.6748C37.1626 28.6832 37.2366 28.6498 37.2801 28.5877C38.887 26.3523 40.1819 24.705 41.1629 23.6444C42.1486 22.5788 43.1606 21.7346 44.1988 21.1118C44.3627 21.0109 44.4363 20.8106 44.3748 20.6282Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path d="M20.6295 14.1037C22.4592 16.6103 23.6345 18.8918 24.1554 20.9481C24.6764 23.0045 24.8147 25.9082 24.5703 29.6593" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M36.717 14.1037C34.8874 16.6103 33.7121 18.8918 33.1911 20.9481C32.6702 23.0045 32.5319 25.9082 32.7763 29.6593" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M28.7185 15.5555V29.6592" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50.0609 26.8374C50.3339 26.59 50.5586 26.3454 50.735 26.1037C50.8671 25.9227 50.9976 25.7084 51.1266 25.4607L51.1263 25.4606C51.2331 25.2579 51.484 25.1802 51.6867 25.2871C51.7619 25.3268 51.8232 25.3886 51.8621 25.4643C51.9986 25.7325 52.1221 25.9453 52.2309 26.1037C52.3782 26.3182 52.5915 26.5681 52.8707 26.8535L52.8711 26.8531C53.0296 27.0185 53.0241 27.2811 52.8587 27.4396C52.8539 27.4443 52.8489 27.4488 52.8438 27.4532C52.59 27.6693 52.3865 27.8919 52.2309 28.1185C52.114 28.2887 51.9896 28.5113 51.8579 28.7861L51.8583 28.7863C51.7594 28.993 51.5117 29.0802 51.305 28.9813C51.2193 28.9402 51.1503 28.871 51.1095 28.7852C50.9717 28.4938 50.8468 28.2716 50.735 28.1185C50.5904 27.9203 50.3707 27.7047 50.0759 27.4718L50.0767 27.4708C49.8975 27.328 49.8679 27.0671 50.0106 26.8879C50.0255 26.8692 50.0419 26.8519 50.0597 26.8361L50.0609 26.8374Z" fill="#0C1013" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39428 25.8004C3.66725 25.553 3.89195 25.3084 4.0684 25.0667C4.20049 24.8857 4.331 24.6714 4.45993 24.4237L4.45963 24.4236C4.56648 24.2209 4.81738 24.1433 5.02004 24.2501C5.09529 24.2898 5.15653 24.3517 5.19544 24.4273C5.33199 24.6955 5.45551 24.9084 5.56425 25.0667C5.71158 25.2812 5.92485 25.5311 6.20407 25.8165L6.20444 25.8161C6.363 25.9815 6.35748 26.2441 6.19212 26.4026C6.18726 26.4073 6.18228 26.4118 6.1772 26.4163C5.92338 26.6323 5.71986 26.8549 5.56425 27.0815C5.44733 27.2517 5.32302 27.4743 5.19132 27.7492L5.1917 27.7493C5.09275 27.956 4.84503 28.0432 4.6384 27.9443C4.5527 27.9032 4.48369 27.834 4.44291 27.7482C4.30508 27.4569 4.18018 27.2347 4.0684 27.0815C3.92377 26.8833 3.70406 26.6677 3.40927 26.4348L3.41006 26.4338C3.23085 26.2911 3.20129 26.0301 3.34402 25.8509C3.35887 25.8322 3.37529 25.8149 3.39311 25.7991L3.39428 25.8004Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.972 2.15595C42.245 1.90856 42.4697 1.66398 42.6462 1.4222C42.7783 1.24121 42.9088 1.0269 43.0377 0.779261L43.0374 0.779103C43.1442 0.576452 43.3951 0.498792 43.5978 0.605644C43.6731 0.645326 43.7343 0.707189 43.7732 0.782847C43.9097 1.05106 44.0333 1.26388 44.142 1.4222C44.2893 1.6367 44.5026 1.88663 44.7818 2.17201L44.7822 2.17165C44.9408 2.33701 44.9352 2.5996 44.7699 2.75816C44.765 2.76282 44.76 2.76737 44.755 2.77179C44.5011 2.98781 44.2976 3.21047 44.142 3.43702C44.0251 3.60724 43.9008 3.8298 43.7691 4.10469L43.7695 4.10487C43.6705 4.31149 43.4228 4.39877 43.2162 4.29982C43.1305 4.25877 43.0615 4.18955 43.0207 4.10372C42.8828 3.81239 42.7579 3.59018 42.6462 3.43702C42.5015 3.23883 42.2818 3.02326 41.987 2.79031L41.9878 2.78932C41.8086 2.64659 41.779 2.38561 41.9218 2.20641C41.9366 2.18777 41.953 2.17045 41.9709 2.15463L41.972 2.15595Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
        </g>
        <defs>
          <clipPath id="clip0_4392_26367">
            <rect width="56" height="56" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
  },
  {
    id: 'failed',
    title: 'Failed',
    metric: '0 / 0',
    percent: '0%',
    accent: 'var(--ref-color-ocean-500)',
    illustration: `
      <svg width="72" height="72" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4392_26570)">
          <path opacity="0.1" d="M56 0H0V56H56V0Z" fill="white"/>
          <path d="M0.226979 15.3414C12.9216 18.1133 21.0695 16.5902 24.6707 10.7719C30.0725 2.04452 18.1169 -1.26947 14.4804 2.92956C10.8438 7.12858 12.0973 21.8664 20.3796 24.1306" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round" stroke-dasharray="3.19 3.19"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.134 24.5781L15.2086 53.8596C15.1615 54.3368 15.5109 54.7611 15.9881 54.8074C16.1176 54.82 16.2483 54.8033 16.3702 54.7577C31.905 49.0114 40.5251 43.9306 42.2306 39.5151C43.924 35.1312 44.591 25.2342 44.2319 9.82397L44.2319 9.82397C44.2248 9.58435 44.0249 9.39581 43.7852 9.40286C43.6314 9.40739 43.4914 9.49307 43.4174 9.62804C40.5022 14.8789 37.178 18.5276 33.4479 20.5757C29.6596 22.6558 25.0009 23.5986 19.4715 23.4042C18.7859 23.3818 18.2006 23.8953 18.134 24.5781Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2292 19.1534C35.8817 14.1184 36.2543 10.7462 36.3468 9.03688C36.5282 5.68838 35.7442 3.86123 36.6226 2.8931C38.1736 1.18366 40.8775 3.48876 44.7344 9.80839C43.3304 11.4501 42.0647 12.8921 40.9376 14.1344C39.8104 15.3768 37.9076 17.0498 35.2292 19.1534Z" fill="#0C1013"/>
          <path d="M24.1273 36.2377C26.2566 36.2377 27.9828 34.5229 27.9828 32.4075C27.9828 30.2922 26.2566 28.5774 24.1273 28.5774C21.9979 28.5774 20.2717 30.2922 20.2717 32.4075C20.2717 34.5229 21.9979 36.2377 24.1273 36.2377Z" fill="#F99A94" stroke="#0C1013" stroke-width="0.7"/>
          <path d="M31.0519 30.2612C33.1125 29.9834 34.6418 29.5896 35.6399 29.08C36.638 28.5705 37.9661 27.332 39.6244 25.3648" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M31.2493 35.8753C33.3099 35.5975 34.8392 35.2038 35.8373 34.6942C36.8354 34.1846 38.1635 32.9462 39.8217 30.979" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M54.6184 9.02991H41.8779C41.4213 9.02991 41.0511 9.40007 41.0511 9.8567V21.9916C41.0511 22.4483 41.4213 22.8184 41.8779 22.8184H54.6184C55.075 22.8184 55.4452 22.4483 55.4452 21.9916V9.8567C55.4452 9.40007 55.075 9.02991 54.6184 9.02991Z" fill="#F06B66" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5749 14.0746L45.7618 13.8453C45.9772 13.5811 46.3655 13.5403 46.6311 13.7539L50.8584 17.1546C51.1252 17.3692 51.1675 17.7596 50.9529 18.0264C50.952 18.0275 50.9512 18.0285 50.9503 18.0295L50.7634 18.2589C50.548 18.5231 50.1597 18.5639 49.8941 18.3502L45.6668 14.9496C45.4 14.7349 45.3577 14.3446 45.5723 14.0778C45.5732 14.0767 45.574 14.0757 45.5749 14.0746Z" fill="#0C1013"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8793 13.9828L50.6843 13.7598C50.4598 13.5033 50.0703 13.4761 49.8123 13.6989L45.7073 17.2438C45.4481 17.4676 45.4194 17.8592 45.6433 18.1184C45.6441 18.1194 45.645 18.1204 45.6459 18.1214L45.841 18.3444C46.0655 18.6009 46.4549 18.6281 46.7129 18.4053L50.818 14.8604C51.0772 14.6366 51.1058 14.245 50.882 13.9858C50.8811 13.9848 50.8802 13.9838 50.8793 13.9828Z" fill="#0C1013"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M51.4411 50.5291L50.7585 41.9526C50.7464 41.8009 50.6136 41.6877 50.4619 41.6998C50.3966 41.705 50.3352 41.7333 50.2889 41.7796L48.4138 43.6547C48.3062 43.7623 48.1317 43.7623 48.0241 43.6547L40.8137 36.4443C40.7061 36.3366 40.5316 36.3366 40.4239 36.4443L37.1643 39.7039C37.0566 39.8115 37.0566 39.986 37.1643 40.0937C37.1662 40.0956 37.1681 40.0974 37.17 40.0993L44.5789 47.0885C44.6896 47.1929 44.6947 47.3674 44.5903 47.4781C44.5884 47.48 44.5866 47.4819 44.5847 47.4838L42.4939 49.5746C42.3862 49.6823 42.3862 49.8568 42.4939 49.9644C42.5402 50.0107 42.6015 50.0391 42.6669 50.0443L51.2433 50.7268C51.3445 50.7349 51.433 50.6594 51.4411 50.5582C51.4418 50.5485 51.4418 50.5388 51.4411 50.5291Z" fill="#0C1013" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M52.3113 52.487L51.6287 43.9105C51.6167 43.7588 51.4839 43.6456 51.3322 43.6576C51.2668 43.6628 51.2055 43.6912 51.1591 43.7375L49.2841 45.6126C49.1765 45.7202 49.002 45.7202 48.8943 45.6126L41.6839 38.4021C41.5763 38.2945 41.4018 38.2945 41.2942 38.4021L38.0345 41.6618C37.9269 41.7694 37.9269 41.9439 38.0345 42.0516C38.0364 42.0534 38.0383 42.0553 38.0403 42.0571L45.4492 49.0464C45.5599 49.1508 45.565 49.3252 45.4605 49.436C45.4587 49.4379 45.4568 49.4398 45.4549 49.4417L43.3641 51.5325C43.2565 51.6402 43.2565 51.8147 43.3641 51.9223C43.4104 51.9686 43.4718 51.9969 43.5371 52.0021L52.1136 52.6847C52.2147 52.6927 52.3032 52.6173 52.3113 52.5161C52.3121 52.5064 52.3121 52.4967 52.3113 52.487Z" fill="#FFD6CD" stroke="#0C1013" stroke-width="0.7"/>
        </g>
        <defs>
          <clipPath id="clip0_4392_26570">
            <rect width="56" height="56" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
  },
  {
    id: 'suppressed',
    title: 'Suppressed',
    metric: '0 / 0',
    percent: '0%',
    accent: 'var(--ref-color-pumpkin-400)',
    illustration: `
      <svg width="72" height="72" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_4392_26853)">
          <path opacity="0.1" d="M56 0H0V56H56V0Z" fill="white"/>
          <path d="M45.5633 1.36806C42.4521 7.46032 42.5277 11.9564 45.7901 14.8562C50.6838 19.2059 54.0553 13.5931 51.813 10.9622C49.5706 8.33126 40.1857 6.36706 37.8699 10.261" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round" stroke-dasharray="3 3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5696 22.7032L32.1587 51.612C32.1118 52.0007 31.9023 52.3513 31.5811 52.5752C29.2812 54.1917 26.0327 55 21.8355 55C17.6295 55 14.0587 54.1883 11.1229 52.565C10.7242 52.3424 10.4612 51.9372 10.4204 51.4825L7.91838 22.7032C13.8596 23.2883 18.4987 23.5809 21.8355 23.5809C25.1724 23.5809 29.7504 23.2883 35.5696 22.7032Z" fill="#FFD6CD" stroke="#0C1013" stroke-width="0.7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0202 18.4906C37.767 19.5438 37.5839 21.6501 36.302 22.5277C35.0202 23.4053 28.1837 24.1074 22.568 24.1074C16.9523 24.1074 9.56644 23.5808 7.91835 22.7032C6.27027 21.8256 5.90403 19.8948 8.46772 18.4906C11.0314 17.0864 16.525 16.5598 22.568 16.5598C28.611 16.5598 32.2734 17.4374 35.0202 18.4906Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path d="M21.9271 22.1767C14.8982 22.1767 9.20018 21.0765 9.20018 19.7193C9.20018 18.3622 14.8982 17.262 21.9271 17.262C28.9559 17.262 34.6539 18.3622 34.6539 19.7193C34.6539 21.0765 28.9559 22.1767 21.9271 22.1767Z" fill="#0C1013"/>
          <path d="M31.5502 25.9128L28.7591 51.7581" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M24.5972 26.5039L23.6048 51.7582" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M18.0474 26.5039L18.8413 51.7582" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path d="M11.687 25.9125L13.5815 50.8603" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6729 13.8576L38.1375 8.14215C38.5782 7.9551 39.0871 8.16069 39.2741 8.60134L42.3131 15.7607C42.491 16.1844 42.3073 16.6734 41.8944 16.8752C38.4827 18.5269 35.6354 19.6159 33.3525 20.1423C30.9068 20.7063 27.8661 20.911 24.2305 20.7567L24.1448 14.6676C24.1399 14.3154 24.3486 13.9952 24.6729 13.8576Z" fill="#F06B66" stroke="#0C1013" stroke-width="0.7"/>
          <path d="M42.2671 16.6685L32.735 13.6476L27.4033 20.5516" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.7241 8.32153L34.0796 16.1778C34.0271 16.2664 33.9233 16.311 33.8229 16.2878L24.8389 14.2155" fill="#F06B66"/>
          <path d="M38.7241 8.32153L34.0796 16.1778C34.0271 16.2664 33.9233 16.311 33.8229 16.2878L24.8389 14.2155" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7002 30.1617C32.9547 29.3795 31.008 28.6269 28.8599 27.9041C26.7119 27.1813 23.6701 25.9656 19.7345 24.2572C27.5921 23.9891 32.0332 23.7575 33.0577 23.5626C34.0821 23.3676 34.9339 23.1361 35.6128 22.8679L34.7002 30.1617Z" fill="#0C1013"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2548 14.1099C7.97022 16.5139 -2.23814 23.0348 2.57334 24.0427C7.38482 25.0506 23.6361 19.1312 30.2448 14.9107C36.8535 10.6902 22.5394 11.7058 15.2548 14.1099Z" fill="white" stroke="#0C1013" stroke-width="0.7"/>
          <path d="M26.6812 13.6029C22.6948 15.8789 19.2328 17.5901 16.2952 18.7363C13.3575 19.8825 9.40962 21.0626 4.4515 22.2766" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1811 14.0058L13.9753 11.6352C13.752 11.5094 13.4814 11.5 13.2499 11.6101L12.687 11.8778C12.294 12.0647 12.1269 12.5348 12.3138 12.9278C12.3391 12.9809 12.3703 13.0311 12.4067 13.0773L14.4408 15.6569C14.4944 15.7249 14.5862 15.7499 14.6669 15.7185L18.1558 14.361C18.2572 14.3215 18.3074 14.2073 18.2679 14.1059C18.2514 14.0635 18.2207 14.0281 18.1811 14.0058Z" fill="white" stroke="#0C1013" stroke-width="0.7" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.12 12.4202L11.3983 15.3771L13.3831 14.6814L12.12 12.4202Z" fill="#0C1013"/>
        </g>
        <defs>
          <clipPath id="clip0_4392_26853">
            <rect width="56" height="56" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `,
  },
];

const scoreZone = (score: number) => {
  if (score < 70) {
    return {
      name: 'BAD',
      color: '#DD4040',
      textColor: '#8F2C1F',
      caption: 'Significant issues are hurting your deliverability - action needed.',
    };
  }
  if (score <= 85) {
    return {
      name: 'MEDIUM',
      color: 'var(--ref-color-honey-400)',
      textColor: '#8F3D1F',
      caption: 'Solid standing but a few signals are worth cleaning up.',
    };
  }
  return {
    name: 'GOOD',
    color: '#189269',
    textColor: '#1F6B3D',
    caption: 'Excellent standing - keep up the good work.',
  };
};

const ScoreGauge = ({ score, color }: { score: number; color: string }) => (
  <div style={{ position: 'relative', width: '48px', height: '48px', flex: '0 0 auto' }}>
    <svg viewBox="0 0 48 48" aria-hidden="true" style={{ width: '48px', height: '48px', transform: 'rotate(-90deg)' }}>
      <circle cx="24" cy="24" r="20" fill="none" stroke="var(--ref-color-neutral-100)" strokeWidth="4" />
      <circle cx="24" cy="24" r="20" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray="125.7" strokeDashoffset={125.7 * (1 - score / 100)} />
    </svg>
    <div
      className="email-health-ring-num"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#14181C',
      }}
    >
      {Math.round(score)}
    </div>
  </div>
);

const EmailHealthScore = ({ mode = 'reveal' }: { mode?: 'reveal' | 'guess' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [state, setState] = useState<'ready' | 'loading' | 'revealed'>('ready');
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const revealScore = () => {
    if (state === 'loading') return;
    setHasInteracted(true);
    setState('loading');
    setScore(0);
    // Demo-only randomization keeps Bad, Medium, and Good reachable in the prototype.
    const targetScore = Math.floor(Math.random() * 101);
    const startedAt = performance.now();

    const animate = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / 1300);
      const eased = 1 - Math.pow(1 - progress, 3);
      setScore(eased * targetScore);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        timeoutRef.current = setTimeout(() => {
          setScore(targetScore);
          setState('revealed');
        }, 220);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  };

  if (!isVisible) return null;

  return (
    <section
      aria-label="Email health score"
      style={{ display: 'flex', alignItems: 'center', gap: '20px', minHeight: '88px', marginBottom: '20px', padding: '16px 24px', border: '1px solid var(--ref-color-neutral-200)', borderRadius: '3px', background: 'var(--sys-color-surface-elevated-default)' }}
    >
      {state === 'ready' && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 400px', minWidth: 0 }}>
            {mode === 'guess' ? (
              <ScoreGauge score={guess} color={scoreZone(guess).color} />
            ) : (
              <div className={`email-health-check-badge${hasInteracted ? ' has-interacted' : ''}`} style={{ width: '48px', height: '48px', flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--ref-color-grass-400)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 10a6 6 0 0 1 12 0c0 4.2 1.6 5.8 1.6 5.8H4.4S6 14.2 6 10Z" />
                  <path d="M10.3 18.5a1.8 1.8 0 0 0 3.4 0" />
                </svg>
              </div>
            )}
            <div style={{ minWidth: 0, flex: '1 1 0%' }}>
              <h2 style={{ margin: '0 0 3px', color: '#272F36', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }}>
                {mode === 'guess' ? 'Estimate your sender reputation score' : 'Your email health score is ready!'}
              </h2>
              <p style={{ margin: 0, color: '#272F36', fontSize: '14px', lineHeight: '20px' }}>
                {mode === 'guess' ? 'Drag the slider to benchmark your estimate against your current score.' : 'Monitors your email, domain, and IP reputation to help you identify and fix deliverability issues.'}
              </p>
              {mode === 'guess' && (
                <div className="email-health-score-legend" aria-label="Score categories">
                  <span><i className="is-bad" />Bad &lt;70</span>
                  <span><i className="is-medium" />Medium 70-85</span>
                  <span><i className="is-good" />Good &gt;85</span>
                </div>
              )}
            </div>
          </div>
          {mode === 'guess' && (
            <div className="email-health-guess-control">
              <input type="range" min="0" max="100" value={guess} onChange={(event) => setGuess(Number(event.currentTarget.value))} aria-label="Guess your email health score" />
            </div>
          )}
          <button type="button" onClick={revealScore} style={{ flex: '0 0 auto', height: '38px', padding: '8px 16px', border: 0, borderRadius: '4px', background: '#1454A8', color: 'white', fontSize: '14px', lineHeight: '22px', cursor: 'pointer' }}>
            {mode === 'guess' ? 'See actual score' : 'See my score'}
          </button>
        </>
      )}

      {state === 'loading' && (
        <>
          <div className="email-health-loading-ring" style={{ width: '48px', height: '48px', flex: '0 0 auto' }}>
            <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
              <circle cx="24" cy="24" r="20" fill="none" stroke="var(--ref-color-neutral-100)" strokeWidth="4" />
              <circle cx="24" cy="24" r="20" fill="none" stroke="var(--ref-color-ocean-500)" strokeWidth="4" strokeLinecap="round" strokeDasharray="31 126" />
            </svg>
          </div>
          <p style={{ flex: '1 1 auto', margin: 0, color: '#272F36', fontSize: '14px', lineHeight: '20px' }}>Calculating your score...</p>
        </>
      )}

      {state === 'revealed' && (() => {
        const zone = scoreZone(score);
        return (
          <>
            <ScoreGauge score={score} color={zone.color} />
            <div style={{ minWidth: 0, flex: '1 1 300px' }}>
              <p style={{ margin: '0 0 3px', color: zone.textColor, fontSize: '16px', fontWeight: 600, lineHeight: '24px' }}>{score}/100: {zone.name}</p>
              <p style={{ margin: 0, color: '#272F36', fontSize: '14px', lineHeight: '20px' }}>
                {zone.caption}
              </p>
              {mode === 'guess' && (
                <p style={{ margin: '4px 0 0', color: '#272F36', fontSize: '14px', lineHeight: '20px' }}>
                  You guessed {guess} — {Math.abs(score - guess)} points off.
                </p>
              )}
            </div>
            <button type="button" style={{ flex: '0 0 auto', height: '38px', padding: '8px 16px', border: '1px solid #1454A8', borderRadius: '4px', background: '#fff', color: '#1454A8', fontSize: '14px', lineHeight: '22px', cursor: 'default' }}>See full report</button>
          </>
        );
      })()}

      <button type="button" onClick={() => setIsVisible(false)} aria-label="Dismiss email health score" style={{ width: '24px', height: '24px', display: 'flex', flex: '0 0 auto', alignItems: 'center', justifyContent: 'center', padding: 0, border: 0, background: 'transparent', color: '#131B20', cursor: 'pointer' }}>
        <Icon name="navigate/close-small-gen2" size={16} />
      </button>
    </section>
  );
};

export const GetStartedGuideContent = ({
  showEmailHealthScore = true,
  emailHealthScoreMode = 'reveal',
}: {
  showEmailHealthScore?: boolean;
  emailHealthScoreMode?: 'reveal' | 'guess';
}) => (
  <>
    {showEmailHealthScore && <EmailHealthScore mode={emailHealthScoreMode} />}
    <div style={{ marginTop: '12px' }}>
      <Tabs tabs={tabs} defaultActiveId="send" />
    </div>

    <div
      style={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
        gap: '16px',
        marginTop: '24px',
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            background: 'var(--sys-color-surface-elevated-default)',
            border: '1px solid var(--sys-color-border-subtle)',
            borderRadius: '4px',
            boxShadow:
              'rgba(10, 22, 70, 0.1) 0px 1px 1px 0px, rgba(10, 22, 70, 0.06) 0px 0px 1px 0px',
            display: 'flex',
            flex: '0 0 calc(33.3333% - 10.6667px)',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: '120px',
            padding: '24px 32px',
            overflow: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              marginRight: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--ref-radius-m)',
              background: 'transparent',
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: card.illustration }}
              style={{
                width: '72px',
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
              }}
            />
          </div>

          <div
            style={{
              borderLeft: '1px solid var(--ref-color-neutral-200)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '72px',
              paddingLeft: '20px',
              flex: '1 1 0%',
              minWidth: 0,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'var(--ref-font-size-12)',
                lineHeight: 'var(--ref-line-height-16)',
                color: 'var(--sys-color-text-muted)',
              }}
            >
              <span style={{ fontWeight: 500 }}>{card.metric}</span>
            </div>

            <div
              style={{
                fontSize: 'var(--ref-font-size-12)',
                lineHeight: 'var(--ref-line-height-16)',
                fontWeight: 500,
                color: 'var(--sys-color-text-muted)',
              }}
            >
              {card.title}
            </div>

            <div
              style={{
                fontSize: 'var(--ref-font-size-20)',
                lineHeight: 'var(--ref-line-height-24)',
                fontWeight: 400,
                color: 'var(--ref-color-neutral-800)',
              }}
            >
              {card.percent}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 2fr) minmax(280px, 1fr)',
        gap: '16px',
        marginTop: '16px',
        alignItems: 'start',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <section
          style={{
            background: 'var(--sys-color-surface-elevated-default)',
            border: '1px solid var(--sys-color-border-subtle)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '70px',
              padding: '16px 24px',
              borderBottom: '1px solid var(--sys-color-border-subtle)',
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                fontSize: 'var(--ref-font-size-16)',
                lineHeight: 'var(--ref-line-height-24)',
                color: 'var(--ref-color-neutral-800)',
              }}
            >
              Sending overview
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  border: '1px solid var(--ref-color-neutral-400)',
                  borderRadius: '4px',
                  padding: '10px 14px',
                  fontSize: 'var(--ref-font-size-14)',
                  color: 'var(--ref-color-neutral-700)',
                }}
              >
                08/18/2026&nbsp;&nbsp; - &nbsp;&nbsp;09/18/2026
              </span>
              <span
                style={{
                  border: '1px solid var(--ref-color-ocean-600)',
                  borderRadius: '4px',
                  padding: '10px 14px',
                  fontSize: 'var(--ref-font-size-14)',
                  color: 'var(--ref-color-ocean-600)',
                }}
              >
                Chart
              </span>
            </div>
          </div>

          <div style={{ padding: '16px 24px 0' }}>
            <svg
              viewBox="0 0 800 250"
              width="100%"
              height="250"
              role="img"
              aria-label="Sending overview chart with no messages sent"
              preserveAspectRatio="none"
            >
              <g stroke="var(--ref-color-neutral-200)" strokeDasharray="3 4">
                <line x1="48" y1="20" x2="780" y2="20" />
                <line x1="48" y1="70" x2="780" y2="70" />
                <line x1="48" y1="120" x2="780" y2="120" />
                <line x1="48" y1="170" x2="780" y2="170" />
                <line x1="48" y1="220" x2="780" y2="220" />
              </g>
              <g
                fill="var(--ref-color-neutral-700)"
                fontSize="12"
                fontFamily="var(--ref-font-family-font)"
                textAnchor="end"
              >
                <text x="40" y="24">4</text>
                <text x="40" y="74">3</text>
                <text x="40" y="124">2</text>
                <text x="40" y="174">1</text>
                <text x="40" y="224">0</text>
              </g>
              <line x1="48" y1="220" x2="780" y2="220" stroke="var(--ref-color-neutral-400)" />
              <polyline
                points="48,220 90,220 132,220 174,220 216,220 258,220 300,220 342,220 384,220 426,220 468,220 510,220 552,220 594,220 636,220 678,220 720,220 762,220"
                fill="none"
                stroke="var(--ref-color-tropical-700)"
                strokeWidth="1"
              />
              {[48, 90, 132, 174, 216, 258, 300, 342, 384, 426, 468, 510, 552, 594, 636, 678, 720, 762].map((x) => (
                <circle key={x} cx={x} cy="220" r="3" fill="var(--sys-color-basic-pure)" stroke="var(--ref-color-tropical-700)" />
              ))}
              <g fill="var(--ref-color-neutral-700)" fontSize="12" fontFamily="var(--ref-font-family-font)" textAnchor="middle">
                <text x="90" y="242">08/19</text>
                <text x="216" y="242">08/23</text>
                <text x="342" y="242">08/27</text>
                <text x="468" y="242">08/31</text>
                <text x="594" y="242">09/04</text>
                <text x="720" y="242">09/08</text>
              </g>
            </svg>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              padding: '16px',
              borderTop: '1px solid var(--sys-color-border-subtle)',
              fontSize: 'var(--ref-font-size-12)',
              color: 'var(--sys-color-text-muted)',
            }}
          >
            {[
              ['var(--ref-color-grass-500)', 'Accepted'],
              ['var(--ref-color-ocean-500)', 'Delivered'],
              ['var(--ref-color-pumpkin-500)', 'Failed (all)'],
              ['var(--ref-color-tropical-700)', 'Opened'],
            ].map(([color, label]) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '3px', background: color }} />
                {label}
              </span>
            ))}
          </div>
        </section>

        <section
          style={{
            background: 'var(--sys-color-surface-elevated-default)',
            border: '1px solid var(--sys-color-border-subtle)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', borderBottom: '1px solid var(--sys-color-border-subtle)' }}>
            {['Sending Domains', 'Open Tickets', 'Dedicated IPs'].map((label, index) => (
              <span
                key={label}
                style={{
                  padding: '12px 16px',
                  borderBottom: index === 0 ? '2px solid var(--ref-color-ocean-600)' : '2px solid transparent',
                  fontSize: 'var(--ref-font-size-14)',
                  color: index === 0 ? 'var(--ref-color-ocean-600)' : 'var(--sys-color-text-muted)',
                }}
              >
                {label}
              </span>
            ))}
          </div>
          {['askwhy.design', 'sandbox77af8bcb8b814fcdaf4932e4e65fce0d.mailgun.org'].map((domain, index) => (
            <div
              key={domain}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                borderBottom: '1px solid var(--sys-color-border-subtle)',
                fontSize: 'var(--ref-font-size-14)',
                color: 'var(--ref-color-ocean-600)',
              }}
            >
              <span style={{ color: index === 0 ? 'var(--ref-color-honey-400)' : 'var(--ref-color-tropical-500)' }}>●</span>
              {domain}
              <span style={{ marginLeft: 'auto', color: 'var(--ref-color-ocean-600)' }}>...</span>
            </div>
          ))}
          <div style={{ padding: '18px 24px', color: 'var(--ref-color-ocean-600)', fontSize: 'var(--ref-font-size-14)' }}>
            See all 2 domains
          </div>
        </section>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <section
          style={{
            background: 'var(--sys-color-surface-elevated-default)',
            border: '1px solid var(--sys-color-border-subtle)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--sys-color-border-subtle)' }}>
            <div>
              <div style={{ fontSize: 'var(--ref-font-size-20)', color: 'var(--ref-color-neutral-800)' }}>Bob</div>
              <div style={{ marginTop: '4px', fontSize: 'var(--ref-font-size-12)', color: 'var(--ref-color-ocean-600)' }}>Account Settings</div>
            </div>
            <div style={{ width: '48px', height: '48px', border: '1px solid var(--ref-color-neutral-800)', borderRadius: '50%', background: 'var(--ref-color-raspberry-100)' }} />
          </div>
          <div style={{ padding: '18px 24px' }}>
            <div style={{ marginBottom: '18px', fontSize: 'var(--ref-font-size-14)', color: 'var(--ref-color-neutral-800)' }}>Plan details</div>
            {[
              ['Mailgun plan:', 'Free'],
              ['Email sent:', '0 / 3,000'],
              ['Email preview:', 'Disabled'],
              ['Inbox placement:', 'Disabled'],
              ['Validations:', 'Disabled'],
              ['Dedicated IPs:', '0'],
              ['Log retention:', '1 day'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '16px', fontSize: 'var(--ref-font-size-14)', color: 'var(--ref-color-neutral-700)' }}>
                <span>{label}</span><span>{value}</span>
              </div>
            ))}
            <div style={{ marginTop: '24px', color: 'var(--ref-color-ocean-600)', fontSize: 'var(--ref-font-size-14)' }}>Upgrade</div>
          </div>
        </section>

        <section style={{ background: 'var(--sys-color-surface-elevated-default)', border: '1px solid var(--sys-color-border-subtle)', borderRadius: '4px', padding: '4px 16px' }}>
          {['API keys', 'Help center', 'API documentation', 'Postbin', 'HTML email templates'].map((label) => (
            <div key={label} style={{ padding: '14px 0', borderBottom: '1px solid var(--ref-color-neutral-100)', color: 'var(--ref-color-ocean-600)', fontSize: 'var(--ref-font-size-14)' }}>
              {label}
            </div>
          ))}
        </section>
      </div>
    </div>
  </>
);

export const GetStartedGuide = () => (
  <Page pageHeaderProps={{ title: 'Good morning, Bob!' }}>
    <GetStartedGuideContent />
  </Page>
);

export default GetStartedGuide;
