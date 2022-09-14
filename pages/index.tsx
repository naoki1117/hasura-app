import type { NextPage } from 'next'
import { Auth } from '../components/Auth'
import { Layout } from '../components/Layout'


const Home: NextPage = () => {
  return (
    <Layout title="HOME">
      <Auth/>

    </Layout>
      
      
    
  )
}

export default Home
