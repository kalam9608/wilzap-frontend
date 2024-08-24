"use client";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../../../assets/index";
const data = [
  {
    id: 1,
    question: "question 1",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    question: "question 2",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    question: "question 3",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    question: "question 4",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState("1");

  const handleSelect = (item) => {
    setSelected(item.id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-around",
        backgroundColor: "#FFFDD0",
      }}
    >
      <div
        style={{
          maxWidth: "40%",
          height: "auto",
          padding: "2%",
          backgroundColor: "#FFFFFF",
          boxShadow: "1px 1px 3px 3px rgba(0, 0, 0, .2)",
          margin: "4%",
        }}
      >
        <div>
          {data.map((item, index) => {
            return (
              <div key={index} onClick={() => handleSelect(item)}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "94%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 2,
                    boxShadow: "1px 1px 3px 3px rgba(0, 0, 0, .2)",
                    padding: "3%",
                    marginBottom: "5%",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        color: "#000",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      Q.{index + 1} : {item.question}
                    </div>
                    <div
                      style={{
                        color: "#000",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      ?
                    </div>
                  </div>
                  <div
                    style={{
                      color: "#000",
                      fontSize: 13,
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    {selected == item.id ? item.answer : ""}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "40%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          margin: "4%",
          overflow: "hidden",
          boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, .1)",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "2%",
            marginInline: 10,
            marginBlock: 10,
            borderColor: "#000000",
            borderRadius: 5,
            borderStyle: "dotted",
            borderWidth: 2,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              color: "red",
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Our FAQ
          </div>
          <div
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Freequnetly Ask Questions
          </div>
        </div>
        <Image
          src={images.faq1} // Replace with your image path
          alt="FAQ1"
          className="mt-2 w-100 h-100 object-cover"
        />
      </div>
    </div>
  );
};

export default FAQ;
