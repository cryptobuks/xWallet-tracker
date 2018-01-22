async function get(url: string): Promise<Object> {
  try {
    return (await fetch(url, { cache: 'no-cache'})).json();
  } catch {
    return {};
  }
}

export default {
  get
};