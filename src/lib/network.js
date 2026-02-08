import axios from 'axios';

const DEFAULT_TIMEOUT_MS = 10000;

const Network = {
	call: async ({
		method,
		url,
		queryParams,
		headers,
		body,
		timeout,
		responseType,
	}) =>
		new Promise((resolve, reject) => {
			axios({
				method,
				url,
				headers,
				data: body,
				params: queryParams,
				timeout: timeout ?? DEFAULT_TIMEOUT_MS,
				responseType,
			})
				.then((resp) => resp.data)
				.then((resp) => {
					resolve(resp);
				})
				.catch((err) => {
					const skip = err?.response?.status && err?.response?.status === 404;
					if (!skip) {
						// newrelic?.noticeError(err);
					}
					reject(err.response);
				});
		}),
};

export default Network;
