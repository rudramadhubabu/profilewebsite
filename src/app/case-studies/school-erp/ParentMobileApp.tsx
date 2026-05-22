import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home, GraduationCap, Calendar, MessageSquare, Bell, User,
  ChevronRight, Clock, BookOpen, TrendingUp, CheckCircle,
  Send, Paperclip, ChevronLeft, BarChart3, Award, AlertCircle,
  Target, Brain, IndianRupee, FileText, School, Phone, Mail,
  TrendingDown, ChevronDown, Mic, XCircle, AlertTriangle, Download,
  Search
} from 'lucide-react';

export function ParentMobileApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState<any>({ type: 'home' });

  const bottomNavItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'academics', icon: GraduationCap, label: 'Academics' },
    { id: 'attendance', icon: Calendar, label: 'Attendance' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' }
  ];

  const handleNavigation = (screen: any) => {
    setCurrentScreen(screen);
    if (screen.tab) {
      setActiveTab(screen.tab);
    }
  };

  // Determine if bottom navigation should be shown
  const mainTabScreens = ['home', 'academics', 'attendance', 'messages'];
  const showBottomNav = mainTabScreens.includes(currentScreen.type);

  return (
    <div className="relative" style={{ width: '360px', height: '800px' }}>
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl p-3">
        <div className="relative w-full h-full rounded-[32px] bg-white overflow-hidden">
          {/* Android Status Bar */}
          <div className="h-6 bg-purple-600 flex items-center justify-between px-5 text-white" style={{ fontSize: '11px', fontWeight: 500 }}>
            <div>9:41</div>
            <div className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="4" width="3" height="8" fill="currentColor" opacity="0.4"/>
                <rect x="6" y="2" width="3" height="10" fill="currentColor" opacity="0.6"/>
                <rect x="11" y="0" width="3" height="12" fill="currentColor"/>
              </svg>
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M14 5h1a2 2 0 012 2v6a2 2 0 01-2 2h-1M14 5V4a2 2 0 00-2-2h-1M14 5v8M3 5H2a2 2 0 00-2 2v6a2 2 0 002 2h1M3 5V4a2 2 0 012-2h1M3 5v8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <rect x="11" y="6" width="4" height="6" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* App Content */}
          <div className="h-full flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
            {/* Top App Bar */}
            <ParentTopAppBar currentScreen={currentScreen} onNavigate={handleNavigation} />

            {/* Screen Content */}
            <div className="flex-1 overflow-y-auto" style={{ paddingBottom: showBottomNav ? '56px' : '0' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen.type}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {currentScreen.type === 'home' && <ParentHomeScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'academics' && <AcademicsScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'homework' && <HomeworkScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'homeworkDetail' && <HomeworkDetailScreen data={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'fees' && <FeesScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'paymentSuccess' && <PaymentSuccessScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'announcements' && <SchoolAnnouncementsScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'announcementDetail' && <AnnouncementDetailScreen data={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'attendance' && <AttendanceTrackingScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'messages' && <TeacherMessagesScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'chat' && <ParentChatScreen teacherData={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'aiInsights' && <AILearningInsightsScreen onNavigate={handleNavigation} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Navigation - Only show on main tab screens */}
            {showBottomNav && (
              <ParentBottomNavigation items={bottomNavItems} activeTab={activeTab} onTabChange={(tab) => {
                setActiveTab(tab);
                setCurrentScreen({ type: tab, tab });
              }} />
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
    </div>
  );
}

/* ==================== TOP APP BAR ==================== */
function ParentTopAppBar({ currentScreen, onNavigate }: any) {
  const getTitleAndActions = () => {
    switch (currentScreen.type) {
      case 'home':
        return { title: 'My Child', showBack: false, actions: true };
      case 'academics':
        return { title: 'Academic Performance', showBack: false, actions: true };
      case 'homework':
        return { title: 'Homework', showBack: false, actions: true };
      case 'homeworkDetail':
        return { title: 'Assignment Details', showBack: true, actions: false };
      case 'fees':
        return { title: 'Fee Payments', showBack: true, actions: false };
      case 'paymentSuccess':
        return { title: 'Payment', showBack: false, actions: false };
      case 'announcements':
        return { title: 'School Announcements', showBack: true, actions: false };
      case 'announcementDetail':
        return { title: 'Announcement', showBack: true, actions: false };
      case 'attendance':
        return { title: 'Attendance', showBack: false, actions: true };
      case 'messages':
        return { title: 'Messages', showBack: false, actions: true };
      case 'chat':
        return { title: currentScreen.data?.teacher || 'Chat', showBack: true, actions: false };
      case 'aiInsights':
        return { title: 'AI Learning Insights', showBack: true, actions: false };
      default:
        return { title: 'My Child', showBack: false, actions: true };
    }
  };

  const config = getTitleAndActions();

  return (
    <div 
      className="bg-purple-600 text-white flex items-center justify-between" 
      style={{ 
        height: '56px',
        paddingLeft: config.showBack ? '8px' : '16px',
        paddingRight: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <div className="flex items-center gap-2 flex-1">
        {config.showBack && (
          <button 
            onClick={() => onNavigate({ type: currentScreen.tab || 'home', tab: currentScreen.tab || 'home' })}
            className="w-12 h-12 flex items-center justify-center -ml-2"
          >
            <ChevronLeft style={{ width: '24px', height: '24px' }} />
          </button>
        )}
        <div style={{ fontSize: '20px', fontWeight: 500, lineHeight: '24px' }}>
          {config.title}
        </div>
      </div>
      {config.actions && (
        <div className="flex items-center gap-2">
          <button className="w-12 h-12 flex items-center justify-center">
            <Bell style={{ width: '24px', height: '24px' }} />
          </button>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <User style={{ width: '20px', height: '20px' }} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ==================== BOTTOM NAVIGATION ==================== */
function ParentBottomNavigation({ items, activeTab, onTabChange }: any) {
  return (
    <div 
      className="absolute bottom-0 left-0 right-0 bg-white flex items-center justify-around border-t"
      style={{ 
        height: '56px',
        borderTopColor: '#E0E0E0',
        boxShadow: '0 -1px 3px rgba(0,0,0,0.05)'
      }}
    >
      {items.map((item: any) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className="flex flex-col items-center justify-center transition-all"
            style={{ 
              width: '80px',
              height: '56px',
              color: isActive ? '#9333EA' : '#757575'
            }}
          >
            <Icon style={{ width: '24px', height: '24px', marginBottom: '2px' }} />
            <div style={{ 
              fontSize: '12px', 
              fontWeight: isActive ? 600 : 400,
              lineHeight: '16px'
            }}>
              {item.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ==================== SCREEN 1: PARENT HOME DASHBOARD ==================== */
function ParentHomeScreen({ onNavigate }: any) {
  return (
    <div className="p-4 space-y-6">
      {/* Child Profile Card */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div className="flex items-center gap-4">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#EDE9FE', color: '#9333EA', fontSize: '28px', fontWeight: 600 }}
          >
            AS
          </div>
          <div className="flex-1">
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
              Ananya Sharma
            </div>
            <div style={{ fontSize: '14px', color: '#757575', marginBottom: '2px' }}>
              Class 8A
            </div>
            <div className="flex items-center gap-1">
              <School style={{ width: '14px', height: '14px', color: '#9E9E9E' }} />
              <span style={{ fontSize: '13px', color: '#757575' }}>Delhi Public School</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Attendance */}
        <button
          onClick={() => onNavigate({ type: 'attendance', tab: 'attendance' })}
          className="bg-white rounded-lg p-4 text-left"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
        >
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
            Attendance
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#10B981' }}>
            94%
          </div>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp style={{ width: '14px', height: '14px', color: '#10B981' }} />
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>Good</span>
          </div>
        </button>

        {/* Latest Exam */}
        <button
          onClick={() => onNavigate({ type: 'academics', tab: 'academics' })}
          className="bg-white rounded-lg p-4 text-left"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
        >
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
            Math Test
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#2563EB' }}>
            82%
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Award style={{ width: '14px', height: '14px', color: '#F59E0B' }} />
            <span style={{ fontSize: '12px', color: '#757575', fontWeight: 600 }}>B Grade</span>
          </div>
        </button>

        {/* Upcoming Assignments */}
        <button
          onClick={() => onNavigate({ type: 'homework', tab: 'academics' })}
          className="bg-white rounded-lg p-4 text-left"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
        >
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
            Assignments
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#F59E0B' }}>
            3
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Clock style={{ width: '14px', height: '14px', color: '#F59E0B' }} />
            <span style={{ fontSize: '12px', color: '#F59E0B', fontWeight: 600 }}>Pending</span>
          </div>
        </button>

        {/* Announcements */}
        <button
          onClick={() => onNavigate({ type: 'announcements' })}
          className="bg-white rounded-lg p-4 text-left"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
        >
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
            Announcements
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#9333EA' }}>
            2
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Bell style={{ width: '14px', height: '14px', color: '#9333EA' }} />
            <span style={{ fontSize: '12px', color: '#9333EA', fontWeight: 600 }}>New</span>
          </div>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Quick Actions
        </div>
        <div className="space-y-2">
          <button 
            onClick={() => onNavigate({ type: 'fees' })}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <DollarSign style={{ width: '20px', height: '20px', color: '#10B981' }} />
              <span style={{ fontSize: '14px', color: '#212121' }}>Pay School Fees</span>
            </div>
            <ChevronRight style={{ width: '20px', height: '20px', color: '#9E9E9E' }} />
          </button>
          <button 
            onClick={() => onNavigate({ type: 'aiInsights' })}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Brain style={{ width: '20px', height: '20px', color: '#9333EA' }} />
              <span style={{ fontSize: '14px', color: '#212121' }}>AI Learning Insights</span>
            </div>
            <ChevronRight style={{ width: '20px', height: '20px', color: '#9E9E9E' }} />
          </button>
          <button 
            onClick={() => onNavigate({ type: 'messages', tab: 'messages' })}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <MessageSquare style={{ width: '20px', height: '20px', color: '#2563EB' }} />
              <span style={{ fontSize: '14px', color: '#212121' }}>Message Teachers</span>
            </div>
            <ChevronRight style={{ width: '20px', height: '20px', color: '#9E9E9E' }} />
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Recent Activity
        </div>
        <div className="space-y-3">
          {[
            { title: 'Science homework submitted', time: '2 hours ago', icon: CheckCircle, color: '#10B981' },
            { title: 'Math test graded: 82%', time: 'Yesterday', icon: Award, color: '#2563EB' },
            { title: 'Parent-Teacher meeting scheduled', time: '2 days ago', icon: Calendar, color: '#F59E0B' }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <Icon style={{ width: '20px', height: '20px', color: item.color }} />
                <div className="flex-1">
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#212121' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#757575' }}>{item.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ==================== SCREEN 2: ATTENDANCE TRACKING ==================== */
function AttendanceTrackingScreen({ onNavigate }: any) {
  const [currentMonth] = useState('March 2026');
  
  // Calendar data (1-31 days)
  const calendarData = [
    { day: 1, status: 'present' }, { day: 2, status: 'present' }, { day: 3, status: 'present' },
    { day: 4, status: 'late' }, { day: 5, status: 'present' }, { day: 6, status: null }, { day: 7, status: null },
    { day: 8, status: 'present' }, { day: 9, status: 'present' }, { day: 10, status: 'absent' },
    { day: 11, status: 'present' }, { day: 12, status: 'present' }, { day: 13, status: null }, { day: 14, status: null },
    { day: 15, status: 'present' }, { day: 16, status: 'present' }, { day: 17, status: 'present' },
    { day: 18, status: 'late' }, { day: 19, status: 'present' }, { day: 20, status: null }, { day: 21, status: null },
    { day: 22, status: 'present' }, { day: 23, status: 'present' }, { day: 24, status: 'present' },
    { day: 25, status: 'present' }, { day: 26, status: 'present' }, { day: 27, status: null }, { day: 28, status: null },
    { day: 29, status: 'present' }, { day: 30, status: 'present' }, { day: 31, status: 'present' }
  ];

  const getStatusColor = (status: string | null) => {
    if (!status) return '#F5F5F5';
    if (status === 'present') return '#10B981';
    if (status === 'absent') return '#EF4444';
    if (status === 'late') return '#F59E0B';
    return '#F5F5F5';
  };

  return (
    <div className="p-4 space-y-6">
      {/* Month Selector */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div className="flex items-center justify-between">
          <button className="w-10 h-10 flex items-center justify-center">
            <ChevronLeft style={{ width: '20px', height: '20px', color: '#757575' }} />
          </button>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121' }}>
            {currentMonth}
          </div>
          <button className="w-10 h-10 flex items-center justify-center">
            <ChevronRight style={{ width: '20px', height: '20px', color: '#757575' }} />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div className="grid grid-cols-7 gap-2 mb-3">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
            <div key={idx} className="text-center" style={{ fontSize: '12px', fontWeight: 600, color: '#757575' }}>
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarData.map((item, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: getStatusColor(item.status),
                color: item.status ? '#FFFFFF' : '#757575',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              {item.day}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#10B981' }} />
            <span style={{ fontSize: '13px', color: '#212121' }}>Present</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#EF4444' }} />
            <span style={{ fontSize: '13px', color: '#212121' }}>Absent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F59E0B' }} />
            <span style={{ fontSize: '13px', color: '#212121' }}>Late</span>
          </div>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Monthly Summary
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '14px', color: '#757575' }}>Total Days</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>22</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '14px', color: '#757575' }}>Present</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#10B981' }}>19</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '14px', color: '#757575' }}>Absent</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#EF4444' }}>1</span>
          </div>
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '14px', color: '#757575' }}>Late</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#F59E0B' }}>2</span>
          </div>
          <div className="h-px bg-gray-200 my-2" />
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>Attendance Rate</span>
            <span style={{ fontSize: '18px', fontWeight: 600, color: '#10B981' }}>94%</span>
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Attendance Trend
        </div>
        <div className="flex items-end justify-between gap-2" style={{ height: '120px' }}>
          {[92, 95, 94, 96, 93, 94].map((value, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative" style={{ height: '100px' }}>
                <div 
                  className="absolute bottom-0 w-full rounded-t transition-all"
                  style={{ 
                    height: `${value}%`, 
                    backgroundColor: '#9333EA',
                    opacity: 0.8
                  }}
                />
              </div>
              <div style={{ fontSize: '11px', color: '#757575' }}>
                {['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==================== SCREEN 3: ACADEMIC PERFORMANCE ==================== */
function AcademicsScreen({ onNavigate }: any) {
  return (
    <div className="p-4 space-y-6">
      {/* Overall Performance */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
          Overall Performance
        </div>
        <div style={{ fontSize: '32px', fontWeight: 600, color: '#2563EB' }}>
          85%
        </div>
        <div className="flex items-center gap-1 mt-2">
          <TrendingUp style={{ width: '16px', height: '16px', color: '#10B981' }} />
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>+3% from last term</span>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Subject Performance
        </div>
        <div className="space-y-4">
          {[
            { subject: 'Mathematics', score: 88, color: '#2563EB', trend: 'up' },
            { subject: 'Science', score: 75, color: '#F59E0B', trend: 'down' },
            { subject: 'English', score: 90, color: '#10B981', trend: 'up' },
            { subject: 'Social Studies', score: 82, color: '#8B5CF6', trend: 'up' }
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#212121' }}>{item.subject}</span>
                  {item.trend === 'up' ? (
                    <TrendingUp style={{ width: '14px', height: '14px', color: '#10B981' }} />
                  ) : (
                    <TrendingDown style={{ width: '14px', height: '14px', color: '#EF4444' }} />
                  )}
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>{item.score}%</span>
              </div>
              <div className="h-2 rounded-full" style={{ backgroundColor: '#F5F5F5' }}>
                <div 
                  className="h-full rounded-full transition-all"
                  style={{ width: `${item.score}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam History */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Recent Exams
        </div>
        <div className="space-y-3">
          {[
            { exam: 'Mid-term Math', subject: 'Mathematics', score: 88, grade: 'A' },
            { exam: 'Science Quiz', subject: 'Science', score: 75, grade: 'B' },
            { exam: 'English Essay', subject: 'English', score: 92, grade: 'A+' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
              <div className="flex-1">
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '2px' }}>
                  {item.exam}
                </div>
                <div style={{ fontSize: '12px', color: '#757575' }}>
                  {item.subject}
                </div>
              </div>
              <div className="text-right">
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#2563EB' }}>
                  {item.score}%
                </div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#10B981' }}>
                  {item.grade}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div 
        className="rounded-lg p-4"
        style={{ 
          background: 'linear-gradient(135deg, #EDE9FE 0%, #DBEAFE 100%)',
          border: '1px solid #C7D2FE'
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Brain style={{ width: '20px', height: '20px', color: '#9333EA' }} />
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121' }}>
            AI Insight
          </div>
        </div>
        <div style={{ fontSize: '14px', color: '#212121', lineHeight: '20px' }}>
          Your child is improving in Mathematics but struggling in Science. Consider extra practice in Physics concepts.
        </div>
      </div>
    </div>
  );
}

/* ==================== SCREEN 4: HOMEWORK ==================== */
function HomeworkScreen({ onNavigate }: any) {
  const homeworkItems = [
    { id: 1, subject: 'Science', title: 'Solar System Model', due: 'Tomorrow', dueDate: 'Mar 13', status: 'pending', description: 'Create a 3D model of the solar system showing all planets', color: '#EF4444' },
    { id: 2, subject: 'Mathematics', title: 'Chapter 5 Practice', due: 'Mar 15', dueDate: 'Mar 15', status: 'pending', description: 'Complete all exercises from chapter 5', color: '#F59E0B' },
    { id: 3, subject: 'English', title: 'Essay on Climate Change', due: 'Mar 18', dueDate: 'Mar 18', status: 'pending', description: 'Write a 500-word essay on climate change', color: '#F59E0B' }
  ];

  return (
    <div className="p-4 space-y-3">
      {/* Pending Assignments */}
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#757575', marginBottom: '8px' }}>
        Pending (3)
      </div>
      
      {homeworkItems.map((assignment) => (
        <button
          key={assignment.id}
          onClick={() => onNavigate({ type: 'homeworkDetail', data: assignment, tab: 'academics' })}
          className="w-full bg-white rounded-lg p-4 text-left"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>
                {assignment.subject}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
                {assignment.title}
              </div>
            </div>
            <span 
              className="px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${assignment.color}15`,
                color: assignment.color,
                fontSize: '12px',
                fontWeight: 600
              }}
            >
              Pending
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Clock style={{ width: '14px', height: '14px', color: '#9E9E9E' }} />
              <span style={{ fontSize: '13px', color: '#757575' }}>Due: {assignment.due}</span>
            </div>
            <ChevronRight style={{ width: '18px', height: '18px', color: '#9E9E9E' }} />
          </div>
        </button>
      ))}

      {/* Completed Assignments */}
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#757575', marginTop: '24px', marginBottom: '8px' }}>
        Completed (2)
      </div>
      
      {[
        { subject: 'Hindi', title: 'Poetry Recitation', due: 'Mar 10', status: 'completed' },
        { subject: 'Social Studies', title: 'Map Worksheet', due: 'Mar 8', status: 'completed' }
      ].map((assignment, index) => (
        <div key={index} className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)', opacity: 0.7 }}>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>
                {assignment.subject}
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
                {assignment.title}
              </div>
            </div>
            <CheckCircle style={{ width: '20px', height: '20px', color: '#10B981' }} />
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle style={{ width: '14px', height: '14px', color: '#10B981' }} />
            <span style={{ fontSize: '13px', color: '#10B981', fontWeight: 600 }}>Submitted on {assignment.due}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ==================== HOMEWORK DETAIL SCREEN ==================== */
function HomeworkDetailScreen({ data, onNavigate }: any) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Subject Badge */}
        <div className="flex items-center gap-2">
          <span 
            className="px-3 py-1 rounded-full"
            style={{
              backgroundColor: '#EDE9FE',
              color: '#9333EA',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            {data.subject}
          </span>
          <span 
            className="px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${data.color}15`,
              color: data.color,
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            {data.status === 'pending' ? 'Pending' : 'Completed'}
          </span>
        </div>

        {/* Title */}
        <div>
          <div style={{ fontSize: '24px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
            {data.title}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock style={{ width: '16px', height: '16px', color: '#9E9E9E' }} />
              <span style={{ fontSize: '14px', color: '#757575' }}>Due: {data.dueDate}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
            Description
          </div>
          <div style={{ fontSize: '14px', color: '#757575', lineHeight: '20px' }}>
            {data.description}
          </div>
        </div>

        {/* Attachments */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            Attachments
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
              <FileText style={{ width: '20px', height: '20px', color: '#2563EB' }} />
              <div className="flex-1">
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#212121' }}>Assignment Guidelines.pdf</div>
                <div style={{ fontSize: '12px', color: '#757575' }}>2.4 MB</div>
              </div>
              <button>
                <Download style={{ width: '20px', height: '20px', color: '#757575' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Teacher Note */}
        <div 
          className="rounded-lg p-4"
          style={{ 
            background: 'linear-gradient(135deg, #EDE9FE 0%, #DBEAFE 100%)',
            border: '1px solid #C7D2FE'
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle style={{ width: '18px', height: '18px', color: '#9333EA' }} />
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>
              Teacher's Note
            </div>
          </div>
          <div style={{ fontSize: '13px', color: '#212121', lineHeight: '18px' }}>
            Please ensure your child completes this assignment on time. Contact me if you need any clarification.
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
        <button 
          className="w-full rounded-lg"
          style={{
            backgroundColor: '#9333EA',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 24px',
            boxShadow: '0 2px 8px rgba(147,51,234,0.25)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Mark as Complete
        </button>
      </div>
    </div>
  );
}

/* ==================== SCREEN 5: FEE PAYMENTS ==================== */
function FeesScreen({ onNavigate }: any) {
  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-6" style={{ paddingBottom: '16px' }}>
        {/* Financial Summary */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-lg p-3" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>
              Total Fees
            </div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#212121' }}>
              ₹45,000
            </div>
          </div>
          <div className="bg-white rounded-lg p-3" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>
              Paid
            </div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#10B981' }}>
              ₹30,000
            </div>
          </div>
          <div className="bg-white rounded-lg p-3" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
            <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>
              Pending
            </div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#EF4444' }}>
              ₹15,000
            </div>
          </div>
        </div>

        {/* Pending Invoices */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Pending Payments
          </div>
          <div className="space-y-3">
            {[
              { type: 'Quarterly Fee', amount: '₹15,000', due: 'Mar 31, 2026', status: 'Due' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2' }}>
                <div className="flex items-center justify-between mb-2">
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>
                    {item.type}
                  </div>
                  <span 
                    className="px-2 py-1 rounded"
                    style={{ backgroundColor: '#EF4444', color: '#FFFFFF', fontSize: '11px', fontWeight: 600 }}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div style={{ fontSize: '18px', fontWeight: 600, color: '#EF4444' }}>
                    {item.amount}
                  </div>
                  <div style={{ fontSize: '12px', color: '#757575' }}>
                    Due: {item.due}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Payment History
          </div>
          <div className="space-y-3">
            {[
              { type: 'Quarterly Fee', amount: '₹15,000', date: 'Dec 10, 2025', status: 'Paid' },
              { type: 'Quarterly Fee', amount: '₹15,000', date: 'Sep 15, 2025', status: 'Paid' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="flex-1">
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '2px' }}>
                    {item.type}
                  </div>
                  <div style={{ fontSize: '12px', color: '#757575' }}>
                    {item.date}
                  </div>
                </div>
                <div className="text-right">
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>
                    {item.amount}
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <CheckCircle style={{ width: '12px', height: '12px', color: '#10B981' }} />
                    <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>{item.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pay Now Button */}
      <div className="bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
        <button 
          onClick={() => onNavigate({ type: 'paymentSuccess' })}
          className="w-full rounded-lg"
          style={{
            backgroundColor: '#10B981',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 24px',
            boxShadow: '0 2px 8px rgba(16,185,129,0.25)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Pay Now - ₹15,000
        </button>
      </div>
    </div>
  );
}

/* ==================== PAYMENT SUCCESS SCREEN ==================== */
function PaymentSuccessScreen({ onNavigate }: any) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="text-center">
        <div 
          className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{ backgroundColor: '#D1FAE5' }}
        >
          <CheckCircle style={{ width: '48px', height: '48px', color: '#10B981' }} />
        </div>
        <div style={{ fontSize: '24px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
          Payment Successful!
        </div>
        <div style={{ fontSize: '14px', color: '#757575', marginBottom: '24px' }}>
          Your fee payment of ₹15,000 has been processed successfully.
        </div>
        <div className="bg-white rounded-lg p-4 mb-6" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span style={{ fontSize: '13px', color: '#757575' }}>Transaction ID:</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#212121' }}>TXN20260312001</span>
            </div>
            <div className="flex justify-between">
              <span style={{ fontSize: '13px', color: '#757575' }}>Date:</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#212121' }}>March 12, 2026</span>
            </div>
            <div className="flex justify-between">
              <span style={{ fontSize: '13px', color: '#757575' }}>Amount:</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#10B981' }}>₹15,000</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => onNavigate({ type: 'home', tab: 'home' })}
          className="w-full rounded-lg"
          style={{
            backgroundColor: '#9333EA',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 24px',
            boxShadow: '0 2px 8px rgba(147,51,234,0.25)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

/* ==================== SCREEN 6: SCHOOL ANNOUNCEMENTS ==================== */
function SchoolAnnouncementsScreen({ onNavigate }: any) {
  const announcements = [
    { 
      id: 1,
      title: 'Parent-Teacher Meeting', 
      date: 'Mar 20, 2026',
      description: 'Meeting scheduled from 2 PM to 5 PM. Please confirm your attendance.',
      fullMessage: 'Dear Parents,\n\nWe are pleased to invite you to our Parent-Teacher Meeting scheduled for March 20, 2026, from 2 PM to 5 PM.\n\nThis is an excellent opportunity to discuss your child\'s academic progress, behavior, and overall development.\n\nPlease confirm your attendance by replying to this announcement.\n\nThank you,\nDPS Administration',
      type: 'important'
    },
    { 
      id: 2,
      title: 'Annual Sports Day', 
      date: 'Mar 25, 2026',
      description: 'Annual sports day celebration. Students should wear sports uniform.',
      fullMessage: 'Dear Parents,\n\nOur Annual Sports Day will be held on March 25, 2026.\n\nAll students are requested to wear their sports uniform and bring water bottles.\n\nParents are welcome to attend and cheer for their children.\n\nEvent timings: 8:00 AM to 1:00 PM',
      type: 'event'
    },
    { 
      id: 3,
      title: 'Science Exhibition', 
      date: 'Mar 30, 2026',
      description: 'Students to prepare science models for the exhibition.',
      fullMessage: 'Dear Parents,\n\nWe are organizing a Science Exhibition on March 30, 2026.\n\nStudents are encouraged to prepare innovative science models and projects.\n\nThis is a great opportunity for students to showcase their creativity and scientific knowledge.',
      type: 'general'
    },
    { 
      id: 4,
      title: 'School Holiday Notice', 
      date: 'Mar 15, 2026',
      description: 'School will remain closed on March 18 due to local festival.',
      fullMessage: 'Dear Parents,\n\nPlease note that school will remain closed on March 18, 2026, due to local festival celebrations.\n\nRegular classes will resume on March 19, 2026.\n\nThank you for your cooperation.',
      type: 'general'
    }
  ];

  return (
    <div className="p-4 space-y-3">
      {announcements.map((announcement) => (
        <button
          key={announcement.id}
          onClick={() => onNavigate({ type: 'announcementDetail', data: announcement })}
          className="w-full bg-white rounded-lg p-4 text-left"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
        >
          <div className="flex items-start gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ 
                backgroundColor: announcement.type === 'important' ? '#FEE2E2' : '#DBEAFE',
                color: announcement.type === 'important' ? '#EF4444' : '#2563EB'
              }}
            >
              <Bell style={{ width: '18px', height: '18px' }} />
            </div>
            <div className="flex-1">
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
                {announcement.title}
              </div>
              <div style={{ fontSize: '12px', color: '#757575', marginBottom: '8px' }}>
                {announcement.date}
              </div>
              <div style={{ fontSize: '14px', color: '#212121', lineHeight: '20px' }}>
                {announcement.description}
              </div>
            </div>
            <ChevronRight style={{ width: '18px', height: '18px', color: '#9E9E9E' }} />
          </div>
        </button>
      ))}
    </div>
  );
}

/* ==================== ANNOUNCEMENT DETAIL SCREEN ==================== */
function AnnouncementDetailScreen({ data, onNavigate }: any) {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div className="flex items-start gap-3 mb-4">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ 
              backgroundColor: data.type === 'important' ? '#FEE2E2' : '#DBEAFE',
              color: data.type === 'important' ? '#EF4444' : '#2563EB'
            }}
          >
            <Bell style={{ width: '22px', height: '22px' }} />
          </div>
          <div className="flex-1">
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
              {data.title}
            </div>
            <div style={{ fontSize: '13px', color: '#757575' }}>
              {data.date}
            </div>
          </div>
        </div>
        
        {data.type === 'important' && (
          <div 
            className="flex items-center gap-2 p-3 rounded-lg mb-4"
            style={{ backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2' }}
          >
            <AlertCircle style={{ width: '18px', height: '18px', color: '#EF4444' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#EF4444' }}>Important Announcement</span>
          </div>
        )}
        
        <div style={{ fontSize: '14px', color: '#212121', lineHeight: '22px', whiteSpace: 'pre-wrap' }}>
          {data.fullMessage}
        </div>
      </div>

      {/* Action Button */}
      <button 
        className="w-full rounded-lg"
        style={{
          backgroundColor: '#9333EA',
          color: '#FFFFFF',
          fontSize: '16px',
          fontWeight: 600,
          padding: '14px 24px',
          boxShadow: '0 2px 8px rgba(147,51,234,0.25)',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Confirm Receipt
      </button>
    </div>
  );
}

/* ==================== SCREEN 7: TEACHER MESSAGES ==================== */
function TeacherMessagesScreen({ onNavigate }: any) {
  const conversations = [
    { id: 1, teacher: 'Ms. Priya Sharma', subject: 'Mathematics', message: 'Ananya is doing great!', time: '2h ago', unread: 0 },
    { id: 2, teacher: 'Mr. Rajesh Kumar', subject: 'Science', message: 'Please check the homework', time: '5h ago', unread: 2 },
    { id: 3, teacher: 'Mrs. Sunita Reddy', subject: 'English', message: 'Essay was excellent', time: '1d ago', unread: 0 },
    { id: 4, teacher: 'Mr. Amit Patel', subject: 'Social Studies', message: 'Map project deadline extended', time: '2d ago', unread: 1 }
  ];

  return (
    <div className="p-4 space-y-3">
      {/* Search */}
      <div className="relative">
        <Search 
          className="absolute left-4 top-1/2 -translate-y-1/2"
          style={{ width: '20px', height: '20px', color: '#9E9E9E' }}
        />
        <input
          type="text"
          placeholder="Search teachers..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border"
          style={{ 
            borderColor: '#E0E0E0',
            backgroundColor: '#FFFFFF',
            fontSize: '14px'
          }}
        />
      </div>

      {/* Conversations */}
      <div className="space-y-2">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onNavigate({ type: 'chat', data: conv, tab: 'messages' })}
            className="w-full bg-white rounded-lg p-4 text-left hover:shadow-md transition-all"
            style={{ 
              boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
              border: '1px solid #E0E0E0'
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#EDE9FE', color: '#9333EA', fontSize: '14px', fontWeight: 600 }}
              >
                {conv.teacher.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>
                    {conv.teacher}
                  </div>
                  <div style={{ fontSize: '12px', color: '#757575' }}>
                    {conv.time}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>
                  {conv.subject}
                </div>
                <div style={{ fontSize: '14px', color: '#9E9E9E' }} className="truncate">
                  {conv.message}
                </div>
              </div>
              {conv.unread > 0 && (
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#9333EA', color: '#FFFFFF', fontSize: '12px', fontWeight: 600 }}
                >
                  {conv.unread}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==================== SCREEN 7: CHAT WITH TEACHER ==================== */
function ParentChatScreen({ teacherData, onNavigate }: any) {
  const messages = [
    { sender: 'parent', text: 'Hello Ma\'am, how is Ananya performing in class?', time: '10:30 AM' },
    { sender: 'teacher', text: 'Good morning! She is doing very well, especially in Mathematics.', time: '10:32 AM' },
    { sender: 'parent', text: 'That\'s great to hear! Any areas she needs to improve?', time: '10:35 AM' },
    { sender: 'teacher', text: 'She should focus more on Science concepts. Otherwise, she\'s excellent!', time: '10:37 AM' }
  ];

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'parent' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className="max-w-[75%] rounded-2xl px-4 py-3"
              style={{
                backgroundColor: msg.sender === 'parent' ? '#9333EA' : '#FFFFFF',
                color: msg.sender === 'parent' ? '#FFFFFF' : '#212121',
                boxShadow: msg.sender === 'teacher' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none'
              }}
            >
              <div style={{ fontSize: '14px', lineHeight: '20px' }}>
                {msg.text}
              </div>
              <div 
                style={{ 
                  fontSize: '12px', 
                  marginTop: '4px',
                  color: msg.sender === 'parent' ? 'rgba(255,255,255,0.7)' : '#9E9E9E'
                }}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
        <div className="flex items-center gap-2">
          <button className="w-12 h-12 flex items-center justify-center">
            <Paperclip style={{ width: '24px', height: '24px', color: '#757575' }} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center">
            <Mic style={{ width: '24px', height: '24px', color: '#757575' }} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 rounded-full"
            style={{ 
              backgroundColor: '#F5F5F5',
              fontSize: '14px'
            }}
          />
          <button 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#9333EA', color: '#FFFFFF' }}
          >
            <Send style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==================== SCREEN 8: AI LEARNING INSIGHTS ==================== */
function AILearningInsightsScreen({ onNavigate }: any) {
  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div 
        className="rounded-lg p-4"
        style={{ 
          background: 'linear-gradient(135deg, #EDE9FE 0%, #DBEAFE 100%)',
          border: '1px solid #C7D2FE'
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Brain style={{ width: '24px', height: '24px', color: '#9333EA' }} />
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#212121' }}>
            AI Learning Insights
          </div>
        </div>
        <div style={{ fontSize: '14px', color: '#757575' }}>
          Personalized recommendations for your child
        </div>
      </div>

      {/* Subject Strengths */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)', border: '1px solid #D1FAE5' }}>
        <div className="flex items-start gap-3 mb-3">
          <Award style={{ width: '20px', height: '20px', color: '#10B981', flexShrink: 0 }} />
          <div className="flex-1">
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
              Subject Strengths
            </div>
            <div style={{ fontSize: '13px', color: '#757575', marginBottom: '8px' }}>
              Areas where your child excels
            </div>
            <div className="space-y-2">
              {['Mathematics - Advanced problem solving', 'English - Creative writing'].map((strength, idx) => (
                <div key={idx} className="px-3 py-2 rounded" style={{ backgroundColor: '#D1FAE5' }}>
                  <div style={{ fontSize: '13px', color: '#065F46' }}>{strength}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Needs Improvement */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)', border: '1px solid #FEE2E2' }}>
        <div className="flex items-start gap-3 mb-3">
          <Target style={{ width: '20px', height: '20px', color: '#EF4444', flexShrink: 0 }} />
          <div className="flex-1">
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
              Needs Improvement
            </div>
            <div style={{ fontSize: '13px', color: '#757575', marginBottom: '8px' }}>
              Focus areas for better performance
            </div>
            <div className="space-y-2">
              {['Science - Physics concepts', 'Social Studies - Map reading'].map((area, idx) => (
                <div key={idx} className="px-3 py-2 rounded" style={{ backgroundColor: '#FEF2F2' }}>
                  <div style={{ fontSize: '13px', color: '#991B1B' }}>{area}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Study Recommendations */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)', border: '1px solid #DBEAFE' }}>
        <div className="flex items-start gap-3 mb-3">
          <BookOpen style={{ width: '20px', height: '20px', color: '#2563EB', flexShrink: 0 }} />
          <div className="flex-1">
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
              Recommended Study Hours
            </div>
            <div style={{ fontSize: '13px', color: '#757575', marginBottom: '12px' }}>
              Daily study time suggestions
            </div>
            <div className="space-y-3">
              {[
                { subject: 'Science', hours: '30 min', priority: 'High' },
                { subject: 'Mathematics', hours: '45 min', priority: 'Medium' },
                { subject: 'English', hours: '20 min', priority: 'Low' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#EFF6FF' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#212121' }}>{item.subject}</div>
                    <div style={{ fontSize: '12px', color: '#757575' }}>Priority: {item.priority}</div>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#2563EB' }}>
                    {item.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Suggestion */}
      <div 
        className="rounded-lg p-4"
        style={{ 
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
          border: '1px solid #FCD34D'
        }}
      >
        <div className="flex items-start gap-3">
          <AlertCircle style={{ width: '20px', height: '20px', color: '#F59E0B', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
              AI Suggestion
            </div>
            <div style={{ fontSize: '13px', color: '#78350F', lineHeight: '18px' }}>
              Your child should spend 30 minutes more daily on Science revision, focusing on Physics concepts. Consider scheduling study time after school hours.
            </div>
          </div>
        </div>
      </div>

      {/* Learning Pattern */}
      <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
          Learning Pattern Analysis
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
            <span style={{ fontSize: '14px', color: '#212121' }}>Best study time</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#9333EA' }}>Evening (4-6 PM)</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
            <span style={{ fontSize: '14px', color: '#212121' }}>Learning style</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#9333EA' }}>Visual learner</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
            <span style={{ fontSize: '14px', color: '#212121' }}>Attention span</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#9333EA' }}>25-30 minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
