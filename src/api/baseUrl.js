export default function getBaseUrl() {

  console.log('>>>>>>>>>>>>>>>>>>>>>');

  const inDevelopment = window.location.hostname === 'localhost';

  return inDevelopment ? 'http://localhost:3001/' : '/';
}
