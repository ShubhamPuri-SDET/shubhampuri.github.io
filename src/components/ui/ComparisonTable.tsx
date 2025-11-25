import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ComparisonTableProps {
  data: {
    title: string;
    tiers: { name: string; id: string; popular?: boolean }[];
    features: { feature: string; values: { [key: string]: string | boolean } }[];
  };
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => {
  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? <Check className="h-6 w-6 text-green-500 mx-auto" /> : <X className="h-6 w-6 text-slate-400 mx-auto" />;
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-center text-foreground mb-10">{data.title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-center">
          <thead>
            <tr>
              <th className="text-left p-4 w-1/3">Features</th>
              {data.tiers.map(tier => (
                <th key={tier.id} className={cn("p-4 w-1/4 relative", tier.popular && "text-primary-500")}>
                  {tier.popular && <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold text-white bg-primary-500 rounded-full">POPULAR</div>}
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {data.features.map(({ feature, values }) => (
              <tr key={feature}>
                <td className="text-left p-4 font-medium text-foreground">{feature}</td>
                {data.tiers.map(tier => (
                  <td key={tier.id} className={cn("p-4", tier.popular && "bg-primary-50/50 dark:bg-primary-900/10")}>
                    {renderValue(values[tier.id])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-slate-200 dark:border-slate-700">
                <td className="p-4"></td>
                {data.tiers.map(tier => (
                    <td key={tier.id} className={cn("p-4", tier.popular && "bg-primary-50/50 dark:bg-primary-900/10")}>
                        <a href="/quote" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700">
                            Choose Plan
                        </a>
                    </td>
                ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
