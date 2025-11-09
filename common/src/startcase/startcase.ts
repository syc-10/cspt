// we were using capitalCase from the library https://www.npmjs.com/package/change-case
// but the library had an issue where it was striping accent characters from word (eg : 'tìtulo' becomes 'T Tulo')
export const startCase = (text: string) => {
  if (typeof text !== 'string' || text.length === 0) {
    return text
  }
  return text[0].toUpperCase() + text.slice(1)
}
