import React from 'react'
import '../styles/Facilities.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';


const vision = () => {
  const navLinks = [
    { label: 'Home', url: '/' },
    // { label: 'Home', url: '/results' },
    {
      label: 'About Us',
      url: '#',
      dropdownLinks: [
        { label: 'Our Vision', url: '/vision' },
        { label: 'Our Mission', url: '/mission' },
        { label: 'Director Message', url: '/director' },
        { label: 'Principal Message', url: '/principal' },
        { label: 'Administrator Message', url: '/administrator' },
        { label: 'School Introduction', url: '/introduction' },
        { label: 'Instructions', url: '/instructions' },
        { label: 'International Outreach Programme', url: '/iop' },

      ],
    },
    {
      label: 'Academics',
      url: '#',
      dropdownLinks: [
        { label: 'Academic Achievement', url: '/achievements' },
        { label: 'Examinations', url: '/exams' },
        { label: 'Leave Rules', url: '/leaves' },
        { label: 'Parent Teachers Meet', url: '/ptm' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Admission',
      url: '#',
      dropdownLinks: [
        { label: 'Admission Rules', url: '/rules' },
        { label: 'Admission Criteria', url: '/criteria' },
        { label: 'Admission Procedure', url: '/procedure' },
        { label: 'Modernization in Education', url: '/modernization' },
        { label: 'News/Event', url: '/events' },
        { label: 'School Uniform', url: '/uniform' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Art & Culture',
      url: '#',
      dropdownLinks: [
        { label: 'Dance & Music', url: '/dance-music' },
        { label: 'Activities', url: '/activities' },
        { label: 'Painting', url: '/painting' },
        { label: 'Robotics', url: '/robotics' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'CBSE Corner',
      url: '#',
      dropdownLinks: [
        { label: 'CBSE Corner', url: '/cbse' },
        { label: 'Mandatory Public Disclosure', url: 'https://drive.google.com/file/d/1XAFJIJAK6SGSU3AL3taXYINm7Z5LKxvO/view' },
        { label: 'SLC Download', url: '/slc' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Contact Us',
      url: '#',
      dropdownLinks: [
        { label: 'Enquiry', url: '/enquiry' },
        { label: 'Reach Us', url: '/reach' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Gallery',
      url: '#',
      dropdownLinks: [
        { label: 'Video Gallery', url: '/video' },
        { label: 'Photo Gallery', url: '/gallery' },
        // Add more dropdown links as needed
      ],
    },
    { label: 'Careers', url: '/careers' },
    { label: 'Facilities', url: '/facilities' },
  ];
  return (
    <>
      <div className='header-vision'>
        <Header navLinks={navLinks} />
      </div>

      <div className='facilities-container'>
        <h1>Facilities at <span>VED MODEL</span></h1>

        <p>The school campus offers a learner-friendly environment with a fine blend of functionality and aesthetics. From its firm foundation, the school building soars to an eight-storeyed vertical structure, symbolising an educational setting that enables students to rise to greater heights. CCTV surveillance system, wide corridors and stairwells, fire prevention system, and deployment of security personnel are among the several safety and security measures taken by the School to ensure a safe campus environment. All facilities in the school are IT-enabled, with a provision for broadband connectivity and conducting virtual/hybrid classes.</p>
      </div>


      {/* FACILITY 1 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <h2>Classrooms</h2>
          <p>The spacious and wellventilated classrooms with natural light provide a conducive environment for learning. Every classroom has audio-visual facilities including live streaming of classroom teaching, a public address system, display boards, lockers for students, and ergonomically designed age-appropriate furniture.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/images/class.webp" width={500} height={500} alt='class' priority={true} className='facility-img' />
        </div>
      </div>

      {/* FACILITY 2 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/images/achievement1.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Science Laboratories</h2>
          <p>The school has spacious, well-equipped Physics, Chemistry, Biology and General Science Laboratories. Models, Specimens, Displays, Charts, Learning Kits, Audio -Visual Equipment, etc. help teachers demonstrate, validate and establish various scientific principles, and facilitate children verify theories, and relate to fundamental principles and concepts.</p>
        </div>
      </div>



      {/* FACILITY 3 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <h2>Mathematics Laboratory</h2>
          <p>The Mathematics Laboratory has a variety of concept-specific learning kits, manipulatives, 3D models, charts, games, puzzles, patterns, etc., to initiate children into logical thinking, reasoning, analysing and inferring; thus building concepts from abstract to concrete. The use of these resources to teach mathematics helps children to relate patterns, discover properties and internalise concepts.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/images/math.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
      </div>

      {/* FACILITY 4 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Computer Laboratories</h2>
          <p>The school has two air-conditioned Computer Laboratories with high-speed broadband connectivity and audio-visual facilities. All computers have the required configuration and software to support children&apos;s learning and the effective delivery of the curriculum. The computer labs provide an individual workstation for every child.</p>
        </div>
      </div>

      {/* FACILITY 5 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <h2>Libraries</h2>
          <p>Well-resourced, aesthetically designed Primary School Library and Senior School Library are air-conditioned facilities with colourful, age-appropriate furniture that creates an inviting ambience for the young readers. These libraries have dedicated highspeed internet browsing facilities for the students to access various online resources. A dedicated story-telling corner in the Primary Library makes it a special place for the students.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/images/library.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
      </div>



      {/* FACILITY 6 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/images/music.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>

        <div className='facilities-grid-item'>
          <h2>Music Room and Dance Studio</h2>
          <p>The Music Room has a variety of musical instruments to learn Western Music and Indian Music - both instrumental and vocal. The Dance Studio provides a smooth performance space that facilitates students to explore various dance forms including classical, western, contemporary, and folk.</p>
        </div>
      </div>

      {/* FACILITY 7 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <h2>Art Room</h2>
          <p>The Art Room is a spacious facility, with a dedicated workshop space, designed to spark the imagination of young students and motivate them to use various mediums and shape their creativity through different forms of art like paper art, Warli and Madhubani art, craft, clay moulding, wood carving, metal embossing, mural making by recycling waste, sketching and drawing, and painting on glass, fabric, canvas, earthenware, wood, bamboo and other surfaces.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/images/art.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
      </div>

      {/* FACILITY 8 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/images/Activity.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Activity Room</h2>
          <p>Two theme-based Activity Rooms with educational toys, equipment, learning resources and audiovisual facility help pre-primary students develop gross and fine motor skills through various activities like role play, storytelling, picture talk, coding activities, etc. Students also learn concepts through various themeoriented puppet shows.</p>
        </div>
      </div>

      {/* FACILITY 9 */}
      <div className='facilities-grid'>

        <div className='facilities-grid-item'>
          <h2>Counselling Centre</h2>
          <p>The school has a dedicated Counselling Centre to provide personal and group counselling to children. The Centre serves as a space for students to discuss their academic, social, emotional and behavioural concerns related to adolescence and peer group dynamics. The facility is also used for providing college and career counselling.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
      </div>

      {/* FACILITY 10 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/images/Atrium.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Atrium</h2>
          <p>The Atrium is an expansive space, serving as a venue for school assemblies, exhibitions, events and celebrations, performances, indoor games, and various cocurricular activities.</p>
        </div>
      </div>

      {/* FACILITY 10 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <h2>Multipurpose Hall</h2>
          <p>The Multipurpose Hall is used for organising various activities such as guest lectures and panel discussions, debates and elocutions, quizzes and recitations, workshops and presentations, meetings and orientation programmes, etc.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
      </div>

      {/* FACILITY 11 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/images/playarea.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Outdoor Play Areas</h2>
          <p>The Pre-Primary section and Primary section have their exclusive outdoor play areas, with age appropriate, and colourful play equipment, which facilitates the development of motor skills in students.</p>
        </div>
      </div>

      {/* FACILITY 12 */}
      <div className='facilities-grid'>

        <div className='facilities-grid-item'>
          <h2>Sports Facilities</h2>
          <p>The school has a well-laid, lush green playground, a multipurpose court. These facilities are used for providing coaching to students in various sports and games such as football, athletics, basketball, badminton, indoor games like table tennis, chess, carrom, etc. Apart from organising regular Physical Education classes, these facilities are used for providing specialised coaching to students in various sports and games.</p>
        </div>
        <div className='facilities-grid-item'>
          <Image src="/images/sports.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
      </div>



      {/* FACILITY 13 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Medical Room</h2>
          <p>The Medical Room is a well-equipped facility to provide first aid and attend to any medical emergencies. The students reporting ill are attended by qualified and experienced nursing staff and a visiting doctor.</p>
        </div>
      </div>

      {/* FACILITY 14 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/images/transport.webp" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>School Transport</h2>
          <p>The school has a well-maintained, dedicated fleet of buses with the required safety measures that include CCTV surveillance, first aid kit, fire extinguishers, seat belts, and communication facility. The bus crew, including bus hostesses, undergo regular training programmes on road safety, safe driving, student safety, first aid, health and hygiene, punctuality, communication skills, etc.</p>
        </div>
      </div>

      {/* FACILITY 15 */}
      <div className='facilities-grid'>
        <div className='facilities-grid-item'>
          <Image src="/" width={500} height={200} alt='class' priority={true} className='facility-img' />
        </div>
        <div className='facilities-grid-item'>
          <h2>Day Boarding</h2>
          <p>To assist the students in their homework, the school offers optional Day Boarding facility. </p>
        </div>

      </div>

      <div className='footer-vision'>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default vision
