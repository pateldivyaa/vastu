# Vastu Science World - Modern Website

A modern, fully responsive Vastu consultation website built with Next.js, Node.js, Express, and MongoDB Atlas.

## 🚀 Features

- **Modern Design**: Clean, elegant UI with smooth animations
- **Responsive**: Fully responsive design for all devices
- **Admin Dashboard**: Complete CMS for managing content
- **API Integration**: RESTful API with MongoDB Atlas
- **Authentication**: Secure admin login system
- **Contact Forms**: Working contact forms with email notifications
- **SEO Optimized**: Meta tags and structured data

## 🛠 Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (Animations)
- **React Hook Form**
- **Axios** (API calls)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **Bcrypt** (Password hashing)

## 📁 Project Structure

```
vastu-consultation-website/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   ├── lib/              # API utilities
│   └── ...
├── server/               # Node.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/        # Custom middleware
│   └── ...
└── package.json          # Root package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vastu-consultation-website
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**
   
   Create `.env` file in the `server` directory:
   ```env
   MONGODB_URI=mongodb+srv://pateldivyad3233_db_user:o791s0XmVT9PuMLD@cluster0.4dsrbry.mongodb.net/vastu_consultation?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### First Time Setup

1. **Create Admin Account**
   - Go to http://localhost:3000/admin/login
   - Click "Create Admin Account"
   - Enter email and password

2. **Add Content**
   - Login to admin dashboard
   - Add services, products, testimonials, and gallery items
   - Manage contact messages

## 📱 Pages

### Public Pages
- **Home** (`/`) - Hero, About, Services, Testimonials
- **About** (`/about`) - Detailed information about Dr. Talsaniya
- **Services** (`/services`) - List of all services
- **Contact** (`/contact`) - Contact form and information
- **Gallery** (`/gallery`) - Photo gallery
- **Testimonials** (`/testimonials`) - Client testimonials

### Admin Pages
- **Login** (`/admin/login`) - Admin authentication
- **Dashboard** (`/admin/dashboard`) - Main admin panel
- **Services** (`/admin/services`) - Manage services
- **Products** (`/admin/products`) - Manage products
- **Testimonials** (`/admin/testimonials`) - Manage testimonials
- **Gallery** (`/admin/gallery`) - Manage gallery
- **Contacts** (`/admin/contacts`) - View contact messages

## 🔧 API Endpoints

### Public Endpoints
- `GET /api/services` - Get all services
- `GET /api/products` - Get all products
- `GET /api/testimonials` - Get all testimonials
- `GET /api/gallery` - Get all gallery items
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Protected)
- `POST /api/auth/login` - Admin login
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service
- Similar CRUD operations for products, testimonials, gallery, contacts

## 🎨 Design Features

- **Color Scheme**: Primary orange, gold, cream, and beige
- **Typography**: Playfair Display (headings), Lato (body)
- **Animations**: Smooth fade, slide, and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant components

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL
3. Deploy

### Backend (Render/Heroku)
1. Create a new web service
2. Connect your GitHub repository
3. Set environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `NODE_ENV`: production
4. Deploy

### Database (MongoDB Atlas)
- Already configured with the provided connection string
- No additional setup required

## 📝 Content Management

### Adding Services
1. Login to admin dashboard
2. Go to Services section
3. Click "Add Service"
4. Fill in details:
   - Title
   - Description
   - Image URL
   - Category (vastu, astrology, numerology, education)
   - Features (optional)
   - Price (optional)

### Adding Products
1. Go to Products section
2. Click "Add Product"
3. Fill in details:
   - Title
   - Description
   - Image URL
   - Price
   - Category (remedies, products, books, accessories)

### Managing Testimonials
1. Go to Testimonials section
2. Add client testimonials with:
   - Name
   - Message
   - Rating (1-5)
   - Designation (optional)
   - Image (optional)

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Rate limiting (can be added)

## 📊 Performance Optimizations

- Image optimization with Next.js
- Lazy loading components
- API response caching
- Database indexing
- CDN ready for static assets

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your MongoDB Atlas connection string
   - Ensure your IP is whitelisted
   - Verify database permissions

2. **Authentication Issues**
   - Clear localStorage and try logging in again
   - Check JWT_SECRET environment variable

3. **Build Errors**
   - Run `npm install` in both client and server directories
   - Check Node.js version compatibility

## 📞 Support

For technical support or questions:
- Email: vastuscienceworld@gmail.com
- Phone: +91 70692 00777

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Vastu Science World**
