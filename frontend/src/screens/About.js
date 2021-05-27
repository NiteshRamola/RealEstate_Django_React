import React, { useState, useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import House from '../assests/images/house.jpg'

const About = () => {
  const [topSeller, setTopSeller] = useState([])
  const [realtors, setRealtors] = useState([])

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/realtors/topseller/`,
          config
        )
        setTopSeller(res.data)
      } catch (err) {}
    }

    getTopSeller()
  }, [])

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const getRealtors = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/realtors/`,
          config
        )
        setRealtors(res.data)
      } catch (err) {}
    }

    getRealtors()
  }, [])

  const getAllRealtors = () => {
    let allRealtors = []
    let results = []

    realtors.map((realtor) => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className='about__display'>
            <img className='about__display__image' src={realtor.photo} alt='' />
          </div>
          <h3 className='about__realtor'>{realtor.name}</h3>
          <p className='about__contact'>{realtor.phone}</p>
          <p className='about__contact'>{realtor.email}</p>
          <p className='about__about'>{realtor.description}</p>
        </Fragment>
      )
    })

    for (let i = 0; i < realtors.length; i += 3) {
      results.push(
        <div key={i} className='row'>
          <div className='col-1-of-3'>{allRealtors[i]}</div>
          <div className='col-1-of-3'>
            {allRealtors[i + 1] ? allRealtors[i + 1] : null}
          </div>
          <div className='col-1-of-3'>
            {allRealtors[i + 2] ? allRealtors[i + 2] : null}
          </div>
        </div>
      )
    }

    return results
  }

  const getTopSeller = () => {
    let result = []

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className='about__display'>
            <img className='about__display__image' src={seller.photo} alt='' />
          </div>
          <h3 className='about__topseller'>Top Seller:</h3>
          <p className='about__realtor'>{seller.name}</p>
          <p className='about__contact'>{seller.phone}</p>
          <p className='about__contact'>{seller.email}</p>
          <p className='about__about'>{seller.description}</p>
        </Fragment>
      )
    })

    return result
  }

  return (
    <main className='about'>
      <Helmet>
        <title>Real Estate - About</title>
        <meta name='description' content='About us' />
      </Helmet>
      <header className='about__header'>
        <h1 className='about__heading'>About Realest Estate</h1>
      </header>
      <section className='about__info'>
        <div className='row'>
          <div className='col-3-of-4'>
            <h2 className='about__subheading'>
              We find the perfect home for you
            </h2>
            <p className='about__paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati, incidunt. Tempora, at consectetur nisi veniam
              temporibus, deserunt, rerum aliquam dolor expedita vel eveniet sit
              dolorum dolorem iste. Optio, vitae officia? Fuga ducimus,
              voluptatibus quas temporibus enim eveniet officia eaque voluptatem
              accusantium debitis, aspernatur iusto tempora quidem, laudantium
              autem odio distinctio.
            </p>
            <div className='about__display'>
              <img className='about__display__image' src={House} alt='' />
            </div>
            <p className='about__paragraph'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quae ipsum reprehenderit eum culpa quisquam dolorum
              perspiciatis repellat accusantium, laudantium dolor eius similique
              a mollitia ipsam ratione esse sunt inventore incidunt, ab ducimus
              deleniti quas quos! Earum, nobis error. Provident, itaque
              quibusdam quisquam velit dolores obcaecati cumque quos? Neque
              soluta sit nemo laudantium sint sed fugit omnis eligendi, vero non
              nulla aut perspiciatis nihil architecto cumque iste asperiores
              corporis laborum ex? Assumenda animi neque sunt blanditiis ea
              tempora magni, dolores ducimus iste cumque quibusdam commodi.
              Excepturi, quo. Aspernatur, alias sapiente consequuntur earum
              accusantium quod omnis numquam culpa labore, neque odit?
            </p>
          </div>
          <div className='col-1-of-4'>{getTopSeller()}</div>
        </div>
      </section>
      <section className='about__team'>
        <div className='row'>
          <h2 className='about__subheading'>Meet out awesome team!</h2>
        </div>
        {getAllRealtors()}
      </section>
    </main>
  )
}

export default About
