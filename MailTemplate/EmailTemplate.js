// emailTemplates.js
exports.contactUsEmail = (name, email, message, subject) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>New Contact Form Message</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="20" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <tr>
              <td>
                <h2 style="color: #333333;">📩 New Message from Contact Form</h2>
                <p style="font-size: 16px; color: #555555;">You’ve received a new message via your website contact form.</p>

                <table cellpadding="6" cellspacing="0" border="0" width="100%" style="font-size: 15px; color: #333;">
                  <tr>
                    <td style="font-weight: bold; width: 150px;">Name:</td>
                    <td>${name}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold;">Email:</td>
                    <td>${email}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold;">Subject:</td>
                    <td>${subject}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; vertical-align: top;">Message:</td>
                    <td>${message}</td>
                  </tr>
                </table>

                <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;">
                <p style="font-size: 12px; color: #999999;">This message was sent from your website contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
};