import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topSongs } from '../actions/spotify'
import Loader from '../components/Loader'
import TopAlbums from './albums/TopAlbums'
import TopPlaylists from './playlists/TopPlaylists'
import Recent from './Recent'
import Footer from "../components/Footer"

const Dashboard = () => {
  const {loading}=useSelector(state=> state.user)
  const dispatch=useDispatch();
  const {top_20}=useSelector(state=> state.songs)
  const {user}=useSelector(state=> state.user);
  useEffect(()=> {
    dispatch(topSongs())
  },[dispatch])

  return (
    loading ? <Loader className="h-screen" /> :
    <div>
    <div className="flex flex-col bg-amber-100/100 m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Top Playlists
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            top_20 && top_20.playlists.items.map((playlist)=> (
              <TopPlaylists key={playlist.data.name} playlist={playlist.data} />
            ))
          }
        </div>
      </div>
  </div>


    <div className="flex flex-col bg-amber-100/100 m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Top Albums
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >s
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            top_20 && top_20.albums.items.map((album)=> (
              <TopAlbums key={album.data.name} album={album.data} />
            ))
          }
        </div>
      </div>
  </div>
    <div className="flex flex-col bg-amber-100/100 m-auto p-auto">
    <h1
        className="flex py-5 lg:px-10 md:px-10 px-5 lg:mx-20 md:mx-10 mx-5 font-bold text-4xl text-gray-800"
      >
        Recently Played
      </h1>
      <div
        className="flex overflow-x-scroll pb-10 scrollbar-hide"
      >s
        <div
          className="flex flex-nowrap lg:ml-20 md:ml-10 ml-10 "
        >
          {
            user && user.recents.map((song)=>(
              <Recent song={song}/>
            ))
          }
        </div>
      </div>
  </div>
          <Footer />
  
</div>

  )
}

export default Dashboard