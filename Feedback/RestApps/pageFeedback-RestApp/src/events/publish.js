import events from '@sitevision/api/server/events';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';
import properties from '@sitevision/api/server/Properties';
import mailUtil from '@sitevision/api/server/MailUtil';



events.on("sv:publishing:publish", (options) =>{

   const pageNode = resourceLocatorUtil.getNodeByIdentifier(options.node);
   const emitterNode = resourceLocatorUtil.getNodeByIdentifier(options.emitter);

   const emiiterName = properties.get(emitterNode, "displayName");
   const pageData = properties.get(pageNode, "displayName", "URL");

   const mailBuilder = mailUtil.getMailBuilder();

   const mail = mailBuilder
   .setSubject(`${pageData.displayName} was published`)
   .setHtmlMessage(`${emiiterName} published <a href="${pageData.Url}">${pageData.displayName}</a> `)
   .addRecipient("ida.johansson@consid.se")
   .build();

   {/*mail.send();*/} 

});