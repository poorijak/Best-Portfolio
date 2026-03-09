import localFont from "next/font/local";

// 1. Font Advercase (แยกไฟล์ Regular/Bold)
export const advercase = localFont({
  src: [
    {
      path: "./Advercase/Advercase-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Advercase/Advercase-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-advercase",
  display: "swap",
});

// 2. Font Saans Collection (Variable Font)
export const saans = localFont({
  src: "./San/SaansCollectionVF-TRIAL.woff2", // ชี้ไปที่ไฟล์ VF ตัวเดียว
  weight: "100 900", // กำหนด range น้ำหนักที่ font รองรับ
  variable: "--font-saans",
  display: "swap",
});
