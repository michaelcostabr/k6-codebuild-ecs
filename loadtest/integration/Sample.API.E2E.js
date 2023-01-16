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
    const res = http.get('');
    return funcao2(result);
}

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
  let res2 = funcaoA(3);
  console.info(res2);
  sleep(1);
};

function funcaoA(X) {
    const res = http.get('##SUBSTITUA COM A URL DA SUA APLICACAO##');
    return funcaoB(4);
}

function funcaoB(X) {
    const res = http.get('##SUBSTITUA COM A URL DA SUA APLICACAO##');
    return res;
}
