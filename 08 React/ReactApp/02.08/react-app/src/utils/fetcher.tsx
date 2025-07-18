export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    return {
      error: true,
    };
  }
};
