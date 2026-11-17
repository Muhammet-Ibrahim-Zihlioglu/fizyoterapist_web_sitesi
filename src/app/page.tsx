import { FAQ, Navigation } from "./interactive";

const services = [
  {
    title: "Manuel Terapi ve Kas-İskelet Sistemi Rehabilitasyonu",
    symbol: "◎",
    tag: "Manuel Terapi",
    items: [
      "Bel ve boyun bölgesi şikâyetleri",
      "Siyatik ve ilişkili ağrıların değerlendirilmesi",
      "Miyofasyal ağrı ve tetik nokta çalışmaları",
      "Çene eklemi ile ilişkili kas-iskelet sistemi problemleri",
    ],
  },
  {
    title: "Omurga ve Postür Rehabilitasyonu",
    symbol: "↟",
    tag: "Omurga Sağlığı",
    items: [
      "Skolyoz rehabilitasyonu",
      "Postür analizi ve postüral egzersiz",
      "Omurga stabilizasyonu",
      "Fonksiyonel hareket eğitimi",
    ],
  },
  {
    title: "Sporcu Rehabilitasyonu",
    symbol: "⚑",
    tag: "Spora Dönüş",
    items: [
      "Spor yaralanmalarının rehabilitasyonu",
      "Omuz yaralanmaları",
      "Diz ve alt ekstremite yaralanmaları",
      "Ayak bileği yaralanmaları",
      "Spora güvenli dönüş ve performans odaklı egzersizler",
    ],
  },
  {
    title: "Pelvik Taban Rehabilitasyonu",
    symbol: "♡",
    tag: "Pelvik Taban",
    items: [
      "Pelvik taban değerlendirme ve rehabilitasyon yaklaşımları",
      "Pelvik taban kas fonksiyonlarını geliştirmeye yönelik egzersizler",
    ],
  },
  {
    title: "Eklem ve El Rehabilitasyonu",
    symbol: "✧",
    tag: "Fonksiyonel Rehabilitasyon",
    items: [
      "El ve el bileği rehabilitasyonu",
      "Fonksiyonel hareket ve kuvvetlendirme çalışmaları",
      "Eklem hareket açıklığının geliştirilmesi",
    ],
  },
  {
    title: "Klinik Pilates ve Terapötik Egzersiz",
    symbol: "∿",
    tag: "Klinik Pilates",
    items: [
      "Kadın ve erkek danışanlara özel Klinik Pilates programları",
      "Core stabilizasyon ve kuvvetlendirme",
      "Esneklik, denge ve koordinasyon çalışmaları",
      "Fonksiyonel egzersiz programları",
    ],
  },
];
const clubs = [
  "Erbaaspor",
  "Vanspor",
  "Vega",
  "Gallardo",
  "TEB",
  "Ankaragücü",
  "Mastervoley",
  "Mısıroğluspor",
  "Çorum Spor",
  "Hacettepe FK",
  "Türkmetal FK",
  "Botaş Voleybol",
  "Mardinspor",
  "Sivasspor",
];
const specialties = [
  "Klinik Pilates",
  "Fonksiyonel Egzersiz",
  "Omurga ve Postür",
  "Pelvik Taban",
  "Manuel Terapi",
  "Sporcu Rehabilitasyonu",
];
const education = [
  "DDMT – Manuel Terapi Eğitimi",
  "FMTM – Fonksiyonel ve Manuel Terapi Eğitimi",
  "Pelvik Taban Rehabilitasyonu",
  "Fonksiyonel Manuel Terapi ve Egzersiz Yaklaşımları",
  "Sporcu Fizyoterapisi ve Rehabilitasyon",
  "Osteopatik Yaklaşımlar ve Manuel Terapi",
  "Klinik Pilates ve Terapötik Egzersiz",
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="ana-sayfa" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="location-pill">
                <span /> FİZYOTERAPİST · ÇANKAYA, ANKARA
              </div>
              <p className="eyebrow hero-eyebrow">
                HAREKETİNİZE ÖZGÜRLÜK KATIN
              </p>
              <h1>
                İyi hissetmek,
                <br />
                <em>hareketle</em> başlar.
              </h1>
              <p className="hero-name">Feride Çıkkan Kaptan</p>
              <ul className="hero-specialties" aria-label="Çalışma alanları">
                <li>Sporcu Fizyoterapisi</li>
                <li>Manuel Terapi</li>
                <li>Fonksiyonel Rehabilitasyon</li>
                <li>Klinik Pilates</li>
              </ul>
              <p className="hero-description">
                Her bedenin hikâyesi farklı. Bilimsel bilgi ve kişiye özel bir
                yaklaşımla, günlük yaşamınıza ve sevdiğiniz hareketlere güvenle
                dönmeniz için yanınızdayım.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#iletisim">
                  İletişime Geçin <span>↗</span>
                </a>
                <a className="button secondary" href="#calisma-alanlari">
                  Çalışma Alanlarım <span>↓</span>
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>Atılım Üni.</strong>
                  <span>FTR Lisans · 2021</span>
                </div>
                <div>
                  <strong>DDMT & FMTM</strong>
                  <span>Manuel terapi eğitimleri</span>
                </div>
                <div>
                  <strong>6 çalışma alanı</strong>
                  <span>Bütüncül bir yaklaşım</span>
                </div>
              </div>
            </div>
            <div className="portrait-area">
              <div className="portrait-frame">
                <div className="portrait-placeholder">
                  <span className="portrait-monogram">
                    f<span>ç</span>k
                  </span>
                  <div className="portrait-line" />
                  <p>
                    Kişiye özel bir yolculuk.
                    <br />
                    <em>Daha özgür bir hareket.</em>
                  </p>
                  <span className="photo-note">
                    Fizyoterapist fotoğrafı için ayrılan alan
                  </span>
                </div>
                <div className="portrait-caption">
                  <div>
                    <strong>Feride Çıkkan Kaptan</strong>
                    <span>Fizyoterapist</span>
                  </div>
                  <span className="caption-symbol">✧</span>
                </div>
              </div>
              <div className="floating-badge">
                <span>♡</span>
                <div>
                  <strong>Kişiye özel yaklaşım</strong>
                  <small>Birlikte, daha iyiye.</small>
                </div>
              </div>
              <div className="portrait-bottom">
                BİLİMSEL YAKLAŞIM <span>✦</span> BÜTÜNCÜL BAKIŞ
              </div>
            </div>
          </div>
          <div className="container">
            <div className="specialty-marquee">
              <div className="marquee-track">
                {[0, 1].map((copy) => (
                  <div
                    className="marquee-group"
                    key={copy}
                    aria-hidden={copy === 1}
                  >
                    {specialties.map((item) => (
                      <span key={item}>
                        <i />
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="calisma-alanlari" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                ÇALIŞMA ALANLARI · UZMANLIK UYGULAMALARI
              </p>
              <h2>
                Size özel değerlendirme.
                <br />
                <em>Birlikte, daha iyi hareket.</em>
              </h2>
            </div>
            <p>
              Manuel terapi, fonksiyonel rehabilitasyon ve Klinik Pilates
              yaklaşımlarıyla kas-iskelet sistemi ve sporcu sağlığına yönelik
              bütüncül uygulamalar.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <span className="service-number">0{index + 1}</span>
                  <span className="service-icon" aria-hidden="true">
                    {service.symbol}
                  </span>
                </div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#iletisim" className="service-footer">
                  <span>{service.tag}</span>
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="kurumlar" className="clubs-section">
          <div className="container text-center">
            <p className="eyebrow">İŞ BİRLİĞİ & SPORCU SAĞLIĞI</p>
            <h2>
              Sahada emek, <em>harekette destek.</em>
            </h2>
            <p className="section-subtitle">
              Destek verdiğim bazı sporcuların aktif görev aldığı kulüp ve
              kurumlar
            </p>
          </div>
          <div className="club-marquee">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div
                  className="marquee-group"
                  key={copy}
                  aria-hidden={copy === 1}
                >
                  {clubs.map((club) => (
                    <div className="club-chip" key={club}>
                      <span aria-hidden="true">✧</span>
                      {club}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="hakkimda" className="section container about-grid">
          <div>
            <p className="eyebrow">HAKKIMDA · ÖZGEÇMİŞ</p>
            <h2>
              Merhaba,
              <br />
              ben <em>Feride.</em>
            </h2>
            <div className="about-copy">
              <p>
                2021 yılında Atılım Üniversitesi Fizyoterapi ve Rehabilitasyon
                Bölümü’nden mezun oldum. Mesleki çalışmalarımı manuel terapi,
                sporcu rehabilitasyonu, kas-iskelet sistemi problemleri ve
                kişiye özel egzersiz uygulamaları üzerine yoğunlaştırdım.
              </p>
              <p>
                Gelişimimi farklı terapi ve rehabilitasyon yaklaşımlarına
                yönelik eğitimlerle destekledim. Manuel terapi, fonksiyonel
                egzersiz, omurga sağlığı, spor yaralanmaları ve pelvik taban
                rehabilitasyonu alanlarında çalışmalar yürütüyorum.
              </p>
              <p>
                DDMT ve FMTM eğitimleri başta olmak üzere mesleki eğitimlerimle
                değerlendirme ve tedavi süreçlerine bütüncül bir perspektiften
                yaklaşıyorum.
              </p>
              <p>
                Her danışanımın ihtiyaçlarının farklı olduğuna inanıyorum.
                Detaylı fizyoterapi değerlendirmesi, kişiye özel planlama ve
                fonksiyonel egzersiz yaklaşımıyla günlük yaşam ve sportif
                aktivitelere güvenle dönüşünüzü destekliyorum.
              </p>
            </div>
            <div className="signature">Feride Çıkkan Kaptan</div>
          </div>
          <div className="credentials">
            <article className="credential-card">
              <div className="card-label">
                EĞİTİM <span>⌑</span>
              </div>
              <div className="university">
                <div>
                  <h3>Atılım Üniversitesi</h3>
                  <p>Fizyoterapi ve Rehabilitasyon Bölümü</p>
                </div>
                <span>2021</span>
              </div>
            </article>
            <article className="credential-card">
              <div className="card-label">
                SERTİFİKA & AKADEMİK GELİŞİM <span>✧</span>
              </div>
              <h3>Mesleki Eğitimler ve Uzmanlık Gelişimi</h3>
              <ol className="education-list">
                {education.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>
        <section id="yaklasim" className="approach">
          <div className="container approach-grid">
            <div>
              <p className="eyebrow">MESLEKİ YAKLAŞIM</p>
              <h2>
                Ağrının kaynağını anlayan,
                <br />
                <em>hareketi özgürleştiren</em>
                <br />
                bir yaklaşım.
              </h2>
            </div>
            <div className="approach-copy">
              <p>
                Fizyoterapi sürecinde ağrı ve hareket kısıtlılığına neden olan
                fonksiyonel problemlerin değerlendirilmesine önem veriyorum.
              </p>
              <p>
                Manuel terapi, terapötik egzersiz ve kişiye özel rehabilitasyon
                programlarını bir arada kullanarak hareket kapasitenizi,
                fonksiyonel bağımsızlığınızı ve yaşam kalitenizi geliştirmeyi
                amaçlıyorum.
              </p>
              <div className="tags">
                {[
                  "Manuel Terapi",
                  "Sporcu Rehabilitasyonu",
                  "Klinik Pilates",
                  "Fonksiyonel Egzersiz",
                ].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="sss" className="section faq-section">
          <div className="container">
            <div className="text-center">
              <p className="eyebrow">SIK SORULAN SORULAR</p>
              <h2>
                Aklınızdaki sorulara
                <br />
                <em>birlikte yanıt bulalım.</em>
              </h2>
              <p className="section-subtitle">
                Fizyoterapi süreci ve uygulamalarım hakkında merak edilenler.
              </p>
            </div>
            <FAQ />
          </div>
        </section>
        <section id="iletisim" className="section container">
          <p className="eyebrow">ÇALIŞMA YERİ, SAATLERİ VE İLETİŞİM</p>
          <h2>
            İyi hissetmeye <em>bir adım daha.</em>
          </h2>
          <div className="contact-grid">
            <article className="work-card">
              <div className="work-heading">
                <div>
                  <h3>Çalışma Yeri ve Saatleri</h3>
                  <p>Çankaya, Ankara</p>
                </div>
                <span className="service-icon">⌖</span>
              </div>
              <div className="address-grid">
                <div>
                  <span className="field-label">ÇALIŞILAN KURUM</span>
                  <p>Kurum bilgisi yakında paylaşılacaktır.</p>
                </div>
                <div>
                  <span className="field-label">ADRES</span>
                  <p>
                    Çankaya, Ankara
                    <br />
                    Açık adres yakında paylaşılacaktır.
                  </p>
                </div>
              </div>
              <span className="field-label">HAFTALIK ÇALIŞMA SAATLERİ</span>
              <div className="hours">
                <div>
                  <span>Pazartesi – Cuma</span>
                  <span>09.00 – 18.00</span>
                </div>
                <div>
                  <span>Cumartesi</span>
                  <span>09.00 – 13.00</span>
                </div>
                <div>
                  <span>Pazar</span>
                  <span className="muted">Kapalı</span>
                </div>
              </div>
            </article>
            <article className="contact-card">
              <p className="eyebrow">DOĞRUDAN İLETİŞİM</p>
              <h3>İletişimde kalalım.</h3>
              <div className="contact-channel">
                <span className="channel-icon">↗</span>
                <div>
                  <span className="field-label">MESLEKİ TELEFON</span>
                  <p>Telefon bilgisi eklenecektir.</p>
                </div>
              </div>
              <div className="contact-channel">
                <span className="channel-icon">✉</span>
                <div>
                  <span className="field-label">E-POSTA</span>
                  <p>E-posta bilgisi eklenecektir.</p>
                </div>
              </div>
              <div className="contact-bottom">
                <span>Çankaya, Ankara</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%C3%87ankaya+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bölgeyi Görüntüle ↗
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-top">
            <a className="brand" href="#ana-sayfa">
              Feride Çıkkan Kaptan
              <span>
                Manuel Terapi · Sporcu Rehabilitasyonu · Klinik Pilates
              </span>
            </a>
            <nav aria-label="Alt menü">
              <a href="#hakkimda">Hakkımda</a>
              <a href="#calisma-alanlari">Çalışma Alanları</a>
              <a href="#sss">Sık Sorulanlar</a>
              <a href="#iletisim">İletişim ↗</a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Feride Çıkkan Kaptan</span>
            <span>Hareketle, daha iyi bir yaşam.</span>
            <a href="#ana-sayfa">Yukarı dön ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
