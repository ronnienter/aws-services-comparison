# AWS Services Comparison Tool

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://aws-services-comparison-25bnm6l2f-ronnienters-projects.vercel.app)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

🚀 **[Live Demo](https://aws-services-comparison-25bnm6l2f-ronnienters-projects.vercel.app)**

A modern web application for comparing Amazon Web Services with detailed information about features, pricing models, and use cases.

## ✨ Features

- **Service Comparison**: Side-by-side comparison of AWS services
- **Smart Filtering**: Filter by category, free tier, and search functionality  
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean interface with AWS-themed colors

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Python FastAPI (optional - currently uses mock data)
- **Deployment**: Vercel

## 🚀 Quick Start

### Frontend Only (Current Deployment)
```bash
git clone https://github.com/ronnienter/aws-services-comparison.git
cd aws-services-comparison/frontend
npm install
npm run dev
```

### Full Stack (Optional)
```bash
# Backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

## 📋 Available Services

- **Compute**: EC2, Lambda
- **Storage**: S3
- **Database**: RDS, DynamoDB  
- **Networking**: CloudFront, API Gateway

Each service includes pricing, features, use cases, and free tier details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details.
