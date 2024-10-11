import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  title: string,
  content: string,
  id: string,
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        });
        console.log([response.data.blogs]);
        setBlogs(response.data.blogs);
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err); 
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
    error,
  };
};
