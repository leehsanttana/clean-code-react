export const MakeApiUrl = (path: string): string => {
  return `process.env.API_URL${path}`
}
