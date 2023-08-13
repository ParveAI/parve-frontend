import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { canvasPreview } from "./utils/canvasPreview";

function setCanvasImage(image, canvas, crop) {
  if (!crop || !canvas || !image) {
    return;
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const ctx = canvas.getContext("2d");
  // refer https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
  const pixelRatio = window.devicePixelRatio;

  canvas.width = crop.width * pixelRatio * scaleX;
  canvas.height = crop.height * pixelRatio * scaleY;

  // refer https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  // refer https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width * scaleX,
    crop.height * scaleY
  );
}

export default function CropperView() {
  const [upImg, setUpImg] = useState();

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const [crop, setCrop] = useState({ unit: "px", width: 30, aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);

  // on selecting file we set load the image on to cropper
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      console.log(reader.result);
      reader.addEventListener("load", () =>
        setUpImg(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  console.log(crop);

  const onLoad = useCallback((img) => {
    imgRef.current = upImg;
  }, []);

  useEffect(() => {
    console.log(previewCanvasRef);

    canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
  }, [completedCrop]);

  return (
    <div>
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="min-w-[500px] min-h-[500px] flex items-center justify-center bg-blue-500">
          {!!upImg && (
            <ReactCrop
              className="w-[500px] h-[500px]"
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <img ref={imgRef} src={upImg} onImageLoaded={onLoad} />
            </ReactCrop>
          )}
        </div>
        <div className="min-w-[500px] min-h-[500px] flex items-center justify-center bg-red-500">
          {!!completedCrop && (
            <canvas
              ref={previewCanvasRef}
              style={{
                width: Math.round(completedCrop?.width ?? 0),
                height: Math.round(completedCrop?.height ?? 0),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
