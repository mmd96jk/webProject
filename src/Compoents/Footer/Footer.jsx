import React from 'react'

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
                        <li><a href="/" className="hover:text-white">صفحه اصلی</a></li>
                        <li><a href="/about" className="hover:text-white">درباره ما</a></li>
                        <li><a href="/contact" className="hover:text-white">تماس با ما</a></li>
                        <li><a href="/faq" className="hover:text-white">سوالات متداول</a></li>
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
