function parseData(data) {
  const formData = new FormData();
  for (let [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
}

function request(url, data = false, method = "GET", type = "FORM-DATA") {
  const token = localStorage.getItem("_token");

  return new Promise(async (resolve, reject) => {
    const options = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    if (data && method === "POST") {
      options.body = type === "JSON" ? JSON.stringify(data) : parseData(data);
    }
    const response = await fetch(url, options);
    const result = await response.json();
    if (response.ok) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const post = (route, data, type = "JSON") =>
  request(process.env.NEXT_PUBLIC_API_URL + route, data, "POST", type);
export const get = (route) => request(process.env.NEXT_PUBLIC_API_URL + route);
export const put = (route, data) =>
  request(process.env.NEXT_PUBLIC_API_URL + route, data, "PUT", "JSON");
export const deleteRequest = (route) =>
  request(process.env.NEXT_PUBLIC_API_URL + route, false, "DELETE");
export const postWithUrl = (url, data) => request(url, data, "POST");
export const getWithUrl = (url) => request(url);
