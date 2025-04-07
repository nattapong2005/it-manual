import { CircleCheck } from "lucide-react";
import React from "react";

const Hardware = () => {
  return (
    <>
      <section className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center ">ปัญหาเกี่ยวกับ<span className="text-blue-700">คอมพิวเตอร์</span></h1>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-5 items-center py-10">
          <div className="grid grid-cols-1">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./hardware/1.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">เครื่องคอมพิวเตอร์เปิดไม่ติด</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ตรวจสอบว่าสายไฟเสียบเข้ากับปลั๊กและตัวเครื่องแน่นหรือไม่
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ลองเสียบปลั๊กกับช่องอื่น หรือเปลี่ยนสายไฟ
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ถ้าเป็นแล็ปท็อป ให้เสียบสายชาร์จและลองเปิดใหม่
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 py-20">
              <img src="./hardware/2.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">หน้าจอไม่แสดงภาพ</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ตรวจสอบและเสียบสาย HDMI หรือ VGA ให้แน่น
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ลองเพิ่มความสว่างโดยใช้ปุ่มที่หน้าจอหรือคีย์บอร์ด
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} />
                    ลองรีสตาร์ทเครื่องและตรวจสอบอีกครั้ง
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
              <img src="./hardware/3.jpeg" className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8 px-5 sm:px-0" />
              <div>
                <h1 className="text-3xl font-bold mb-2 text-blue-800">เมาส์หรือคีย์บอร์ดใช้งานไม่ได้</h1>
                <h2 className="text-xl font-bold mb-2">วิธีแก้ไข</h2>
                <ul>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> ถอดสายแล้วเสียบใหม่ หรือเปลี่ยนช่องเสียบ
                  </li>
                  <li className="flex gap-1 items-center">
                    <CircleCheck className="text-green-600" size={19} /> หากเป็นอุปกรณ์ไร้สาย ลองเปลี่ยนแบตเตอรี่
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

export default Hardware;
