// components/CopyBox.tsx
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CopyBoxProps {
  value: string;
  className?: string;
}

const CopyBox: React.FC<CopyBoxProps> = ({ value, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(
      "flex items-center justify-between px-3 py-2 rounded-md bg-gray-100 border border-gray-300 w-full",
      className
    )}>
      <span className="text-sm text-gray-600 truncate w-full">{value}</span>
      <button
        onClick={handleCopy}
        className="ml-2 p-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Copy to clipboard"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default CopyBox;