import ky from 'ky';

export const api = ky.extend({
  retry: {
    limit: 5,
    methods: ['get', 'post', 'put', 'delete', 'patch'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
  timeout: 10000,
});
