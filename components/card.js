import React from 'react'

const Card = (props) => {
    return (
        <div className="lg:w-[20%] md:w-1/2 p-4 mt-2 transition-transform duration-500 hover:scale-95 w-full">
            <a onClick={props.onclick} className="block relative rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover cursor-pointer object-center w-full h-full block" src={"http://localhost:1337"+props.img} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-base tracking-widest title-font mb-1">{props.category}</h3>
                <h2 onClick={props.onclick} className="title-font text-xl font-medium cursor-pointer">{props.name}</h2>
                <p className="mt-1 text-lg">${props.price}</p>
            </div>
        </div>
    )
}

export default Card
