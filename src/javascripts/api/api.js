const HOST = 'localhost';
const PORT = '9000';
const VERSION = 'v1';

export const ROOT = `http:\/\/${HOST}:${PORT}`
export const API_ROOT = `${ROOT}/api/${VERSION}`;

export function createFormData(data, topKey) {
  const formData = new FormData();
  for (const key in data) {
    const value = data[key];
    if (value) {
      if (value instanceof FileList) {
        if (value.length > 0) {
          formData.append(`${topKey}[${key}]`, data[key][0]);
        }
      }
      else {
        formData.append(`${topKey}[${key}]`, data[key]);
      }
    }
  }
  return formData;
}

export function postFormData(data, url) {
  const defer = $.Deferred();
  $.ajax({
    type: 'POST',
    url: url,
    data: data,
    processData: false,
    contentType: false,
    success: defer.resolve,
    error: defer.reject
  });
  return defer.promise();
}
