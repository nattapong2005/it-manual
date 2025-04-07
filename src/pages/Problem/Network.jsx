import { CircleCheck } from "lucide-react";
import React from "react";

const Network = () => {
  return (
    <>
      <section className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center ">ปัญหาเกี่ยวกับ<span className="text-blue-700">เน็ตเวิร์ค</span></h1>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-5 items-center py-10">
          <div className="grid grid-cols-1">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./network/1.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">เชื่อมต่อ Wi-Fi ไม่ได้</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ตรวจสอบรหัสผ่านให้ถูกต้อง
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ปิด-เปิด Wi-Fi บนอุปกรณ์
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> รีสตาร์ทอุปกรณ์ของคุณ
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 py-20">
              <img src="./network/2.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">อินเทอร์เน็ตช้า</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ถอดสายแลนแล้วเสียบใหม่
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} />
                    หากยังไม่ได้กรุณาติดต่อฝ่ายไอที
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./network/3.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">ไม่สามารถเข้าถึงบางเว็บไซต์</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ลองปิดแอนตี้ไวรัสชั่วคราว
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ใช้เบราว์เซอร์อื่นเพื่อทดสอบ
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

export default Network;
