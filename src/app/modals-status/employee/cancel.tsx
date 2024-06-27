type CancelProps = {
    handleToggleModal: (name: string) => void;
}
"use client";
import react, { useState } from 'react';
import Image from 'next/image';

export default function Cancel({ handleToggleModal }: CancelProps) {

    const [checked, setChecked] = useState(false);

     const handleCheckboxChange = () => {
        setChecked(!checked);
        console.log('Checkbox is now:', !checked);
    };

    return (
        <>
            <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto"
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                สลิปโอนเงินถูกปฏิเสธ
                            </h3>
                            <button
                                onClick={() => handleToggleModal("")}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                &times;
                            </button>
                        </div>

                        <div className='px-12 p-2'>
                            <div className='flex '>
                                <p className='flex-grow'>ชื่อ จักรพล รุ่งเรือง</p>
                                <p className='justify-end item-end text-end'>วันที่ 12/08/2567 </p>
                            </div>

                            <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center  border px-10">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">

                                    <Image
                                        src="/bill.png"
                                        alt="Success"
                                        width={200}
                                        height={200} />
                                </div>



                            </div>
                            <div className="flex items-center mb-4">
                                <input type="checkbox" value=""  onChange={handleCheckboxChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-red-500">ตีกลับ</label>
                            </div>
                           {
                            checked && (
                                <div className='flex-col p-5'>
                                <p className='text-gray-500 text-center '>โปรดหมายเหตุแจ้งกลับมา</p>
                                <textarea className='w-full border-2 border-black rounded-lg'></textarea>
                            </div>
                            )
                           }

                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={() => handleToggleModal("")}
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    ยืนยัน
                                </button>
                                <button
                                    onClick={() => handleToggleModal("")}
                                    type="button"
                                    className="text-red-600 py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    ยกเลิก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

