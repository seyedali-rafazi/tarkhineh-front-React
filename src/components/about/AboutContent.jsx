import React from "react";

function AboutContent() {
  return (
    <div className="space-y-4 p-5">
      <h2 className="font-bold text-xl md:text-3xl text-secondery-800">درباره ما</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center gap-8 w-full">
        <div className="order-2 md:order-1">
          <p className="text-secondery-600 text-justify text-sm md:text-lg leading-8">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت
            جلب رضایت مشتریان بوده است.
            <br />
            دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت
            غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های
            مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات
            خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
            جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا
            را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و
            آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما
            عزیزان می‌باشند.
            <br />
            چشم انداز: در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
            آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
            روز که همه ایرانیان سالم و سلامت باشند.
          </p>
        </div>
        <div className="md:order-2 flex justify-center">
          <img className="object-cover object-center" src="/styles/about-content.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
