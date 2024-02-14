# React + TypeScript + Vite + Express

## Getting Started
you need to open two terminals, one for the frontend and the other for the backend.

### Backend
```bash
cd api/
npm install
npm start
```

### Frontend
```bash
cd fe/
npm install
npm run dev
```

## Features
Start searching for a product, then you should see a list of 4 products, you can click on any product to see more details.

Pay special attention to a hidden easter egg after navigation ;)

## Performance
The compiled version of the frontend was tested by Google Lighthouse.

<img width="605" alt="lighthouse-home" src="https://github.com/maxistahl/meli-fe/assets/1633694/9fdaab24-b4b3-45e2-94d6-042dc6e0529d">

<img width="602" alt="lighthouse-search" src="https://github.com/maxistahl/meli-fe/assets/1633694/e446817a-31d5-4f95-a393-d0d5c792d642">

<img width="610" alt="lighthouse-product" src="https://github.com/maxistahl/meli-fe/assets/1633694/6759f707-01d0-40f8-8d1a-e06aeada30fb">
CLS Issue affect the Lighthouse score but performance.