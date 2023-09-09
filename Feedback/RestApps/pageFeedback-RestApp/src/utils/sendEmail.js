import mailUtil from '@sitevision/api/server/MailUtil';
import logUtil from '@sitevision/api/server/LogUtil';

function sendEmail(mailData) {

   logUtil.info(JSON.stringify(mailData.pageName));
   try {

      const mailBuilder = mailUtil.getMailBuilder();

      const mail = mailBuilder
         .setSubject(`New feedback on ${mailData.pageName}`)
         .setHtmlMessage(`${mailData.name} has provided this feedback: ${mailData.feedback},
         Link to site: <a href="${mailData.pageURL}">${mailData.pageName}</a> `)
         .addRecipient(mailData.email)
         .build();

      mail.send();

      // Om e-posten skickades utan fel, returnera true
      return true;
   } catch (error) {
      console.error("Cant send email:", error);

      // Om ett fel uppstod vid e-postskickning, returnera false
      return false;
   }
}

export default sendEmail;