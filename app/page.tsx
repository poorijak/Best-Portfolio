import LoadingContent from "@/components/loading/LoadingContent";
import Image from "next/image";

async function getData() {
  // หน่วงเวลา 3 วินาที (3000ms)
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { message: "ข้อมูลโหลดเสร็จแล้ว!" };
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <LoadingContent />
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">Home Page Content</h1>
        <p className="mt-4 text-xl">{data.message}</p>
      </div>
    </main>
  );
}
