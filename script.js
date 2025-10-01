// Phiên Tòa Triết Học - Biến Đổi Khí Hậu
class PhilosophicalTrial {
  constructor() {
    this.trialTime = 15 * 60;
    this.timeLeft = this.trialTime;
    this.timerInterval = null;
    this.isTrialActive = false;
    this.conversationHistory = [];
    this.selectedCharacter = null;
    this.synthesis = null;

    this.characters = {
      marx: {
        name: "Karl Marx",
        icon: "fas fa-user-tie",
        color: "#e74c3c",
        prompt: `Bạn là Karl Marx, nhà triết học và kinh tế học người Đức (1818-1883). Bạn đang tham gia một phiên tòa triết học về biến đổi khí hậu. Hãy trả lời câu hỏi từ góc nhìn duy vật biện chứng và chủ nghĩa Mác.

QUAN ĐIỂM CỦA BẠN VỀ BIẾN ĐỔI KHÍ HẬU:
- Biến đổi khí hậu là sản phẩm của mâu thuẫn cơ bản trong phương thức sản xuất tư bản chủ nghĩa
- Chủ nghĩa tư bản đã tách con người khỏi tự nhiên, biến tự nhiên thành đối tượng khai thác vô hạn
- Giai cấp tư sản coi môi trường như nguồn tài nguyên vô tận để tối đa hóa lợi nhuận
- Chỉ có cách mạng xã hội chủ nghĩa mới giải quyết triệt để vấn đề môi trường
- Cần xây dựng xã hội mới dựa trên sở hữu tập thể và kế hoạch hóa kinh tế khoa học

PHONG CÁCH TRẢ LỜI:
- Sử dụng thuật ngữ triết học Mác: "duy vật biện chứng", "mâu thuẫn cơ bản", "phương thức sản xuất"
- Phân tích sâu sắc mối quan hệ giữa kinh tế và môi trường
- Nhấn mạnh vai trò của giai cấp công nhân trong giải quyết vấn đề môi trường
- Trả lời bằng tiếng Việt, khoảng 50-100 từ, ngắn gọn và dễ hiểu`,

        responses: [],
      },
      lenin: {
        name: "Vladimir Lenin",
        icon: "fas fa-user-tie",
        color: "#e67e22",
        prompt: `Bạn là Vladimir Lenin (1870-1924), lãnh tụ cách mạng và người phát triển chủ nghĩa Mác-Lênin. Bạn đang tham gia phiên tòa triết học về biến đổi khí hậu. Hãy trả lời từ góc nhìn cách mạng và thực tiễn.

QUAN ĐIỂM CỦA BẠN VỀ BIẾN ĐỔI KHÍ HẬU:
- Biến đổi khí hậu là vấn đề cấp bách cần giải quyết bằng cách mạng xã hội chủ nghĩa
- Chủ nghĩa đế quốc là nguyên nhân chính gây ra khủng hoảng môi trường toàn cầu
- Cần có sự lãnh đạo của đảng cách mạng để tổ chức cuộc đấu tranh bảo vệ môi trường
- Giai cấp công nhân phải liên minh với nông dân để xây dựng xã hội mới
- Áp dụng nguyên tắc tập trung dân chủ trong quản lý tài nguyên thiên nhiên
- Cách mạng xã hội chủ nghĩa tạo điều kiện phát triển bền vững

PHONG CÁCH TRẢ LỜI:
- Sử dụng thuật ngữ cách mạng: "đảng cách mạng", "tập trung dân chủ", "liên minh công-nông"
- Nhấn mạnh tính cấp bách và thực tiễn của vấn đề
- Đưa ra giải pháp cụ thể và khả thi
- Trả lời bằng tiếng Việt, khoảng 50-100 từ, ngắn gọn và dễ hiểu`,

        responses: [],
      },
      capitalist: {
        name: "Đại Diện Tư Bản",
        icon: "fas fa-chart-line",
        color: "#f39c12",
        prompt: `Bạn là đại diện của chủ nghĩa tư bản và thị trường tự do. Bạn đang tham gia phiên tòa triết học về biến đổi khí hậu. Hãy trả lời từ góc nhìn kinh tế thị trường.

QUAN ĐIỂM CỦA BẠN VỀ BIẾN ĐỔI KHÍ HẬU:
- Thị trường tự do và công nghệ sẽ giải quyết vấn đề biến đổi khí hậu hiệu quả nhất
- Tăng trưởng kinh tế là ưu tiên hàng đầu, môi trường được bảo vệ qua cơ chế thị trường
- Các công ty tư nhân có động lực mạnh mẽ phát triển công nghệ xanh vì lợi nhuận
- Chính phủ không nên can thiệp quá sâu vào hoạt động thị trường
- Carbon trading và cơ chế thị trường khác sẽ giảm phát thải hiệu quả hơn quy định
- Cạnh tranh thúc đẩy đổi mới và phát triển công nghệ sạch

PHONG CÁCH TRẢ LỜI:
- Sử dụng thuật ngữ kinh tế: "thị trường tự do", "cạnh tranh", "lợi nhuận", "hiệu quả"
- Nhấn mạnh vai trò của tư nhân và thị trường
- Đưa ra ví dụ cụ thể về thành công của thị trường
- Trả lời bằng tiếng Việt, khoảng 50-100 từ, ngắn gọn và dễ hiểu`,

        responses: [],
      },
      nature: {
        name: "Đại Diện Tự Nhiên",
        icon: "fas fa-leaf",
        color: "#27ae60",
        prompt: `Bạn là đại diện của tự nhiên và môi trường sinh thái. Bạn đang tham gia phiên tòa triết học về biến đổi khí hậu. Hãy trả lời từ góc nhìn sinh thái học.

QUAN ĐIỂM CỦA BẠN VỀ BIẾN ĐỔI KHÍ HẬU:
- Con người là một phần của tự nhiên, không phải chủ nhân của tự nhiên
- Biến đổi khí hậu là hậu quả của việc con người phá vỡ cân bằng sinh thái
- Cần thay đổi căn bản cách con người tương tác với tự nhiên
- Phát triển bền vững phải dựa trên nguyên tắc tôn trọng giới hạn của tự nhiên
- Cần bảo vệ đa dạng sinh học và các hệ sinh thái tự nhiên
- Mọi hoạt động kinh tế phải tính đến tác động môi trường

PHONG CÁCH TRẢ LỜI:
- Sử dụng thuật ngữ sinh thái: "cân bằng sinh thái", "đa dạng sinh học", "hệ sinh thái"
- Nhấn mạnh sự hài hòa giữa con người và tự nhiên
- Đưa ra cảnh báo về hậu quả của việc phá vỡ tự nhiên
- Trả lời bằng tiếng Việt, khoảng 50-100 từ, ngắn gọn và dễ hiểu`,

        responses: [],
      },
      worker: {
        name: "Giai Cấp Công Nhân",
        icon: "fas fa-hard-hat",
        color: "#8e44ad",
        prompt: `Bạn là đại diện của giai cấp công nhân và người lao động. Bạn đang tham gia phiên tòa triết học về biến đổi khí hậu. Hãy trả lời từ góc nhìn của người lao động.

QUAN ĐIỂM CỦA BẠN VỀ BIẾN ĐỔI KHÍ HẬU:
- Công nhân là những người chịu tác động trực tiếp nhất của biến đổi khí hậu
- Cần có công ăn việc làm bền vững và an toàn cho môi trường
- Chuyển đổi năng lượng phải đảm bảo quyền lợi của người lao động
- Cần đào tạo và chuyển đổi nghề nghiệp cho công nhân trong ngành năng lượng
- Công đoàn phải đấu tranh cho quyền lợi môi trường của người lao động
- Cần có sự tham gia của công nhân trong các quyết định về môi trường

PHONG CÁCH TRẢ LỜI:
- Sử dụng thuật ngữ lao động: "công nhân", "công đoàn", "quyền lợi lao động", "công ăn việc làm"
- Nhấn mạnh tác động thực tế đến đời sống người lao động
- Đưa ra yêu cầu cụ thể về quyền lợi và bảo vệ lao động
- Trả lời bằng tiếng Việt, khoảng 50-100 từ, ngắn gọn và dễ hiểu`,

        responses: [],
      },
    };

    this.init();
  }

