
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const Offering = () => {
  const handleAddSpecialOffer = () => {
    console.log('Add Special Day Offer clicked');
  };

  const handleCreateCoupon = () => {
    console.log('Create Coupon Code clicked');
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <Gift className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">Offering</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Offering</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 mb-6">
            Set special day offers, apply coupon codes, and manage availability.
          </p>
          
          <div className="flex gap-4">
            <Button onClick={handleAddSpecialOffer}>
              Add Special Day Offer
            </Button>
            <Button variant="secondary" onClick={handleCreateCoupon}>
              Create Coupon Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Offering;
