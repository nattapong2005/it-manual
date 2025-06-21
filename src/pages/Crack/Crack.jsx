import React from "react";

const Crack = () => {
  const programs = [
    {
      name: "Windows 10 & 11",
      img: "https://images.icon-icons.com/2235/PNG/512/windows_os_logo_icon_134674.png",
      links: [
        { href: "/crack_data/win10.cmd", text: "ดาวน์โหลด 1" },
        { href: "/crack_data/win11.cmd", text: "ดาวน์โหลด 2" },
      ],
      doc: "https://gist.github.com/rvrsh3ll/0810c6ed60e44cf7932e4fbae25880df",
    },
    {
      name: "Microsoft Office",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/405px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png",
      links: [
        { href: "/crack_data/office.cmd", text: "ดาวน์โหลด 1" },
        { href: "#", text: "ดาวน์โหลด 2" },
      ],
      doc: "https://drive.google.com/file/d/1it_bVtlFtSj2s-UF2vcqywHjTFEqhjnz/view?usp=sharing",
    },
    {
      name: "All Adobe",
      img: "https://avatars.githubusercontent.com/u/476009?s=280&v=4",
      links: [
        { href: "/crack_data/AdobeGenP.exe", text: "ดาวน์โหลด 1" },
        { href: "#", text: "ดาวน์โหลด 2" },
      ],
    },
    {
      name: "ชุดลง Windows ใหม่",
      img: "https://blogs.windows.com/wp-content/uploads/prod/sites/44/2025/01/taskbar-semantic-search.png",
      links: [
        { href: "https://drive.google.com/drive/folders/1c_8C2NgQghox0S9X3oyuHXx7f3pKTUf-?usp=sharing", text: "ดาวน์โหลด 1" },
      ],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">รวมโปรแกรม Crack</h1>
        <p className="text-red-600">
          <span className="font-bold text-red-700">คำแนะนำ:</span> ปิดโปรแกรมป้องกันไวรัสทุกชนิดก่อนดาวน์โหลด
        </p>
      </div>

      <div className="grid gap-10 md:gap-12">
        {programs.map((program, index) => (
          <div
            key={index}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center bg-white rounded-lg shadow p-6 md:p-8 gap-6"
          >
            {program.doc ? (
              <a href={program.doc} target="_blank" rel="noopener noreferrer">
                <img
                  src={program.img}
                  alt={program.name}
                  className="w-full h-auto object-contain"
                />
              </a>
            ) : (
              <img
                src={program.img}
                alt={program.name}
                className="w-full h-auto object-contain"
              />
            )}

            <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
              <h2 className="text-2xl font-semibold text-gray-800">{program.name}</h2>
              <div className="flex flex-wrap gap-4">
                {program.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crack;
