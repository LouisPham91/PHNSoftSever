
// Khi người dùng nhấn nút Login
document.getElementById("loginButton").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Gọi API khi nhấn Login
  callBankAPI(email, password);
});

// Hàm gọi API khi nhấn Login
function callBankAPI(email, password) {
  const url = "https://online.mbbank.com.vn/api/retail-transactionms/transactionms/get-account-transaction-history";

  // Dữ liệu payload cần gửi trong yêu cầu POST
  const payload = JSON.stringify({
    "accountNo": "0969758789",
    "fromDate": "15/04/2025",
    "toDate": "22/04/2025",
    "sessionId": "9edbad97-29de-4ade-ba0b-164b807c2d25",
    "refNo": "0969758789-2025042213312427-18964",
    "deviceIdCommon": "mquabzxm-mbib-0000-0000-2025042201531856"
  });

  // Cấu hình đầy đủ các headers
  const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9",
    "app": "MB_WEB",
    "authorization": "Basic RU1CUkVUQUlMV0VCOlNEMjM0ZGZnMzQlI0BGR0AzNHNmc2RmNDU4NDNm",
    "content-length": "227",  // Kích thước nội dung
    "content-type": "application/json; charset=UTF-8",
    "cookie": "MBAnalyticsaaaaaaaaaaaaaaaa_session_=LJDHDGIDOEKOPEEFFPMFIKIKMKFAKLJKDALENINDPJDJOMEIDCEDLHODJBJLAOOCNLKDAMJPNPFIMDNDJEIAOJDKIGLJECJBCAPPINCHGGAECFFOHOKCFJGPLPLMOJHC; _gcl_au=1.1.1651842692.1745261459; _gid=GA1.3.579376496.1745261460; _ga_R3XMN343KH=GS1.1.1745261459.1.1.1745262380.60.0.0; RT=\"z=1&dm=online.mbbank.com.vn&si=a9d0d0c6-3f8b-4154-8a65-2d99dbdf22f1&ss=m9s4mdos&sl=0&tt=0\"; BIGipServerk8s_online_banking_pool_9712=3491496202.61477.0000; AKA_A2=A; _gat_gtag_UA_205372863_2=1; BIGipServerk8s_KrakenD_Api_gateway_pool_10781=3306946826.7466.0000; _ga_T1003L03HZ=GS1.1.1745383363.8.1.1745383389.0.0.0; _ga=GA1.3.882513844.1745261459; MBAnalytics0305260751aaaaaaaaaaaaaaaa_cspm_=MJNCIFFGDNPPJBLKMINCEHDMODMAAJCJJOFFGEGCNDEACHAIONFKEIPHGNCGNNJPLNACCNOOHEEMCPGEEGCAOEIMAKLEDNOKEMIEDGCOHIKKAKFGPMBPBHOKBNBOLKPM; JSESSIONID=7CAAF26CA8CE77C3ABC0E41064FC99A5",
    "deviceid": "mquabzxm-mbib-0000-0000-2025042201531856",
    "elastic-apm-traceparent": "00-e9e703a7ab45a69a0edf4ca3eaf60c7e-3b20b9e6dba90c05-01",
    "origin": "https://online.mbbank.com.vn",
    "priority": "u=1, i",
    "referer": "https://online.mbbank.com.vn/information-account/source-account",
    "refno": "0969758789-2025042311431251-35154",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0",
    "x-request-id": "0969758789-2025042311431251-35154"
  };

  // Cấu hình các options cho phương thức fetch()
  const options = {
    method: 'POST',
    headers: headers,
    body: payload
  };

  // Gọi API bằng fetch()
  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();  // Chuyển phản hồi sang dạng JSON
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    })
    .then(data => {
      console.log("API Response: ", data);
      alert("API call successful: " + JSON.stringify(data));
    })
    .catch(error => {
      console.error("Error: ", error);
      alert("Error making API call: " + error.message);
    });
}