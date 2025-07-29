import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserSkillsetProfile } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (username: string, email: string, password: string, skillsetProfile?: UserSkillsetProfile) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  showSkillsetQuestionnaire: boolean;
  setShowSkillsetQuestionnaire: (show: boolean) => void;
  showUserMatching: boolean;
  setShowUserMatching: (show: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUser: User = {
  id: '1',
  username: 'codewiz',
  email: 'user@example.com',
  avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  level: 5,
  points: 2450,
  streak: 12,
  skillsOffered: [],
  skillsWanted: [],
  badges: [],
  completedLessons: 23,
  rating: 4.8,
  joinedAt: new Date('2024-01-15')
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSkillsetQuestionnaire, setShowSkillsetQuestionnaire] = useState(false);
  const [showUserMatching, setShowUserMatching] = useState(false);

  useEffect(() => {
    // Check for stored auth
    const storedUser = localStorage.getItem('skillsync_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'demo@skillsync.com' && password === 'demo123') {
      setUser(mockUser);
      localStorage.setItem('skillsync_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (username: string, email: string, password: string, skillsetProfile?: UserSkillsetProfile): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      ...mockUser,
      id: Date.now().toString(),
      username,
      email,
      level: 1,
      points: 0,
      streak: 0,
      completedLessons: 0,
      joinedAt: new Date()
    };
    
    if (skillsetProfile) {
      setUser(newUser);
      localStorage.setItem('skillsync_user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    } else {
      // Show skillset questionnaire for new users
      setUser(newUser);
      localStorage.setItem('skillsync_user', JSON.stringify(newUser));
      setShowSkillsetQuestionnaire(true);
      setIsLoading(false);
      return true;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillsync_user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      signup, 
      logout, 
      isLoading, 
      showSkillsetQuestionnaire, 
      setShowSkillsetQuestionnaire,
      showUserMatching,
      setShowUserMatching
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}