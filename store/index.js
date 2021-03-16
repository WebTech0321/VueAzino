export const state = () => {
  return {
    // LOCALES MULTILANGUAGE
    locale: { flag: 'us', language: 'en', title: 'English' },
    locales: [
      { flag: 'us', language: 'en', title: 'English' },
      { flag: 'fr', language: 'fr', title: 'Français' },
      { flag: 'es', language: 'es', title: 'Español' }
    ]
  }
}

export const mutations = {
  // languages
  SET_LANG (state, locale) {
    state.locales.forEach((lang) => {
      if (lang.language === locale) {
        state.locale = lang
      }
    })
  }
}

export const getters = {

}

export const actions = {
  nuxtServerInit ({ commit, state }, { req }) {

  }
}
