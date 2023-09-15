import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Get, Post, Put } from "../config/apiMethods";

export default function AddPosts() {
  const [model, setModel] = useState<any>({});
  // const baseApi = "https://jsonplaceholder.typicode.com/posts";
  const params = useParams();

  const getPostId = () => {
    Get("posts", `${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const updatePost = () => {
    Put("Posts", `${params.id}`, model)
      .then((res) => {
        console.log("Post Successfully Added >>>> ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let submitData = () => {
    Post("posts", model)
      .then((res) => {
        console.log("Post Successfully Added >>>> ", res.data);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (params.id) {
      getPostId();
    }
  }, []);

  return (
    <>
      <Box className="text-center">
        <h1>Add Posts</h1>
        <Box className="my-3">
          <input
            value={model.title}
            onChange={(e) => setModel({ ...model, title: e.target.value })}
            type="text"
            placeholder="Title"
          />
        </Box>
        <Box className="my-3">
          <textarea
            value={model.body}
            onChange={(e) => setModel({ ...model, body: e.target.value })}
            placeholder="Body"
          ></textarea>
        </Box>
        <Box className="my-3">
          {params.id ? (
            <Button variant="contained" onClick={updatePost}>
              Update Post
            </Button>
          ) : (
            <Button variant="contained" onClick={submitData}>
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
