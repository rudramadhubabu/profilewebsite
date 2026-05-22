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

          {/* App Content - Fixed height calculation */}
          <div style={{ height: 'calc(100% - 24px)', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
            {/* Top App Bar */}
            <ParentTopAppBar currentScreen={currentScreen} onNavigate={handleNavigation} />

            {/* Screen Content - Proper scrollable area */}
            <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScreen.type}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  style={{ height: '100%' }}
                >
                  {currentScreen.type === 'home' && <ParentHomeScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'academics' && <AcademicsScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'homework' && <HomeworkScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'homeworkDetail' && <HomeworkDetailScreen data={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'fees' && <FeesScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'paymentSuccess' && <PaymentSuccessScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'announcements' && <SchoolAnnouncementsScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'announcementDetail' && <AnnouncementDetailScreen data={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'attendance' && <AttendanceTrackingScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'messages' && <TeacherMessagesScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'chat' && <ParentChatScreen teacherData={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'aiInsights' && <AILearningInsightsScreen onNavigate={handleNavigation} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Navigation - Fixed position */}
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
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flexShrink: 0
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
      className="bg-white flex items-center justify-around border-t"
      style={{ 
        height: '56px',
        borderTopColor: '#E0E0E0',
        boxShadow: '0 -1px 3px rgba(0,0,0,0.05)',
        flexShrink: 0
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
function ParentHomeScreen({ onNavigate, showBottomNav }: any) {
  return (
    <div 
      className="h-full overflow-y-auto" 
      style={{ paddingBottom: showBottomNav ? '0' : '0' }}
    >
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
                <IndianRupee style={{ width: '20px', height: '20px', color: '#10B981' }} />
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
    </div>
  );
}

/* ==================== SCREEN 2: ATTENDANCE TRACKING ==================== */
function AttendanceTrackingScreen({ onNavigate, showBottomNav }: any) {
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
    <div 
      className="h-full overflow-y-auto" 
      style={{ paddingBottom: showBottomNav ? '0' : '0' }}
    >
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
    </div>
  );
}

/* ==================== SCREEN 3: ACADEMIC PERFORMANCE ==================== */
function AcademicsScreen({ onNavigate, showBottomNav }: any) {
  return (
    <div 
      className="h-full overflow-y-auto" 
      style={{ paddingBottom: showBottomNav ? '0' : '0' }}
    >
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
                  <div style={{ fontSize: '12px', color: '#757575' }}>
                    Grade: {item.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Placeholder screens with minimal implementations
function HomeworkScreen({ onNavigate }: any) {
  const assignments = [
    { id: 1, title: 'Math: Chapter 5 Practice', subject: 'Mathematics', dueDate: 'Mar 15', status: 'pending', priority: 'high' },
    { id: 2, title: 'Science Project: Solar System', subject: 'Science', dueDate: 'Mar 18', status: 'in-progress', priority: 'high' },
    { id: 3, title: 'English Essay', subject: 'English', dueDate: 'Mar 20', status: 'completed', priority: 'medium' },
    { id: 4, title: 'History Timeline', subject: 'Social Studies', dueDate: 'Mar 22', status: 'pending', priority: 'low' }
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="p-4 space-y-3">
        {assignments.map((assignment) => (
          <button
            key={assignment.id}
            onClick={() => onNavigate({ type: 'homeworkDetail', data: assignment, tab: 'academics' })}
            className="w-full bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
                  {assignment.title}
                </div>
                <div style={{ fontSize: '13px', color: '#757575', marginBottom: '8px' }}>
                  {assignment.subject}
                </div>
              </div>
              {assignment.priority === 'high' && (
                <div className="px-2 py-1 rounded" style={{ backgroundColor: '#FEE2E2', fontSize: '11px', fontWeight: 600, color: '#DC2626' }}>
                  HIGH
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Calendar style={{ width: '14px', height: '14px', color: '#757575' }} />
                <span style={{ fontSize: '13px', color: '#757575' }}>Due: {assignment.dueDate}</span>
              </div>
              <div 
                className="px-3 py-1 rounded-full"
                style={{
                  backgroundColor: assignment.status === 'completed' ? '#DCFCE7' : assignment.status === 'in-progress' ? '#FEF3C7' : '#FEE2E2',
                  color: assignment.status === 'completed' ? '#16A34A' : assignment.status === 'in-progress' ? '#CA8A04' : '#DC2626',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                {assignment.status === 'completed' ? 'Completed' : assignment.status === 'in-progress' ? 'In Progress' : 'Pending'}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function HomeworkDetailScreen({ data, onNavigate }: any) {
  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
            {data?.title || 'Assignment Title'}
          </div>
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '16px' }}>
            {data?.subject || 'Subject'}
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar style={{ width: '18px', height: '18px', color: '#9333EA' }} />
              <span style={{ fontSize: '14px', color: '#212121' }}>Due Date: {data?.dueDate || 'Mar 15'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock style={{ width: '18px', height: '18px', color: '#9333EA' }} />
              <span style={{ fontSize: '14px', color: '#212121' }}>Assigned: Mar 10</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            Instructions
          </div>
          <div style={{ fontSize: '14px', color: '#424242', lineHeight: '22px' }}>
            Complete exercises 1-20 from Chapter 5. Show all working steps. Pay special attention to quadratic equations and factorization methods.
          </div>
        </div>

        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            Attachments
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="flex items-center gap-2">
              <FileText style={{ width: '20px', height: '20px', color: '#9333EA' }} />
              <span style={{ fontSize: '14px', color: '#212121' }}>chapter5_exercises.pdf</span>
            </div>
            <Download style={{ width: '18px', height: '18px', color: '#757575' }} />
          </div>
        </div>

        {data?.status === 'completed' && (
          <div 
            className="rounded-lg p-4 flex items-center gap-3"
            style={{ backgroundColor: '#DCFCE7', border: '1px solid #BBF7D0' }}
          >
            <CheckCircle style={{ width: '24px', height: '24px', color: '#16A34A' }} />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#16A34A' }}>Submitted on Mar 14</div>
              <div style={{ fontSize: '13px', color: '#15803D' }}>Grade: A (95%)</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeesScreen({ onNavigate }: any) {
  const [selectedPeriod, setSelectedPeriod] = useState('current');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Fee Summary */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
            Current Term Fee
          </div>
          <div style={{ fontSize: '36px', fontWeight: 700, color: '#212121' }}>
            ₹25,000
          </div>
          <div className="flex items-center gap-1 mt-2">
            <AlertCircle style={{ width: '16px', height: '16px', color: '#F59E0B' }} />
            <span style={{ fontSize: '13px', color: '#F59E0B', fontWeight: 600 }}>Due: March 31, 2026</span>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Fee Breakdown
          </div>
          <div className="space-y-3">
            {[
              { item: 'Tuition Fee', amount: 18000 },
              { item: 'Lab Fee', amount: 3000 },
              { item: 'Library Fee', amount: 2000 },
              { item: 'Sports Fee', amount: 2000 }
            ].map((fee, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span style={{ fontSize: '14px', color: '#757575' }}>{fee.item}</span>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>₹{fee.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="h-px bg-gray-200 my-2" />
            <div className="flex items-center justify-between">
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>Total</span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#2563EB' }}>₹25,000</span>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Payment History
          </div>
          <div className="space-y-3">
            {[
              { period: 'Term 2 - 2025', amount: 25000, status: 'paid', date: 'Dec 15, 2025' },
              { period: 'Term 1 - 2025', amount: 25000, status: 'paid', date: 'Aug 10, 2025' }
            ].map((payment, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#212121' }}>{payment.period}</div>
                  <div style={{ fontSize: '12px', color: '#757575' }}>{payment.date}</div>
                </div>
                <div className="text-right">
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#212121' }}>₹{payment.amount.toLocaleString()}</div>
                  <div className="inline-block px-2 py-0.5 rounded" style={{ backgroundColor: '#DCFCE7', fontSize: '11px', fontWeight: 600, color: '#16A34A' }}>
                    PAID
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pay Button */}
      <div className="flex-shrink-0 bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
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
          Pay Now - ₹25,000
        </button>
      </div>
    </div>
  );
}

function PaymentSuccessScreen({ onNavigate }: any) {
  return (
    <div className="h-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="p-8 text-center">
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
          <CheckCircle style={{ width: '48px', height: '48px', color: '#16A34A' }} />
        </div>
        <div style={{ fontSize: '24px', fontWeight: 700, color: '#212121', marginBottom: '8px' }}>
          Payment Successful!
        </div>
        <div style={{ fontSize: '14px', color: '#757575', marginBottom: '24px' }}>
          Transaction ID: TXN2026031512345
        </div>
        <div className="bg-white rounded-lg p-4 mb-6" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '4px' }}>Amount Paid</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: '#10B981' }}>₹25,000</div>
        </div>
        <button
          onClick={() => onNavigate({ type: 'home', tab: 'home' })}
          className="px-6 py-3 rounded-lg"
          style={{ backgroundColor: '#9333EA', color: '#FFFFFF', fontSize: '14px', fontWeight: 600 }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

function SchoolAnnouncementsScreen({ onNavigate }: any) {
  const announcements = [
    { id: 1, title: 'Parent-Teacher Meeting', date: 'Mar 20', priority: 'high', preview: 'Scheduled for next week. Please confirm attendance.' },
    { id: 2, title: 'Sports Day Event', date: 'Mar 25', priority: 'medium', preview: 'Annual sports day celebration on campus.' },
    { id: 3, title: 'Holiday Notice', date: 'Mar 28', priority: 'low', preview: 'School will be closed on March 30th.' }
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="p-4 space-y-3">
        {announcements.map((announcement) => (
          <button
            key={announcement.id}
            onClick={() => onNavigate({ type: 'announcementDetail', data: announcement })}
            className="w-full bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
                  {announcement.title}
                </div>
                <div style={{ fontSize: '13px', color: '#757575', marginBottom: '8px' }}>
                  {announcement.preview}
                </div>
              </div>
              {announcement.priority === 'high' && (
                <Bell style={{ width: '20px', height: '20px', color: '#DC2626' }} />
              )}
            </div>
            <div className="flex items-center gap-2">
              <Calendar style={{ width: '14px', height: '14px', color: '#757575' }} />
              <span style={{ fontSize: '12px', color: '#757575' }}>{announcement.date}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function AnnouncementDetailScreen({ data, onNavigate }: any) {
  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="p-4 space-y-4">
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div className="flex items-center gap-2 mb-3">
            <Bell style={{ width: '20px', height: '20px', color: '#9333EA' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#9333EA' }}>IMPORTANT</span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#212121', marginBottom: '8px' }}>
            {data?.title || 'Announcement Title'}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar style={{ width: '16px', height: '16px', color: '#757575' }} />
            <span style={{ fontSize: '13px', color: '#757575' }}>Posted on {data?.date || 'Mar 20'}</span>
          </div>
          <div style={{ fontSize: '14px', color: '#424242', lineHeight: '22px' }}>
            {data?.preview || 'Announcement details will appear here.'}
            <br /><br />
            Dear Parents,<br /><br />
            We are pleased to announce our upcoming Parent-Teacher meeting scheduled for next week. This is an excellent opportunity to discuss your child's progress and address any concerns.<br /><br />
            Please confirm your attendance through the app or contact the school office.<br /><br />
            Best regards,<br />
            School Administration
          </div>
        </div>
      </div>
    </div>
  );
}

function TeacherMessagesScreen({ onNavigate, showBottomNav }: any) {
  const conversations = [
    { id: 1, teacher: 'Mr. Rajesh (Math)', lastMessage: 'Your child is doing great!', time: '10m ago', unread: 0 },
    { id: 2, teacher: 'Mrs. Priya (Science)', lastMessage: 'Please check homework', time: '1h ago', unread: 2 },
    { id: 3, teacher: 'Ms. Sunita (English)', lastMessage: 'Thank you for your support', time: '3h ago', unread: 0 }
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ paddingBottom: showBottomNav ? '0' : '0', backgroundColor: '#F5F5F5' }}>
      <div className="p-4 space-y-3">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onNavigate({ type: 'chat', data: conv, tab: 'messages' })}
            className="w-full bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121' }}>
                {conv.teacher}
              </div>
              <div style={{ fontSize: '12px', color: '#757575' }}>
                {conv.time}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div style={{ fontSize: '14px', color: '#9E9E9E' }}>
                {conv.lastMessage}
              </div>
              {conv.unread > 0 && (
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
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

function ParentChatScreen({ teacherData, onNavigate }: any) {
  const messages = [
    { sender: 'teacher', text: 'Hello! Your child is performing well in class.', time: '10:30 AM' },
    { sender: 'parent', text: 'Thank you for the update!', time: '10:35 AM' },
    { sender: 'parent', text: 'Any areas we should focus on at home?', time: '10:36 AM' },
    { sender: 'teacher', text: 'Practice more on multiplication tables.', time: '10:40 AM' }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
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

      <div className="flex-shrink-0 bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <Paperclip style={{ width: '20px', height: '20px', color: '#757575' }} />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2.5 rounded-full"
            style={{ backgroundColor: '#F5F5F5', fontSize: '14px', border: 'none' }}
          />
          <button 
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#9333EA', color: '#FFFFFF' }}
          >
            <Send style={{ width: '18px', height: '18px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}

function AILearningInsightsScreen({ onNavigate }: any) {
  return (
    <div className="h-full overflow-y-auto" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="p-4 space-y-4">
        {/* AI Summary */}
        <div 
          className="rounded-lg p-4"
          style={{ background: 'linear-gradient(135deg, #EDE9FE 0%, #DBEAFE 100%)', border: '1px solid #C4B5FD' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Brain style={{ width: '20px', height: '20px', color: '#9333EA' }} />
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121' }}>
              AI Learning Insights
            </div>
          </div>
          <div style={{ fontSize: '14px', color: '#212121', lineHeight: '20px' }}>
            Based on recent performance, Ananya shows strong aptitude in Mathematics and English. Science requires additional focus on practical experiments.
          </div>
        </div>

        {/* Strengths */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            Strengths
          </div>
          <div className="space-y-2">
            {[
              'Excellent problem-solving in Mathematics',
              'Strong analytical thinking',
              'Good comprehension in English literature'
            ].map((strength, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#DCFCE7' }}>
                <CheckCircle style={{ width: '16px', height: '16px', color: '#16A34A', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: '#15803D' }}>{strength}</span>
              </div>
            ))}</div>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            Areas for Improvement
          </div>
          <div className="space-y-2">
            {[
              'Science practical lab work needs practice',
              'Time management during exams',
              'More focus on Social Studies dates'
            ].map((area, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#FEF3C7' }}>
                <AlertTriangle style={{ width: '16px', height: '16px', color: '#CA8A04', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: '#92400E' }}>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            AI Recommendations
          </div>
          <div className="space-y-2">
            {[
              'Schedule 30 minutes daily for Science revision',
              'Practice mock tests for time management',
              'Create visual timeline charts for History'
            ].map((rec, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <Target style={{ width: '16px', height: '16px', color: '#9333EA', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: '#212121' }}>{rec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}