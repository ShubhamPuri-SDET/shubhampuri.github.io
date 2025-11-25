import React, { useState, useEffect } from 'react';
import { QUOTE_DATA } from '../../data/quoteData';
import { motion } from 'framer-motion';

const QuoteCalculator: React.FC = () => {
  const [service, setService] = useState('website');
  const [subService, setSubService] = useState('basic');
  const [urgency, setUrgency] = useState('normal');
  const [addOns, setAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const currentService = QUOTE_DATA.services[service as keyof typeof QUOTE_DATA.services];
  const hasSubServices = Object.keys(currentService.subServices).length > 0;

  useEffect(() => {
    if (hasSubServices && !currentService.subServices[subService as keyof typeof currentService.subServices]) {
      setSubService(Object.keys(currentService.subServices)[0]);
    }
  }, [service, hasSubServices, currentService.subServices, subService]);

  useEffect(() => {
    let base = 0;
    if (hasSubServices) {
      const selectedSub = currentService.subServices[subService as keyof typeof currentService.subServices];
      base = selectedSub ? selectedSub.price : 0;
    } else {
      base = currentService.basePrice;
    }

    let addOnsPrice = addOns.reduce((acc, addOnKey) => {
      const addOn = QUOTE_DATA.addOns[addOnKey as keyof typeof QUOTE_DATA.addOns];
      return acc + (addOn ? addOn.price : 0);
    }, 0);

    const urgencyMultiplier = QUOTE_DATA.urgency[urgency as keyof typeof QUOTE_DATA.urgency].multiplier;
    const finalPrice = (base + addOnsPrice) * urgencyMultiplier;
    setTotalPrice(finalPrice);
  }, [service, subService, urgency, addOns, currentService, hasSubServices]);

  const handleAddOnToggle = (addOnKey: string) => {
    setAddOns(prev => 
      prev.includes(addOnKey) 
        ? prev.filter(key => key !== addOnKey)
        : [...prev, addOnKey]
    );
  };

  return (
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8">
        {/* Service Selection */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">1. Select a Service</h3>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {Object.entries(QUOTE_DATA.services).map(([key, value]) => (
              <option key={key} value={key}>{value.name}</option>
            ))}
          </select>
        </div>

        {/* Sub-service Selection */}
        {hasSubServices && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-xl font-semibold text-foreground mb-4">2. Choose a Package</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {Object.entries(currentService.subServices).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSubService(key)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${subService === key ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-300 dark:border-slate-700 hover:border-primary-400'}`}
                >
                  <span className="font-bold block text-foreground">{value.name}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Starts at ₹{value.price.toLocaleString()}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Add-ons */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">3. Select Add-ons</h3>
          <div className="space-y-3">
            {Object.entries(QUOTE_DATA.addOns).map(([key, value]) => (
              <label key={key} className="flex items-center p-4 rounded-lg border border-slate-300 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <input
                  type="checkbox"
                  checked={addOns.includes(key)}
                  onChange={() => handleAddOnToggle(key)}
                  className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-4 flex-grow font-medium text-foreground">{value.name}</span>
                <span className="text-slate-500 dark:text-slate-400">+ ₹{value.price.toLocaleString()}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Urgency */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">4. Delivery Time</h3>
          <div className="flex gap-4">
            {Object.entries(QUOTE_DATA.urgency).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setUrgency(key)}
                className={`flex-1 p-4 rounded-lg border-2 text-center transition-all ${urgency === key ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-slate-300 dark:border-slate-700 hover:border-primary-400'}`}
              >
                <span className="font-bold block text-foreground">{value.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{value.multiplier > 1 ? `(~${(value.multiplier - 1) * 100}% extra)` : 'Standard timeline'}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Price Summary & Form */}
      <div className="sticky top-24 h-fit bg-slate-50 dark:bg-slate-900/50 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-foreground mb-4">Your Quote</h3>
        <div className="text-center mb-6">
          <p className="text-slate-500 dark:text-slate-400">Estimated Price</p>
          <p className="text-5xl font-extrabold text-primary-600 dark:text-primary-400">
            ₹{totalPrice.toLocaleString()}
          </p>
        </div>
        <form className="space-y-4">
          <p className="text-center font-semibold">Submit your request to lock in this price.</p>
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full p-3 rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" placeholder="Your Email" className="w-full p-3 rounded-md border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500" />
          </div>
          <button type="submit" className="w-full px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteCalculator;
