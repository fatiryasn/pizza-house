import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React from "react";

const CommentCard = ({ data }) => {
  const token = localStorage.getItem("name");
  const formattedDate = new Date(data.dateCreated).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/comment/${data._id}`)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("name");
        enqueueSnackbar("Comment deleted", { variant: "info" });
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col bg-green-950 border-2 border-red-400 w-80 max-w-80 lg:w-96 lg:max-w-96 p-5 ">
      <div className="flex gap-2 justify-between">
        <span className="font-poppins">
          {data.name}
          <span className="text-gray-400 text-xs ml-2">{formattedDate}</span>
        </span>
        <button
          className={`hover:text-red-500 ${
            token === data.name ? "" : "hidden"
          }`}
          onClick={handleDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div>
        <p className="font-quicksand">{data.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
