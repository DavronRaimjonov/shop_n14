import { useEffect, useState } from "react";
import { request } from "../../server/request";
const useAxios = ({ url, method = "GET", body, params }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    request({
      url,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        ...params,
      },
    })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return { data, loading, setLoading };
};

export default useAxios;
