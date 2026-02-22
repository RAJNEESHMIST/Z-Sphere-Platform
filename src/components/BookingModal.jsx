import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, User, Phone, FileText } from 'lucide-react';
import Button from './Button';

import { jsPDF } from 'jspdf';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('select-slot'); // 'select-slot', 'details', 'success'
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    purpose: ''
  });


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
    
    // 1. Generate PDF
    const doc = new jsPDF();
    
    // Add Logo or Header (Text for now)
    doc.setFontSize(22);
    doc.setTextColor(40, 100, 255); // Blue
    doc.text("ZK Rehab Sphere", 20, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("Appointment Confirmation", 20, 35);
    
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 50);
    doc.text(`Age: ${formData.age}`, 20, 60);
    doc.text(`Phone: ${formData.phone}`, 20, 70);
    doc.text(`Address: ${formData.address}`, 20, 80);
    doc.text(`Date: ${selectedSlot?.date}`, 20, 90);
    doc.text(`Time: ${selectedSlot?.time}`, 20, 100);
    
    if (formData.purpose) {
        doc.text("Purpose/Condition:", 20, 115);
        const splitPurpose = doc.splitTextToSize(formData.purpose, 170);
        doc.text(splitPurpose, 20, 125);
    }
    
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Thank you for choosing ZK Rehab Sphere.", 20, 150);
    
    // Save the PDF
    doc.save("ZK-Rehab-Appointment.pdf");

    // 2. Prepare WhatsApp 
    const phoneNumber = "917340820883"; // Updated to current number
    const message = `*New Appointment Request* \n\n*Name:* ${formData.name}\n*Age:* ${formData.age}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Date:* ${selectedSlot?.date}\n*Time:* ${selectedSlot?.time}\n*Purpose:* ${formData.purpose}\n\n_Generated a PDF receipt. Please attach it here._`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // 3. Simulate backend/Processing and Redirect
    setTimeout(() => {
      setLoading(false);
      setStep('success');
      // Redirect in the same tab
      window.location.href = whatsappUrl;
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
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50 shrink-0">
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
        <div className="p-6 overflow-y-auto">
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

                 <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Age</label>
                        <input 
                            type="number" 
                            required
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                            placeholder="Age"
                            value={formData.age}
                            onChange={(e) => setFormData({...formData, age: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                            <input 
                                type="tel" 
                                required
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700"
                                placeholder="+91..."
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                    </div>
                 </div>

                 <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Full Address</label>
                    <textarea 
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700 min-h-[60px] resize-none"
                        placeholder="House No, Street, City..."
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                 </div>

                 <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Purpose / Condition</label>
                    <div className="relative">
                        <FileText className="absolute left-3 top-3 text-slate-400" size={18} />
                        <textarea 
                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-300 text-slate-700 min-h-[80px] resize-none"
                            placeholder="Reason for appointment (e.g., Back pain, Post-surgery)..."
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
             <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-center shrink-0">
                <p className="text-xs text-slate-400">Secure booking powered by ZK Rehab Sphere</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
