import { filesize, type FileSizeOptions } from 'filesize'

export const fileSize = (
  size: number,
  options: FileSizeOptions = {},
): string => {
  return filesize(size, {
    spacer: '',
    base: 2,
    output: 'string',
    standard: 'jedec',
    ...options,
  }) as string
}
