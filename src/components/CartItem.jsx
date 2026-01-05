import React from 'react';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-5 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors">
      {/* Left side - product info */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* Optional: small thumbnail */}
        {item.image && (
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-md overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="min-w-0">
          <h3 className="font-medium text-gray-900 truncate text-base sm:text-lg">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 mt-0.5">
            ${item.price.toFixed(2)} × {item.quantity}
          </p>
        </div>
      </div>

      {/* Right side - controls */}
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
        {/* Subtotal */}
        <div className="text-right min-w-[90px]">
          <span className="text-xs text-gray-500 block">Subtotal</span>
          <span className="font-semibold text-gray-900">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>

        {/* Quantity */}
        <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <MinusIcon className="w-4 h-4" />
          </button>

          <span className="px-4 py-2 min-w-12 text-center font-medium text-gray-800">
            {item.quantity}
          </span>

          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Remove */}
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 cursor-pointer rounded-full transition-colors"
          title="Remove item"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;