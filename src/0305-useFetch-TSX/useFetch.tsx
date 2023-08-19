import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  return { data, loading, error };
}

export default useFetch;
