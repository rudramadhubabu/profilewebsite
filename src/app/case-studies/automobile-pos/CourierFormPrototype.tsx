import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export function CourierFormPrototype({ isInView }: { isInView: boolean }) {
  const [currentState, setCurrentState] = useState<
    'default' | 'dropdown' | 'other' | 'validation' | 'filled' | 'verify' | 'insufficient' | 'exit' | 'success'
  >('default');
  const [courier, setCourier] = useState('');
  const [courierName, setCourierName] = useState('');
  const [transitDetails, setTransitDetails] = useState('');
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState('');
  const [comments, setComments] = useState('');
  const [showErrors, setShowErrors] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const courierOptions = [
    'Your Way',
    'BP Distributing',
    'ASAP',
    'Hot Transport',
    'Quick Courier',
    'Quick Ship',
    'Around Town',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!courier || !transitDetails || !reason || !amount) {
      setShowErrors(true);
      setCurrentState('validation');
    } else if (amount === '0' || amount === '0.00') {
      setShowErrors(true);
      setCurrentState('validation');
    } else {
      setShowErrors(false);
      setCurrentState('verify');
    }
  };

  const loadFilledState = () => {
    setCourier('Your Way');
    setTransitDetails('Vehicle shipment ID and logistics description');
    setReason('Customer requires same-day tire delivery');
    setAmount('150.00');
    setComments('Optional notes');
    setShowErrors(false);
    setCurrentState('filled');
  };

  return (
    <div className="space-y-6">
      {/* State Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap gap-2 justify-center mb-8"
      >
        <StateButton active={currentState === 'default'} onClick={() => { setCurrentState('default'); setShowErrors(false); }}>
          Default
        </StateButton>
        <StateButton active={currentState === 'dropdown'} onClick={() => setCurrentState('dropdown')}>
          Dropdown
        </StateButton>
        <StateButton active={currentState === 'other'} onClick={() => { setCourier('Other'); setCurrentState('other'); }}>
          Other Courier
        </StateButton>
        <StateButton active={currentState === 'validation'} onClick={() => { 
          setCourier('');
          setCourierName('');
          setTransitDetails('');
          setReason('');
          setAmount('');
          setComments('');
          setCurrentState('validation'); 
          setShowErrors(true); 
        }}>
          Validation
        </StateButton>
        <StateButton active={currentState === 'filled'} onClick={loadFilledState}>
          Filled
        </StateButton>
        <StateButton active={currentState === 'verify'} onClick={() => setCurrentState('verify')}>
          Verify Funds
        </StateButton>
        <StateButton active={currentState === 'insufficient'} onClick={() => setCurrentState('insufficient')}>
          Insufficient
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
        transition={{ delay: 0.9, duration: 0.7 }}
        className="w-full flex items-center justify-center py-20 relative"
        style={{ backgroundColor: '#1F1F1F' }}
      >
        {/* Top Navigation Bar */}
        <div 
          className="absolute top-0 left-0 right-0 bg-gray-900 border-b border-gray-700 px-8 py-4 flex items-center justify-between"
          style={{ filter: (currentState === 'verify' || currentState === 'insufficient' || currentState === 'exit' || currentState === 'success') ? 'blur(4px)' : 'none' }}
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
            filter: (currentState === 'verify' || currentState === 'insufficient' || currentState === 'exit' || currentState === 'success') ? 'blur(4px)' : 'none',
          }}
        >
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500" style={{ fontWeight: 500 }}>
            Pay Out &gt; Courier
          </div>

          {/* Form Header */}
          <h2 
            className="text-gray-900 mb-8" 
            style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            Courier Payment
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Courier Dropdown */}
            <div className="mb-4">
              <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
                Courier
              </label>
              <div className="relative">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`w-full h-10 px-3 rounded-lg border cursor-pointer flex items-center justify-between ${
                    showErrors && !courier 
                      ? 'border-orange-400 bg-orange-50' 
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                  style={{ fontSize: '14px', transition: 'all 120ms ease' }}
                >
                  <span className={courier ? 'text-gray-900' : 'text-gray-400'}>
                    {courier || 'Select courier'}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-gray-400">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                
                {/* Dropdown Menu */}
                {(dropdownOpen || currentState === 'dropdown') && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.12 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 overflow-hidden"
                  >
                    {courierOptions.map((option) => (
                      <div
                        key={option}
                        className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer text-gray-900 text-sm transition-colors"
                        onClick={() => {
                          setCourier(option);
                          setDropdownOpen(false);
                          if (option === 'Other') {
                            setCurrentState('other');
                          }
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </motion.div>
                )}
                
                {showErrors && !courier && (
                  <ErrorMessage message="Please select a courier" />
                )}
              </div>
            </div>

            {/* Courier Name (appears when Other is selected) */}
            <AnimatePresence>
              {courier === 'Other' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4"
                >
                  <FormField
                    label="Courier Name"
                    value={courierName}
                    onChange={setCourierName}
                    placeholder="Enter courier name"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Transit Details */}
            <div className="mb-4">
              <FormField
                label="Transit Details"
                value={transitDetails}
                onChange={setTransitDetails}
                placeholder="Enter transit details"
                error={showErrors && !transitDetails}
                errorMessage="Please enter transit details"
              />
            </div>

            {/* Reason for Using Courier */}
            <div className="mb-4">
              <FormField
                label="Reason for Using Courier"
                value={reason}
                onChange={setReason}
                placeholder="Reason for courier"
                error={showErrors && !reason}
                errorMessage="Please enter reason for using courier"
              />
            </div>

            {/* Amount Paid */}
            <div className="mb-4">
              <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
                Amount Paid
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className={`w-full h-10 rounded-lg border transition-all focus:outline-none ${
                    showErrors && (!amount || amount === '0' || amount === '0.00')
                      ? 'border-orange-400 bg-orange-50' 
                      : 'border-gray-300 bg-white hover:border-gray-400 focus:border-red-500'
                  }`}
                  style={{ fontSize: '14px', padding: '0 12px 0 24px', transition: 'all 120ms ease' }}
                />
              </div>
              {showErrors && !amount && (
                <ErrorMessage message="Please enter amount paid" />
              )}
              {showErrors && (amount === '0' || amount === '0.00') && (
                <ErrorMessage message="Please enter valid amount" />
              )}
            </div>

            {/* Comments */}
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

        {/* Verify Funds Modal */}
        <AnimatePresence>
          {currentState === 'verify' && (
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
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2" style={{ fontWeight: 600 }}>
                      Verify Funds
                    </h3>
                    <p className="text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                      Verify funds to submit pay-out.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setCurrentState('filled')}
                    className="flex-1 bg-white text-gray-900 rounded-lg border border-gray-300 transition-all"
                    style={{ height: '40px', fontWeight: 500, fontSize: '14px' }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(227, 38, 46, 0.25)' }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setCurrentState('insufficient')}
                    className="flex-1 rounded-lg text-white transition-all"
                    style={{ height: '40px', backgroundColor: '#E3262E', fontWeight: 500, fontSize: '14px' }}
                  >
                    Confirm
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Insufficient Funds Modal */}
        <AnimatePresence>
          {currentState === 'insufficient' && (
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
                      Insufficient Funds
                    </h3>
                    <p className="text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                      Funds not available to submit pay out.
                    </p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(227, 38, 46, 0.25)' }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setCurrentState('filled')}
                  className="w-full rounded-lg text-white transition-all"
                  style={{ height: '40px', backgroundColor: '#E3262E', fontWeight: 500, fontSize: '14px' }}
                >
                  OK
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
                    No, Return to Pay Out
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(227, 38, 46, 0.25)' }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      // Reset all fields
                      setCourier('');
                      setCourierName('');
                      setTransitDetails('');
                      setReason('');
                      setAmount('');
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
                  Courier payment voucher has been successfully recorded
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
  errorMessage = ''
}: { 
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
}) {
  return (
    <div>
      <label className="block text-sm mb-1.5 text-gray-700" style={{ fontWeight: 500 }}>
        {label}
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