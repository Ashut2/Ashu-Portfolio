# 🚀 Ashutosh Shukla - DevOps Portfolio

A modern, retro terminal-themed portfolio website showcasing DevOps skills, projects, and journey. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Portfolio Preview](public/profile.jpeg)

## ✨ Features

- **Retro Terminal Theme**: Inspired by classic OS interfaces with a modern twist
- **Fully Responsive**: Mobile-first design that works on all devices (320px - 1440px+)
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Type-safe**: Built with TypeScript for reliability
- **Performance Optimized**: Static export for blazing-fast load times
- **SEO Friendly**: Complete meta tags and Open Graph support
- **Accessibility**: ARIA labels and keyboard navigation

## 🏗️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + [Simple Icons](https://simpleicons.org/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Space Grotesk, JetBrains Mono, Inter)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx          # Navigation with scroll-spy
│   ├── Hero.tsx            # Hero section with terminal animation
│   ├── About.tsx           # About me with timeline
│   ├── Skills.tsx          # Skills categorized by type
│   ├── Projects.tsx        # Project showcase
│   ├── Experience.tsx      # Work and learning experience
│   ├── Education.tsx       # Educational background (JSON styled)
│   ├── Contact.tsx         # Contact information and links
│   ├── Footer.tsx          # Footer with social links
│   └── ui/
│       ├── TerminalWindow.tsx  # Reusable terminal window component
│       └── Typewriter.tsx      # Typewriter effect component
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── profile.jpeg        # Profile image
├── next.config.ts          # Next.js configuration (static export)
├── tailwind.config.ts      # Tailwind theme customization
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- Yarn (recommended) or npm

### Installation

1. **Navigate to the portfolio directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

To create an optimized production build:

```bash
yarn build
# or
npm run build
```

This will generate a static export in the `out/` directory, ready for deployment.

## 📦 Deployment Options

### Option 1: AWS S3 + CloudFront (Recommended for Learning)

Perfect for practicing AWS deployment skills!

#### Step 1: Build Static Files
```bash
yarn build
```

#### Step 2: Create S3 Bucket
```bash
# Replace 'your-bucket-name' with your desired bucket name
aws s3 mb s3://your-bucket-name --region us-east-1
```

#### Step 3: Configure Bucket for Static Website Hosting
```bash
aws s3 website s3://your-bucket-name --index-document index.html --error-document 404.html
```

#### Step 4: Set Bucket Policy for Public Access
Create a file named `bucket-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy --bucket your-bucket-name --policy file://bucket-policy.json
```

#### Step 5: Upload Files
```bash
cd out
aws s3 sync . s3://your-bucket-name --delete
```

#### Step 6: Create CloudFront Distribution
```bash
aws cloudfront create-distribution \
  --origin-domain-name your-bucket-name.s3.amazonaws.com \
  --default-root-object index.html
```

Your website will be available at the CloudFront URL!

#### Optional: Add Custom Domain
1. Register domain in Route 53
2. Create SSL certificate in ACM
3. Update CloudFront distribution with custom domain
4. Add CNAME record in Route 53

### Option 2: Vercel (Fastest Deployment)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts!

### Option 3: AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Connect your repository
4. Deploy automatically with every push!

### Option 4: AWS EC2 (Advanced)

For hands-on DevOps practice:

1. **Launch EC2 Instance** (Ubuntu 22.04 LTS)
2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install Nginx**:
   ```bash
   sudo apt update
   sudo apt install nginx -y
   ```

4. **Clone and Build**:
   ```bash
   git clone <your-repo>
   cd portfolio
   yarn install
   yarn build
   ```

5. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/portfolio/out;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

6. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  'terminal-bg': '#1a1a2e',      // Main background
  'terminal-accent': '#f9bd2b',   // Primary accent
  'terminal-accent-2': '#e05c2d', // Secondary accent
  // ... more colors
}
```

### Fonts
Update fonts in `app/layout.tsx`:
```typescript
import { Your_Font } from "next/font/google";
```

### Content
All content is in individual component files under `/components/`. Update as needed:
- Personal info: `About.tsx`
- Skills: `Skills.tsx`
- Projects: `Projects.tsx`
- Experience: `Experience.tsx`
- Education: `Education.tsx`
- Contact: `Contact.tsx`

## 🔮 Future Enhancements

- [ ] Contact form with Resend integration
- [ ] Blog/Articles section with MDX
- [ ] GitHub Actions CI/CD pipeline
- [ ] Analytics integration (Vercel Analytics or Umami)
- [ ] Dark/Light mode toggle (currently dark only)
- [ ] Project screenshots/demos
- [ ] Testimonials section

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production (creates `out/` directory)
- `yarn start` - Start production server (not needed for static export)
- `yarn lint` - Run ESLint

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 18.x or higher
- Delete `node_modules` and `.next` folders, then reinstall
- Check for TypeScript errors with `yarn lint`

### Deployment Issues
- Verify `output: 'export'` is set in `next.config.ts`
- Check that all images use `unoptimized: true`
- Ensure no server-side features (API routes, ISR, etc.)

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contact

**Ashutosh Shukla**
- Email: ashutosh.shukla@gmail.com
- LinkedIn: [linkedin.com/in/ashutosh1shukla](https://linkedin.com/in/ashutosh1shukla)
- GitHub: [github.com/Ashut2](https://github.com/Ashut2)

---

**Built with ❤️ using DevOps principles**

*"Be less Impressed & More Involved!"*
