import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Footer from '../components/Footer';
import { gsap, Power3 } from 'gsap';


export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [sellListings, setsellListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [loading, setLoading] = useState(true);

  SwiperCore.use([Navigation]);

  // Refs for GSAP animations
  const headerRef = useRef(null);
  const buyNowRef = useRef(null);
  const sellNowRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchsellListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchsellListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sell&limit=4');
        const data = await res.json();
        setsellListings(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchOfferListings();

    // GSAP Animations
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      duration: 1,
      delay: 0.3,
    });
    gsap.from(descRef.current, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      duration: 1,
      delay: 0.6,
    });
    gsap.from(buyNowRef.current, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      duration: 1,
      delay: 0.6,
    });

    gsap.from(sellNowRef.current, {
      opacity: 0,
      y: 20,
      ease: Power3.easeOut,
      duration: 1,
      delay: 0.9,
    });
  }, []);

  return (
    <div>
      {/* top */}
      <div className=' shadow'  style={{
    background: 'linear-gradient(rgb(0, 105, 255) 0%, rgb(20, 51, 214) 100%) center top / cover no-repeat',
  }}>
        <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
          <h1
            ref={headerRef}
            className='text-white font-bold text-3xl lg:text-6xl'
          >
            <span className='text-white'>Buy</span> and{' '}
            <span className='text-white'>Sell</span>
            <span className='text-white'> Student</span>
            <br />
            essentials with ease
          </h1>
          <div className='text-white text-xs sm:text-sm font-medium' ref={descRef}>
            EdxTrade is a marketplace for students to buy, sell and rent essentials.
          </div>
          <div className="flex space-x-4">
            <Link
              ref={buyNowRef}
              to={'/search'}
              className='text-xs sm:text-sm text-white font-bold hover:bg-green-600 hover:text-white  px-4 py-3.5  w-40 border-2 border-green-600  text-center'
            >
              Buy Now
            </Link>
            <Link
              ref={sellNowRef}
              to={'/create-listing'}
              className='text-xs sm:text-sm text-white font-bold hover:bg-red-700 hover:text-white px-4 py-3.5  w-40 border-2 border-red-600 text-center'
            >
              Sell Now
            </Link>
          </div>
        </div>
      </div>

      {/* listing results for offer, sell and rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {loading ? (
          <div className='text-center text-xl font-semibold text-slate-600'>Loading listings...</div>
        ) : (
          <>
            {offerListings.length > 0 && (
              <div className=''>
                <div className='my-3'>
                  <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
                  <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
                </div>
                <div className='flex flex-wrap gap-4'>
                  {offerListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              </div>
            )}
            {rentListings.length > 0 && (
              <div className=''>
                <div className='my-3'>
                  <h2 className='text-2xl font-semibold text-slate-600'>Recent products for rent</h2>
                  <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more products for rent</Link>
                </div>
                <div className='flex flex-wrap gap-4'>
                  {rentListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              </div>
            )}
            {sellListings.length > 0 && (
              <div className=''>
                <div className='my-3'>
                  <h2 className='text-2xl font-semibold text-slate-600'>Recent products for sale</h2>
                  <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sell'}>Show more products for sell</Link>
                </div>
                <div className='flex flex-wrap gap-4'>
                  {sellListings.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {!loading && <Footer />} {/* Render Footer only after loading */}
      
    </div>
  );
}
