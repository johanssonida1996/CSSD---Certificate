import propertyUtil from '@sitevision/api/server/PropertyUtil';
import utils from '@sitevision/api/server/Utils';
import properties from '@sitevision/api/server/Properties';
import searchFactory from '@sitevision/api/server/SearchFactory';

function getArticlesInArchive(archive, articleCount) {
   let items = [],
   filterBuilder = searchFactory.filterBuilder,
   sortBuilder = searchFactory.sortBuilder,
   searcherBuilder = searchFactory.searcherBuilder,
   sortField = sortBuilder.addSortField(searchFactory.getSearchSortField("published", false)).build();

   if (!archive) {
      return [];
   }
   else{
      let archiveID = archive.getIdentifier();
      filterBuilder.addFilterQuery('+path:(' + archiveID + ')');
   }

   let filterForSearch = filterBuilder.addFilterQuery("+svtype:article").build();

   let searchResult = searcherBuilder.setSort(sortField).setFilter(filterForSearch).build().search('*', articleCount);



   if (searchResult.hasHits()) {
      let hitsFilter = searchResult.getHits();
      while (hitsFilter.hasNext()) {
         let hitFilterItem = hitsFilter.next();

         if (hitFilterItem) {
            let node = hitFilterItem.getNode();
            items.push(getPageProps(node));
         }
      }
   }

   return items;
}

function getPageProps(node) {
   let item = {};

   if (node) {
      let pageProps = properties.get(node, 'URI', 'SV.Title', 'SV.Description', 'SV.Content'),
         imageNode = propertyUtil.getNode(node, 'SV.Image');

      item = {
        id: node.getIdentifier(),
        title: pageProps["SV.Title"],
        description: trimText(pageProps["SV.Description"], 100),
        content: trimText(pageProps["SV.Content"], 300),
        image: getRenderedImage(imageNode),
        URI: pageProps.URI,
      };

   }

   return item;
}

function trimText(text, length) {
   let textLimit = length + 1;
   if (text && text.length > textLimit) {
      text = text.substring(0, length) + '...';
   }
   return text;
}

function getRenderedImage(imageNode) {
   let image = '';

   let imgRenderer = utils.getImageRenderer();

   if (imageNode) {
      let imageScaler = utils.getImageScaler(800, 800);
      let imageAlt = propertyUtil.getString(imageNode, 'alt') || '';
      imgRenderer.setImageScaler(imageScaler);
      imgRenderer.setLazyLoad(true);
      imgRenderer.forceUseLazyLoad();
      imgRenderer.forceUseImageScaler();
      imgRenderer.update(imageNode);
      imgRenderer.setDescription(imageAlt);
      image = imgRenderer.render();
   }
   return image;
}

export {
   getArticlesInArchive,
};