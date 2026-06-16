const GENERIC_SUNNIES_PLACEHOLDER = 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/df6b2bd997b31efb08d5f9f16f82ba89.jpg';

const rawSunnies = [
  { 
    name: "Advanced polarized", 
    price: 20.00, 
    image: "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e1446b98e8dd8dbdd3a5c3a084aa4587.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e1446b98e8dd8dbdd3a5c3a084aa4587.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2d863d6f9b518f840fb69b68cbbe32b6.jpg"
    ]
  },
  {
    name: "Anti Blue & Polarized",
    price: 15.00,
    image: "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f88467d800bed47ca809add8e0842a09.jpg",
    images: [
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f88467d800bed47ca809add8e0842a09.jpg",
      "https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/dfdf85257f614765fd8756110336fb79.jpg"
    ],
    description: "Advanced anti-blue light protection combined with polarized lenses. Reduces digital eye strain while eliminating glare for crystal-clear vision.",
    variations: [
      { name: "Clear Frame", imageIndex: 0 },
      { name: "Black Frame", imageIndex: 1 }
    ]
  },
  {
    id: 'anti-blue-light-glasses',
    name: 'Anti Blue Light Glasses for Phone and Laptop Use',
    price: 15.00,
    category: 'blue-light',
    description: 'Protect your eyes from blue light emitted by screens with these stylish anti-blue light glasses. Perfect for phone and laptop use.',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4824cd9e9ef2cfe9ca21dce90ccd4b31.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4824cd9e9ef2cfe9ca21dce90ccd4b31.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/42de985ea84fc256b40b972b8c59d5bd.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/846cc9242f2adbf5907cdc47b428430a.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5d38e95ca74b4f28645347a0a1bb1e97.jpg'
    ],
    frameVariations: [
      {id: 'black-silver', name: 'Black and Silver Frame', imageIndex: 0},
      {id: 'tortoiseshell', name: 'Tortoiseshell Brown Frame', imageIndex: 1},
      {id: 'black-square', name: 'Black Square Frame', imageIndex: 2},
      {id: 'gray-black', name: 'Gray and Black Frame', imageIndex: 3}
    ]
  },
  {
    name: 'Double Beam',
    price: 10.00,
    category: 'sunglasses',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5b01c7df1443c6443f71d4235a2c813a.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5b01c7df1443c6443f71d4235a2c813a.jpg'
    ],
    description: 'Classic black hexagonal frame sunglasses with brown polarized lenses'
  },
  {
    name: 'Double Sunglasses',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/674682a5b387160ed5341b763e0f07b8.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/674682a5b387160ed5341b763e0f07b8.jpg'
    ],
    description: 'Stylish double sunglasses featuring a unique frame design for a bold look and premium UV protection.'
  },
  {
    id: 'frameless-sunglasses',
    name: 'Frameless',
    price: 15.00,
    category: 'frameless',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/6ded6741567c712317d926ed02b86b6a.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/6ded6741567c712317d926ed02b86b6a.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/a6c02a3a9d8468cd378298d6073d0672.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/36883ab8e54d2d151fcafa6bc794e854.jpg'
    ],
    description: 'Elegant frameless sunglasses with premium gold metal bridge and hinges. Features wood-grain arms and available in multiple lens colors including brown gradient, clear, and dark purple. Perfect for a sophisticated, minimalist look.'
  },
  {
    id: 'gm-oval-unisex',
    name: 'GM Oval Unisex',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c84bd4fadada33fe329c68373a731f54.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c84bd4fadada33fe329c68373a731f54.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2ec3faed094ce595b9129857999c5cd9.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aadb51ddea3dd667941915be591cb526.jpg'
    ],
    description: 'Classic oval frame style designed for a universal fit. Features a sleek black frame with versatile lens options including clear, dark gray polarized, and light blue tinted lenses.'
  },
  {
    id: 'korean-style-anti-beam',
    name: 'Korean Style & Anti Beam',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/eda9f55a9948366088a260d99418c6ab.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/eda9f55a9948366088a260d99418c6ab.jpg'
    ],
    description: 'Brown tortoiseshell round frame sunglasses with clear lenses and silver metal arms'
  },
  {
    id: 'korean-style-square-frame',
    name: 'Korean Style Square Frame',
    price: 15.00,
    category: 'square',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/bb9edd676225bd47ae99259e02e2e062.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/bb9edd676225bd47ae99259e02e2e062.jpg'
    ],
    description: 'Korean style square frame sunglasses available in three variations: black frame with dark lenses, tortoiseshell brown frame with dark lenses, and black frame with purple gradient lenses'
  },
  {
    id: 'ladies-cateye',
    name: 'Ladies Cateye',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b660e2ac6a02f9f189eb76cf51ea54e6.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b660e2ac6a02f9f189eb76cf51ea54e6.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/10d508ec133930ffa9ee3e75f897559d.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/6a90d4acf6b6cf42061a69f235864342.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/339a5eae67fe2d405d3de911112d40a3.jpg'
    ],
    description: 'Classic ladies cateye sunglasses with stylish frames and quality lenses'
  },
  {
    id: 'large-cat-eye',
    name: 'Large Cat Eye',
    price: 10.00,
    category: 'cat-eye',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/cac9bd4f789b30848960ac098672ad1b.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/cac9bd4f789b30848960ac098672ad1b.jpg'
    ],
    description: 'Large cat eye sunglasses with black frame, dark gray polarized lenses, and thin black arms. Perfect for a bold, vintage-inspired look.'
  },
  {
    id: 'male-half-frame-sunglasses',
    name: 'Male Half Frame Sunglasses',
    price: 10.00,
    category: 'half-frame',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b583a3c3a326aa251331e526e0895758.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b583a3c3a326aa251331e526e0895758.jpg'
    ],
    description: 'Sophisticated male half frame sunglasses featuring a sleek black and gold metal frame with dark gray polarized lenses and black plastic arms. Perfect for a refined, modern look.'
  },
  {
    id: 'metal-half-frame',
    name: 'Metal Half Frame',
    price: 10.00,
    category: 'sunglasses',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/88ce15db049e36632c365f4253859604.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/88ce15db049e36632c365f4253859604.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/8225ad133ad672b966e967ea9477eeb6.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b099e49ddfda8356587d67f1a085e408.jpg'
    ],
    description: 'Silver metal frame with black top half and dark gray polarized lenses'
  },
  {
    id: 'metal-frameless-women',
    name: 'Metal Frameless Women Sunglasses',
    price: 15.00,
    category: 'women',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fee00223e967a4edab95fc596023293d.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fee00223e967a4edab95fc596023293d.jpg'
    ],
    description: 'Minimalist frameless design with gold metal bridge and arms, brown gradient polarized lenses'
  },
  {
    id: 'nd-dimming-glasses',
    name: 'ND Dimming Glasses',
    price: 30.00,
    category: 'premium',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aa372830d6cc97a4690cd0a1f6a0be5f.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aa372830d6cc97a4690cd0a1f6a0be5f.jpg'
    ],
    description: 'Professional-grade ND dimming glasses with flip-up design and dark gray polarized lenses for camera lens filter comparison'
  },
  {
    id: 'male-optical-polarized',
    name: 'Male Optical Polarized',
    price: 30.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fc291c45da5daea3557b03d6db93f37f.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/fc291c45da5daea3557b03d6db93f37f.jpg'
    ],
    description: 'Premium male optical polarized sunglasses featuring a sleek black and silver metal frame. Available in three distinct lens variations: clear lens for everyday wear, vibrant orange polarized lens for enhanced contrast, and classic dark gray/black polarized lens for maximum sun protection.',
    frameVariations: [
      { id: 'clear', name: 'Clear Lens', imageIndex: 0 },
      { id: 'orange', name: 'Orange Polarized', imageIndex: 0 },
      { id: 'dark-gray', name: 'Dark Gray Polarized', imageIndex: 0 }
    ]
  },
  {
    id: 'male-retro',
    name: 'Male Retro',
    price: 20.00,
    category: 'retro',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f315fd6a88f64b126b189e28f22c2d94.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f315fd6a88f64b126b189e28f22c2d94.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9f6b83c72a2548d88f50771bd52f8ec1.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/a6aac7bd9875eddd93894fcf28e9cd6f.jpg'
    ],
    description: 'Classic retro-style sunglasses with polarized lenses. Features multiple frame styles including black square with tortoiseshell brown arms, sleek black metal front, and distinctive black hexagonal frame with red accents.'
  },
  {
    id: 'male-retro-thick-oval',
    name: 'Male Retro Thick Oval',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/790720fd4510e0481445370600967908.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/790720fd4510e0481445370600967908.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/cf87f1ff68201264784b8feaa866731b.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/95da8c98739ab544662b52cef446e749.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/3e3dc1e4b3f2656bc9db382c4cb4b12d.jpg'
    ],
    description: 'Timeless retro oval sunglasses with thick, substantial frames that make a bold statement. Features premium polarized lenses in multiple color options paired with tortoiseshell brown and olive green arms. Perfect for vintage-inspired style with modern comfort and UV protection.'
  },
  {
    id: 'man-gm-thick-retro-oval',
    name: 'man GM thick retro oval',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b4658cd4a2d305c61629d31ab38268e5.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b4658cd4a2d305c61629d31ab38268e5.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ef902ef8118f5dd7352bac79084fc680.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/89f13cd1a7131422b8ae39a1f557ce00.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2426b3ad1bfa9655553e8019ec438560.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1171081a658955914ac542ce1d3db6b9.jpg'
    ],
    description: 'Bold retro oval sunglasses with thick, substantial frames that command attention. Features premium polarized lenses in five stunning color options: vibrant orange/amber, classic dark gray/black, crisp light blue, gradient blue, and rich brown. Perfect for making a vintage-inspired statement with modern UV protection.'
  },
  {
    id: 'men-women-small-square-frame',
    name: 'Men and Women Small Square Frame Sunglasses',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/db18ab23c48ba5264dafdc6527c4b771.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/db18ab23c48ba5264dafdc6527c4b771.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5ea5bbdc3f708a8c6a08f5c2d6366260.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e70b822210bb7309841add6a9149a5e5.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ffce630e9ed3bca3c5f5c07ace631a86.jpg'
    ],
    description: 'Unisex small square frame sunglasses with polarized lenses. Available in multiple frame and lens color combinations.'
  },
  {
    id: 'men-square-polarized',
    name: 'Men Square Polarized',
    price: 20.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0106c95c167a4eebf7dd77c5b6fbf6b7.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0106c95c167a4eebf7dd77c5b6fbf6b7.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f03bb54c814e2886be2200030837cadc.jpg'
    ],
    description: 'Men square polarized sunglasses with black metal frame and polarized lenses'
  },
  {
    id: 'metal-double-bridge',
    name: 'Metal Double Bridge Sunglasses',
    price: 20.00,
    category: 'sunglasses',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/13a8e0891eb2289610078c03aa4dbb7f.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/13a8e0891eb2289610078c03aa4dbb7f.jpg'
    ],
    description: 'Classic metal double bridge design with polarized lenses. Available in clear frame with dark gray or light blue gradient lenses.'
  },
  {
    id: 'retro-box',
    name: 'Retro Box',
    price: 20.00,
    category: 'sunglasses',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/77a54a8c9d3bf92d8bdc85403bebbe8b.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/77a54a8c9d3bf92d8bdc85403bebbe8b.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/790daa937526cb5acef1f3233b625f6b.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/14db566ee0d20db071bafb39b9fdec1c.jpg'
    ],
    description: 'Vintage-inspired retro box sunglasses with acetate frame and metal bridge. Features polarized lenses for UV protection and style.',
    tags: ['retro', 'vintage', 'polarized', 'uv-protection']
  },
  {
    id: 'new-retro-frameless',
    name: 'New Retro Frameless',
    price: 15.00,
    category: 'frameless',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7056f92ee23cecc81f564c59d6da62cc.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7056f92ee23cecc81f564c59d6da62cc.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7601edf1fae3f94527cd320a6117d36e.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4441efca628112386cf6eb13c754b5e8.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/112b71a0a031a82bc11f4a5b651f845f.jpg'
    ],
    description: 'Vintage-inspired frameless sunglasses with clear lenses and gold/black metal accents'
  },
  {
    id: 'night-vision',
    name: 'Night Vision',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4927e162a594afafd98485b762a9be87.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4927e162a594afafd98485b762a9be87.jpg'
    ],
    description: 'Premium night vision sunglasses with gold metal frame and yellow-tinted lenses for enhanced night driving visibility'
  },
  {
    id: 'oval-unisex',
    name: 'Oval Unisex',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/745edf00a1300f2cad9c7c2d8ff0569f.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/745edf00a1300f2cad9c7c2d8ff0569f.jpg'
    ],
    description: 'Classic oval unisex sunglasses with tortoiseshell and dark brown acetate frames and dark polarized lenses',
    variations: [],
    inStock: true
  },
  {
    id: 'photochromic',
    name: 'Photochromic',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1ac343d284b4a0691cff1b858f965954.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1ac343d284b4a0691cff1b858f965954.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7beb9c662ce58576bdd04b2ba0ea9caf.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/16f05d28100f90543bc3e58ec1d865c6.jpg'
    ],
    description: 'Advanced photochromic glasses with black metal frames and clear lenses with red accent details. Lenses adapt to light conditions for optimal vision.',
    variations: [],
    inStock: true
  },
  {
    id: 'polarized-club-master',
    name: 'Polarized Club Master',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/80757fe4ce05c858dfc708b02e999c44.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/80757fe4ce05c858dfc708b02e999c44.jpg'
    ],
    description: 'Premium polarized club master sunglasses with tortoiseshell and black acetate frames, gold metal accents, and dark polarized lenses. Includes branded packaging.',
    variations: [],
    inStock: true
  },
  {
    id: 'polarized-sunglasses',
    name: 'Polarized Sunglasses',
    price: 20.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f9626d3f9c7079fc4aa6472dde5c8d6e.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f9626d3f9c7079fc4aa6472dde5c8d6e.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/69d2b2afee110e1daf551275d9a64678.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7452c3914b124b364bbb1468e0cf47d8.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c27eb19b3a2dc2834385dabe3c8e679e.jpg'
    ],
    description: 'Premium polarized sunglasses with black and tortoiseshell acetate frames, gold metal accents, and dark or brown polarized lenses. Perfect for any occasion.',
    variations: [],
    inStock: true
  },
  {
    id: 'polarized-photochromic',
    name: 'Polarized Photochromic',
    price: 20.00,
    category: 'Sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/40e1f94b688f31ab456393d727edecf0.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/40e1f94b688f31ab456393d727edecf0.jpg'
    ],
    description: 'Polarized photochromic glasses with black acetate frame and gold metal accents. Features clear lenses with photochromic technology that adapts to light conditions.',
    variations: [],
    inStock: true
  },
  {
    id: 'raddisom-polarized-magnetic',
    name: 'Raddisom Polarized Anti-Ultraviolet Magnetic Lens',
    price: 40.00,
    category: 'Sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e9b7293d8cda68c28829dbdbf97ff6b4.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e9b7293d8cda68c28829dbdbf97ff6b4.jpg'
    ],
    description: 'Premium raddisom polarized anti-ultraviolet magnetic lens sunglasses collection. Features black acetate frames with gold metal accents, multiple lens color options (clear, dark, yellow, blue-tinted), and includes green carrying case.',
    variations: [],
    inStock: true
  },
  {
    id: 'rectangle-unisex',
    name: 'Rectangle Unisex',
    price: 15.00,
    category: 'Sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b282b65952499ada2d3ff73a223b6d32.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b282b65952499ada2d3ff73a223b6d32.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/61ad3dbe11055e64f5a1e96a20aa2a7e.jpg'
    ],
    description: 'Rectangle unisex sunglasses collection featuring black acetate frames with gold metal accents. Available in multiple lens colors including clear, yellow, dark, and blue-tinted options.',
    variations: [],
    inStock: true
  },
  {
    id: 'retro-square',
    name: 'Retro Square',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aba16ac4083cb88a572926767c8cdda8.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/aba16ac4083cb88a572926767c8cdda8.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c16639264033f76afc21a241ff50d74f.jpg'
    ],
    description: 'Classic retro square sunglasses with polarized lenses',
    variations: [],
    inStock: true
  },
  {
    id: 'round-retro',
    name: 'Round Retro',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0ca27b4caf58c0f5f5143844714fc4ba.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/0ca27b4caf58c0f5f5143844714fc4ba.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b8843e5f3fbad581359026da4f48b8c1.jpg'
    ],
    description: 'Vintage round retro sunglasses with gradient and polarized lens options',
    variations: [],
    inStock: true
  },
  {
    id: 'small-rectangle-men',
    name: 'Small Rectangle Men',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/59985deafadccdcbda8ea07913ef30c4.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/59985deafadccdcbda8ea07913ef30c4.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/b248915cf14a6c7c9422bdfa4d871f4f.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7834a506d7d242c155f1e44a070e242f.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/701405f551126ec72f5db0dc4e350865.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/850373a3773814b4dba3dedad72acc17.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/03085894ccde95caa4830542d7b7b3b0.jpg'
    ],
    description: 'Sleek small rectangle sunglasses for men with multiple lens tint options',
    variations: [],
    inStock: true
  },
  {
    id: 'stylish-cateye',
    name: 'Stylish Cateye',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ba212dea44578925883494f580361a03.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ba212dea44578925883494f580361a03.jpg'
    ],
    description: 'Elegant cateye sunglasses with black and brown tortoiseshell acetate frame and gold metal accents. Features gradient brown lenses for a sophisticated look.',
    variations: [],
    inStock: true
  },
  {
    id: 'stylish-round-female',
    name: 'Stylish Round Female',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c06c8b11a3ea052ecdc1448742fef59d.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c06c8b11a3ea052ecdc1448742fef59d.jpg'
    ],
    description: 'Chic round sunglasses with black metal frames and gold metal accents. Available with various lens colors including dark purple, blue gradient, and brown gradient.',
    variations: [],
    inStock: true
  },
  {
    id: 'thick-square-retro',
    name: 'Thick Square Retro',
    price: 10.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7f763b98ef16813880928426059fc02a.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7f763b98ef16813880928426059fc02a.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/14189bec437de93e44eb45e29dfcb271.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7c6511819f324af4cbb5ea65dc223c4e.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4e39ab428dfe7c877004e6ec015ffab8.jpg'
    ],
    description: 'Bold retro-inspired square sunglasses with thick acetate frames. Available in multiple frame colors (clear transparent, tortoiseshell brown, white, black) with dark polarized lenses.',
    variations: [],
    inStock: true
  },
  {
    id: 'unisex-octagon',
    name: 'Unisex Octagon',
    price: 15.00,
    category: 'sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/dda0079a7f4f2319bffd71fc36a99946.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/dda0079a7f4f2319bffd71fc36a99946.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/1468be8e258cae0687018776367374f1.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/8e54fbb8b20c720ce5a6e23975faac55.jpg'
    ],
    description: 'Modern octagon-shaped sunglasses with black and gold metal frames. Features dark polarized lenses and is suitable for all genders. Available with various lens colors including green, blue gradient, and pink gradient.',
    variations: [],
    inStock: true
  },
  {
    id: 'retro-unisex-small-thick',
    name: 'Small Thick Retro Unisex',
    price: 10.00,
    category: 'Sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9795e9e518bca2ee55a6e54475a88f92.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9795e9e518bca2ee55a6e54475a88f92.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/2cd907002f133957979165e4071f5e99.jpg'
    ],
    description: 'Classic retro style with thick acetate frames and gold metal accents. Features light purple-tinted and dark polarized lens options.',
    variations: [],
    inStock: true
  },
  {
    id: 'wooden-frame-sunglasses',
    name: 'Wooden Frame Sunglasses',
    price: 10.00,
    category: 'Sunnies',
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ae06becdbd341ada84eed5ac7c5685c9.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/ae06becdbd341ada84eed5ac7c5685c9.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/67e8e1f3a15c51f4e621743aeee60895.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/d0a04a8eb84df11039f4b021d00c20be.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5bd0aa13880a4741fc2978859f33967c.jpg'
    ],
    description: 'Eco-friendly wooden frame sunglasses with dark wood-grain arms and dark polarized lenses. Sustainable style for outdoor adventures.',
    variations: [],
    inStock: true
  }
];

