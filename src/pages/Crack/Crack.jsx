import React from "react";

const Crack = () => {
  return (
    <section className="container mx-auto py-32 px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">รวมโปรแกรม Crack</h1>
        <p className="text-center text-red-600"><span className="font-bold text-red-700">คำแนะนำ</span> ปิดโปรแกรมป้องกันไวรัสทุกชนิดก่อนดาวน์โหลด</p>
      </div>

      {/* Program 1 */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-16 space-y-6 sm:space-y-0 sm:space-x-8">
        <a target="_blank" href="https://gist.github.com/rvrsh3ll/0810c6ed60e44cf7932e4fbae25880df" className="flex-shrink-0">
          <img
            src="https://images.icon-icons.com/2235/PNG/512/windows_os_logo_icon_134674.png"
            alt="Windows OS logo"
            className="w-48 h-48 object-cover"
          />
        </a>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Windows 10 & 11</h2>
          <div className="flex gap-4">
            <a
              href="/crack_data/win10.cmd"
              download={"win10.cmd"}
              target="_blank"
              className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              ดาวน์โหลด 1
            </a>
            <a
              href="/crack_data/win11.cmd"
              download={"win11.cmd"}
              className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              ดาวน์โหลด 2
            </a>
          </div>
        </div>
      </div>

      {/* Program 2 */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-16 space-y-6 sm:space-y-0 sm:space-x-8">
        <a target="_blank" href="https://drive.google.com/file/d/1it_bVtlFtSj2s-UF2vcqywHjTFEqhjnz/view?usp=sharing" className="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/405px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png"
            alt="Microsoft Office logo"
            className="w-48 h-48 object-cover"
          />
        </a>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Microsoft Office</h2>
          <div className="flex gap-4">
            <a
              href="/crack_data/office.cmd"
              download={"office.cmd"}
              className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              ดาวน์โหลด 1
            </a>
            <a href="#" className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              ดาวน์โหลด 2
            </a>
          </div>
        </div>
      </div>

      {/* Program 3 */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-16 space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="flex-shrink-0">
          <img src="https://avatars.githubusercontent.com/u/476009?s=280&v=4" className="w-48 h-48 object-cover" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">All Adobe</h2>
          <div className="flex gap-4">
            <a
              href="/crack_data/AdobeGenP.exe"
              download={"AdobeGenP.exe"}
              className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              ดาวน์โหลด 1
            </a>
            <a href="#" className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              ดาวน์โหลด 2
            </a>
          </div>
        </div>
      </div>

      {/* Program 4 */}
      {/* <div className="flex flex-col sm:flex-row justify-center items-center mb-16 space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Photoshop_CC_icon.png"
            alt="Adobe Photoshop logo"
            className="w-48 h-48 object-cover"
          />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">ดาวน์โหลดโปรแกรม 4</h2>
          <div className="flex gap-4">
            <a href="#" className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              ดาวน์โหลด 1
            </a>
            <a href="#" className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              ดาวน์โหลด 2
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Crack;
