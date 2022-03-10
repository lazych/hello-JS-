import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

//

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="../assets/style.css">

//     <title>css-grid</title>
//   </head>
//   <body>

//     <h1>CSS Grid Gallery</h1>

//     <div class="container">

//       <div class="gallery-container r1">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="1.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r2">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="2.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r3">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="3.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r4">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="4.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r5">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="5.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r6">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="6.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r7">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="7.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r8">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="1.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r9">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="2.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>

//       <div class="gallery-container r10">
//         <div class="gallery-item">
//           <div class="image">
//             <img src="3.jpg" alt="arch">
//           </div>
//           <div class="text">Paris, 2019</div>
//         </div>
//       </div>
//     </div>

//     <style>
//       body{
//         text-align: center;
//       }

//       .container{
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//         /* grid-auto-rows: 100px; */
//         grid-auto-flow: dense;
//       }

//       .gallery-item{
//         width: 100%;
//         height: 100%;
//         position: relative;
//       }

//       .gallery-item .image{
//         width: 100%;
//         height: 100%;
//         overflow: hidden;
//       }

//       .gallery-item .image img{

//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }

//       .gallery-item .text{
//         position: absolute;
//         top: 5%;
//         left: 5%;
//         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
//         Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//         font-weight: 900;
//         font-size: 10px;
//         color: var(--yellow);
//         font-size: 1.5rem;
//       }

//       .r1{
//         grid-column: span 2;
//       }

//     </style>
//   </body>
// </html>

//
