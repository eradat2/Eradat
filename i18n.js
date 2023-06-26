import i18next from 'i18next';
import locI18next from 'loc-i18next';

const localize = locI18next.init(i18next);

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        "home-page.title": "Bridging the Investment<br />Divide in the Middle East",
        "homepage.subtitle": "Your Gateway to Real Estate"
      }
    },
    ar: {
      translation: {
        "home-page.title": "تجاوز فجوة الاستثمار<br />في الشرق الأوسط",
        "homepage.subtitle": "بوابتك إلى العقارات"
      }
    }
  }
}).then(() => {
  // Initialization completed
  localize('.nav'); // Trigger the translation for elements with class "nav"
});