  // Khởi tạo ứng dụng
  init() {
    this.setupEventListeners();
    this.initTextToSpeech();
    this.updateTimerDisplay();
  }

  // Thiết lập các sự kiện
  setupEventListeners() {
    // Nút bắt đầu phiên tòa
    document.getElementById("start-trial").addEventListener("click", () => {
      this.startTrial();
    });

    // Chọn nhân vật
    document.querySelectorAll(".character-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const character = e.currentTarget.dataset.character;
        this.selectCharacter(character);
      });
    });

    // Dropdown chọn nhân vật trong chat
    document
      .getElementById("character-select")
      .addEventListener("change", (e) => {
        this.selectedCharacter = e.target.value;
        this.updateSelectedCharacterDisplay();
        this.toggleInputState();
      });

    // Gửi câu hỏi
    document.getElementById("send-question").addEventListener("click", () => {
      this.sendQuestion();
    });

    // Enter để gửi câu hỏi
    document
      .getElementById("question-input")
      .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.sendQuestion();
        }
      });

    // Text-to-speech
    document.getElementById("speak-response").addEventListener("click", () => {
      this.speakLastResponse();
    });

    // Kết luận phiên tòa
    document.getElementById("conclude-trial").addEventListener("click", () => {
      this.concludeTrial();
    });

    // Bắt đầu lại
    document.getElementById("restart-trial").addEventListener("click", () => {
      this.restartTrial();
    });
  }

  // Khởi tạo Text-to-Speech
  initTextToSpeech() {
    if ("speechSynthesis" in window) {
      this.synthesis = window.speechSynthesis;
    }
  }

  // Bắt đầu phiên tòa
  startTrial() {
    this.isTrialActive = true;
    this.timeLeft = this.trialTime;
    this.conversationHistory = [];

    // Ẩn phần chọn nhân vật, hiện chat interface
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("chat-interface").style.display = "block";

    // Bắt đầu đếm ngược
    this.startTimer();

    // Thêm thông báo hệ thống
    this.addSystemMessage(
      "Phiên tòa đã bắt đầu! Hãy chọn một nhân vật và đặt câu hỏi về biến đổi khí hậu từ góc nhìn triết học Mác-Lênin."
    );

    // Cập nhật nút
    document.getElementById("start-trial").textContent =
      "Phiên Tòa Đang Diễn Ra";
    document.getElementById("start-trial").disabled = true;
  }

  // Bắt đầu đếm ngược
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      this.updateTimerDisplay();

      if (this.timeLeft <= 0) {
        this.endTrial();
      }
    }, 1000);
  }

  // Cập nhật hiển thị thời gian
  updateTimerDisplay() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    const timeString = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
    document.getElementById("timer").textContent = timeString;

    // Đổi màu khi sắp hết thời gian
    const timerElement = document.querySelector(".timer");
    if (this.timeLeft <= 60) {
      timerElement.style.background =
        "linear-gradient(45deg, #e74c3c, #c0392b)";
    } else if (this.timeLeft <= 180) {
      timerElement.style.background =
        "linear-gradient(45deg, #f39c12, #e67e22)";
    }
  }

  // Chọn nhân vật
  selectCharacter(characterId) {
    // Bỏ chọn tất cả
    document.querySelectorAll(".character-card").forEach((card) => {
      card.classList.remove("selected");
    });

    // Chọn nhân vật được click
    document
      .querySelector(`[data-character="${characterId}"]`)
      .classList.add("selected");

    this.selectedCharacter = characterId;
    this.updateSelectedCharacterDisplay();
    this.toggleInputState();
  }

  // Cập nhật hiển thị nhân vật đã chọn
  updateSelectedCharacterDisplay() {
    const selectedCharacterElement =
      document.getElementById("selected-character");
    if (this.selectedCharacter && this.characters[this.selectedCharacter]) {
      const character = this.characters[this.selectedCharacter];
      selectedCharacterElement.innerHTML = `
                <i class="${character.icon}"></i>
                ${character.name}
            `;
    } else {
      selectedCharacterElement.innerHTML =
        "<span>Chọn nhân vật để bắt đầu</span>";
    }
  }

  // Bật/tắt trạng thái input
  toggleInputState() {
    const questionInput = document.getElementById("question-input");
    const sendButton = document.getElementById("send-question");
    const speakButton = document.getElementById("speak-response");
    const concludeButton = document.getElementById("conclude-trial");

    const isEnabled = this.selectedCharacter && this.isTrialActive;

    questionInput.disabled = !isEnabled;
    sendButton.disabled = !isEnabled;
    speakButton.disabled = !isEnabled;
    concludeButton.disabled = !isEnabled;

    if (isEnabled) {
      questionInput.focus();
    }
  }

  // Gửi câu hỏi
  async sendQuestion() {
    const questionInput = document.getElementById("question-input");
    const question = questionInput.value.trim();

    if (!question) {
      this.addMessage("system", "Hệ thống", "Vui lòng nhập câu hỏi!");
      return;
    }

    if (!this.selectedCharacter) {
      this.addMessage(
        "system",
        "Hệ thống",
        "Vui lòng chọn một nhân vật trước khi đặt câu hỏi!"
      );
      return;
    }

    // Thêm câu hỏi của người dùng vào chat
    this.addMessage("user", "Bạn", question);

    // Xóa input
    questionInput.value = "";

    // Hiển thị loading
    this.showLoading();

    try {
      // Gọi AI để tạo phản hồi
      const response = await this.getAIResponse(
        question,
        this.selectedCharacter
      );

      // Thêm phản hồi vào chat
      this.addMessage(
        "character",
        this.characters[this.selectedCharacter].name,
        response
      );

      // Lưu vào lịch sử
      this.conversationHistory.push({
        character: this.selectedCharacter,
        question: question,
        response: response,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Lỗi khi gọi AI:", error);

      // Hiển thị thông báo lỗi chi tiết
      let errorMessage = "Xin lỗi, có lỗi xảy ra khi xử lý câu hỏi. ";

      if (error.message.includes("API key chưa được cấu hình")) {
        errorMessage = "API key chưa được cấu hình. Vui lòng kiểm tra cài đặt.";
      } else if (error.message.includes("API key không hợp lệ")) {
        errorMessage =
          "API key không hợp lệ hoặc bị từ chối. Vui lòng kiểm tra lại API key.";
      } else if (error.message.includes("Quá nhiều yêu cầu")) {
        errorMessage =
          "Quá nhiều yêu cầu API. Vui lòng đợi một chút và thử lại.";
      } else if (error.message.includes("Lỗi server API")) {
        errorMessage = "Lỗi server API. Vui lòng thử lại sau.";
      } else if (error.message.includes("Không thể kết nối đến AI")) {
        errorMessage += "Vui lòng kiểm tra kết nối internet và thử lại.";
      } else if (error.message.includes("HTTP error")) {
        errorMessage += "Lỗi kết nối API. Vui lòng thử lại sau.";
      } else {
        errorMessage += "Vui lòng thử lại.";
      }

      this.addMessage("system", "Hệ thống", errorMessage);
    } finally {
      this.hideLoading();
    }
  }

  // Gọi AI để tạo phản hồi
  async getAIResponse(question, characterId) {
    console.log("getAIResponse called with:", { question, characterId });
    const character = this.characters[characterId];

    if (!character) {
      throw new Error(`Nhân vật không tồn tại: ${characterId}`);
    }

    // Kiểm tra câu hỏi chào hỏi hoặc không liên quan
    const greetingPatterns =
      /^(hello|hi|chào|xin chào|hey|good morning|good afternoon|good evening)/i;
    const unrelatedPatterns = /^(test|thử|kiểm tra|demo|example)/i;

    if (greetingPatterns.test(question)) {
      // Sử dụng AI để tạo phản hồi chào hỏi
      const greetingPrompt = `${character.prompt}

Câu hỏi: ${question}

Hãy chào hỏi người dùng một cách thân thiện và giới thiệu bản thân, sau đó hướng dẫn họ đặt câu hỏi về biến đổi khí hậu. Trả lời bằng tiếng Việt, khoảng 100-200 từ.`;

      return await this.callGeminiAPI(greetingPrompt);
    }

    if (unrelatedPatterns.test(question)) {
      // Sử dụng AI để tạo phản hồi hướng dẫn
      const guidancePrompt = `${character.prompt}

Câu hỏi: ${question}

Hãy hướng dẫn người dùng đặt câu hỏi phù hợp về biến đổi khí hậu từ góc nhìn triết học. Đưa ra một số ví dụ câu hỏi tốt. Trả lời bằng tiếng Việt, khoảng 150-250 từ.`;

      return await this.callGeminiAPI(guidancePrompt);
    }

    // Tạo prompt hoàn chỉnh cho AI
    const fullPrompt = `${character.prompt}

Câu hỏi: ${question}

Hãy trả lời câu hỏi trên một cách ngắn gọn và dễ hiểu, thể hiện quan điểm triết học của ${character.name}. Trả lời bằng tiếng Việt, khoảng 50-100 từ.`;

    // Gọi Gemini API thực tế
    try {
      const response = await this.callGeminiAPI(fullPrompt);
      return response;
    } catch (error) {
      console.error("Lỗi khi gọi AI cho câu hỏi chính:", error);
      throw error; // Re-throw để xử lý ở cấp cao hơn
    }
  }

  // Gọi Gemini API
  async callGeminiAPI(prompt) {
    const API_KEY = "AIzaSyB-RH8eK-Si7S2J8khi3bn17eYSPEIMU1k";

    // Kiểm tra API key
    if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
      throw new Error("API key chưa được cấu hình. Vui lòng kiểm tra cài đặt.");
    }

    try {
      console.log(
        "Đang gọi Gemini API với prompt:",
        prompt.substring(0, 100) + "..."
      );
      console.log(
        "API Key (first 10 chars):",
        API_KEY.substring(0, 10) + "..."
      );

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=${API_KEY}`,
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
                    text: prompt,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);

        // Phân tích lỗi cụ thể
        if (response.status === 400) {
          throw new Error(`Lỗi yêu cầu API (400): ${errorText}`);
        } else if (response.status === 403) {
          throw new Error(
            `API key không hợp lệ hoặc bị từ chối (403): ${errorText}`
          );
        } else if (response.status === 429) {
          throw new Error(`Quá nhiều yêu cầu API (429): ${errorText}`);
        } else if (response.status === 500) {
          throw new Error(`Lỗi server API (500): ${errorText}`);
        } else {
          throw new Error(
            `HTTP error! status: ${response.status} - ${errorText}`
          );
        }
      }

      const data = await response.json();
      console.log("Gemini API response:", data);

      if (
        data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts
      ) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.error("Unexpected API response format:", data);
        throw new Error("Unexpected API response format");
      }
    } catch (error) {
      console.error("Lỗi API chi tiết:", error);

      // Giữ nguyên thông báo lỗi gốc để debug
      if (error.message.includes("API key")) {
        throw error;
      } else if (
        error.message.includes("HTTP error") ||
        error.message.includes("Lỗi")
      ) {
        throw error;
      } else {
        throw new Error(
          "Không thể kết nối đến AI. Vui lòng kiểm tra kết nối internet và thử lại."
        );
      }
    }
  }

  // Chỉ sử dụng AI thực tế - không có fallback responses

  // Thêm tin nhắn vào chat
  addMessage(type, sender, content) {
    const chatMessages = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type} fade-in`;

    const character = this.characters[this.selectedCharacter];
    const icon =
      type === "character" && character ? character.icon : "fas fa-user";

    messageDiv.innerHTML = `
            <div class="message-header">
                <i class="${icon}"></i>
                ${sender}
            </div>
            <div class="message-content">${content}</div>
        `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Thêm tin nhắn hệ thống
  addSystemMessage(content) {
    this.addMessage("system", "Hệ thống", content);
  }

  // Hiển thị loading
  showLoading() {
    const loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
      loadingOverlay.style.display = "flex";

      // Cập nhật tên nhân vật đang suy nghĩ
      const loadingText = loadingOverlay.querySelector(".loading-text");
      if (loadingText) {
        if (this.selectedCharacter && this.characters[this.selectedCharacter]) {
          const character = this.characters[this.selectedCharacter];
          loadingText.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <span>${character.name} đang suy nghĩ...</span>
          `;
        } else {
          // Fallback nếu không có nhân vật được chọn
          loadingText.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <span>AI đang suy nghĩ...</span>
          `;
        }
      }
    }
  }

  // Hiển thị loading cho kết luận
  showConclusionLoading() {
    const loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
      loadingOverlay.style.display = "flex";

      // Cập nhật text cho kết luận
      const loadingText = loadingOverlay.querySelector(".loading-text");
      if (loadingText) {
        loadingText.innerHTML = `
          <i class="fas fa-spinner fa-spin"></i>
          <span> Đang tạo kết quả đánh giá...</span>
        `;
      }
    }
  }

  // Ẩn loading
  hideLoading() {
    document.getElementById("loading-overlay").style.display = "none";
  }

  // Text-to-speech cho phản hồi cuối cùng
  speakLastResponse() {
    if (!this.synthesis) {
      alert("Trình duyệt không hỗ trợ text-to-speech");
      return;
    }

    const messages = document.querySelectorAll(".message.character");
    if (messages.length === 0) {
      alert("Không có phản hồi nào để đọc");
      return;
    }

    const lastMessage = messages[messages.length - 1];
    const content = lastMessage.querySelector(".message-content").textContent;

    const utterance = new SpeechSynthesisUtterance(content);
    utterance.lang = "vi-VN";
    utterance.rate = 0.8;
    utterance.pitch = 1;

    this.synthesis.speak(utterance);
  }

  // Kết thúc phiên tòa
  endTrial() {
    this.isTrialActive = false;
    clearInterval(this.timerInterval);

    // Hiển thị phần kết luận
    document.getElementById("chat-interface").style.display = "none";
    document.getElementById("conclusion-section").style.display = "block";

    // Tạo kết luận và đánh giá
    this.generateConclusion();
  }

  // Kết luận phiên tòa (nút kết luận)
  concludeTrial() {
    if (this.conversationHistory.length === 0) {
      this.addMessage(
        "system",
        "Hệ thống",
        "Chưa có cuộc hội thoại nào. Hãy đặt câu hỏi trước khi kết luận."
      );
      return;
    }

    this.isTrialActive = false;
    clearInterval(this.timerInterval);

    // Hiển thị phần kết luận
    document.getElementById("chat-interface").style.display = "none";
    document.getElementById("conclusion-section").style.display = "block";

    // Tạo kết luận và đánh giá
    this.generateConclusion();
  }

  // Tạo kết luận và đánh giá
  async generateConclusion() {
    this.showConclusionLoading();

    try {
      // Tạo kết luận ngắn gọn
      const conclusion = await this.generateConclusionText();
      this.displayConclusion(conclusion);

      // Tạo đánh giá tư duy
      const evaluation = await this.generateThinkingEvaluation();
      this.displayThinkingEvaluation(evaluation);

      // Hiệu ứng animation
      this.animateConclusion();
    } catch (error) {
      console.error("Lỗi khi tạo kết luận:", error);
      this.displayConclusion(
        "<p>Xin lỗi, có lỗi xảy ra khi tạo kết luận. Cảm ơn bạn đã tham gia!</p>"
      );
    } finally {
      this.hideLoading();
    }
  }

  // Tạo văn bản kết luận ngắn gọn
  async generateConclusionText() {
    const conclusionPrompt = `Dựa trên cuộc trò chuyện về biến đổi khí hậu, tạo kết luận ngắn gọn:

${this.conversationHistory
  .map((conv) => `${this.characters[conv.character].name}: ${conv.question}`)
  .join("\n")}

Tạo kết luận ngắn gọn:
1. Tóm tắt quan điểm chính
2. Kết luận từ góc nhìn Mác-Lênin

Trả lời ngắn gọn bằng tiếng Việt, khoảng 100 từ.`;

    try {
      return await this.callGeminiAPI(conclusionPrompt);
    } catch (error) {
      console.error("Lỗi khi tạo kết luận:", error);
      return "<p>Xin lỗi, không thể tạo kết luận. Vui lòng thử lại sau.</p>";
    }
  }

  // Tất cả kết luận đều được tạo bởi AI thực tế

  // Tính điểm
  calculateScores() {
    // Tính điểm dựa trên số lượng câu hỏi và độ dài cuộc trò chuyện
    const questionCount = this.conversationHistory.length;
    const philosophyScore = Math.min(
      100,
      questionCount * 15 + Math.random() * 20
    );
    const environmentScore = Math.min(
      100,
      questionCount * 12 + Math.random() * 25
    );
    const totalScore = Math.round((philosophyScore + environmentScore) / 2);

    return {
      philosophy: Math.round(philosophyScore),
      environment: Math.round(environmentScore),
      total: totalScore,
    };
  }

  // Hiển thị điểm
  displayScores(scores) {
    // Cập nhật điểm triết học
    const philosophyScore = document.getElementById("philosophy-score");
    const philosophyValue = document.getElementById("philosophy-value");
    philosophyScore.style.width = `${scores.philosophy}%`;
    philosophyValue.textContent = `${scores.philosophy}/100`;

    // Cập nhật điểm môi trường
    const environmentScore = document.getElementById("environment-score");
    const environmentValue = document.getElementById("environment-value");
    environmentScore.style.width = `${scores.environment}%`;
    environmentValue.textContent = `${scores.environment}/100`;

    // Cập nhật điểm tổng
    const totalScore = document.getElementById("total-score");
    const totalValue = document.getElementById("total-value");
    totalScore.style.width = `${scores.total}%`;
    totalValue.textContent = `${scores.total}/100`;

    // Đổi màu thanh điểm tổng
    if (scores.total >= 80) {
      totalScore.style.background = "linear-gradient(45deg, #27ae60, #2ecc71)";
    } else if (scores.total >= 60) {
      totalScore.style.background = "linear-gradient(45deg, #f39c12, #e67e22)";
    } else {
      totalScore.style.background = "linear-gradient(45deg, #e74c3c, #c0392b)";
    }
  }

  // Tạo đánh giá tư duy ngắn gọn
  async generateThinkingEvaluation() {
    const evaluationPrompt = `Đánh giá tư duy người chơi dựa trên cuộc trò chuyện:

${this.conversationHistory
  .map((conv) => `${conv.character}: ${conv.question}`)
  .join("\n")}

Đánh giá 5 khía cạnh (0-10 điểm):
1. Tư duy phản biện
2. Hiểu biết triết học
3. Tư duy hệ thống
4. Khả năng phân tích
5. Tư duy sáng tạo

Trả lời JSON ngắn gọn:
{
  "scores": {"critical_thinking": 8, "philosophical_understanding": 7, "systematic_thinking": 6, "analytical_ability": 8, "creative_thinking": 5},
  "total_score": 34,
  "overall_rating": "Tốt",
  "strengths": ["Tư duy phản biện tốt"],
  "weaknesses": ["Cần hiểu sâu hơn"],
  "suggestions": ["Đọc thêm về triết học"],
  "detailed_feedback": "Nhận xét ngắn gọn"
}`;

    try {
      const response = await this.callGeminiAPI(evaluationPrompt);
      return JSON.parse(response);
    } catch (error) {
      console.error("Lỗi khi tạo đánh giá:", error);
      return {
        scores: {
          critical_thinking: 5,
          philosophical_understanding: 5,
          systematic_thinking: 5,
          analytical_ability: 5,
          creative_thinking: 5,
        },
        total_score: 25,
        overall_rating: "Trung bình",
        strengths: ["Tham gia tích cực"],
        weaknesses: ["Cần cải thiện"],
        suggestions: ["Thực hành thêm"],
        detailed_feedback: "Cảm ơn bạn đã tham gia!",
      };
    }
  }

  // Hiển thị kết luận với animation
  displayConclusion(conclusion) {
    const conclusionElement = document.getElementById("conclusion-text");
    conclusionElement.innerHTML = `
      <div class="conclusion-header">
        <i class="fas fa-gavel conclusion-icon"></i>
        <h3>Kết Luận Phiên Tòa</h3>
      </div>
      <div class="conclusion-content">${conclusion}</div>
      <div class="conclusion-footer">
        <i class="fas fa-quote-left quote-icon"></i>
        <span class="quote-text">"Tri thức là vũ khí mạnh nhất để thay đổi thế giới"</span>
        <i class="fas fa-quote-right quote-icon"></i>
      </div>
    `;
    conclusionElement.classList.add("fade-in");

    // Thêm hiệu ứng typing cho nội dung
    this.typeWriterEffect(
      conclusionElement.querySelector(".conclusion-content"),
      conclusion
    );
  }

  // Hiển thị đánh giá tư duy ngắn gọn
  displayThinkingEvaluation(evaluation) {
    const scoreDisplay = document.getElementById("score-display");
    const feedbackDisplay = document.getElementById("feedback-display");
    const suggestionsDisplay = document.getElementById("suggestions-display");

    if (!scoreDisplay || !feedbackDisplay || !suggestionsDisplay) {
      console.error("Không tìm thấy các element để hiển thị đánh giá");
      return;
    }

    // Hiển thị điểm số với animation
    scoreDisplay.innerHTML = `
      <div class="evaluation-header">
        <h4><i class="fas fa-brain"></i> Đánh Giá Tư Duy</h4>
        <div class="overall-score">
          <span class="score-number">${evaluation.total_score}/50</span>
          <span class="score-rating">${evaluation.overall_rating}</span>
        </div>
      </div>
      <div class="score-breakdown">
        <div class="score-item">
          <span>Tư duy phản biện</span>
          <div class="score-bar">
            <div class="score-fill" data-width="${
              evaluation.scores.critical_thinking * 10
            }"></div>
            <span>${evaluation.scores.critical_thinking}/10</span>
          </div>
        </div>
        <div class="score-item">
          <span>Hiểu biết triết học</span>
          <div class="score-bar">
            <div class="score-fill" data-width="${
              evaluation.scores.philosophical_understanding * 10
            }"></div>
            <span>${evaluation.scores.philosophical_understanding}/10</span>
          </div>
        </div>
        <div class="score-item">
          <span>Tư duy hệ thống</span>
          <div class="score-bar">
            <div class="score-fill" data-width="${
              evaluation.scores.systematic_thinking * 10
            }"></div>
            <span>${evaluation.scores.systematic_thinking}/10</span>
          </div>
        </div>
        <div class="score-item">
          <span>Khả năng phân tích</span>
          <div class="score-bar">
            <div class="score-fill" data-width="${
              evaluation.scores.analytical_ability * 10
            }"></div>
            <span>${evaluation.scores.analytical_ability}/10</span>
          </div>
        </div>
        <div class="score-item">
          <span>Tư duy sáng tạo</span>
          <div class="score-bar">
            <div class="score-fill" data-width="${
              evaluation.scores.creative_thinking * 10
            }"></div>
            <span>${evaluation.scores.creative_thinking}/10</span>
          </div>
        </div>
      </div>
    `;

    // Hiển thị phản hồi ngắn gọn
    feedbackDisplay.innerHTML = `
      <div class="feedback-section">
        <h5><i class="fas fa-thumbs-up"></i> Điểm Mạnh</h5>
        <ul>${evaluation.strengths
          .map((strength) => `<li>${strength}</li>`)
          .join("")}</ul>
      </div>
      <div class="feedback-section">
        <h5><i class="fas fa-exclamation-triangle"></i> Cần Cải Thiện</h5>
        <ul>${evaluation.weaknesses
          .map((weakness) => `<li>${weakness}</li>`)
          .join("")}</ul>
      </div>
      <div class="feedback-section">
        <h5><i class="fas fa-comment"></i> Nhận Xét</h5>
        <p>${evaluation.detailed_feedback}</p>
      </div>
    `;

    // Hiển thị gợi ý
    suggestionsDisplay.innerHTML = `
      <div class="suggestions-section">
        <h5><i class="fas fa-lightbulb"></i> Gợi Ý Cải Thiện</h5>
        <ul>${evaluation.suggestions
          .map((suggestion) => `<li>${suggestion}</li>`)
          .join("")}</ul>
      </div>
    `;
  }

  // Hiệu ứng typing cho kết luận
  typeWriterEffect(element, text) {
    element.innerHTML = "";
    let i = 0;
    const speed = 30;

    function typeWriter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    setTimeout(typeWriter, 1000);
  }

  // Animation cho kết luận
  animateConclusion() {
    setTimeout(() => {
      const scoreFills = document.querySelectorAll(".score-fill");
      scoreFills.forEach((fill, index) => {
        setTimeout(() => {
          const width = fill.getAttribute("data-width");
          fill.style.width = width + "%";
        }, index * 200);
      });

      // Thêm hiệu ứng cho các phần tử khác
      const elements = document.querySelectorAll(
        ".feedback-section, .suggestions-section"
      );
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "all 0.5s ease";

          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, 100);
        }, index * 300);
      });
    }, 500);
  }

  // Bắt đầu lại phiên tòa
  restartTrial() {
    // Reset tất cả
    this.timeLeft = this.trialTime;
    this.conversationHistory = [];
    this.selectedCharacter = null;
    this.isTrialActive = false;

    // Clear timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    // Reset UI
    document.getElementById("character-selection").style.display = "block";
    document.getElementById("chat-interface").style.display = "none";
    document.getElementById("conclusion-section").style.display = "none";

    // Clear chat
    document.getElementById("chat-messages").innerHTML = "";

    // Reset timer display
    this.updateTimerDisplay();

    // Reset buttons
    document.getElementById("start-trial").textContent = "Bắt Đầu Phiên Tòa";
    document.getElementById("start-trial").disabled = false;

    // Reset character selection
    document.querySelectorAll(".character-card").forEach((card) => {
      card.classList.remove("selected");
    });

    // Reset input
    document.getElementById("character-select").value = "";
    document.getElementById("question-input").value = "";
    this.toggleInputState();
  }
}

// Khởi tạo ứng dụng khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
  new PhilosophicalTrial();
});
