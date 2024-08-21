/*
* <div>
*   <div>
*       <h1>Hello world!</h1>        
*   </div>
* </div>
*
*
*/

// const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement(
//         'div',
//         {id: 'child'},
//         React.createElement('h1', {}, 'Hello world!')
//     )
// )

// console.log(parent); // this will return an object
// const heading = React.createElement('h1', {id: 'heading'}, 'Hello world!');
// console.log(heading); // this will return an object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);

// --------------------------------------------------------------------

/*
* <div id='parent'>
*   <div id='child'>
*       <h1>This is h2 tag!</h1>
*       <h2>This is h2 tag!</h2> 
*   </div>
* </div>
*/

// const parent1 = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement(
//         'div',
//         {id: 'child'}, [
//             React.createElement('h1', {}, 'This is h1 tag'), 
//             React.createElement('h2', {}, 'This is h2 tag')
//         ])
// );

// console.log(parent1);

// const root1 = ReactDOM.createRoot(document.getElementById('root'));

// root1.render(parent1);

// ---------------------------------------------------------------------

/*
* <div id='parent'>
*   <div id='child'>
*       <h1>This is h2 tag!</h1>
*       <h2>This is h2 tag!</h2> 
*   </div>
*   <div id='child'>
*       <h1>This is h2 tag!</h1>
*       <h2>This is h2 tag!</h2> 
*   </div>
* </div>
*/

const parent2 = React.createElement(
    'div',
    {id: 'parent'}, [
    React.createElement(
        'div',
        {id: 'child1'}, [
            React.createElement('h1', {}, 'This is h1 tag'), 
            React.createElement('h2', {}, 'This is h2 tag')
        ]),
    React.createElement(
        'div',
        {id: 'child2'}, [
            React.createElement('h3', {}, 'This is h3 tag'),
            React.createElement('h4', {}, 'This is h4'),
        ])
    ]
);

console.log(parent2);

const root2 = ReactDOM.createRoot(document.getElementById('root'));

root2.render(parent2);