import axios from 'axios';

// chiamata API First Level Provider
export function axiosFLProviders() {
  const url = 'http://test.easyline.univaq.it/api/v1/providers';

  return axios.post(url)
    .then(((response) => response.data))
    .catch((err) => {
      console.log(err);
    });
}

// chiamata API Univaq Provider
export function axiosUnivaqProviders() {
  const url = 'http://test.easyline.univaq.it/api/v1/providers';
  const formdata = new FormData();
  formdata.append('id', 1);

  return axios.post(url, formdata, { headers: { 'Content-Type': 'application/form-data', } })
    .then(((response) => response.data))
    .catch((err) => {
      console.log(err);
    });
}

// chiamata API Service Of A Provider
export function axiosServiceOfProvider(provid) {
  const url = 'http://test.easyline.univaq.it/api/v1/services';
  const formdata = new FormData();
  formdata.append('provid', provid);
  formdata.append('id', '');

  return axios.post(url, formdata, { headers: { 'Content-Type': 'application/form-data', } })
    .then(((response) => response.data))
    .catch((err) => {
      console.log(err);
    });
}

// chiamata API Service Of A Service
export function axiosServiceOfService(id) {
  const url = 'http://test.easyline.univaq.it/api/v1/services';
  const formdata = new FormData();
  formdata.append('id', id)
  formdata.append('provid', '');

  return axios.post(url, formdata, { headers: { 'Content-Type': 'application/form-data', } })
    .then(((response) => response.data))
    .catch((err) => {
      console.log(err);
    });
}

// chiamata API Office Of A Service
export function axiosOfficeOfService(id) {
  const url = 'http://test.easyline.univaq.it/api/v1/offices';
  const formdata = new FormData();
  formdata.append('id', id)

  return axios.post(url, formdata, { headers: { 'Content-Type': 'application/form-data', } })
    .then(((response) => response.data))
    .catch((err) => {
      console.log(err);
    });
}
