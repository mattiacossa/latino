import React,{ useState, useEffect } from "react";
import ContainerBlock from "../components/ContainerBlock";
import Sondaggio from "../components/Analisi";
import styles from "../styles/Home.module.css";


export default function sondaggio() {
  const [loading, setLoading] = useState(true);

  


  return (
    <ContainerBlock title="Polly - Lascia il segno">
      <Sondaggio />
    </ContainerBlock>
  );
}
