/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

  console.log(JSON.stringify(event));
 
  const response = await resolve(event);

  response.headers.append('Access-Control-Allow-Origin','http://192.46.233.231/');
  return response;
}
