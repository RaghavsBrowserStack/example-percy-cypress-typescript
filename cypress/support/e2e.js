// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// percy.io, the page under test, throws "Could not find module @sentry/browser"
// on load. That's the site's own error, so don't let it fail the spec.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('@sentry/browser')) return false
})
