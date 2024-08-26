import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    'h1',
    {id: 'heading'},
    'I am h1 heading',
);

const elem = <span>This is span tag</span>

// JSX
// React Element 
const jsxHeading = (
    <>
        <div className='main'>
            {elem}
            <h1 className='heading'>This is another heading</h1>
        </div>
    </>
);

const HeadingComponent1 = () => {
    return <h1 className='head'>This is a heading component</h1>
};

// React Component
const HeadingComponent = () => (
    <h1 className='head'>This is a functional component</h1>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<JsxHeading />);
// root.render(jsxHeading);

const Title = () => (
    <h1 className='tableIndex'>Namaste React using JSX</h1>
);

const HComp = () => (
    <>
        <div className='container'>
            {jsxHeading}
            {Title()}
            <Title />
            <Title></Title>
            {<h2>1220</h2>}
            <h1 className='hComp'>This is HComp</h1>
        </div>
    </>
);

const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(<HComp />)
