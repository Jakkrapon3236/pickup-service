"use client"
import React, { useState } from "react";
import Image from "next/image";

export default function MainUser() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState(0);
    const [modalName, setModalName] = useState("");
    const dateNow = new Date().toLocaleDateString(); // Declare and initialize the 'dateNow' variable

    const handleToggleModal = (name = "", status = 0) => {
        setIsModalOpen(!isModalOpen);
        setModalName(name);
        setStatus(status);
    };

    const ModalService = () => {
        return (
            <>
                 <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen ? "" : "hidden"}`}>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div id="popup-modal" tabIndex={-1} className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleToggleModal()}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">ปิด</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">คุณต้องการเข้ารับพัสดุใช่ไหม?</h3>
                        <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center" onClick={() => handleToggleModal()}>
                            เข้ารับพัสดุ
                        </button>
                        <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleToggleModal()}>ปิด</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

    const ModalImage = () => {
        return (
            <>
                 <div className={`fixed inset-0 z-50 flex items-center justify-center ${isModalOpen ? "" : "hidden"}`}>
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <div id="popup-modal" tabIndex={-1} className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleToggleModal()}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">ปิด</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                       
                        
                       <div className="flex justify-center p-4 ">
                       <Image
                        src={`/ExImageSend.jpg`}
                        alt="ImageSend"
                        width={300}
                        height={200}
                        />
                       </div>
                        
                        <button type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleToggleModal()}>ปิด</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

    return (
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
                                <tr className="text-center">
                                    <th scope="col" className="px-6 py-3">
                                        ชื่อ
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ที่อยู่
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        เบอร์โทร
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        จำนวน
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        รูปพัสดุ
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        สถานะ
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
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
                                    <td className="px-6 py-4">012-3456789</td>
                                    <td className="px-6 py-4">55</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleModal("Coby&Subny&Tood",2)}
                                            className="hover:underline"
                                        >
                                            <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                                โชว์ภาพ
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleModal("Coby&Subny&Tood", 1)}
                                            className="hover:underline"
                                        >
                                            <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                                รอเข้ารับพัสดุ
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        เบ็ญจมาพร
                                    </th>
                                    <td className="px-6 py-4">
                                        43/6 ม.4 ต.นครชุม อ.เมือง จ.กำแพงเพชร
                                    </td>
                                    <td className="px-6 py-4">012-3456789</td>
                                    <td className="px-6 py-4">55</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleModal("Coby&Subny&Tood", 2)}
                                            className="hover:underline"
                                        >
                                            <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                                โชว์ภาพ
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleModal("Coby&Subny&Tood", 1)}
                                            className="hover:underline"
                                        >
                                            <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                                รรอเข้ารับพัสดุ
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        จตุพล
                                    </th>
                                    <td className="px-6 py-4">
                                        12/3 ม.4 ต.นครชุม อ.เมือง จ.กำแพงเพชร
                                    </td>
                                    <td className="px-6 py-4">012-3456789</td>
                                    <td className="px-6 py-4">55</td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleModal("Coby&Subny&Tood", 2)}
                                            className="hover:underline"
                                        >
                                            <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                                โชว์ภาพ
                                            </span>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleToggleModal("Coby&Subny&Tood", 1)}
                                            className="hover:underline"
                                        >
                                            <span className="inline-flex items-center bg-yellow-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                                <span className="w-2 h-2 me-1 bg-yellow-300 rounded-full"></span>
                                                รอเข้ารับพัสดุ
                                            </span>
                                        </button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <>
                    {status === 1 && ModalService()}
                    {status === 2 && ModalImage() }
                    
                </>
            )}
        </div>
    );
}
