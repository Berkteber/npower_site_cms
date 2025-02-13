module.exports = ({ env }) => ({
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: "smtp.sendgrid.net",
          port: 587,
          secure: false,
          auth: {
            user: "apikey", 
            pass: env("SENDGRID_API_KEY"), 
          },
        },
        settings: {
          defaultFrom: "berktbrnecati@gmail.com",
          defaultReplyTo: "berk.teber@creatiwe.co",
        },
      },
    },
});
  