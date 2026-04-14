#!/bin/bash
set -e

echo "🚀 Deploying mitamnim to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to production
echo "🔨 Building and deploying to production..."
vercel --prod --yes

echo ""
echo "✅ Deployment complete!"
echo "📅 Deployed at: $(date)"
