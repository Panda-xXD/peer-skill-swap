export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  level: number;
  points: number;
  streak: number;
  skillsOffered: Skill[];
  skillsWanted: Skill[];
  badges: Badge[];
  completedLessons: number;
  rating: number;
  joinedAt: Date;
  location?: string;
  bio?: string;
  isOnline?: boolean;
  matchCompatibility?: number;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  duration: string;
  tags: string[];
}

export interface SkillPost {
  id: string;
  userId: string;
  user: User;
  skillOffered: Skill;
  skillWanted: Skill;
  description: string;
  status: 'open' | 'matched' | 'completed';
  createdAt: Date;
  likes: number;
  comments: Comment[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedAt?: Date;
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  content: string;
  createdAt: Date;
}

export interface Match {
  id: string;
  users: [User, User];
  skills: [Skill, Skill];
  status: 'pending' | 'accepted' | 'in-progress' | 'completed';
  scheduledAt?: Date;
  createdAt: Date;
}

export interface SkillsetQuestion {
  id: string;
  question: string;
  type: 'multiple' | 'single' | 'level';
  options: string[];
}

export interface UserSkillsetProfile {
  skillsOffered: string[];
  skillsWanted: string[];
  experienceLevels: Record<string, string>;
  interests: string[];
  availability: string;
}