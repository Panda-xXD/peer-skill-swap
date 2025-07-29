import { User } from '../types';

export const mockIndianUsers: User[] = [
  {
    id: '2',
    username: 'arjun_dev',
    email: 'arjun@example.com',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    level: 8,
    points: 3200,
    streak: 25,
    skillsOffered: [
      {
        id: '1',
        name: 'React Development',
        category: 'Programming',
        level: 'Advanced',
        description: 'Modern React with hooks, context, and performance optimization',
        duration: '45 minutes',
        tags: ['React', 'JavaScript', 'Frontend', 'Hooks']
      },
      {
        id: '2',
        name: 'Node.js Backend',
        category: 'Programming',
        level: 'Intermediate',
        description: 'Building scalable APIs with Express and MongoDB',
        duration: '60 minutes',
        tags: ['Node.js', 'Express', 'MongoDB', 'API']
      }
    ],
    skillsWanted: [
      {
        id: '3',
        name: 'UI/UX Design',
        category: 'Design',
        level: 'Beginner',
        description: 'Design principles and user experience fundamentals',
        duration: '30 minutes',
        tags: ['Figma', 'Design', 'UX', 'Prototyping']
      }
    ],
    badges: [
      {
        id: '1',
        name: 'Code Mentor',
        description: 'Helped 10+ students with programming',
        icon: '👨‍💻',
        rarity: 'rare'
      }
    ],
    completedLessons: 45,
    rating: 4.9,
    joinedAt: new Date('2024-01-15'),
    location: 'Bangalore, India',
    bio: 'Full-stack developer passionate about teaching React and Node.js. Love helping fellow developers grow!',
    isOnline: true,
    matchCompatibility: 92
  },
  {
    id: '3',
    username: 'priya_designer',
    email: 'priya@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    level: 6,
    points: 2100,
    streak: 18,
    skillsOffered: [
      {
        id: '4',
        name: 'UI/UX Design',
        category: 'Design',
        level: 'Advanced',
        description: 'Complete design process from research to prototyping',
        duration: '50 minutes',
        tags: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
      },
      {
        id: '5',
        name: 'Graphic Design',
        category: 'Design',
        level: 'Intermediate',
        description: 'Brand identity and visual communication design',
        duration: '40 minutes',
        tags: ['Photoshop', 'Illustrator', 'Branding', 'Typography']
      }
    ],
    skillsWanted: [
      {
        id: '6',
        name: 'React Development',
        category: 'Programming',
        level: 'Beginner',
        description: 'Frontend development with React basics',
        duration: '45 minutes',
        tags: ['React', 'JavaScript', 'Frontend']
      }
    ],
    badges: [
      {
        id: '2',
        name: 'Design Guru',
        description: 'Created 20+ amazing designs',
        icon: '🎨',
        rarity: 'epic'
      }
    ],
    completedLessons: 32,
    rating: 4.8,
    joinedAt: new Date('2024-02-01'),
    location: 'Mumbai, India',
    bio: 'UX Designer with 3+ years experience. Love creating beautiful and functional user experiences!',
    isOnline: true,
    matchCompatibility: 95
  },
  {
    id: '4',
    username: 'rohit_data',
    email: 'rohit@example.com',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    level: 7,
    points: 2800,
    streak: 22,
    skillsOffered: [
      {
        id: '7',
        name: 'Python Data Science',
        category: 'Data Science',
        level: 'Advanced',
        description: 'Data analysis, visualization, and machine learning with Python',
        duration: '60 minutes',
        tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib']
      },
      {
        id: '8',
        name: 'SQL & Databases',
        category: 'Data Science',
        level: 'Intermediate',
        description: 'Database design and complex query optimization',
        duration: '45 minutes',
        tags: ['SQL', 'PostgreSQL', 'MySQL', 'Database Design']
      }
    ],
    skillsWanted: [
      {
        id: '9',
        name: 'Machine Learning Deployment',
        category: 'DevOps',
        level: 'Intermediate',
        description: 'Deploying ML models to production environments',
        duration: '50 minutes',
        tags: ['Docker', 'AWS', 'MLOps', 'Deployment']
      }
    ],
    badges: [
      {
        id: '3',
        name: 'Data Wizard',
        description: 'Mastered data analysis techniques',
        icon: '📊',
        rarity: 'rare'
      }
    ],
    completedLessons: 38,
    rating: 4.7,
    joinedAt: new Date('2024-01-20'),
    location: 'Hyderabad, India',
    bio: 'Data Scientist helping businesses make data-driven decisions. Always eager to learn new technologies!',
    isOnline: false,
    matchCompatibility: 78
  },
  {
    id: '5',
    username: 'sneha_mobile',
    email: 'sneha@example.com',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    level: 5,
    points: 1850,
    streak: 15,
    skillsOffered: [
      {
        id: '10',
        name: 'Flutter Development',
        category: 'Mobile Development',
        level: 'Intermediate',
        description: 'Cross-platform mobile app development with Flutter',
        duration: '55 minutes',
        tags: ['Flutter', 'Dart', 'Mobile', 'Cross-platform']
      },
      {
        id: '11',
        name: 'Firebase Integration',
        category: 'Backend',
        level: 'Beginner',
        description: 'Backend services and real-time databases with Firebase',
        duration: '35 minutes',
        tags: ['Firebase', 'NoSQL', 'Authentication', 'Cloud Functions']
      }
    ],
    skillsWanted: [
      {
        id: '12',
        name: 'iOS Development',
        category: 'Mobile Development',
        level: 'Beginner',
        description: 'Native iOS app development with Swift',
        duration: '60 minutes',
        tags: ['Swift', 'iOS', 'Xcode', 'UIKit']
      }
    ],
    badges: [
      {
        id: '4',
        name: 'Mobile Master',
        description: 'Built 5+ mobile applications',
        icon: '📱',
        rarity: 'common'
      }
    ],
    completedLessons: 28,
    rating: 4.6,
    joinedAt: new Date('2024-02-10'),
    location: 'Pune, India',
    bio: 'Mobile app developer specializing in Flutter. Love building apps that solve real-world problems!',
    isOnline: true,
    matchCompatibility: 85
  }
];