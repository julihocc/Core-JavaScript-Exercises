// fetch data with async/await
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// async function fetchPosts(url: string): Promise<Post[]> {
async function fetchPosts(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  // const data: Post[] = await response.json();
  // const data = await response.json() as Post[];
  // const data = (await response.json()) as Post[];
  // return data;
  return <Promise<Post[]>>response.json(); // Cast to Promise<Post[]>
}

const url = "https://jsonplaceholder.typicode.com/posts";

console.log(await fetchPosts(url));

export {};
