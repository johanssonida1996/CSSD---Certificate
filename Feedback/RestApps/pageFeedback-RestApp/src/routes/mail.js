import router from "@sitevision/api/common/router";
import sendEmail from '../utils/sendEmail';
import logUtil from "@sitevision/api/server/LogUtil";

router.get("/sendEmail", (req, res) => {

let mail = {
  email: req.params.email,
  name: req.params.name,
  feedback: req.params.feedback,
  pageURL: req.params.pageURL,
  pageName: req.params.pageName,
}
   const emailSent = sendEmail(mail);

   if (emailSent) {
      return res.status(204).send("Email was successfully sent.");
    } else {
      return res.status(400).send("Failed to send Email.");
    }
});