"use strict";
const axios = require("axios");

module.exports = {
  async create(ctx) {
    try {
      const { formType, name, email, phone, companyName, productDetails, message } = ctx.request.body.data;

      console.log("📩 Yeni form alındı. Gönderilecek veriler:", { formType, name, email, phone, companyName, productDetails, message });

      // 1. Form verisini Strapi'ye kaydet
      const newEntry = await strapi.entityService.create("api::form-submission.form-submission", {
        data: { formType, name, email, phone, companyName, productDetails, message },
      });

      console.log("✅ Form başarıyla Strapi'ye kaydedildi:", newEntry);

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

      console.log("📨 E-posta gönderilmeye hazırlanıyor...");

      // 3. Resend API ile mail gönder
      const response = await axios.post(
        "https://api.resend.com/emails",
        {
          from: "onboarding@resend.dev", // Resend'in test için verdiği adres
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

      console.log("✅ E-posta API'ye başarıyla gönderildi! Resend Yanıtı:", response.data);

      return newEntry;
    } catch (error) {
      console.error("❌ E-posta gönderme hatası:", error.response ? error.response.data : error.message);
      ctx.throw(500, "Form gönderilirken hata oluştu!");
    }
  },
};
