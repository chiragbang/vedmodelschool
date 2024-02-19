import React from 'react';
import "../styles/HomeGallery.css";
import Image from 'next/image';

const HomeGallery = () => {
  return (
    <>
    <div className='marquee-container'>
      <div className="marquee marquee--borders" style={{ duration: "100s" }}>
        <div className="marquee__group">
          <p>Class 12th Shining Stars</p>
          <p aria-hidden="true">Class 12th Shining Stars</p>
          <p aria-hidden="true">Class 12th Shining Stars</p>
        </div>
        <div aria-hidden="true" className="marquee__group">
          <p>Class 12th Shining Stars</p>
          <p>Class 12th Shining Stars</p>
          <p>Class 12th Shining Stars</p>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__group">

          

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Priyanshi-science-96.6.webp' alt='marks' />
            <h3 className='student-name'>Priyanshi <br /><span>Science</span><br /><span>96.6%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Jiya.webp' alt='marks' />
            <h3 className='student-name'>Jiya <br /><span>Science</span><br /><span>95.6%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Manjeet.webp' alt='marks' />
            <h3 className='student-name'>Manjeet <br /><span>Science</span><br /><span>93.8%</span></h3>
          </div>
          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Piyusha.webp' alt='marks' />
            <h3 className='student-name'>Piyusha <br /><span>Science</span><br /><span>92.4%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Sneha Saini.webp' alt='marks' />
            <h3 className='student-name'>Sneha <br /><span>Science</span><br /><span>92.2%</span></h3>
          </div>

        </div>

        <div aria-hidden="true" className="marquee__group">

           <div className='marks-name'>
            <Image width={200} height={200} src='/images/Nakul.webp' alt='marks' />
            <h3 className='student-name'>Nakul Kumar <br /><span>Science</span><br /><span>90.4%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Khushi.webp' alt='marks' />
            <h3 className='student-name'>Khushi <br /><span>Science</span><br /><span>90%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Sneha pruthi.webp' alt='marks' />
            <h3 className='student-name'>Sneha <br /><span>Science</span><br /><span>88.4%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Muskan sikka.webp' alt='marks' />
            <h3 className='student-name'>Muskan <br /><span>Science</span><br /><span>88%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Vansh.webp' alt='marks' />
            <h3 className='student-name'>Vansh <br /><span>Science</span><br /><span>88%</span></h3>
          </div>
        </div>
      </div>

      <div className="marquee marquee--reverse">
        <div className="marquee__group">

        <div className='marks-name'>
            <Image width={200} height={200} src='/images/Sania.webp' alt='marks' />
            <h3 className='student-name'>Sania <br /><span>Commerce</span><br /><span>96.4%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Anuj.webp' alt='marks' />
            <h3 className='student-name'>Anuj <br /><span>Commerce</span><br /><span>88.6%</span></h3>
          </div>

        <div className='marks-name'>
            <Image width={200} height={200} src='/images/dummy.webp' alt='marks' />
            <h3 className='student-name'>Anjali Singh <br /><span>Commerce</span><br /><span>87.2%</span></h3>
          </div>


          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Vipin.webp' alt='marks' />
            <h3 className='student-name'>Vipin <br /><span>Commerce</span><br /><span>86.6%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Sidharth.webp' alt='marks' />
            <h3 className='student-name'>Siddharth <br /><span>Commerce</span><br /><span>85.2%</span></h3>
          </div>

        </div>

        <div aria-hidden="true" className="marquee__group">

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/dummy.webp' alt='marks' />
            <h3 className='student-name'>Teena <br /><span>Commerce</span><br /><span>84.6%</span></h3>
          </div>

        <div className='marks-name'>
            <Image width={200} height={200} src='/images/Rahul.webp' alt='marks' />
            <h3 className='student-name'>Rahul <br /><span>Commerce</span><br /><span>83.4%</span></h3>
          </div>

         <div className='marks-name'>
            <Image width={200} height={200} src='/images/Tania.webp' alt='marks' />
            <h3 className='student-name'>Tanya <br /><span>Commerce</span><br /><span>83.2%</span></h3>
          </div>

         <div className='marks-name'>
            <Image width={200} height={200} src='/images/dummy.webp' alt='marks' />
            <h3 className='student-name'>Deepika <br /><span>Commerce</span><br /><span>81.2%</span></h3>
          </div>

          <div className='marks-name'>
            <Image width={200} height={200} src='/images/Sania.webp' alt='marks' />
            <h3 className='student-name'>Kartik <br /><span>Commerce</span><br /><span>77.6%</span></h3>
          </div>

        </div>
      </div>
    </div>





<div className='marquee-container'>
<div className="marquee marquee--borders" style={{ duration: "100s" }}>
  <div className="marquee__group">
    <p>Class 10th Shining Stars</p>
    <p aria-hidden="true">Class 10th Shining Stars</p>
    <p aria-hidden="true">Class 10th Shining Stars</p>
  </div>
  <div aria-hidden="true" className="marquee__group">
    <p>Class 10th Shining Stars</p>
    <p>Class 10th Shining Stars</p>
    <p>Class 10th Shining Stars</p>
  </div>
</div>

<div className="marquee">
  <div className="marquee__group">

    

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Priyanshi-science-96.6.webp' alt='marks' />
      <h3 className='student-name'>Priyanshi <br /><span>Science</span><br /><span>96.6%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Jiya.webp' alt='marks' />
      <h3 className='student-name'>Jiya <br /><span>Science</span><br /><span>95.6%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Manjeet.webp' alt='marks' />
      <h3 className='student-name'>Manjeet <br /><span>Science</span><br /><span>93.8%</span></h3>
    </div>
    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Piyusha.webp' alt='marks' />
      <h3 className='student-name'>Piyusha <br /><span>Science</span><br /><span>92.4%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Sneha Saini.webp' alt='marks' />
      <h3 className='student-name'>Sneha <br /><span>Science</span><br /><span>92.2%</span></h3>
    </div>

  </div>

  <div aria-hidden="true" className="marquee__group">

     <div className='marks-name'>
      <Image width={200} height={200} src='/images/Nakul.webp' alt='marks' />
      <h3 className='student-name'>Nakul Kumar <br /><span>Science</span><br /><span>90.4%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Khushi.webp' alt='marks' />
      <h3 className='student-name'>Khushi <br /><span>Science</span><br /><span>90%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Sneha pruthi.webp' alt='marks' />
      <h3 className='student-name'>Sneha <br /><span>Science</span><br /><span>88.4%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Muskan sikka.webp' alt='marks' />
      <h3 className='student-name'>Muskan <br /><span>Science</span><br /><span>88%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Vansh.webp' alt='marks' />
      <h3 className='student-name'>Vansh <br /><span>Science</span><br /><span>88%</span></h3>
    </div>
  </div>
</div>

<div className="marquee marquee--reverse">
  <div className="marquee__group">

  <div className='marks-name'>
      <Image width={200} height={200} src='/images/Sania.webp' alt='marks' />
      <h3 className='student-name'>Sania <br /><span>Commerce</span><br /><span>96.4%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Anuj.webp' alt='marks' />
      <h3 className='student-name'>Anuj <br /><span>Commerce</span><br /><span>88.6%</span></h3>
    </div>

  <div className='marks-name'>
      <Image width={200} height={200} src='/images/dummy.webp' alt='marks' />
      <h3 className='student-name'>Anjali Singh <br /><span>Commerce</span><br /><span>87.2%</span></h3>
    </div>


    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Vipin.webp' alt='marks' />
      <h3 className='student-name'>Vipin <br /><span>Commerce</span><br /><span>86.6%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Sidharth.webp' alt='marks' />
      <h3 className='student-name'>Siddharth <br /><span>Commerce</span><br /><span>85.2%</span></h3>
    </div>

  </div>

  <div aria-hidden="true" className="marquee__group">

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/dummy.webp' alt='marks' />
      <h3 className='student-name'>Teena <br /><span>Commerce</span><br /><span>84.6%</span></h3>
    </div>

  <div className='marks-name'>
      <Image width={200} height={200} src='/images/Rahul.webp' alt='marks' />
      <h3 className='student-name'>Rahul <br /><span>Commerce</span><br /><span>83.4%</span></h3>
    </div>

   <div className='marks-name'>
      <Image width={200} height={200} src='/images/Tania.webp' alt='marks' />
      <h3 className='student-name'>Tanya <br /><span>Commerce</span><br /><span>83.2%</span></h3>
    </div>

   <div className='marks-name'>
      <Image width={200} height={200} src='/images/dummy.webp' alt='marks' />
      <h3 className='student-name'>Deepika <br /><span>Commerce</span><br /><span>81.2%</span></h3>
    </div>

    <div className='marks-name'>
      <Image width={200} height={200} src='/images/Sania.webp' alt='marks' />
      <h3 className='student-name'>Kartik <br /><span>Commerce</span><br /><span>77.6%</span></h3>
    </div>

  </div>
</div>
</div>
</>
  );
};

export default HomeGallery;
