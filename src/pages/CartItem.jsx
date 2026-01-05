import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onUpdateQuantity, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto mt-20 px-4 py-16 md:py-24 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything yet. Let's change that!
          </p>
          <Link
            to="/products"
            className="inline-block bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto mt-20 px-4 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <span className="text-gray-600 ">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>
        </div>

        {/* Summary & Checkout */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-lg">
              <span className="text-gray-700">Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-green-700">${total.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Taxes and shipping will be calculated at checkout
              </p>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 rounded-lg transition-colors text-lg mt-6 shadow-md">
              Proceed to Checkout
            </button>

            <div className="text-center mt-4">
              <Link
                to="/products"
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;