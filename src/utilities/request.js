import superagent from 'superagent';

export default function request({ url, params = {}, data = {}, query = {}, method = 'GET' }) {

  const parameterizedUrl = Object.keys(params)
    .reduce((output, param) => {
      return output.replace(`:${param}`, params[param]);
    }, url);

  return new Promise((resolve, reject) => {

    const methodName = method.toLowerCase() === 'delete'
      ? 'del'
      : method.toLowerCase();


    superagent[methodName](parameterizedUrl)
      .query(query)
      .send(data)
      .end((error, response) => {
        if(error) reject(error);
        else if(!response.ok) reject(Error(response.text));
        else resolve(response.body);
      });
  });
}
