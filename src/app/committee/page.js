import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const advisoryCommittee = [
  'Chairman, Central Water Commission',
  'Chairman, Central Groundwater Board',
  'Director, CBRI, Roorkee',
  'Director, CRRI, New Delhi',
  'Director, Indian Council of Agricultural Research',
  'Director, India Meteorology Department',
  'Chairman Ganga Flood Control Commission',
  'Director General, National Water Development Authority',
  'Director, National Institute of Hydrology',
  'Director, Inland Water Authority of India',
  'Engineer-in-Chief, Water Resources Departments',
  'Engineer-in-Chief, Road and Building Division',
];

const additionalCommittees = [
  {
    title: 'Geotechnical Engineering',
    members: [
      'Prof. L. B. Roy',
      'Prof. Pijush Samui',
      'Prof. Sunita Kumari',
      'Dr. Avijit Burman',
      'Dr. Anil Kumar Sharma',
      'Dr. S. S. Choudhary',
      'Dr. Lini Dev K.',
      'Dr. Shiv Shankar Kumar',
    ],
  },
  {
    title: 'Environmental Engineering',
    members: [
      'Prof. Anshuman Singh',
      'Prof. A. R. Quaff',
      'Prof. N. S. Maurya',
      'Dr. Reena Singh',
      'Dr. S. K. Singh',
    ],
  },
  {
    title: 'Alumni and Funding Committee',
    members: [
      'Prof. Sanjeev Sinha',
      'Dr. Sanjeev Kumar Suman',
      'Dr. Sanjay Kumar',
    ],
  },
];

const technicalAdvisoryInternational = [
  'Prof. Nigel Wright, University of Birmingham',
  'Prof. R.D. Tyagi, University of Cubec',
  'Prof. Ramesh Goel, University of Utah',
  'Prof. Gorge S. Constantinescu, University of Iowa',
  'Prof. Alexandre de Barros, University of Calgary',
  'Dr. Dilum Dissanayake, University of Birmingham',
  'Prof. Pallav Kumar, CPUT Capetown',
  'Prof. Subhamoy Bhattacharya, University of Surrey',
  'Dr. Anna Charly, University of Liverpool',
  'Dr. Sebastien Proust, INRAE, Lyon France',
  'Prof. Dr. Vijai K Gupta, Dublin City of University',
  'Dr. Saptarshi Sen, University College Dublin',
  'Dr. Danuta Barnal-Hunek, LUT Poland',
];

const departmentalTechnicalCommittee = [
  {
    title: 'Structural Engineering',
    members: [
      'Prof. Ajay Kumar Sinha',
      'Prof. Baboo Rai',
      'Prof. S. S. Mishra',
      'Dr. Sanjay Kumar',
      'Dr. Gyani Jail Singh',
      'Dr. Govind Mohan',
    ],
  },
  {
    title: 'Water Resources Engineering',
    members: [
      'Prof. L. B. Roy',
      'Prof. Ramakar Jha',
      'Dr. Roshni T',
      'Dr. Gopikrishna T',
      'Dr. Bhabani Shankar Das',
      'Dr. Joseph Tripura',
    ],
  },
  {
    title: 'Transportation Engineering',
    members: [
      'Prof. Sanjeev Sinha',
      'Dr. Sanjeev Kumar Suman',
      'Dr. Ranja Bandhopadhyay',
      'Dr. Satyajit Monda',
    ],
  },
];

const contactDetails = [
  {
    title: 'Chief Patron',
    members: ['Prof. Pradip Kumar Jain', 'Director, National Institute of Technology Patna'],
  },
  {
    title: 'Patron',
    members: ['Prof. Sunita Kumari', 'Head of Department, CED'],
  },
  {
    title: 'Conveners',
    members: ['Prof. N. S. Maurya', 'Prof. Anshuman Singh', 'Prof. Bharat Gupta', 'Dr. S. K. Suman'],
  },
  {
    title: 'Organizing Chairman',
    members: ['Dr. Gyani Jail Singh', 'Dr. Bhabani Shnakar Das', 'Dr. Anil Kumar Sharma', 'Dr. Shiv Shankar Kumar'],
  },
  {
    title: 'Organizing Secretaries',
    members: ['Dr. Joseph Tripura', 'Dr. Satyajit Mondal', 'Dr. Govind Mohan'],
  },
];

export default function Committee() {
  const contactCards = contactDetails;
  const committeeCards = [
    {
      title: 'Advisory Committee',
      subtitle: null,
      members: advisoryCommittee,
    },
    {
      title: 'Technical Advisory Committee',
      subtitle: 'International',
      members: technicalAdvisoryInternational,
    },
    ...departmentalTechnicalCommittee.map((group) => ({
      title: 'Departmental Technical Committee',
      subtitle: group.title,
      members: group.members,
    })),
    ...additionalCommittees.map((group) => ({
      title: group.title,
      subtitle: null,
      members: group.members,
    })),
  ];

  return (
    <>
      <Navbar />

      <section className="committee-cards-section committee-cards-section-top">
        <div className="committee-cards-shell">
          <div className="committee-section-heading">CONTACT DETAILS</div>
          <div className="committee-cards-grid">
            {contactCards.map((card) => (
              <article key={card.title} className="committee-card">
                <h2 className="committee-card-title">{card.title}</h2>
                <ul className="committee-card-list">
                  {card.members.map((member) => (
                    <li key={member} className="committee-card-item">
                      {member}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="committee-cards-section">
        <div className="committee-cards-shell">
          <div className="committee-cards-grid">
            {committeeCards.map((card) => (
              <article key={`${card.title}-${card.subtitle || 'main'}`} className="committee-card">
                <h2 className="committee-card-title">{card.title}</h2>
                {card.subtitle ? <h3 className="committee-card-subtitle">{card.subtitle}</h3> : null}
                <ul className="committee-card-list">
                  {card.members.map((member) => (
                    <li key={member} className="committee-card-item">
                      {member}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
