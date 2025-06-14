import React from "react";
import avatar from "../assets/avatar-man.png";
import { FiChevronDown, FiShoppingCart, FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Navbar with 64px top spacing */}
      <div className="pt-[64px] bg-[#F9FAFB]">
        <nav className="w-[1440px] bg-white mx-auto border-b border-[#FFFFFF]">
          {/* Navbar content container */}
          <div className="h-[42px] px-[80px] flex items-center justify-between">
            {/* Right section: Logo + Menu */}
            <div className="flex items-center h-[36px] gap-[42px]">
              {/* Logo */}
              <div className="w-[132px] h-[36px] flex flex-col items-end justify-center leading-tight">
                <span className="text-[#0798F1] text-[18px] font-semibold">
                  Ulm Care
                </span>
                <span className="text-[10px] text-[#717171]">
                  Medical Services
                </span>
              </div>

              {/* Menu */}
              <div className="flex items-center gap-[16px] h-[24px]">
                {/* الرئيسية */}
                <span
                  className="w-[51px] h-[24px] text-[#0798F1] font-semibold text-base leading-[100%] flex items-center"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  الرئيسية
                </span>

                {/* خدماتنا + dropdown */}
                <span
                  className="flex items-center gap-[5px] w-[65px] h-[24px]"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  <span className="w-[44px] h-[24px] text-base font-normal text-[#6F6F6F] leading-[100%] flex items-center justify-end">
                    خدماتنا
                  </span>
                  <FiChevronDown className="w-[8px] h-[16px] text-[#6F6F6F]" />
                </span>

                {/* كونكت للأطباء */}
                <span
                  className="w-[99px] h-[24px] text-base font-normal text-[#6F6F6F] leading-[100%] flex items-center justify-center"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  كونكت للأطباء
                </span>

                {/* الدعم */}
                <span
                  className="w-[35px] h-[24px] text-base font-normal text-[#6F6F6F] leading-[100%] flex items-center justify-center"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  الدعم
                </span>
              </div>
            </div>

            {/* Left section: Avatar, Language, Icons - Updated to match Figma specs */}
            <div className="w-[590px] h-[42px] flex items-center justify-end gap-[16px]">
              {/* Avatar - 42×42 */}
              <div className="w-[42px] h-[42px]">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Language selector - Width Hug (55.67×24) */}
              <div className="flex items-center gap-1 h-[24px] text-[#6F6F6F]">
                <span
                  className="text-[16px] font-normal"
                  style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
                >
                  ENG
                </span>
                <FiChevronDown className="w-[24px] h-[24px]" />
              </div>

              {/* Icons - Both 24×24 with 16px gap between them */}
              <div className="flex items-center gap-[16px]">
                <FiShoppingCart className="w-[24px] h-[24px] text-[#6F6F6F]" />
                <FiBell className="w-[24px] h-[24px] text-[#6F6F6F]" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
