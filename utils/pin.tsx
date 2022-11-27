import * as React from "react";

function Pin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 30.562c1.507 0 2.795-.522 3.865-1.567 1.069-1.046 1.604-2.322 1.604-3.829 0-1.506-.535-2.795-1.604-3.864-1.07-1.07-2.358-1.604-3.865-1.604-1.458 0-2.722.535-3.792 1.604-1.07 1.07-1.604 2.358-1.604 3.864 0 1.459.523 2.723 1.568 3.792 1.045 1.07 2.321 1.604 3.828 1.604zm0 31.063c-8.167-7-14.28-13.465-18.339-19.396C2.602 36.299.573 30.805.573 25.749c0-7.68 2.455-13.78 7.364-18.301C12.848 2.927 18.535.667 25 .667c6.465 0 12.165 2.272 17.099 6.817C47.033 12.03 49.5 18.118 49.5 25.75c0 5.055-2.03 10.548-6.089 16.479C39.352 48.159 33.215 54.625 25 61.625z" />
    </svg>
  );
}

export default Pin;
