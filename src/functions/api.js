import axios from "axios";

const searchImages = async (value) => {
	const response = await axios.get(`https://api.unsplash.com/search/photos`, {
		headers: {
			Authorization: "Client-ID As5nbH5erFXZPQp28s3vvkjpAF3jI76HVewfB-XLc-0",
		},
		params: {
			query: value,
		},
	});
	console.log(response.data.results);
	return response.data.results;
};

export default searchImages;
