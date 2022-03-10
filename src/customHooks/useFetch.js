import React, { useEffect, useState } from "react";
import Axios from "../utils/axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await Axios.get(url);
      if (res.status == 200) {
        const { data } = res;
        setData(data);
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data,loading];
}
