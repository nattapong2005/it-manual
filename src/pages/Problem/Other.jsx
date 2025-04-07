import { CircleCheck } from "lucide-react";
import React from "react";

const Other = () => {
  return (
    <>
      <section className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center ">ปัญหา<span className="text-blue-700">อื่นๆ</span></h1>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-5 items-center py-10">
          <div className="grid grid-cols-1">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./other/1.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">ปัญหาการพิมพ์จากเครื่องพิมพ์</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ตรวจสอบหมึกและกระดาษ
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ปิด-เปิดเครื่องพิมพ์และคอมพิวเตอร์
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> หากยังใช้งานไม่ได้กรุณาติดต่อฝ่ายไอที
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 py-20">
              <img src="./other/2.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">เสียงไม่ออกจากลำโพงหรือหูฟัง</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ตรวจสอบว่าเสียบสายให้แน่น
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} />
                    หากยังไม่ได้กรุณาติดต่อฝ่ายไอที
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./other/3.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">เกิดข้อผิดพลาด ไม่ทราบสาเหตุ</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> รีสตาร์ทเครื่องเพื่อรีเซ็ตระบบ
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ค้นหาข้อความแสดงข้อผิดพลาดทางออนไลน์เพื่อหาวิธีแก้ไขเพิ่มเติม
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

export default Other;
