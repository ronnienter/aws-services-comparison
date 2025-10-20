# AWS Services Comparison Tool

A full-stack web application for comparing Amazon Web Services (AWS) with detailed information about features, pricing models, and use cases. Built with React + TypeScript frontend and Python FastAPI backend.

![AWS Services Comparison](https://via.placeholder.com/800x400/667eea/ffffff?text=AWS+Services+Comparison+Tool)

## Features

- **Comprehensive Service Database**: 10+ AWS services with detailed information
- **Advanced Filtering**: Filter by category, free tier availability, and search functionality  
- **Side-by-Side Comparison**: Compare multiple services in a detailed table view
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Search**: Instant search through service names, descriptions, and features
- **Professional UI**: Clean, modern interface with smooth animations

## Tech Stack

### Backend
- **Python 3.8+**
- **FastAPI** - Modern, fast web framework for APIs
- **Uvicorn** - ASGI server
- **Pydantic** - Data validation using Python type hints

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API requests
- **CSS3** - Custom styling with modern CSS features

## Project Structure

```
cloud-service-comparison/
├── backend/
│   ├── main.py              # FastAPI application entry point
│   ├── aws_data.py          # AWS services data and models
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API service layer
│   │   ├── types/          # TypeScript type definitions
│   │   ├── App.tsx         # Main application component
│   │   ├── App.css         # Application styles
│   │   └── main.tsx        # Application entry point
│   ├── package.json        # Node.js dependencies
│   ├── vite.config.ts      # Vite configuration
│   └── tsconfig.json       # TypeScript configuration
└── README.md               # This file
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Python 3.8 or higher** - [Download Python](https://python.org/downloads/)
- **Node.js 16 or higher** - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd cloud-service-comparison
```

### 2. Backend Setup

Navigate to the backend directory and set up the Python environment:

```bash
cd backend

# Create a virtual environment (recommended)
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\\Scripts\\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup

Navigate to the frontend directory and install Node.js dependencies:

```bash
cd ../frontend

# Install dependencies
npm install
# or if you prefer yarn:
# yarn install
```

## Running the Application

### Start the Backend Server

From the `backend` directory:

```bash
# Make sure your virtual environment is activated
python main.py
```

The FastAPI backend will start at `http://localhost:8000`

You can view the interactive API documentation at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Start the Frontend Development Server

From the `frontend` directory (in a new terminal):

```bash
npm run dev
# or with yarn:
# yarn dev
```

The React frontend will start at `http://localhost:3000`

### Access the Application

Open your web browser and navigate to `http://localhost:3000` to use the AWS Services Comparison tool.

## API Endpoints

The backend provides the following REST API endpoints:

### Base URL: `http://localhost:8000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| GET | `/services` | Get all services with optional filtering |
| GET | `/services/{service_id}` | Get specific service details |
| GET | `/categories` | Get all available service categories |
| GET | `/services/compare/{service_ids}` | Compare multiple services |

### Query Parameters

**For `/services` endpoint:**
- `category` (optional): Filter by service category
- `free_tier` (optional): Filter by free tier availability (true/false)
- `search` (optional): Search in service names, descriptions, and features

**Example API Calls:**

```bash
# Get all services
curl http://localhost:8000/services

# Get services in the "Compute" category
curl http://localhost:8000/services?category=Compute

# Get services with free tier
curl http://localhost:8000/services?free_tier=true

# Search for storage services
curl http://localhost:8000/services?search=storage

# Get specific service
curl http://localhost:8000/services/ec2

# Compare multiple services
curl http://localhost:8000/services/compare/ec2,lambda,s3
```

## Usage Guide

### 1. Browsing Services
- The main page displays all AWS services in a card-based layout
- Each card shows essential information: name, category, description, pricing model, key features, and use cases

### 2. Filtering Services
- **Category Filter**: Use the dropdown to filter services by category (Compute, Storage, Database, etc.)
- **Free Tier Filter**: Check the "Free Tier Only" checkbox to show only services with free tier offerings
- **Search**: Type in the search box to find services by name, description, or features

### 3. Comparing Services
- Click "Add to Compare" on service cards to select them for comparison
- Select at least 2 services to enable the comparison feature
- Click "Compare Services" to view a detailed side-by-side comparison
- The comparison table shows all service attributes in an easy-to-compare format

### 4. Comparison View
- View detailed comparison table with all service attributes
- See comparison summary with key statistics
- Click the "×" button to return to the main service listing

## Available AWS Services

The application includes detailed information for the following AWS services:

**Compute Services:**
- Amazon EC2 (Elastic Compute Cloud)
- AWS Lambda

**Storage Services:**
- Amazon S3 (Simple Storage Service)

**Database Services:**
- Amazon RDS (Relational Database Service)
- Amazon DynamoDB

**Application Services:**
- Amazon API Gateway
- Amazon SNS (Simple Notification Service)
- Amazon SQS (Simple Queue Service)

**Content Delivery:**
- Amazon CloudFront

**Security Services:**
- AWS IAM (Identity and Access Management)

Each service includes:
- Detailed description
- Service category
- Key features list
- Pricing model information
- Pricing notes and considerations
- Common use cases
- Free tier availability and details

## Development

### Adding New Services

To add new AWS services to the application:

1. Open `backend/aws_data.py`
2. Add a new `AWSService` object to the `aws_services_data` list
3. Include all required fields: id, name, category, description, key_features, pricing_model, pricing_notes, use_cases, free_tier, and free_tier_details

### Customizing Styles

The application uses custom CSS located in `frontend/src/App.css`. The design system includes:
- Consistent color scheme with CSS custom properties
- Responsive design with mobile-first approach
- Modern card-based layout
- Smooth animations and transitions

### Building for Production

To build the frontend for production:

```bash
cd frontend
npm run build
# or with yarn:
# yarn build
```

The built files will be in the `frontend/dist` directory.

## Troubleshooting

### Backend Issues

**Error: "ModuleNotFoundError"**
- Make sure you activated the virtual environment
- Install dependencies with `pip install -r requirements.txt`

**Error: "Port already in use"**
- Change the port in `backend/main.py` or stop the process using port 8000

### Frontend Issues

**Error: "ENOENT: no such file or directory"**
- Make sure you're in the `frontend` directory
- Run `npm install` to install dependencies

**Error: "Network Error" or API calls failing**
- Ensure the backend server is running on `http://localhost:8000`
- Check that CORS is properly configured in the backend

**Build Errors**
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Make sure you're using Node.js version 16 or higher

### General Issues

**Application not loading**
- Check that both backend and frontend servers are running
- Ensure no firewall is blocking the local ports (3000, 8000)
- Try accessing the backend directly at `http://localhost:8000/docs`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- AWS for comprehensive documentation and service information
- FastAPI team for the excellent web framework
- React team for the powerful frontend library
- The open-source community for various tools and libraries used in this project