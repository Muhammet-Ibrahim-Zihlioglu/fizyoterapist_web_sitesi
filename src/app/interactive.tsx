"use client";

import { useState } from "react";

const links = [
  ["Ana Sayfa", "ana-sayfa"],
  ["Hakkımda", "hakkimda"],
  ["Çalışma Alanları", "calisma-alanlari"],
  ["Kurumlar", "kurumlar"],
  ["Mesleki Yaklaşım", "yaklasim"],
  ["Sık Sorulanlar", "sss"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#ana-sayfa" onClick={() => setOpen(false)}>
        Feride Çıkkan Kaptan
        <span>
          <i /> Fizyoterapist · Çankaya, Ankara
        </span>
      </a>
      <button
        className="menu-toggle"
        aria-label="Menüyü aç veya kapat"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Kapat ×" : "Menü ☰"}
      </button>
      <nav
        className={open ? "navigation is-open" : "navigation"}
        aria-label="Ana menü"
      >
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#iletisim">
        İletişim Bilgileri <span>↗</span>
      </a>
    </header>
  );
}

const questions = [
  [
    "İlk fizyoterapi görüşmesinde neler konuşulur ve değerlendirilir?",
    "İlk görüşmede şikâyetleriniz, sağlık geçmişiniz, günlük yaşam alışkanlıklarınız ve hedefleriniz ele alınır. Hareket, duruş ve fonksiyonel değerlendirmeler doğrultusunda size özel bir yol haritası oluşturulur.",
  ],
  [
    "Fizyoterapi değerlendirmesinde eklem hareket açıklığı ne demektir?",
    "Eklem hareket açıklığı, bir eklemin farklı yönlerde ulaşabildiği hareket aralığıdır. Değerlendirme sırasında hareketin sınırları, ağrı ve günlük aktivitelere etkisi birlikte incelenir.",
  ],
  [
    "Manuel terapi ve fonksiyonel egzersiz birlikte nasıl uygulanır?",
    "Değerlendirmeye göre seçilen manuel uygulamalar, kişinin ihtiyaçlarına ve hareket kapasitesine uygun egzersizlerle desteklenir. Program süreç içindeki gelişime göre yeniden düzenlenir.",
  ],
  [
    "Klinik Pilates seansları kimler için uygundur?",
    "Klinik Pilates, kadın ve erkek danışanlar için kişinin sağlık durumu, hareket kapasitesi ve hedefleri değerlendirilerek planlanır. Size uygunluğu ilk görüşmede bireysel olarak belirlenir.",
  ],
];

export function FAQ() {
  return (
    <div className="faq-list">
      {questions.map(([question, answer]) => (
        <details key={question}>
          <summary>
            {question}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
