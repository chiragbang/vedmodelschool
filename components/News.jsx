import React from 'react'
import "../styles/News.css"
import Image from 'next/image'
import Link from 'next/link';

const News = () => {
  const lineStyle = {
    maxWidth: '104px',
    minWidth: '45px',
    width: '100%',
    textAlign: 'left',
    marginLeft: 0,
    border: '1px solid #000',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', position: 'relative', marginTop: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'center' }}>
        <hr style={lineStyle} />
        <h1 className='section__heading' style={{ fontSize: '32px' }}>Recent News</h1>
        <hr style={lineStyle} />
      </div>
      <div className="news-card-container">

        <Link href="/results" style={{ color: "black" }}>
          <div className="card">

            <div className="card-header">
              <Image width={200} height={200} src="/images/school.webp" alt='event' />

            </div>
            <div className="card-body">
              <span className="tag tag-teal">Results</span>
              <h4>
                VMTT 2024 Results is being declared on 15 February 2024.
              </h4>
              <p>

                Results for Ved Model School are now available! Students, check your performance and celebrate your achievements. Parents, join us in applauding the hard work of our students. Congratulations to all!
              </p>

            </div>
          </div>
        </Link>
        <div className="card">
          <div className="card-header">
            <Image width={200} height={200} src="/images/photos2/9.webp" alt='event' />

          </div>
          <div className="card-body">
            <span className="tag tag-purple">Activities</span>
            <h4>
              Join us to participate, learn, and have fun at our exciting upcoming school events!
            </h4>
            <p>
              Dive into a world of fun and learning! Join the adventure at Ved Model Sr. Sec. School and make every moment memorable.
            </p>

          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <Image width={200} height={200} src="/images/photos2/38.webp" alt='event' />

          </div>
          <div className="card-body">
            <span className="tag tag-teal">News</span>
            <h4>
              Brace yourselves for the latest scoop in our school news: where knowledge meets headlines!
            </h4>
            <p>
              Stay informed and inspired with our school news bulletin, delivering the latest happenings, achievements, and insights from campus life straight to your fingertips.
            </p>

          </div>
        </div>
        <Link href="/farewell" style={{ color: "black" }}>
          <div className="card">
            <div className="card-header">
              <Image width={200} height={200} src="/images/Farewell/20.webp" alt='event' />

            </div>
            <div className="card-body">
              <span className="tag tag-teal">Farewell 2024</span>
              <h4>
                Farewell Memories: Ved Model School Bids Adieu in Style!
              </h4>
              <p>
                School farewells encapsulate a mix of emotions—a poignant goodbye to the familiar halls, echoing laughter, and cherished memories, while also heralding a warm welcome to new beginnings.
              </p>

            </div>
          </div>
        </Link>



      </div>
    </div>

  )
}

export default News