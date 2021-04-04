import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import {useEffect} from "react"
import { Layout } from '../components/base/Layout'
import { ListMovies } from '../components/movies/ListMovies'
import { actionTypes } from "../store/reducer";
import {useStateValue} from "../store/stateProvider"
const accessToken = '6f633e37'

export default function Home ({ movies }) {
  const [data,dispatch]=useStateValue()
  
  return (
    <>
      <Head>
        <title>HectorDev Next 🔥</title>
      </Head>
      <Layout>
        <ListMovies movies={data} />
      </Layout>
    </>
  )
}


