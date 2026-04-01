#!/bin/bash

# Y-Divine Deployment Script
# Run this in PowerShell or Git Bash to deploy automatically

echo "🚀 Y-Divine Deployment Helper"
echo "================================"

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

echo "✅ Git found!"
echo ""
echo "📌 NEXT STEPS (Do these manually):"
echo ""
echo "1️⃣  Push to GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Create repo: Y-Divine"
echo "   - Then run:"
echo ""
echo "   git branch -M main"
echo "   git remote add origin https://github.com/YOUR_USERNAME/Y-Divine.git"
echo "   git push -u origin main"
echo ""
echo "2️⃣  Deploy to Railway:"
echo "   - Go to https://railway.app"
echo "   - Click 'Login' → 'Login with GitHub'"
echo "   - Click 'New Project' → 'Deploy from GitHub repo'"
echo "   - Select Y-Divine"
echo "   - Wait for deployment..."
echo "   - Get your live URL! 🎉"
echo ""
echo "3️⃣  That's it! Your site will be LIVE!"
echo ""
