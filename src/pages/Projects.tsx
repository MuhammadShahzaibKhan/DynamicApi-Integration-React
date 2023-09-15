import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { apiHandle, Delete } from "../config/apiMethods";

export default function Projects() {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const add = () => {
    navigate("/add");
  };

  const deletePost = (id: number) => {
    Delete("posts", id)
      .then((res) => {
        console.log("Post deleted successfully ====>>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = () => {
    apiHandle
      .get("posts")
      .then((res) => {
        console.log(res.data);
        setListData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box className="mb-5 text-center">
        <Typography variant="h3">Posts</Typography>
        <Box>
          <Box>
            <Button variant="contained" onClick={add}>
              Add Posts
            </Button>
          </Box>
          {listData &&
            Array.isArray(listData) &&
            listData.length > 0 &&
            listData.map((x: any, i: number) => {
              return (
                <Box
                  key={i}
                  className="border border-4 border-primary m-4 p-4 bg-dark"
                >
                  <Typography variant="h5" className="my-5 text-white">
                    <span className="fw-bold text-info">Title: </span> {x.title}
                  </Typography>
                  <Typography variant="h5" className="my-5 text-white">
                    <span className="fw-bold text-info">Body: </span> {x.body}
                  </Typography>
                  <Button
                    onClick={() => deletePost(x.id)}
                    className="text-danger"
                  >
                    <DeleteIcon />
                  </Button>
                  <Button
                    onClick={() => {
                      navigate(`/add/${x.id}`);
                    }}
                    className="text-primaty"
                  >
                    <EditIcon />
                  </Button>
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
}
