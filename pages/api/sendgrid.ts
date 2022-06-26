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
        html: `${req.body.message}`,
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

  return res.status(200).json({ error: "" });
}

export default sendEmail;
