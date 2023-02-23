import { memo } from 'react'
import Typewriter from 'typewriter-effect'
export default memo(function Headermain() {
  return (
    <div className="headermain" id="header">
      <div className="overlay"></div>
      <h2>Sweezy Shop <br /> <Typewriter options={{
        strings: ['Online Shopping', "High Quality", "Big Sales"],
        autoStart: true,
        loop: true
      }}>
      </Typewriter></h2>
    </div>
  )
})
