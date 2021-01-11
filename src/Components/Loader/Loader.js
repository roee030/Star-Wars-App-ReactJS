import React from "react";
import "./Loader.css";
export default function Loader() {
  return (
    <div class="camera__wrap">
      <div class="camera__body">
        <div class="camera__body-k7">
          <div class="tape">
            <div class="roll"></div>
            <div class="roll"></div>
            <div class="roll"></div>
            <div class="roll"></div>
            <div class="center"></div>
          </div>
          <div class="tape">
            <div class="roll"></div>
            <div class="roll"></div>
            <div class="roll"></div>
            <div class="roll"></div>
            <div class="center"></div>
          </div>
        </div>
        <div class="camera__body__stuff">
          <div class="camera__body__stuff-bat"></div>
          <div class="camera__body__stuff-pointer first"></div>
          <div class="camera__body__stuff-pointer"></div>
        </div>
      </div>
      <div class="camera__body-optic"></div>
      <div class="camera__body-light"></div>
    </div>
  );
}
