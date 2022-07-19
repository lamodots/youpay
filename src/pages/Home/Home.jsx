import React from 'react'
import { About } from '../../components/About/About'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer/Footer'
import { Hexo } from '../../components/hero/Hexo'
import { ProductServices } from '../../components/ProductServices/ProductServices'

export const Home = () => {
  return (
    <Container>
        <Hexo />
        <ProductServices/>
        <About />
        <Footer />
    </Container>
  )
}
