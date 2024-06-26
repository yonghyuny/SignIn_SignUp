export const BASE_SIZE = 16; // 기본 단위 rem (1rem = 16px, 브라우저 기본 폰트 크기 기준)

export const COLORS = {
  PRIMARY: "#5e35b1", // 메인 보라색
  SECONDARY: "#f0ebf7", // 보조1 연보라색
  THIRD: "#1e88e5", // 보조2 파란색
  FOURTH: "#a1d4fa", // 보조3 연파란색
  TEXT: {
    PRIMARY: "#FFFFFF", // 기본 폰트 색상 (흰색, 어두운 배경과 대비)
    SECONDARY: "#0a0e0c", // 보조 폰트 색상 (밝은 흰색)
  },
  BORDER: {
    PRIMARY: "#FFFFFF", // 기본 폰트 색상 (흰색, 어두운 배경과 대비)
    SECONDARY: "#0a0e0c", // 보조 폰트 색상 (밝은 흰색)
  },
  BUTTON: {
    PRIMARY: "#5e35b1", // 기본 버튼 색상 (메인 색상과 동일)
    SECONDARY: "#f0ebf7", // 보조 버튼 색상 (보조 색상 1과 동일)
  },
};

export const SIZES = {
  FONT_SIZE: {
    EXTRA_EXTRA_SMALL: `${BASE_SIZE * 0.625}px`, // 0.625x (10px)
    EXTRA_SMALL: `${BASE_SIZE * 0.75}px`, // 0.75x (12px)
    SMALL: `${BASE_SIZE * 0.875}px`, // 0.875x (14px)
    MEDIUM: `${BASE_SIZE}px`, // 1x (16px)
    LARGE: `${BASE_SIZE * 1.125}px`, // 1.125x (18px)
    EXTRA_LARGE: `${BASE_SIZE * 1.25}px`, // 1.25x (20px)
    EXTRA_EXTRA_LARGE: `${BASE_SIZE * 1.5}px`, // 1.5x (24px)
    TRIPLE_EXTRA_LARGE: `${BASE_SIZE * 2}px`, // 2x (32px)
  },
  ICON_SIZE: {
    SMALL: `${BASE_SIZE}px`, // 1x (16px)
    MEDIUM: `${BASE_SIZE * 1.5}px`, // 1.5x (24px)
    LARGE: `${BASE_SIZE * 2}px`, // 2x (32px)
  },
};
