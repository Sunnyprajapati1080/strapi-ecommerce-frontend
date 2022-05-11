import { useState } from "react"
import Card from "../components/card"
import { MdCancel } from "react-icons/md"
import { BsCheckCircleFill } from "react-icons/bs"
import Navbar from "../components/navbar"

export default function Home(props) {
  const [products, setproducts] = useState(props.products.data)
  const [toggleCheckOut, settoggleCheckOut] = useState("invisible")
  const [BuyingMode, setBuyingMode] = useState("buy")
  const [checkoutData, setcheckoutData] = useState({})

  const showCheckOut = (index) => {
    settoggleCheckOut("visible")
    const product = products[index]
    setcheckoutData({name:product.attributes.name,img:product.attributes.img.data.attributes.url,category:product.attributes.category,price:product.attributes.price})
  }
  return (
    <>
      <div className={`${toggleCheckOut} before:w-screen before:h-screen before:z-10 before:fixed before:bg-black before:opacity-50`}>
        <div className="w-full h-full flex fixed z-40 justify-center items-center">
          <div className={`bg-white rounded overflow-auto z-20 w-[550px] p-3 absolute ${BuyingMode === "success" && "h-[500px] flex justify-center items-center"}`}>
            <MdCancel className="cursor-pointer text-2xl absolute right-4 top-4" onClick={() => { settoggleCheckOut("invisible"); setBuyingMode("buy"); }} />
            {BuyingMode !== "success" && <><img alt="ecommerce" className="object-cover mt-5 rounded object-center mx-auto max-h-[500px] block" src={"http://localhost:1337"+checkoutData.img} />
              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-base tracking-widest title-font mb-1">{checkoutData.category}</h3>
                <h2 className="text-gray-400 title-font text-xl font-medium">{checkoutData.name}</h2>
                <p className="text-gray-400 mt-1 text-lg">${checkoutData.price}</p>
                {BuyingMode === "buy" && <button onClick={() => setBuyingMode("pay")} className="bg-pink-500 text-white rounded w-full p-2 hover:bg-pink-400 mt-4">buy now</button>}
                {BuyingMode === "pay" && <div className="mt-4 w-full flex justify-center items-center space-x-2">
                  <button onClick={() => setBuyingMode("buy")} className="bg-pink-500 text-white rounded w-full p-2 hover:bg-pink-400">cancel</button>
                  <button onClick={() => setBuyingMode("processing")} className="bg-pink-500 text-white rounded w-full p-2 hover:bg-pink-400">pay $125</button>
                </div>}
                {BuyingMode === "processing" && <div onAnimationEnd={() => { setBuyingMode("success") }} className="animate-[rotate_1s_linear_4] my-2 mx-auto w-7 h-7 rounded-full bg-transparent border-b-transparent border-[3px] border-pink-500">
                </div>}
              </div>
            </>}
            {BuyingMode === "success" && <div className="flex flex-col relative space-y-2 justify-center items-center">
              <div className="glow w-[128px] rounded-full h-[128px] absolute bottom-[38px] z-20"></div>
              <BsCheckCircleFill className="text-green-400 relative z-30 text-9xl" />
              <p className="text-[20px] relative top-2 font-semibold">congratulations you owned this product</p>
            </div>}
          </div>
        </div>
      </div>
      <Navbar />
      {products.length > 0 ?
        <section className="text-gray-400 body-font">
          <div className="container px-52 py-8 mx-auto">
            <div className="flex flex-wrap items-end -m-4">
              {products.map((product, index) => {
                return <Card onclick={()=>showCheckOut(index)} key={index} img={product.attributes.img.data.attributes.url} name={product.attributes.name} price={product.attributes.price} category={product.attributes.category} />
              })
              }
            </div>
          </div>
        </section>
        : <div className="w-screen h-screen fixed flex justify-center items-center"><p className="text-xl">products not available!</p></div>}
    </>
  )
}

export async function getServerSideProps() {
  const productsjson = await fetch("http://localhost:1337/api/products?populate=img")
  const products = await productsjson.json()
  return { props: { products } }
}