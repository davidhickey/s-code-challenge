export const apiClient = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "API error");
  }

  return res.json();
};
