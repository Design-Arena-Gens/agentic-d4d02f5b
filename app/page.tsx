/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

type Locale = "ar" | "en";

const content: Record<
  Locale,
  {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      highlight: string;
    };
    sections: {
      id: string;
      title: string;
      intro: string;
      blocks: { title: string; items: string[] }[];
    }[];
    cta: {
      lead: string;
      details: string;
      button: string;
      note: string;
    };
    footer: {
      rights: string;
      tagline: string;
    };
  }
> = {
  ar: {
    hero: {
      title: "دليل المسافر لنهائيات كأس العالم ٢٠٢٦",
      subtitle: "DP2030 Cloud Passport",
      description:
        "تم تصميم هذا المنتج الرقمي لحمايتك من نسيان التفاصيل الصغيرة وهو محمي بعلامة DP2030 المسجلة. تَعرَّف على كل ما تحتاجه لتنظيم رحلتك إلى الولايات المتحدة الأمريكية، كندا، والمكسيك من إقامة، تنقل، فعاليات، وتجارب محلية.",
      highlight: "نسخة عربية - إنجليزية متكاملة"
    },
    sections: [
      {
        id: "overview",
        title: "نظرة شاملة",
        intro:
          "الدليل مقسم حسب المدن المستضيفة مع خرائط تفاعلية وروابط للحجز السريع. يحتوي على قوائم تحقق للطيران، الإقامة، التذاكر، والتأمين الصحي، إضافة إلى روابط رسمية للهيئات السياحية.",
        blocks: [
          {
            title: "ماذا يحتوي؟",
            items: [
              "تخطيط يومي للمباريات مع أوقات محلية ومناطق زمنية.",
              "قائمة خدمات الطوارئ لكل دولة مع أرقام مترجمين معتمدين.",
              "اقتراحات تنقل ذكية: قطارات، مترو، حافلات، رحلات جوية داخلية."
            ]
          },
          {
            title: "مزايا فريدة",
            items: [
              "شيفرة QR للعودة السريعة إلى النسخة المحدثة.",
              "مسارات سياحية مصغرة في كل مدينة مصممة للمشجعين.",
              "إرشادات الدخول الجمركي وقوانين المشجعين في الملاعب."
            ]
          }
        ]
      },
      {
        id: "usa",
        title: "الولايات المتحدة الأمريكية",
        intro:
          "١١ مدينة رئيسية من نيويورك إلى لوس أنجلوس. ركزنا على أفضل خيارات الفنادق القريبة من الملاعب، وأرخص وسائل النقل، وأفضل المطاعم الحلال.",
        blocks: [
          {
            title: "نصائح سريعة",
            items: [
              "اشتر بطاقة مترو مسبقة الدفع في المدن الكبرى مثل نيويورك وأتلانتا.",
              "استخدم تطبيقات مشاركة الركوب ببطاقات افتراضية لتسهيل الدفع.",
              "راقب تنبيهات الطقس، خاصة في المدن الشمالية الشرقية."
            ]
          },
          {
            title: "تجارب لا تُفوّت",
            items: [
              "جولات للمشجعين في متاحف الرياضة مثل متحف كرة القدم في نيوجيرسي.",
              "مهرجانات المشجعين الرسمية في سنترال بارك وساحة LA Live.",
              "زيارات للمتنزهات الوطنية القريبة مثل يوسمايت والجراند كانيون."
            ]
          }
        ]
      },
      {
        id: "mexico",
        title: "المكسيك",
        intro:
          "من مونتيري إلى مكسيكو سيتي، ستجد موازنة رائعة بين الثقافة الملونة وتحضيرات المباريات. جهزنا لك توصيات أحياء آمنة ومأكولات تقليدية موثوقة.",
        blocks: [
          {
            title: "سلامتك أولاً",
            items: [
              "اختر وسائل نقل رسمية مثل Uber أو سيارات الأجرة المعتمدة من الفندق.",
              "تجنب حمل مبالغ نقدية كبيرة واحتفظ بصور رقمية لجواز السفر.",
              "تعرف على العبارات الإسبانية الأساسية للتواصل السريع."
            ]
          },
          {
            title: "أجواء المشجعين",
            items: [
              "الساحات الرسمية للمشاهدة الجماعية في كل من غوادالاخارا ومكسيكو سيتي.",
              "تجربة المطبخ المكسيكي: تاكو أزول، شوكولاتة ساخنة تقليدية.",
              "رحلات يومية إلى آثار تيوتيهواكان وسان ميغيل دي أييندا."
            ]
          }
        ]
      },
      {
        id: "canada",
        title: "كندا",
        intro:
          "تورونتو، فانكوفر، ومونتريال ترحب بالمشجعين بمدن حديثة ومساحات خضراء واسعة. الدليل يغطي خيارات النقل الشتوي والأنشطة الثقافية.",
        blocks: [
          {
            title: "التنقل المناخي",
            items: [
              "كن مستعداً للتقلبات الجوية مع طبقات متعددة من الملابس.",
              "استخدم بطاقات النقل الذكية مثل PRESTO وCompass.",
              "استفد من خصومات Rail Canada للمشجعين المسافرين بين المدن."
            ]
          },
          {
            title: "أنشطة ثقافية",
            items: [
              "جولات المتاحف الليلية في مونتريال وبطاقة CityPASS في تورونتو.",
              "الاستمتاع بالمناظر البحرية في فانكوفر عبر سي وول الدراجة.",
              "فعاليات المشجعين في ميدان Yonge-Dundas ومنطقة Gastown."
            ]
          }
        ]
      }
    ],
    cta: {
      lead: "جاهز للانطلاق؟",
      details:
        "قم بتحميل النسخة الكاملة بصيغة PDF مع تحديثات مباشرة وأدلة تفاعلية للخرائط. متوفرة عبر سحابة DP2030 مع حماية رقمية لمنع النسخ غير المصرح به.",
      button: "تنزيل النسخة المحمية",
      note: "يشمل الدليل تحديثات مجانية حتى نهاية البطولة."
    },
    footer: {
      rights: "© 2024 DP2030 Cloud Passport. جميع الحقوق محفوظة.",
      tagline: "صُممت هذه الهوية للحفاظ على المنتج من السرقة الرقمية."
    }
  },
  en: {
    hero: {
      title: "Traveler Guide to FIFA World Cup 2026",
      subtitle: "DP2030 Cloud Passport",
      description:
        "A bilingual digital product protected with the registered DP2030 mark. Explore tailored itineraries, booking links, emergency contacts, and local culture highlights across the United States, Canada, and Mexico.",
      highlight: "Arabic & English edition"
    },
    sections: [
      {
        id: "overview",
        title: "Complete Overview",
        intro:
          "Cities, fixtures, and logistics organized in one place. Includes flight checklists, lodging picks near each stadium, medical coverage guidance, and official tourism links.",
        blocks: [
          {
            title: "What’s Inside?",
            items: [
              "Daily match planner with local times and time-zone conversions.",
              "Emergency services per country plus vetted interpreter hotlines.",
              "Smart transit tips: trains, subways, coach buses, and regional flights."
            ]
          },
          {
            title: "Signature Highlights",
            items: [
              "QR code jump-back to the latest version in the DP2030 cloud.",
              "Fan-friendly city micro itineraries tailored for match days.",
              "Border entry requirements and supporter regulations at each venue."
            ]
          }
        ]
      },
      {
        id: "usa",
        title: "United States",
        intro:
          "Eleven host cities from New York to Los Angeles. We curated the best stadium-side hotels, metro connections, halal-friendly dining, and fan festivals.",
        blocks: [
          {
            title: "Quick Tips",
            items: [
              "Pick up reloadable metro cards in dense cities like NYC and Atlanta.",
              "Use ride-sharing with virtual cards to streamline payments.",
              "Watch real-time weather alerts, especially across the Northeast."
            ]
          },
          {
            title: "Must Experience",
            items: [
              "Fan tours at sports museums such as the Soccer Hall of Fame in New Jersey.",
              "Official fan zones in Central Park and LA Live.",
              "Excursions to nearby national parks including Yosemite and the Grand Canyon."
            ]
          }
        ]
      },
      {
        id: "mexico",
        title: "Mexico",
        intro:
          "From Monterrey to Mexico City, balance the vibrant culture with match-day readiness. We mapped safe neighborhoods, trusted eateries, and bilingual local guides.",
        blocks: [
          {
            title: "Stay Safe",
            items: [
              "Stick with official transportation like Uber or hotel-endorsed taxis.",
              "Keep limited cash and store passport scans securely online.",
              "Learn essential Spanish phrases for quick assistance."
            ]
          },
          {
            title: "Fan Atmosphere",
            items: [
              "Fan plazas in Guadalajara and Mexico City with live entertainment.",
              "Taste iconic dishes: Azul tacos and traditional hot chocolate.",
              "Day trips to Teotihuacan pyramids and San Miguel de Allende."
            ]
          }
        ]
      },
      {
        id: "canada",
        title: "Canada",
        intro:
          "Toronto, Vancouver, and Montreal welcome supporters with modern transit and inviting public spaces. We cover winter-proof transit hacks and cultural experiences.",
        blocks: [
          {
            title: "Weather-Savvy Mobility",
            items: [
              "Pack layers to adapt to quick temperature shifts.",
              "Tap into smart cards like PRESTO and Compass.",
              "Unlock Rail Canada discounts for multi-city fan travel."
            ]
          },
          {
            title: "Cultural Picks",
            items: [
              "Late-night museum access in Montreal and Toronto CityPASS bundles.",
              "Cycle Vancouver’s Seawall for waterfront views.",
              "Fan festivals at Yonge-Dundas Square and Gastown."
            ]
          }
        ]
      }
    ],
    cta: {
      lead: "Ready to take off?",
      details:
        "Download the secured PDF with live updates, interactive map links, and personalized planning templates. Hosted in the DP2030 cloud with anti-piracy watermarking.",
      button: "Download protected edition",
      note: "Complimentary updates through the end of the tournament."
    },
    footer: {
      rights: "© 2024 DP2030 Cloud Passport. All rights reserved.",
      tagline: "Identity crafted to preserve the product from digital theft."
    }
  }
};

