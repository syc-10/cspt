/* eslint-disable no-process-env */

const isTrue = (t?: string | boolean) => t === true || t === 'true'

export const ProtectedConfigs = {
  RESOURCE_DOMAINS: (process.env.RESOURCE_DOMAINS || '').split(','),
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 5000,
  GRACEFUL_SHUTDOWN_ENABLED: isTrue(process.env.GRACEFUL_SHUTDOWN_ENABLED),
  SSL_PORT: process.env.SSL_PORT || 443,
  INTERCOM_APP_ID: process.env.INTERCOM_APP_ID,
  INTERCOM_SECRET_KEY: process.env.INTERCOM_SECRET_KEY || '',
  INTERCOM_API_KEY: process.env.INTERCOM_API_KEY || '',
  SERVE_HTTPS: isTrue(process.env.SERVE_HTTPS),
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  GQL_PRIVATE_ENDPOINT:
    process.env.GQL_PRIVATE_ENDPOINT || process.env.GQL_ENDPOINT,
  ENABLE_ASSETS_SERVER: isTrue(process.env.ENABLE_ASSETS_SERVER),
  ENABLE_GQL_LOGGER: isTrue(process.env.ENABLE_GQL_LOGGER),
  CLARITY_ENABLED: isTrue(process.env.CLARITY_ENABLED),
  DASHBOARD_URL: process.env.DASHBOARD_URL,
  LOG_BAD_REDIRECT: isTrue(process.env.LOG_BAD_REDIRECTS ?? 'true'),
}
