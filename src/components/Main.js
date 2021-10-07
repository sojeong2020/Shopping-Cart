import React from 'react';

const Main = (props) => {
    console.log(props,"<<< props from main")
    const {items} = props;

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {
                    items.map(item=>{
                        return (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <h2>price :{item.price}p</h2>
                            <button>Add To Cart</button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Main;