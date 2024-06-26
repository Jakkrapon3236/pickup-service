"use client"
import React, { useState } from "react";
import Image from "next/image";
import Wait from "../modals-status/wait";
import Success from "../modals-status/success";
import Cancel from "../modals-status/cancel";
import Mainpickup from "../mainpickup/page";
export default function MainUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(0);
  const [modalName, setModalName] = useState("");
  const dateNow = new Date().toLocaleDateString(); // Declare and initialize the 'dateNow' variable
  const [statusShow, setStatusShow] = useState(0); // Declare and initialize the 'status' variable
  const handleToggleModal = (name = "", status = 0) => {
    setIsModalOpen(!isModalOpen);
    setModalName(name);
    setStatus(status);
  };

  return (
    statusShow === 0 ? (
      <div className="flex flex-col items-center justify-center h-full">
        {/* <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Image src="/iconwork/pickup.png" alt="" width={400} height={100} />
          <p className="text-2xl text-gray-400 font-custom">
            ไม่มีข้อมูลเรียกรับพัสดุ
          </p>
        </div>
      </div> */}
        <div className="">
          <p className="">ตารางเข้ารับพัสดุ</p>


        </div>
        <div className="w-full md:max-w-screen-xl">
          <div className="p-16 bg-white border border-gray-200 rounded-lg shadow">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      ชื่อ
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ที่อยู่
                    </th>
                    <th scope="col" className="px-6 py-3">
                      วันที่
                    </th>
                    <th scope="col" className="px-6 py-3">
                      จำนวน
                    </th>
                    <th scope="col" className="px-6 py-3">
                      สถานะ
                    </th>
                    <th scope="col" className="px-6 py-3">
                      หมายเหตุ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      จักรพล รุ่งเรือง
                    </th>
                    <td className="px-6 py-4">
                      43/6 ม.4 ต.นครชุม อ.เมือง จ.กำแพงเพชร
                    </td>
                    <td className="px-6 py-4">{dateNow}</td>
                    <td className="px-6 py-4">55</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleModal("Coby&Subny&Tood", 1)}
                        className="hover:underline"
                      >
                        <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                          รอชำระเงิน
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4">- ไม่มี -</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      จักรพล
                    </th>
                    <td className="px-6 py-4">
                      43/6 ม.4 ต.นครชุม อ.เมือง จ.กำแพงเพชร
                    </td>
                    <td className="px-6 py-4">{dateNow}</td>
                    <td className="px-6 py-4">55</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleModal("Coby&Subny&Tood", 2)}
                        className="hover:underline"
                      >
                        <span className="inline-flex items-center bg-blue-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span className="w-2 h-2 me-1 bg-blue-600 rounded-full"></span>
                          เตรียมเข้ารับพัสดุ
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4">- ไม่มี -</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      จักรพล
                    </th>
                    <td className="px-6 py-4">
                      43/6 ม.4 ต.นครชุม อ.เมือง จ.กำแพงเพชร
                    </td>
                    <td className="px-6 py-4">{dateNow}</td>
                    <td className="px-6 py-4">55</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleModal("Coby&Subny&Tood", 4)}
                        className="hover:underline"
                      >
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                          จัดส่งพัสดุเรียบร้อย
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4">- ไม่มี -</td>
                  </tr>
                  <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      จักรพล
                    </th>
                    <td className="px-6 py-4">
                      43/6 ม.4 ต.นครชุม อ.เมือง จ.กำแพงเพชร
                    </td>
                    <td className="px-6 py-4">{dateNow}</td>
                    <td className="px-6 py-4">55</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleModal("Coby&Subny&Tood", 3)}
                        className="hover:underline"
                      >
                        <span className="inline-flex items-center bg-red-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                          <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                          แก้ไขหลักฐานที่แนบมา
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4">- ไม่มี -</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <>
            {status === 1 && <Wait handleToggleModal={handleToggleModal} />}
            {status === 4 && <Success handleToggleModal={handleToggleModal} />}
            {status === 3 && <Cancel handleToggleModal={handleToggleModal} />}
          </>
        )}
      </div>
    ) : (
      <Mainpickup />
    )
  );
}
