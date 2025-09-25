// pages/team.tsx
import TeamMemberCard from '@/components/TeamMemberCard';

const teamMembers = [
    {
        teamName: 'Co-Chairs',
        members: [
            {
                name: 'Flaminia Testa',
                role: 'Co-Chair',
                imageUrl: '/image/Flaminia_Testa_Headshot_2025.jpg',
                linkedInUrl: 'https://www.linkedin.com/in/flaminia-testa/',
            },
            {
                name: 'Jaden Belliveau',
                role: 'Co-Chair',
                imageUrl: '/image/Jaden_Belliveau_Headshot_2025.jpeg',
                linkedInUrl: 'https://www.linkedin.com/in/jaden-belliveau-044062230/',
            },
        ],
    },
    {
        teamName: 'Logistics Team',
        members: [
            {
                name: 'Bronwyn Faulkner',
                role: 'Logistics Director',
                imageUrl: '/image/Bronwyn_Faulkner_Headshot_2025.jpg',
                linkedInUrl: 'https://www.linkedin.com/in/bronwyn-faulkner/',
            },
            // {
            //     name: 'Greyson Martyn',
            //     role: 'Logistics Coordinator',
            //     imageUrl: '/image/pfp.png',
            //     linkedInUrl: '#',

            // },
            {
                name: 'Sachin Khandelwal',
                role: 'Logistics Coordinator',
                imageUrl: '/image/Sachin_Khandelwal_Headshot_2025.jpg',
                linkedInUrl: 'https://www.linkedin.com/in/sachin-khandelwal-272667305/',

            },
            {
                name: 'Elizabeth Cox',
                role: 'Logistics Coordinator',
                imageUrl: '/image/Elizabeth_Cox_Headshot_2025.jpg',
                linkedInUrl: 'https://www.linkedin.com/in/elizabeth-cox-4a5250335/',

            },

        ],
    },
    // ...more groups
    {
        teamName: 'Relationships Team',
        members: [
          {
            name: 'Abbie Houlding',
            role: 'Relationships Director',
            imageUrl: '/image/Abbie_Houlding_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/abigail-houlding-braunberger-b74b00226/',
          },
          {
            name: 'Abby Rath',
            role: 'Relationships Coordinator',
            imageUrl: '/image/Abby_Rath_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/abby-rath-5b76a8340/',
          },
        ],
    },

    {
        teamName: 'Sponsorships Team',
        members: [
          {
            name: 'Noah Del Rizzo',
            role: 'Sponsorship Director',
            imageUrl: '/image/Noah_Del_Rizzo_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/noah-del-rizzo-7b3b4b2a7/',
          },

          {
            name: 'Luke Page',
            role: 'Sponsorship Coordinator',
            imageUrl: '/image/pfp.png',
            linkedInUrl: 'https://www.linkedin.com/in/luke-page-564b432b0/',
          },



        ],
    },

    {
        teamName: 'Communications Team',
        members: [
          {
            name: 'Grace Franklin',
            role: 'Communications Director',
            imageUrl: '/image/Grace_Franklin_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/grace-franklin-077aa3323/',
          },
          {
            name: 'Lauren Colaiacovo',
            role: 'Communications Coordinator',
            imageUrl: '/image/Lauren_Colaiacovo_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/lauren-colaiacovo-b9a9932ab/',
          },

          {
            name: 'Sydney Sharpe',
            role: 'Communications Coordinator',
            imageUrl: '/image/Sydney_Sharpe_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/sydney-sharpe-275879327/',
          },

          {
            name: 'Johnnie Tse',
            role: 'Webmaster',
            imageUrl: '/image/Johnnie_Tse_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/johnnie-tse/',
          },



        ],
    },


    {
        teamName: 'Finance Team',
        members: [
          {
            name: 'Grace Smerchinski',
            role: 'Finance Director',
            imageUrl: '/image/Grace_Smerchinski_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/grace-smerchinski-4688b3252/',
          },
        ],
    },

    {
        teamName: 'EDII Team',
        members: [
          {
            name: 'Kalena McCloskey',
            role: 'EDII Director',
            imageUrl: '/image/Kalena_McCloskey_Headshot_2025.jpg',
            linkedInUrl: 'https://www.linkedin.com/in/kalenamccloskey/',
          },
        ],
    },


    

];

  
export default function Team() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>Meet Our Team</h1>
        {teamMembers.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">{section.teamName}</h2>
            <div className="flex justify-center">
              <div
                className={`flex flex-wrap justify-center gap-8 ${
                  section.members.length === 1
                    ? 'grid-cols-1'
                    : section.members.length === 2
                    ? 'grid-cols-2'
                    : 'md:grid-cols-3'
                }`}
              >
                {section.members.map((member, idx) => (
                  <TeamMemberCard key={idx} {...member} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    <br>
    </br>
}
  
