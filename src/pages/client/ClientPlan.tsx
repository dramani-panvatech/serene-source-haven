
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, Crown } from 'lucide-react';

const ClientPlan = () => {
  const currentPlan = {
    name: 'Premium Plan',
    price: '$29.99/month',
    features: ['Unlimited bookings', 'Priority support', '20% discount on services', 'Cancel anytime'],
    nextBilling: '2024-02-15'
  };

  const availablePlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$9.99/month',
      icon: Star,
      features: ['5 bookings per month', 'Standard support', '10% discount on services'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '$29.99/month',
      icon: Crown,
      features: ['Unlimited bookings', 'Priority support', '20% discount on services', 'Cancel anytime'],
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP Plan',
      price: '$49.99/month',
      icon: Crown,
      features: ['Unlimited bookings', '24/7 support', '30% discount on services', 'Exclusive access', 'Free cancellations'],
      popular: false
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Plans & Subscription</h1>
      </div>

      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">Current Plan</TabsTrigger>
          <TabsTrigger value="new">Choose New Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Current Plan Details
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentPlan.name}</h3>
                  <p className="text-gray-600">{currentPlan.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Next billing date</p>
                  <p className="font-semibold">{currentPlan.nextBilling}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Plan Features</h4>
                <div className="grid gap-3">
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button variant="outline">Manage Subscription</Button>
                <Button variant="destructive">Cancel Plan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {availablePlans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <plan.icon className={`h-12 w-12 ${plan.popular ? 'text-blue-500' : 'text-gray-400'}`} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-gray-900">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.id === 'premium' ? 'Current Plan' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientPlan;
