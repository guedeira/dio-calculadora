import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row, Div } from "./styles";
import { useState } from "react";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [firstNumber, setFirstNumber] = useState("0");
    const [operation, setOperation] = useState("");
    const [history, setHistory] = useState([]);

    const handleOnClear = () => {
        setCurrentNumber("0");
        setFirstNumber("0");
        setOperation("");
    };

    const handleAddNumber = (num) => {
        setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
    };

    const handleSumNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(currentNumber);
            setCurrentNumber("0");
            setOperation("+");
            return;
        }
        const sum =
            (parseFloat(firstNumber) || 0) + (parseFloat(currentNumber) || 0);
        setCurrentNumber(String(sum));
        setOperation("");
    };

    const handleMinusNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(currentNumber);
            setCurrentNumber("0");
            setOperation("-");
            return;
        }
        const sum =
            (parseFloat(firstNumber) || 0) - (parseFloat(currentNumber) || 0);
        setCurrentNumber(String(sum));
        setOperation("");
    };

    const handleMultiplicationNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(currentNumber);
            setCurrentNumber("0");
            setOperation("*");
            return;
        }
        const sum =
            (parseFloat(firstNumber) || 0) * (parseFloat(currentNumber) || 0);
        setCurrentNumber(String(sum));
        setOperation("");
    };

    const handleDivisionNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(currentNumber);
            setCurrentNumber("0");
            setOperation("/");
            return;
        }
        const sum =
            (parseFloat(firstNumber) || 0) / (parseFloat(currentNumber) || 0);
        setCurrentNumber(String(sum));
        setOperation("");
    };

    const operations = {
        "+": handleSumNumbers,
        "-": handleMinusNumbers,
        "*": handleMultiplicationNumbers,
        "/": handleDivisionNumbers,
    };

    const handleEquals = () => {
        if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
            const executeOperation = operations[operation];

            if (executeOperation) {
                executeOperation();
            }

            setHistory((prevHistory) => {
                const newEntry = `${firstNumber} ${operation} ${currentNumber} = ${currentNumber}`;
                const newHistory = [newEntry, ...prevHistory];

                return newHistory.slice(0, 3);
            });
            handleOnClear();
        }
    };

    return (
        <Container>
            <Content>
                <Div>
                    {history.map((item, index) => (
                        <p key={index + 1}>
                            {index}: {item}
                        </p>
                    ))}
                </Div>
                <Input value={currentNumber} />
                <Row>
                    {/* Segunda linha */}
                    <Button label="7" onClick={() => handleAddNumber("7")} />
                    <Button label="8" onClick={() => handleAddNumber("8")} />
                    <Button label="9" onClick={() => handleAddNumber("9")} />
                    <Button label="÷" onClick={handleDivisionNumbers} />
                </Row>
                <Row>
                    {/* Terceira linha */}
                    <Button label="4" onClick={() => handleAddNumber("4")} />
                    <Button label="5" onClick={() => handleAddNumber("5")} />
                    <Button label="6" onClick={() => handleAddNumber("6")} />
                    <Button label="X" onClick={handleMultiplicationNumbers} />
                </Row>
                <Row>
                    {/* Quarta linha */}
                    <Button label="1" onClick={() => handleAddNumber("1")} />
                    <Button label="2" onClick={() => handleAddNumber("2")} />
                    <Button label="3" onClick={() => handleAddNumber("3")} />
                    <Button label="-" onClick={handleMinusNumbers} />
                </Row>
                <Row>
                    {/* Quinta linha */}
                    <Button label="C" onClick={handleOnClear} />
                    <Button label="0" onClick={() => handleAddNumber("0")} />
                    <Button label="=" onClick={handleEquals} />
                    <Button label="+" onClick={handleSumNumbers} />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
