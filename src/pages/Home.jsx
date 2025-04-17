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
  Computer,
  Server,
  Network,
  AppWindow,
  Printer,
  Download,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
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
              <div className="flex flex-col items-center p-5 hover:bg-black/20">
                <Settings className="h-8 w-8 text-blue-400 mb-2" />
                <h3 className="text-lg font-medium text-white">ปัญหาต่างๆเกี่ยวกับไอที</h3>
                <p className="text-sm text-slate-400 mt-1">หัวข้อปัญหาต่างๆที่พบได้ภายในบริษัท</p>
              </div>
              <div className="flex flex-col items-center p-5 hover:bg-black/20">
                <AlertCircle className="h-8 w-8 text-red-400 mb-2" />
                <h3 className="text-lg font-medium text-white">การแก้ไขปัญหา</h3>
                <p className="text-sm text-slate-400 mt-1">วิธีแก้ปัญหาทีละขั้นตอนสำหรับปัญหาทั่วไป</p>
              </div>
              <div className="flex flex-col items-center p-5 hover:bg-black/20">
                <WrenchIcon className="h-8 w-8 text-yellow-400 mb-2" />
                <h3 className="text-lg font-medium text-white">การบำรุงรักษาเชิงป้องกัน</h3>
                <p className="text-sm text-slate-400 mt-1">รักษาระบบของคุณให้ทำงานได้อย่างราบรื่น</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-12 mb-10">
              <a
                href="#problem"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-12 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
              >
                เริ่มกันเลย
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#line"
                className="inline-flex h-12 items-center justify-center rounded-lg border bg-black/20 border-blue-600 px-12 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
              >
                ติดต่อเรา
                <PhoneCall className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="container mx-auto py-32">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-md sm:text-5xl font-medium text-blue-800">หมวดหมู่ปัญหา</h1>
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
        </h1>
        <p className="mt-3 text-slate-500 md:text-lg text-center">คุณกำลังพบปัญหาเหล่านี้อยู่ใช่หรือไม่ ?</p>
        <div className="flex justify-center px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 mt-10 w-full max-w-6xl gap-5">
            <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-lg">
              <Laptop className="h-8 w-8 text-blue-400 mb-5" />
              <h3 className="text-lg font-bold text-blue-800">คอมพิวเตอร์เปิดไม่ติด</h3>
              <div className="mt-5">
                <NavLink
                  to={"/hardware"}
                  className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-500  px-5 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-lg">
              <Server className="h-8 w-8 text-red-400 mb-5" />
              <h3 className="text-lg font-bold text-blue-800">โปรแกรมค้างหรือไม่ตอบสนอง</h3>
              <div className="mt-5">
                <NavLink
                  to={"/software"}
                  className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-500  px-5 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-lg">
              <Wifi className="h-8 w-8 text-yellow-400 mb-5" />
              <h3 className="text-lg font-bold text-blue-800">เชื่อมต่อ Wi-Fi ไม่ได้</h3>
              <div className="mt-5">
                <NavLink
                  to={"/network"}
                  className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-500  px-5 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col items-center p-5 bg-white shadow-md rounded-lg">
              <Printer className="h-8 w-8 text-green-400 mb-5" />
              <h3 className="text-lg font-bold text-blue-800">เครื่องปริ้นเตอร์ไม่ทำงาน</h3>
              <div className="mt-5">
                <NavLink
                  to={"/other"}
                  className="inline-flex h-10 items-center justify-center rounded-lg border bg-blue-500  px-5 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 group"
                >
                  อ่านเพิ่มเติม
                  <Book className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-md sm:text-5xl font-medium text-blue-800">ปัญหาที่พบบ่อย</h1>
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
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
              <div className="flex justify-center lg:justify-normal">
                <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                  <TriangleAlert className="text-blue-900" size={20} /> Hardware Problem
                </span>
              </div>
              <h1 className="text-2xl font-medium text-blue-800">ปัญหาด้านฮาร์ดแวร์</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น คอมพิวเตอร์เปิดไม่ติด, หน้าจอไม่แสดงผล, คีย์บอร์ดหรือเมาส์ใช้งานไม่ได้ <br /> ฮาร์ดดิสก์มีปัญหา,
                เครื่องปริ้นเตอร์ไม่ทำงาน
              </p>
            </div>
          </div>

          {/* ปัญหาด้าน Software */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="flex justify-center lg:justify-normal">
                <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                  <TriangleAlert className="text-blue-900" size={20} /> Software Problem
                </span>
              </div>

              <h1 className="text-2xl font-medium text-blue-800">ปัญหาด้านซอฟต์แวร์</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น โปรแกรมค้างหรือทำงานผิดปกติ, ไม่สามารถติดตั้งโปรแกรมได้, ระบบปฏิบัติการมีข้อผิดพลาด <br /> ไวรัสหรือมัลแวร์,
                การใช้งานโปรแกรมเฉพาะทางมีปัญหา
              </p>
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
              <div className="flex justify-center lg:justify-normal">
                <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                  <TriangleAlert className="text-blue-900" size={20} /> Network Problem
                </span>
              </div>
              <h1 className="text-2xl font-medium text-blue-800">ปัญหาด้านเน็ตเวิร์ค</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้, สัญญาณ Wi-Fi อ่อนหรือไม่เสถียร <br /> เข้าถึงเว็บไซต์หรือแอปพลิเคชันบางอย่างไม่ได้
                ระบบเครือข่ายภายในขัดข้อง
              </p>
            </div>
          </div>

          {/* ปัญหาอื่นๆ (สามารถเพิ่มได้ตามต้องการ) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20">
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="flex justify-center lg:justify-normal">
                <span className="flex w-fit items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-1">
                  <TriangleAlert className="text-blue-900" size={20} /> Other Problem
                </span>
              </div>
              <h1 className="text-2xl font-medium text-blue-800">ปัญหาอื่นๆ</h1>
              <p className="text-slate-600 mt-2 md:text-lg">
                เช่น ปัญหาการเข้าสู่ระบบ NAS, การลืมรหัสผ่าน, ปัญหาเกี่ยวกับบัญชีผู้ใช้งาน <br /> การสำรองข้อมูลและกู้คืนข้อมูล
              </p>
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

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-md sm:text-5xl font-medium text-blue-800">การบำรุงรักษา</h1>
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
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
            <h3 className="text-xl font-bold mb-2 text-blue-800">จัดการข้อมูลให้เป็นระเบียบ</h3>
            <p className="text-black">ไม่ควรเก็บข้อมูลไว้ที่หน้า Desktop ถ้ามีปัญหาอาจทำให้ข้อมูลหาย ควรเก็บไว้ที่ไดฟ์กลางหรือแฟรชไดฟ์</p>
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
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <section className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-md sm:text-5xl font-medium text-blue-800">โปรแกรม RustDesk</h1>
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
        </h1>
        <p className="mt-3 text-slate-500 md:text-lg text-center mb-10">
          คือโปรแกรมรีโมทเครื่องเราไปยังเครื่องผู้อื่นที่ใช้งานได้ <span className="text-green-500 font-bold">ฟรี 100%</span>
        </p>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-2xl font-medium text-blue-800">รายละเอียดโปรแกรม</h1>
            <p className="text-slate-600 mt-2 md:text-lg">
              เป็นโปรแกรม Remote Desktop แบบโอเพ่นซอร์สที่ออกแบบมาให้ผู้ใช้สามารถเข้าถึงและควบคุมเครื่องคอมพิวเตอร์จากระยะไกลได้อย่างปลอดภัย
            </p>
            <div className="flex justify-center lg:justify-normal items-center mt-2 gap-2">
              <img
                src="https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/rustdesk-logo.png"
                width={25}
              />
              <p className="font-bold">ดาวน์โหลด</p>
            </div>
            <div className="mt-3 flex justify-center lg:justify-normal gap-2">
              <a
                href="https://github.com/rustdesk/rustdesk/releases/download/1.3.9/rustdesk-1.3.9-x86_64.exe"
                className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-blue-500 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <img
                  src="./home/pc.png"
                  width={20}
                  className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="https://github.com/rustdesk/rustdesk/releases/download/1.3.9/rustdesk-1.3.9-universal-signed.apk"
                className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-blue-500 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <img
                  src="./home/ad.png"
                  width={20}
                  className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/rustdesk-remote-desktop/id1581225015"
                className="group inline-flex h-12 items-center justify-center rounded-lg border-2 border-blue-500 px-6 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
              >
                <img
                  src="./home/ios.png"
                  width={20}
                  className="transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                />
              </a>
            </div>
          </div>

          <img
            src="./home/rustdesk.png"
            alt="Other Issues"
            className="w-full md:w-1/2 h-auto rounded-md shadow-md mb-4 md:mb-0 md:ml-8 order-1 md:order-2"
          />
        </div>
      </section>

      <section className="container mx-auto py-20">
  
        {/* <p className="mt-1 text-slate-500 md:text-lg text-center mb-10">ตั้งค่าภาพหน้าจอเคลื่อน</p> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-2xl font-medium text-blue-800">ตั้งค่าภาพหน้าจอเคลื่อน</h1>
            <p className="text-slate-600 mt-2 md:text-lg">1.คลิกรูปหน้าจอ</p>
            <p className="text-slate-600 mt-2 md:text-lg">2.เลือก Scale Adaptive</p>
            <p className="text-red-600 font-bold">หากพบปัญหาเกี่ยวกับโปรแกรมติดต่อฝ่ายไอที</p>
          </div>
          <img
            src="./home/rustdesk2.png"
            alt="Other Issues"
            className="w-full md:w-1/2 h-auto rounded-md shadow-md mb-4 md:mb-0 md:ml-8 order-1 md:order-2"
          />
        </div>
      </section>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}

      <section id="line" className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center flex items-center justify-center">
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
          <h1 className="mx-5 text-md sm:text-5xl font-medium text-blue-800">ส่งข้อความหาเรา</h1>
          <span className="w-0 sm:w-32 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></span>
        </h1>
        <div className="flex flex-wrap justify-center gap-10 items-center mt-10">
        <div>
            <img src="https://play-lh.googleusercontent.com/jSuWySmy_T3qzqyTkwtffwTeGLGnT5AfA00JFMlBNW3Hq8WXvFfXz7cpi70H2Pqra8H3" width={200} className="rounded-full" />
          </div>
          <h1 className="text-4xl font-bold">@489hwjzq</h1>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
