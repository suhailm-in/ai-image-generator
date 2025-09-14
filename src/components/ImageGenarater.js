import React, { useRef, useState } from "react";
import "./ImageGenarater.css";
import default_img from "./assets/ai_image.jpg";

function ImageGenarater() {
    const [imgUrl, setImgUrl] = useState("/");
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const ImageGenarater = async ()=>{
        if(inputRef.current.value===""){
            return;
        }

        setLoading(true);
        try{
            const response = await fetch("https://api.openai.com/v1/images/generations", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer  $OPENAI_API_KEY",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    model: "gpt-image-1",
                    prompt: inputRef.current.value,
                    n: 1,
                    size: "1024x1024"
                })
            });

            if (!response.ok) {
                throw new Error("Image generation failed");
            }

            const data = await response.json();
            console.log(data);
            if (data && data.data && data.data.length > 0) {
                setImgUrl(data.data[0].url);
            } else {
                alert("No image returned.");
            }
        }catch (error) {
            console.error("Error generating image:", error);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
            
    }

    return (
        <div className="mainContaine">
            <div className="header">
                Ai image <span>genarator</span>
            </div>
            <div className="img-loading">
                <div className="image">
                    <img
                        src={imgUrl === "/" ? default_img : imgUrl}
                        alt="ai_images"
                    />
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        ref={inputRef}
                        className="search-input"
                        placeholder="Describe What You Want To See"
                    />
                    <div className="generate-btn" onClick={()=>{ImageGenarater()}}>
                        {loading ? "Generating..." : "Generate"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageGenarater;
