export default function extractUrl(htmlString) {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, "text/html");
  const anchor = html.querySelector("a");
  return anchor ? anchor.getAttribute("href") : null;
}
