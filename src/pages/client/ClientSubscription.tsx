
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, Calendar, Star, Gift } from 'lucide-react';

const ClientSubscription = () => {
  const subscriptions = [
    {
      id: 1,
      name: 'Premium Plan',
      status: 'Active',
      price: '$29.99/month',
      nextBilling: '2024-02-15',
      features: ['Unlimited bookings', 'Priority support', '20% discount']
    },
    {
      id: 2,
      name: 'Spa Package',
      status: 'Active',
      price: '$15.99/month',
      nextBilling: '2024-02-10',
      features: ['Monthly facial', 'Massage discount', 'Product samples']
    }
  ];

  const activeOfferings = [
    {
      id: 1,
      title: '20% Off All Services',
      description: 'Premium member exclusive discount',
      validUntil: '2024-12-31',
      used: 3,
      limit: 10
    },
    {
      id: 2,
      title: 'Free Monthly Facial',
      description: 'Included in Spa Package subscription',
      validUntil: '2024-02-29',
      used: 0,
      limit: 1
    },
    {
      id: 3,
      title: 'Loyalty Points 2x',
      description: 'Double points on all bookings',
      validUntil: '2024-01-31',
      used: 5,
      limit: null
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Subscriptions</h1>
      </div>

      {/* Active Subscriptions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-blue-500" />
          Active Subscriptions
        </h2>
        
        {subscriptions.map((subscription) => (
          <Card key={subscription.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {subscription.name}
                  <Badge className="bg-green-100 text-green-800">{subscription.status}</Badge>
                </CardTitle>
                <p className="text-gray-600 mt-1">{subscription.price}</p>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Features included:</p>
                  <ul className="space-y-1">
                    {subscription.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Next billing date</p>
                    <p className="font-semibold">{subscription.nextBilling}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Active Offerings */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Gift className="h-6 w-6 text-purple-500" />
          Active Offerings & Benefits
        </h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activeOfferings.map((offering) => (
            <Card key={offering.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{offering.title}</CardTitle>
                <p className="text-gray-600 text-sm">{offering.description}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Valid until:</span>
                  <span className="font-medium">{offering.validUntil}</span>
                </div>
                
                {offering.limit && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Usage:</span>
                      <span className="font-medium">{offering.used}/{offering.limit}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(offering.used / offering.limit) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
                
                {!offering.limit && (
                  <div className="text-sm">
                    <span className="text-gray-600">Used: </span>
                    <span className="font-medium">{offering.used} times</span>
                  </div>
                )}
                
                <Button size="sm" className="w-full">
                  Use Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSubscription;
