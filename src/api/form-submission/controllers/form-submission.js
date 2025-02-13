"use strict";
const axios = require("axios");

module.exports = {
  async create(ctx) {
    try {
      const { formType, name, email, phone, companyName, productDetails, message } = ctx.request.body.data;

      // 1. Form verisini Strapi'ye kaydet
      const newEntry = await strapi.entityService.create("api::form-submission.form-submission", {
        data: { formType, name, email, phone, companyName, productDetails, message },
      });

      // 2. E-posta içeriğini hazırla
      const emailContent = `
        <h2>Yeni ${formType} Form Başvurusu</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Firma:</strong> ${companyName}</p>
        <p><strong>Ürün Bilgileri:</strong> ${JSON.stringify(productDetails)}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `;

      // 3. Resend API ile mail gönder
      await axios.post(
        "https://api.resend.com/emails",
        {
          from: "info@resend.dev", // Test için bu adresi kullanabilirsin
          to: ["berk.teber@creatiwe.co"], // Buraya alıcı e-posta adresini yaz
          subject: `Yeni ${formType} Form Başvurusu`,
          html: emailContent,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return newEntry;
    } catch (error) {
      console.error("E-posta gönderme hatası:", error);
      ctx.throw(500, "Form gönderilirken hata oluştu!");
    }
  },
};
"use strict";
const axios = require("axios");

module.exports = {
  async create(ctx) {
    try {
      const { formType, name, email, phone, companyName, productDetails, message } = ctx.request.body.data;

      // 1. Form verisini Strapi'ye kaydet
      const newEntry = await strapi.entityService.create("api::form-submission.form-submission", {
        data: { formType, name, email, phone, companyName, productDetails, message },
      });

      // 2. E-posta içeriğini hazırla
      const emailContent = `
        <h2>Yeni ${formType} Form Başvurusu</h2>
        <p><strong>Ad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Firma:</strong> ${companyName}</p>
        <p><strong>Ürün Bilgileri:</strong> ${JSON.stringify(productDetails)}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `;

      // 3. Resend API ile mail gönder
      await axios.post(
        "https://api.resend.com/emails",
        {
          from: "info@resend.dev", // Test için bu adresi kullanabilirsin
          to: ["berk.teber@creatiwe.co"], // Buraya alıcı e-posta adresini yaz
          subject: `Yeni ${formType} Form Başvurusu`,
          html: emailContent,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return newEntry;
    } catch (error) {
      console.error("E-posta gönderme hatası:", error);
      ctx.throw(500, "Form gönderilirken hata oluştu!");
    }
  },
};
