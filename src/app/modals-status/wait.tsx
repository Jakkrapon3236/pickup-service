type WaitProps = {
  handleToggleModal: (name: string) => void;

};
import react, { useState } from "react";
import Image from "next/image";

const Wait: React.FC<WaitProps> = ({ handleToggleModal }) => {
  const [image, setImage] = useState("/iconwork/wantimage.png"); // Example initial value
  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const selectedFile = event.target.files;
    if (selectedFile && selectedFile.length > 0) {
      // Assuming you handle file upload and set the `image` state to the uploaded file's URL
      const imageUrl = URL.createObjectURL(selectedFile[0]); // Access the first file from the FileList
      setImage(imageUrl);
    }
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
        <div className="relative bg-white p-2 rounded-lg shadow dark:bg-gray-700">
            <div className="border-2 border-black rounded-lg">
            <div className="flex items-center  justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {}
                ใบแจ้งชำระเงิน
              </h3>

              <button
                onClick={() => handleToggleModal("")}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                &times;
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <div className="flex flex-row">
                  <div className="flex-grow">ชื่อ : จักรพล รุ่งเรือง</div>
                  <div className="md:justify-end text-end">
                    วันที่ : 12/12/2564
                  </div>
                </div>
              </p>

              <div className="relative overflow-x-auto">
                <table className="w-full text-center text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        รายการ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        จำนวน
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ราคา/ชิ้น
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        ซองสินค้า A4
                      </th>
                      <td className="px-6 py-4">20</td>
                      <td className="px-6 py-4">25</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        ซองสินค้า A3
                      </th>
                      <td className="px-6 py-4">20</td>
                      <td className="px-6 py-4">25</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        กล่อง ก
                      </th>
                      <td className="px-6 py-4">10</td>
                      <td className="px-6 py-4">25</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        จำนวนพัสดุทั้งหมด
                      </th>
                      <td className="px-6 py-4 text-center " colSpan={2}>50</td>
                      
                    </tr>
                  </tbody>
                </table>
                <div className="flex-grow text-end border-b text-red-500">
                  **จำนวนที่ต้องชำระ : 1250 บาท**
                </div>
                <div className="flex-grow flex-row">
                  <p>ธนาคารที่ทำรายการ : กรุงไทย</p>
                  <p>เลขที่บัญชี : 020-123456</p>
                  <p>เบอร์ติดต่อ : 012-3456789</p>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center space-x-2">
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Image
                        src={image} // Use the `image` state which holds the URL
                        alt="รูปภาพพัสดุที่เรียกเข้ารับ"
                        width={74}
                        height={74}
                        className="mr-2"
                        onClick={() => console.log("Image clicked")}
                      />
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                     
                      <p>อัพโหลดหลักฐานการโอนเงิน</p>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center  p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => handleToggleModal("")}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                อัพโหลดหลักฐานการชำระเงิน
              </button>
              <button
                onClick={() => handleToggleModal("")}
                type="button"
                className="text-red-300 py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                ยกเลิก
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wait;
