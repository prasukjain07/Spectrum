import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import '../css/Text.css'
export default function Text() {
    
  return (
    <div className='text-wrapper'>
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
        //   color: 'white',
          fontWeight: 500,
          fontSize: `calc(5vh + 2vw)`,
        }}
        startDelay={2000}
        cursorColor="#E21818"
        multiText={[
          'Art Competition',
          'Photography Competition',
          'Art & Photography Competition',
          'Art Competition',
          'Photography Competition',
          'Art & Photography Competition',
          'Art Competition',
          'Photography Competition',
          'Art & Photography Competition',
          'Art Competition',
          'Photography Competition',
          'Art & Photography Competition',
          'Art Competition',
          'Photography Competition',
          'Art & Photography Competition',
          'Art Competition',
          'Photography Competition',
          'Art & Photography Competition',
        ]}
        multiTextDelay={1000}
        typeSpeed={300}
      />
    </div>
  )
}

     