import React from 'react';
import { X, Sparkles } from 'lucide-react';

const MessageCard = ({ message, onClose }) => {
  // Handle both single message object or array from backend
  const messageData = Array.isArray(message) ? message[0] : message;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50 animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scaleIn border-4 border-transparent bg-clip-padding" style={{backgroundImage: 'linear-gradient(white, white), linear-gradient(to bottom right, #b91c1c, #dc2626, #15803d)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box'}}>
        <div className="p-8 relative overflow-hidden">
          {/* Decorative snowflakes */}
          <div className="absolute top-4 left-4 text-red-200 animate-pulse">
            <Sparkles size={24} />
          </div>
          <div className="absolute top-8 right-8 text-green-200 animate-pulse delay-300">
            <Sparkles size={20} />
          </div>
          <div className="absolute bottom-8 left-8 text-red-200 animate-pulse delay-700">
            <Sparkles size={18} />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="text-center space-y-6 mt-4">
            <div className="text-6xl">🎄</div>
            
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600">
              {messageData?.title || "Merry Christmas!"}
            </h2>
            
            <div className="space-y-3 text-gray-700">
              <p className="text-base font-semibold text-red-600">
                Dear {messageData?.name},
              </p>
              
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {messageData?.content || "Wishing you joy, peace, and all the happiness your heart can hold this holiday season."}
              </p>
            </div>

            <div className="flex justify-center gap-2 text-2xl">
              🎁 ⭐ 🔔 ❄️ 🎅
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                With love and warm wishes,
              </p>
              <p className="text-lg font-semibold text-red-600 mt-1">
                Kie
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default MessageCard;