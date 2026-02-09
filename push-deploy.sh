#!/bin/bash

# Push to GitHub and Deploy Script
# Run this to update your Twilio Voice AI

echo "🚀 Starting deployment..."

# Change to project directory
cd /Users/06yildizlimo/Desktop/luxury-limousine-landing-page

# Add all changes
echo "📦 Adding changes..."
git add -A

# Commit
echo "💾 Committing..."
git commit -m "Update greeting message - always welcome"

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Done! Now:"
echo "1. Go to https://vercel.com/06s-projects-84ddb179/luxury-limousine-landing-page/deployments"
echo "2. Click ⋮ and select 'Redeploy'"
echo "3. Wait 1-2 minutes"
echo "4. Call +1 (628) 200-0623 to test!"

