import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard, Users, UserCheck, Calendar, IndianRupee, Bell,
  Search, ChevronDown, Plus, TrendingUp, AlertCircle, CheckCircle,
  School, BookOpen, ClipboardList, MessageSquare, Phone, Mail,
  Award, Target, TrendingDown, BarChart3, Clock, Download,
  Eye, Edit, MoreHorizontal, Filter, Send, Paperclip, Zap, XCircle, FileText
} from 'lucide-react';

// School Admin Dashboard Component
export function SchoolAdminDashboard() {
  const [activePage, setActivePage] = useState('dashboard');

  const pages = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'students', name: 'Student Management', icon: Users },
    { id: 'teachers', name: 'Teacher Management', icon: UserCheck },
    { id: 'attendance', name: 'Attendance', icon: ClipboardList },
    { id: 'fees', name: 'Fee Management', icon: IndianRupee },
    { id: 'exams', name: 'Exam Management', icon: BookOpen },
    { id: 'announcements', name: 'Announcements', icon: Bell }
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border mx-4 md:mx-6 lg:mx-12" style={{ borderColor: '#E5E7EB', height: '800px' }}>
      <div className="relative h-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar pages={pages} activePage={activePage} onPageChange={setActivePage} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navigation */}
          <TopNav />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto" style={{ backgroundColor: '#FAFBFC' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activePage === 'dashboard' && <SchoolDashboardScreen />}
                {activePage === 'students' && <StudentManagementScreen />}
                {activePage === 'teachers' && <TeacherManagementScreen />}
                {activePage === 'attendance' && <AttendanceManagementScreen />}
                {activePage === 'fees' && <FeeManagementScreen />}
                {activePage === 'exams' && <ExamManagementScreen />}
                {activePage === 'announcements' && <AnnouncementsScreen />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ==================== SIDEBAR ==================== */
function Sidebar({ pages, activePage, onPageChange }: any) {
  return (
    <aside className="w-64 bg-white border-r flex-shrink-0" style={{ borderColor: '#E5E7EB' }}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
              <School className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Delhi Public School</div>
              <div className="text-xs text-gray-500">School Admin</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-0.5">
            {pages.map((page: any) => {
              const Icon = page.icon;
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{page.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm font-semibold">
              RA
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">Rajesh Kumar</div>
              <div className="text-xs text-gray-500 truncate">Principal</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ==================== TOP NAV ==================== */
function TopNav() {
  return (
    <div className="h-16 bg-white border-b" style={{ borderColor: '#E5E7EB' }}>
      <div className="h-full px-6 flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students, teachers, records..."
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderColor: '#E5E7EB' }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-xs font-semibold">
              RA
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==================== SCHOOL DASHBOARD SCREEN ==================== */
function SchoolDashboardScreen() {
  const metrics = [
    { label: 'Total Students', value: '1,250', icon: Users, color: '#3B82F6', trend: '+12 this month' },
    { label: 'Total Teachers', value: '85', icon: UserCheck, color: '#10B981', trend: '+3 this month' },
    { label: "Today's Attendance", value: '94.5%', icon: CheckCircle, color: '#8B5CF6', trend: '1,181/1,250 present' },
    { label: 'Pending Fee Payments', value: '₹4,25,000', icon: IndianRupee, color: '#F59E0B', trend: '45 students' },
    { label: 'Upcoming Exams', value: '3', icon: Calendar, color: '#06B6D4', trend: 'Next in 5 days' },
    { label: 'Recent Announcements', value: '8', icon: Bell, color: '#EC4899', trend: 'This week' }
  ];

  const aiInsights = [
    {
      type: 'warning',
      title: 'Students at Academic Risk',
      description: '12 students showing declining performance in mid-term assessments',
      details: 'Recommended: Schedule parent-teacher meetings',
      action: 'View Details'
    },
    {
      type: 'alert',
      title: 'Attendance Anomalies Detected',
      description: 'Class 10-A shows 15% lower attendance than usual this week',
      details: 'Possible flu outbreak or exam stress',
      action: 'Check Records'
    },
    {
      type: 'success',
      title: 'Recommended Teacher Interventions',
      description: 'AI suggests extra math coaching for Class 9-B students',
      details: 'Based on recent test performance patterns',
      action: 'Schedule Session'
    }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">School Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back! Here's your school overview for today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg border"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${metric.color}15` }}>
                  <Icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.trend}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Student Attendance Trend */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Student Attendance Trend</h3>
              <p className="text-sm text-gray-500">Last 7 days</p>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-3">
            {[92, 95, 93, 96, 94, 91, 94.5].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-blue-100 rounded-t-lg relative overflow-hidden" style={{ height: `${height}%` }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-500"
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Collection Analytics */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Fee Collection Analytics</h3>
              <p className="text-sm text-gray-500">Monthly breakdown</p>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-3">
            {[75, 82, 78, 88, 85, 92].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-green-100 rounded-t-lg relative overflow-hidden" style={{ height: `${height}%` }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-green-600 to-green-500"
                  />
                </div>
                <div className="text-xs text-gray-500">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Insights Panel */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
              <p className="text-sm text-gray-500">Automated recommendations for school improvement</p>
            </div>
          </div>

          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 ${
                  insight.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                  insight.type === 'alert' ? 'bg-red-50 border-red-500' :
                  'bg-green-50 border-green-500'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {insight.type === 'warning' && <AlertCircle className="w-5 h-5 text-orange-600" />}
                    {insight.type === 'alert' && <XCircle className="w-5 h-5 text-red-600" />}
                    {insight.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
                    <h4 className="font-semibold text-gray-900 text-sm">{insight.title}</h4>
                  </div>
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                    {insight.action} →
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-2">{insight.description}</p>
                <p className="text-xs text-gray-500">{insight.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Subject Performance Averages</h3>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', score: 85, color: '#3B82F6' },
              { subject: 'Science', score: 78, color: '#10B981' },
              { subject: 'English', score: 92, color: '#8B5CF6' },
              { subject: 'Social Studies', score: 88, color: '#F59E0B' }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{item.subject}</span>
                  <span className="text-sm font-semibold" style={{ color: item.color }}>{item.score}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== STUDENT MANAGEMENT SCREEN ==================== */
function StudentManagementScreen() {
  const students = [
    { name: 'Aarav Sharma', class: '10', section: 'A', parent: 'Rajesh Sharma', attendance: '96%', feeStatus: 'Paid', performance: 92 },
    { name: 'Ananya Reddy', class: '10', section: 'A', parent: 'Priya Reddy', attendance: '94%', feeStatus: 'Paid', performance: 88 },
    { name: 'Arjun Kumar', class: '10', section: 'B', parent: 'Suresh Kumar', attendance: '89%', feeStatus: 'Pending', performance: 75 },
    { name: 'Diya Patel', class: '9', section: 'A', parent: 'Amit Patel', attendance: '98%', feeStatus: 'Paid', performance: 95 },
    { name: 'Rohan Gupta', class: '9', section: 'B', parent: 'Neha Gupta', attendance: '92%', feeStatus: 'Paid', performance: 82 },
    { name: 'Saanvi Singh', class: '8', section: 'A', parent: 'Vikram Singh', attendance: '91%', feeStatus: 'Pending', performance: 78 }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Student Management</h1>
          <p className="text-sm text-gray-500">Manage and monitor all students</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Student
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border mb-6 flex items-center gap-3" style={{ borderColor: '#E5E7EB' }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-lg"
            style={{ borderColor: '#E5E7EB' }}
          />
        </div>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>All Classes</option>
          <option>Class 10</option>
          <option>Class 9</option>
          <option>Class 8</option>
        </select>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>All Sections</option>
          <option>Section A</option>
          <option>Section B</option>
        </select>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>Fee Status</option>
          <option>Paid</option>
          <option>Pending</option>
        </select>
        <select className="px-3 py-2 text-sm border rounded-lg text-gray-600" style={{ borderColor: '#E5E7EB' }}>
          <option>Performance</option>
          <option>Excellent (90+)</option>
          <option>Good (75-89)</option>
          <option>Average (&lt;75)</option>
        </select>
        <button className="px-3 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2" style={{ borderColor: '#E5E7EB' }}>
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
        <table className="w-full">
          <thead className="bg-gray-50 border-b" style={{ borderColor: '#E5E7EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Section</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Parent Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Attendance %</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fee Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Performance</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E5E7EB' }}>
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{student.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.class}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.section}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{student.parent}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.attendance}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${
                    student.feeStatus === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {student.feeStatus}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden max-w-[80px]">
                      <div 
                        className={`h-full rounded-full ${
                          student.performance >= 90 ? 'bg-green-500' :
                          student.performance >= 75 ? 'bg-blue-500' :
                          'bg-orange-500'
                        }`}
                        style={{ width: `${student.performance}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{student.performance}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="View Profile">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Edit Details">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors" title="Contact Parent">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ==================== TEACHER MANAGEMENT SCREEN ==================== */
function TeacherManagementScreen() {
  const teachers = [
    { name: 'Dr. Priya Sharma', subject: 'Mathematics', classes: '10A, 10B, 9A', attendance: '98%', rating: 4.8 },
    { name: 'Mr. Arun Kumar', subject: 'Science', classes: '10A, 9A, 9B', attendance: '96%', rating: 4.6 },
    { name: 'Ms. Sneha Reddy', subject: 'English', classes: '10B, 9B, 8A', attendance: '99%', rating: 4.9 },
    { name: 'Mr. Vikram Singh', subject: 'Social Studies', classes: '10A, 9A, 8A', attendance: '95%', rating: 4.5 }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Teacher Management</h1>
          <p className="text-sm text-gray-500">Monitor teacher performance and workload</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Teacher
        </button>
      </div>

      {/* Teacher Workload Analytics */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Teachers', value: '85', color: '#3B82F6' },
          { label: 'Avg Classes/Teacher', value: '3.2', color: '#10B981' },
          { label: 'Avg Performance Rating', value: '4.7', color: '#8B5CF6' },
          { label: 'Avg Attendance', value: '97%', color: '#F59E0B' }
        ].map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
            <div className="text-sm text-gray-500 mb-2">{metric.label}</div>
            <div className="text-3xl font-semibold text-gray-900" style={{ color: metric.color }}>{metric.value}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
        <table className="w-full">
          <thead className="bg-gray-50 border-b" style={{ borderColor: '#E5E7EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Teacher Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Classes Assigned</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Attendance Record</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Performance Rating</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E5E7EB' }}>
            {teachers.map((teacher, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm font-semibold">
                      {teacher.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <span className="font-medium text-gray-900 text-sm">{teacher.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{teacher.subject}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{teacher.classes}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{teacher.attendance}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-900">{teacher.rating}/5.0</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ==================== ATTENDANCE MANAGEMENT SCREEN ==================== */
function AttendanceManagementScreen() {
  const [selectedClass, setSelectedClass] = useState('10-A');
  
  const students = [
    { id: 1, name: 'Aarav Sharma', rollNo: '101', status: 'present' },
    { id: 2, name: 'Ananya Reddy', rollNo: '102', status: 'present' },
    { id: 3, name: 'Arjun Kumar', rollNo: '103', status: 'absent' },
    { id: 4, name: 'Diya Patel', rollNo: '104', status: 'present' },
    { id: 5, name: 'Rohan Gupta', rollNo: '105', status: 'late' },
    { id: 6, name: 'Saanvi Singh', rollNo: '106', status: 'present' }
  ];

  const summary = {
    total: students.length,
    present: students.filter(s => s.status === 'present').length,
    absent: students.filter(s => s.status === 'absent').length,
    late: students.filter(s => s.status === 'late').length
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Attendance Management</h1>
        <p className="text-sm text-gray-500">Mark and track student attendance</p>
      </div>

      {/* Class Selection */}
      <div className="bg-white p-6 rounded-lg border mb-6" style={{ borderColor: '#E5E7EB' }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Select Class</label>
            <select 
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-2 border rounded-lg text-gray-900 font-medium"
              style={{ borderColor: '#E5E7EB' }}
            >
              <option value="10-A">Class 10 - Section A</option>
              <option value="10-B">Class 10 - Section B</option>
              <option value="9-A">Class 9 - Section A</option>
              <option value="9-B">Class 9 - Section B</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            Date: <span className="font-medium text-gray-900">March 12, 2026</span>
          </div>
        </div>

        {/* Daily Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <div className="text-sm text-blue-600 mb-1">Total Students</div>
            <div className="text-2xl font-semibold text-blue-900">{summary.total}</div>
          </div>
          <div className="p-4 rounded-lg bg-green-50 border border-green-200">
            <div className="text-sm text-green-600 mb-1">Present</div>
            <div className="text-2xl font-semibold text-green-900">{summary.present}</div>
          </div>
          <div className="p-4 rounded-lg bg-red-50 border border-red-200">
            <div className="text-sm text-red-600 mb-1">Absent</div>
            <div className="text-2xl font-semibold text-red-900">{summary.absent}</div>
          </div>
          <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
            <div className="text-sm text-orange-600 mb-1">Late</div>
            <div className="text-2xl font-semibold text-orange-900">{summary.late}</div>
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
        <div className="border-b px-6 py-4" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="font-semibold text-gray-900">Student Attendance List</h3>
        </div>
        <div className="divide-y" style={{ borderColor: '#E5E7EB' }}>
          {students.map((student) => (
            <div key={student.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                  {student.rollNo}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{student.name}</div>
                  <div className="text-xs text-gray-500">Roll No: {student.rollNo}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  student.status === 'present' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  Present
                </button>
                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  student.status === 'absent' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  Absent
                </button>
                <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  student.status === 'late' 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  Late
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t px-6 py-4 flex justify-end" style={{ borderColor: '#E5E7EB' }}>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Submit Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==================== FEE MANAGEMENT SCREEN ==================== */
function FeeManagementScreen() {
  const invoices = [
    { student: 'Aarav Sharma', class: '10-A', feeType: 'Tuition Fee', amount: '₹15,000', dueDate: 'Mar 15, 2026', status: 'Paid' },
    { student: 'Arjun Kumar', class: '10-B', feeType: 'Tuition Fee', amount: '₹15,000', dueDate: 'Mar 15, 2026', status: 'Pending' },
    { student: 'Diya Patel', class: '9-A', feeType: 'Exam Fee', amount: '₹2,500', dueDate: 'Mar 20, 2026', status: 'Paid' },
    { student: 'Rohan Gupta', class: '9-B', feeType: 'Tuition Fee', amount: '₹14,000', dueDate: 'Mar 15, 2026', status: 'Pending' }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Fee Management</h1>
        <p className="text-sm text-gray-500">Track and manage school fee collections</p>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="text-sm text-gray-500 mb-2">Total Fees Collected</div>
          <div className="text-3xl font-semibold text-green-600 mb-1">₹1,48,75,000</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5% vs last month</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="text-sm text-gray-500 mb-2">Pending Fees</div>
          <div className="text-3xl font-semibold text-orange-600 mb-1">₹4,25,000</div>
          <div className="text-sm text-gray-600">45 students</div>
        </div>
        <div className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
          <div className="text-sm text-gray-500 mb-2">Monthly Revenue</div>
          <div className="text-3xl font-semibold text-blue-600 mb-1">₹18,75,000</div>
          <div className="text-sm text-gray-600">March 2026</div>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#E5E7EB' }}>
        <div className="border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="font-semibold text-gray-900">Fee Invoices</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Invoice
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b" style={{ borderColor: '#E5E7EB' }}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Class</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Fee Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Due Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment Status</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#E5E7EB' }}>
            {invoices.map((invoice, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.student}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.class}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.feeType}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">{invoice.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.dueDate}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${
                    invoice.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {invoice.status === 'Pending' && (
                      <>
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded transition-colors flex items-center gap-1">
                          <Send className="w-3 h-3" />
                          Send Reminder
                        </button>
                        <button className="px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-50 rounded transition-colors flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Record Payment
                        </button>
                      </>
                    )}
                    {invoice.status === 'Paid' && (
                      <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded transition-colors flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        View Receipt
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ==================== EXAM MANAGEMENT SCREEN ==================== */
function ExamManagementScreen() {
  const exams = [
    { subject: 'Mathematics', class: '10-A', date: 'Mar 18, 2026', time: '10:00 AM', duration: '3 hours', status: 'Scheduled' },
    { subject: 'Science', class: '10-A', date: 'Mar 20, 2026', time: '10:00 AM', duration: '3 hours', status: 'Scheduled' },
    { subject: 'English', class: '10-A', date: 'Mar 22, 2026', time: '10:00 AM', duration: '3 hours', status: 'Scheduled' }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Exam Management</h1>
          <p className="text-sm text-gray-500">Schedule exams and manage results</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Schedule Exam
        </button>
      </div>

      {/* Exam Schedule */}
      <div className="bg-white rounded-lg border mb-8" style={{ borderColor: '#E5E7EB' }}>
        <div className="border-b px-6 py-4" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="font-semibold text-gray-900">Upcoming Exams</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {exams.map((exam, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{exam.subject} - {exam.class}</div>
                    <div className="text-sm text-gray-500">{exam.date} at {exam.time} • {exam.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700">
                    {exam.status}
                  </span>
                  <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                    <Edit className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Result Analytics */}
      <div className="bg-white rounded-lg border" style={{ borderColor: '#E5E7EB' }}>
        <div className="border-b px-6 py-4" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="font-semibold text-gray-900">Student Result Analytics</h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">Class Average Scores</h4>
              <div className="space-y-3">
                {[
                  { class: 'Class 10-A', score: 85 },
                  { class: 'Class 10-B', score: 78 },
                  { class: 'Class 9-A', score: 82 },
                  { class: 'Class 9-B', score: 76 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{item.class}</span>
                      <span className="text-sm font-semibold text-gray-900">{item.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-4">Top Performers</h4>
              <div className="space-y-3">
                {[
                  { name: 'Diya Patel', score: 98, class: '9-A' },
                  { name: 'Aarav Sharma', score: 95, class: '10-A' },
                  { name: 'Ananya Reddy', score: 93, class: '10-A' },
                  { name: 'Saanvi Singh', score: 91, class: '8-A' }
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Award className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-xs text-gray-500">{student.class}</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-600">{student.score}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== ANNOUNCEMENTS SCREEN ==================== */
function AnnouncementsScreen() {
  const announcements = [
    { title: 'Annual Sports Day', date: 'Mar 10, 2026', audience: 'All Students', message: 'Annual sports day will be held on March 25th...' },
    { title: 'Parent-Teacher Meeting', date: 'Mar 8, 2026', audience: 'Parents', message: 'PTM scheduled for March 20th from 2 PM to 5 PM...' },
    { title: 'Staff Training', date: 'Mar 5, 2026', audience: 'Teachers', message: 'Mandatory training session on new teaching methods...' }
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Announcements</h1>
          <p className="text-sm text-gray-500">Post and manage school communications</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Announcement
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Create Announcement */}
        <div className="lg:col-span-2 bg-white rounded-lg border p-6" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="font-semibold text-gray-900 mb-4">Create New Announcement</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Title</label>
              <input
                type="text"
                placeholder="Enter announcement title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: '#E5E7EB' }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Audience</label>
              <select className="w-full px-4 py-2 border rounded-lg" style={{ borderColor: '#E5E7EB' }}>
                <option>All Students</option>
                <option>Teachers</option>
                <option>Parents</option>
                <option>Specific Classes</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
              <textarea
                rows={6}
                placeholder="Enter your announcement message..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ borderColor: '#E5E7EB' }}
              />
            </div>
            <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Post Announcement
            </button>
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E5E7EB' }}>
          <h3 className="font-semibold text-gray-900 mb-4">Recent Announcements</h3>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div key={index} className="pb-4 border-b last:border-0" style={{ borderColor: '#E5E7EB' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 text-sm mb-1">{announcement.title}</div>
                    <div className="text-xs text-gray-500 mb-2">{announcement.date} • {announcement.audience}</div>
                    <div className="text-xs text-gray-600 line-clamp-2">{announcement.message}</div>
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