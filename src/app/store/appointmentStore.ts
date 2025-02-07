import { create } from 'zustand';

interface AppointmentState {
  selectedDate: string;
  selectedTime: string;
  currentDate: Date;
  setAppointment: (date: string, time: string, current: Date) => void;
  clearAppointment: () => void;
}

export const useAppointmentStore = create<AppointmentState>((set) => ({
  selectedDate: '',
  selectedTime: '',
  currentDate: new Date(),
  setAppointment: (date: string, time: string, current: Date) => 
    set({ selectedDate: date, selectedTime: time, currentDate: current }),
  clearAppointment: () => 
    set({ selectedDate: '', selectedTime: '', currentDate: new Date() })
})); 