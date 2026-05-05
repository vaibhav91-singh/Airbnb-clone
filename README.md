<img width="1899" height="988" alt="Screenshot 2026-05-03 172940" src="https://github.com/user-attachments/assets/8225ed90-9e7f-482e-b376-1a3e5cf55ccb" />
In This Project I Learn Backend (Node Js)

<img width="1890" height="941" alt="Screenshot 2026-05-03 172953" src="https://github.com/user-attachments/assets/2f02c088-25b5-4615-9dc1-a7370c24ab04" />
This is All listing Hotes Data . 
<div align="center">
  <!-- Dynamic SVG Animation Header -->
  <img src="https://capsule-render.vercel.app/render?type=soft&color=FF5A5F&height=200&section=header&text=Airbnb%20Backend%20Clone&fontSize=70&animation=fadeIn" width="100%"/>

  <br />

  <!-- Technology Badges with Vibrant Colors -->
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  
</div>

<br />

<div style="background-color: #fff5f5; border-radius: 15px; padding: 25px; border: 2px solid #FF5A5F; font-family: 'Segoe UI', sans-serif;">
  
  <h2 align="center" style="color: #FF5A5F; border: none;">🏠 Project Mission</h2>
  <p align="center" style="color: #484848; font-size: 1.1em;">
    Developing a robust, scalable backend architecture for a home-sharing platform. This project focuses on <b>CRUD operations</b>, <b>Schema Design</b>, and seamless <b>Database Integration</b>.
  </p>

  <hr style="border: 0.5px solid #FF5A5F; margin: 20px 0;" />

  <table width="100%" style="border: none; border-collapse: collapse;">
    <tr>
      <td width="50%" style="padding: 10px; vertical-align: top; border: none;">
        <span style="background: #FF5A5F; color: white; padding: 8px 15px; border-radius: 5px; font-weight: bold; display: inline-block; margin-bottom: 12px;">🚀 Key Features</span>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #FF5A5F; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">✅ Listing Creation (POST Data)</span>
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #FF5A5F; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">🔍 Real-time MongoDB Connectivity</span>
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #FF5A5F; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">📖 Data Fetching & Display</span>
          
        </div>
      </td>
      <td width="50%" style="padding: 10px; vertical-align: top; border: none;">
        <span style="background: #008489; color: white; padding: 8px 15px; border-radius: 5px; font-weight: bold; display: inline-block; margin-bottom: 12px;">🧠 Core Concepts Learned</span>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #008489; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">📡 RESTful API Development</span>
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #008489; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">💾 NoSQL Database Architecture</span>
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #008489; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">🔗 Express Middleware Setup</span>
          <span style="background: #ffffff; padding: 8px; border-left: 4px solid #008489; border-radius: 4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.05);">🔄 Request-Response Lifecycle</span>
        </div>
      </td>
    </tr>
  </table>
</div>

<br />

<!-- Animated Heading Button -->
<div align="center">
  <span style="background: #000000; color: #FF5A5F; padding: 10px 25px; border-radius: 50px; font-weight: bold; font-size: 1.4em; display: inline-block;">
    💻 Backend Implementation
  </span>
</div>

<br />

### 🗄️ MongoDB Connection Logic
```javascript
const mongoose = require('mongoose');

// Establishing Connection with MongoDB
main()
  .then(() => console.log("✅ Connection Successful!"))
  .catch(err => console.log("❌ Connection Error:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/airbnb_clone');
}
