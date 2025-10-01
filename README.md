# Phiên Tòa Triết Học: Biến Đổi Khí Hậu

Một ứng dụng web tương tác mô phỏng phiên tòa triết học về biến đổi khí hậu dưới góc nhìn triết học Mác-Lênin.

## 🎯 Mô Tả

Ứng dụng này cho phép người dùng tham gia vào một phiên tòa triết học ảo, nơi họ có thể đặt câu hỏi cho các nhân vật đại diện cho các quan điểm khác nhau về biến đổi khí hậu:

- **Karl Marx**: Triết gia, nhà kinh tế học với quan điểm duy vật biện chứng
- **Vladimir Lenin**: Lãnh tụ cách mạng với quan điểm Mác-Lênin
- **Đại Diện Tư Bản**: Quan điểm chủ nghĩa tư bản và thị trường tự do
- **Đại Diện Tự Nhiên**: Quan điểm sinh thái học và bảo vệ môi trường
- **Giai Cấp Công Nhân**: Quan điểm của người lao động

## ✨ Tính Năng

- 🎭 **5 nhân vật AI** với phong cách và quan điểm riêng biệt
- ⏰ **Đồng hồ đếm ngược** 5 phút cho phiên tòa
- 💬 **Giao diện chat tương tác** với các nhân vật
- 🎤 **Text-to-Speech** để đọc phản hồi
- 📊 **Hệ thống đánh giá** và kết luận tự động
- 📱 **Responsive design** cho mọi thiết bị
- 🎨 **Giao diện đẹp** với hiệu ứng và animation

## 🚀 Cài Đặt

### Yêu Cầu

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối internet để sử dụng Gemini API

### Cài Đặt Đơn Giản

1. Tải tất cả các file về máy
2. Mở file `index.html` trong trình duyệt
3. Bắt đầu sử dụng!

### Cấu Hình Gemini API (Tùy Chọn)

Để sử dụng AI thực tế thay vì mock responses:

1. Lấy API key từ [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Mở file `script.js`
3. Tìm dòng `const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';`
4. Thay thế bằng API key thực tế của bạn

```javascript
const API_KEY = "your_actual_api_key_here";
```

## 🎮 Cách Sử Dụng

### Bắt Đầu Phiên Tòa

1. Click nút "Bắt Đầu Phiên Tòa"
2. Chọn một nhân vật từ danh sách
3. Đặt câu hỏi về biến đổi khí hậu
4. Nhận phản hồi từ nhân vật đã chọn

### Tương Tác

- **Chọn nhân vật**: Click vào card nhân vật hoặc dùng dropdown
- **Đặt câu hỏi**: Gõ câu hỏi và nhấn Enter hoặc click "Gửi"
- **Nghe phản hồi**: Click nút loa để nghe text-to-speech
- **Kết luận**: Sau 5 phút, hệ thống sẽ tự động tạo kết luận và đánh giá

### Ví Dụ Câu Hỏi

- "Biến đổi khí hậu có phải là hậu quả của chủ nghĩa tư bản không?"
- "Làm thế nào để giải quyết vấn đề môi trường một cách bền vững?"
- "Vai trò của giai cấp công nhân trong cuộc chiến chống biến đổi khí hậu là gì?"
- "Thị trường tự do có thể giải quyết vấn đề môi trường không?"

## 🏗️ Cấu Trúc Dự Án

```
phiên-tòa-triết-học/
├── index.html          # File HTML chính
├── styles.css          # File CSS styling
├── script.js           # File JavaScript logic
└── README.md           # Hướng dẫn sử dụng
```

## 🔧 Tùy Chỉnh

### Thêm Nhân Vật Mới

1. Mở file `script.js`
2. Tìm object `characters` trong class `PhilosophicalTrial`
3. Thêm nhân vật mới với cấu trúc:

```javascript
newCharacter: {
    name: "Tên Nhân Vật",
    icon: "fas fa-icon-class",
    color: "#color-code",
    prompt: "Prompt mô tả quan điểm của nhân vật...",
    responses: []
}
```

### Thay Đổi Thời Gian Phiên Tòa

Tìm dòng `this.trialTime = 5 * 60;` và thay đổi số phút mong muốn.

### Tùy Chỉnh Giao Diện

Chỉnh sửa file `styles.css` để thay đổi màu sắc, font chữ, layout...

## 🎨 Tính Năng Kỹ Thuật

- **Pure HTML/CSS/JavaScript**: Không cần framework phức tạp
- **Responsive Design**: Tương thích mọi kích thước màn hình
- **Text-to-Speech**: Sử dụng Web Speech API
- **AI Integration**: Hỗ trợ Gemini API
- **Local Storage**: Lưu trữ lịch sử cuộc trò chuyện
- **Animation**: Hiệu ứng mượt mà với CSS3

## 🐛 Xử Lý Lỗi

### Lỗi Text-to-Speech

- Đảm bảo trình duyệt hỗ trợ Web Speech API
- Kiểm tra quyền truy cập microphone (nếu cần)

### Lỗi API

- Kiểm tra kết nối internet
- Xác nhận API key Gemini hợp lệ
- Ứng dụng sẽ tự động chuyển sang mock responses nếu API lỗi

### Lỗi Hiển Thị

- Làm mới trang web
- Kiểm tra console để xem lỗi chi tiết

## 📝 Giấy Phép

Dự án này được tạo ra cho mục đích giáo dục và nghiên cứu. Bạn có thể tự do sử dụng và chỉnh sửa theo nhu cầu.

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request để cải thiện dự án.

## 📞 Liên Hệ

Nếu có câu hỏi hoặc góp ý, vui lòng tạo issue trên GitHub.

---

**Chúc bạn có những trải nghiệm thú vị với phiên tòa triết học!** 🎭✨
