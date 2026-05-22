import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, X } from 'lucide-react';

export function BuildingDamageFormPrototype({ isInView }: { isInView: boolean }) {
  const [currentState, setCurrentState] = useState<
    'default' | 'validation' | 'repairsDropdown' | 'repairsNo' | 'repairsYes' | 
    'completedByDropdown' | 'vendor' | 'vendorValidation' | 'amountValidation' | 
    'filled' | 'exit' | 'success'
  >('default');
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfIncident, setDateOfIncident] = useState('');
  const [repairsCompleted, setRepairsCompleted] = useState('');
  const [repairsCompletedDate, setRepairsCompletedDate] = useState('');
  const [repairsCompletedBy, setRepairsCompletedBy] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [comments, setComments] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [repairsDropdownOpen, setRepairsDropdownOpen] = useState(false);
  const [completedByDropdownOpen, setCompletedByDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !phoneNumber || !dateOfIncident || !repairsCompleted || !amountReceived) {
      setShowErrors(true);
      setCurrentState('validation');
    } else if (amountReceived === '0' || amountReceived === '0.00') {
      setShowErrors(true);
      setCurrentState('amountValidation');
    } else if (repairsCompleted === 'Yes' && repairsCompletedBy === 'Vendor' && !vendorName) {
      setShowErrors(true);
      setCurrentState('vendorValidation');
    } else {
      setShowErrors(false);
      setCurrentState('success');
    }
  };

  const loadFilledState = () => {
    setFirstName('Esther');
    setLastName('Howard');
    setCompanyName('');
    setPhoneNumber('551-555-1234');
    setDateOfIncident('04/24/2020');
    setRepairsCompleted('Yes');
    setRepairsCompletedDate('05/24/2020');
    setRepairsCompletedBy('Vendor');
    setVendorName('Jon Co');
    setAmountReceived('50.00');
    setComments('Optional notes');
    setShowErrors(false);
    setCurrentState('filled');
  };

  const loadRepairsNo = () => {
    setRepairsCompleted('No');
    setRepairsCompletedDate('');
    setRepairsCompletedBy('');
    setVendorName('');
    setCurrentState('repairsNo');
  };

  const loadRepairsYes = () => {
    setRepairsCompleted('Yes');
    setCurrentState('repairsYes');
  };

  const loadVendorState = () => {
    setRepairsCompleted('Yes');
    setRepairsCompletedBy('Vendor');
    setCurrentState('vendor');
  };

  return (
    <div className="space-y-6">
      {/* State Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="flex flex-wrap gap-2 justify-center mb-8"
      >
        <StateButton active={currentState === 'default'} onClick={() => { setCurrentState('default'); setShowErrors(false); }}>
          Default
        </StateButton>
        <StateButton active={currentState === 'validation'} onClick={() => { 
          setFirstName('');
          setLastName('');
          setCompanyName('');
          setPhoneNumber('');
          setDateOfIncident('');
          setRepairsCompleted('');
          setRepairsCompletedDate('');
          setRepairsCompletedBy('');
          setVendorName('');
          setAmountReceived('');
          setComments('');
          setCurrentState('validation'); 
          setShowErrors(true); 
        }}>
          Validation
        </StateButton>
        <StateButton active={currentState === 'repairsDropdown'} onClick={() => setCurrentState('repairsDropdown')}>
          Repairs Dropdown
        </StateButton>
        <StateButton active={currentState === 'repairsNo'} onClick={loadRepairsNo}>
          Repairs = No
        </StateButton>
        <StateButton active={currentState === 'repairsYes'} onClick={loadRepairsYes}>
          Repairs = Yes
        </StateButton>
        <StateButton active={currentState === 'completedByDropdown'} onClick={() => setCurrentState('completedByDropdown')}>
          Completed By
        </StateButton>
        <StateButton active={currentState === 'vendor'} onClick={loadVendorState}>
          Vendor
        </StateButton>
        <StateButton active={currentState === 'vendorValidation'} onClick={() => { setCurrentState('vendorValidation'); setShowErrors(true); }}>
          Vendor Error
        </StateButton>
        <StateButton active={currentState === 'amountValidation'} onClick={() => { setCurrentState('amountValidation'); setShowErrors(true); setAmountReceived('0.00'); }}>
          Amount Error
        </StateButton>
        <StateButton active={currentState === 'filled'} onClick={loadFilledState}>
          Filled
        </StateButton>
        <StateButton active={currentState === 'exit'} onClick={() => setCurrentState('exit')}>
          Exit Modal
        </StateButton>
        <StateButton active={currentState === 'success'} onClick={() => setCurrentState('success')}>
          Success
        </StateButton>
      </motion.div>

      {/* Demo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.6, duration: 0.7 }}
        className="w-full flex items-center justify-center py-20 relative"
        style={{ backgroundColor: '#1F1F1F' }}
      >
        {/* Top Navigation Bar */}
        <div 
          className="absolute top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 px-8 py-4 flex items-center justify-between"
          style={{ filter: currentState === 'exit' ? 'blur(4px)' : 'none' }}
        >
          <div className="text-white" style={{ fontSize: '16px', fontWeight: 500 }}>
            Vouchers
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70 text-sm">John Doe</span>
            <button 
              className="text-white/70 hover:text-white text-sm transition-colors"
              onClick={() => setCurrentState('exit')}
            >
              Exit
            </button>
          </div>
        </div>

        {/* Centered Form Card */}
        <div
          className="bg-white rounded-xl shadow-2xl relative mt-16"
          style={{
            width: '820px',
            maxWidth: '90%',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            filter: currentState === 'exit' ? 'blur(4px)' : 'none',
          }}
        >
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500" style={{ fontWeight: 500 }}>
            Pay In &gt; Building Damage
          </div>

          {/* Form Header */}
          <h2 
            className="text-gray-900 mb-8" 
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            Customer Details
          </h2>

          <form onSubmit={handleSubmit}>
            {/* First Row - 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <FormField
                label="First Name"
                value={firstName}
                onChange={setFirstName}
                error={showErrors && !firstName && currentState === 'validation'}
                errorMessage="Please enter first name"
              />
              <FormField
                label="Last Name"
                value={lastName}
                onChange={setLastName}
                error={showErrors && !lastName && currentState === 'validation'}
                errorMessage="Please enter last name"
              />
              <FormField
                label="Company Name"
                value={companyName}
                onChange={setCompanyName}
                optional
              />
              <FormField
                label="Phone Number"
                value={phoneNumber}
                onChange={setPhoneNumber}
                error={showErrors && !phoneNumber && currentState === 'validation'}
                errorMessage="Please enter phone number"
              />
            </div>

            {/* Second Row - 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <FormField
                label="Date of Incident"
                value={dateOfIncident}
                onChange={setDateOfIncident}
                placeholder="MM/DD/YYYY"
                error={showErrors && !dateOfIncident && currentState === 'validation'}
                errorMessage="Please enter date of incident"
              />
              
              {/* Repairs Completed Dropdown */}
              <div className="relative">
                <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
                  Repairs Completed?
                </label>
                <div 
                  className={`w-full h-10 px-3 rounded-lg border cursor-pointer flex items-center justify-between ${
                    showErrors && !repairsCompleted && currentState === 'validation' 
                      ? 'border-orange-400 bg-orange-50' 
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                  onClick={() => setRepairsDropdownOpen(!repairsDropdownOpen)}
                  style={{ fontSize: '14px', transition: 'all 120ms ease' }}
                >
                  <span className={repairsCompleted ? 'text-gray-900' : 'text-gray-400'}>
                    {repairsCompleted || 'Select'}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-gray-400">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                
                {/* Dropdown Menu */}
                {(repairsDropdownOpen || currentState === 'repairsDropdown') && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden"
                  >
                    {['Yes', 'No'].map((option) => (
                      <div
                        key={option}
                        className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-900 text-sm transition-colors"
                        onClick={() => {
                          setRepairsCompleted(option);
                          setRepairsDropdownOpen(false);
                          if (option === 'No') {
                            setRepairsCompletedDate('');
                            setRepairsCompletedBy('');
                            setVendorName('');
                          }
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
                
                {showErrors && !repairsCompleted && currentState === 'validation' && (
                  <ErrorMessage message="Please select repairs completed" />
                )}
              </div>
            </div>

            {/* Conditional Fields - Repairs Completed = Yes */}
            <AnimatePresence>
              {repairsCompleted === 'Yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
                >
                  <FormField
                    label="Repairs Completed Date"
                    value={repairsCompletedDate}
                    onChange={setRepairsCompletedDate}
                    placeholder="MM/DD/YYYY"
                  />
                  
                  {/* Repairs Completed By Dropdown */}
                  <div className="relative">
                    <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
                      Repairs Completed By
                    </label>
                    <div 
                      className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white hover:border-gray-400 cursor-pointer flex items-center justify-between"
                      onClick={() => setCompletedByDropdownOpen(!completedByDropdownOpen)}
                      style={{ fontSize: '14px', transition: 'all 120ms ease' }}
                    >
                      <span className={repairsCompletedBy ? 'text-gray-900' : 'text-gray-400'}>
                        {repairsCompletedBy || 'Select'}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" className="text-gray-400">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    
                    {/* Dropdown Menu */}
                    {(completedByDropdownOpen || currentState === 'completedByDropdown') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.12 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden"
                      >
                        {['Vendor', 'Facilities'].map((option) => (
                          <div
                            key={option}
                            className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-900 text-sm transition-colors"
                            onClick={() => {
                              setRepairsCompletedBy(option);
                              setCompletedByDropdownOpen(false);
                              if (option !== 'Vendor') {
                                setVendorName('');
                              }
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Vendor Name Field - Only if Vendor selected */}
            <AnimatePresence>
              {repairsCompletedBy === 'Vendor' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4"
                >
                  <FormField
                    label="Vendor Name"
                    value={vendorName}
                    onChange={setVendorName}
                    error={showErrors && !vendorName && currentState === 'vendorValidation'}
                    errorMessage="Please enter vendor name"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Amount Received */}
            <div className="mb-4">
              <FormField
                label="Amount Received"
                value={amountReceived}
                onChange={setAmountReceived}
                placeholder="$0.00"
                error={(showErrors && !amountReceived && currentState === 'validation') || (currentState === 'amountValidation')}
                errorMessage={currentState === 'amountValidation' ? 'Please enter valid amount' : 'Please enter amount received'}
              />
            </div>

            {/* Comments Textarea */}
            <div className="mb-8">
              <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
                Comments
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value.slice(0, 256))}
                className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white hover:border-gray-400 focus:border-red-500 focus:outline-none resize-none"
                style={{ fontSize: '14px', minHeight: '80px', transition: 'all 120ms ease' }}
                placeholder="Optional notes"
                maxLength={256}
              />
              <div className="text-xs text-gray-400 mt-1" style={{ textAlign: 'right' }}>
                {comments.length} / 256 characters
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                whileHover={{ scale: 1.01, borderColor: '#000' }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setCurrentState('exit')}
                className="bg-white text-gray-900 rounded-lg transition-all duration-200"
                style={{
                  width: '120px',
                  height: '40px',
                  border: '1.5px solid #D1D5DB',
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(227, 38, 46, 0.25)' }}
                whileTap={{ scale: 0.99 }}
                className="flex-1 rounded-lg text-white transition-all duration-200"
                style={{
                  height: '40px',
                  backgroundColor: '#E3262E',
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>

        {/* Exit Confirmation Modal */}
        <AnimatePresence>
          {currentState === 'exit' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 50 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.3 }}
                className="bg-white rounded-xl shadow-2xl p-8 mx-4"
                style={{ width: '480px', maxWidth: '90%' }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2" style={{ fontWeight: 600 }}>
                      Are you sure you want to clear all saved data?
                    </h3>
                    <p className="text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                      Any changes made will be lost.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setCurrentState('default')}
                    className="flex-1 bg-white text-gray-900 rounded-lg border border-gray-300 transition-all"
                    style={{ height: '40px', fontWeight: 500, fontSize: '14px' }}
                  >
                    No, Return to Pay In
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(227, 38, 46, 0.25)' }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      // Reset all fields
                      setFirstName('');
                      setLastName('');
                      setCompanyName('');
                      setPhoneNumber('');
                      setDateOfIncident('');
                      setRepairsCompleted('');
                      setRepairsCompletedDate('');
                      setRepairsCompletedBy('');
                      setVendorName('');
                      setAmountReceived('');
                      setComments('');
                      setCurrentState('default');
                    }}
                    className="flex-1 rounded-lg text-white transition-all"
                    style={{ height: '40px', backgroundColor: '#E3262E', fontWeight: 500, fontSize: '14px' }}
                  >
                    Yes, Exit
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Modal */}
        <AnimatePresence>
          {currentState === 'success' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ zIndex: 50, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.3 }}
                className="bg-white rounded-xl shadow-2xl p-8 mx-4 text-center"
                style={{ width: '400px', maxWidth: '90%' }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl text-gray-900 mb-2" style={{ fontWeight: 600 }}>
                  Voucher Saved
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Building damage voucher has been successfully recorded
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentState('default')}
                  className="w-full rounded-lg text-white transition-all"
                  style={{ height: '40px', backgroundColor: '#E3262E', fontWeight: 500, fontSize: '14px' }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Form Field Component
function FormField({ 
  label, 
  value, 
  onChange, 
  placeholder = '', 
  error = false, 
  errorMessage = '',
  optional = false
}: { 
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
        {label} {optional && <span className="text-gray-400 text-xs">(Optional)</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full h-10 px-3 rounded-lg border transition-all ${
          error 
            ? 'border-orange-400 bg-orange-50' 
            : 'border-gray-300 bg-white hover:border-gray-400 focus:border-red-500'
        } focus:outline-none`}
        style={{ fontSize: '14px', transition: 'all 120ms ease' }}
      />
      {error && errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
}

// Error Message Component
function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <AlertTriangle className="w-3.5 h-3.5 text-orange-600" />
      <span className="text-xs text-orange-600" style={{ fontWeight: 500 }}>
        {message}
      </span>
    </div>
  );
}

// State Button Component
function StateButton({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all ${
        active 
          ? 'bg-red-600 text-white' 
          : 'bg-white/10 text-white/70 hover:bg-white/20'
      }`}
      style={{ fontSize: '13px', fontWeight: 500 }}
    >
      {children}
    </motion.button>
  );
}