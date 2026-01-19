import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { productSchema, breadcrumbSchema } from '../utils/schemas';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  emoji: string;
  desc: string;
  detailedDescription: string;
  ingredients: string[];
  brewingInstructions: string[];
  benefits: string[];
  origin: string;
  caffeineLevel: string;
  steepingTime: string;
  waterTemperature: string;
  reviews: Array<{
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, this would come from API
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Green Tea',
      category: 'green',
      price: 24.99,
      rating: 4.8,
      emoji: '🍃',
      desc: 'Organic green tea from the mountains of China',
      detailedDescription: 'Our Premium Green Tea is carefully handpicked from the misty mountains of Fujian Province, China. This exceptional tea undergoes minimal processing to preserve its natural antioxidants and delicate flavor profile. Each leaf is carefully selected and processed using traditional methods that have been passed down through generations.',
      ingredients: ['Green tea leaves', 'Natural antioxidants', 'Essential minerals'],
      brewingInstructions: [
        'Heat water to 175°F (80°C)',
        'Add 1 teaspoon of tea leaves per cup',
        'Steep for 2-3 minutes',
        'Strain and enjoy'
      ],
      benefits: [
        'Rich in antioxidants',
        'Supports heart health',
        'Boosts metabolism',
        'Enhances mental clarity'
      ],
      origin: 'Fujian Province, China',
      caffeineLevel: 'Low-Medium',
      steepingTime: '2-3 minutes',
      waterTemperature: '175°F (80°C)',
      reviews: [
        {
          id: 1,
          name: 'Sarah Johnson',
          rating: 5,
          comment: 'Absolutely love this tea! The flavor is so fresh and clean. Perfect for morning meditation.',
          date: '2024-10-20'
        },
        {
          id: 2,
          name: 'Michael Chen',
          rating: 4,
          comment: 'Great quality tea with excellent packaging. Will definitely order again.',
          date: '2024-10-18'
        },
        {
          id: 3,
          name: 'Emily Davis',
          rating: 5,
          comment: 'The aroma is incredible and the taste is exactly what I was looking for.',
          date: '2024-10-15'
        }
      ]
    },
    {
      id: 2,
      name: 'Earl Grey Classic',
      category: 'black',
      price: 19.99,
      rating: 4.6,
      emoji: '🫖',
      desc: 'Traditional black tea with bergamot essence',
      detailedDescription: 'Our Earl Grey Classic is a timeless blend of premium Ceylon black tea infused with the finest bergamot oil from Italy. This sophisticated tea offers a perfect balance of robust black tea flavor with the distinctive citrusy aroma of bergamot.',
      ingredients: ['Ceylon black tea', 'Bergamot oil', 'Natural flavoring'],
      brewingInstructions: [
        'Heat water to 200°F (95°C)',
        'Add 1 teaspoon of tea leaves per cup',
        'Steep for 3-5 minutes',
        'Add milk or lemon if desired'
      ],
      benefits: [
        'Rich in flavonoids',
        'Supports immune system',
        'Provides energy boost',
        'Antioxidant properties'
      ],
      origin: 'Ceylon, Sri Lanka',
      caffeineLevel: 'Medium-High',
      steepingTime: '3-5 minutes',
      waterTemperature: '200°F (95°C)',
      reviews: [
        {
          id: 1,
          name: 'James Wilson',
          rating: 4,
          comment: 'Classic Earl Grey taste with excellent bergamot flavor. Perfect for afternoon tea.',
          date: '2024-10-22'
        },
        {
          id: 2,
          name: 'Lisa Brown',
          rating: 5,
          comment: 'This is the best Earl Grey I\'ve ever had. The bergamot is perfectly balanced.',
          date: '2024-10-19'
        }
      ]
    },
    {
      id: 3,
      name: 'Chamomile Herbal',
      category: 'herbal',
      price: 16.99,
      rating: 4.7,
      emoji: '🌼',
      desc: 'Soothing herbal blend for relaxation',
      detailedDescription: 'Our Chamomile Herbal tea is crafted from premium Egyptian chamomile flowers, known for their calming properties and delicate floral taste. This caffeine-free blend is perfect for evening relaxation and promoting restful sleep.',
      ingredients: ['Chamomile flowers', 'Natural herbs', 'Floral essence'],
      brewingInstructions: [
        'Heat water to 200°F (95°C)',
        'Add 1-2 teaspoons of tea per cup',
        'Steep for 5-7 minutes',
        'Enjoy warm or cool'
      ],
      benefits: [
        'Promotes relaxation',
        'Supports better sleep',
        'Soothes digestive system',
        'Natural stress relief'
      ],
      origin: 'Egypt',
      caffeineLevel: 'Caffeine-Free',
      steepingTime: '5-7 minutes',
      waterTemperature: '200°F (95°C)',
      reviews: [
        {
          id: 1,
          name: 'Anna Martinez',
          rating: 5,
          comment: 'Perfect for bedtime! Helps me relax and sleep better. The taste is very pleasant.',
          date: '2024-10-21'
        },
        {
          id: 2,
          name: 'David Lee',
          rating: 4,
          comment: 'Great herbal tea with authentic chamomile flavor. Very soothing.',
          date: '2024-10-17'
        }
      ]
    }
  ];

  useEffect(() => {
    const productId = parseInt(id || '1');
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct || products[0]);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🍃</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://sublimehousetea.com/' },
    { name: 'Products', url: 'https://sublimehousetea.com/products' },
    { name: product.name, url: `https://sublimehousetea.com/product/${product.id}` }
  ];

  const structuredData = [
    productSchema({
      name: product.name,
      description: product.detailedDescription,
      price: product.price,
      image: `https://sublimehousetea.com/images/${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      rating: product.rating,
      reviewCount: product.reviews.length,
      availability: 'InStock',
      brand: 'Sublime House Tea'
    }),
    breadcrumbSchema(breadcrumbs)
  ];

  const handleAddToCart = () => {
    // Add to cart logic here
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  const handleBuyNow = () => {
    // Buy now logic here
    alert(`Proceeding to checkout with ${quantity} ${product.name}(s)!`);
  };

  return (
    <>
      <SEO
        title={`${product.name} - Premium Tea | Sublime House Tea`}
        description={product.detailedDescription}
        keywords={`${product.name}, ${product.category} tea, premium tea, ${product.origin}, tea benefits, ${product.caffeineLevel} caffeine`}
        url={`https://sublimehousetea.com/product/${product.id}`}
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-green-600 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/products" className="text-gray-500 hover:text-green-600 transition-colors">
                Products
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="h-full flex items-center justify-center">
                  <span className="text-9xl filter drop-shadow-lg">{product.emoji}</span>
                </div>
              </div>
              
              {/* Additional Images */}
              <div className="grid grid-cols-4 gap-4">
                {[product.emoji, '🌿', '🍵', '🌸'].map((emoji, index) => (
                  <div
                    key={index}
                    className={`aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedImage === index ? 'ring-4 ring-green-500' : 'hover:shadow-lg'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="h-full flex items-center justify-center">
                      <span className="text-2xl">{emoji}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium capitalize">
                    {product.category} Tea
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                
                <p className="text-lg text-gray-600 mb-6">
                  {product.desc}
                </p>

                <div className="text-4xl font-bold text-green-600 mb-6">
                  ${product.price}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="text-sm font-medium text-gray-700">Origin</div>
                  <div className="text-sm text-gray-600">{product.origin}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-medium text-gray-700">Caffeine</div>
                  <div className="text-sm text-gray-600">{product.caffeineLevel}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">⏱️</div>
                  <div className="text-sm font-medium text-gray-700">Steep Time</div>
                  <div className="text-sm text-gray-600">{product.steepingTime}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">🌡️</div>
                  <div className="text-sm font-medium text-gray-700">Temperature</div>
                  <div className="text-sm text-gray-600">{product.waterTemperature}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'ingredients', label: 'Ingredients' },
                  { id: 'brewing', label: 'Brewing Guide' },
                  { id: 'benefits', label: 'Benefits' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {product.detailedDescription}
                  </p>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
                  <ul className="space-y-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'brewing' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Brewing Instructions</h3>
                  <ol className="space-y-3">
                    {product.brewingInstructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                        <span className="text-green-500 text-xl">🌿</span>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">({product.reviews.length} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="p-6 bg-white rounded-lg shadow-sm border">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-green-600 font-semibold">
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{review.name}</div>
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
