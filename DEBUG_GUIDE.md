# 🔧 Hướng Dẫn Debug API Lỗi

## 🚨 **Vấn Đề Hiện Tại**

Bạn đang gặp lỗi: "Xin lỗi, có lỗi xảy ra khi xử lý câu hỏi. Vui lòng kiểm tra kết nối internet và thử lại."

## 🔍 **Các Bước Debug**

### 1. **Kiểm Tra Console Browser**

1. Mở Developer Tools (F12)
2. Vào tab Console
3. Thử gửi một câu hỏi
4. Xem các thông báo lỗi chi tiết

### 2. **Các Loại Lỗi Có Thể Gặp**

#### 🔑 **API Key Issues**

- **Lỗi 403**: API key không hợp lệ hoặc bị từ chối
- **Lỗi 400**: Yêu cầu API không đúng format

#### 🌐 **Network Issues**

- **Lỗi kết nối**: Không thể kết nối đến Google API
- **Timeout**: Yêu cầu quá lâu không phản hồi

#### 📊 **Rate Limiting**

- **Lỗi 429**: Quá nhiều yêu cầu API
- **Quota exceeded**: Đã vượt quá giới hạn sử dụng

### 3. **Kiểm Tra API Key**

#### ✅ **API Key Hợp Lệ**

```
AIzaSyB-RH8eK-Si7S2J8khi3bn17eYSPEIMU1k
```

#### 🔍 **Cách Kiểm Tra**

1. Vào [Google AI Studio](https://aistudio.google.com/)
2. Đăng nhập tài khoản Google
3. Kiểm tra API key có hoạt động không
4. Xem quota còn lại

### 4. **Test API Key Trực Tiếp**

Mở Console và chạy lệnh này:

```javascript
// Test API key
const API_KEY = "AIzaSyB-RH8eK-Si7S2J8khi3bn17eYSPEIMU1k";

fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: "Xin chào, bạn có thể trả lời bằng tiếng Việt không?",
            },
          ],
        },
      ],
    }),
  }
)
  .then((response) => {
    console.log("Status:", response.status);
    return response.json();
  })
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 5. **Các Giải Pháp**

#### 🔄 **Nếu API Key Lỗi**

1. Tạo API key mới từ Google AI Studio
2. Cập nhật API key trong file `script.js`
3. Đảm bảo API key có quyền truy cập Gemini

#### 🌐 **Nếu Lỗi Mạng**

1. Kiểm tra kết nối internet
2. Thử tắt VPN nếu có
3. Kiểm tra firewall/antivirus

#### 📊 **Nếu Quota Hết**

1. Đợi reset quota (thường là 24h)
2. Nâng cấp gói API
3. Tạo project mới với API key mới

### 6. **Thông Báo Lỗi Chi Tiết**

Ứng dụng sẽ hiển thị các thông báo lỗi cụ thể:

- **"API key chưa được cấu hình"** → Cần cập nhật API key
- **"API key không hợp lệ"** → API key sai hoặc bị từ chối
- **"Quá nhiều yêu cầu API"** → Đợi một chút và thử lại
- **"Lỗi server API"** → Lỗi từ phía Google
- **"Không thể kết nối đến AI"** → Lỗi mạng

### 7. **Log Debug**

Trong Console, bạn sẽ thấy:

```
Đang gọi Gemini API với prompt: ...
API Key (first 10 chars): AIzaSyB-RH...
Response status: 200
Response headers: ...
Gemini API response: ...
```

Nếu có lỗi, sẽ thấy:

```
API Error Response: {...}
Lỗi API chi tiết: Error: ...
```

## 🆘 **Cần Hỗ Trợ?**

Nếu vẫn gặp vấn đề, hãy:

1. Copy toàn bộ thông báo lỗi từ Console
2. Gửi cho tôi để phân tích
3. Kiểm tra API key có hoạt động không

## 📝 **Ghi Chú**

- API key hiện tại: `AIzaSyB-RH8eK-Si7S2J8khi3bn17eYSPEIMU1k`
- Model sử dụng: `gemini-1.5-flash` (đã cập nhật từ gemini-pro)
- Endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent`
