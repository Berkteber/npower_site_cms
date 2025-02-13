"use strict";

module.exports = {
  async create(ctx) {
    try {
      const { formType, name, email, phone, companyName, productDetails, message } = ctx.request.body.data;

      // 1. Form verisini Strapi'ye kaydet
      const newEntry = await strapi.entityService.create("api::form-submission.form-submission", {
        data: { formType, name, email, phone, companyName, productDetails, message },
      });

      // 2. Form türüne göre ilgili e-posta adresine yönlendirme yap
      let recipientEmail = "berk.teber@creatiwe.co"; // Varsayılan e-posta adresi

      if (formType === "contact") {
        recipientEmail = "berk.teber@creatiwe.co";
      } else if (formType === "offer") {
        recipientEmail = "berk.teber@creatiwe.co";
      } else if (formType === "default") {
        recipientEmail = "berk.teber@creatiwe.co";
      }

      // 3. SendGrid ile e-posta gönder
      await strapi.plugins["email"].services.email.send({
        to: recipientEmail, // Dinamik e-posta yönlendirme
        from: "berktbrnecati@gmail.com",
        subject: `Yeni ${formType} Form Başvurusu`,
        text: `Ad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nFirma: ${companyName}\nMesaj: ${message}`,
        html: `<p><strong>Ad:</strong> ${name}</p>
               <p><strong>E-posta:</strong> ${email}</p>
               <p><strong>Telefon:</strong> ${phone}</p>
               <p><strong>Firma:</strong> ${companyName}</p>
               <p><strong>Ürün Bilgileri:</strong> ${JSON.stringify(productDetails)}</p>
               <p><strong>Mesaj:</strong> ${message}</p>`,
      });

      return newEntry;
    } catch (error) {
      console.error("E-posta gönderme hatası:", error);
      ctx.throw(500, "Form gönderilirken hata oluştu!");
    }
  },
};
