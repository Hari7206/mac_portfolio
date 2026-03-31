import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"
function Spotify() {
  return (
        <MacWindow width='25vw'>
            <div className="spotify-window">
               <iframe
  data-testid="embed-iframe"
  style={{ borderRadius: '12px' }}
  src="https://open.spotify.com/embed/playlist/7cHWpjlm7bWzOSAsLSxz7h"
  width="100%"
  height="352"
  frameBorder="0"
  allowFullScreen
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
            </div>
        </MacWindow>
  )
}

export default Spotify