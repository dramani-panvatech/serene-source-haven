
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const ClientBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: '1', name: 'Hair Cut', duration: '30 min', price: '$25' },
    { id: '2', name: 'Hair Styling', duration: '45 min', price: '$35' },
    { id: '3', name: 'Massage Therapy', duration: '60 min', price: '$80' },
    { id: '4', name: 'Facial Treatment', duration: '90 min', price: '$120' },
    { id: '5', name: 'Manicure', duration: '45 min', price: '$40' },
    { id: '6', name: 'Pedicure', duration: '60 min', price: '$50' },
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const handleBooking = () => {
    if (selectedDate && selectedService && selectedTime) {
      console.log('Booking:', { selectedDate, selectedService, selectedTime });
      alert('Booking confirmed!');
    } else {
      alert('Please select all required fields');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <CalendarIcon className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Book Appointment</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Calendar Section */}
        <Card>
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border pointer-events-auto"
              disabled={(date) => date < new Date()}
            />
          </CardContent>
        </Card>

        {/* Booking Details */}
        <div className="space-y-6">
          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {service.duration}
                        </p>
                      </div>
                      <Badge variant="outline">{service.price}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className="text-xs"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Booking Summary */}
          {selectedDate && selectedService && selectedTime && (
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{selectedDate.toDateString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">
                      {services.find(s => s.id === selectedService)?.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-lg">
                      {services.find(s => s.id === selectedService)?.price}
                    </span>
                  </div>
                </div>

                <Button onClick={handleBooking} className="w-full">
                  Confirm Booking
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientBooking;
