/* eslint-disable no-console */

export default function getBaseUrl() {

  console.log('getBaseUrl');

  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(parameterName) {

  parameterName = parameterName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

  var regex = new RegExp("[\\?&]" + parameterName + "=([^&#]*)"), results = regex.exec(location.search);

  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
