import { CircleCheck } from "lucide-react";
import React from "react";

const Software = () => {
  return (
    <>
      <section className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center ">ปัญหาเกี่ยวกับ<span className="text-blue-700">ซอฟต์แวร์</span></h1>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-5 items-center py-10">
          <div className="grid grid-cols-1">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./software/1.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">โปรแกรมค้างหรือไม่ตอบสนอง</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> กด Ctrl + Alt + Delete แล้วเลือก Task Manager
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> เลือกโปรแกรมที่ค้างแล้วกด End Task
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> รีสตาร์ทเครื่องเพื่อเริ่มระบบใหม่
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 py-20">
              <img src="./software/2.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">เปิดโปรแกรมไม่ได้</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ถอนการติดตั้งแล้วติดตั้งโปรแกรมใหม่
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ปิดแอนตี้ไวรัสชั่วคราวแล้วลองเปิดอีกครั้ง
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} />
                    ตรวจสอบว่ามีอัพเดตโปรแกรมหรือไม่
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./software/3.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">คอมพิวเตอร์ทำงานช้าผิดปกติ</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ปิดโปรแกรมที่ไม่จำเป็น
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> รีสตาร์ทคอมพิวเตอร์
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} />
                    หากยังใช้งานไม่ได้กรุณาติดต่อฝ่ายไอที
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Software;
