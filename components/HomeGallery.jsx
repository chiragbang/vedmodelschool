import React from 'react'
import "../styles/HomeGallery.css"


import Image from 'next/image'

const HomeGallery = () => {
  return (
    <div className='marquee-container'>
      <div className="marquee">
        <div className="marquee__group">
          <Image width={200} height={200} src='/images/photos2/1.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/36.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/15.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/20.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/25.webp' alt='school' />
        </div>

        <div aria-hidden="true" className="marquee__group">
          <Image width={200} height={200} src='/images/photos2/18.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/32.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/27.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/3.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/19.webp' alt='school' />
        </div>
      </div>

      <div className="marquee marquee--borders" style={{ duration: "100s" }}>
        <div className="marquee__group">
          <p>School Moments Captured</p>
          <p aria-hidden="true">School Moments Captured</p>
          <p aria-hidden="true">School Moments Captured</p>
        </div>

        <div aria-hidden="true" className="marquee__group">
          <p>School Moments Captured</p>
          <p>School Moments Captured</p>
          <p>School Moments Captured</p>
        </div>
      </div>

      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <Image width={200} height={200} src='/images/photos2/2.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/26.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/17.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/40.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/6.webp' alt='school' />
        </div>

        <div aria-hidden="true" className="marquee__group">
          <Image width={200} height={200} src='/images/photos2/29.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/35.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/33.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/21.webp' alt='school' />
          <Image width={200} height={200} src='/images/photos2/7.webp' alt='school' />
        </div>
      </div>
    </div>
  )
}

export default HomeGallery