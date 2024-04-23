import "./App.css";
import { useState } from "react";
import TicTacToe from "./components/tic_tac_toe";

const initialBoard = () => Array(9).fill(null);

function App() {
  return <TicTacToe />;
}

export default App;
