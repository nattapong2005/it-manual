import React, { useState } from "react";
import Layout from "../components/Layout";
import issue from "../data/problem.json";
import {
  ArrowRight,
  HardDrive,
  WrenchIcon,
  AlertCircle,
  TriangleAlert,
  PhoneCall,
  Book,
  Settings,
  Wifi,
  Monitor,
  CheckCircle,
  CheckCircle2,
  Laptop,
} from "lucide-react";

const Home = () => {
  const troubleshootingGuides = [
    {
      id: "hardware-issues",
      title: "ปัญหาด้านฮาร์ดแวร์",
      icon: <HardDrive className="h-5 w-5" />,
      steps: [
        "ตรวจสอบการเชื่อมต่อสายไฟและปลั๊กไฟ",
        "ตรวจสอบว่าเปิดสวิตช์ที่ Power Supply แล้ว",
        "ลองถอดและเสียบสายไฟใหม่",
        "ตรวจสอบว่าจอภาพเปิดอยู่และเชื่อมต่อกับคอมพิวเตอร์",
      ],
    },
    {
      id: "software-issues",
      title: "ปัญหาด้านซอฟต์แวร์",
      icon: <Laptop className="h-5 w-5" />,
      steps: [
        "รีสตาร์ทคอมพิวเตอร์",
        "ตรวจสอบว่าโปรแกรมที่ใช้งานมีการอัปเดตล่าสุด",
        "ลองปิดโปรแกรมที่ทำงานช้าแล้วเปิดใหม่",
        "ตรวจสอบการตั้งค่าของซอฟต์แวร์ที่ใช้งาน",
      ],
    },
    {
      id: "network-issues",
      title: "ปัญหาด้านเน็ตเวิร์ค",
      icon: <Wifi className="h-5 w-5" />,
      steps: [
        "รีสตาร์ทเราเตอร์",
        "ตรวจสอบการเชื่อมต่อสายแลน",
        "ตรวจสอบว่าเปิดใช้งาน Wi-Fi บนอุปกรณ์แล้ว",
        "ติดต่อแผนกไอทีหากยังไม่สามารถเชื่อมต่อได้",
      ],
    },
    {
      id: "other-issues",
      title: "ปัญหาอื่นๆ",
      icon: <Monitor className="h-5 w-5" />,
      steps: [
        "ตรวจสอบการเชื่อมต่อกับ NAS",
        "ตรวจสอบบัญชีผู้ใช้งานและสิทธิ์การเข้าถึง",
        "สำรองข้อมูลที่สำคัญและทำการกู้คืนข้อมูลจากแบ็คอัพ",
        "ตรวจสอบสถานะการเชื่อมต่อกับเซิร์ฟเวอร์การสำรองข้อมูล",
      ],
    },
  ];

  return (
    <Layout>
      <section className="relative min-h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="container  px-4 md:px-6 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div>
              <img src="./logo/logo.png" className="zoom-logo" width={400} />
            </div>

            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-3xl ">
              คู่มือ
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">การบำรุงรักษา</span>
              และปัญหาอุปกรณ์ไอที
            </h1>

            <p className="max-w-[800px] text-slate-400 md:text-xl lg:text-2xl mt-4">วิธีแก้ปัญหาไอทีที่พบบ่อยเบื้องต้น</p>
            <div className="w-full max-w-md h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full  opacity-50"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">
              <div className="flex flex-col items-center p-5 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-black/20">
                <Settings className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="text-lg font-medium text-white">ปัญหาต่างๆเกี่ยวกับไอที</h3>
                <p className="text-sm text-slate-400 mt-1">หัวข้อปัญหาต่างๆที่พบได้ภายในบริษัท</p>
              </div>
              <div className="flex flex-col items-center p-5 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-black/20">
                <AlertCircle className="h-8 w-8 text-red-400 mb-2" />
                <h3 className="text-lg font-medium text-white">การแก้ไขปัญหา</h3>
                <p className="text-sm text-slate-400 mt-1">วิธีแก้ปัญหาทีละขั้นตอนสำหรับปัญหาทั่วไป</p>
              </div>
              <div className="flex flex-col items-center p-5 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-black/20">
                <WrenchIcon className="h-8 w-8 text-yellow-400 mb-2" />
                <h3 className="text-lg font-medium text-white">การบำรุงรักษาเชิงป้องกัน</h3>
                <p className="text-sm text-slate-400 mt-1">รักษาระบบของคุณให้ทำงานได้อย่างราบรื่น</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 mb-10 sm:mb-0">
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-12 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
              >
                เริ่มกันเลย
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-lg border bg-black/20 border-blue-600 px-12 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
              >
                ติดต่อเรา
                <PhoneCall className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-5xl font-medium text-blue-800">ปัญหาที่พบบ่อย</h1>
          <span className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
        </h1>
        <p className="mt-3 text-slate-500 md:text-lg text-center">หัวข้อปัญหาต่างๆ ที่พบได้บ่อยภายในบริษัท</p>

        <div className="mt-10 grid grid-cols-1 gap-8">
          {/* ปัญหาด้าน Hardware */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
            <img
              src="./home/hardware.jpeg"
              alt="Hardware Issue"
              className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                <TriangleAlert className="text-blue-900" size={20} /> Hardware Problem
              </span>
              <h1 className="text-2xl font-medium text-blue-800">ปัญหาด้านฮาร์ดแวร์</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น คอมพิวเตอร์เปิดไม่ติด, หน้าจอไม่แสดงผล, คีย์บอร์ดหรือเมาส์ใช้งานไม่ได้ <br /> ฮาร์ดดิสก์มีปัญหา,
                เครื่องปริ้นเตอร์ไม่ทำงาน
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-lg border bg-blue-500  px-5 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* ปัญหาด้าน Software */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                <TriangleAlert className="text-blue-900" size={20} /> Software Problem
              </span>

              <h1 className="text-2xl font-medium text-blue-800">ปัญหาด้านซอฟต์แวร์</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น โปรแกรมค้างหรือทำงานผิดปกติ, ไม่สามารถติดตั้งโปรแกรมได้, ระบบปฏิบัติการมีข้อผิดพลาด <br /> ไวรัสหรือมัลแวร์,
                การใช้งานโปรแกรมเฉพาะทางมีปัญหา
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-lg border bg-blue-500  px-5 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <img
              src="./home/software.jpeg"
              alt="Software Issue"
              className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:ml-8 order-1 md:order-2"
            />
          </div>

          {/* ปัญหาด้าน Network */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
            <img
              src="./home/network.jpeg"
              alt="Network Issue"
              className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:mr-8"
            />
            <div className="text-center md:text-left">
              <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                <TriangleAlert className="text-blue-900" size={20} /> Network Problem
              </span>
              <h1 className="text-2xl font-medium text-blue-800">ปัญหาด้านเน็ตเวิร์ค</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้, สัญญาณ Wi-Fi อ่อนหรือไม่เสถียร <br /> เข้าถึงเว็บไซต์หรือแอปพลิเคชันบางอย่างไม่ได้
                ระบบเครือข่ายภายในขัดข้อง
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-lg border bg-blue-500  px-5 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* ปัญหาอื่นๆ (สามารถเพิ่มได้ตามต้องการ) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                <TriangleAlert className="text-blue-900" size={20} /> Other Problem
              </span>
              <h1 className="text-2xl font-medium text-blue-800">ปัญหาอื่นๆ</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น ปัญหาการเข้าสู่ระบบ NAS, การลืมรหัสผ่าน, ปัญหาเกี่ยวกับบัญชีผู้ใช้งาน <br /> การสำรองข้อมูลและกู้คืนข้อมูล
              </p>
              <div className="mt-2">
                <a
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-lg border bg-blue-500  px-5 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <img
              src="./home/other.jpeg"
              alt="Other Issues"
              className="w-full md:w-1/3 h-auto rounded-md shadow-md mb-4 md:mb-0 md:ml-8 order-1 md:order-2"
            />
          </div>
        </div>
      </section>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-5xl font-medium text-blue-800">การแก้ไขปัญหา</h1>
          <span className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
        </h1>
        <p className="mt-3 text-slate-500 md:text-lg text-center mb-10">รวบรวมการแก้ไขปัญหาเบื้องต้นเกี่ยวกับไอที</p>
        <div className="container mx-auto px-4">
          {/* Troubleshooting Guides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {troubleshootingGuides.map((guide) => (
              <div
                key={guide.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-700">{guide.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>

                {/* <a
                  // href={`/troubleshooting/${guide.id}`}
                  href="#"
                  className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 gap-1 group mt-2"
                >
                  ดูรายละเอียดเพิ่มเติม
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-5xl font-medium text-blue-800">การบำรุงรักษา</h1>
          <span className="w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
        </h1>
        <p className="mt-3 text-slate-500 md:text-lg text-center mb-10">คำแนะนำง่ายๆ ในการดูแลอุปกรณ์ไอทีให้ใช้งานได้ยาวนาน</p>
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border border-blue-800 backdrop-blur-sm p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-800">ทำความสะอาดอุปกรณ์สม่ำเสมอ</h3>
            <p className="text-black">ทำความสะอาดคีย์บอร์ด เมาส์ และหน้าจอเป็นประจำ เพื่อป้องกันฝุ่นและสิ่งสกปรกสะสม</p>
          </div>

          <div className="border border-blue-800 backdrop-blur-sm p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-800">อัพเดทซอฟต์แวร์อยู่เสมอ</h3>
            <p className="text-black">อัพเดทระบบปฏิบัติการและโปรแกรมต่างๆ ให้เป็นเวอร์ชันล่าสุดเพื่อความปลอดภัยและประสิทธิภาพ</p>
          </div>

          <div className="border border-blue-800 backdrop-blur-sm p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-800">สำรองข้อมูลเป็นประจำ</h3>
            <p className="text-black">สำรองข้อมูลสำคัญอย่างสม่ำเสมอ เพื่อป้องกันการสูญหายของข้อมูลเมื่อเกิดปัญหา</p>
          </div>

          <div className="border border-blue-800 backdrop-blur-sm p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-800">ใช้เครื่องสำรองไฟ (UPS)</h3>
            <p className="text-black">ใช้เครื่องสำรองไฟเพื่อป้องกันความเสียหายจากไฟตกหรือไฟดับ</p>
          </div>

          <div className="border border-blue-800 backdrop-blur-sm p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-800">ตรวจสอบไวรัสเป็นประจำ</h3>
            <p className="text-black">สแกนไวรัสและมัลแวร์เป็นประจำ เพื่อป้องกันการติดไวรัสและการโจมตีทางไซเบอร์</p>
          </div>

          <div className="border border-blue-800 backdrop-blur-sm p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-blue-800 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-blue-800">จัดการพื้นที่จัดเก็บข้อมูล</h3>
            <p className="text-black">ลบไฟล์ที่ไม่จำเป็นและจัดระเบียบพื้นที่จัดเก็บข้อมูลเพื่อเพิ่มประสิทธิภาพการทำงาน</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
