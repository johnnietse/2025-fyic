// components/TeamMemberCard.tsx
import { FC } from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  pronouns?: string;
  role: string;
  imageUrl: string;
  linkedInUrl?: string;
}

const TeamMemberCard: FC<TeamMemberProps> = ({ name, pronouns, role, imageUrl, linkedInUrl }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 w-64 md:w-72">
      {/* <img src={imageUrl} alt={name} className="w-48 h-48 object-cover rounded-lg mb-6" /> */}
      
      {/* <img src={imageUrl} alt={name} className="w-48 h-auto max-h-72 rounded-lg mb-6" /> */}
      <div className="h-48 w-full flex items-center justify-center mb-6">
        <img 
          src={imageUrl} 
          alt={name} 
          className="max-h-48 object-contain rounded-lg"
        />
      </div>

      <h3 className="font-bold text-lg mb-1">
        {name} {pronouns && <span className="text-gray-500 text-sm">({pronouns})</span>}
      </h3>
      <p className="text-sm text-gray-600 mb-3">{role}</p>
      {linkedInUrl && (
        // <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        <a href={linkedInUrl} className="text-blue-600 hover:text-blue-800">
          <Linkedin size={24} />
        </a>
      )}
    </div>
  );
};

export default TeamMemberCard;
