import appData from "@sitevision/api/server/appData";
import nodeTypeUtil from "@sitevision/api/server/NodeTypeUtil";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import properties from "@sitevision/api/server/Properties";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
import storage from "@sitevision/api/server/storage";
import trashcanUtil from "@sitevision/api/server/TrashcanUtil";
import logUtil from "@sitevision/api/server/LogUtil";


// const feedbackStore = storage.getCollectionDataStore("feedback");
// logUtil.info(`Test: ${JSON.stringify(feedbackStore)}`);

const isTrashed = (node) => {
   return !node || trashcanUtil.isInTrashcan(node);
 };
 
 export const getFeedback = () => {
   const showAllFeedback = appData.get("feedbacks") == "allFeedbacks";
   const feedbackStore = storage.getCollectionDataStore("feedback");
   const query = showAllFeedback
     ? "*"
     : `ds.analyzed.page:${portletContextUtil.getCurrentPage().getIdentifier()}`;
   const pageFeedback = feedbackStore.find(query, 100, 0).toArray();
 
   return pageFeedback
     .map((data) => {
       const { page, name, feedback } = data;
       const pageNode = resourceLocatorUtil.getNodeByIdentifier(page);
       if (!isTrashed(pageNode)) {
         const mappedFeedback = {
           name,
           feedback,
         };

          const nameProperty = nodeTypeUtil.isArticle(pageNode)
          ? "articleName"
          : "displayName";
          const pageData = properties.get(pageNode, nameProperty, "URI");
          mappedFeedback.pageURI = pageData.URI;
          mappedFeedback.pageName = pageData[nameProperty];
 
         return mappedFeedback;
       }
     })
     .filter((feedback) => !!feedback);
 };