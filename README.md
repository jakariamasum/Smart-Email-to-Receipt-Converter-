# Frontend - Smart Email-to-Receipt Converter

A modern Next.js frontend application for converting donation confirmation emails into professional PDF tax receipts.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Backend API running (see backend documentation)

### Installation

1. **Clone and navigate to frontend**:
   \`\`\`bash
   git clone https://github.com/jakariamasum/Smart-Email-to-Receipt-Converter-
   cd Smart-Email-to-Receipt-Converter-
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure environment**:
   \`\`\`bash

   # Create .env.local file

   echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env.local
   \`\`\`

4. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open application**: http://localhost:3000

## 🛠️ Technology Stack

### Core Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Forms**: React Hook Form for performant form handling
- **Icons**: Lucide React for consistent iconography

## 🎨 Component Architecture

**Features:**

- Email text input with validation
- Real-time form validation using React Hook Form
- API communication with loading states
- Error handling with user-friendly messages
- PDF generation and download management

### Sample Test Data

\`\`\`
Subject: Your Donation to Hope Foundation

Hi John Doe,

Thank you for your generous donation!

Amount: $100.00
Date: May 15, 2025
Payment Method: Credit Card
Transaction ID: HF-2025-000123
Charity Name: Hope Foundation
Charity Number: 123456789RR0001

Regards,
Hope Foundation
\`\`\`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:

- **GitHub Issues**: Bug reports and feature requests
- **Documentation**: Check component comments and README files
- **Community**: Join our Discord server for discussions

---

**Built with Next.js for modern web experiences**
