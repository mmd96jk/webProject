import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-3">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* ستون اول */}
                <div>
                    <h2 className="text-xl font-bold mb-4">فروشگاه ما</h2>
                    <p className="text-sm text-gray-400 leading-6">
                        ارائه‌دهنده جدیدترین پوشاک مردانه و زنانه با بهترین کیفیت و قیمت مناسب.
                    </p>
                </div>

                {/* ستون دوم */}
                <div>
                    <h2 className="text-xl font-bold mb-4">لینک‌های مفید</h2>
                    <ul className="space-y-2 text-sm text-gray-800">
                        <li><Link to="/">صفحه اصلی</Link></li>
                        <li><Link to="/products">محصولات</Link></li>
                        <li><Link to="/categories">دسته بندی ها</Link></li>
                        <li><Link to='/about'>درباره ما</Link></li>
                    </ul>
                </div>

                {/* ستون سوم */}
                <div>
                    <h2 className="text-xl font-bold mb-4">ما را دنبال کنید</h2>
                    <div className="flex space-x-4 text-gray-300 text-xl">
                        <a href="#" className="hover:text-white">📸</a>
                        <a href="#" className="hover:text-white">🐦</a>
                        <a href="#" className="hover:text-white">📘</a>
                        <a href="#" className="hover:text-white">▶️</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10">
                © {new Date().getFullYear()} فروشگاه ما | تمامی حقوق محفوظ است.
            </div>
        </footer>
    )
}
