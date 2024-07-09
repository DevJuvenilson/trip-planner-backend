import nodemailer from "nodemailer";

async function getMailClient() {
    const account = await nodemailer.createTestAccount();
    
    const tranporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: account.user,
            pass: account.pass,
        }
    })

    return tranporter
}

export {
    getMailClient,
}