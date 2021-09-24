import React, { Suspense, useRef } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  useGLTF,
  Detailed,
} from "@react-three/drei";
import background from "../assets/340452.png";
import { Html, useProgress } from "@react-three/drei";

import facemodel from "../assets/thisistheone.glb";

function Model(props) {
  const { scene } = useGLTF(facemodel);

  return(

    <primitive object={scene} position={[0,0,0]}  />
  )
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function Face() {
  return (
    <HashRouter>
      <Canvas
        onClick={() => console.log("click")}
        className="canvasstyle"
        style={{
          height: "100%",
          background: `no-repeat center/100% 100% url("https://lh3.googleusercontent.com/proxy/bdGa1NUkXeojFlpl2U0j8dasLIVUUVMCkwBbgRR6q0KrVTTPJsA-26jOceQHMdVRuGwGl2EsLQNYyFepWyfT-EYoF-XIQfqdfaBZ8pJmctkXRhgLl1sMLXt22F9JDlokLhZaSnnGT6bTUSyJ-Bj1kuDvKOvu9tzgXq-CsMM")`,
        }}
        pixelRatio={[1, 2]}
        anisotropy={8}
        camera={{ position: [0, 0, 10], fov: 30}}
      >
        <ambientLight intensity={0.3} />
        {/* <spotLight intensity={1} position={[20, 50, 100]} color={"lightyellow"}   aoMapIntensity={1} /> */}
        {/* <pointLight intensity={1} position={[5, 5, 5]} decay={1} distance={300} shadow={1} color={"lightyellow"} /> */}
        <Suspense fallback={<Loader />}>
   
          <Model/>
   
    
          <Environment preset={'sunset'}/>
        </Suspense>
        <OrbitControls autoRotate = {true} autoRotateSpeed = {5} />
       
      </Canvas>
    </HashRouter>
  );
}