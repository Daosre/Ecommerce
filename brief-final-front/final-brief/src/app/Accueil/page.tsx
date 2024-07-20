'use client'
import Footer from '@/Components/Footer/page'
import Header from '@/Components/Header/page'
import NavBar from '@/Components/NavBar/page'
import Tableau from '@/Components/Tableau/page'
import { SearchProduct } from '@/Services/product'
import { ProductProps } from '@/Utils/product-type'
import { useEffect, useState } from 'react'

const Accueil = () => {
  const [search, setsearch] = useState<string>()
  const [productList, setproductList] = useState<ProductProps[]>([])
  useEffect(() => {
    
      SearchProduct(search).then((res) => {
        setproductList(res.data)
      })
    
  },[search])
  return (
    <div className='relative w-full h-screen'>
      <Header />
          <div>
       <NavBar setsearch={setsearch} />
            <Tableau productList={productList} setproductList={setproductList} />
          </div>
            <Footer/>
    </div>
  ) 
}

export default Accueil
