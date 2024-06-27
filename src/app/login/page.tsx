import React from 'react';
import Image from 'next/image';
import { hr } from 'date-fns/locale';
import Link from 'next/link';
export default function Login() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/iconwork/loginPage.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                    <div className="md:block hidden w-1/2">
                        <img src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" className="rounded-2xl" alt="page img" />
                    </div>

                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74]">เข้าสู่ระบบ</h2>
                        <p className="text-xs mt-4 text-[#002D74]">ถ้ามีสมัครชิกแล้วเข้าสู่ระบบเพื่อช้งาน</p>

                        <form action="" className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
                            <div className="relative">
                                <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
                            </div>
                           
                           <Link href="/">
                                <button className="bg-[#002D74] w-full rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                            </Link>
                           

                        </form>

                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">หรือ</p>
                            <hr className="border-gray-400" />
                        </div>





                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p>ยังไม่มีสมาชิก</p>
                            <Link href="/login/register">
                                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
