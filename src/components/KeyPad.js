import React, { useState } from "react";
import Result from "../components/Result";
import { Button } from "antd";
import styled from "styled-components";
import { Row, Col } from "antd";

import styledpage from "../index.css";

function KeyPad(onClick, children) {
  const [fristNumumber, setfristNumumber] = useState("");
  const [SecondNumber, setSecindNumumber] = useState("");
  const [operators, setOperators] = useState("");
  const [check, setCheck] = useState(true);

  const readNumber = (number) => {
    setfristNumumber(fristNumumber + number);
  };
  const percent = () => {
    setfristNumumber(fristNumumber / 100);
  };
  const handleClickOperators = (operatorsButton) => {
    setOperators(operatorsButton);
    setSecindNumumber(fristNumumber);

    setfristNumumber(" ");
  };
  const handleClearClick = () => {
    setfristNumumber("");
    setCheck(true);
  };

  const handleCheck = () => {
    if (check === true) {
      setfristNumumber(fristNumumber + "(");
      setCheck(false);
    } else {
      setfristNumumber(fristNumumber + ")");
      setCheck(true);
    }
  };

  const Contanier = styled.div`
    text-align: center;
    margin-top: 20vh;
  `;
  const ResultBar = styled.div`
    font-size: 60px;
  `;

  return (
    <Contanier>
      <ResultBar>
        <div> &nbsp;{fristNumumber} &nbsp;</div>
      </ResultBar>

      <Row>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={handleClearClick}
            size="large"
          >
            C
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={handleCheck}
            size="large"
          >
            ( )
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={percent}
            size="large"
          >
            %
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={() => handleClickOperators("/")}
            size="large"
          >
            /
          </Button>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("1")}
            size="large"
          >
            1
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("2")}
            size="large"
          >
            2
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("3")}
            size="large"
          >
            3
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={() => handleClickOperators("+")}
            size="large"
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("4")}
            size="large"
          >
            4
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("5")}
            size="large"
          >
            5
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("6")}
            size="large"
          >
            6
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={() => handleClickOperators("-")}
            size="large"
          >
            -
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("7")}
            size="large"
          >
            7
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("8")}
            size="large"
          >
            8
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("9")}
            size="large"
          >
            9
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button1"
            type="default"
            onClick={() => handleClickOperators("*")}
            size="large"
          >
            *
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber(".")}
            size="large"
          >
            .
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("0")}
            size="large"
          >
            0
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button"
            type="primary"
            onClick={() => readNumber("-")}
            size="large"
          >
            +-
          </Button>
        </Col>
        <Col span={6}>
          <Button
            className="button2"
            type="default"
            onClick={() =>
              Result(setfristNumumber, fristNumumber, operators, SecondNumber)
            }
            size="large"
          >
            =
          </Button>
        </Col>
      </Row>
    </Contanier>
  );
}
export default KeyPad;