export const sunniesProducts = rawSunnies.map((item, index) => ({
  id: item.id || `sun-${index + 1}`,
  name: item.name,
  price: item.price,
  image: item.image || GENERIC_SUNNIES_PLACEHOLDER,
  images: item.images || [item.image || GENERIC_SUNNIES_PLACEHOLDER],
  description: item.description || 'Premium eye protection meets cutting-edge style. Designed to make a statement.',
  variations: item.variations || [],
  frameVariations: item.frameVariations || [],
  category: item.category || 'sunnies',
  tags: item.tags || [],
  inStock: item.inStock !== undefined ? item.inStock : true
}));

export const tinyTreasuresProducts = [
  {
    id: 'tt-1',
    name: 'Hannah Martin',
    price: 40.00,
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9ded0a21ec91b483a19f3f9add492737.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9ded0a21ec91b483a19f3f9add492737.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c5ff194e53be0aaa50756c0562d56056.jpg'
    ],
    description: 'Elegant and timeless timepiece for any occasion.',
    category: 'tiny-treasures'
  },
  {
    id: 'tt-2',
    name: 'Heiheipi Ladies Watch',
    price: 30.00,
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7090e660ecf343b82529a290fe4d16a1.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/7090e660ecf343b82529a290fe4d16a1.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/9d81ee50d3662e8ef04fba8913c3faa3.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/5192524f942840880cc43afe77d3c75b.jpg'
    ],
    description: 'Chic design crafted for the modern woman.',
    category: 'tiny-treasures'
  },
  {
    id: 'tt-3',
    name: 'SKMEI Men\'s Watch',
    price: 60.00,
    image: 'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f1bf4b3d0d74df4124408fe08d21cb56.jpg',
    images: [
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/f1bf4b3d0d74df4124408fe08d21cb56.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/e90f92efdf20740775eb433eb5fa2afc.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/c084413d80337c233ad6653c32e6109f.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/016ebf2455720512d2683e4cddbd3e12.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/3c45baeedf4bd6710b9ab71486f3a9a2.jpg',
      'https://horizons-cdn.hostinger.com/e9f046c8-e722-47cb-941a-fae0ccba024f/4c5c7e46dc4a9619e27440da80a57d39.jpg'
    ],
    description: 'Bold aesthetics meeting precision engineering.',
    category: 'tiny-treasures'
  }
];

export const getAllProducts = () => [...sunniesProducts, ...tinyTreasuresProducts];
export const getProductById = (id) => getAllProducts().find(product => product.id === id);
export const getProductsByCategory = (category) => {
  if (category === 'sunnies') return sunniesProducts;
  if (category === 'tiny-treasures') return tinyTreasuresProducts;
  return getAllProducts();
};