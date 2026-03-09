import Image from "next/image";

async function getData() {
  // หน่วงเวลา 3 วินาที (3000ms)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { message: "ข้อมูลโหลดเสร็จแล้ว!" };
}

export default async function Home() {
  const data = await getData();

  return <div>Home</div>;
}
