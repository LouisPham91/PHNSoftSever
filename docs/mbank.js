// Địa chỉ Proxy mới (sử dụng CORS Proxy)
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://online.mbbank.com.vn/api/retail-web-internetbankingms/getCaptchaImage';  // API MB Bank để lấy CAPTCHA

let captchaBase64 = "";
let refno = `0969758789-${Date.now()}-${Math.floor(Math.random() * 100000)}`; // Tạo refNo

// Payload cho yêu cầu CAPTCHA
let payload = {
  "refNo": refno,  // refNo - Sử dụng giá trị này
  "sessionId": "",  // sessionId - Sau khi đăng nhập thành công, giá trị này sẽ được cập nhật
  "deviceIdCommon": "mquabzxm-mbib-0000-0000-2025042201531856"  // deviceIdCommon - Dữ liệu cố định
};

// Cấu hình headers
  const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "app": "MB_WEB",
    "authorization": "Basic RU1CUkVUQUlMV0VCOlNEMjM0ZGZnMzQlI0BGR0AzNHNmc2RmNDU4NDNm",
    //"content-length": "227",  // Kích thước nội dung
    "content-type": "application/json; charset=UTF-8",
    "cookie": "MBAnalyticsaaaaaaaaaaaaaaaa_session_=HEHGLCIJALCMINIJCNLNGBIFBOOCBGLKOJGCJDIMFDIMHLJCLEDOEGMBCBKLPIBIEKMDLDOLNHPOKHHEGMFAONKPHJCLAEHNIFPBJHNOLFKCBDBECLJHBGIDHDPHMBGD; _gcl_au=1.1.1651842692.1745261459; _gid=GA1.3.579376496.1745261460; _ga_R3XMN343KH=GS1.1.1745261459.1.1.1745262380.60.0.0; BIGipServerk8s_online_banking_pool_9712=3491496202.61477.0000; BIGipServerk8s_KrakenD_Api_gateway_pool_10781=3306946826.7466.0000; MBAnalyticsaaaaaaaaaaaaaaaa_session_=JCAMPFAEBCFNKMPEHCGJFJNPELEHKEAMIMPOOIHKLIKGPNKLJJDJOICLEEKFJMFGCGPDMJONKMDOOHCAJLFAFCMJCIBOPKEJGKGFCOPNGJDFGOHKMIJLBLGFABLKOAEA; AKA_A2=A; RT=\"z=1&dm=online.mbbank.com.vn&si=a9d0d0c6-3f8b-4154-8a65-2d99dbdf22f1&ss=m9tmactd&sl=0&tt=0\"; _ga_T1003L03HZ=GS1.1.1745393605.11.1.1745394203.0.0.0; _ga=GA1.3.882513844.1745261459; MBAnalytics0305260751aaaaaaaaaaaaaaaa_cspm_=OHDBHLACEFMDIHCIGPOAEMDHLJFNIFFAALEIOPDLDPECOAEFAMJOLCIOFKKKOBGHCHBCCIAMFLGOKIGCNEHABKKMAKAHAFIKIKAHPMJJIDPGDDKADLOKCFIALMLKNCJL; JSESSIONID=6CA3E471E284147A0C8527C213C2713B",
    "deviceid": "mquabzxm-mbib-0000-0000-2025042201531856",
    "elastic-apm-traceparent": "00-e9e703a7ab45a69a0edf4ca3eaf60c7e-3b20b9e6dba90c05-01",
    "origin": "https://online.mbbank.com.vn",
    "priority": "u=1, i",
    "referer": "https://online.mbbank.com.vn/information-account/source-account",
    "refno": refno,
    "sec-ch-ua": "\"Microsoft Edge\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0",
    "x-request-id": refno,
    "x-requested-with": "XMLHttpRequest"  // Thêm header này để tránh lỗi CORS
  };

// Bước 1: Lấy CAPTCHA từ API
async function getCaptcha() {
  try {
    console.log('Đang lấy captcha');
    
    // Sử dụng proxy để tránh CORS
    const response = await axios.post(proxyUrl + encodeURIComponent(apiUrl), payload, { headers });
    
    // Lấy hình ảnh CAPTCHA dưới dạng Base64 từ phản hồi API
    const captchaData = response.data;  // Dữ liệu trả về từ API, trong trường hợp này là base64 string
    
    // Đảm bảo data có trường imageString chứa base64
    if (captchaData && captchaData.imageString) {
      captchaBase64 = captchaData.imageString;
      console.log("Captcha: ", captchaBase64);  // Đưa ra CAPTCHA dưới dạng Base64
    } else {
      console.log("Không có CAPTCHA trong phản hồi.");
    }

    // Nếu cần hiển thị hình ảnh hoặc xử lý thêm, sử dụng:
    // document.getElementById('captchaImage').src = 'data:image/png;base64,' + captchaBase64;
    
    return captchaBase64;

  } catch (error) {
    console.error('Error fetching CAPTCHA:', error);
    return null;
  }
}

// Test lấy CAPTCHA
getCaptcha();
