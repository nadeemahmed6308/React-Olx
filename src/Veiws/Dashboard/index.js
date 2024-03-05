import { useEffect, useState } from "react"
import { getAllProducts } from "../../config/firebase"
import Card from '../../components/Card';




function Dashboard() {
  const [products, setproducts] = useState([])

  useEffect(() => {
    getproducts()
  }, [])
  async function getproducts() {
    // fetch('https://dummyjson.com/products')
    // .then((res) => res.json() )
    // .then(res => setproducts(res.products))
    const res = await getAllProducts()
    console.log('res', res)
    setproducts(res)
  }
  console.log(products)

  return <div>

    <div className="container-fluid mt-2 mb-4">
      <div className="row row-cols-1 row-cols-md-4 g-1 container-fluid">

        {products.map((item, index) => {
          return (<Card key={index} item={item} />
          )
        })}
      </div></div>
  </div>
}

export default Dashboard;