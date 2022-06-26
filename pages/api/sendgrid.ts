import sendgrid from "@sendgrid/mail";
import { SENDGRID_API_KEY } from '../../config';

sendgrid.setApiKey(SENDGRID_API_KEY);

async function sendEmail(req: any, res: any) {
  console.log(req.body);
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid
      .send({
        to: ["tristenputnam@outlook.com", "myrezach@live.com"], // Your email where you'll receive emails
        from: "zacharymyre@gmail.com", // your website email addressS here
        subject: `${req.body.subject}`,
        html: `
        <h1>Senjin Solutions Email</h1>
        <h2>Name: ${req.body.fullname}</h2>
        <h3>Email: ${req.body.email}</h3>
        
        ${req.body.message}
        
        `,
      })
      .then((res) => {
        console.log("RESPONSE FROM SENDGRID PROMISE <3");
        console.log(res);
      });

    return res.status(200).json({ message: "Success!" });
  } catch (error: any) {
    console.log(" ################ ERROR ################");
    console.log(error.body);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
