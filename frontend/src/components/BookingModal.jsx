import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, User, Phone, FileText } from 'lucide-react';
import Button from './Button';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('select-slot'); // 'select-slot', 'details', 'success'
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    purpose: ''
  });

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('select-slot');
      setSelectedSlot(null);
      setLoading(false);
      setFormData({ name: '', phone: '', purpose: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Mock Free Slots
  const freeSlots = [
    { id: 1, time: '10:00 AM', date: 'Today' },
    { id: 2, time: '11:30 AM', date: 'Today' },
    { id: 3, time: '02:00 PM', date: 'Today' },
    { id: 4, time: '04:15 PM', date: 'Today' },
    { id: 5, time: '09:00 AM', date: 'Tomorrow' },
    { id: 6, time: '11:00 AM', date: 'Tomorrow' },
  ];

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setStep('details');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate backend call
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="text-primary" size={20} />
            Book Appointment
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {step === 'select-slot' && (
            <div>
              <p className="text-slate-600 mb-4 text-sm">Please select a time slot for your consultation.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {freeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => handleSlotSelect(slot)}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <span className="text-xs text-slate-500 font-medium mb-1 group-hover:text-primary">{slot.date}</span>
                    <span className="text-sm font-bold text-slate-800 group-hover:text-primary-dark">{slot.time}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-3 text-sm text-blue-800 mb-4 border border-blue-100">
                <Clock size={16} />
                <span className="font-semibold">Selected: {selectedSlot?.date} at {selectedSlot?.time}</span>
                <button 
                  type="button" 
                  onClick={() => setStep('select-slot')}
                  className="ml-auto text-xs underline hover:text-blue-900"
                >
                  Change
                </button>
              </div>

              <div className="space-y-3">
                 <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-slate-400" size={18} />
                        <input 
                            type="text" 
                            required
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                        <input 
                            type="tel" 
                            required
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Purpose (Optional)</label>
                    <div className="relative">
                        <FileText className="absolute left-3 top-3 text-slate-400" size={18} />
                        <textarea 
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700 min-h-[80px] resize-none"
                            placeholder="Reason for appointment..."
                            value={formData.purpose}
                            onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                        />
                    </div>
                 </div>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-4 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? 'Confirming...' : 'Confirm Appointment'}
              </Button>
            </form>
          )}

          {step === 'success' && (
            <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Booking Confirmed!</h3>
                <p className="text-slate-600 mb-6 max-w-xs mx-auto">
                    Your appointment for <span className="font-semibold text-slate-900">{selectedSlot?.date} at {selectedSlot?.time}</span> has been successfully scheduled.
                </p>
                <div className="flex gap-3 justify-center">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                </div>
            </div>
          )}
        </div>
        
        {/* Footer info */}
        {step !== 'success' && (
             <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">Secure booking powered by ZK Rehab Sphere</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
