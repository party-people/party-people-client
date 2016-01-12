const HOST = 'localhost';
const PORT = '9000';
const VERSION = 'v1';

export const API_ROOT = `http:\/\/${HOST}:${PORT}/api/${VERSION}`;

export postFormData(data, url) {
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
