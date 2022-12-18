export const useFile = () => {
  const readBlobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((res, rej) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)

      reader.onload = () => {
        res(reader.result as string)
      }

      reader.onerror = (error) => {
        rej(error)
      }
    })
  }

  return { readBlobToBase64 }
}
