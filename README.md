# Simple Category Pages

## Run on local

1. start one terminal window to run backend server

```bash
cd backend
node category-server.js
```

2. start another terminal window to run ui

```bash
cd jcrew-ui
npm install
npm start
```

open http://localhost:4200/ in your browser to view the page

## Description

The solution done by Angular 10, has 2 pages
http://localhost:4200/products and http://localhost:4200/detail/:productCode. By clicking any single product item on products page, can be navigated to the detail page. Besides the required features, I have also done some others to make the page looks better, please find some key features below.

1. Both pages are responsive, view slightly get changed while changing the screen size.
2. I have included a simple header, it does nothing functional, only for making the page looks a little better.
3. The color swatch images in detail page are clickable. The image get changed once the swatch get clicked.
4. I've made a little changes in the server file to get rid of the CORS issue.
