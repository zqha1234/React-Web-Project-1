const aws = require("aws-sdk");
const ses = new aws.SES({ region: "ca-central-1" });

exports.handler = async function (event) {
  try {
    const { firstName, lastName, email, phone, description } = JSON.parse(event.body);
    const time = new Date().toLocaleString();
    
    const params = {
      Destination: {
        ToAddresses: ["hsbxhshs@gmail.com"],
      },
      Message: {
        Body: {
          Text: {
            Data: `First Name: ${firstName}, Last Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`
          },
        },
        Subject: { Data: `${firstName} ${lastName} ${time}` },
      },
      Source: "hsbxhshs@gmail.com",
    };

    await ses.sendEmail(params).promise();

return {
  statusCode: 200,
    headers: {
        "Access-Control-Allow-Origin": "https://haideepackaging.com",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
  body: JSON.stringify({ message: "Success" }),
};
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://haideepackaging.com",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ message: "Failed to send email!!!" }),
    };
  }
};