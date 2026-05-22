import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home, Users, FileText, MessageSquare, Bell, User,
  ChevronRight, Clock, Calendar, BookOpen, TrendingUp,
  CheckCircle, XCircle, MinusCircle, Send, Paperclip,
  Plus, Upload, Filter, Search, Brain, AlertCircle,
  Target, ChevronLeft, BarChart3, Award, AlertTriangle
} from 'lucide-react';

export function TeacherMobileApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState<any>({ type: 'home' });

  const bottomNavItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'classes', icon: Users, label: 'Classes' },
    { id: 'assignments', icon: FileText, label: 'Assignments' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' }
  ];

  const handleNavigation = (screen: any) => {
    setCurrentScreen(screen);
    if (screen.tab) {
      setActiveTab(screen.tab);
    }
  };

  // Determine if bottom navigation should be shown
  const mainTabScreens = ['home', 'classes', 'assignments', 'messages'];
  const showBottomNav = mainTabScreens.includes(currentScreen.type);

  return (
    <div className="relative" style={{ width: '360px', height: '800px' }}>
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl p-3">
        <div className="relative w-full h-full rounded-[32px] bg-white overflow-hidden">
          {/* Android Status Bar */}
          <div className="h-6 bg-blue-600 flex items-center justify-between px-5 text-white" style={{ fontSize: '11px', fontWeight: 500 }}>
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
            <TopAppBar currentScreen={currentScreen} onNavigate={handleNavigation} />

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
                  {currentScreen.type === 'home' && <HomeScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'classes' && <ClassListScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'attendance' && <AttendanceScreen classData={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'assignments' && <AssignmentsScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'createAssignment' && <CreateAssignmentScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'performance' && <PerformanceScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'announcements' && <AnnouncementsScreen onNavigate={handleNavigation} />}
                  {currentScreen.type === 'messages' && <MessagesScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                  {currentScreen.type === 'chat' && <ChatScreen parentData={currentScreen.data} onNavigate={handleNavigation} />}
                  {currentScreen.type === 'aiAssistant' && <AIAssistantScreen onNavigate={handleNavigation} showBottomNav={showBottomNav} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Navigation - Fixed position */}
            {showBottomNav && (
              <BottomNavigation items={bottomNavItems} activeTab={activeTab} onTabChange={(tab) => {
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
function TopAppBar({ currentScreen, onNavigate }: any) {
  const getTitleAndActions = () => {
    switch (currentScreen.type) {
      case 'home':
        return { title: 'Teacher Dashboard', showBack: false, actions: true };
      case 'classes':
        return { title: 'My Classes', showBack: false, actions: true };
      case 'attendance':
        return { title: 'Class 8A Attendance', showBack: true, actions: false };
      case 'assignments':
        return { title: 'Assignments', showBack: false, actions: true };
      case 'createAssignment':
        return { title: 'Create Assignment', showBack: true, actions: false };
      case 'performance':
        return { title: 'Student Performance', showBack: true, actions: false };
      case 'announcements':
        return { title: 'Class Announcements', showBack: true, actions: false };
      case 'messages':
        return { title: 'Messages', showBack: false, actions: true };
      case 'chat':
        return { title: currentScreen.data?.parent || 'Chat', showBack: true, actions: false };
      case 'aiAssistant':
        return { title: 'AI Assistant', showBack: true, actions: false };
      default:
        return { title: 'Teacher Dashboard', showBack: false, actions: true };
    }
  };

  const config = getTitleAndActions();

  return (
    <div 
      className="bg-blue-600 text-white flex items-center justify-between flex-shrink-0" 
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
function BottomNavigation({ items, activeTab, onTabChange }: any) {
  return (
    <div 
      className="bg-white flex items-center justify-around border-t flex-shrink-0"
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
              color: isActive ? '#2563EB' : '#757575'
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

/* ==================== SCREEN 1: HOME DASHBOARD ==================== */
function HomeScreen({ onNavigate, showBottomNav }: any) {
  return (
    <div 
      className="overflow-y-auto"
      style={{ 
        height: '100%',
        paddingBottom: showBottomNav ? '16px' : '0'
      }}
    >
      <div className="p-4 space-y-6">
        {/* Teacher Profile Card */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div className="flex items-center gap-4">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#DBEAFE', color: '#2563EB', fontSize: '28px', fontWeight: 600 }}
            >
              RS
            </div>
            <div className="flex-1">
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
                Rajesh Sharma
              </div>
              <div style={{ fontSize: '14px', color: '#757575', marginBottom: '2px' }}>
                Mathematics Teacher
              </div>
              <div style={{ fontSize: '13px', color: '#757575' }}>
                Delhi Public School
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate({ type: 'classes', tab: 'classes' })}
            className="bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
              Total Classes
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#2563EB' }}>
              4
            </div>
          </button>
          
          <button
            onClick={() => onNavigate({ type: 'assignments', tab: 'assignments' })}
            className="bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
              Assignments
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#F59E0B' }}>
              12
            </div>
          </button>

          <button
            onClick={() => onNavigate({ type: 'performance' })}
            className="bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
              Avg Score
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#10B981' }}>
              85%
            </div>
          </button>

          <button
            onClick={() => onNavigate({ type: 'messages', tab: 'messages' })}
            className="bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
              Messages
            </div>
            <div style={{ fontSize: '32px', fontWeight: 600, color: '#9333EA' }}>
              5
            </div>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Quick Actions
          </div>
          <div className="space-y-2">
            {[
              { label: 'Mark Today\'s Attendance', icon: Calendar, action: () => onNavigate({ type: 'classes' }) },
              { label: 'Create Assignment', icon: Plus, action: () => onNavigate({ type: 'createAssignment' }) },
              { label: 'Post Announcement', icon: Bell, action: () => onNavigate({ type: 'announcements' }) },
              { label: 'AI Assistant', icon: Brain, action: () => onNavigate({ type: 'aiAssistant' }) }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon style={{ width: '20px', height: '20px', color: '#2563EB' }} />
                    <span style={{ fontSize: '14px', color: '#212121' }}>{item.label}</span>
                  </div>
                  <ChevronRight style={{ width: '20px', height: '20px', color: '#9E9E9E' }} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Today's Schedule
          </div>
          <div className="space-y-3">
            {[
              { time: '09:00 AM', class: 'Class 8A - Mathematics', room: 'Room 201' },
              { time: '11:00 AM', class: 'Class 8B - Mathematics', room: 'Room 202' },
              { time: '02:00 PM', class: 'Class 9A - Mathematics', room: 'Room 203' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <Clock style={{ width: '20px', height: '20px', color: '#2563EB' }} />
                <div className="flex-1">
                  <div style={{ fontSize: '14px', fontWeight: 500, color: '#212121' }}>{item.class}</div>
                  <div style={{ fontSize: '12px', color: '#757575' }}>{item.time} • {item.room}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== SCREEN 2: CLASS LIST ==================== */
function ClassListScreen({ onNavigate, showBottomNav }: any) {
  const classes = [
    { id: 1, name: 'Class 8A', subject: 'Mathematics', students: 35, attendance: 94 },
    { id: 2, name: 'Class 8B', subject: 'Mathematics', students: 32, attendance: 91 },
    { id: 3, name: 'Class 9A', subject: 'Mathematics', students: 38, attendance: 89 },
    { id: 4, name: 'Class 9B', subject: 'Mathematics', students: 36, attendance: 92 }
  ];

  return (
    <div 
      className="overflow-y-auto"
      style={{ 
        height: '100%',
        paddingBottom: showBottomNav ? '16px' : '0'
      }}
    >
      <div className="p-4 space-y-3">
        {classes.map((classItem) => (
          <button
            key={classItem.id}
            onClick={() => onNavigate({ type: 'attendance', data: classItem, tab: 'classes' })}
            className="w-full bg-white rounded-lg p-4 text-left"
            style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '4px' }}>
                  {classItem.name}
                </div>
                <div style={{ fontSize: '14px', color: '#757575' }}>
                  {classItem.subject}
                </div>
              </div>
              <ChevronRight style={{ width: '20px', height: '20px', color: '#9E9E9E' }} />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users style={{ width: '16px', height: '16px', color: '#757575' }} />
                <span style={{ fontSize: '13px', color: '#757575' }}>{classItem.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle style={{ width: '16px', height: '16px', color: '#10B981' }} />
                <span style={{ fontSize: '13px', color: '#10B981', fontWeight: 600 }}>{classItem.attendance}% attendance</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ==================== SCREEN 3: ATTENDANCE - FIXED LAYOUT ==================== */
function AttendanceScreen({ classData, onNavigate }: any) {
  const [attendance, setAttendance] = useState<Record<number, string>>({});

  const students = [
    { id: 1, name: 'Rahul Kumar', rollNo: '001' },
    { id: 2, name: 'Priya Sharma', rollNo: '002' },
    { id: 3, name: 'Amit Patel', rollNo: '003' },
    { id: 4, name: 'Sneha Reddy', rollNo: '004' },
    { id: 5, name: 'Vijay Singh', rollNo: '005' },
    { id: 6, name: 'Anjali Gupta', rollNo: '006' },
    { id: 7, name: 'Karan Mehta', rollNo: '007' },
    { id: 8, name: 'Neha Verma', rollNo: '008' }
  ];

  const handleAttendanceToggle = (studentId: number, status: string) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-3">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '2px' }}>
                    {student.name}
                  </div>
                  <div style={{ fontSize: '13px', color: '#757575' }}>
                    Roll No: {student.rollNo}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAttendanceToggle(student.id, 'present')}
                  className="flex-1 py-2 px-3 rounded-lg border transition-all"
                  style={{
                    backgroundColor: attendance[student.id] === 'present' ? '#10B981' : '#FFFFFF',
                    borderColor: attendance[student.id] === 'present' ? '#10B981' : '#E0E0E0',
                    color: attendance[student.id] === 'present' ? '#FFFFFF' : '#757575',
                    fontSize: '13px',
                    fontWeight: attendance[student.id] === 'present' ? 600 : 400
                  }}
                >
                  Present
                </button>
                <button
                  onClick={() => handleAttendanceToggle(student.id, 'absent')}
                  className="flex-1 py-2 px-3 rounded-lg border transition-all"
                  style={{
                    backgroundColor: attendance[student.id] === 'absent' ? '#EF4444' : '#FFFFFF',
                    borderColor: attendance[student.id] === 'absent' ? '#EF4444' : '#E0E0E0',
                    color: attendance[student.id] === 'absent' ? '#FFFFFF' : '#757575',
                    fontSize: '13px',
                    fontWeight: attendance[student.id] === 'absent' ? 600 : 400
                  }}
                >
                  Absent
                </button>
                <button
                  onClick={() => handleAttendanceToggle(student.id, 'late')}
                  className="flex-1 py-2 px-3 rounded-lg border transition-all"
                  style={{
                    backgroundColor: attendance[student.id] === 'late' ? '#F59E0B' : '#FFFFFF',
                    borderColor: attendance[student.id] === 'late' ? '#F59E0B' : '#E0E0E0',
                    color: attendance[student.id] === 'late' ? '#FFFFFF' : '#757575',
                    fontSize: '13px',
                    fontWeight: attendance[student.id] === 'late' ? 600 : 400
                  }}
                >
                  Late
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed Submit Button */}
      <div className="flex-shrink-0 bg-white p-4 border-t" style={{ borderColor: '#E0E0E0', boxShadow: '0 -2px 8px rgba(0,0,0,0.05)' }}>
        <button 
          className="w-full rounded-lg"
          style={{
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 24px',
            boxShadow: '0 2px 8px rgba(37,99,235,0.25)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
}

// Continue with remaining screens...
// (Due to length, I'll add a marker here and continue in next message)

export function AssignmentsScreen({ onNavigate, showBottomNav }: any) {
  return (
    <div 
      className="overflow-y-auto"
      style={{ 
        height: '100%',
        paddingBottom: showBottomNav ? '16px' : '0'
      }}
    >
      <div className="p-4 space-y-4">
        <button
          onClick={() => onNavigate({ type: 'createAssignment' })}
          className="w-full bg-blue-600 text-white rounded-lg p-4 flex items-center justify-center gap-2"
          style={{ fontSize: '16px', fontWeight: 600, boxShadow: '0 2px 8px rgba(37,99,235,0.25)' }}
        >
          <Plus style={{ width: '20px', height: '20px' }} />
          Create New Assignment
        </button>

        <div className="space-y-3">
          {[
            { title: 'Chapter 5: Quadratic Equations', dueDate: 'Mar 15', submissions: 28, total: 35 },
            { title: 'Practice Problems Set 3', dueDate: 'Mar 18', submissions: 32, total: 35 },
            { title: 'Weekly Quiz', dueDate: 'Mar 20', submissions: 35, total: 35 }
          ].map((assignment, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '8px' }}>
                {assignment.title}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Calendar style={{ width: '14px', height: '14px', color: '#757575' }} />
                  <span style={{ fontSize: '13px', color: '#757575' }}>Due: {assignment.dueDate}</span>
                </div>
                <span style={{ fontSize: '13px', color: '#2563EB', fontWeight: 600 }}>
                  {assignment.submissions}/{assignment.total} submitted
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CreateAssignmentScreen({ onNavigate }: any) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <label style={{ fontSize: '12px', color: '#757575', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Assignment Title *
          </label>
          <input
            type="text"
            placeholder="Enter assignment title"
            className="w-full px-4 py-3 rounded-lg border"
            style={{ borderColor: '#E0E0E0', fontSize: '14px', backgroundColor: '#FFFFFF' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#757575', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Instructions *
          </label>
          <textarea
            rows={5}
            placeholder="Enter assignment instructions..."
            className="w-full px-4 py-3 rounded-lg border resize-none"
            style={{ borderColor: '#E0E0E0', fontSize: '14px', backgroundColor: '#FFFFFF' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#757575', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Due Date *
          </label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-lg border"
            style={{ borderColor: '#E0E0E0', fontSize: '14px', backgroundColor: '#FFFFFF' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#757575', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Attach Files (Optional)
          </label>
          <button 
            className="w-full py-3 rounded-lg border flex items-center justify-center gap-2"
            style={{ borderColor: '#E0E0E0', backgroundColor: '#FFFFFF', color: '#2563EB', fontSize: '14px', fontWeight: 600 }}
          >
            <Upload style={{ width: '20px', height: '20px' }} />
            Upload Files
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
        <button 
          className="w-full rounded-lg"
          style={{
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 24px',
            boxShadow: '0 2px 8px rgba(37,99,235,0.2)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Publish Assignment
        </button>
      </div>
    </div>
  );
}

export function PerformanceScreen({ onNavigate, showBottomNav }: any) {
  return (
    <div 
      className="overflow-y-auto"
      style={{ 
        height: '100%',
        paddingBottom: showBottomNav ? '16px' : '0'
      }}
    >
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '14px', color: '#757575', marginBottom: '8px' }}>
            Average Class Score
          </div>
          <div style={{ fontSize: '32px', fontWeight: 600, color: '#2563EB' }}>
            85%
          </div>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp style={{ width: '16px', height: '16px', color: '#10B981' }} />
            <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>+5% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
            Top Performers
          </div>
          <div className="space-y-3">
            {[
              { name: 'Priya Sharma', score: 98, rank: 1 },
              { name: 'Rahul Kumar', score: 95, rank: 2 },
              { name: 'Sneha Reddy', score: 92, rank: 3 }
            ].map((student, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#DBEAFE', color: '#2563EB', fontSize: '14px', fontWeight: 600 }}
                  >
                    {student.rank}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#212121' }}>{student.name}</div>
                  </div>
                </div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#2563EB' }}>
                  {student.score}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnnouncementsScreen({ onNavigate }: any) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <label style={{ fontSize: '12px', color: '#757575', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Announcement Title *
          </label>
          <input
            type="text"
            placeholder="Enter announcement title"
            className="w-full px-4 py-3 rounded-lg border"
            style={{ borderColor: '#E0E0E0', fontSize: '14px', backgroundColor: '#FFFFFF' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: '#757575', display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Message *
          </label>
          <textarea
            rows={6}
            placeholder="Enter your announcement..."
            className="w-full px-4 py-3 rounded-lg border resize-none"
            style={{ borderColor: '#E0E0E0', fontSize: '14px', backgroundColor: '#FFFFFF' }}
          />
        </div>
      </div>

      <div className="flex-shrink-0 bg-white p-4 border-t" style={{ borderColor: '#E0E0E0' }}>
        <button 
          className="w-full rounded-lg"
          style={{
            backgroundColor: '#2563EB',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            padding: '14px 24px',
            boxShadow: '0 2px 8px rgba(37,99,235,0.2)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Publish Announcement
        </button>
      </div>
    </div>
  );
}

export function MessagesScreen({ onNavigate, showBottomNav }: any) {
  const conversations = [
    { id: 1, parent: 'Mrs. Sharma', lastMessage: 'Thank you for the update', time: '10m ago', unread: 0 },
    { id: 2, parent: 'Mr. Patel', lastMessage: 'When is the next test?', time: '1h ago', unread: 2 },
    { id: 3, parent: 'Mrs. Reddy', lastMessage: 'My child needs extra help', time: '3h ago', unread: 1 }
  ];

  return (
    <div 
      className="overflow-y-auto"
      style={{ 
        height: '100%',
        paddingBottom: showBottomNav ? '16px' : '0'
      }}
    >
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
                {conv.parent}
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
                  style={{ backgroundColor: '#2563EB', color: '#FFFFFF', fontSize: '12px', fontWeight: 600 }}
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

export function ChatScreen({ parentData, onNavigate }: any) {
  const messages = [
    { sender: 'teacher', text: 'Hello! Your child is doing well in class.', time: '10:30 AM' },
    { sender: 'parent', text: 'Thank you for the update!', time: '10:35 AM' },
    { sender: 'teacher', text: 'However, they need to focus more on homework.', time: '10:37 AM' }
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className="max-w-[75%] rounded-2xl px-4 py-3"
              style={{
                backgroundColor: msg.sender === 'teacher' ? '#2563EB' : '#FFFFFF',
                color: msg.sender === 'teacher' ? '#FFFFFF' : '#212121',
                boxShadow: msg.sender === 'parent' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none'
              }}
            >
              <div style={{ fontSize: '14px', lineHeight: '20px' }}>
                {msg.text}
              </div>
              <div 
                style={{ 
                  fontSize: '12px', 
                  marginTop: '4px',
                  color: msg.sender === 'teacher' ? 'rgba(255,255,255,0.7)' : '#9E9E9E'
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
            style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
          >
            <Send style={{ width: '18px', height: '18px' }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AIAssistantScreen({ onNavigate, showBottomNav }: any) {
  return (
    <div 
      className="overflow-y-auto"
      style={{ 
        height: '100%',
        paddingBottom: showBottomNav ? '16px' : '0'
      }}
    >
      <div className="p-4 space-y-4">
        <div 
          className="rounded-lg p-4"
          style={{ background: 'linear-gradient(135deg, #DBEAFE 0%, #EDE9FE 100%)', border: '1px solid #BFDBFE' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Brain style={{ width: '20px', height: '20px', color: '#2563EB' }} />
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121' }}>
              AI Insights
            </div>
          </div>
          <div style={{ fontSize: '14px', color: '#212121', lineHeight: '20px' }}>
            Based on recent test scores, 3 students may need additional support in Algebra. Consider scheduling extra help sessions.
          </div>
        </div>

        <div className="bg-white rounded-lg p-4" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#212121', marginBottom: '12px' }}>
            Suggested Actions
          </div>
          <div className="space-y-2">
            {[
              'Schedule remedial class for struggling students',
              'Create practice worksheet for Quadratic Equations',
              'Send progress reports to parents'
            ].map((action, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <CheckCircle style={{ width: '16px', height: '16px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', color: '#212121' }}>{action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}