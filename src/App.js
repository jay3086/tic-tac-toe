import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Icons from "./compont/Icons";


import { Card, CardBody, Container, Button, Col,  } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMassage, setWinMassage] = useState("");

  const realoadGame = () => {
    setIsCross(false);
    setWinMassage("");
    itemArray.fill("empty", 0, 9);
  };
  const checkIsWinner = () => {
    if (itemArray[0]===itemArray[1]
      &&itemArray[0]===itemArray[2]&&
      itemArray[0]!=="empty") {
        setWinMassage(`${itemArray[0]} wins`);
      
    }
    else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMassage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMassage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMassage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMassage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMassage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMassage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMassage(`${itemArray[2]} won`);
    }
  };
  const changeItem = (itemNumber) => {
    if (winMassage) {
      return toast(winMassage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("alrady filled ", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Col md={6} className="offset-md-3">
        {winMassage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMassage}
            </h1>
            <Button color="success" block onClick={realoadGame} >
              realoadGame
            </Button>

          </div>
        ) : (
          <h1 className=" text-center text-warning">
            {isCross? "Cross" : "Circle"}truns
          </h1>
        )}
        <div className="grid">
          {itemArray.map((item, index) => (
            <Card color="warning" onClick={()=>changeItem(index)}>
              <CardBody className="box">
                <Icons name={item} />
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Container>
  );
};

export default App;
