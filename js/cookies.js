(function () {
  'use strict'

  var CONSENT_KEY = 'dp-cookie-consent'
  var CONSENT_VALUE_ACCEPT = 'accepted'
  var CONSENT_VALUE_REJECT = 'rejected'

  function getConsent() {
    return localStorage.getItem(CONSENT_KEY)
  }

  function setConsent(value) {
    localStorage.setItem(CONSENT_KEY, value)
  }

  function getLang() {
    return localStorage.getItem('dp-lang') || 'es'
  }

  function t(key) {
    var dict = {
      es: {
        message: 'Este sitio utiliza cookies propias y de terceros para fines analíticos y publicitarios. Puedes aceptar todas, rechazar todas o configurar tus preferencias.',
        acceptAll: 'Aceptar todas',
        rejectAll: 'Rechazar todas',
        policyLink: 'Política de cookies'
      },
      en: {
        message: 'This site uses first and third-party cookies for analytics and advertising purposes. You can accept all, reject all, or configure your preferences.',
        acceptAll: 'Accept all',
        rejectAll: 'Reject all',
        policyLink: 'Cookie Policy'
      }
    }
    var lang = getLang()
    return (dict[lang] && dict[lang][key]) || dict.es[key] || ''
  }

  function createBanner() {
    if (getConsent()) return

    var banner = document.createElement('div')
    banner.className = 'cookie-banner'
    banner.setAttribute('role', 'dialog')
    banner.setAttribute('aria-label', 'Cookie consent')

    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<p class="cookie-banner-text">' + t('message') + ' ' +
          '<a href="' + getBasePath() + 'privacidad/" class="cookie-banner-link">' + t('policyLink') + '</a>' +
        '</p>' +
        '<div class="cookie-banner-actions">' +
          '<button class="cookie-btn cookie-btn-accept" data-consent="accepted">' + t('acceptAll') + '</button>' +
          '<button class="cookie-btn cookie-btn-reject" data-consent="rejected">' + t('rejectAll') + '</button>' +
        '</div>' +
      '</div>'

    document.body.appendChild(banner)

    var buttons = banner.querySelectorAll('.cookie-btn')
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-consent')
        setConsent(value)
        banner.remove()
        if (value === CONSENT_VALUE_ACCEPT) {
          loadThirdPartyScripts()
        }
        document.dispatchEvent(new CustomEvent('cookieConsent', { detail: { consent: value } }))
      })
    }
  }

  function getBasePath() {
    var path = window.location.pathname
    if (path.endsWith('/index.html') || path.endsWith('/')) {
      var depth = (path.match(/\//g) || []).length - 1
      if (depth <= 1) return ''
    }
    var depth = (path.match(/\//g) || []).length - 1
    var prefix = ''
    for (var i = 0; i < depth; i++) prefix += '../'
    return prefix
  }

  function loadThirdPartyScripts() {
    document.dispatchEvent(new CustomEvent('loadThirdPartyScripts'))
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createBanner)
    } else {
      createBanner()
    }
    if (getConsent() === CONSENT_VALUE_ACCEPT) {
      loadThirdPartyScripts()
    }
  }

  init()

  window.cookieConsent = {
    getConsent: getConsent,
    setConsent: setConsent
  }
})()
