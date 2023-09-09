import propertyUtil from '@sitevision/api/server/PropertyUtil';
import utils from '@sitevision/api/server/Utils';
import properties from '@sitevision/api/server/Properties';
import searchFactory from '@sitevision/api/server/SearchFactory';

function getArticlesInArchive(archive) {
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

   let searchResult = searcherBuilder.setSort(sortField).setFilter(filterForSearch).build().search('*', 10);



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
        description: trimDescription(pageProps["SV.Description"]),
        content: trimContent(pageProps["SV.Content"]),
        image: getRenderedImage(imageNode),
        URI: pageProps.URI,
      };

   }

   return item;
}

function trimDescription(description) {
   let length = 100;
   if (description) {
      if (description.length > 101) {
         description = description.substring(0, length) + '...';
      }
   }
   return description;
}

function trimContent(content) {
   let length = 300;
   if (content) {
      if (content.length > 301) {
         content = content.substring(0, length) + '...';
      }
   }
   return content;
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