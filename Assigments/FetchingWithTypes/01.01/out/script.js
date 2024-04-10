// async function fetchPosts(url: string): Promise<Post[]> {
async function fetchPosts(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }
    // const data: Post[] = await response.json();
    // const data = await response.json() as Post[];
    // const data = (await response.json()) as Post[];
    // return data;
    return response.json(); // Cast to Promise<Post[]>
}
const url = "https://jsonplaceholder.typicode.com/posts";
console.log(await fetchPosts(url));
export {};
