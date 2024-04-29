export const fetcher = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    return {
      error: true,
    };
  }
};
