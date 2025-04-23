const apiUrl = 'https://online.mbbank.com.vn/api/retail-web-internetbankingms/getCaptchaImage';

const headers = {
  "accept": "application/json, text/plain, */*",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "en-US,en;q=0.9",
  "app": "MB_WEB",
  "authorization": "Basic <Your-Authorization-Token>",
  "content-type": "application/json; charset=UTF-8",
  "cookie": "<Your-Cookies>",
  "deviceid": "mquabzxm-mbib-0000-0000-2025042201531856",
  "origin": "https://online.mbbank.com.vn",
  "referer": "https://online.mbbank.com.vn/information-account/source-account",
  "x-request-id": "0969758789-2025042315120389-62465",
};

const payload = {
  "refNo": "0969758789-2025042315120389-62465",
  "sessionId": "",
  "deviceIdCommon": "mquabzxm-mbib-0000-0000-2025042201531856"
};

// Sử dụng fetch API với CORS mode
async function getCaptcha() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
      mode: 'cors',  // Đảm bảo là bạn sử dụng chế độ CORS
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Captcha Base64 Image String:', data.imageString);
    return data.imageString;
  } catch (error) {
    console.error('Error fetching CAPTCHA:', error);
    return null;
  }
}

getCaptcha();
