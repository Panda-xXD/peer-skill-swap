import { SkillsetQuestion } from '../types';

export const skillsetQuestions: SkillsetQuestion[] = [
  {
    id: 'skills-offered',
    question: 'What skills can you teach others? (Select all that apply)',
    type: 'multiple',
    options: [
      'JavaScript/React', 'Python', 'Java', 'Data Science', 'Machine Learning',
      'UI/UX Design', 'Graphic Design', 'Digital Marketing', 'Content Writing',
      'Photography', 'Video Editing', 'Music Production', 'Web Development',
      'Mobile App Development', 'DevOps', 'Cybersecurity', 'Blockchain',
      'Business Strategy', 'Public Speaking', 'Language Learning', 'Flutter',
      'Node.js', 'SQL/Databases', 'Firebase', 'AWS/Cloud', 'Docker'
    ]
  },
  {
    id: 'skills-wanted',
    question: 'What skills do you want to learn? (Select all that apply)',
    type: 'multiple',
    options: [
      'JavaScript/React', 'Python', 'Java', 'Data Science', 'Machine Learning',
      'UI/UX Design', 'Graphic Design', 'Digital Marketing', 'Content Writing',
      'Photography', 'Video Editing', 'Music Production', 'Web Development',
      'Mobile App Development', 'DevOps', 'Cybersecurity', 'Blockchain',
      'Business Strategy', 'Public Speaking', 'Language Learning', 'Flutter',
      'Node.js', 'SQL/Databases', 'Firebase', 'AWS/Cloud', 'Docker'
    ]
  },
  {
    id: 'experience-level',
    question: 'What\'s your overall experience level in your primary skill?',
    type: 'single',
    options: ['Beginner (0-1 years)', 'Intermediate (1-3 years)', 'Advanced (3-5 years)', 'Expert (5+ years)']
  },
  {
    id: 'learning-style',
    question: 'How do you prefer to learn and teach? (Select all that apply)',
    type: 'multiple',
    options: ['Hands-on projects', 'Theory and concepts', 'Video tutorials', 'Live coding sessions', 'Reading documentation', 'Peer discussions', 'Code reviews', 'Pair programming']
  },
  {
    id: 'availability',
    question: 'When are you usually available for skill exchanges?',
    type: 'single',
    options: ['Weekday mornings (9 AM - 12 PM)', 'Weekday evenings (6 PM - 9 PM)', 'Weekend mornings (9 AM - 12 PM)', 'Weekend evenings (6 PM - 9 PM)', 'Flexible timing']
  },
  {
    id: 'goals',
    question: 'What are your primary learning goals? (Select all that apply)',
    type: 'multiple',
    options: ['Career advancement', 'Personal projects', 'Academic requirements', 'Hobby development', 'Startup preparation', 'Freelancing skills', 'Interview preparation', 'Building portfolio']
  },
  {
    id: 'location',
    question: 'Which city are you based in?',
    type: 'single',
    options: ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Other']
  }
];