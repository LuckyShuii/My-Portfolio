import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      about: "About"
    },
    home: {
      header: "Welcome to the Vue 3 I18n tutorial!",
      created_by: "This tutorial was brought to you by Lokalise."
    },
    about: {
      header: "About us"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos"
    },
    home: {
      header: "Bienvenue dans le tutoriel Vue 3 I18n !",
      created_by: "Ce tutoriel a été réalisé par Lokalise."
    },
    about: {
      header: "À propos de nous"
    }
  }
}

export default createI18n({
    // @local: default language for the app
    locale: import.meta.env.VITE_DEFAULT_LOCALE, 
    // @fallbackLocale: fallback language for the app if a translation is not found
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    // @legacy: false: use the new composition API from Vue3 for i18n
    legacy: false,
    // @globalInjection: true: use the global injection for i18n, allows to use $t() in the template instead of importing the i18n instance everytime
    globalInjection: true,
    messages
})