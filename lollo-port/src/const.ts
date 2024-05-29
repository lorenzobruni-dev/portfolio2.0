export const emailRegex = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"

export type MailForm = {
    NomeUtente?: string
    MailUtente?: string
    DescrizioneUtente?: string
}