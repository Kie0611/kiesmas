import React, { useEffect, useState } from 'react'
import { TreePine, Facebook, Instagram } from 'lucide-react'
import toast from 'react-hot-toast';
import axios from 'axios';
import MessageCard from '../components/MessageCard'; 

const HomePage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "It's Kiesmas!"
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Please enter your name!");
      return;
    }

    setLoading(true);
    
    try {
      console.log('Fetching message for:', name.trim()); // Debug log
      
      // Replace with your actual API URL
      const res = await axios.get(`http://localhost:5001/api/message/${name.trim()}`);
      
      console.log('Response:', res.data); // Debug log
      
      setMessage(res.data);
      setShowCard(true);
      toast.success("Message found! 🎄");
    } catch (error) {
      console.log('Error details:', error.response); // Debug log
      
      if (error.response?.status === 404) {
        toast.error("No message found for this name");
      } else {
        toast.error("Failed to fetch message");
      }
      console.error("Error fetching message", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseCard = () => {
    setShowCard(false);
    setMessage(null);
    setName('');
  };

  return (
    <div className="min-h-screen bg-[#FFFAFA] relative">
      <div className="absolute inset-0 text-6xl opacity-10 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-40 left-10">⭐</div>
        <div className="absolute top-32 right-20">❄️</div>
        <div className="absolute top-20 left-1/4">⛄</div>
        <div className="absolute top-40 right-1/3">🎁</div>
        <div className="absolute bottom-40 left-26">🎅</div>
        <div className="absolute bottom-60 right-32">🎄</div>
        <div className="absolute top-1/2 left-32">🔔</div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center text-2xl font-bold text-[#1d351d] mb-8">
          <TreePine className="size-12 text-[#1d351d] mr-2"/>
          It's <span className='text-[#8b181d] ml-2'>Kie</span>smas!
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <div className="card-body mt-20">
              <h2 className="text-5xl font-bold mb-3 text-[#1d351d]">Merry Christmas!</h2>
              <p className="text-lg text-gray-600 mb-8">Put your name below and see if I have a message for you! 🌟</p>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered max-w-lg w-full mx-auto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                  />
                </div>

                <div className="card-actions justify-center">
                  <button 
                    type="submit" 
                    className="btn bg-red-500 hover:bg-red-600 text-white max-w-lg w-full mx-auto disabled:bg-gray-400"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "See Message!"}
                  </button>
                </div>
              </form>

              <div className='text-center mt-[115px]'>
                <p className='font-medium'>Made by: Kie</p>

                <div className='flex justify-center mt-8 space-x-7'>
                  <a href="https://www.facebook.com/Keru.06" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <Facebook className='size-10'/>
                  </a>
                  <a href="https://www.instagram.com/_whiskiee/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                    <Instagram className='size-10'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCard && message && (
        <MessageCard 
          message={message} 
          onClose={handleCloseCard}
        />
      )}
    </div>
  )
}

export default HomePage