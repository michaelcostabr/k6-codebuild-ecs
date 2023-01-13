//Sample API end-to-end load test (fake)

import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '20s',
  vus: 50,
  thresholds: {
    http_req_duration: ['p(95)<15000'],
  },
};

export default function () {  
  const res = http.get('##SUBSTITUA COM A URL DA SUA APLICACAO##');
  console.info(res);
  sleep(1);
};

function funcao1(X) {
    const res = http.get('##SUBSTITUA COM A URL DA SUA APLICACAO##');
    return funcao2(result);
}
