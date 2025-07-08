
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Calendar, Gift, ArrowRight } from 'lucide-react';

const ClientDashboard = () => {
  const appointments = [
    { id: 1, service: 'Hair Cut', date: '2024-01-15', time: '10:00 AM', status: 'Confirmed' },
    { id: 2, service: 'Massage Therapy', date: '2024-01-18', time: '2:00 PM', status: 'Pending' },
    { id: 3, service: 'Facial Treatment', date: '2024-01-22', time: '11:30 AM', status: 'Confirmed' },
  ];

  const offerings = [
    { id: 1, title: '20% Off First Visit', description: 'New client special offer', expires: '2024-02-01' },
    { id: 2, title: 'Spa Package Deal', description: 'Massage + Facial combo', expires: '2024-01-31' },
    { id: 3, title: 'Loyalty Points 2x', description: 'Double points this month', expires: '2024-01-30' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
      </div>

      {/* Activate Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            Account Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-green-600">Active</p>
              <p className="text-gray-600">Your account is active and ready to use</p>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Verified
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* My Appointments */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-500" />
            My Appointments
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{appointment.service}</h3>
                    <p className="text-gray-600">{appointment.date} at {appointment.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={appointment.status === 'Confirmed' ? 'default' : 'secondary'}>
                    {appointment.status}
                  </Badge>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Offerings / Deals */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-6 w-6 text-purple-500" />
            Top Offerings & Deals
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offer) => (
              <div key={offer.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Expires: {offer.expires}</span>
                  <Button size="sm" variant="outline">
                    Claim
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDashboard;
