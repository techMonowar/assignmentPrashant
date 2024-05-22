import axios from 'axios';

const API_BASE_URL = 'https://api.acharyaprashant.org/v2/legacy/courses';

export async function fetchCourseSeries(slug) {
  try {
    const response = await axios.get(`${API_BASE_URL}/series/optuser/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course series: ${error}`);
    throw error;
  }
}

export async function fetchFaqs(language) {
  try {
    const response = await axios.get(`${API_BASE_URL}/faqs`, {
      params: { language },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching FAQs: ${error}`);
    throw error;
  }
}

export async function fetchTags() {
  try {
    const response = await axios.get(`${API_BASE_URL}/tags`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tags: ${error}`);
    throw error;
  }
}
