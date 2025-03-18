import { factories } from "@strapi/strapi";
import axios from "axios";

export default factories.createCoreController("api::form-submission.form-submission", ({ strapi }) => ({
  async create(ctx) {
    try {
      console.log("✅ Strapi form controller çağrıldı!");

      // 1. Form verisini al ve hata kontrolü yap
      const requestData = ctx.request.body?.data || {};
      const { formType, name, email, phone, companyName, productDetails, message } = requestData;

      console.log("📩 Gelen form verileri:", requestData);

      // 2. Form verisini Strapi'ye kaydet
      const newEntry = await strapi.entityService.create("api::form-submission.form-submission", {
        data: { formType, name, email, phone, companyName, productDetails, message },
      });

      console.log("✅ Form başarıyla kaydedildi:", newEntry);

      // 3. E-posta içeriğini hazırla
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

      // 4. Resend API ile mail gönder
      const response = await axios.post(
        "https://api.resend.com/emails",
        {
          from: "onboarding@resend.dev",
          to: ["berktbrnecati@gmail.com"],
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
      console.error("❌ Hata:", error.response ? error.response.data : error.message);
      ctx.throw(500, `Form gönderilirken hata oluştu: ${error.message}`);
    }
  }
}));
