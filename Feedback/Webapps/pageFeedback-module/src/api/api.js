import restAppInvokerFactory from "@sitevision/api/server/RestAppInvokerFactory";
const restApp = restAppInvokerFactory.fromPath("rest-api/Feedback - RestApp");
import logUtil from '@sitevision/api/server/LogUtil';

function sendEmail(mail) {
    logUtil.info(`API: ${JSON.stringify(mail)}`);
    let data = restApp.get('/sendEmail', {
        email: mail.email,
        name: mail.name,
        feedback: mail.feedback,
        pageName: mail.pageName,
        pageURL: mail.pageURL
    }).body;

    return data;
}

export { sendEmail }