import { Price, Color } from ".";

export interface Product {
  "extended-size-group-id": string,
  "extendedSize": string,
  "show-all-colors": boolean,
  "styledWithSkus": string,
  "discountPercentage": number,
  "was": Price,
  "now": Price,
  "apiLink": string,
  "colors": Color,
  "productId": string,
  "productDescription": string,
  "brand": string,
  "videoOnArray": boolean,
  "priority": number,
  "listPrice": Price,
  "url": string,
  "productCode": string,
  "tiles": string[],
  "folderId": string,
  "defaultColorCode": string,
  "enabledBadges": string,
  "shotType": string
}
