import React from "react";
import { Mail, Phone, MapPin, Clock, Heart, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Masaru Marketing</h3>
            <p className="text-slate-300 mb-4">สร้างเพื่อให้ความรู้กับพนักงานภายในบริษัท</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-slate-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-slate-300">LINE OA: @489hwjzq</span>
              </li>
            </ul>
          </div>

          {/* Support Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">เวลาทำงาน</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="mr-2 text-slate-400 flex-shrink-0 mt-1" size={18} />
                <div className="text-slate-300">
                  <p className="font-semibold">จันทร์ - เสาร์</p>
                  <p>8:30 น. - 17:30 น.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">อื่นๆ</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Wrench className="mr-2 text-slate-400 flex-shrink-0 mt-1" size={18} />
                <div className="text-slate-300">
                  <NavLink to={"/crack"} className="font-semibold">รวมโปรแกรม Crack</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-600 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Masaru Marketing All rights reserved.</p>
          <p className="text-slate-400 text-sm flex gap-2 items-center">Made with loves <Heart size={20}/> by IT Dev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
