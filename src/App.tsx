import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { SkillsetQuestionnaire } from './components/SkillsetQuestionnaire';
import { UserMatchingPage } from './components/UserMatchingPage';
import { UserSkillsetProfile } from './types';

function AppContent() {
  const { 
    user, 
    isLoading, 
    showSkillsetQuestionnaire, 
    setShowSkillsetQuestionnaire,
    showUserMatching,
    setShowUserMatching
  } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading SkillSync...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  if (showSkillsetQuestionnaire) {
    return (
      <SkillsetQuestionnaire
        onComplete={(profile: UserSkillsetProfile) => {
          setShowSkillsetQuestionnaire(false);
          setShowUserMatching(true);
        }}
        onSkip={() => {
          setShowSkillsetQuestionnaire(false);
          setShowUserMatching(true);
        }}
      />
    );
  }

  if (showUserMatching) {
    return (
      <UserMatchingPage
        onSelectUser={() => {
          setShowUserMatching(false);
        }}
        onBack={() => {
          setShowUserMatching(false);
          setShowSkillsetQuestionnaire(true);
        }}
      />
    );
  }

  return <Dashboard />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;