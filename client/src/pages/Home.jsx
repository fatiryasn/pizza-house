import React, { useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

import "../global.css";
import OutletCard from "../components/OutletCard";
import ProductCard1 from "../components/ProductCard1";

import logo from "../assets/logo.png";
import javasatay from "../assets/javasatay.png";
import italianvegie from "../assets/italianvegie.png";
import indo from "../assets/indo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faComment,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import CommentCard from "../components/CommentCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentLen, setCommentLen] = useState(0);

  const token = localStorage.getItem("name");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product")
      .then((res) => {
        const allProducts = res.data.data;

        const pizza = allProducts
          .filter((p) => p.category === "pizza")
          .slice(0, 5);
        const beverage = allProducts
          .filter((p) => p.category === "beverage")
          .slice(0, 1);
        const others = allProducts
          .filter((p) => p.category === "others")
          .slice(0, 2);

        const favorites = [...pizza, ...beverage, ...others];
        setProducts(favorites);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getComments = () => {
    axios
      .get("http://localhost:8080/api/comment")
      .then((res) => {
        setComments(res.data.data);
        setCommentLen(res.data.totalData);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getComments();
  }, []);

  const handleComment = () => {
    if(!name || !comment){
      enqueueSnackbar("Request is incomplete")
    }
    axios
      .post("http://localhost:8080/api/comment", { name, comment })
      .then((res) => {
        console.log(res.data);
        enqueueSnackbar("Feedback terkirim!", { variant: "success" });
        localStorage.setItem("name", name);
        getComments();
        setComment("");
        setName("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col mb-96">
      <div className="pizzabg w-full h-[50rem] lg:h-[55rem] text-white flex flex-col justify-center items-center">
        <img src={logo} alt="Logo" className="lg:h-20 h-14" />
        <h1 className="mt-2 font-bold text-xl lg:text-2xl font-poppins">
          Indonesian No. #1 pizza brand
        </h1>
        <p className="text-xs lg:text-sm italic font-quicksand">
          'A house is better than a hut'
        </p>
      </div>

      <div className="px-5 flex flex-col md:flex-row md:px-24 lg:px-44 h-[100vh] gap-20 md:gap-0 justify-center items-center md:justify-between">
        <div className="max-w-[35rem] text-center md:text-start flex flex-col gap-2">
          <h1 className="font-bold text-xl lg:text-[2.2rem] font-poppins">
            Dari Jawa, hingga Italia.
          </h1>
          <p className="font-quicksand text-sm lg:text-base">
            Kami menawarkan rasa yang variatif dari kultur yang beragam dengan{" "}
            <span>Java Chicken Satay</span> dan <span>Italian Vegie Pizza</span>
          </p>
        </div>
        <div className="relative  w-[15rem] lg:w-[30rem] h-60 lg:h-96 splashbg font-quicksand">
          <div className="absolute top-24 left-1 drop-shadow-[-5px_5px_12px_rgba(0,0,0,0.4)]">
            <img src={italianvegie} alt="italian" className="h-32 lg:h-72 " />
            <span className="text-xs md:text-base">Italian Vegie Pizza</span>
          </div>
          <div className="absolute  right-10 top-0 text-end drop-shadow-[5px_-5px_12px_rgba(0,0,0,0.3)]">
            <span className="text-xs md:text-base">Java Chicken Satay</span>
            <img src={javasatay} alt="java" className="h-32 lg:h-64" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 h-[90vh]">
        <h1 className="font-bold text-2xl lg:text-3xl font-poppins">
          Favorites
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 place-content-center place-items-center gap-5 lg:gap-7">
          {products.map((product) => (
            <ProductCard1 key={product._id} data={product} />
          ))}
        </div>
        <button className="px-4 py-2 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-950">
          <a href="/menu">Lihat lebih banyak</a>
        </button>
      </div>

      <div className="relative mt-60 ">
        <h1 className="rounded-lg absolute text-white font-semibold font-poppins bg-red-950 px-5 py-3 text-center border-2 border-black shadow-lg top-0 left-1/2 transform -translate-x-1/2 text-base lg:text-lg -translate-y-1/2">
          <FontAwesomeIcon icon={faComments} className="text-2xl" /> Komentar
          pelanggan kami
        </h1>

        <div className="flex flex-col md:flex-row items-center md:justify-around w-full min-h-[110vh] lg:min-h-[80vh] bg-2 text-white pt-5 md:px-32 ">
          {token ? (
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[2rem] text-green-500"
              />
              <span className="font-poppins">
                Terimakasih sudah memberi feedback!
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-start gap-2 mt-10">
              <h2 className="font-quicksand font-semibold text-xl lg:text-2xl">
                Berikan feedback anda!
              </h2>
              <label
                htmlFor="name"
                className="font-poppins text-sm lg:text-base mt-8"
              >
                Nama
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="12"
                id="nama"
                autoComplete="off"
                className="py-1 px-2 lg:py-2 lg:px-3 w-80 font-quicksand outline-none border-2 border-blue-400 bg-slate-950"
              />
              <label
                htmlFor="comment"
                className="font-poppins text-sm lg:text-base mt-3"
              >
                Komentar
              </label>
              <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength="150"
                id="comment"
                className="py-1 px-2 lg:py-2 lg:px-3 font-quicksand outline-none w-80 resize-none border-2 border-blue-400 bg-slate-950"
              />
              <button
                disabled={!name || !comment}
                type="button"
                onClick={handleComment}
                className="px-5 py-1 bg-green-800 hover:bg-green-900 rounded-lg font-semibold border border-white self-end mt-3 disabled:text-gray-500 disabled:border-gray-500"
              >
                Send
              </button>
            </div>
          )}
          <div className="flex flex-col items-center mb-10 mt-20 pr-4 gap-5 max-h-[30rem] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400">
            <span className="font-poppins self-start">{commentLen} Komentar</span>
            {comments.map((comment) => (
              <CommentCard key={comment._id} data={comment} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:min-h-[115vh] gap-10 pt-20 mt-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[1.3rem] lg:text-[2rem] font-poppins">
            Temui outlet kami
          </h1>
          <img
            src={indo}
            alt="indo map"
            className="lg:h-[30rem] h-[9rem] mt-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between place-items-center gap-10">
          <OutletCard city="Lhokseumawe" address="Jl. Pase No.14" />
          <OutletCard city="Bireuen" address="Jl. Gayo No.5" />
          <OutletCard city="Medan" address="Jl. Gatot Subroto No.148 A" />
          <OutletCard city="Kisaran" address="Jl. Cokroaminoto No.220" />
          <OutletCard city="Siantar" address="Jl. Merdeka No.282" />
          <OutletCard city="Rantau Prapat" address="Jl. Ahmad Yani No.71" />
        </div>
      </div>
    </div>
  );
};

export default Home;
