require("dotenv").config();
const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");

const API_KEY = process.env.API_KEY;
const FILE_PATH = "C:\\Users\\ADMIN\\Downloads\\HoaDon-01110625.pdf";

(async () => {
  try {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(FILE_PATH));
    formData.append("output_type", "flat-json");

    console.log("📤 Đang gửi file:", FILE_PATH);

    const response = await fetch("https://extraction-api.nanonets.com/extract", {
      method: "POST",
      headers: { Authorization: `Bearer ${API_KEY}` },
      body: formData,
    });

    const result = await response.json();
    // ... phần xử lý dữ liệu giữ nguyên
  } catch (err) {
    console.error("❌ Error:", err);
  }
})();