function LogoBadge() {
  return (
    <svg
      className="logo"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="dp2030Title"
    >
      <title id="dp2030Title">DP2030 Cloud Mark</title>
      <defs>
        <linearGradient id="cloudGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#bbdefb" />
          <stop offset="100%" stopColor="#1e88e5" />
        </linearGradient>
        <linearGradient id="rainGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#e3f2fd" />
          <stop offset="100%" stopColor="#1565c0" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" r="106" fill="#0d1b2a" opacity="0.06" />
      <circle cx="110" cy="110" r="90" fill="#0d47a1" opacity="0.12" />
      <g transform="translate(30, 36)">
        <path
          d="M120 34c-5-18-23-30-40-30-17 0-35 12-40 30C20 34 0 52 0 76s20 42 40 42c5 18 23 30 40 30 17 0 35-12 40-30 20 0 40-18 40-42S140 34 120 34z"
          fill="url(#cloudGradient)"
        />
        <g
          transform="translate(26, 52)"
          fill="none"
          stroke="url(#rainGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        >
          <line x1="10" x2="10" y1="40" y2="70" />
          <line x1="40" x2="40" y1="50" y2="80" />
          <line x1="70" x2="70" y1="42" y2="72" />
          <line x1="100" x2="100" y1="54" y2="84" />
        </g>
        <g transform="translate(48, -8)">
          <path
            d="M32 0c20 6 42 30 42 54s-22 42-42 42S-10 78-10 54 12-6 32 0z"
            fill="#e3f2fd"
            opacity="0.85"
          />
          <path
            d="M32 12c12 4 24 18 24 30s-12 24-24 24S8 54 8 42 20 8 32 12z"
            fill="#bbdefb"
          />
        </g>
        <text
          x="80"
          y="148"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
          fontSize="32"
          fill="#0d1b2a"
        >
          DP2030
        </text>
      </g>
    </svg>
  );
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("ar");
  const copy = content[locale];

  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"} lang={locale === "ar" ? "ar" : "en"}>
      <section className="hero">
        <LogoBadge />
        <div className="hero-content">
          <div className="badge">
            <span>{copy.hero.subtitle}</span>
            <span>FIFA 2026</span>
          </div>
          <h1>{copy.hero.title}</h1>
          <p>{copy.hero.description}</p>
          <p>
            <strong>{copy.hero.highlight}</strong>
          </p>
          <div className="language-toggle" dir="ltr">
            <button
              type="button"
              className={locale === "ar" ? "active" : ""}
              onClick={() => setLocale("ar")}
            >
              العربية
            </button>
            <button
              type="button"
              className={locale === "en" ? "active" : ""}
              onClick={() => setLocale("en")}
            >
              English
            </button>
          </div>
        </div>
      </section>

      <section className="sections">
        {copy.sections.map((section) => (
          <article key={`${locale}-${section.id}`} className="section-card">
            <h2>{section.title}</h2>
            <p>{section.intro}</p>
            <div className="grid">
              {section.blocks.map((block) => (
                <div key={`${locale}-${section.id}-${block.title}`}>
                  <h3>{block.title}</h3>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
        <article className="section-card cta">
          <strong>{copy.cta.lead}</strong>
          <p>{copy.cta.details}</p>
          <button type="button" className="cta-button">
            {copy.cta.button}
          </button>
          <small>{copy.cta.note}</small>
        </article>
      </section>

      <footer className="footer" dir="ltr">
        <span>{copy.footer.rights}</span>
        <small>{copy.footer.tagline}</small>
      </footer>
    </main>
  );
}
