import nodemailer from 'nodemailer';

export const handler = async (event) => {
    // const { firstName, lastName, email, phone, description } = JSON.parse(event.body);
    let firstName = 'v1';
    let lastName = 'v2';
    let email = 'v3';
    let phone = 'df';
    let description = 'fd';
    
      let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: 'johnlee199011@outlook.com',
          pass: 'Asf123,.'
        },
      });
    const time = new Date().toLocaleString(); 
    let mailOptions = {
        from: 'johnlee199011@outlook.com',
        to: 'hsbxhshs@gmail.com',
        subject: `${firstName} ${lastName} ${time}`,
        text: `First Name: ${firstName}, Last Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`
    };
    try {
        await transporter.sendMail(mailOptions);
        return { statusCode: 200, body: JSON.stringify({ status: 'success' }) };
    } catch (error) {
        console.error('Error sending email:', error.message);
        return { statusCode: 500, body: JSON.stringify({ status: 'error', message: error.message }) };
    }

};
