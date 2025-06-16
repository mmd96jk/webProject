import React from 'react'
import Navbar from '../../Compoents/Navbar/Navbar'
import { Container } from 'react-bootstrap'
import Footer from '../../Compoents/Footer/Footer'
import './About.css'

export default function About() {
  return (
    <>
      <Container>
        <div className="bg-white text-gray-800 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">درباره ما</h1>
            <p className="text-lg leading-8 mb-6">
              به فروشگاه ما خوش آمدید! ما یک تیم جوان و خلاق هستیم که با هدف ارائه‌ی بهترین پوشاک مد روز فعالیت می‌کنیم. هدف ما ارائه‌ی محصولاتی با کیفیت بالا و طراحی خاص برای همه‌ی سلیقه‌هاست.
            </p>
            <p className="text-lg leading-8 mb-6">
              ما باور داریم که هر فرد شایسته‌ی این است که استایلی منحصر به فرد داشته باشد. به همین دلیل، با برندهای معتبر همکاری می‌کنیم و همیشه به دنبال به‌روزرسانی موجودی فروشگاه با جدیدترین ترندهای مد هستیم.
            </p>
            <p className="text-lg leading-8 mb-6">
              پشتیبانی سریع، ارسال به‌موقع، و احترام به حقوق مشتریان، از اصول پایه‌ای ماست. خوشحال می‌شویم با ما در تماس باشید و نظراتتان را با ما در میان بگذارید 💬
            </p>
            <div className="mt-12 text-center">
              <span className="inline-block bg-black text-white px-6 py-2 rounded-full text-lg">با ما در ارتباط باشید</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
