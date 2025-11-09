/* eslint-disable no-process-env */

/**
 * Following variables are injected into a .env file  during the build process in CI and
 * will be part of the final docker image. it's still possible to override these variables
 * at runtime, but it can break the application as this variables are build-specific.
 */
type TStaticConfigs = {
  APP_VERSION: string
  PUBLIC_PATH: string
}
export const StaticConfigs: TStaticConfigs = (env => {
  return {
    APP_VERSION: env.APP_VERSION,
    PUBLIC_PATH: env.PUBLIC_PATH,
  }
})(typeof window !== 'undefined' ? window.StaticConfigs : process.env)

export const getAssetPath = (asset: string) =>
  `${StaticConfigs.PUBLIC_PATH}/${asset}`

declare global {
  interface Window {
    StaticConfigs: {
      [K in keyof TStaticConfigs]: TStaticConfigs[K]
    }
  }
}
